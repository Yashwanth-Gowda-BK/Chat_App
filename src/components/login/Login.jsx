import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handelAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = e =>{
    e.preventDefault();
    
  }


  return (
    <div className="login">
      <div className="item">
        <h2>welcome back,</h2>
        <form onSubmit={handleLogin}>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="password" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>create an Account</h2>
        <form action="">
          <label htmlFor="file">
            Upload an Image
            <img src={avatar.url || "./avatar.png"} alt="" />
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handelAvatar}
          />
          <input type="text" name="Username" placeholder="Username" />
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="password" />
          <button>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
