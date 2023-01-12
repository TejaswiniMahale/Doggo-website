import React, { useEffect, useState } from 'react'
import axios from "axios"
import styles from "../puppy.module.css"
import { Link } from 'react-router-dom'

const HomePage = () => {

  const [data,setData] = useState()

  const userdata=()=>{
    axios.get('https://dog.ceo/api/breeds/list/all')
  .then((r)=>{
    setData(r.data.message)
  })
  .catch((e)=>{
    console.log(e)
  })
  }
  let arr=[]
    for(let key in data){
       arr.push(key)
    }

  useEffect(()=>{
    userdata()
  },[])
   console.log(arr)

   const handleClick=(ele)=>{
    localStorage.setItem("breed",JSON.stringify(ele))
   }   
  return (
    <div className={styles.homepage}>
        {
         arr.map((ele,i)=>(
             <div key={i+1} onClick={()=>handleClick(ele)}><Link to={`/puppy`}><div>{ele}</div></Link></div> 
        ))}
    </div>
  )
}

export default HomePage

