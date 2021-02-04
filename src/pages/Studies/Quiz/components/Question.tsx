import React, { useState, useEffect } from 'react'
import Endings from './Endings'

const Question = ({ questionText, answerOptions, anecdote, total, rightAnswer }) => {

  const timer = 20 // initialisation du timer à 20s

  const [time, setTime] = useState(20) // hook qui gère l'état du du timer
  const [stop, setStop] = useState(false) // hook qui gère le stop du timer
  const [selected, setSelected] = useState(-1) // hook qui gère l'état de la réponse séléctionnée
  const [countdown, setCountdown] = useState(100) //

  const [width, setWidth] = useState("100%") // hook qui gère la barre d'état du timer
  const [transition, setTransition] = useState(timer) //

  const [score, setScore] = useState(0) // hook qui gère l'état du score
  const [current, setCurrent] = useState(0) // hook qui gère la question à afficher

  const [indexFinalQuestion, setIndexFinalQuestion] = useState(total.length - 1)


  useEffect(() => {
    setIndexFinalQuestion(total)
  }, [])

  // à la selection de la réponse on arrête le timer et si la réponse est juste on ajoute + 1 au score
  const onSelect = index => {
    { document.getElementById("progress") && setWidth(document.getElementById("progress").offsetWidth + "px") }
    clearInterval(countdown)
    setSelected(index)
    setTime(0)
    setStop(true)
    if (index >= 0 && index === rightAnswer) {
      setScore(score + 1)
    }
  }


  useEffect(() => {
    if (time > 0)
      setCountdown(
        window.setTimeout(() => {
          setTime(time - 1)
        }, 1000)
      )
    else if (!stop) onSelect(-1)
  }, [time])

  useEffect(() => {
    setSelected(-1)
    setTime(timer)
    setStop(false)
    setTransition(0)
    setWidth("100%")
    setTimeout(() => {
      setTransition(timer)
      setWidth("0%")
    }, 50)
  }, [current])

  return (
    <div>
      {
        (!(current === indexFinalQuestion))
          ? (
            <div className="p-8  flex flex-col justify-between">

              <div className="relative h-8 top bg-gray-800 rounded flex items-center overflow-hidden">
                <div className="z-10 absolute w-full flex items-center justify-between px-2 text-white text-sm">

                  <span className="flex-grow">
                    {/* reprends le state de la question courrante et lui ajoute 1 */}
                Question {current + 1} / {total}
                  </span>
                  <span>{time}</span>
                  <span className="material-icons text-lg text-white opacity-25 ml-2">av_timer</span>
                </div>
                {/* barre de progression du timer si il est stoppé il passe au gris, sinon il est violet*/}
                <div
                  id="progress"
                  className={"absolute inset-0 h-full " + (stop ? " bg-gray-700 " : " bg-indigo-500 ")}
                  style={{ width, transition: "width " + transition + "s linear" }}
                />
              </div>

              {/* la question courrante */}

              <div className="flex-grow font-medium text-white mt-8 text-xl leading-normal">{questionText}</div>

              {/* si le timer est stoppé (réponse selectionnée ou au terme des 20s) l'anecdtote apparait */}
              {stop && (
                <div className="text-white mb-8">
                  <span
                    className="inline-block uppercase bg-green-500
                    px-2 py-1 mb-4 text-xs tracking-wider rounded-sm w-auto"
                  >
                    Anecdote
              </span>
                  <div className="opacity-50 text-sm">{anecdote}</div>
                </div>
              )}
              {/* parcours du tableau de question pour afficher les réponses, au stop du timer selon si la question est la bonne ou non le style change */}
              {answerOptions &&
                answerOptions.map((option, i) => (
                  <div
                    key={i}
                    className={
                      "px-4 h-10 flex items-center justify-between text-white rounded mb-2 cursor-pointer " +
                      (stop
                        ? selected === i
                          ? i === rightAnswer
                            ? "bg-green-500 "
                            : "bg-red-500 "
                          : "border border-solid border-gray-700 "
                        : "border border-solid border-indigo-500 ")
                    }
                    // au click on stop le timer et on calcule le score
                    onClick={() => !stop && onSelect(i)}
                  >
                    {/* si le timer est stoppé et que la réponse est correct une flèche apparait */}
                    <span className="flex-grow">{option}</span>
                    {stop && (rightAnswer === i) && <span className="material-icons text-xl text-white">check_circle</span>}
                  </div>
                ))}

              <div className="mx-auto mt-8">
                {
                  <button
                    // si le timer n'est pas stop le bouton est gris et on ne peut pas le cliquer (disable) sinon il est violet et au click on envoit la question suivante
                    className={
                      "h-10 rounded-full px-6 text-white font-medium uppercase text-xs tracking-wider " + (!stop ? "bg-gray-700 opacity-25" : "bg-indigo-500")
                    }
                    onClick={() => setCurrent(current + 1)}
                    disabled={!stop || null}
                  >
                    {current !== (indexFinalQuestion - 1) ? "suivant" : "Fin"}
                  </button>
                }
              </div>
            </div>
          ) :
          (
            <Endings total={total} score={score} />
          )
      }
    </div>
  )
}

export default Question