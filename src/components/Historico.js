import styled from "styled-components";
import Header from "./Headers and Footers/Header";
import Footer from "./Headers and Footers/Footer";

export default function Historico() {
  return (
    <Main>
      <div className="header">
        <Header />
      </div>
      <Container>
        <div className="habitos">
          <div className="habitos-item">
            <div className="habitos-title">
              <h1>Histórico</h1>
            </div>

          <div className="semHabito">
            <h2>
            Em breve você poderá ver o histórico dos seus hábitos aqui!
            </h2>
          </div>
          </div>
        </div>
      </Container>
      <div className="footer">
        <Footer />
      </div>
    </Main>
  );

}
const Main = styled.div`
  .header {
    position: fixed;
    z-index: 3;
    height: 70px;
    background: #126ba5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    width: 100%;
    display: flex;
    img {
      margin: 17px;
      margin-left: 18px;
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
`;



const Container = styled.div`
  border-bottom: 1px solid #ddd;
  display: flex;
  position: relative;
  flex-direction: column;
  background: #e5e5e5;
  height: 100vh;
  width: 100vw;

  .center-habits {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .habitos {
    margin-top: 70px;
    display: flex;
    flex-direction: column;
  }
  .habitos-item {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 17px;
    margin-right: 20px;
    margin-bottom: 20px;
    width: 100%;
    justify-content: center;
  }

  .habitos-title {
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    height: 34px;

    h1 {
      margin: 10px;
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 22.976px;
      line-height: 29px;

      color: #126ba5;
    }

    button {
      // add habit (+) blue
      color: #e5e5e5;
      position: absolute;
      right: 65px;
      background: #52b6ff;
      border-radius: 4.7px;
      border: none;
      height: 28px;
      width: 32px;
    }
  }

  .semHabito {
    margin: 13px;
    margin-top: 30px;
    margin-right: 30px;

    h2 {
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 17.976px;
      line-height: 22px;

      color: #666666;
    }
  }
`;
