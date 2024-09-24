import app from './app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

interface HellfireClub {
  character: string,
  email: string,
  level: string,
  name: string,
}

export async function subscribeHellfireClub(subscription: HellfireClub) {
  const db = getFirestore(app);
  const hellfireClubCollection = collection(db, 'hellfire-club');
  const docRef = await addDoc(hellfireClubCollection, subscription);
  return docRef.id;
}