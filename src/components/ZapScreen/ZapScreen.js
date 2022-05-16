import "./style.css";
import logo from "../../assets/logo.png"
import vetor from "../../assets/Vector.png"
import React, { useState } from 'react';


function Content({setOpen, setCardtype, setIcon, setAnswerList, question, answer, answerList}){
    const[flipstatus, setFlipstatus]=React.useState("content")

    function flip(){
        if(flipstatus==="content"){
            setFlipstatus("content fliped")
        }
        else{
            setFlipstatus("content")
        }
    }

    function forget(){
        setOpen(false)
        setCardtype("question-forget")
        setIcon(<ion-icon name="close-circle"></ion-icon>)
        const newAnswers = [...answerList, <ion-icon color="danger" name="close-circle"></ion-icon>];
		setAnswerList(newAnswers);
    }

    function almostForgot(){
        setOpen(false)
        setCardtype("question-almost-forgot")
        setIcon(<ion-icon name="help-circle"></ion-icon>)
        const newAnswers = [...answerList, <ion-icon color="warning" name="help-circle"></ion-icon>];
		setAnswerList(newAnswers);
    }

    function recall(){
        setOpen(false)
        setCardtype("question-recall")
        setIcon(<ion-icon name="checkmark-circle"></ion-icon>)
        const newAnswers = [...answerList, <ion-icon color="success" name="checkmark-circle"></ion-icon>];
		setAnswerList(newAnswers);
    }

    return (
        <div className={flipstatus}>
            <div className="front face">
                {question}
                <img src={vetor} onClick={()=>flip()}/>
            </div>
            <div className="back face">
                {answer}
                <div className="buttons">
                    <button className="forget" onClick={()=>forget()}>Não lembrei</button>
                    <button className="almost-forgot" onClick={()=>almostForgot()}>Quase não lembrei</button>
                    <button className="recall" onClick={()=>recall()}>Zap!</button>
                </div>
            </div>
        </div>
    )
}

function Card({number, question, answer, setAnswerList, answerList}){
    const[open, setOpen]=React.useState(false)
    const[cardtype, setCardtype]=React.useState("")
    const[icon, setIcon]=useState(<ion-icon name="play-outline" onClick={()=>setOpen(true)}></ion-icon>)

    if (!open){
        return (
            
            <div className="card">
                <div className={cardtype}>Pergunta {number} {icon}</div>
            </div>
        )
    }
    else{
        return(<Content setOpen={setOpen} setCardtype={setCardtype} setIcon={setIcon} setAnswerList={setAnswerList} question={question} answer={answer} answerList={answerList}/>)
    }
}

function Deck({infocards, setAnswerList, answerList}){
    
    return (
        <div className="deck">
            {infocards.map(card =><Card number={card.number} question={card.question} answer={card.answer} answerList={answerList} setAnswerList={setAnswerList}/>)}
        </div>
    )
}

function BottomBar({answerList, lenDeck}){
    return (
        <div className="bottom-bar">
            {answerList.length}/{lenDeck} CONCLUÍDOS
            <div className="answers-list">
                {answerList}
            </div>
        </div>
    )
}

export default function ZapScreen(){
    const[answerList, setAnswerList]=useState([])
    const infocards= shuffle([
        {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
        {question: "Componentes devem iniciar com __", answer: "letra maiúscula"},
        {question: "Podemos colocar __ dentro do JSX", answer: "expressões"},
        {question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma"},
        {question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"},
        {question: "Usamos props para __", answer: "passar diferentes informações para componentes"},
        {question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ])

    function shuffle(primitiveList) {
        let infoShuffle;
        let indexShuffle;
        let listShuffle = [];
        let num=1;
        while (primitiveList.length > 0) {
            indexShuffle = parseInt(Math.random() * primitiveList.length);
            infoShuffle = primitiveList[indexShuffle];
            listShuffle.push(infoShuffle);
            primitiveList.splice(indexShuffle, 1);
        }
        for(const i of listShuffle){
            i.number=num;
            num++;
        }

        return listShuffle;
    }

    return (
        <div className="background zapscreen">
            <div className="title">
                <img src={logo} />
                <h1>ZapRecall</h1>
            </div>
            <Deck infocards={infocards} answerList={answerList} setAnswerList={setAnswerList}/>
            <BottomBar answerList={answerList} lenDeck={infocards.length}/>
        </div>
    )
}