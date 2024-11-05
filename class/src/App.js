import "./App.css";
import AppRoutes from "./AppRoutes";
import NavBar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <AppRoutes />
        </div>
    );
}

export default App;
