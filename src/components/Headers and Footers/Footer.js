import styledComponents from "styled-components";
import logo2 from '../../assets/logo.png';
import { Link } from "react-router-dom";

export default function Footer() {
  // let navigate = useNavigate();
  return (
      <Footers>
        <div className="footer">
        <Link className="redirectLink" to="/cadastro">Hábitos</Link>
        <Link className="redirectLink" to="/cadastro">Histórico</Link>
        </div>


        <div className="hojePercent">
        <img className="profPic" src={logo2} alt="lulç" />
        </div>
    
      </Footers>
  );
}

const Footers = styledComponents.div`
height: 101px;   
  position: absolute;
  bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;


  .footer{
    height: 70px;
    width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  background: #FFF;
    display: flex;
    
    .redirectLink{
      text-decoration: none;
      margin: 20px;
      font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 22px;
  text-align: center;
  color: #52B6FF;

  &:last-child{
    position: absolute;
    right: 0px;
    }
  }
  }
  img{
    background: red;
    position: relative;
    width: 91px;
    height: 91px;
    border-radius: 50%;
  }

`;