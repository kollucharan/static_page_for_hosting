import React from "react";
import "./Card.css";
export default function Card({ title, description,image }) {
   
  const clicked = () => {
    if(title === "Alvy – AI Proctoring") {
   
      window.open("https://www.talview.com/en/alvy-ai-proctoring-agent", "_blank");
    }
    else if(title === "Quiz Generator") {
      window.open("https://ai-agents.talview.com/ai-quiz-generator", "_blank");
    }
    else if(title === "Ivy - AI Interviewer") {
      window.open(" https://www.talview.com/en/molly-ai-interview-agent", "_blank");
    }
    else if(title === "Job Description Generator") {
      window.open("https://ai-agents.talview.com/jd-generator", "_blank");
    }
   else if(title === "Interview Question Generator"){
   window.open("https://ai-agents.talview.com/interview-question-generator", "_blank");
   }

  };
  return (
    <div className="card">
        <img src={image} className="image-design" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={clicked}>Know More</button>
    </div>
  );
}
