import React, { useState } from 'react';
import './login.scss'
import Img from '../../assets/mainImg.png';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Bottom from '../Bottom/Bottom';
import axios from 'axios';
function Login(){
    const [login, setLogin] = useState({
        email : '',
        password : ''
    })
    const {email, password} = login;
    const onChangeInput = (e) => {
        const nextObj = {
            ...login,
            [e.target.name] : e.target.value 
        }
        setLogin(nextObj);
    }
    console.log(login);
    const onClickLogin = () => {
        axios.post('http://localhost:3000/api/user/login',{
            email: email,
            password: password,
        })
        .then(function (){
        }).catch(function (error){
            console.log(error);
        }).then(function(){
            setLogin({
                email : '',
                password : ''
            })
            console.log(email);
            console.log(password);
            console.log("로그인 요청");
        })
    }
    return(
        <div className="loginAllScreen">
            <section className="mainScreen">
                <img src={Img}/>
                <section className="login">
                    <header><Header/></header>
                    <section>
                        <input type="text" placeholder="아이디를 입력하세요." name="email" onChange={onChangeInput} value={email} />
                        <input type="password" placeholder="비밀번호를 입력하세요." name="password" onChange={onChangeInput} value={password} />
                        <button onClick={onClickLogin}>로그인</button>
                    </section>
                    <div><p>아직 회원이 아니신가요?</p><Link to="">회원가입하기</Link></div>
                    <footer><Bottom/></footer>
                </section>
            </section>
        </div>
    );
}
export default Login;