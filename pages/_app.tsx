import "@/firebase";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FirestoreContext } from "@/utils/firestore";
import { useState, useEffect } from "react";
import { User, getAuth } from "firebase/auth";
import Navbar from "@/components/navbar";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<null | User | undefined>(undefined);

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Head>
        <title>Signlingo - Master ASL The Engaging Way</title>
      </Head>
      <FirestoreContext.Provider value={user}>
        <main
          className={`bg-[#142F35] min-h-screen flex flex-col text-white inter`}
        >
          <Navbar />
          {user === undefined ? <></> : <Component {...pageProps} />}
        </main>
      </FirestoreContext.Provider>
    </>
  );
}
