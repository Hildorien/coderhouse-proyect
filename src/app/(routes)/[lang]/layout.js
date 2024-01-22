
import Navbar from "@/app/components/ui/navbar/Navbar";
import Footer from "@/app/components/ui/footer/Footer";
import CartProvider from "@/app/components/context/CartContext";
import AuthProvider from "@/app/components/context/AuthContext";

/***
 * This is the layout component for the app. Since it is inside the [lang] folder, we can pass along the language parameter to the Navbar
 */
export default async function Layout({ params: { lang }, children }) {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <AuthProvider>
                    <CartProvider>
                        <Navbar lang={lang} />
                        {children}
                        <Footer />
                    </CartProvider>
                </AuthProvider>
            </div>
        </>
    )
}