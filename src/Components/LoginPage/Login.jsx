import React, { useEffect, useState } from 'react';
import './login.scss'
import Img from '../../assets/mainImg.png';
import { Link, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import Bottom from '../Bottom/Bottom';
import axios from 'axios';
function Login(props){
    const {isLogin,setIsLogin,setUserName} = props;
    useEffect(()=> {
        console.log(isLogin);
    },[isLogin]); 
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
    const handleKeyPress = (e) => {
        if(e.key === "Enter") onClickLogin();
    }
    const onClickLogin = () => {
        if(email.length > 0 && password.length > 0){
            axios.post('http://localhost:3000/api/user/login',{
            email: email,
            password: password,
        })
            .then(function (response){
                console.log('username:',response.data.data.name);
                setUserName(response.data.data.name);
                setIsLogin(true);
                console.log("로그인 성공");
            }).catch(function (error){
                console.log(error);
                alert("계정이름과 비밀번호가 일치하지 않습니다.");
            }).then(function(){
                setLogin({
                    email : '',
                    password : ''
                })
                console.log(email);
                console.log(password);
                console.log("로그인 요청");
            })
        } else {
            alert("아이디와 비밀번호 모두 입력하세요.")
        }
        
    }

    if (isLogin) {
        console.log('in is login');
        return <Redirect to="/" />
    }

    return(
        <div className="loginAllScreen">
            <section className="mainScreen">
                <img src={Img}/>
                <section className="login">
                    <header><Header/></header>
                    <section>
                        <input type="text" placeholder="아이디를 입력하세요." name="email" onChange={onChangeInput} onKeyPress={handleKeyPress} value={email} />
                        <input type="password" placeholder="비밀번호를 입력하세요." name="password" onChange={onChangeInput} onKeyPress={handleKeyPress} value={password} />
                        <button onClick={onClickLogin}>로그인</button>
                    </section>
                    <div><p>아직 회원이 아니신가요?</p><Link to="/signup">회원가입하기</Link></div>
                    <footer><Bottom/></footer>
                </section>
            </section>
        </div>
    );
}
export default Login;