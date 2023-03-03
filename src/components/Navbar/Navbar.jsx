import "./Navbar.css"
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TranslateIcon from '@mui/icons-material/Translate';


export default function Navbar() {
  return (
    <div className='nav-container'>
      <LightModeIcon/>
      <TranslateIcon/>
      <a href="#about">
        About
      </a>
      <a href="proyects">
        Proyects
      </a>
      <a href="skills">
        Skills
      </a>
      <a href="contact_me">
        Contact me
      </a>
    </div>
  )
}