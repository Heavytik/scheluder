import React, { useState, useEffect } from 'react'
import './App.css'
import timeData from './data/times'

import { Line } from 'rc-progress'
import schoolbell from './sounds/schoolbell.wav'

const App = () => {
  const nextEventStyle = {
    fontSize: '80px',
    color: 'grey',
  }

  const data = timeData()

  const timeDiff = (time1, time2) => {
    const t1 = time1.split(':')
    const t2 = time2.split(':')
    const t1_h = parseInt(t1[0], 10)
    const t1_m = parseInt(t1[1], 10)
    const t2_h = parseInt(t2[0], 10)
    const t2_m = parseInt(t2[1], 10)

    const minuts = 60 * (t1_h - t2_h) + t1_m - t2_m

    return minuts
  }

  const d = new Date()
  const [clock, setClock] = useState(d.getHours() + ':' + d.getMinutes())
  const [currentEventState, setCurrentEventState] = useState({
    text: 'initialText',
  })

  const isPassed = (timeLimit) => timeDiff(timeLimit, clock) < 0

  const currentEvent = data.find((event) => !isPassed(event.end))
  const nextEvent = data[(currentEvent.id + 1) % data.length]

  const alarm = new Audio(schoolbell)

  const playAlarm = () => alarm.play()

  if (currentEvent.text !== currentEventState.text) {
    console.log(currentEvent, currentEventState)
    setCurrentEventState(currentEvent)
    playAlarm()
  }

  const duration = timeDiff(currentEvent.end, currentEvent.start)
  const timeLeft = timeDiff(currentEvent.end, clock)
  const prosentsLeft = Math.round((100 * timeLeft) / duration)

  console.log(prosentsLeft)

  const timer = () => {
    const d = new Date()
    setClock(d.getHours() + ':' + d.getMinutes())
  }

  useEffect(() => {
    setInterval(timer, 15000)
  }, [])

  console.log(currentEvent)

  return (
    <div className="App">
      <div>
        <img alt="" src={currentEvent.image} />
      </div>
      <div>
        <p>{currentEvent.text}</p>
        <p> jäljellä {timeDiff(currentEvent.end, clock)} min</p>
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
