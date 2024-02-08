import 'server-only'

const dictionaries = {
    en: () => import('@/dictionaries/en.json').then((module) => module.default),
    es: () => import('@/dictionaries/es.json').then((module) => module.default),
}

/**
 * We can only use the dictionary on server components. If a client component needs to use the dictionary, we need to pass it as a prop from a server component.
 */
export const getDictionary = async (locale) => {
    if (!dictionaries[locale]) {
        throw new Error(`No dictionary found for locale: ${locale}`);
    }
    return dictionaries[locale]();
}