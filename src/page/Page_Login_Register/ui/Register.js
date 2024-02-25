import React, { useContext, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { Get_Playlist_User, SigupService } from "../../../Service/User_Service";
// import { User_Init } from "../../../Modules/Init_Provider";
// import { Check_Error_Register } from "../../../Modules/Handle_Login";
// import { LoadingSVGWatting } from "../../../Component/Logo_Icon/Loading";
// import { contextLogin } from "../../../Hook/index_Context";
// import useAxios from "../../../Hook/Custom_Hook/useAxios_Get";

function Register({ Value }) {
  // const { dispatch_Login, dispatch_Playlist_user } = useContext(contextLogin);

  // const [state, dispatch] = useAxios();
  // const { Is_Loading } = state;
  // const Navigate = useNavigate();
  // const [FormValue, setFormValue] = useState(User_Init);
  // const [ValueError, setValueError] = useState({});

  // const Set_Change_Value = (value) => {
  //   setFormValue({ ...FormValue, ...value });
  // };

  // const SubmitRegister = (e) => {
  //   e.preventDefault();
  //   if (!Is_Loading) {
  //     dispatch({ type: "REQUEST" });
  //     setValueError(Check_Error_Register(FormValue).Detail_Error);
  //     if (!Check_Error_Register(FormValue).Has_Error) {
  //       const Name = FormValue.User_Email.split("@");
  //       const value = {
  //         ...FormValue,
  //         User_Id: "@" + Name[0],
  //         User_Name: Name[0],
  //       };
  //       SigupService(value)
  //         .then((res) => {
  //           if (res.status === 200) {
  //             toast.success(res.message);
  //             dispatch_Login({ type: "CHANGE", payload: res.data });
  //             Get_Playlist_User(
  //               res.data.Data_User.User_Id,
  //               res.data.Access_Token
  //             )
  //               .then((resopne) => {
  //                 dispatch_Playlist_user({
  //                   type: "CHANGE",
  //                   payload: resopne.data,
  //                 });
  //               })
  //               .catch((err) => console.error(err));

  //             dispatch({ type: "SUCCESS", payload: { data: res.data } });
  //             localStorage.setItem("Access_Token", res.data.Access_Token);
  //             localStorage.setItem("is_Login", res.data.is_Login);
  //             Navigate("/");
  //           } else {
  //             dispatch({ type: "ERROR", payload: {} });
  //             toast.error(res.message);
  //           }
  //         })
  //         .catch((err) => {
  //           dispatch({ type: "ERROR", payload: { error: err.data } });
  //           toast.error("2");
  //         });
  //     } else {
  //       dispatch({ type: "ERROR", payload: {} });
  //       const Error_Value = Check_Error_Register(FormValue).Detail_Error;
  //       let Arraykey = Object.keys(Error_Value);
  //       Arraykey.map((key) => toast.error(Error_Value[key]));
  //     }
  //   } else {
  //     toast.warning("Please dont spam");
  //   }
  // };

  return (
    <div className="FromLS RegisterForm">
      <form onSubmit={""}>
        <h1>Sign Up</h1>
        <div className="inputText">
          <label htmlFor="SEmail"> Email</label>
          <input type="text" required />

          <div className="toastInput"></div>
        </div>

        <div className="inputText">
          <label htmlFor="SPass">Password</label>
          <input type="password" required />

          <div className="toastInput"></div>
        </div>

        <div className="inputText">
          <label htmlFor="SRPass">Confirm Pass</label>
          <input type="password" required onChange={(e) => {}} />

          <div className="toastInput"></div>
        </div>
        <button
          className="mt-30U Loginbtn"
          id={true ? "Registerbtn" : "normal2"}
          type="submit"
        >
          Register
        </button>
        <div className="btnLink mt-20U">
          <p>
            I have an account
            <span style={{ color: "#fff", cursor: "pointer" }}>Login</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
