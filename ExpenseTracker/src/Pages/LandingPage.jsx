import LandingHeader from "../components/LandingPageComponents/LandingHeader";
import LandingHome from "../components/LandingPageComponents/LandingHome";
import Benefits from "../components/LandingPageComponents/Benefits"


const LandingPage = () => {
  return(
    <>
      <LandingHeader />
      <main className="w-100% h-auto">
        <LandingHome />
        <Benefits />
      </main>
    </>
    
  )
};

export default LandingPage;