import localFont from "next/font/local";
import "./globals.css";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./Kallisto Light.otf",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// general components
import Nav from "@/components/nav/Nav";
import Footer from "@/components/footer/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <Nav />
        <div className="mx-[30px] md:w-[90%] md:max-w-[1250px] md:mx-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
