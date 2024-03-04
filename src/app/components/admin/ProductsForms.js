"use client"
import { useState } from "react";
import CustomButton from "@/app/components/ui/buttons/CustomButton.js";
import GoBack from "@/app/components/ui/buttons/GoBack.js";
import Image from "next/image.js";
import { useRouter } from "next/navigation";
import { db, storage } from "@/firebase/config.js";


const createProduct = async (product, file) => {
    const { doc, setDoc } = await import("firebase/firestore");
    const { ref, uploadBytes, getDownloadURL } = await import("firebase/storage");
    const storageRef = ref(storage, product.slug);
    let fileURL = product.image;
    if (file) { // New image was chosen
        const fileSnapshot = await uploadBytes(storageRef, file);
        fileURL = await getDownloadURL(fileSnapshot.ref);
    }
    const docRef = doc(db, "products", product.slug);
    return setDoc(docRef, { ...product, image: fileURL })
        .then(() => console.log("Product added!"));
}


const defaultFormValues = {
    title: {
        en: '',
        es: '',
    },
    description: {
        en: '',
        es: '',
    },
    stock: 0,
    price: 0,
    category: '',
    slug: '',
}

export default function ProductForm({ formValues, translation, lang }) {

    const [values, setValues] = useState(formValues || defaultFormValues);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    }

    /**
     * Note that this function will edit or create a new product in the lang that is currently being used.
     * If a user wants to have a product in multiple languages, they will have to edit it in the other language.
     * Example: 
     * If a user creates a product in English the output will be:
     * {
     * title: {en: "English title", es: ""},
     * description: {en: "English description", es: ""},
     * ... 
     * }
     * After creating, the user can edit the product in Spanish and add the Spanish title and description.
     */
    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'title' || name === 'description') {
            setValues(prevValues => ({
                ...prevValues,
                [name]: {
                    ...prevValues[name],
                    [lang]: value
                }
            }));
        } else {
            setValues(prevValues => ({
                ...prevValues,
                [name]: value
            }));
        }
    }

    const validateData = (formData) => {
        const { stock, price } = formData;
        if (price < 0) {
            throw new Error("Price must be a positive number");
        }
        if (stock < 0) {
            throw new Error("Stock must be a positive number");
        }
    }

    const cleanForm = () => {
        setValues(defaultFormValues);
        setFile(null);
        setError(null);
    }

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setLoading(true);
            validateData(values);
            await createProduct(values, file)
                .then(async () => {
                    cleanForm();
                    // Refresh the page to show the new product
                    await router.refresh();
                    // Go back to the previous page
                    await router.back();
                })
                .catch((error) => setError(error.message))
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="container m-auto mt-6 max-w-lg">
            <GoBack className="text-sm text-blue-500 inderline mb-6" />
            {error && <p className="font-semibold text-red-700 mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="my-12">
                <label>{translation.admin.product_table.slug}: </label>
                <input
                    type="text"
                    name="slug"
                    value={values.slug}
                    onChange={handleChange}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    required
                />

                <label>{translation.admin.product_table.image}: </label>
                {
                    values.image &&
                    <Image
                        src={values.image}
                        alt={values.title}
                        width={280}
                        height={280}
                    />
                }
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    required={values.image ? false : true}
                />

                <label>{translation.admin.product_table.name}: </label>
                <input
                    type="text"
                    name="title"
                    value={values.title[lang]}
                    onChange={handleChange}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    required
                />

                <label>{translation.admin.product_table.price}: </label>
                <input
                    type="number"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    required
                />

                <label>{translation.admin.product_table.in_stock}: </label>
                <input
                    type="number"
                    name="stock"
                    value={values.stock}
                    onChange={handleChange}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    required
                />

                <label>{translation.admin.product_table.category}: </label>
                <input
                    type="text"
                    name="category"
                    value={values.category.toLowerCase()}
                    onChange={handleChange}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    required
                />

                <label>{translation.admin.product_table.description}: </label>
                <input
                    type="text"
                    name="description"
                    value={values.description[lang]}
                    onChange={handleChange}
                    className="p-2 rounded w-full border border-blue-100 block my-4"
                    required
                />
                <CustomButton type="submit">{loading ? "Sending..." : "Send"}</CustomButton>
            </form>
        </div>
    );
}