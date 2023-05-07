import QuestionBlock from './QuestionBlock'

const QuestionsBlock =({quizItem,
                           setChosenAnswerItems,
                           chosenAnswerItems,
                           unAnsweredQuestionIds,
                           setUnAnsweredQuestionIds})=>{
    return <div>
        <h2 id={quizItem.id}  className="question-title">{ quizItem.text}</h2>
        <div className="questions-container">
            {quizItem.questions.map((question,_index)=>(
                <QuestionBlock key={_index}
                               question={question}
                               quizItemId={quizItem.id}
                               setChosenAnswerItems={setChosenAnswerItems}
                               chosenAnswerItems={chosenAnswerItems}
                               unAnsweredQuestionIds={unAnsweredQuestionIds}
                               setUnAnsweredQuestionIds={setUnAnsweredQuestionIds}
                />
            ))}
        </div>
    </div>
}

export default QuestionsBlock