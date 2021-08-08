import React, { useRef, useEffect } from 'react'

const UseRef = () => {

  const video = useRef()

  useEffect(() => {
    console.log(video.current)
  }, []);
  
  return (
    <div>
      <p>useRef</p>
      <video ref={video}></video>
    </div>
  )
}

export default UseRef
