import React, { useState, useEffect } from 'react'
import Display from '../display/Display'
import Form from '../form/Form'
import { useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {

  const [cellphones, setCellphonesState] = useState([])

  const dispatch = useDispatch()

  const setCellphoneArray = (arr) => {
    return {
        type: 'SET_CELLPHONE_ARRAY',
        cellphoneArray: arr,
    }
}

  useEffect(() => {
    async function fetchMyAPI() {
      await fetch('/api/cellphone-list').then(res => res.json()).then(data => {
        dispatch(setCellphoneArray(data.cellphoneArray))
        setCellphonesState(() => data.cellphoneArray)
      })
    }
    fetchMyAPI()
  }, [])


  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"><Display cellphoneList={cellphones} /></Route>
            <Route path="/cellphone"><Form /></Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
