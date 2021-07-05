import axios from "axios";
import { useState, useEffect } from "react";
import "./Login.css";

var url;

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserID] = useState("");
  const [err, setError] = useState(false);
  // const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });

      if (res.data) {
        setUserID(res.data._id);
      }
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  useEffect(() => {
    url = `/information/${userId}`;
    if (userId !== "") {
      window.location.replace(url);
    }
  }, [userId]);

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          className="loginInput"
          placeholder="Enter your Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <Link to={"/information/" + userId}> */}
        <button className="loginButton" type="submit">
          Login
        </button>
        {/* </Link> */}
      </form>
      {err && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Invalid Email Id or password !!
        </span>
      )}
    </div>
  );
}
