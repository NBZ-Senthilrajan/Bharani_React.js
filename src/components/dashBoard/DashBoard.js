import React, { useEffect } from "react";
import certificateIcon from "../../assets/icon/certificate.png";
import DashboardCards from "../../containers/DashboardCards";
import ChartComponent from "../../containers/Chart";
import { useDispatch } from "react-redux";
import { setOperations } from "../../redux/slices/operations";
const DashBoard = () => {
  const dispatch = useDispatch();
  const itemList = [
    {
      header: "Sample 1",
      date: new Date(2010, 10, 14),
      icon: certificateIcon,
    },
    {
      header: "Sample 2",
      date: new Date(2011, 11, 11),
      icon: certificateIcon,
    },
    {
      header: "Sample 3",
      date: new Date(2012, 5, 11),
      icon: certificateIcon,
    },
    {
      header: "Sample 4",
      date: new Date(2013, 4.25),
      icon: certificateIcon,
    },
    {
      header: "Sample 5",
      date: new Date(2014, 8, 30),
      icon: certificateIcon,
    },
    {
      header: "Sample 6",
      date: new Date(2015, 2, 31),
      icon: certificateIcon,
    },
    {
      header: "Sample 7",
      date: new Date(2016, 5, 25),
      icon: certificateIcon,
    },
    {
      header: "Sample 8",
      date: new Date(2017),
      icon: certificateIcon,
    },
  ];
  useEffect(() => {
    dispatch(setOperations(itemList));
  }, []);
  return (
    <div className="container p-3">
      <div className="row ">

          <DashboardCards />
      </div>
    </div>
  );
};

export default DashBoard;
