import React from 'react'
import './technology.css'
import TERMINOLOGY from './terminology';
import LaunchVehicle_P from './image-launch-vehicle-portrait.jpg';
import SpacePort_P from './image-spaceport-portrait.jpg';
import SpaceCapsule_P from './image-space-capsule-portrait.jpg';
import LaunchVehicle_L from './image-launch-vehicle-landscape.jpg';
import SpacePort_L from './image-spaceport-landscape.jpg';
import SpaceCapsule_L from './image-space-capsule-landscape.jpg';
import { useMediaQuery } from 'react-responsive';

export default function Technology() {

    const [showTerminology, setShowTerminology] = React.useState('launch_vehicle');
    const mobileScreen = useMediaQuery({query: '(max-width:576px)' })
    const TabletScreen = useMediaQuery({ query: '(max-width:800px)' })

  return (
    <div className='technology'>
        <h5 className='technology_title'><span>03 </span>SPACE LAUNGH 101</h5>
        <div className='terminology_container'>
            <div className='technology_btns'>
                <button className='rounded_btn' id='one'
                onClick={()=>setShowTerminology('launch_vehicle')}>1</button>
                <button className='rounded_btn' id='two'
                onClick={()=>setShowTerminology('spaceport')}>2</button>
                <button className='rounded_btn' id='three'
                onClick={()=>setShowTerminology('space_capsule')}>3</button>
            </div>

            {
                showTerminology==='launch_vehicle' &&
                <>
                    <div className='terminology'>
                        <small>The Terminology..</small>
                        <h5>{TERMINOLOGY[0].title}</h5>
                        <p>{TERMINOLOGY[0].description}</p>
                    </div>

                    <div className='image_holder'>
                        <img src={TabletScreen ? LaunchVehicle_L : LaunchVehicle_P} className='terminology_img' alt={TERMINOLOGY[0].title}/>
                    </div>
                </>
            }

{
                showTerminology==='spaceport' &&
                <>
                    <div className='terminology'>
                        <small>The Terminology..</small>
                        <h5>{TERMINOLOGY[1].title}</h5>
                        <p>{TERMINOLOGY[1].description}</p>
                    </div>

                    <div className='image_holder'>
                        <img src={TabletScreen ? SpacePort_L : SpacePort_P} className='terminology_img' alt={TERMINOLOGY[1].title}/>
                    </div>
                </>
            }

{
                showTerminology==='space_capsule' &&
                <>
                    <div className='terminology'>
                        <small>The Terminology..</small>
                        <h5>{TERMINOLOGY[2].title}</h5>
                        <p>{TERMINOLOGY[2].description}</p>
                    </div>

                    <div className='image_holder'>
                        <img src={TabletScreen ? SpaceCapsule_L : SpaceCapsule_P} className='terminology_img' alt={TERMINOLOGY[2].title}/>
                    </div>
                </>
            }
        </div>
    </div>
  )
}
