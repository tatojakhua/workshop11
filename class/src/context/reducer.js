import { toggleLocalStorage } from "../utils/jwt";
import { AUTHENTICATE, LOG_IN, LOG_OUT } from "./constants";
import { jwtDecode } from "jwt-decode";

const initialState = {
    isAuthenticated: false,
    user: null,
};

const reducer = (state, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case LOG_IN:
            const { token } = payload;
            const user = jwtDecode(token);
            console.log(user);

            toggleLocalStorage(token);
            return { isAuthenticated: true, user };
        case LOG_OUT:
            toggleLocalStorage();
            return { isAuthenticated: false, user: null };
        case AUTHENTICATE: {
            const user = jwtDecode(payload);
            return { isAuthenticated: true, user };
        }
        default:
            return state;
    }
};

export { initialState, reducer };
