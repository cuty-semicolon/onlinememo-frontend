import Login from "./Components/LoginPage/Login";
import { Route,Redirect } from 'react-router';
import './App.scss'
import MainPage from "./Components/MainPage/Mainpage";
import Header from "./Components/Header/Header";
import MemoPage from "./Components/Pages/MemoPage/MemoPage";
import Bottom from "./Components/Bottom/Bottom";
function App() {
  let login = true;
  return (
    <div className="App">
      {
        !login && <Redirect to ="/login"/>
      }
      <Route path="/login" component={Login}/>
      <Header/>
      <Route path="/" exact component={MainPage}/>
      <Route path={`/memoPage`} component={MemoPage}/>
      <Bottom login={login}/>
    </div>
  );
}

export default App;
