import styledComponents from "styled-components";
import logo2 from '../../assets/logo2.png';
import { useContext } from "react";
import UserImg from "../contexts/UserImg";

export default function Header() {

  const { img } = useContext(UserImg);
  return (
      <Headers>
        <img src={logo2} alt="lulç" />
        <img className="profPic" src={img} alt="" />
      </Headers>
  );
}

const Headers = styledComponents.div`
    height: 70px;
  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    width: 100%;
  display: flex;
  img{
    margin: 17px;
    margin-left: 18px;
  }
  
  .profPic{
    width: 51px;
    height: 51px;
    border-radius: 50%;
    position: absolute;
    right: 10px;
    top: -8px;
  }
`;