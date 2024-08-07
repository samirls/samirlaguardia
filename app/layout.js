import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

import { Box } from "@chakra-ui/layout";
import SideNav from "./ui/sidenav/Sidenav";
import Topnav from "./ui/topnav/Topnav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samir's Portfolio",
  description: "Samir's Portfolio, next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Box display="flex">
            <SideNav />
            <Box>
              <Topnav />
              {children}
            </Box>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
