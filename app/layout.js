import "styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Folks Car",
  description: "Discover the world on wheels with our rental service",
  author: "Mojowlekaz",
  keywords: ["car rental", "vehicle rental", "travel", "rent a car"],
  url: "folkscar.xyz",
  type: "website",
  siteName: "Folks Car Rentals",
  publishedDate: "2023-10-28",
  modifiedDate: "2023-10-29",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
