import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata: Metadata = {
  title: "CarHub",
  description: "Descobre os melhores serviços",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    
      <html lang="en">
        <body className="relative">
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
   
  );
}
