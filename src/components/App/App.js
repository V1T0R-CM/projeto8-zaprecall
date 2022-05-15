import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css"
import WelcomeScreen from "../WelcomeScreen/WelcomeScreen"
import ZapScreen from "../ZapScreen/ZapScreen"

export default function App(){
    return (
    <div className="background">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomeScreen />} />
                <Route path="/flashcards" element={<ZapScreen />} />
            </Routes>
        </BrowserRouter>
    </div>
    )
}