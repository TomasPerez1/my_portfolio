import "./SideCard.css"
import Avatar from '@mui/material/Avatar';
import profile from "../../assets/profile.jpeg"
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
export default function SideCard() {
  return (
    <div className="container">
      <Avatar 
        alt="T" 
        src={profile}
      />
      <div className="item">
        <EmailIcon
        sx={{
          backgroundColor: "brown"
        }}
        />
        <p className="text">tomas@gmail.com</p>
      </div>
      <div className="item">
        <LinkedInIcon
        sx={{
          backgroundColor: "green"
        }}
        />
        <p className="text">ggg</p>
      </div>
      <div className="item">
        <GitHubIcon
        sx={{
          backgroundColor: "green"
        }}
        />
        <p className="text">ggg</p>
      </div>
      <div className="item">
        <ContactPageOutlinedIcon
        />
      </div>
    </div>
  )
};