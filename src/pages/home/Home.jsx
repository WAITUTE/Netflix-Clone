import React from 'react';
import './Home.scss'
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/featured/Featured'
import List from '../../components/list/List';
import {useEffect, useState} from "react";
import axios from "axios";
const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try{
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
          headers:{
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2YwOTMwMjk5NGMwYTI5YzA2NmYyMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MTU3ODIwMywiZXhwIjoxNjkyMDEwMjAzfQ.Co2zWU4dR5SMf7j24Dg4U9sjJczMl-niVg-fyC50a2U"
          }
        });
       // console.log(res)
        setLists(res.data);
      }catch(err){
        console.log(err);
      }
    }
    getRandomLists();
  },[type, genre]);
  return (
    <div className='home'>
        <Navbar />
        <Featured type={type} setGenre={setGenre} />
        {lists.map((list, key) => (
            <List list={list} key={key}/>
        ))}
       
             
    </div>
  )
}

export default Home