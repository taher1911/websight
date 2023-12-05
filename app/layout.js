import localFont from "next/font/local";
import "./globals.css";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./Kallisto Light.otf",
  display: "swap",
});

// general components
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Nav />

        {children}

        <Footer />
      </body>
    </html>
  );
}
