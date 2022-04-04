import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Headers and Footers/Header";
import Footer from "./Headers and Footers/Footer";
import MyHabit from "./MyHabit";

// import Habito from './Habito';

export default function Habitos({ token }) {
  const [habitos, setHabitos] = useState([]);
  // const [habitName, setHabitName] = useState("");
  const [habit, setHabit] = useState("");
  const [habitDays, setHabitDays] = useState([]);
  // let [color, setColor] = useState("#ffffff");
  // const navigate = useNavigate();
  console.log(habitDays);
  console.log(habit);

  function createHabit(e) {
    e.preventDefault();
    console.log(habit, habitDays);
    if (habitDays.length === 0) {
    } else {
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
          console.log(data);
          setHabit("");
          setHabitDays([]);

          setHabit([...habit, data]);
        })
        .catch(({ response }) => {
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
        console.log(data);
        setHabitos(data);
      })
      .catch(({ response }) => {
        console.log(response);
      });
  }, []);

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

              {habitos.map((habit) => (
                <MyHabit
                  habitData={habit}
                  // deleteHabit={deleteHabit}
                  key={habit.id}
                />
              ))}
            </div>

            {/* <div className='my-habits'>
                <Habito />
              </div> */}
          </div>

          <div className="semHabito">
            <h2>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </h2>
          </div>
        </div>
      </Container>
      <Footer />
    </>
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
            Salvar
          </button>
          <button className="cancel">Cancelar</button>
        </div>
      </CreateHab>
    );
  }
}

const CreateHab = styled.div`
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

    button {
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
      color: #ffffff;
      background-color: black;
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
  height: calc(100vh - 84px);
  width: 100vw;

  .center-habits {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .habitos {
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
