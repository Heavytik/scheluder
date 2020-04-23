import React from 'react'

const ProgressBar = (props) => {
  const { bgcolor, completed, timeLeft } = props

  const containerStyles = {
    height: 40,
    width: '400px',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${timeLeft}min jäljellä`}</span>
      </div>
    </div>
  )
}

export default ProgressBar
