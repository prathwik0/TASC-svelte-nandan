import { db } from '$lib/firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { memberYear } from '$lib/stores/memberYear';
import type { PageLoad } from '../$types';

export const load: PageLoad = async ({}) => {
	const membersRef = collection(db, 'members', '2020', 'post');
	const membersSnapshot = await getDocs(membersRef);
	const members = membersSnapshot.docs.map((doc) => doc.data());
	console.log(members);
};
