import SideBar from "../components/DashBoardComponents/SideBar"
import Content from "../components/DashBoardComponents/Content"


const Dashboard = () => {
  return(
    <div className="h-screen w-screen flex">
      <SideBar/>
      <Content />
    </div>   
  )
}

export default Dashboard