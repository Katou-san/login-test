// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import React, { useContext, useState } from "react";

// import { User_Init } from "../../../Modules/Init_Provider";
// import { Check_Error_Login } from "../../../Modules/Handle_Login";
// import { LogoGoogle, LogoFacebook } from "../../../Component/Logo_Icon/Logo";
// import { LoadingSVGWatting } from "../../../Component/Logo_Icon/Loading";

// import { Get_Playlist_User, LoginService } from "../../../Service/User_Service";

// import { contextLogin } from "../../../Hook/index_Context";
// import useAxios from "../../../Hook/Custom_Hook/useAxios_Get";

import "../css/Login.css";
function Login({ Value }) {
  // const Navigate = useNavigate();
  // const { dispatch_Login, dispatch_Playlist_user } = useContext(contextLogin);

  // const [state, dispatch] = useAxios();
  // const { Is_Loading } = state;
  // const [ValueError, setValueError] = useState({});
  // const [FormLogin, setFormLogin] = useState(User_Init);

  // const Change_Value_Login = (value) => {
  //   setFormLogin({ ...FormLogin, ...value });
  // };

  // const LoginSubmitForm = (e) => {
  //   e.preventDefault();
  //   if (!Is_Loading) {
  //     dispatch({ type: "REQUEST" });
  //     setValueError(Check_Error_Login(FormLogin).Detail_Error);
  //     if (!Check_Error_Login(FormLogin).Has_Error) {
  //       LoginService(FormLogin)
  //         .then((res) => {
  //           if (res.status === 200) {
  //             toast.success(res.message);
  //             dispatch_Login({ type: "CHANGE", payload: res.data });
  //             Get_Playlist_User(
  //               res.data.Data_User.User_Id,
  //               res.data.Access_Token
  //             ).then((resopne) => {
  //               dispatch_Playlist_user({
  //                 type: "CHANGE",
  //                 payload: resopne.data,
  //               });
  //             });
  //             dispatch({ type: "SUCCESS", payload: { data: res.data } });
  //             localStorage.setItem("Access_Token", res.data.Access_Token);
  //             localStorage.setItem("is_Login", res.data.is_Login);
  //             setFormLogin(User_Init);
  //             Navigate("/");
  //           } else {
  //             toast.error(res.message);
  //           }
  //         })
  //         .catch((err) => {
  //           dispatch({ type: "ERROR", payload: { error: err.data } });
  //           toast.error("Error" + err.status);
  //         });
  //     } else {
  //       const Error_Value = Check_Error_Login(FormLogin).Detail_Error;
  //       let Arraykey = Object.keys(Error_Value);
  //       Arraykey.map((key) => toast.error(Error_Value[key]));
  //     }
  //   } else {
  //     toast.warning("Please dont spam");
  //   }
  // };

  return (
    <div className={`FromLS LoginForm `}>
      <form onSubmit={""}>
        <h1>Login</h1>
        <div className="inputText">
          <label htmlFor="Email"> Email</label>
          <input type="text" required onChange={(e) => {}} />
          <div className="toastInput"></div>
        </div>
        <div className="inputText">
          <label htmlFor="Pass">Password</label>
          <input type="password" required />

          <div className="toastInput"></div>
        </div>
        <div className="selection">
          <div className="remeber">
            <input type="checkbox" name="" />
            <p>Remember</p>
          </div>
          <p>Forgot Password</p>
        </div>
        <button className="Loginbtn" type="submit">
          Login
        </button>
      </form>
      <div className="otherOptions">
        <div className="titleOther">Or</div>
        <button className="optionLogin ">Github</button>
        <button className="optionLogin ">Twitter</button>
      </div>
      <div className="btnLink mt-20U ">
        <p>
          Don't have an account
          <span style={{ color: "#fff", cursor: "pointer" }}>Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
