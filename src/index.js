import React from 'react';
import ReactDOM from 'react-dom';
import './Styles.css'
import SessionState from './context/session/SessionState';
import App from './App';
const root=document.getElementById('root')

ReactDOM.render(
    <SessionState>
            <App/>
    </SessionState>
,root);
