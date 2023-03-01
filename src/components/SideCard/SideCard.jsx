import "./SideCard.css"
import Avatar from '@mui/material/Avatar';
import profile from "../../assets/profile.jpeg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import CV from "../../assets/Tomas_Perez_CV.pdf"

export default function SideCard() {
  return (
    <div className="container">
      <Avatar 
        alt="T" 
        src={profile}
        sizes="10 200"
        sx={{
          marginBottom: "10px",
          width: "80%",
          height: "80%",
          border: "0.8px solid black"
        }}
      />
      <a 
        className="item"
        href="https://www.linkedin.com/in/tomas-perez-developer/"
        target="_blank"
      >
        <LinkedInIcon/>
        <p className="text">Linkedin</p>
      </a>
      <a 
        className="item"
        href="https://github.com/TomasPerez1"
        target="_blank"
      >
        <GitHubIcon/>
        <p className="text">Git Hub</p>
      </a>
      <a 
        className="item"
        href={CV}
        download=""
      >
        <ContactPageOutlinedIcon/>
        <p className="text">CV resume</p>
      </a>
    </div>
  )
};