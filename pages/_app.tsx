import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`bg-[#142F35] min-h-screen flex flex-col text-white ${geistSans.className}`}>
      <nav className="rounded-xl bg-white/10 border-2 border-white/20 px-4 py-2 mt-4 mx-8 flex justify-between items-center">
        <div className="flex gap-4 items-center text-lg font-bold tracking-wide">
          <img src="/logo.png" className="size-8" />
          <p>Signlingo</p>
        </div>
      </nav>
      <Component {...pageProps} />
    </main>
  );
}
