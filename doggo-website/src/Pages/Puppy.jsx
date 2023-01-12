
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from "../puppy.module.css"


const Puppy = () => {
    const [image, setimage]= useState([])
   let breed= JSON.parse(localStorage.getItem("breed"))
    useEffect(()=>{
        axios.get(`https://dog.ceo/api/breed/${breed}/images`).then((r)=>{
        setimage(r.data.message)
        })
    },[])

    
  return (
    <div>
        <h1 style={{textAlign:"center"}}>{breed}</h1>
      <div className={styles.puppyPage}>
      {
        image?.map((ele)=>(
          <div>
          <img src={ele} alt="" />
          </div>
        ))
        }
    </div>
    </div>
  )
}

export default Puppy