import { useEffect, useState } from "react";
import { query, collection, where, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from './useGetUserInfo'

export const useGetBirthdays = () => {
    const [birthdays, setBirthdays] = useState([]);
    const birthdayCollectionRef = collection(db, "birthdays")
    const { userID } = useGetUserInfo();
    const getBirthdays = async () => {
        let unsubscribe;
        try {
            const queryBirthdays = query(birthdayCollectionRef, where("userID", "==", userID),
                orderBy("createdAt")
            );

            unsubscribe = onSnapshot(queryBirthdays, (snapshot) => {
                let docs = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    const id = doc.id

                    docs.push({ ...data, id });

                });
                setBirthdays(docs);
            });
        } catch (err) { console.error(err) }
        return () => unsubscribe();
    };

    useEffect(() => {
        getBirthdays();
    }, []);
    return { birthdays };
};