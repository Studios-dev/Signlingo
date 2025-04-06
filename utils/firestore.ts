import "@/firebase";
import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { User } from "firebase/auth";
import { createContext, useContext } from "react";

export const FirestoreContext = createContext<null | User | undefined>(null);

const db = getFirestore();

export interface UserData {
  gems: number;
  hearts: number;
  level: number;
  xp: number;
  stage: number;
}

let dataCache: UserData | null = null;

export const getUsersDataCached = () => {
  return dataCache;
};

export const getUsersData = async (user = useContext(FirestoreContext)) => {
  if (dataCache !== null) {
    return dataCache;
  }

  if (!user) {
    throw new Error("User not authenticated");
  }

  const userId = user.uid;

  const [xpDoc, gemsDoc, heartsDoc, levelDoc, stageDoc] = [
    doc(db, "xp", userId),
    doc(db, "gems", userId),
    doc(db, "hearts", userId),
    doc(db, "level", userId),
    doc(db, "stage", userId),
  ];

  let [xp, gems, hearts, level, stage] = await Promise.all([
    getDoc(xpDoc),
    getDoc(gemsDoc),
    getDoc(heartsDoc),
    getDoc(levelDoc),
    getDoc(stageDoc),
  ]);

  const promises = [];

  if (!xp.exists() || xp.data() == undefined) {
    promises.push(setDoc(xpDoc, { value: 0 }));
    // @ts-expect-error If you know about a problem it's no longer a problem - Bloxs
    xp = { data: () => ({ value: 0 }) };
  }

  if (!gems.exists() || gems.data() == undefined) {
    promises.push(setDoc(gemsDoc, { value: 0 }));
    // @ts-expect-error If you know about a problem it's no longer a problem - Bloxs
    gems = { data: () => ({ value: 0 }) };
  }

  if (!hearts.exists() || hearts.data() == undefined) {
    promises.push(setDoc(heartsDoc, { value: 5 }));
    // @ts-expect-error If you know about a problem it's no longer a problem - Bloxs
    hearts = { data: () => ({ value: 5 }) };
  }

  if (!level.exists() || level.data() == undefined) {
    promises.push(setDoc(levelDoc, { value: 1 }));
    // @ts-expect-error If you know about a problem it's no longer a problem - Bloxs
    level = { data: () => ({ value: 1 }) };
  }

  if (!stage.exists() || stage.data() == undefined) {
    promises.push(setDoc(stageDoc, { value: 0 }));
    // @ts-expect-error If you know about a problem it's no longer a problem - Bloxs
    stage = { data: () => ({ value: 0 }) };
  }

  await Promise.all(promises);

  dataCache = {
    xp: xp.data()!.value as number,
    gems: gems.data()!.value as number,
    hearts: hearts.data()!.value as number,
    level: level.data()!.value as number,
    stage: stage.data()!.value as number,
  };

  return dataCache;
};

export const setUserData = async (
  field: "xp" | "gems" | "hearts" | "level" | "stage",
  value: number,
  user = useContext(FirestoreContext)
) => {
  if (!user) {
    throw new Error("User not authenticated");
  }

  const userId = user.uid;
  const targetDoc = doc(db, field, userId);

  dataCache![field] = value;

  await updateDoc(targetDoc, { value: value });
};
