import React from 'react'
import video from '../src/video-1.mp4'

export const Main = () => {
  return (
    <div className='main'>
        <video  id='mp'src={video} autoPlay loop muted></video>

    </div>
  )
}
