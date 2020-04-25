import React, { useState, useEffect } from 'react'
import moment from 'moment'

import './App.css'

import eventService from './services/events'
import imageService from './images/imageService'

const App = () => {
  const images = imageService()

  const [events, setEvents] = useState([
    { id: 0, text: 'initial1', start: moment().add(1, 'seconds') },
    { id: 1, text: 'initial2', start: moment().add(2, 'seconds') },
  ])

  const [clock, setClock] = useState(moment())
  const [currentEventState, setCurrentEventState] = useState({
    text: 'initialText',
  })

  let loopIndex = 0

  const findEventIndex = () => {
    if (
      events.length === 1 ||
      clock.isAfter(events[events.length - 1].start) ||
      clock.isBefore(events[0].start)
    ) {
      return events.length - 1
    }
    for (loopIndex = 0; loopIndex < events.length; loopIndex += 1) {
      if (
        loopIndex < events.length - 1 &&
        clock.isBetween(events[loopIndex].start, events[loopIndex + 1].start)
      ) {
        return loopIndex
      }
    }
    return 0
  }

  const eventIndex = findEventIndex()

  let currentEvent = events[eventIndex]

  if (clock.isBefore(events[0].start)) {
    currentEvent = {
      ...events[events.length - 1],
      start: moment(events[events.length - 1].start.format()).subtract(1, 'days'),
    }
  }

  const nextDaysFirstEvent = {
    ...events[0],
    start: moment(events[0].start.format()).add(1, 'days'),
  }

  let nextEvent = events[0]

  if (eventIndex === events.lenght - 1) {
    nextEvent = nextDaysFirstEvent
  } else if (events[0].start.isBefore(clock)) {
    nextEvent = events[eventIndex + 1]
  }

  if (currentEvent.text !== currentEventState.text) {
    setCurrentEventState(currentEvent)
  }

  const duration = nextEvent.start.diff(currentEvent.start, 'minutes')
  const timeLeft = nextEvent.start.diff(clock, 'minutes')
  const prosentsLeft = Math.round((100 * timeLeft) / duration)
  const progressBarWidth = 500
  const progress = Math.round((progressBarWidth * (100 - prosentsLeft)) / 100)

  useEffect(() => {
    const timer = () => {
      setClock(moment())
    }
    setInterval(timer, 15000)
    eventService.getAll().then((d) => {
      const dat = d.map((e) => {
        return {
          ...e,
          start: moment(e.start),
          image: images.find((i) => i.label === e.image).image,
        }
      })
      setEvents(dat)
    })
  }, [])

  return (
    <div className="App">
      <div className="grid-container">
        <div className="centered">
          <img alt="" src={currentEvent.image} />
        </div>
        <div className="bigInfo">
          <div>{currentEvent.text}</div>
          <div>{` jäljellä ${timeLeft} min`}</div>
        </div>
        <div className="centered">
          <svg height="100" width="500">
            <line x1="0" y1="50" x2="500" y2="50" style={{ stroke: 'red', strokeWidth: '2' }} />
            <line
              x1="0"
              y1="50"
              x2={progress - 20}
              y2="50"
              style={{ stroke: 'lime', strokeWidth: '20' }}
            />
            <polygon
              points={`${progress},50 ${progress - 40},90 ${progress - 40},10`}
              style={{ fill: 'lime', stroke: 'purple', strokeWidth: '1' }}
            />
            Sorry, your browser does not support inline SVG.
          </svg>
        </div>
        <div className="bigInfo">
          {`Seuraavaksi: `}
          {nextEvent.text}
        </div>
      </div>
      <div className="footer">
        {`Icons made by  `}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
        {`  from  `}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </div>
  )
}

export default App
