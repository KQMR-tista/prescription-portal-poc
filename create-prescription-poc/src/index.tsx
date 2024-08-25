import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Redux state store toolkit imports*/
import {Provider} from 'react-redux';
import {stateStore} from './store/store';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"/>

        {/*Make redux state store available to all components*/}
        <Provider store={stateStore}>
            <App/>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
