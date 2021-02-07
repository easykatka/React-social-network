import { allUsersItemType } from "./types/types";

export const randomArray = (arr:allUsersItemType[] , len:number)  => {  
	const sorted = arr.slice().sort(() => Math.random() - 0.5);
	sorted.length = len
	return sorted;
}

// перемешать и вытащить N рандомных элементов из массива
//array is frozen in strict mode, you'll need to copy the array before sorting it