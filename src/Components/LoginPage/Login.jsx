import React from 'react';
import './login.scss'
import Img from '../../assets/mainImg.png';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Bottom from '../Bottom/Bottom';
function Login(){
    return(
        <div className="loginAllScreen">
            <section className="mainScreen">
                <img src={Img}/>
                <section className="login">
                    <header><Header/></header>
                    <section>
                        <input type="text" placeholder="아이디를 입력하세요."/>
                        <input type="password" placeholder="비밀번호를 입력하세요."/>
                        <button>로그인</button>
                    </section>
                    <div><p>아직 회원이 아니신가요?</p><Link to="">회원가입하기</Link></div>
                    <footer><Bottom/></footer>
                </section>
            </section>
        </div>
    );
}
export default Login;