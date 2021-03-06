import styled from "styled-components";
import { useState, useEffect , useContext} from "react";
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';

import Header from "./Headers and Footers/Header";
import Footer from "./Headers and Footers/Footer";
import MyHabit from "./MyHabit";
import UserContext from "./contexts/UserContext";

export default function Habitos() {
  const {token} = useContext(UserContext);

  const [habitos, setHabitos] = useState([]);
  const [habit, setHabit] = useState("");
  const [habitDays, setHabitDays] = useState([]);
  const [statusButton2, setStatusButton2] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);

  function createHabit(e) {
    e.preventDefault();
    console.log(habit, habitDays);
    if (habit === "") alert("Preencha o nome do seu hábito");
    else if (habitDays.length == 0) alert("Preencha os dias da semana");
    else if (habitDays.length === 0) {
    } else {
      setStatusButton2(true);
      axios
        .post(
          "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
          {
            name: habit,
            days: habitDays,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(({ data }) => {
          setStatusButton2(false);
          console.log(data);
          setHabit("");
          setHabitDays([]);
          setHabitos([...habitos, data]);
        })
        .catch(({ response }) => {
          setStatusButton2(false);
          console.log(response);
        });
    }
  }

  useEffect(() => {
    
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setHabitos(data);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }, [token]);

  return (
    <Main>
      <div className="header">
        <Header />
      </div>
      <Container>
        <div className="habitos">
          <div className="habitos-item">
            <div className="habitos-title">
              <h1>Meus hábitos</h1>
              <button
                onClick={() => setCreateOpen(!createOpen)}
                className="addHabit"
              >
                +
              </button>
            </div>

            <div className="center-habits">
              {createOpen === true ? (
                <CreateHabitForm onSubmit={createHabit}>
                  <input
                    type="text"
                    value={habit}
                    onChange={(e) => {
                      setHabit(e.target.value);
                    }}
                    placeholder="Nome do hábito"
                  />
                  <CreateHabit />
                </CreateHabitForm>
              ) : (
                ""
              )}

              {habitos.map((habit) => (
                <MyHabit
                  habitData={habit}
                  comp={
                    (id) => {
                      console.log(id);
                      setHabitos(
                        habitos.filter((habit) => habit.id !== id)
                      );
                    }
                  }
                  key={habit.id}
                />
              ))}
            </div>
          </div>

          {habitos.length === 0 ? (
            <div className="semHabito">
              <h2>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
                para começar a trackear!
              </h2>
            </div>
          ) : (
            <div className="semHabito"></div>
          )}
        </div>
      </Container>
      <div className="footer">
        <Footer />
      </div>
    </Main>
  );

  function CreateHabit() {
    const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];

    const ButtonsDaysOfWeek = daysOfWeek.map((day, index) => {
      return (
        <button
          className={`button-day ${
            habitDays.includes(index) ? "day-selected" : ""
          }`}
          key={index}
          onClick={() => {
            if (habitDays.includes(index)) {
              setHabitDays([...habitDays.filter((day) => day !== index)]);
            } else {
              setHabitDays([...habitDays, index]);
            }
          }}
        >
          {day}
        </button>
      );
    });

    return (
      <CreateHab>
        <div className="habito-days">{ButtonsDaysOfWeek}</div>
        <div className="cancel-save">
          <button type="submit" className="save">
          {statusButton2 === true ? <ThreeDots color="white"/> : "Salvar"}
          </button>
          <button onClick={() => setCreateOpen(!createOpen)} className="cancel">
            Cancelar
          </button>
        </div>
      </CreateHab>
    );
  }
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

const CreateHab = styled.div`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;

  .habito-days {
    display: flex;
    flex-direction: row;

    .button-day {
      background: white;
      border: 1px solid #d5d5d5;
      box-sizing: border-box;
      border-radius: 5px;
      margin: 2px;
      margin-top: 8px;
      width: 30px;
      height: 30px;
      font-size: 19.976px;
      line-height: 25px;
      color: #dbdbdb;
    }
    .day-selected {
      color: #fff;
      background: #cfcfcf;
      border: 1px solid #d5d5d5;
      box-sizing: border-box;
      border-radius: 5px;
      margin: 2px;
      margin-top: 8px;
      width: 30px;
      height: 30px;
    }
  }

  .cancel-save {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 20px;

    .save {
      // cancel and save buttons
      min-width: 84px;
      height: 35px;
      border-radius: 4.63636px;
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 15.976px;
      line-height: 20px;
      text-align: center;
      color: white;
      background: #52B6FF;
      border:none;
      display: flex;
      justify-content: center;
      align-items: center;

    }
    .cancel {
      // cancel and save buttons
      min-width: 84px;
      height: 35px;
      border-radius: 4.63636px;
      font-family: "Lexend Deca";
      font-style: normal;
      font-weight: 400;
      font-size: 15.976px;
      line-height: 20px;
      text-align: center;
      color: #52B6FF;
      background: none;
      border:none;

    }

    
  }
`;

const CreateHabitForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  padding-right: 18px;
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  margin-top: 22px;
  margin-right: 40px;

  input {
    height: 45px;
    left: 36px;
    top: 165px;
    padding-left: 11px;

    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #666666;
  }
`;

const Container = styled.div`
  border-bottom: 1px solid #ddd;
  display: flex;
  position: relative;
  flex-direction: column;
  background: #e5e5e5;
  height: 100%;
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
    margin-bottom: 80vh;

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
