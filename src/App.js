import { useState } from 'react';
import Login from "./Components/LoginPage/Login";
import { Route,Redirect } from 'react-router';
import './App.scss'
import MainPage from "./Components/MainPage/Mainpage";
import Header from "./Components/Header/Header";
import MemoPage from "./Components/Pages/MemoPage/MemoPage";
import Bottom from "./Components/Bottom/Bottom";
function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <Route path="/login" >
        <Login />
      </Route>
      <Header/>
      <Route path="/" exact >
        <MainPage isLogin={isLogin} />
      </Route>
      <Route path="/memopage">
        <MemoPage isLogin={isLogin}/>
      </Route>
      <Bottom login={isLogin}/>
    </div>
  );
}

export default App;
