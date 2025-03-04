import LandingHeader from "../components/LandingPageComponents/LandingHeader";
import LandingHome from "../components/LandingPageComponents/LandingHome";

const LandingPage = () => {
  return(
    <>
      <LandingHeader />
      <main className="w-100% h-auto">
        <LandingHome />
      </main>
    </>
    
  )
};

export default LandingPage;