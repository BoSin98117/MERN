import React, { useState } from "react";

const MoreForms = (props) => {
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
                {firstName.length < 2 && firstName.length > 0 ? (
                <p>First Name must be at least 2 characters</p>
                ) : null}

                <div>
                    <label>Last Name </label>
                    <input type="text" onChange={ (e) => setLastName(e.target.value) } value = { lastName } />
                </div>
                {lastName.length < 2 && lastName.length > 0 ? (
                <p>Last Name must be at least 2 characters</p>
                ) : null}

                <div>
                    <label>Email </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value = { email } />
                </div>
                {email.length < 5 && email.length > 0 ? (
                <p>Email must be at least 5 characters</p>
                ) : null}

                <div>
                    <label>Password </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } value = { password } />
                </div>
                {password.length < 8 && password.length > 0 ? (
                <p>Password must be at least 8 characters</p>
                ) : null}

                <div>
                    <label>Confirm Password </label>
                    <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value = { confirmPassword } />
                </div>
                {confirmPassword !== password ? <p>Passwords must match</p> : null}

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

export default MoreForms;
