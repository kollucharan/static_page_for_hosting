import React from "react";
import "./Card.css";
export default function Card({ title, description,image }) {
   
  const clicked = () => {
    if(title === "Alvy – AI Proctoring") {
   
      window.open("https://www.talview.com/en/", "_blank");
    }
    else if(title === "Quiz Generator") {
      window.open("https://www.talview.com/ai-quiz-generator", "_blank");
    }
    else if(title === "Molly AI") {
      window.open(" https://www.talview.com/en/molly-ai-interview-agent", "_blank");
    }
    else if(title === "Job description and Interview Questions Generator") {
      window.open("https://ai-agents.talview.com/jdgenerator", "_blank");
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
