import "../css/Login.css";
const Client_Id = "330b6c67acca4d537d39";
function Login({ dispacth_Value }) {
  const Login_With_Github = () => {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + Client_Id
    );
  };
  return (
    <div className={`FromLS LoginForm `}>
      <form onSubmit={() => {}}>
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
        <button className="optionLogin" onClick={Login_With_Github}>
          Github
        </button>
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
