import styledComponents from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar , buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



export default function Footer() {
  // let navigate = useNavigate();

  return (
      <Footers>
        <div className="footer">
        <Link className="redirectLink" to="/habitos">Hábitos</Link>
        <Link className="redirectLink" to="/historico">Histórico</Link>
        </div>

        <Link to="/hoje" className="hojePercent">
        <div className="percent">
        <CircularProgressbar styles={buildStyles({ textColor: '#fff',})} value={50} text="Hoje" />;
        </div>
        </Link>
      </Footers>
  );
}

// const CircularProgressbar = styledComponents(CircularProgressbar);


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
  .percent{
    textcolor: white;
    padding: 6px;
    background: #52B6FF;
    position: relative;
    width: 91px;
    height: 91px;
    border-radius: 50%;
  }

`;