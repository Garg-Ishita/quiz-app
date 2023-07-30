import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {

  const navigate=useNavigate();
  const ret =()=>{
    navigate('/')
  }
  return (
    <div className="header">
      <button to='/' className="title-button" onClick={ret}>
         Quiz Hub
      </button>
      <hr className="divider" />
    </div>
  );
};

export default Header;