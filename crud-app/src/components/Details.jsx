import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { empid } = useParams();
  // console.log(empid);
  const [emplyData, setEmplyData] = useState({});

  useEffect(() => {
    fetch("http://localhost:3005/Employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        setEmplyData(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      {
        <div className="container">
          <div className="card my-5 custom-design">
            <div className="card-title text-center">
              <h2>Detail Information</h2>
            </div>
            <div className="card-body">
              <h2>ID : {emplyData.id}</h2>
              <h2>Name : {emplyData.name}</h2>
              <h2>Email : {emplyData.email}</h2>
              <h2>Contact : {emplyData.phone}</h2>
              <Link to={"/"} className="btn btn-danger">
                Back
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Details;
