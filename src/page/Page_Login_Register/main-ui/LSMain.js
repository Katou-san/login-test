import React, { useState } from "react";
import Login from "../ui/Login";
import Register from "../ui/Register";
// import Blob from "../../../Component/Blob/BlobCP";
// import "react-toastify/dist/ReactToastify.css";
function LSForm() {
  // const [ChangeForm, setChangeForm] = useState(false);
  // const [valueError, setValueError] = useState({});
  // const valueSend = {
  //   HandleChangeForm: () => {
  //     setChangeForm((prev) => !prev);
  //   },
  //   ChangeForm,
  //   GetValueError: (value) => {
  //     setValueError(value);
  //   },
  // };
  return (
    <div className="farme">
      {/* <Blob /> */}
      <div className="formContent ">
        <span className="iconf">
          <ion-icon className="iconClose" name="close-outline"></ion-icon>
        </span>
        <Login Value={"valueSend"} />
        <Register Value={"valueSend"} />
      </div>
    </div>
  );
}

export default LSForm;
