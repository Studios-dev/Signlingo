import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import Stage from "@/components/stage";

const db = getFirestore();

export default function Learn() {
  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    if (!auth.currentUser && window) {
      router.push("/");
    }
  }, [auth]);

  return (
    <div className="flex flex-col grow py-20 items-center">
      <div className="flex w-96 items-center pb-10">
        <div className="rounded-full h-0.75 bg-[#2E4C53] grow"></div>
        <p className="px-4 text-[#3B6A75] text-base/0 font-semibold">
          Ordering at a Restaurant
        </p>
        <div className="rounded-full h-0.75 bg-[#2E4C53] grow"></div>
      </div>
      <div className="flex flex-col gap-8">
        <Stage />
        <Stage className="-translate-x-18" />
        <Stage className="-translate-x-36" />
        <Stage className="-translate-x-18" />
        <Stage />
      </div>
      <div className="flex w-96 items-center pt-20 pb-10">
        <div className="rounded-full h-0.75 bg-[#2E4C53] grow"></div>
        <p className="px-4 text-[#3B6A75] text-base/0 font-semibold">
          In the Docters Office
        </p>
        <div className="rounded-full h-0.75 bg-[#2E4C53] grow"></div>
      </div>
      <div className="flex flex-col gap-8 mask-b-from-0% mask-b-to-70% w-80 translate-x-24 relative">
        <Stage />
        <Stage className="translate-x-18" />
        <Stage className="translate-x-36" />
        <Stage className="translate-x-18" />
        <Stage />
      </div>
    </div>
  );
}
