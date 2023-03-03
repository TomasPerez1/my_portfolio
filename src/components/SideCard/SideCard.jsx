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
        sx={{
          width: "100px",
          height: "100px",
          border: "0.8px solid black"
        }}
      />
    <div className="items">
      <a 
        className="item"
        href="https://www.linkedin.com/in/tomas-perez-developer/"
        target="_blank"
      >
        <LinkedInIcon
          sx={{
            margin: "0",
            padding: "0",
          }}
        />
        <p className="text">Linkedin</p>
      </a>
      <a 
        className="item"
        href="https://github.com/TomasPerez1"
        target="_blank"
      >
        <GitHubIcon
        sx={{
          margin: "0",
          paddingBottom: "2px",
        }}
        />
        <p className="text">Git Hub</p>
      </a>
      <a 
        className="item"
        href={CV}
        download="CV_Tomas_Perez"
      >
        <ContactPageOutlinedIcon
        sx={{
          paddingBottom: "2px",
        }}
        />
        <p className="text">CV resume</p>
      </a>
    </div>
    </div>
  )
};