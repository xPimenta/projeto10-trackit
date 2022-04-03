import styled from 'styled-components';
import Header from './Headers and Footers/Header';
import Footer from './Headers and Footers/Footer';
import trash from './../assets/trash.png';

export default function Habitos() {
  return (
    <>
      <Header />
      <Container>


        <div className="habitos">
          <div className="habitos-item">
            <div className="habitos-title">
              <h1>Meus hábitos</h1>
              <button className="addHabit">+</button>
            </div>

            <div className="center-habits">
              <div className="create-habito">
                <input type="text" placeholder="Nome do hábito" />
                <div className="habito-days">
                  <button>D</button>
                  <button>D</button>
                  <button>D</button>
                  <button>D</button>
                  <button>D</button>
                  <button>D</button>
                  <button>D</button>
                </div>
                <div className="cancel-save">
                  <button className="save">Salvar</button>
                  <button className="cancel">Cancelar</button>

                </div>
              </div>

              <div className='my-habits'>
                <div className="box-habito">
                  <div className="habito-title-days">
                    <h2>Hábito 1</h2>
                    <div className="habito-days">
                      <button>D</button>
                      <button>D</button>
                      <button>D</button>
                      <button>D</button>
                      <button>D</button>
                      <button>D</button>
                      <button>D</button>
                    </div>
                  </div>
                  <img src={trash} alt="delete" />
                </div>
              </div>
            </div>


            <div className="semHabito">
              <h2>Você não tem nenhum hábito cadastrado ainda.
                Adicione um hábito para começar a trackear!</h2>
            </div>
          </div>

        </div>
      </Container>
      <Footer />
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

.habito-title-days{
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-right: 18px;
  width: 340px;
  height: 180px;
  background: #FFFFFF;
border-radius: 5px;
  margin-top: 22px;
  margin-right: 40px;

  button{
    background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
color: grey;
margin: 2px;
margin-top: 8px;
width: 30px;
height: 30px;
}

  h2{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
/* identical to box height */

color: #666666;

  }
}

.cancel-save{
  display: flex;
  flex-direction: row-reverse;
  margin-top: 20px;

  button{
    width: 84px;
height: 35px;

background: #52B6FF;
border-radius: 4.63636px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 15.976px;
line-height: 20px;

text-align: center;

color: #FFFFFF;
  }
}

.center-habits{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.create-habito{
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-right: 18px;
  width: 340px;
  height: 180px;
  background: #FFFFFF;
border-radius: 5px;
  margin-top: 22px;
  margin-right: 40px;

  input{
height: 45px;
left: 36px;
top: 165px;
padding-left: 11px;

background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;

color: #DBDBDB;
  }

  button{
    background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
color: grey;
margin: 2px;
margin-top: 8px;
width: 30px;
height: 30px;
}
}

.semHabito{
  margin: 13px;
  margin-top: 30px;
  margin-right: 30px;

  h2{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;
  }
}
  
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
