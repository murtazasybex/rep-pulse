import "./App.css";
import {
  Footer,
  Hero,
  HowItWorks,
  KeyPositions,
  MustHireRole,
  Navbar,
  OneStepAhead,
  OurRoles,
  PassionFueled,
  ReadyToHire,
  Services,
} from "./components";
import Announcement from "./components/Announcement";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <OurRoles />
      <KeyPositions />
      <PassionFueled />
      <MustHireRole />
      <Announcement />
      <ReadyToHire />
      <OneStepAhead />
      <Services />
      <Footer />
    </>
  );
}

export default App;
