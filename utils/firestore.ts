import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getUser } from "firebase/auth";

const db = getFirestore();

interface UserData {
  gems: number;
  hearts: number;
  level: number;
  xp: number;
}

export const getUsersData = async () => {
  const user = getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const userId = user.uid;

  const [xpDoc, gemsDoc, heartsDoc, levelDoc] = [
    doc(db, "xp", userId),
    doc(db, "gems", userId),
    doc(db, "hearts", userId),
    doc(db, "level", userId),
  ];

  let [xp, gems, hearts, level] = await Promise.all([
    getDoc(xpDoc),
    getDoc(gemsDoc),
    getDoc(heartsDoc),
    getDoc(levelDoc),
  ]);

  const promises = [];

  if (!xp.exists()) {
    promises.push(setDoc(xpDoc, { value: 0 }));
    xp = { exists: () => true, data: () => ({ value: 0 }) };
  }

  if (!gems.exists()) {
    promises.push(setDoc(gemsDoc, { value: 0 }));
    gems = { exists: () => true, data: () => ({ value: 0 }) };
  }

  if (!hearts.exists()) {
    promises.push(setDoc(heartsDoc, { value: 5 }));
    hearts = { exists: () => true, data: () => ({ value: 5 }) };
  }

  if (!level.exists()) {
    promises.push(setDoc(levelDoc, { value: 1 }));
    level = { exists: () => true, data: () => ({ value: 1 }) };
  }

  await Promise.all(promises);

  return {
    xp: xp.data().value,
    gems: gems.data().value,
    hearts: hearts.data().value,
    level: level.data().value,
  };
};

export const setUserData = async (
  field: "xp" | "gems" | "hearts" | "level",
  value: number
) => {
  const user = getUser();
  if (!user) {
    throw new Error("User not authenticated");
  }

  const userId = user.uid;
  const doc = doc(db, field, userId);

  await updateDoc(doc, { value: value });
};
