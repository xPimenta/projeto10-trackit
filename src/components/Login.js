import styled from 'styled-components';
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from 'axios';
import logo from "./../assets/logo.png"
import { ThreeDots } from 'react-loader-spinner';

import UserContext from './contexts/UserContext';
import UserImg from './contexts/UserImg';

export default function Login() {

  const token = useContext(UserContext);
  const img = useContext(UserImg);

  const [statusButton, setStatusButton] = useState(false);



  let navigate = useNavigate();

  function login() {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
    setStatusButton(true);
    const promise = axios.post(URL, {
      email,
      password: senha
  });
  promise.then(response => {
    const { data } = response;
    console.log(data);
    token.setToken(data.token);
    img.setImg(data.image);
    navigate("hoje");
    setStatusButton(false);
  });
  promise.catch(()=>{alert("Usuário ou senha incorretos")});
  setStatusButton(false);
  }

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <Container>
      <img src={logo} alt="logo" />
      <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input type="text" placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
      <button onClick={login}>{statusButton === true ? <ThreeDots color="white"/> : "Entrar"}</button>
      <Link className="redirectLink" to="/cadastro">Não tem uma conta? Cadastre-se</Link>
    </Container>
  );
}

const Container = styled.div`
border-bottom: 1px solid #ddd;
display: flex;
align-items: center;
flex-direction: column;
height:100vh;

background: #FCFCFC;
 
 img{
     margin-top: 68px;
     margin-bottom: 30px;
    width: 180px;
    height: 180px;
 }

    input{
        padding-left: 11px;
        margin: 3px;
        width: 303px;
        height: 45px;
        font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;

background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;


color: #DBDBDB;

    }

    button{
        margin: 3px;
        width: 303px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20.976px;
line-height: 26px;
text-align: center;

color: #FFFFFF;
background: #52B6FF;
border-radius: 4.63636px;

    }

    .redirectLink{
        margin: 23px;
        font-family: 'Lexend Deca';
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;

color: #52B6FF;
    }
    
`;