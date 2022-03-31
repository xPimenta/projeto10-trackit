import styled from 'styled-components';
import Header from './Headers and Footers/Header';
import Footer from './Headers and Footers/Footer';

export default function Habitos() {
  return (
    <>
    <Header/>
    <Container>
      

      <div className="habitos">
        <div className="habitos-item">
          <div className="habitos-title">
            <h1>Meus hábitos</h1>
            <button className="addHabit">+</button>
            
          </div>
        </div>
      </div>
    </Container>
    <Footer/>
    </>
  );
}

const Container = styled.div`
border-bottom: 1px solid #ddd;
display: flex;
position: relative;
flex-direction: column;
background: #E5E5E5;
height: calc(100vh - 84px);
width: 100vw;
  
.habitos{
  display: flex;
  flex-direction: column;
}
.habitos-item{
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-left: 17px;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
}

.habitos-title{
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  height: 34px;

  h1{
    margin: 10px;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;


color: #126BA5;
  }

  button{
    color: #E5E5E5;
    position: absolute;
    right: 65px;
    background: #52B6FF;
border-radius: 4.7px;
border:none;
height:28px;
width:32px;

}
}


`;
