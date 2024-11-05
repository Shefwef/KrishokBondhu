import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "KrishokBondhu",
  description:
    "Help the farmers to detect diseases in their crops, recommend fertilizers and recommend crops to grow based on the soil type.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
    <html lang="en">
      <body>
        <main className="Relative overflow">
          {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
