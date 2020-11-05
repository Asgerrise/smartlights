/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import { navigate } from "@reach/router";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nameBg, setNameBg] = useState("#f6f8fb");
  const [pwdBg, setPwdBg] = useState("#f6f8fb");

  const style = css`
    display: flex;
    flex-direction: column;

    label {
      font-size: 1.2em;
      margin-bottom: 1em;
      font-weight: 600;
      color: white;
      letter-spacing: 0.1em;

      span {
        margin-left: 0.5em;
      }
    }
    input {
      margin-top: 0.5em;
      border: none;
      border-radius: 14px;
      width: 100%;
      font-size: 1.2em;
      padding: 0.5em;
    }
    #username {
      background-color: ${nameBg};
    }
    #password {
      background-color: ${pwdBg};
    }
    button {
      border: none;
      background-color: #f6f8fb;
      font-family: Montserrat, sans-serif;
      align-self: center;
      margin-top: 4em;
      font-weight: 600;
      padding: 0.5em 4em;
      font-size: 1.2em;
      border-radius: 14px;
      color: #333;
    }
  `;

  return (
    <form
      method="POST"
      css={style}
      onSubmit={(e) => {
        e.preventDefault();
        setNameBg("#f6f8fb");
        setPwdBg("#f6f8fb");
        if (e.target.username.value != "user") {
          e.preventDefault();
          setNameBg("#FFA9A9");
          e.target.username.focus();
          return;
        }
        if (e.target.password.value != "1234") {
          e.preventDefault();
          setPwdBg("#FFA9A9");
          e.target.password.focus();
          return;
        }
        localStorage.setItem("loggedIn", true);
        navigate("/");
      }}
    >
      <label htmlFor="username">
        <span>Username</span>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => {
            e.target.value = setUsername(e.target.value);
          }}
        />
      </label>
      <label htmlFor="password">
        <span>Password</span>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            e.target.value = setPassword(e.target.value);
          }}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
