// Middleware to redirect to the preferred locale
// This was copied from official documentation
// https://nextjs.org/docs/app/building-your-application/routing/internationalization

import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

const locales = ["es", "en"];

// Get the preferred locale, similar to above or using a library
function getLocale() {
    const headers = { "accept-language": "en,es;q=0.5" };
    const languages = new Negotiator({ headers }).languages();
    const defaultLocale = "en";

    const locale = match(languages, locales, defaultLocale);

    return locale;
}

const middleware = (request) => {
    // Check if there is any supported locale in the pathname
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = locales.every(
        (locale) =>
            !pathname.startsWith(`/api`) &&
            !pathname.startsWith(`/${locale}/`) &&
            !pathname.startsWith("/favicon") &&
            pathname !== `/${locale}`,
    );

    // Check if the pathname is for a static file
    const pathnameIsForStaticFile = pathname.includes('.');

    // Redirect if there is no locale and the pathname is not for a static file
    if (pathnameIsMissingLocale && !pathnameIsForStaticFile) {
        const locale = getLocale();

        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        const result = NextResponse.redirect(
            new URL(`/${locale}/${pathname}`, request.url),
        );

        return result;
    }
};

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        "/((?!_next).*)",
        // Optional: only run on root (/) URL
        // '/'
    ],
};

export default middleware;
