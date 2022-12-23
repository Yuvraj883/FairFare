'use client';

import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import Axios from 'axios';
import { useState } from 'react';

function Page() {
  const [from, setFrom] = useState("Janak Puri");
 const [distance, setDistance]=useState(null)  ; 
     
  const [to, setTo] = useState("Tagore Garden");
  
  const key = 'JuNkCXmB4VXmxBy3rsUkrspPpnYYj';
  const url = `https://api.distancematrix.ai/maps/api/distancematrix/json?origins=${from}&destinations=${to}&departure_time=now&key=JuNkCXmB4VXmxBy3rsUkrspPpnYYj`; 

  function changeFrom(event){
      const newFrom = event.target.value; 
      setFrom(newFrom);
  }
  function changeTo(event){
      const newTo = event.target.value; 

      setTo(newTo);
  }


  function getDistance(e){
    e.preventDefault();
    // alert('triggered');

      Axios.get(url).then((response)=>{
          let d = response?.data?.rows[0]?.elements[0]?.distance?.text; 
         d = d?.split(" ");

          setDistance(d?.[0]);
        
      })
      calculateFare();

// console.log(to);
  }
  // let date = new date();
  // console.log(date.toLocaleTimeString());
  const fixed = 25; 
  const fpk = 8
  function calculateFare(){
      console.log("Calculating fair: ");
      console.log(distance);
      if(distance!==null&&+distance<=2){
          console.log("Fare=",fixed); 
      }
      else if(distance!==null&&+distance>2){
          const fare = +distance*fpk+10; 
          console.log("Fare: ",fare); 
          console.log(fare);
      }
  }
  return(
    <>
  <div className="bg-primary-black overflow-hidden">
    <Navbar />

    <div className="relative">
      {/* <GetStarted /> */}
      <div className="gradient-02 z-0" />
      {/* <Hero /> */}
      <div className="gradient-03 z-0" />
    </div>
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      {/* <Explore /> */}
    </div>
    <div className="relative">
      <div className="gradient-04 z-0" />
      {/* <WhatsNew /> */}
    </div>
    <div className="relative">
      {/* <Insights /> */}
      <div className="gradient-03 z-0" />
      <Feedback getDistance={getDistance}
      from={from} 
      to={to}
      changeFrom={changeFrom}
      changeTo={changeTo}/>
    </div>
    <Footer />
    <GetStarted />
  </div>
  </>
  )
}

export default Page;
