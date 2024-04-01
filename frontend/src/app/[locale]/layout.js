import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Fragment } from "react";

const roboto = Roboto({
  subsets: ["latin", "cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={`${roboto.className} `}>
        <Fragment className="flex flex-col min-h-screen ">
          <Header locale={locale} />
          <div className="grow">{children}</div>
          <Footer />
        </Fragment>
      </body>
    </html>
  );
}
