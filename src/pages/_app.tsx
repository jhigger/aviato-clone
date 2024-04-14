import { type AppType } from "next/app";
import { Inter } from "next/font/google";
import { cn } from "~/lib/utils";

import "~/styles/globals.css";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable,
      )}
    >
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
