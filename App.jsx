// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from 'react'
import './App.css'
import PriceCard from './Pages/PriceCard';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // const [data1, setdata1] = useState(0)
  const data=[{
    subscription: "FREE",
    pay: 0,
    features:[{truth:true,value:"Single User"},
             {truth:true, value:"50GB Storage"},
             {truth: true, value:"Unlimited Public Projects"},
             {truth: true, value:"Community Access"},
             {truth: false, value:"Unlimited Private Projects"},
             {truth: false, value:"Dedicated Phone Support"},
             {truth: false, value:"Free Subdomain"},
             {truth: false, value:"Monthly Status Reports"}
            ]},
            {
    subscription: "PLUS",
    pay: 9,
    features:[{truth:true,value:"5 User"},
             {truth:true, value:"50GB Storage"},
             {truth: true, value:"Unlimited Public Projects"},
             {truth: true, value:"Community Access"},
             {truth: true, value:"Unlimited Private Projects"},
             {truth: true, value:"Dedicated Phone Support"},
             {truth: true, value:"Free Subdomain"},
             {truth: false, value:"Monthly Status Reports"}
            ]},
    {
  subscription: "PRO",
  pay: 49,
  features:[{truth:true,value:"Unlimited User"},
             {truth:true, value:"50GB Storage"},
             {truth: true, value:"Unlimited Public Projects"},
             {truth: true, value:"Community Access"},
             {truth: true, value:"Unlimited Private Projects"},
             {truth: true, value:"Dedicated Phone Support"},
             {truth: true, value:"Free Subdomain"},
             {truth: true, value:"Monthly Status Reports"}
            ]}];
  
  return (
    
    <div className="container">
     {
      data.map((d,index)=>
        <PriceCard data={d} index={`price-card-${index}`} />
        
        
      )
     }
     
          
      
    </div>
  );
}

export default App
