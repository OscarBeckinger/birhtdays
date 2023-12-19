import { useEffect, useState } from "react";
import { query, collection, where, orderBy } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from './useGetUserInfo'

export const useGetBirthdays = () => {
    const [birthdays, setBirthdays] = useState([]);
    const birthdayCollectionRef = collection(db, "birthdays")
    const { userID } = useGetUserInfo();
    const getBirthdays = async () => {
        try {
            const queryBirthdays = query(birthdayCollectionRef, where("userID", "==", userID),
                orderBy("createdAt")
            );

        } catch (err) { console.error(err) }

    };

    useEffect(() => {
        getBirthdays()
    }, [])
    return { birthdays };
};