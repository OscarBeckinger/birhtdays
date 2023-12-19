import { useState } from 'react'
import { useAddBirthday } from "../../hooks/useAddBirthday";

export const BdayTracker = () => {
    const { addBirthday } = useAddBirthday();
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
                        <div className="income">
                            <h4>Income</h4>
                            <p>$0.00</p>
                        </div>
                        <div className="expenses">
                            <h4>Expenses</h4>
                            <p>$0.00</p>
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
            </div>
        </>
    );
};