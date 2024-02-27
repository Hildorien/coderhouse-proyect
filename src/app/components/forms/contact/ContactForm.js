"use client";
import { useState } from "react";
import CustomButton from "@/app/components/ui/buttons/CustomButton";

export default function ContactForm({ translation }) {
    const [values, setValues] = useState({
        email: "",
        text: "",
    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch(`/api/contact`, {
            method: "POST",
            body: JSON.stringify(values),
        });
    };

    return (
        <form onSubmit={handleSubmit} className="my-6">
            <input
                type="email"
                required
                placeholder={`${translation.contact.your_email}...`}
                className="p-2 rounded w-1/2 border border-blue-100 block my-4"
                name="email"
                onChange={handleChange}
            />
            <textarea
                required
                placeholder={`${translation.contact.leave_a_message}...`}
                className="resize-none w-1/2 h-24 p-2 rounded border border-blue-100 block my-4"
                name="text"
                onChange={handleChange}
            />

            <CustomButton type="submit">{translation.contact.send}</CustomButton>
        </form>
    );
}
