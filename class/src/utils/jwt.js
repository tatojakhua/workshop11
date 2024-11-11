import { jwtDecode } from "jwt-decode";

function parseJWT(token) {
    const data = jwtDecode(token);
    return data;
}

function isTokenVAlid(token) {
    const currentTime = Date.now() / 1000;
    const decoded = jwtDecode(token);
    return decoded.exp > currentTime;
}

function toggleLocalStorage(token) {
    if (token) {
        localStorage.setItem("accessToken", token);
    } else {
        localStorage.removeItem("accessToken");
    }
}

export { parseJWT, isTokenVAlid, toggleLocalStorage };
