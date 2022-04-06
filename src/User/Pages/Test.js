import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the R in MERN stack?",
      answerOptions: [
        { answerText: "Redux", isCorrect: false },
        { answerText: "Repository", isCorrect: false },
        { answerText: "React", isCorrect: true },
        { answerText: "Router", isCorrect: false },
      ],
    },
    {
      questionText: "Who is the developer of Javascript?",
      answerOptions: [
        { answerText: "Steve Jobs", isCorrect: false },
        { answerText: "Brendan Eich", isCorrect: true },
        { answerText: "Dennis Ritchie", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many datatypes are there in javascript?",
      answerOptions: [
        { answerText: "5", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: false },
        { answerText: "8", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
      <div class="grid h-screen overflow-y-hidden bg-orange-100">
    <div
      class=" mx-96 my-5 bg-yellow-300 w-50
        min-w-200
        h-min
        rounded-2xl
        p-20
        shadow-lg
        flex
        justify-evenly text-indigo-700"
    >
      {showScore ? (
        <div
          class="flex
        text-2xl
        items-center "
        >
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div
            class=" w-full
            relative"
          >
            <div class="text-2xl text-indigo-700">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div class="text-2xl w-full text-indigo-700">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div class=" w-full
          flex
          flex-col
          justify-between ">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button class="w-full text-xl text-indigo-700 rounded-2xl border-blue-900 flex justify-start items-center border-4 p-5 m-2 cursor-pointer hover:bg-blue-300"
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    </div>
  );
}
