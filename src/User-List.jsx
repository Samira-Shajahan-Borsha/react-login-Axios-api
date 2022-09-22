import React, { useState } from "react";
import { useEffect } from "react";
import config from "./config.json";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const [userList, setUserList] = useState([]);

    const navigate = useNavigate();

    const axios = require('axios');

    axios.get(`${config.api}/user/index-official`, {
        headers: {
            authorization: "Bearer " + localStorage.getItem("token")
        },
    }).then((res) => setUserList(res.data.users));

    console.log(11111,userList);

    const logout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };




    
    /*     useEffect(() => {
          if (!localStorage.getItem("token")) {
              navigate("/");
          }
  
          fetch(`${config.api}/user/index-official`, {
              method: "get",
              headers: {
                  "Content-Type": "application/json",
                  authorization: "Bearer " + localStorage.getItem("token"),
              },
          })
              .then((response) => response.json())
              .then((data) => setUserList(data.users));
      }, []);
  
      const logout = () => {
          localStorage.removeItem("token");
          navigate("/");
      }; */

    return (
        <div style={{ margin: 100 }}>
            <button onClick={logout}> Logout </button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                </thead>

                <tbody>
                    {userList.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
