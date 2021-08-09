import React from 'react';
import './Bottom.scss';
import { Link } from 'react-router-dom';
function Bottom(props){
    const {login} = props;
  return(
      <section className="bottom">
          <Link to={login ? "/" : '/login'}><h1>Semicolon</h1></Link>
      </section>
  );
}
export default Bottom;