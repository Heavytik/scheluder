import React from 'react'
import Sound from 'react-sound'
import alarm from '../sounds/alarm.mp3'

const MySound = () => {
  return (
    <Sound
      url={alarm}
      playStatus={Sound.status.PLAYING}
      playFromPosition={300 /* in milliseconds */}
      onLoading={this.handleSongLoading}
      onPlaying={this.handleSongPlaying}
      onFinishedPlaying={this.handleSongFinishedPlaying}
    />
  )
}

export default MySound
