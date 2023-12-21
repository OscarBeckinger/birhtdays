import { useState } from 'react'
import { useAddBirthday } from "../../hooks/useAddBirthday";
import { useGetBirthdays } from '../../hooks/useGetBirthdays';

//DELETE BIRTHDAY BUTTON AND IMPORTS (BUTTON IMPLEMENTED NEAR BOTTOM)
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
const deleteBirthday = async (id) => {
    deleteDoc(doc(db, "birthdays", String(id)));
    console.log('Test Delete');
    return ('Deleted')
}

//delete button test function
//const btest = async (id) => {
//    console.log(String(id))
//}

export const BdayTracker = () => {
    const { addBirthday } = useAddBirthday();
    const { birthdays } = useGetBirthdays();
    const [description, setDescription] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [personName, setPersonName] = useState("");




    const onSubmit = async (e) => {
        e.preventDefault();
        addBirthday({ personName, description, birthdate });
    };
    return (
        <>
            <div className="bday-tracker">
                <div className="container">
                    <h1>Birthday Tracker</h1>
                    <div className="brithday">
                        <h3> Your Birthday</h3>
                        <h2> September 2nd</h2>
                    </div>
                    <div className="summary">
                        <div className="amtBdays">
                            <h4>Birthdays Count:</h4>
                            <p>0</p>
                        </div>
                    </div>
                    <form className="add-bday" onSubmit={onSubmit}>
                        <input type="text" placeholder="Birthday" required onChange={(e) => setBirthdate(e.target.value)} />
                        <input type="text" placeholder="Name" required onChange={(e) => setPersonName(e.target.value)} />
                        <input type="text" placeholder="Description" required onChange={(e) => setDescription(e.target.value)} />
                        <button type="submit"> Add Birthday</button>
                    </form>
                </div>
            </div>
            <div className="birthdays">
                <h3> Birthdays</h3>
                <ul>
                    {birthdays.map((birthday) => {
                        const { personName, description, birthdate, id } = birthday;
                        return (
                            <li>
                                <h3>{personName}</h3>
                                <h5>{birthdate}</h5>
                                <p>{description}</p>
                                <p>{id}</p>
                                <button onClick={() => deleteBirthday(id)}>Delete</button>
                            </li>);
                    })}
                </ul>
            </div>
        </>
    );
};