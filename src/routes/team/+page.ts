import {db} from '$lib/firebase/firebase';
import {collection, getDocs } from "firebase/firestore";
import {memberYear} from "$lib/stores/memberYear";

const postsRef = await getDocs(collection(db,`members/${memberYear}/post`));
const jsonData = [];
for (const doc of postsRef.docs) {
    jsonData.push(doc.data());
}

console.log(jsonData)