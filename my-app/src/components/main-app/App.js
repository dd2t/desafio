import React, { useState, useEffect } from 'react'
import './App.css';
import Display from '../display/Display'
import Form from '../form/Form'
import Formm from '../form/Formm'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App({ cellphoneArray, dispatch }) {
  const [cellphoneList, setCellphoneList] = useState(0)

  const setCellphoneArray = (arr) => {
    return {
        type: 'SET_CELLPHONE_ARRAY',
        cellphoneArray: arr,
    }
}

  // useEffect(() => {
  //   fetch('/cellphone-list').then(res => res.json()).then(data => {
  //     setCellphoneList(() => ({
  //       cellphoneArray: data.cellphoneArray
  //     }));
  //   });
  // }, []);

  useEffect(() => {
    fetch('/cellphone-list').then(res => res.json()).then(data => {
      dispatch(setCellphoneArray(data.cellphoneArray))
    })
  })

  return (
    
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"><Display cellphoneList={cellphoneArray} /></Route>
          <Route path="/cellphone"><Form cellphoneList={cellphoneArray} /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default connect(state => ({ cellphoneArray: state.cellphoneArray }))(App);
