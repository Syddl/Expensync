
const Footer = () => {
  return(
    <footer className="bg-[#171717] w-full h-100">
      <div className="container flex text-white font-[Montserrat]">
        <div className="personalInfo">
          <h1 >Sydd</h1>
          <div className="socials">

          </div>
        </div>
        <div className="discover">
          <h1 >Discover</h1>
          <ul>
            <li>Expense Categories</li>
            <li>Budgeting Tips</li>
            <li>Saving Strategies</li>
            <li>Financial Insights</li>
            <li>Reports & Analytics</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="company">
        <h1 >Company</h1>
          <ul>
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="help">
        <h1 >Help</h1>
          <ul>
            <li>Help Center</li>
            <li>Contact Support</li>
            <li>FAQs</li>
            <li>Feedback</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;