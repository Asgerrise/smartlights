/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import LoginForm from "../components/LoginForm";

const Login = () => {
  localStorage.removeItem("loggedIn");
  const style = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 1.5em;
  `;

  return (
    <main className="login" css={style}>
      <LoginForm />
    </main>
  );
};

export default Login;
