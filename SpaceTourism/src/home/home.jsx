import React from 'react'
import './home.css';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Home() {

  const explore= useNavigate();

  return (
      <div className='home container-fluid'>

          <div className='intro-text'>
              <h4>SO, YOU WANT TO TRAVEL TO</h4>
              <h1>SPACE</h1>
              <p>Let's face it; if you want to go to space, you might as well genuinely go to outer space 
                and not hover kind of on the edge of it. Well sit back, 
                and relax because we'll give you a truly out of this world experience!</p>
          </div>

          <div className='explore-container'>
            <button className='explore' onClick={()=> explore('/destination')}>EXPLORE</button>
          </div>
     </div>
    
  )
}
