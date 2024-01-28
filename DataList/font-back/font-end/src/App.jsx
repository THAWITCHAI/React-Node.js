/* eslint-disable react/jsx-no-target-blank */
import { useState, useEffect } from "react";
import Navbar from "./Component/Navbar";
import axios from "axios";
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
      <Navbar/>
      <body>
        <h1>{data.title}</h1>
        <button className="btn">
          <a target="_blank" href={data.link}>
            Facebook
          </a>
        </button>

      </body>
    </>
  );
}

export default App;
