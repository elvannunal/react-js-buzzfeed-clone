import Title from "./Components/Title";
import React, {useState,useEffect} from "react";
import QuestionsBlock from "./Components/QuestionsBlock";
import AnswerBlock from "./Components/AnswerBlock";
const App =() => {

    const [quiz, setQuiz]=useState(false)
    const [chosenAnswerItems, setChosenAnswerItems]=useState([])
    const [unAnsweredQuestionIds, setUnAnsweredQuestionIds]=useState(null)
    const [showAnswer, setShowAnswer]=useState(false)
    const fetchData= async () =>{
        try{
            const response= await fetch('http://localhost:8000/quiz')
            const json= await response.json()
            console.log(json)
            setQuiz(json)
        }catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
        fetchData()
    },[])

    useEffect(()=>{
       const unansweredIds=quiz?.content?.map(({id})=>id)
        setUnAnsweredQuestionIds(unansweredIds)
    },[quiz])

    useEffect(()=>{
        if(unAnsweredQuestionIds){
            if(unAnsweredQuestionIds.length<=0 && chosenAnswerItems.length>=1){
                //scroll to answer clock
                setShowAnswer(true)
            }
            //scroll to highest unansewered
            const highestId=Math.min(...unAnsweredQuestionIds)
            const highestElement=document.getElementById(highestId)
            highestElement?.scrollIntoView({behavior:"smooth"})
        }
    },[unAnsweredQuestionIds,showAnswer,chosenAnswerItems])
    console.log("chosenAnswerItems",chosenAnswerItems)
  return (
    <div className="app">
        <Title  title={quiz?.title} subtitle={quiz?.subtitle}/>
        {quiz?.content?.map((contentItem) => (
            <QuestionsBlock
                key={contentItem.id}
                quizItem={contentItem}
                setChosenAnswerItems={setChosenAnswerItems}
                chosenAnswerItems={chosenAnswerItems}
                unAnsweredQuestionIds={unAnsweredQuestionIds}
                setUnAnsweredQuestionIds={setUnAnsweredQuestionIds}
            />
       ) )}
        {
            showAnswer&&(
                <AnswerBlock
                answerOptions={quiz?.answers}
                chosenAnswers={chosenAnswerItems}
                />
            )
        }
    </div>
  );
}

export default App;
