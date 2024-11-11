import React, { useState } from "react";
import { authHandler } from "../../api/auth";
import authAction from "../../constants/authAction";
import { useAuthContext } from "../../context/AuthContextProvider";
import { LogInAction } from "../../context/actions";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

import {PacmanLoader} from "react-spinners"

const SignInForm = () => {
    const { dispatch } = useAuthContext();
    const [info, setInfo] = useState({
        userName: "",
        password: "",
        error: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true);
        authHandler(authAction.signIn, info)
            .then((data) => {
                dispatch(LogInAction(data));
                navigate(routes.home);
            })
            .catch((err) =>
                setInfo((prev) => ({ ...prev, error: err.message }))
            )
            .finally(() => setIsLoading(false));
    };


    return (
        <form onSubmit={submitHandler}>
            <label>User Name or Email</label>
            <input
                type="text"
                name="userName"
                onChange={(e) =>
                    setInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                    }))
                }
            />
            <label>Password</label>
            <input
                type="text"
                name="password"
                onChange={(e) =>
                    setInfo((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                    }))
                }
            />
            <button type="submit">Submit</button>
            {isLoading && <PacmanLoader color="#36d7b7" />}
        </form>
    );
};

export default SignInForm;
