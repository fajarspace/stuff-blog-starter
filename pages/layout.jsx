import Head from "next/head";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

// // Your themeing variables
// const GlobalStyle = createGlobalStyle`
//   :root {
//     --fg: #000;
//     --bg: #fff;
//   }

//   [data-theme="dark"] {
//     --fg: #fff;
//     --bg: #000;
//   }
// `;

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog next auth",
  description: "Generated by create next app",
  image: "", // URL gambar untuk digunakan ketika dibagikan di media sosial
  url: "https://fajarr.space", // URL halaman web Anda
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Tambahkan tag-meta tambahan sesuai kebutuhan */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
      </Head>
      <ThemeProvider>
        <div className={inter.className}>
          <article className="container md:prose">
            <Navbar />
            {children}
            <Footer />
          </article>
        </div>
      </ThemeProvider>
    </>
  );
}
