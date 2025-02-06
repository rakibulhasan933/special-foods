import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Food Next App",
  description: "This is a categorically organized list of foods. Food is any substance consumed to provide nutritional support for the body.[1] It is produced either by plants, animals, or fungi, and contains essential nutrients, such as carbohydrates, fats, proteins, vitamins, and minerals. The substance is ingested by an organism and assimilated by the organism's cells in an effort to produce energy, maintain life, or stimulate growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
