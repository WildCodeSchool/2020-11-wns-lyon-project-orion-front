import React, { useState } from 'react';
import {useForm, Controller} from 'react-hook-form';
import {NavLink} from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import { useHistory } from "react-router-dom";


const schema = yup.object().shape({
    title: yup.string().required(),
    cover: yup.string().required(),
    question: yup.string().required(),
    answer0: yup.string().required(),
    answer1: yup.string().required(),
    answer2: yup.string(),
    answer3: yup.string(),
    isTrue: yup.string().required(),
    funFact: yup.string().required(),
    isPublished: yup.bool().required(),
    publishedOn: yup.date().default(function () {
        return new Date();
      }),
  });


const FormExam = () => {

    const [answerList, setAnswerList] = useState([{answer: "", isTrue: ""}]);
    const maxAnswer = 4;

     
  // handle input change
  const handleAnswerChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...answerList];
    list[index][name] = value;
    setAnswerList(list);
  };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...answerList];
        list.splice(index, 1);
        setAnswerList(list);
      };

    // handle click event of the Add button
  const handleAddClick = () => {
    setAnswerList([...answerList, { answer: "", isTrue: "" }]);
  };
 

    // let history = useHistory();
    const {register, handleSubmit, formState, control, errors} = useForm(
        { resolver: yupResolver(schema)}
      );
    const {isSubmitting, isSubmitSuccessful} = formState;

    const onSubmit = data => {
        console.log(data);
        return true;
    }

    // if(isSubmitSuccessful){
    //     history.push("/studies/exam");
    // }

    return <form onSubmit={handleSubmit(onSubmit)}>

            <h2>Ajouter un Quiz</h2>
                {
                    isSubmitSuccessful && 
                    <div className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-green-500">
                        <span className="text-xl inline-block mr-5 align-middle">
                            <i className="fas fa-bell" />
                        </span>
                        <span className="inline-block align-middle mr-8">
                            Le quiz a bien été enregistré
                        </span>
                        <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                        <NavLink to="/studies/exam" className="">
                            <span>ok</span>
                        </NavLink>
                        </button>
                    </div>
                }

            <div className="container mx-auto px-8 max-w-2xl grid gap-10 pt-32 pb-12">
                <label className="flex items-center justify-between cursor-pointer">
                    <p>Titre</p><input type="text" className="mb-12 input" placeholder="Titre" name="title" ref={register}/>
                </label>
                {errors.title && <span>{errors.title.message}</span>}

                <label className="flex items-center justify-between cursor-pointer">
                    <p>Couverture</p><input type="text" className="mb-12 input" placeholder="Image de couverture" name="cover" ref={register}/>
                </label>
                {errors.cover && <span>{errors.cover.message}</span>}

                <label className="flex items-center justify-between cursor-pointer">
                    <p>Question</p><input type="text" className="mb-12 input" placeholder="Question" name="question" ref={register}/>
                </label>
                {errors.question && <span>{errors.question.message}</span>}



                {answerList.map((x, i) => {
                return (
                    <>
                        <label className="flex items-center justify-between cursor-pointer">
                            <p>Réponse 1</p><input type="text" className="mb-12 input" placeholder="Réponse" name="answer" value={x.answer} ref={register}
                            onChange={e => handleAnswerChange(e, i)}
                            />
                        </label>
                        {errors.answer && <span>{errors.answer.message}</span>}

                        <label className="flex items-center justify-between cursor-pointer">
                            <p>Bonne Réponse</p><input type='checkbox' className="switch" name="isTrue" value={x.isTrue} ref={register}
                            onChange={e => handleAnswerChange(e, i)}
                            />
                        </label>
                        {errors.isTrue && <span>{errors.isTrue.message}</span>}

                        <div>
                            {answerList.length !== 1 && <button
                            onClick={() => handleRemoveClick(i)}>Supprimer</button>}
                        </div>
                    
                    </>
                    );
                })}

                {answerList.length + 0 < maxAnswer && <button onClick={handleAddClick}>Ajouter</button>}

                <label className="flex items-center justify-between cursor-pointer">
                    <p>Anecdote</p><input type="text" className="mb-12 input" placeholder="Anecdote" name="funFact" ref={register}/>
                </label>
                {errors.funFAct && <span>{errors.funFAct.message}</span>}

                <label className="flex items-center justify-between cursor-pointer">
                    <p>Publié</p><input type='checkbox' className="switch" name="isPublished" ref={register}/>
                </label>
                {errors.isPublished && <span>{errors.isPublished.message}</span>}

                <label className="flex items-center justify-between cursor-pointer">
                    <p>Date de publication</p>
                    <Controller
                        control={control}
                        name="publishedOn"
                        render={({ onChange, onBlur, value }) => (
                            <DatePicker 
                            selected={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            />
                          )}
                    />
                </label>
                {errors.publishedOn && <span>{errors.publishedOn.message}</span>}

                <button className="btn btn-primary" disabled={isSubmitting}>Valider</button>
            </div>
    </form>
        
}

export default FormExam;
