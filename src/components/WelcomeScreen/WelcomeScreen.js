import { Link } from "react-router-dom";
import "./style.css";
import logoZap from "../../assets/logoZap.png";


export default function WelcomeScreen(){
    return (
        <div className="welcome-menu">
            <img src={logoZap} alt="Logotype" />
            <h1>ZapRecall</h1>
            <Link to="/flashcards">
                <button>
                    Iniciar Recall
                </button>
            </Link>
        </div>
    )
}