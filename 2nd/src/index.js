import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const element = (
    <table>
        <tr>
            <th>Students</th>
            <th>Marks</th>
        </tr>
        <tr>
            <td>Alex</td>
            <td>89</td>
        </tr>
        <tr>
            <td>Zach</td>
            <td>93</td>
        </tr>
        <tr>
            <td>Hannah</td>
            <td>52</td>
        </tr>
    </table>
)
ReactDOM.render(element,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
