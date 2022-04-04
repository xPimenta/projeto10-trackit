import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import styled from "styled-components";


import Header from "./Headers and Footers/Header";
import Footer from "./Headers and Footers/Footer";
import UserContext from "./contexts/UserContext";

// import Header from "../../components/Header"
// import Menu from "../../components/Menu"
import TodayHabit from "./TodayHabit";
// import LoggedContext from "../../providers/LoggedContext"
import CheckedHabitsValue from "./contexts/CheckedHabitsValue";

// import * as S from "./styles"

export default function Today() {
  require("dayjs/locale/pt-br");
  dayjs.locale("pt-br");
  let todayDate = dayjs().format("dddd, DD/MM").replace("-feira", "");
  todayDate = todayDate[0].toUpperCase() + todayDate.slice(1);
  const navigate = useNavigate();
//   const { loggedData } = useContext(LoggedContext);
  const { token } = useContext(UserContext);
  if (token === []) navigate("/");

  const checkedHabitsValueUpdate = useContext(CheckedHabitsValue);
  const [todayHabits, setTodayHabits] = useState([]);
  const [checkHabits, setCheckHabits] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setTodayHabits(data);
        let count = 0;
        data.map((habit) => {
          if (habit.done) count++;
		  return habit;
        });
        setCheckHabits(count);
        setTimeout(() => setIsLoading(false), 500);
      })
      .catch(({ response }) => {
        console.log(response);
        setTimeout(() => setIsLoading(false), 500);
      });
  }, [token]);

  useEffect(() => {
    checkedHabitsValueUpdate.setCheckedHabitsValue(
      checkHabits / todayHabits.length
    );
  }, [checkHabits, todayHabits.length]);

  function checkHabit(id, done) {
    setIsLoading(true);
    if (!done) {
      axios
        .post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
          "",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          let updateHabits = todayHabits.map((habit) => {
            if (habit.id === id) {
              habit.done = !habit.done;
              habit.currentSequence++;
              if (habit.currentSequence > habit.highestSequence)
                habit.highestSequence = habit.currentSequence;
            }
            return habit;
          });
          setTodayHabits(updateHabits);
          setCheckHabits(checkHabits + 1);
          setIsLoading(false);
        })
        .catch(({ response }) => {
          console.log(response, "erro");
          setIsLoading(false);
        });
    } else {
      axios
        .post(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`,
          "",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          let updateHabits = todayHabits.map((habit) => {
            if (habit.id === id) {
              habit.done = !habit.done;
              habit.currentSequence--;
              habit.highestSequence--;
              if (habit.currentSequence < 0) habit.currentSequence = 0;
            }
            return habit;
          });
          setTodayHabits(updateHabits);
          setCheckHabits(checkHabits - 1);
          setIsLoading(false);
        })
        .catch(({ response }) => {
          console.log(response, "erro");
          setIsLoading(false);
        });
    }
  }
  return (
    <>
      <Header />
      <Todays>
        <h1>{todayDate}</h1>
        {checkHabits > 0 ? (
          <h3>
            {Math.floor((checkHabits / todayHabits.length) * 100)}% dos hábitos
            concluídos
          </h3>
        ) : (
          <h3>Nenhum hábito concluído ainda</h3>
        )}

        <div className="habitsContainer">
          {todayHabits
            ? todayHabits.map((habit) => (
                <TodayHabit
                  key={habit.id}
                  habitData={habit}
                  checkHabit={checkHabit}
                  isLoading={isLoading}
                />
              ))
            : ""}
        </div>
      </Todays>
      <Footer />
    </>
  );
}

const Todays = styled.main`
  width: 100%;
  height: calc(100vh - 140px);
  display: flex;
  flex-direction: column;
  font-family: "Lexend Deca";
  background-color: #e5e5e5;
  padding: 28px 18px;
  h1 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  h3 {
    font-size: 17.976px;
    line-height: 22px;
    color: #bababa;
  }
  .habitsContainer {
    margin-top: 28px;
  }
`;
