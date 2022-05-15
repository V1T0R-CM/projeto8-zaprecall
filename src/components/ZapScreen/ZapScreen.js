import "./style.css";
import logo from "../../assets/logo.png"



function BottomBar(){
    return (
        <div className="bottom-bar">
            0/4 CONCLUÍDOS
        </div>
    )
}

export default function ZapScreen(){
    return (
        <div className="background zapscreen">
            <div className="title">
                <img src={logo} />
                <h1>ZapRecall</h1>
            </div>
            <BottomBar />
        </div>
    )
}