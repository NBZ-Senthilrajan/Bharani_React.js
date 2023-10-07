import React from "react";
import "./containers.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedItem } from "../redux/slices/operations";

const DashboardCards = (props) => {
  const { operations, dataLoaded } = useSelector(
    (state) => state.OperationState
  );
  const dispatch=useDispatch();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const getDate = (date) => {
    const year = date.getFullYear();
    const month = months[date.getMonth()];
    const day = date.getDate();
    return `${day} - ${month} - ${year}`;
  };

  return (
    <>
      {dataLoaded &&
        operations.map((item, index) => (
          <div className="col-xl-3 col-lg-4 col-md-6  p-2" key={index}>
            <div className="card rounded-5 card-menu" onClick={()=>{dispatch(setSelectedItem(item))}}>
              <div className="card-header border-0">
                <h5 className="text-uppercase fw-bold">{item.header}</h5>
              </div>
              <div className="card-body pb-0 p-1 d-flex justify-content-around align-items-center">
                <div className="">
                  <h5 className="flex-nowrap">{getDate(item.date)}</h5>
                  <div className="bg-white rounded-5 px-1 sample-btn">
                    <small>
                      <a href={`{${item}`}>View sample list</a>
                    </small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src={item.icon}
                    alt="certificate"
                    className="certificate-img"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default DashboardCards;
