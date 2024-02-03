export async function fetchTranslation(lang) {
    const products = await fetch(
        `http://localhost:3000/api/translation/${lang}`,
        {
            cache: "force-cache"
        },
    ).then((res) => res.json());
    return products;
}