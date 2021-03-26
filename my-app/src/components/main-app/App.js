import React, { useEffect } from 'react'
import Display from '../display/Display'
import Form from '../form/Form'
import { useSelector, useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {

  const cellphoneArray = useSelector(state => state.cellphoneArray)
  const dispatch = useDispatch()

  const setCellphoneArray = (arr) => {
    return {
        type: 'SET_CELLPHONE_ARRAY',
        cellphoneArray: arr,
    }
}

  useEffect(() => {
    fetch('/api/cellphone-list').then(res => res.json()).then(data => {
      dispatch(setCellphoneArray(data.cellphoneArray))
    })
  }, [])

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

export default App;
