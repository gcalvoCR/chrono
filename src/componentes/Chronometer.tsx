import React, {useEffect, useState} from 'react';
import Moment from 'moment'

interface Information {
  initialTime: moment.Moment;
  finalTime: number;
  timeSpent: string;
  isRunning: boolean;
}
export default function Chronometer(){

  const [chron, setChron]= useState<Information>({
    initialTime: Moment(),
    finalTime: 0,
    timeSpent: "",
    isRunning: false
  })


  useEffect(() =>{
    setTimeout(() => {
      setChron((prevChron) => {
        const newTime = Moment().diff(prevChron.initialTime)
        if (prevChron.isRunning){
          return {
            ...prevChron,
            timeSpent: Moment.utc(newTime).format('HH:mm:ss')
          }
        } else{
          return prevChron
        }
      })
    }, 1000)
  }, [chron.timeSpent])

  function start(){
    setChron((prevChron) => {
      const current = Moment()
      return {
        ...prevChron,
        initialTime: current,
        isRunning: true,
        timeSpent: Moment.utc(0).format('HH:mm:ss')
      }
    })  
  }

  function stop(){
    setChron((prevChron) => {
      return {
        ...prevChron,
        isRunning: false,
        timeSpent: ""
      }
    })  
  }

  return(
    <main className="main">
      <h1 className="timer">{chron.timeSpent ? chron.timeSpent : "00:00:00"}</h1>
      <div className="buttons">
        <button onClick={start} className="button">Start</button>
        <button onClick={stop} className="button">Stop and reset</button>
      </div>
        
    </main>
  )
}