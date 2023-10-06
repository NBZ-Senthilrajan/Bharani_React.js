import React from 'react'
import "./containers.scss";

const DashboardCards = (props) => {
    const year = props.date.getFullYear();
  const month = props.date.getMonth() + 1; 
  const day = props.date.getDate();
  return (
    <div className="col-xl-3 col-lg-4 col-md-6  p-2">
        <div className='card rounded-5 card-menu'>
            <div className='card-header border-0'>
              <h5 className='text-uppercase fw-bold'>{props.header}</h5>  
            </div>
            <div className='card-body pb-0 p-1 d-flex justify-content-around align-items-center'>
                <div className=''>
                <h5 className='flex-nowrap'>{`${day}-${month}-${year}`}</h5>
                <div className='bg-white rounded-5 px-1 sample-btn'>
                    <small><a href={`{${props.sampleLink}`} >View sample list</a></small>
                </div>
                </div>
                <div className='d-flex align-items-center'>
                <img src={props.icon} alt="certificate" className='certificate-img'/>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default DashboardCards