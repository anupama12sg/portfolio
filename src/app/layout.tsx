import { Inter } from "next/font/google";
import { ThemeProvider } from "./provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import Inter font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anu's Portfolio",
  description: "Experience the Minimalist yet Modern Portfolio by Anu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
