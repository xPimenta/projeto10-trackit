import styledComponents from "styled-components";
import logo2 from '../../assets/logo.png';

export default function Footer() {
  return (
      <Footers>
        <div className="footer">
        <h1>Hábitos</h1>
        <h1>Histórico</h1>
        </div>


        <div className="hojePercent">
        <img className="profPic" src={logo2} alt="lulç" />
        </div>
    
      </Footers>
  );
}

const Footers = styledComponents.div`
height: 101px;   
// background: #126BA5; 
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
    
    h1{
      margin: 10px;
      font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
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