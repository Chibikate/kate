import "./globals.css";
import { Inter } from "next/font/google";
import Navigator from "./components/navigator";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navigator />
        {children}
        <Footer />
      </body>
    </html>
  );
}