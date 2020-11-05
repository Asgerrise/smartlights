/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Router, Location } from "@reach/router";

const TransitionRouter = ({ children }) => {
  const style = css`
    .fade-enter header,
    .fade-enter section,
    .fade-enter h2,
    .fade-enter .login,
    .fade-enter .offBtn {
      opacity: 0;
    }
    .fade-enter-active header,
    .fade-enter-active section,
    .fade-enter-active h2,
    .fade-enter-active .login,
    .fade-enter-active .offBtn {
      opacity: 1;
      transition: 1s;
    }
    .fade-exit header,
    .fade-exit section,
    .fade-exit h2,
    .fade-exit .login,
    .fade-exit .offBtn {
      opacity: 0;
    }
    .fade-exit-active header,
    .fade-exit-active section,
    .fade-exit-active h2,
    .fade-exit-active .login,
    .fade-exit-active .offBtn {
      opacity: 0;
      transition: 1s;
    }
  `;

  return (
    <Location>
      {({ location }) => (
        <TransitionGroup css={style}>
          <CSSTransition key={location.key} classNames="fade" timeout={1000}>
            <Router location={location}>{children}</Router>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  );
};

export default TransitionRouter;
