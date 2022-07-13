import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledDiv, StyledForm, StyledBg } from "./Login.style";
import meal from "../../assets/meal.svg";

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    sessionStorage.setItem(
      "loginInfo",
      JSON.stringify([{ username: userName, password: password }])
    );
    navigate("/home");
    setUserName("");
    setPassword("");
  };

  return (
    <StyledBg>
      <StyledDiv>
        <img src={meal} alt="meal.svg" />
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              <h4>Username</h4>
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dayTime" className="form-label">
              <h4>Password</h4>
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-primary mb-4">LOGIN</button>
        </StyledForm>
      </StyledDiv>
    </StyledBg>
  );
};

export default Login;
