import {db} from '$lib/firebase/firebase';
import {collection, getDocs } from "firebase/firestore";



export const load = (async () => {
    const postsRef = await getDocs(collection(db,`members/2020/post`));
    const jsonData = [];
    for (const doc of postsRef.docs) {
        jsonData.push(doc.data());
    }
    console.log(jsonData);
})

