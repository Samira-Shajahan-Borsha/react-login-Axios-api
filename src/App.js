import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './LoginForm';
import UserList from "./User-List";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="user-list" element={<UserList />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
