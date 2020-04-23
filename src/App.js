import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Line } from 'rc-progress'

import './App.css'
import timeData from './data/times'
//import schoolbell from './sounds/schoolbell.wav'

const App = () => {
  const nextEventStyle = {
    fontSize: '80px',
    color: 'grey',
  }

  const small = {
    fontSize: '20px',
  }

  const data = timeData()

  const [clock, setClock] = useState(new moment())
  const [currentEventState, setCurrentEventState] = useState({
    text: 'initialText',
  })

  let loopIndex = 0

  const findEventIndex = () => {
    if (clock.isAfter(data[data.length - 1].start) || clock.isBefore(data[0])) {
      return data.length - 1
    } else {
      for (loopIndex = 0; loopIndex < data.length; loopIndex++) {
        if (clock.isBetween(data[loopIndex].start, data[loopIndex + 1].start)) {
          return loopIndex
        }
      }
    }
  }

  const eventIndex = findEventIndex()
  const currentEvent = data[eventIndex]
  const nextDaysFirstEvent = data[0].start.add(1, 'days')
  const nextEvent =
    eventIndex === data.length - 1 ? nextDaysFirstEvent : data[eventIndex + 1]

  console.log('current', currentEvent.start.format())
  console.log('next', nextEvent.start.format())
  console.log('clock', clock.format())

  //const alarm = new Audio(schoolbell)

  //const playAlarm = () => alarm.play()

  if (currentEvent.text !== currentEventState.text) {
    setCurrentEventState(currentEvent)
  }

  const duration = nextEvent.start.diff(currentEvent.start, 'minutes')
  console.log('duration ', duration)
  const timeLeft = nextEvent.start.diff(clock, 'minutes')
  console.log('seconds ', timeLeft)
  const prosentsLeft = Math.round((100 * timeLeft) / duration)

  useEffect(() => {
    const timer = () => {
      setClock(new moment())
    }
    setInterval(timer, 15000)
  }, [])

  console.log(currentEvent)

  return (
    <div className="App">
      <div>
        <img alt="" src={currentEvent.image} />
        <p style={small}>
          Icons made by{' '}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {' '}
            www.flaticon.com
          </a>
        </p>
      </div>
      <div>
        <p>{currentEvent.text}</p>
        <p> jäljellä {timeLeft} min</p>
      </div>
      <div>
        <Line
          percent={100 - prosentsLeft}
          strokeWidth={4}
          strokeColor="#99004C"
        />
      </div>
      <div>
        <p style={nextEventStyle}>Seuraavaksi: {nextEvent.text}</p>
      </div>
    </div>
  )
}

export default App
