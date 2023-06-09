import React from 'react'
import './Home.css'
import logo from '../../Assets/bubble-removebg-preview.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="left">
        <div className="title">
          <h2>Create Your<br/> Own Bubble</h2>
        </div>
        <p>Bubbl Social is a social media start-up, looking to change the social media landscape across colleges, by providing a platform for students to interact and connect with each other.</p>
        <div className="all">
          <button onClick={()=>navigate('/download')}>Download</button>
        </div>
      </div>
      <div className="right">
      </div>
    </div>
  )
}

export default Home