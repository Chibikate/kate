"use client"
import React, { useState } from "react";

const quizQuestions = [
  {
    question:
      "1. What does the abbreviation DICOM stand for in the context of medical imaging?",
    options: [
      "  A. Diagnostic Imaging and Computer Operations Manual",
      "  B. Digital Imaging and Computerized Optical Measurement",
      "  C. Data Information Catalog for Optical Machines",
      "  D. Digital Imaging and Communications in Medicine",
    ],
    correctAnswer: "D. Digital Imaging and Communications in Medicine",
  },
  {
    question:
      "2. Which imaging method uses X-rays to create detailed cross-sectional pictures of the body, helping diagnose issues like bone fractures, tumors, and organ problems?",
    options: [
      "  A. MRI (Magnetic Resonance Imaging)",
      "  B. PET (Positron Emission Tomography)",
      "  C. Ultrasound",
      "  D. CT (Computed Tomography)",
    ],
    correctAnswer: "D. CT (Computed Tomography)",
  },
  {
    question:
      "3. Which widely adopted standard, used in medical imaging, not only facilitates the sharing of medical images but also serves as a basis for creating 3D-printable models from medical scan data, allowing for accurate replicas of anatomical structures?",
    options: [
      "  A. RIS (Radiology Information System)",
      "  B. PACS (Picture Archiving and Communication System)",
      "  C. DICOM (Digital Imaging and Communications in Medicine)",
      "  D. EMR (Electronic Medical Record)",
    ],
    correctAnswer: "C. DICOM (Digital Imaging and Communications in Medicine)",
  },
  {
    question:
      "4. This current view in the 3D slicer is called “four up”. What is the empty window on the upper right intended for?",
    options: [
      "  A. It is where the 3D image will be shown once activated.",
      "  B. The space that will enable multi-user collaboration.",
      "  C. Nothing.",
      "  D. Provides a workspace for annotations.",
    ],
    correctAnswer: "A. It is where the 3D image will be shown once activated)",
  },
  {
    question:
      `5.Modules in 3D slicer allow us to perform actions that affect the DICOM files in various ways. From the activity you’ve performed earlier, what are the three (3) modules you have utilized? 
      i.) Crop Volume  ii.) Volume Rendering   iii.)segment editor   iv) Volumes   v.)Threshold`,
    options: ["  A. i, iii, iv", "  B. i, ii, iii", "  C. ii, iv, v", "  D. i, ii, iv"],
    correctAnswer: "A. i, iii, iv)",
  },
  {
    question:
      "6. What file format is often used in 3D printing to describe the surface geometry of objects, allowing them to be produced with precision using additive manufacturing?",
    options: ["  A. STL", "  B. PNG", "  C. DOCX", "  D. MP3"],
    correctAnswer: "A. STL)",
  },
  {
    question: "7. What does the abbreviation \"STL\" stand for?",
    options: [
      "  A. Standard Triangular Language",
      "  B. Solid Transfer Language",
      "  C. Structured Texture Lexicon",
      "  D. Standard Tessellation Language",
    ],
    correctAnswer: "D. Standard Tessellation Language)",
  },
];

export default function QuizApp() {
  const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(""));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (event, questionIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = event.target.value.trim(); // Trim the user's answer
    setUserAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === quizQuestions[index].correctAnswer.trim()) { // Trim the correct answer
        score++;
      }
    });
    return score;
  };

  const retakeQuiz = () => {
    setUserAnswers(Array(quizQuestions.length).fill(""));
    setShowResults(false);
  };

  const score = calculateScore();

  return (
    <div className="quiz-container" style={quizContainerStyle}>
      <h1 style={{ textAlign: "center" }}>3D Slicer Quiz</h1>
      {!showResults ? (
        <div>
          {quizQuestions.map((question, index) => (
            <div key={index} className="question" style={questionStyle}>
              <h3>{question.question}</h3>
              <ul className="pl-4">
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    <label>
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        onChange={(e) => handleAnswerChange(e, index)}
                        checked={userAnswers[index] === option.trim()} // Trim the user's answer for comparison
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button onClick={() => {setShowResults(true); console.log(userAnswers)}} style={submitButtonStyle}>Submit</button>
        </div>
      ) : (
        <div>
          <p>Your Score: {score} out of {quizQuestions.length}</p>
          {score === quizQuestions.length ? (
            <p>Congratulations! You passed the quiz.</p>
          ) : (
            <p>Sorry, you didn't pass. You can retake the quiz to improve your score.</p>
          )}
          <button onClick={retakeQuiz} style={retakeButtonStyle}>Retake Quiz</button>
        </div>
      )}
    </div>
  );
}

const quizContainerStyle = {
  width: "70%",
  margin: "0 auto",
  padding: "20px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  backgroundColor: "#fff",
};

const questionStyle = {
  marginBottom: "20px",
};

const submitButtonStyle = {
  marginTop: "20px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};

const retakeButtonStyle = {
  marginTop: "20px",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};
