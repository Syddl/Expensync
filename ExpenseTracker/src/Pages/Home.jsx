import DashBoardHeader from "../components/DashBoardComponents/DashBoardHeader"

const  Home = () => {
  return(
    <>
     <DashBoardHeader />
     <main className=" h-auto w-100% pl-10 pr-10 ">
        <div className="upperContent flex gap-5 pt-5">
          <div className="container h-40 bg-[#F8F9FA] rounded-xl"></div>
          <div className="container h-40 bg-[#F8F9FA] rounded-xl"></div>
          <div className="container h-40 bg-[#F8F9FA] rounded-xl"></div>
        </div>
        <div className="mainContent flex gap-5 mt-5">
          <div className="container bg-[#F8F9FA] h-100 rounded-xl"></div>
          <div className="container bg-[#F8F9FA] w-185 h-100 rounded-xl"></div>
        </div>
        <div className="lowerCotent">
          <div className="container h-50 bg-[#F8F9FA] rounded-xl mt-5">
            
          </div>
        </div>
     </main>
    </>
  )
}

export default Home