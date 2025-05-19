import Card from "./Components/Card/Card";
import "./App.css";
import alvysvg from './assets/images/web-cam.svg'
import quizsvg from './assets/images/copy.svg'
import jdsvg from './assets/images/job.svg'
import mollysvg from './assets/images/customer-support.svg'
import tdsvg from './assets/images/monitor.svg'
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
    <Header />
      <h2 className="heading"> AI Agents and AI Tools of Talview</h2>
      <div className="card-container">
       
        <Card title="Alvy – AI Proctoring" description="Meet Alvy by Talview — your smart AI agent for Exam Proctoring. Monitor exams with face detection, secondary camera checks, and prevent fraud with real-time AI vigilance."image={alvysvg} />
        <Card
          title="Quiz Generator"
          description=" Create quizzes in seconds with Talview’s Free Quiz Generator. Customize topics, difficulty, and question types — fast, easy, and ready to use."image={quizsvg}
        />
        <Card title="Ivy - AI Interviewer" description=" Meet Ivy AI by Talview — your smart AI agent for Interviews. Deliver human-like, dynamic interviews with real-time follow-ups, impersonation checks, and conduct fraud free interviews" image={mollysvg} />
        <Card
          title="Job Description Generator"
          description=" Draft job descriptions and interview questions effortlessly with Talview’s Free Generator. Save time, stay accurate, and hire better with AI-driven suggestions.."image={jdsvg}
        />
       <Card
          title="Interview Question Generator"
          description="Accelerate your recruitment workflow with Talview’s free interview question generator. Ensure high-quality, relevant questions with every interview."image={tdsvg}
        />

      </div>
   

      <Footer/>
    </>
  );
}

export default App;
