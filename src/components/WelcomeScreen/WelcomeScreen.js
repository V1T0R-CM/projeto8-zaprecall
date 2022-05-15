import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../assets/logo.png";


export default function WelcomeScreen(){
    return (
        <div className="welcome-menu">
            <img src={logo} alt="Logotype" />
            <h1>ZapRecall</h1>
            <Link to="/flashcards">
                <button>
                    Iniciar Recall
                </button>
            </Link>
        </div>
    )
}