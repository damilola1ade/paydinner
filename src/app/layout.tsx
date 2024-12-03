import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PayDinner",
  description:
    "Dine, Delight, and Earn Cash Back! Turn every date night into an opportunity to earn and get rewarded for your time and taste.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased tracking-tight")}>{children}</body>
    </html>
  );
}
