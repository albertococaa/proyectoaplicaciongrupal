import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {

  /*<Navbar /> esto iría dentro del body suponiendo que vaya en el layout global
  */
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {children}
      </body>
    </html>
  );
}