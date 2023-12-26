import { useState } from 'react'
import { useAddBirthday } from "../../hooks/useAddBirthday";
import { useGetBirthdays } from '../../hooks/useGetBirthdays';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import './styles.css';


const deleteBirthday = async (id) => {
    deleteDoc(doc(db, "birthdays", String(id)));
    return ('Deleted');
}

export const BdayTracker = () => {
    const { addBirthday } = useAddBirthday();
    const { birthdays } = useGetBirthdays();
    const [description, setDescription] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [personName, setPersonName] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        addBirthday({ personName, description, birthdate });
        setBirthdate("");
        setDescription("");
        setPersonName("");
    };

    return (
        <>
            <div className="bday-tracker">
                <div className="container">
                    <h1>Birthday Tracker</h1>
                    {/*<div className="brithday">
                        <h3> Your Birthday</h3>
                        <h2> September 2nd</h2>
                    </div>
                    */}
                    <div className="summary">
                        <div className="amt">
                            <h4>Birthdays Count: </h4>
                            <p>{birthdays.length}</p>
                        </div>
                    </div>
                    <div className='form-box'>
                        <form className="add-bday" onSubmit={onSubmit}>
                            <div className='text-box'>
                                <input type="text" placeholder="Birthday" value={birthdate} required onChange={(e) => setBirthdate(e.target.value)} />
                                <input type="text" placeholder="Name" value={personName} required onChange={(e) => setPersonName(e.target.value)} />
                                <input type="text" placeholder="Description" value={description} required onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <button type="submit" className='addbtn'> Add Birthday</button>
                        </form>
                    </div>
                </div>
            </div>
            <h1 className='list-title'> Birthdays </h1>
            <div className="birthdays">
                <ul>
                    {birthdays.map((birthday) => {
                        const { personName, description, birthdate, id } = birthday;
                        return (
                            <div className='list-item-div'>
                                <li>
                                    <h3>{personName}</h3>
                                    <h5>{birthdate}</h5>
                                    <p>{description}</p>
                                    {/* <p>{id}</p> */}
                                    <div className='outer'>
                                        <div className='inner'>
                                            <button className='del-btn' onClick={() => { deleteBirthday(id); }}>Delete?</button>
                                        </div>
                                    </div>
                                </li>
                            </div>);
                    })}
                </ul>
            </div>
        </>
    );
};