import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Wrapper } from "../Shared/StyledComponents";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../store/services/api";

export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled,setIsDisabled] = useState(true)
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.login.login);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchData());
    if (data?.username === userName && data?.password === password) {
      localStorage.setItem("userName", userName);
      localStorage.setItem("password", password);
      router.push("/dashboard");
    }
    else{
      alert('Invalid username and password')
    }
  };

  useEffect(()=>{
    if(userName && password){
      setIsDisabled(false)
    }
    else{
      setIsDisabled(true)
    }
  },[userName, password])

  useEffect(() => {
    if (localStorage.getItem("userName") && localStorage.getItem("password")) {
      router.push('/dashboard')
      setUserName(localStorage.getItem("userName"));
      setPassword(localStorage.getItem("password"));
    }
    else{
      router.push('/')
    }
  }, []);

  return (
    <Wrapper>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label> Username</label>
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="submit-btn">
          <button onClick={handleSubmit} disabled={isDisabled}>Log In</button>
        </div>
      </form>
    </Wrapper>
  );
};
