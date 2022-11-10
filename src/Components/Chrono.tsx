import React, {useEffect, useState} from 'react';
import Moment from 'moment'
import moment from 'moment';

interface Information {
  initialTime: moment.Moment;
  finalTime: number;
  timeSpent: string;
  isRunning: boolean;
}
export default function Chrono(){

  const [chron, setChron]= useState<Information>({
    initialTime: moment(),
    finalTime: 0,
    timeSpent: "",
    isRunning: false
  })


  useEffect(() =>{
    setTimeout(() => {
      setChron((prevChron) => {
        const newTime = moment().diff(prevChron.initialTime)
        if (prevChron.isRunning){
          return {
            ...prevChron,
            timeSpent: moment.utc(newTime).format('HH:mm:ss')
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
        timeSpent: moment.utc(0).format('HH:mm:ss')
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

  console.log(chron)

  return(
    <>
      <h1>{chron.timeSpent ? chron.timeSpent : "00:00:00"}</h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop and reset</button>
    </>
  )
}