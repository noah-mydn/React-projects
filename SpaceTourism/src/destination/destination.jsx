import React from 'react'
import PLANETS from './planets';
import './destination.css';
import moon from './image-moon.png';
import mars from './image-mars.png';
import europa from './image-europa.png';
import titan from './image-titan.png';

export default function Destination() {

    const [planet,showPlanet] = React.useState('moon');
    
  return (

    <div className='destination container-fluid'>        
            <div className='destination_image'>
                <h5 className='destination_title'><span>01</span>&nbsp;&nbsp;PICK YOUR DESTINATION</h5>
            </div>
            <div className='destination_info'>
                <div className='small-nav'>
                    <span><a href='#moon' className='small-nav-link' onClick={()=>showPlanet('moon')}>MOON</a></span>
                    <span><a href="#mars" className='small-nav-link' onClick={()=>showPlanet('mars')}>MARS</a></span>
                    <span><a href="#europa" className='small-nav-link' onClick={()=>showPlanet('europa')}>EUROPA</a></span>
                    <span><a href="#titan" className='small-nav-link'onClick={()=>showPlanet('titan')}>TITAN</a></span>
                </div>
            </div>
            
                {planet==='moon' && <div className='planet_details' id='moon'>
                        <img src={moon} alt="Planet Moon" className='planet_image'/>
                        <div className='planet_description'>
                            <h1>{PLANETS[0].planet_name}</h1>
                            <p>{PLANETS[0].planet_description}</p>
                            <hr/>
                            <div className='more_details'>
                                <div className='distance'>
                                    <p>AVG. DISTANCE</p>
                                    <h5>{PLANETS[0].distance}</h5>
                                </div>

                                <div className='estimated_time'>
                                    <p>EST. TRAVEL TIME</p>
                                    <h5>{PLANETS[0].est_travelTime}</h5>
                                </div>
                            </div>
                        </div>
                    </div>}

                    {planet==='mars' && <div className='planet_details' id='mars'>
                        <img src={mars} alt="Planet Mars" className='planet_image'/>
                        <div className='planet_description'>
                            <h1>{PLANETS[1].planet_name}</h1>
                            <p>{PLANETS[1].planet_description}</p>
                            <hr/>
                            <div className='more_details'>
                                <div className='distance'>
                                    <p>AVG. DISTANCE</p>
                                    <h5>{PLANETS[1].distance}</h5>
                                </div>

                                <div className='estimated_time'>
                                    <p>EST. TRAVEL TIME</p>
                                    <h5>{PLANETS[1].est_travelTime}</h5>
                                </div>
                            </div>
                        </div>
                    </div>}

                    {planet==='europa' && <div className='planet_details' id='europa'>
                        <img src={europa} alt="Planet Europa" className='planet_image'/>
                        <div className='planet_description'>
                            <h1>{PLANETS[2].planet_name}</h1>
                            <p>{PLANETS[2].planet_description}</p>
                            <hr/>
                            <div className='more_details'>
                                <div className='distance'>
                                    <p>AVG. DISTANCE</p>
                                    <h5>{PLANETS[2].distance}</h5>
                                </div>

                                <div className='estimated_time'>
                                    <p>EST. TRAVEL TIME</p>
                                    <h5>{PLANETS[2].est_travelTime}</h5>
                                </div>
                            </div>
                        </div>
                    </div>}

                    {planet==='titan' && <div className='planet_details' id='titan'>
                        <img src={titan} alt="Planet Titan" className='planet_image'/>
                        <div className='planet_description'>
                            <h1>{PLANETS[3].planet_name}</h1>
                            <p>{PLANETS[3].planet_description}</p>
                            <hr/>
                            <div className='more_details'>
                                <div className='distance'>
                                    <p>AVG. DISTANCE</p>
                                    <h5>{PLANETS[3].distance}</h5>
                                </div>

                                <div className='estimated_time'>
                                    <p>EST. TRAVEL TIME</p>
                                    <h5>{PLANETS[3].est_travelTime}</h5>
                                </div>
                            </div>
                        </div>
                    </div>}
            
    </div>
  )
}
//<img src={moon} alt='Image of Moon' className='planet_image'/>
//