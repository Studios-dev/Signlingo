import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { cn } from "@/utils/cn";
import { useRouter } from "next/router";
import Link from "next/link";
import { provider } from "@/firebase";

export default function Home() {
  const auth = getAuth();
  const router = useRouter();

  const signIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider);

      if (res.user) {
        router.push("/learn");
      }
    } catch (e) {
      console.log("smth bad happened", e);
    }
  };

  return (
    <div className="flex h-[70dvh] flex-col items-center justify-center">
      <div className="flex flex-col items-center motion-preset-slide-up motion-duration-1500 gap-6">
        <h1 className="text-5xl/14 font-semibold max-w-lg text-center bg-clip-text text-transparent bg-linear-to-b from-white to-white/70">
          Master ASL The Engaging Way
        </h1>
        <p className="text-white/80 font-medium max-w-md text-center">
          Learn American Sign Language by breaking up the task into short daily
          exersizes, gamified for smth.
        </p>
      </div>
      {auth.currentUser ? (
        <Link
          href="/learn"
          className={cn(
            "mt-8 rounded-xl bg-cyan-800 font-medium text-lg w-72 h-12 border-b-4 border-cyan-900",
            "motion-delay-650 motion-preset-slide-up motion-duration-1000",
            "transition-all hover:focus:border-b-0 hover:focus:translate-y-2 hover:focus:scale-y-92"
          )}
        >
          Get Started
        </Link>
      ) : (
        <button
          className={cn(
            "mt-8 rounded-xl bg-cyan-800 font-medium text-lg w-72 h-12 border-b-4 border-cyan-900",
            "motion-delay-650 motion-preset-slide-up motion-duration-1000",
            "transition-all hover:focus:border-b-0 hover:focus:translate-y-2 hover:focus:scale-y-92"
          )}
          onClick={() => signIn()}
        >
          Get Started
        </button>
      )}
    </div>
  );
}
