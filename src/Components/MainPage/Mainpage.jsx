import React,{useEffect, useState} from 'react';
import './MainPage.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft,faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import axios from 'axios';
function Mainpage(){
    const today = new Date();//오늘 날짜정보
    let todayYear = today.getFullYear();//오늘 연도
    let todayMonth = today.getMonth() + 1;//오늘 달
    const nowLastday = new Date(todayYear,todayMonth,0).getDate(); //그 달의 마지막날
    const firstDay = new Date(todayYear, todayMonth-1,1).getDay(); // 해당 달의 1일의 요일
    // const {todayYear,todayMonth,nowLastday,firstDay} = props;
    const [year, setYear] = useState(todayYear); //year: 2021
    const [month, setMonth] = useState(todayMonth);// month : 8
    const [lastday, setLastday] = useState(nowLastday); // lastday : 31
    const [day, setDay] = useState(firstDay); // 
    const setBeforeMonth = () => {
        const beforeMonth =  month - 1;
        setMonth(beforeMonth);  // month : 7
        setLastday(new Date(year,beforeMonth,0).getDate());
        setDay(new Date(year,beforeMonth-1,1).getDay());
        if(month <= 1) {
            setYear(year-1);
            setMonth(12);
        }
    }
    const setPrevMonth = () => {
        const preveMonth = month+1;
        setMonth(preveMonth);
        setLastday(new Date(year,preveMonth,0).getDate());
        setDay(new Date(year,preveMonth-1,1).getDay());
        if(month >= 12) {
            setYear(year+1);
            setMonth(1);
        }
    }
    const dayArr = [];
    for(let i = 0;i<lastday;i++) dayArr[i] = i+1
    for(let i = 0;i<day;i++) dayArr.unshift(null);
  return(
      <div className="main">
          <section className="calendar">
              <header>
                  <div><p>{year}년</p>{month}월</div>
              </header>
              <section className="contents">
                  <div className="buttonSection" onClick={setBeforeMonth}><FontAwesomeIcon icon={faArrowLeft}/></div>
                  <section>
                      <ul className="days">
                          <li style={{color:"red"}}>일</li>
                          <li>월</li>
                          <li>화</li>
                          <li>수</li>
                          <li>목</li>
                          <li>금</li>
                          <li style={{color:"blue"}}>토</li>
                      </ul>
                      <ul className="dayBox">
                          {dayArr.map(day => (
                              <Link className='Link' to={`/memoPage?year=${year}&month=${month}&day=${day}`}><li className="dayDiv" id={`${year}-${month}-${day}`}>
                                  <p className="eachDay">{day}</p>
                                </li></Link>
                          ))}
                      </ul>
                  </section>
                  <div className="buttonSection" onClick={setPrevMonth}><FontAwesomeIcon icon={faArrowRight}/></div>
              </section>
          </section>
      </div>
  );
}
export default Mainpage;