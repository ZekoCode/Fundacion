import React from 'react';
import ReactDOM from 'react-dom';
import './Styles.css'
import SessionState from './context/session/SessionState';
import App from './App';
import ProfesorState from './context/profesor/ProfesorState';
import AdministradorState from './context/administrator/adminState';

const root=document.getElementById('root')

ReactDOM.render(
    <React.StrictMode>
        <SessionState>
            <AdministradorState>
                <ProfesorState>
                        <App />
                </ProfesorState>
            </AdministradorState>
        </SessionState>
    </React.StrictMode>
,root);
