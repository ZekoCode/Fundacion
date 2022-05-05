import React from 'react';
import ReactDOM from 'react-dom';
import './Styles.css'
import SessionState from './context/session/SessionState';
import App from './App';
import ProfesorState from './context/profesor/ProfesorState';
const root=document.getElementById('root')

ReactDOM.render(
    <React.StrictMode>
        <SessionState>
            <ProfesorState>
                <App/>
            </ProfesorState>
        </SessionState>
    </React.StrictMode>
,root);
