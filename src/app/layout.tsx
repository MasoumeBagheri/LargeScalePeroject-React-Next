import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "./_components/header";
import { Footer } from "./_components/footer";

const figtree = Figtree({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
});

const IRANSans = localFont({
  src: [
    {
      path: "../../public/fonts/IRANSans/IRANSansWeb_UltraLight.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/IRANSansWeb_Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/IRANSansWeb_Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/IRANSansWeb.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/IRANSansWeb_Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/IRANSans/IRANSansWeb_Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-IRANSans",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      dir="rtl"
      className={` dark ${figtree.variable} ${IRANSans.variable}`}
    >
      <body className=" min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
        <Header />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
