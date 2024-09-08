import type { Metadata } from "next";
import "@styles/globals.css";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ScrollToTopButton from "@components/ButtonScrollTop";

export const metadata: Metadata = {
  title: "Nắng Yêu Thương",
  description: "nangyeuthuong.org",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/images/nang-yeu-thuong-raw-logo.png"
          sizes="64x64"
        />
      </head>
      <body>
        <header>
          <Header />
        </header>
        <main>
          <section>{children}</section>
          <section id="scroll">
            <ScrollToTopButton />
          </section>
        </main>
        <hr />

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
