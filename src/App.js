import logo from './logo.svg'
import './App.css'
import { useState } from "react";
function App () {
  const [dob, setDOB] = useState();
  const [day, setDay] = useState();
  const [week, setWeek] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const hendelCalculateAge = () => {
     let day = new Date(dob),
      today = new Date(),
      time = day.getTime(),
      timenow = today.getTime(),
      value = timenow - time,
      getday = Math.floor(value/(1000*60*60*24)),
      week = Math.floor(value/(1000*60*60*24*7)),
      month =Math.floor(value/(1000*60*60*24*30.4375)),
      year  = Math.floor(value/(1000*60*60*24*365.25));
      setDay(getday);
      setYear(year);
      setWeek(week)
      setMonth(month)
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <div class='container'>
          <input type='date' id='dob' name='dob' onChange={(e) => setDOB(e.target.value)} />
          <button id='submit' onClick={() => hendelCalculateAge()}>Calculate Age</button>
          <div class='date'>
            <div>
              <p id='year'>{year}</p>
              <span>Year</span>
            </div>
            <div>
              <p id='month'>{month}</p>
              <span>Months</span>
            </div>
            <div>
              <p id='week'>{week}</p>
              <span>Week</span>
            </div>
            <div>
              <p id='day'>{day}</p>
              <span>Days</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
