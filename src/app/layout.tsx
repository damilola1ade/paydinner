import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import NextTopLoader from "nextjs-toploader";

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
      <body
        className={clsx(
          dmSans.className,
          "antialiased tracking-tight bg-[#f6f6f6]"
        )}
      >
        <NextTopLoader showSpinner={false} shadow="0" color="#d13800" />
        {children}
      </body>
    </html>
  );
}
