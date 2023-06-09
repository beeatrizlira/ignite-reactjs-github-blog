import { Header } from "@/components/Header";
import "@/styles/globals.scss";
import "react-loading-skeleton/dist/skeleton.css";
import { PostsProvider } from "@/contexts/PostsContext";

import { Nunito } from "next/font/google";

import styles from "./styles.module.scss";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Github Blog",
  icons: {
    icon: "./assets/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} ${styles.app}`}>
        <Header />
        <main>
          <PostsProvider>{children}</PostsProvider>
        </main>
      </body>
    </html>
  );
}
