import React from "react";
import { useAuthContext } from "../context/AuthContextProvider";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

const AuthGuard = ({ children }) => {
    const { state } = useAuthContext();
    return (
        <>
            {state.isAuthenticated ? (
                children
            ) : (
                <div>
                    <h1>You ate not AUTHENTICATED</h1>
                    <h4>Please sign in or sign up</h4>
                    <button>
                        <Link to={routes.signIn}>Sign In</Link>
                    </button>
                    <button>
                        <Link to={routes.signUp}>Sign UP</Link>
                    </button>
                </div>
            )}
        </>
    );
};

export default AuthGuard;
