import React, { useState } from 'react';
import './SignUp.scss';
import axios from 'axios';
function SignUp(){
    const [signupInfo, setSignupInfo] = useState({
        id : '',
        password : '',
        repassword : '',
        name : ''
    })
    const {id,password,repassword,name} = signupInfo;
    const onChagneSignup = (e) => {
        const nextObj = {
            ...signupInfo,
            [e.target.name] : e.target.value
        }
        setSignupInfo(nextObj);
    }
    console.log(signupInfo);
    const onClickSignup = () => {
        if(password === repassword) { 
            axios.post('http://localhost:3000/api/user/register',{
                email:id,
                password:password,
                name:name
            })
            .then(function(response){
                console.log(response);
                setSignupInfo({
                    id : '',
                    password : '',
                    repassword : '',
                    name : ''
                })
                alert("회원가입 성공");
            })
            .catch(function(error){
                console.log(error);
            })
            .then(function(){
                console.log("회원가입 요청")
            })
        } else {
            alert("비밀번호를 다시 확인해주세요.")
        }
    }
  return(
      <div className="SignupPage">
          <section className="SignupSection">
              <div><input type="text" placeholder="아이디를 입력하세요." onChange={onChagneSignup} name="id" value={id}/><button>중복확인</button></div>
              <input type="password" placeholder="비밀번호"onChange={onChagneSignup} name="password" value={password}/>
              <input type="password" placeholder="비밀번호 재확인"onChange={onChagneSignup} name="repassword" value={repassword}/>
              <input type="text"  placeholder="이름을 입력하세요"onChange={onChagneSignup} name="name"value={name} />
              <button onClick={onClickSignup}>확인</button>
          </section>
      </div>
  );
}
export default SignUp;