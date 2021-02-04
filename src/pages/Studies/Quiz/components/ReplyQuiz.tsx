import React, { useState } from 'react'
import Question from './Question'


const ReplyQuiz = () => {
  const [started, setStarted] = useState(false)

  const Quizz = {
    "results": [
      {
        "langue": "fr",
        "categorie": "informatique",
        "theme": "iPhone",
        "difficulte": "confirmé",
        "question": "Combien de mémoire de stockage possédait le tout premier iPhone ?",
        "reponse_correcte": ["4 Go", "2 Go"],
        "answer": [
          "4 Go",
          "2 Go",
          "8 Go",
          "32 Go"
        ],
        "anecdote": "Le développement de l'iPhone a débuté par la recherche d'ingénieurs sous la direction de Steve Jobs travaillant sur les écrans tactiles."
      },
      {
        "langue": "fr",
        "categorie": "informatique",
        "theme": "iPhone",
        "difficulte": "confirmé",
        "question": "Question 2?",
        "reponse_correcte": ["4 Go"],
        "answer": [
          "4 Go",
          "2 Go",
          "8 Go",
          "32 Go"
        ],
        "anecdote": "Le développement de l'iPhone a débuté par la recherche d'ingénieurs sous la direction de Steve Jobs travaillant sur les écrans tactiles."
      },
      {
        "langue": "fr",
        "categorie": "informatique",
        "theme": "iPhone",
        "difficulte": "confirmé",
        "question": "Question 3?",
        "reponse_correcte": ["4 Go"],
        "answer": [
          "4 Go",
          "2 Go",
          "8 Go",
          "32 Go"
        ],
        "anecdote": "Le développement de l'iPhone a débuté par la recherche d'ingénieurs sous la direction de Steve Jobs travaillant sur les écrans tactiles."
      }
    ]
  }

  console.table(Quizz.results[0].reponse_correcte)
  const findRighAnswer = () => {// verifier si il y a plusieurs réponses de disponibles

  }

  const startQuizz = () => {
    setStarted(!started)
  }

  return (
    (started === false) ?
      (<div className="w-full flex flex-col gap-3 pt-32 pb-12 px-8 container mx-auto bg-green-300">
        <h1 className="mx-auto text-white">Start the quiz</h1>
        <h1 className="mx-auto text-white">Good luck</h1>
        <button className="text-white" onClick={startQuizz}>Start</button>
      </div>)
      :
      (<div className="w-full flex flex-col gap-4 pt-32 pb-12 px-8 container mx-auto bg-blue-800">
        <Question
          questionText={Quizz.results[0].question}
          answerOptions={Quizz.results[0].answer}
          anecdote={Quizz.results[0].anecdote}
          total={Quizz.results.length}
          rightAnswer={findRighAnswer()}
        />
      </div>)
  )
}

export default ReplyQuiz
