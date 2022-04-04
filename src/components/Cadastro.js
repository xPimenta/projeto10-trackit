import styled from 'styled-components';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import logo from "./../assets/logo.png"
import axios from 'axios';

export default function Cadastro() {

  const navigate = useNavigate(); 

  function cadastrar() { 
    const URL ="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promise = axios.post(URL,{
        email: email,
        name: nome,
        image: foto,
        password: senha
    });

    promise.then(response =>{
      const {data} = response;
      console.log(data);
      navigate("/");
    });
    promise.catch(()=>{alert("Ocorreu algum erro, tente novamente")});
  }

  const[email, setEmail] = useState("");
  const[senha, setSenha] = useState("");
  const[nome, setNome] = useState("");
  const[foto, setFoto] = useState("");

  return (
    <Container>
      <img src={logo} alt="lulç"/>
      <input type="text" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <input type="text" placeholder='senha' value={senha} onChange={(e) => setSenha(e.target.value)}></input>
      <input type="text" placeholder='nome' value={nome} onChange={(e) => setNome(e.target.value)}></input>
      <input type="text" placeholder='foto' value={foto} onChange={(e) => setFoto(e.target.value)}></input>
      <button onClick={cadastrar}>Cadastrar</button>
        <Link className="redirectLink" to="/">Já tem uma conta? Faça login!</Link>
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