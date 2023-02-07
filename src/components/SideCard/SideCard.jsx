import "./SideCard.css"
import Avatar from '@mui/material/Avatar';
import profile from "../../assets/profile.jpeg"
import EmailIcon from '@mui/icons-material/Email';

export default function SideCard() {
  return (
    <div className="container">
      <Avatar 
        alt="T" 
        src={profile} 
      />
      <div>
        <EmailIcon/>
        tomas@gmail.com
      </div>
    </div>
  )
};