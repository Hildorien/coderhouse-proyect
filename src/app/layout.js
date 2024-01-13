import './globals.css'
import { Open_Sans } from "next/font/google";

const myFont = Open_Sans({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: 'E-commerce',
  description: 'E-commerce site powered by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        {children}
      </body>
    </html>
  )
}
