import { useState, useEffect } from 'react';
import { fetchTranslation } from '@/app/service/translation/translationService';

export function useTranslation(lang) {
    const [translation, setTranslation] = useState({});
    useEffect(() => {
        const getTranslation = async () => {
            const t = fetchTranslation(lang);
            console.log("TRANSLATION", t);
            return t;
        }
        getTranslation().then((t) => setTranslation(t));

    }, [lang]);
    return translation;
}