import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/firebase";
import Link from "next/link";
import { FirestoreContext } from "@/utils/firestore";
import { useState, useEffect, useMemo } from "react";
import { User, getAuth } from "firebase/auth";
import Navbar from "@/components/navbar";

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
    <FirestoreContext.Provider value={user}>
      <main
        className={`bg-[#142F35] min-h-screen flex flex-col text-white inter`}
      >
        <Navbar />
        {user === undefined ? <></> : <Component {...pageProps} />}
      </main>
    </FirestoreContext.Provider>
  );
}
