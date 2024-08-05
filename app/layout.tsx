import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MontyCode",
  description: "Assets Resources",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-poppins mx-auto bg-white">
        {children}
      </body>
    </html>
  );
}
