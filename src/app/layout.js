import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Crime Reporting Portal - Naveen Kr Gupta",
  description: "Online Crime Reporting Portal for reporting crimes and tracking their status. Created by Naveen Kr Gupta as a college project for educational purposes.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col ">
      {/* <body
        className="min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/logo.jpg')" }}
      > */}
       <Navbar/>
       
        {children}
        <Footer/>
        </body>
    </html>
  );
}
