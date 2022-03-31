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
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  width: 100%;
  justify-content: center;
}

.habitos-title{
  display: flex;
  flex-direction: row;
  height: 34px;
}

.habitos-title h1{
  margin: 10px;
}
`;
