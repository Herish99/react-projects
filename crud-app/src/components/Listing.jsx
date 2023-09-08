import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Listing = () => {
  const [Edata, setEdata] = useState(null);
  const navigate = useNavigate();

  const LoadEdit = (id) => {
    navigate("/edit/" + id);
  };
  const LoadDetails = (id) => {
    navigate("/details/" + id);
  };
  const DeleteFunc = (id) => {
    fetch("http://localhost:3005/Employee/" + id, {
      method: "DELETE",
      // headers:{"content-type":"application/json"},
      // body:JSON.stringify(MainData)
    })
      .then((res) => {
        window.location.reload();
        // alert('saved successfully')
        // navigate('/')
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3005/Employee")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        // console.log(result);
        setEdata(result);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <div className="container py-5">
        <div className="card-title text-center py-5">
            <h1>Employee Listing</h1>
        </div>
        <div className="card-body text-center custom-design ">
          <Link to="/create" className="btn btn-info my-2">
            Add New (+)
          </Link>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {Edata &&
                Edata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success mx-2"
                      >
                        EDIT
                      </a>
                      <a
                        onClick={() => {
                          DeleteFunc(item.id);
                        }}
                        className="btn btn-danger mx-2"
                      >
                        Delete
                      </a>
                      <a
                        onClick={() => {
                          LoadDetails(item.id);
                        }}
                        className="btn btn-primary mx-2"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Listing;
