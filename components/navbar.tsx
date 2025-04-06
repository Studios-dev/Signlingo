import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import {
  FirestoreContext,
  getUsersData,
  UserData,
  getUsersDataCached,
} from "@/utils/firestore";

export default function Navbar() {
  const user = useContext(FirestoreContext);
  const usersData = getUsersDataCached();
  const [_, forceUpdate] = useState(0);

  useEffect(() => {
    (async () => {
      if (user != null) {
        await getUsersData(user);
		forceUpdate((prev) => prev + 1);
      }
    })();
  }, [user]);

  return (
    <nav className="rounded-xl bg-white/10 border-2 border-white/20 px-4 py-2 mt-4 mx-8 flex justify-between items-center sticky top-4 z-10 backdrop-blur-lg">
      <Link
        className="flex gap-4 items-center text-lg font-bold tracking-wide"
        href="/"
      >
        <img src="/logo.png" className="size-8" />
        <p>Signlingo</p>
      </Link>
      {user && usersData && (
        <div className="flex gap-8 font-semibold ">
          <div className="flex gap-4 items-center motion-preset-blur-up-md">
            <img src="/gem.svg" className="size-7" />
            <p>{usersData.gems}</p>
          </div>
          <div className="flex gap-4 items-center motion-delay-100 motion-preset-blur-up-md">
            <img src="/heart.svg" className="size-7" />
            <p>{usersData.hearts}</p>
          </div>
        </div>
      )}
    </nav>
  );
}
