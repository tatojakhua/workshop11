import routes from "../constants/routes";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import SingIn from "../pages/SignIn/SingIn";
import SignUp from "../pages/SignUp/SignUp";

import AuthGuard from "../Guard/AuthGuard";

const appRoutes = [
    { path: routes.home, Component: Home },
    { path: routes.products, Component: Products, Guard: AuthGuard },
    { path: routes.signIn, Component: SingIn },
    { path: routes.signUp, Component: SignUp },
];

export default appRoutes;
