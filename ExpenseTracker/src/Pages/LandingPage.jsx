import LandingHeader from "../components/LandingPageComponents/LandingHeader";
import LandingHome from "../components/LandingPageComponents/LandingHome";
import Benefits from "../components/LandingPageComponents/Benefits"
import StartNow from "../components/LandingPageComponents/StartNow";
import Footer from "../components/LandingPageComponents/Footer";


const LandingPage = () => {
  return(
    <>
      <LandingHeader />
      <main className="2xl:w-full xl:w-full lg:w-full md:w-full sm:w-full w-full h-auto">
        <LandingHome />
        <Benefits />
        <StartNow />
      </main>
      <Footer />
    </>
    
  )
};

export default LandingPage;