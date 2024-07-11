import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Top from "@/components/Top";

export const metadata = {
  title: "Elysian Odyssey",
  description:
    "Enter the vast expanse of Elysian Odyssey, a revolutionary MMORPG experience that immerses players in a realm of cosmic warfare, mythical beings, and the eternal struggle between light and darkness. This whitepaper serves as a guide to the intricacies of the Elysian universe, providing insights into its lore, gameplay mechanics, and the innovative economic ecosystem at its core.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` `}>
        <Header />
        {children}

        <Footer />
        {/* <Top /> */}
      </body>
    </html>
  );
}
