import React from "react";
import styles from "./TestStyles";
import { COLORS } from "../../styles/constants/colors.js";
import { compose, withState, withHandlers } from "recompose";

const withToggle = compose(
  withState('toggleOn', 'toggle', false),
  withHandlers({
    show: ({ toggle }) => (e) => toggle(true),
    hide: ({ toggle }) => (e) => toggle(false),
    toggle: ({ toggle }) => (e) => toggle((current) => !current)
  })
)

const StatusList = () => (
  <div className="StatusList">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>
);

//withState
// first: name of the state object
// second: the method you call to change the first varable.
// third: is the inital state.

const Status = withToggle(({ status, toggleOn, toggle }) => (
  <span onClick={() => toggle(x => !x)}>
    {status}
    {toggleOn && <StatusList />}
  </span>
));

const ToolTip = withToggle(({ text, children, toggleOn, hide, show }) => (
  <span>
    {toggleOn && <div className="ToopTip">{text}</div>}
    <span
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {children}
    </span>
  </span>
));

const User = ({ name }) => (
  <ToolTip text={"cool dude"}>
    <div style={{backgroundColor: 'red', padding: '20px'}}>
      andra: <Status status={"active"}/>
    </div>
  </ToolTip>
);

export default User;
