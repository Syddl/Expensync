import SideBar from "../components/DashBoardComponents/SideBar"

const Dashboard = () => {
  return(
    <main className="h-screen w-screen flex">
      <aside className="bg-[#F8F9FA] h-screen w-100">
        <SideBar />
      </aside>
      <div className="content bg-[#E9ECEF] h-screen w-screen">

      </div>
    </main>
  )
}

export default Dashboard