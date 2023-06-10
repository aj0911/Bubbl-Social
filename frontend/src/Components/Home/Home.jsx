import React from 'react'
import './Home.css'
import {AiFillApple} from 'react-icons/ai'
import {FaGooglePlay} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const buttonData = [
    {
      icon:()=><AiFillApple className='icon'/>,
      subtitle:'Download on the',
      title:'App Store'
    },
    {
      icon:()=><FaGooglePlay className='icon'/>,
      subtitle:'GET IT ON',
      title:'Google Play'
    }
  ]

  return (
    <div className="home">
      <div className="left">
        <div className="title">
          <h2>Create Your Own Bubble</h2>
        </div>
        <p>Bubbl Social is a social media start-up, looking to change the social media landscape across colleges, by providing a platform for students to interact and connect with each other.</p>
        <div className="all">
          {
            buttonData.map((e,i)=>(
              <button>
                {e.icon()}
                <div className="content">
                  <h5>{e.subtitle}</h5>
                  <h3>{e.title}</h3>
                </div>
              </button>
            ))
          }

        </div>
      </div>
      <div className="right">
        <div className="iphone-body">
          <div className="iphone-screen">
            <div className="iphone-display">
              <div className="iphone-cam">
                <div className="lens"></div>
              </div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home