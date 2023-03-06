import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//format(new Date(), "MM-dd-yyyy")
const DATA = [
  { id: "todo-0", name: "Eat", dateAdded: Date.parse('01 Jan 1970 00:00:00 GMT'), completed: true },
  { id: "todo-1", name: "Sleep", dateAdded: Date.parse('01 Jan 1960 00:00:00 GMT'), completed: false },
  { id: "todo-2", name: "Repeat", dateAdded: Date.now(), completed: false }
];
const sortedData = DATA.sort((a, b) => b.dateAdded - a.dateAdded);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={sortedData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
