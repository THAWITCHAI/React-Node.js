/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from './Component/navbar';
import Register from './Component/register';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{data.title}</title>
      </head>
      <body>
        <Navbar/>
        <div className="container d-flex justify-content-center">
          <div className="w-25 p-3">
            <Register/>
          </div>
        </div>

      </body>
    </>
  );
}

export default App;
