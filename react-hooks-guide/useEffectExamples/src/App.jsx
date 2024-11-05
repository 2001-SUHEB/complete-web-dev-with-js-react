import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

export default function App() {
  const [page, setPage] = useState("");
  const [data, setData] = useState([]);

  const handleClick = (e) => {
    setPage(e.target.value);
  };

  useEffect(() => {
    console.log("mount");
    // if (page) {
    //   fetch(`https://jsonplaceholder.typicode.com/${page}`)
    //     .then((response) => response.json())
    //     .then((data) => setData(data))
    //     .catch((error) => console.error(error));
    // }

    // const fetchData = async () => {
    //   if (page) {
    //     try {
    //       const response = await fetch(
    //         `https://jsonplaceholder.typicode.com/${page}`
    //       );
    //       const data = await response.json();
    //       setData(data);
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   }
    // };

    async function fetchData() {
      if (page) {
        try {
          // const response = await fetch(
          //   `https://jsonplaceholder.typicode.com/${page}`
          // );
          // const data = await response.json();
          // setData(data);
          const response = await axios.get(
            `https://jsonplaceholder.typicode.com/${page}`
          );
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchData();
    return () => {
      console.log("unmount");
    };
  }, [page]);
  return (
    <div className="container mt-4">
      <div className="btn-group mb-4" role="group">
        <button className="btn btn-primary" value="posts" onClick={handleClick}>
          Posts
        </button>
        <button
          className="btn btn-secondary"
          value="comments"
          onClick={handleClick}
        >
          Comments
        </button>
        <button className="btn btn-info" value="users" onClick={handleClick}>
          Users
        </button>
      </div>
      <div className="list-group">
        {data.map((item) => {
          return (
            <p key={item.id} className="list-group-item">
              {item.body || item.title || item.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
