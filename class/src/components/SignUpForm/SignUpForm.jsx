import React, { useState } from "react";
import { authHandler } from "../../api/auth";
import authAction from "../../constants/authAction";
import {useNavigate} from "react-router-dom";
import routes from "../../constants/routes"

const SignUpForm = () => {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        password: "",
    });

    const [error, seterror] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate();


    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true)
        authHandler(authAction.signUp, user)
            .then(() => navigate(routes.signIn, {state: {success:true}}))
            .catch((err) => console.log(err)).finally(()=>setIsLoading(false));
    };

    return (
        <form onSubmit={submitHandler}>
            <label>userName</label>
            <input
                onChange={(e) => {
                    setUser((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                    }));
                }}
                placeholder="userName"
                name="userName"
            />
            <label>email</label>
            <input
                onChange={(e) => {
                    setUser((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                    }));
                }}
                placeholder="email"
                name="email"
            />
            <label>password</label>
            <input
                onChange={(e) => {
                    setUser((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                    }));
                }}
                placeholder="password"
                name="password"
            />
            <button type="submit">Sign Up</button>
            {isLoading && <h1>Loading ...</h1>}
        </form>
    );
};

export default SignUpForm;
