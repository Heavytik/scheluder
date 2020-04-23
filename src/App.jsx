import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { Line } from 'rc-progress'

import './App.css'

import eventService from './services/events'
// import schoolbell from './sounds/schoolbell.wav'

const App = () => {
  const nextEventStyle = {
    fontSize: '80px',
    color: 'grey',
  }
  const small = {
    fontSize: '20px',
  }

  const [events, setEvents] = useState([])
  const [clock, setClock] = useState(moment())
  const [currentEventState, setCurrentEventState] = useState({
    text: 'initialText',
  })

  let loopIndex = 0

  const findEventIndex = () => {
    if (clock.isAfter(events[events.length - 1].start) || clock.isBefore(events[0])) {
      return events.length - 1
    }
    for (loopIndex = 0; loopIndex < events.length; loopIndex += 1) {
      if (clock.isBetween(events[loopIndex].start, events[loopIndex + 1].start)) {
        return loopIndex
      }
    }
    return 0
  }

  const eventIndex = findEventIndex()
  const currentEvent = events[eventIndex]
  const nextDaysFirstEvent = { ...events[0], start: events[0].start.add(1, 'days') }
  const nextEvent = eventIndex === events.length - 1 ? nextDaysFirstEvent : events[eventIndex + 1]

  console.log('current', currentEvent.start.format())
  console.log('next', nextEvent.start.format())
  console.log('clock', clock.format())

  // const alarm = new Audio(schoolbell)

  // const playAlarm = () => alarm.play()

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
      setClock(moment())
    }
    setInterval(timer, 15000)
  }, [])

  useEffect(() => {
    eventService.getAll().then((d) => {
      setEvents(d)
    })
  })

  console.log(currentEvent)

  return (
    <div className="App">
      <div>
        <img alt="" src={currentEvent.image} />
        <p style={small}>
          Icons made by
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </p>
      </div>
      <div>
        <p>{currentEvent.text}</p>
        <p>{`jäljellä ${timeLeft} min`}</p>
      </div>
      <div>
        <Line percent={100 - prosentsLeft} strokeWidth={4} strokeColor="#99004C" />
      </div>
      <div>
        <p style={nextEventStyle}>
          Seuraavaksi:
          {nextEvent.text}
        </p>
      </div>
    </div>
  )
}

export default App
