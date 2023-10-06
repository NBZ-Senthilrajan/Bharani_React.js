import React from "react";
import certificateIcon from "../../assets/icon/certificate.png";
import DashboardCards from "../../containers/DashboardCards";
import ChartComponent from "../../containers/Chart";
const DashBoard = () => {
  const itemList = [
    {
      header: "Sample 1",
      date: new Date(2010, 0,1),
      icon: certificateIcon,
    },
    {
      header: "Sample 2",
      date:new Date(2011, 0,1),
      icon: certificateIcon,
    },
    {
      header: "Sample 3",
      date: new Date(2012, 0,1),
      icon: certificateIcon,
    },
    {
      header: "Sample 4",
      date: new Date(2013, 0,1),
      icon: certificateIcon,
    },
    {
      header: "Sample 5",
      date:new Date(2014, 0,1),
      icon: certificateIcon,
    },
    {
        header: "Sample 6",
        date: new Date(2015, 0,1),
        icon: certificateIcon,
      },
      {
        header: "Sample 7",
        date: new Date(2016, 0,1),
        icon: certificateIcon,
      },
      {
        header: "Sample 8",
        date: new Date(2017, 0,1),
        icon: certificateIcon,
      },
  ];
  return (
    <div className="container">
      <div className="row px-4">
          {itemList.map((item) => (
            <DashboardCards {...item} />
          ))}
     
      </div>
      <div className="container py-3">
      <div className="container ">

        <div className="card">
            <div className="card-body">
            <ChartComponent height={200}/>

            </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default DashBoard;
