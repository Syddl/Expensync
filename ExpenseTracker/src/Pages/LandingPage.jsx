import LandingHeader from "../components/LandingPageComponents/LandingHeader";
import LandingHome from "../components/LandingPageComponents/LandingHome";
import Benefits from "../components/LandingPageComponents/Benefits"
import StartNow from "../components/LandingPageComponents/StartNow";
import Footer from "../components/LandingPageComponents/Footer";


const LandingPage = () => {
  return(
    <>
      <LandingHeader />
      <main className="w-100% h-auto">
        <LandingHome />
        <Benefits />
        <StartNow />
      </main>
      <Footer />
    </>
    
  )
};

export default LandingPage;