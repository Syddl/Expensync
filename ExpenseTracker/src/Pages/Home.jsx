import DashBoardHeader from "../components/DashBoardComponents/DashBoardHeader"
import ChartsOverview from "../components/DashBoardComponents/ChartsOverview"

const  Home = () => {
  return(
    <>
     <DashBoardHeader />
     <main className=" h-auto w-100% pl-10 pr-10 ">
        <div className="upperContent flex gap-5 pt-5">
          <div className="container h-30 bg-[#f1f1f1] rounded-xl pl-5 pt-5">
            <p className="text-[#565857] text-md font-semibold font-[Montserrat] mb-1">Expenses</p>
            <h1 className="text-[#00093c] text-5xl font-bold font-[Montserrat]">₱5,534.00</h1>
          </div>
          <div className="container h-30 bg-[#f1f1f1] rounded-xl pl-5 pt-5">
            <p className="text-[#565857] text-md font-semibold font-[Montserrat] mb-1">Expenses</p>
            <h1 className="text-[#00093c] text-5xl font-bold font-[Montserrat]">₱5,534.00</h1>
          </div>
          <div className="container h-30 bg-[#f1f1f1] rounded-xl pl-5 pt-5">
            <p className="text-[#565857] text-md font-semibold font-[Montserrat] mb-1">Expenses</p>
            <h1 className="text-[#00093c] text-5xl font-bold font-[Montserrat]">₱5,534.00</h1>
          </div>
        </div>
        <div className="mainContent flex gap-5 mt-5">
          <div className="container bg-[#f1f1f1] h-100 rounded-xl flex flex-col items-center">
            <ChartsOverview />
          </div>
          <div className="container bg-[#f1f1f1] w-185 h-100 rounded-xl"></div>
        </div>
        <div className="lowerCotent">
          <div className="container h-50 bg-[#f1f1f1] rounded-xl mt-5">
            
          </div>
        </div>
     </main>
    </>
  )
}

export default Home