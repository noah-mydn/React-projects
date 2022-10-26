import React from 'react'
import './crew.css';
import Douglas from './image-douglas-hurley.png';
import Anousheh from './image-anousheh-ansari.png';
import Mark from './image-mark-shuttleworth.png';
import Victor from './image-victor-glover.png';
import Crew_Members from './crew_members';
import Carousel from 'react-material-ui-carousel';
import { useMediaQuery } from 'react-responsive';


export default function Crew() {

    const tabletSize = useMediaQuery({ query: '(max-width:800px)' });
    const mobileSize = useMediaQuery({query:'(max-width:576px)'})

  return (
    <div className='crew container-fluid'>
        <h5 className='crew_title'><span>01</span>&nbsp;&nbsp;MEET YOUR CREW</h5>
        <div className='crew_detail'>
            <div className='carousel_info'>
                <Carousel className='carousel_crew'
                autoPlay='true'
                navButtonsAlwaysInvisible='true'
                indicatorIconButtonProps={{
                    style: {
                        padding: '7px' ,
                        marginTop:!tabletSize ? '-6em' : '0',
                    }
                }}
                indicatorContainerProps={{
                    style: {
                      zIndex: 1,
                      display:'inline',
                      paddingLeft:!tabletSize ? '5.5em' : '0',
                      position: !(tabletSize || mobileSize) ? "relative" : 'absolute',
                      top: mobileSize ? "24em" : tabletSize ? "17em" : "0"

                    }
                  }}>
                    {Crew_Members.map((member)=> {
                        return(
                            <div className='crew_members' key={member.id}>
                                <div className='crew_info'>
                                    <h5>{member.role}</h5>
                                    <h3>{member.name}</h3>
                                    <p>{member.about}</p>
                                </div>
                                <div className='crew_image_container'>
                                    {member.id===1 && <img src='./image-douglas-hurley.png' alt='Doughlas' 
                                    className='crew_image doughlas'/>}
                                    {member.id===2 && <img src='./image-mark-shuttleworth.png' alt='Mark' 
                                    className='crew_image mark_'/>}
                                    {member.id===3 && <img src='./image-victor-glover.png' alt='Victor' 
                                    className='crew_image victor'/>}
                                    {member.id===4 && <img src='./image-anousheh-ansari.png' alt='Anousheh' 
                                    className='crew_image anousheh'/>}
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>


    </div>
  )
}
