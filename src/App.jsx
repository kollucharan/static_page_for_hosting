import Card from "./Components/Card/Card";
import "./App.css";
import alvysvg from './assets/images/web-cam.svg'
import quizsvg from './assets/images/copy.svg'
import jdsvg from './assets/images/job.svg'
import mollysvg from './assets/images/customer-support.svg'
import Header from "./Components/Header/Header";
function App() {
  return (
    <>
    <Header />
      <h2 className="heading"> AI Agents of Talview</h2>
      <div className="card-container">
       
        <Card title="Alvy – AI Proctoring" description="Meet Alvy by Talview — your smart AI agent for Exam Proctoring. Monitor exams with face detection, secondary camera checks, and prevent fraud with real-time AI vigilance."image={alvysvg} />
        <Card
          title="Quiz Generator"
          description=" Create quizzes in seconds with Talview’s Free Quiz Generator. Customize topics, difficulty, and question types — fast, easy, and ready to use."image={quizsvg}
        />
        <Card title="Molly AI" description=" Meet Molly AI by Talview — your smart AI agent for Interviews. Deliver human-like, dynamic interviews with real-time follow-ups, impersonation checks, and conduct fraud free interviews" image={mollysvg} />
        <Card
          title="Job description and Interview Questions Generator"
          description=" Draft job descriptions and interview questions effortlessly with Talview’s Free Generator. Save time, stay accurate, and hire better with AI-driven suggestions.."image={jdsvg}
        />
      </div>
    </>
  );
}

export default App;
