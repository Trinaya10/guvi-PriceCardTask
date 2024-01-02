import '../App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function PriceCard({data})



{
    
    return <div className="price-card">
        <h5 className="fs-5 fw-light">{data.subscription}</h5>
         <h1 className="card-header">{`$${data.pay}/monthly`}</h1>
         <ul >
        {data.features.map((feature, featureIndex) => (
          <li key={`feature-${featureIndex}`}>
            {feature.truth ? '✓' : '🗙'} {feature.value}
          </li>
        ))}
      </ul>
      <button type="button" className="btn btn-primary">BUTTON</button>
         
        </div>
        
            
}
 export default PriceCard