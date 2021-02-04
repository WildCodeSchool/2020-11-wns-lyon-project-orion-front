import React from 'react'
import { useHistory } from "react-router-dom";

const Endings = ({ total, score }) => {
  let history = useHistory();
  const goToHomePage = () => {
    history.push("/studies/quiz")
  }

  // écran final qui reprends la valeur des bonnes réponses et l'oppose au total de question

  return (
    <div className="p-8 flex-col items-center justify-center">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-white">Ton score est de :</h1>
        <span className="text-3xl font-bold text-white">{score}</span>
        <span className="text-sm text-white"> / {total}</span>
      </div>
      <button onClick={goToHomePage} className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
        <span className=" text-white">Home</span>
      </button>
    </div>
  )
}


export default Endings