import React, { useState } from "react";

const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
    

        const newUser = {firstName, lastName, email, password, confirmPassword}
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name </label> 
                    <input type="text" onChange={ (e) => setFirstName(e.target.value) } value = { firstName } />
                </div>

                <div>
                    <label>Last Name </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } value = { lastName } />
                </div>

                <div>
                    <label>Email </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value = { email } />
                </div>

                <div>
                    <label>Password </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } value = { password } />
                </div>

                <div>
                    <label>Confirm Password </label>
                    <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value = { confirmPassword } />
                </div>
                <input type="submit" value="Create User" />
            </form>


            <div>
                <h4>Your Form Data</h4>
                <p>
            <label>First Name: </label>{ firstName }
            </p>
            <p>
                <label>Last Name: </label>{ lastName }
            </p>
            <p>
                <label>Email: </label>{ email }
            </p>
            <p>
                <label>Password: </label>{ password }
            </p>
            <p>
                <label>Confirm Password: </label>{ confirmPassword }
            </p>
            </div>
        </div>

        
        
    );
};

export default HookForm;
