import DashBoardHeader from "../components/DashBoardComponents/DashBoardHeader"
import ChartsOverview from "../components/DashBoardComponents/ChartsOverview"
import BillsList from "../components/DashBoardComponents/BillsList"

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
            <p className="text-[#565857] text-md font-semibold font-[Montserrat] mb-1">Income</p>
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
          <div className="container bg-[#f1f1f1] w-185 h-100 rounded-xl p-5">
            <p className="text-[#565857] text-md font-semibold font-[Montserrat] mb-1">Upcoming bills</p>
            <ul className="bg-white h-75 ">
              <div className="bg-[#7f5efd] rounded-lg text-white border-5 border-solid border-white h-10 w-[100%] flex justify-between items-center px-3">
                <h1 className="text-sm font-semibold font-[Montserrat]">Bill Type</h1>
                <h1 className="text-sm font-semibold font-[Montserrat]">Due Data</h1>
                <h1 className="text-sm font-semibold font-[Montserrat]">Amount</h1>
              </div>
              <BillsList />
            </ul>
            <div className="flex justify-center mt-3">
              <p className="font-[Montserrat] text-[#7f5efd]">Add bills</p>
            </div>
            
          </div>
        </div>
        <div className="lowerCotent">
          <div className="container h-50 bg-[#f1f1f1] rounded-xl mt-5 p-5">
            <div className="flex justify-between items-center px-5">
              <p className="text-[#565857] text-md font-semibold font-[Montserrat] mb-1">Upcoming bills</p>
              <button className="bg-[#7f5efd] font-[Montserrat] text-white mb-1 p-1 rounded-md text-sm font-bold">Add new</button>
            </div>
            <div className="container bg-white w-90% h-33">
              <div className="bg-[#7f5efd] rounded-lg text-white border-5 border-solid border-white h-10 w-[100%] flex justify-between items-center px-10">
                <h1 className="text-sm font-semibold font-[Montserrat]">Name</h1>
                <h1 className="text-sm font-semibold font-[Montserrat]">Type</h1>
                <h1 className="text-sm font-semibold font-[Montserrat]">Date</h1>
                <h1 className="text-sm font-semibold font-[Montserrat]">Amount</h1>
              </div>
              <ul>

              </ul>
            </div>
          </div>
        </div>
     </main>
    </>
  )
}

export default Home