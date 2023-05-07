const QuestionBlock=({question,
                         quizItemId,
                         setChosenAnswerItems,
                         chosenAnswerItems,
                         unAnsweredQuestionIds,
                         setUnAnsweredQuestionIds
})=>{

    const handleClick=()=>{
        setChosenAnswerItems((prevState)=>[...prevState, question.text])
        setUnAnsweredQuestionIds(unAnsweredQuestionIds.filter((id=>id!=quizItemId)))
    }
    const validPick=!chosenAnswerItems?.includes(question.text)&&
        !unAnsweredQuestionIds?.includes(quizItemId)

    return(
        <button
            className= "question-block"
            onClick={handleClick}
           disabled={validPick}
        >
            <img src={question.image} alt={question.alt}/>
            <h3>{question.text}</h3>
            <p>
                <a href={question.image}>{question.credit}</a>
                <a href="https://www.unsplash.com">Unsplah</a>
            </p>
        </button>
    )
}
export default QuestionBlock