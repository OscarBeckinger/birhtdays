import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddBirthday = () => {
    const birthdayCollectionRef = collection(db, "birthdays");
    const { userID } = useGetUserInfo();
    const addBirthday = async ({ personName, description, birthdate }) => {
        await addDoc(birthdayCollectionRef, {
            userID,
            personName,
            description,
            birthdate,
            createdAt: serverTimestamp(),
        });
    };
    return { addBirthday };
};