import "./Main.css"
import Navbar from "../Navbar/Navbar"
import About from "../About/About"

export default function Main() {
  return (
    <div className="main_container">
      <Navbar />
      <About/>
    </div>
  )
}