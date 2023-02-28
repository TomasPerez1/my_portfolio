import "./SideCard.css"
import Avatar from '@mui/material/Avatar';
import profile from "../../assets/profile.jpeg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

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
        }}
      />
      <div className="item">
        <LinkedInIcon
        />
        <p className="text">Linkedin</p>
      </div>
      <div className="item">
        <GitHubIcon
        />
        <p className="text">Git Hub</p>
      </div>
      <div className="item">
        <ContactPageOutlinedIcon
        />
        <p className="text">CV resume</p>
      </div>
    </div>
  )
};