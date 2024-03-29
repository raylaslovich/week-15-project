import React, {useState} from "react";
import { housesApi } from "../REST/HousesApi";

export const NewHouseForm = (props) => {
    const [name, setName] = useState('');

    const onSubmit = (e) => {
        if (name) {
            housesApi.create({name})
            setName('');
            console.log("im trying")
            console.log(name)
        } else {
            console.log('invalid input');
        }
        e.preventDefault();
        setTimeout(() => {
            props.getHouse();
        }, 1000);
    };

    return (
        <nav className="navbar">
            
            <div> 
                <h1>Let's Build a House</h1>
                <br/>
                <form className="addHouseForm d-flex" onSubmit={onSubmit}>
                    <h2>Enter House Name: &nbsp;&nbsp;</h2>
                    <input
                        type="text"
                        placeholder="House Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                    <button type="submit" className="btn btn-info">Add House</button>
                </form>
            </div> 
        </nav>
    )
};