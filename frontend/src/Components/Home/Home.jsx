import React, { useState } from 'react'
import './Home.css'
import logo from '../../Assets/bubble-removebg-preview.png'
import mobile from '../../Assets/mobile.jpg'
import { useNavigate } from 'react-router-dom'
import { AiFillSignal, AiOutlineMenu, AiOutlinePlus, AiOutlineWifi } from 'react-icons/ai'
import { BsBatteryHalf } from 'react-icons/bs'
import { SlOptionsVertical } from 'react-icons/sl'
import { LuSend } from 'react-icons/lu'

const Home = () => {
  const navigate = useNavigate();
  const [time,setTime] = useState(new Date(Date.now()));
  setInterval(()=>setTime(new Date(Date.now())),1000);
  return (
    <div className="home">
      <div className="left">
        <div className="title">
          <img src={logo} alt="" />
          <h2>Bubbl</h2>
        </div>
        <p>Bubbl Social is a social media start-up, looking to change the social media landscape across colleges, by providing a platform for students to interact and connect with each other.</p>
        <div className="all">
          <button onClick={()=>navigate('/download')}>Download</button>
          <div className="btns">
              <button onClick={()=>navigate('/signup')}>Sign Up</button>
              <button onClick={()=>navigate('/login')}>Login</button>
        </div>
        </div>
      </div>
      <div className="right">
        <div className="cover">
          <div className="mobile">
            <div className="notification">
              <h3>{(time.getHours()<10)?`0${time.getHours()}`:time.getHours()}:{(time.getMinutes()<10)?`0${time.getMinutes()}`:time.getMinutes()}</h3>
              <div className="others">
                <AiFillSignal/>
                <AiOutlineWifi/>
                <BsBatteryHalf/>
              </div>
            </div>
            <div className="header">
              <div className="left">
                <h3>DTU</h3>
              </div>
              <div className="right">
                <div className="menu">
                  <SlOptionsVertical/>
                  <AiOutlineMenu/>
                </div>
                <LuSend/>
              </div>
            </div>
            <img src={mobile} alt="" />
            <div className="add">
              <AiOutlinePlus/>
            </div>
          </div>
          <div className="camera">
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home