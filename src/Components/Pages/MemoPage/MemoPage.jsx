import React,{useState,useCallback,useEffect} from 'react';
import './MemoPage.scss';
import { faTrashAlt,faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { Redirect, useLocation } from 'react-router-dom';
function MemoPage({ isLogin }){
    const location = useLocation();
    console.log(location.day == "null")
    const [users,setUsers] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    useEffect(()=> {
       const fetch = async  () => {
            try{
                setError(null);
                setUsers(null);
                setLoading(true);
                const response = await axios.get(
                    );
                setUsers(response.data);
            } catch(e) {
                setError(e);
            }
            setLoading(false);
       };
       fetch();
    },[])
    const [text,setText] = useState({
        title:'',
        content:''
    });
    const {title,content} = text;
    const onChangeMemo =useCallback(e => {
        const nextContent = {
            ...text,
            [e.target.name] : e.target.value,
        }
        setText(nextContent);
        console.log('title:',title);
        console.log('content:',content);
    },[title,content])
    const onClickAddMemo = useCallback(e=>{
        console.log('title:',title,'content:',content);
        setText({
            title:'',
            content:''
        })
    },[title,content]);
    if(location.day == "null") {
        console.log("return");
        return (<Redirect to="/"/>)
    }
    if (!isLogin) {
        return (<Redirect to="/login" />)
    }


  return(
        <>
        <div className="memoSection">
                <aside className="sidebar">
                    <div className="addMemo">
                        <button onClick={onClickAddMemo}>메모 추가</button>
                    </div>
                    <ul className="memoList">
                        <li className="memoListHeader">메모 목록</li>
                    </ul>
                </aside>
            <div className="memoRigth">  
                <header className="menubar">
                    <div className="memoTitle">
                        <input type="text" placeholder="메모의 제목을 입력하세요." onChange={onChangeMemo} name="title" value={title}/>
                    </div>
                    <div className="memoOptions">
                        <button className="remove"><FontAwesomeIcon icon={faTrashAlt}/><p>삭제하기</p></button>
                        <button className="save"><FontAwesomeIcon icon={faSave}/><p>저장하기</p></button>
                    </div>
                </header>
                <div className="memoContent">
                    <textarea type="text" placeholder="메모내용 입력" onChange={onChangeMemo} value={content} name="content"/>
                </div>
            </div>
        </div>
      </>
  );
}
export default MemoPage;