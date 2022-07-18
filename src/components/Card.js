import React from 'react'


export default function Card(props){
  
    return (
        
   <div className="card">
   
   
   
      <div className="card--cont">
   <img src={props.imageUrl} 
   alt={props.title}
   className="card--image"/>
   

 
        <div className="card--textCont">
   <div className="card--locLinkCont">
   <img src="../images/gpsIcon.png"
   className="card--gpsIcon"
   alt="GPS Icon"/>
  <div className="card--locationText">{props.location.toUpperCase()}</div> 
     <div className="card--urlText">View on Google Maps</div> 
     </div>
     
    
     <div className="card--titleText">{props.title}</div> 
     
     <div className="card--dateText">{props.startDate} - {props.endDate}</div>
     
     <div className="card--bodyText">{props.description}</div> 
     
     </div>
     
        </div>
     <div className="card--line"/>
     
   </div>
   
   
    
    )
}