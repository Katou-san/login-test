import React, { useEffect, useReducer } from "react";
import Login from "../ui/Login";
import Register from "../ui/Register";
import { useSearchParams } from "react-router-dom";
import { Login_Reducer } from "../../../Hook/useReduce";
import Axios from "axios";

function LSForm() {
  const [Value_Login, dispacth_Value] = useReducer(Login_Reducer, {
    Is_Login: false,
    Is_Loading: false,
    data: {
      login: "",
      avatar_url: "",
    },
  });

  const { data, Is_Login } = Value_Login;
  const { login, avatar_url } = data;
  const [searchParams] = useSearchParams();
  const code_Github = searchParams.get("code");
  useEffect(() => {
    Axios.get("http://localhost:8080/api/getAccessToken_Github/" + code_Github)
      .then((res) => {
        if (res.data.access_token) {
          localStorage.setItem("Access_Token", res.data.access_token);
          Axios.get("http://localhost:8080/api/GetDataUser", {
            headers: {
              Authorization: res.data.access_token,
            },
          })
            .then((respone) => {
              console.log(respone);
              dispacth_Value({
                type: "CHANGE",
                payload: { Is_Login: true, data: respone.data },
              });
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  }, [code_Github]);

  return (
    <div className="farme">
      <div className="Login_Content">
        {Is_Login && (
          <>
            <img src={avatar_url} alt="" />
            <h2>{login}</h2>
            <button>Logout</button>
          </>
        )}

        {!Is_Login && <h2>You need Login</h2>}
      </div>
      <div className="formContent ">
        <span className="iconf">
          <ion-icon className="iconClose" name="close-outline"></ion-icon>
        </span>
        <Login dispacth_Value={dispacth_Value} />
        <Register />
      </div>
    </div>
  );
}

export default LSForm;
