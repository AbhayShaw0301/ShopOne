import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ShopOne",
  description: "Your one shop destination",
    metadataBase: new URL('https://shopone.dev/shopone/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  );
}
