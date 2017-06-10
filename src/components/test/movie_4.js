import React from "react";
import styles from "./TestStyles";
import { COLORS } from "../../styles/constants/colors.js";
import { compose, withReducer, withHandlers } from "recompose";

const withToggle = compose(
  withReducer(
    "toggleOn",
    "dispatch",
    (state, action) => {
      switch (action.type) {
        case "SHOW":
          return true;
          break;
        case "HIDE":
          return false;
          break;
        case "TOGGLE":
          return !state;
          break;
        default:
          return state;
      }
    },
    false
  ),
  withHandlers({
    show: ({ dispatch }) => e => dispatch({ type: "SHOW" }),
    hide: ({ dispatch }) => e => dispatch({ tpye: "HIDE" }),
    toggle: ({ dispatch }) => e => dispatch({ tpye: "TOGGLE" })
  })
);

const StatusList = () => (
  <div className="StatusList">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>
);

//withReducer (like using the store state instead of internal state)
// first: name of the state object
// second: becomes the dispatch object.
// third: is the actual reducer.

const Status = withToggle(({ status, toggleOn, toggle }) => (
  <span onClick={() => toggle(x => !x)}>
    {status}
    {toggleOn && <StatusList />}
  </span>
));

const ToolTip = withToggle(({ text, children, toggleOn, hide, show }) => (
  <span>
    {toggleOn && <div className="ToopTip">{text}</div>}
    <span onMouseEnter={show} onMouseLeave={hide}>
      {children}
    </span>
  </span>
));

const User = ({ name }) => (
  <ToolTip text={"cool dude"}>
    <div style={{ backgroundColor: "red", padding: "20px" }}>
      andra: <Status status={"active"} />
    </div>
  </ToolTip>
);

export default User;
