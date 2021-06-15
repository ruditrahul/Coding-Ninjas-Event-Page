import NavBar from "./components/NavBar";
import LaptopView from "./components/LaptopView";
import Footer from "./components/Footer";
import MobileView from "./components/MobileView";
import ImpLinks from "./components/ImpLinks";
import Typography from "@material-ui/core/Typography";
import "./App.css";

const eventCategoryNames = [
  "ALL_EVENTS",
  "BOOTCAMP_EVENT",
  "WEBINAR",
  "CODING_EVENTS",
  "WORKSHOP",
];

const eventSubCategoryNames = ["Upcoming", "Archived", "All Time Favorites"];

const tags = [
  "Interview Preparation",
  "Contest Solutions",
  "Competitive Programming",
  "Futuristic Tech",
  "Coding Concepts",
  "Career Guidance",
  "Web Development",
  "Android",
  "Machine Learning",
  "Campus Event",
  "Online Coding Event",
  "Hackathon",
  "Women Who Code",
  "GSoC",
  "Placement",
  "Aptitude Preparation",
  "Efficient Coding",
  "Programming Contest",
  "Coding Marathon",
  "All Night Coding",
  "Code Wars",
  "Scholarship Test",
];

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="header">
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          NEWS & EVENTS
        </Typography>
        <Typography variant="h6">Learn, Compete & Grow</Typography>
      </div>
      <div className="main">
        {window.innerWidth > 900 ? (
          <LaptopView
            eventCategoryNames={eventCategoryNames}
            eventSubCategoryNames={eventSubCategoryNames}
            tags={tags}
          />
        ) : (
          <MobileView />
        )}
      </div>
      <div className="footer">
        <Footer />
      </div>
      <div className="imp-link">
        <ImpLinks />
      </div>
    </div>
  );
}

export default App;
