import React from "react";
import { compose, lifecycle, withHandlers } from "recompose";

//state always gets converted to props when it gets
// passed into the wrapper component
const configPromise = fetchConfiguration();

const withConfig = lifecycle({
  state: { config: {}},
  componentDidMount() {
    configPromise.then(config => {
      return this.setState({ config });
    });
  }
});

const config = {
  showStatus: false,
  canDeleteUsers: false
};

function fetchConfiguration() {
  return new Promise(resolve => {
    setTimeout(() => resolve(config), 300);
  });
}

const User = withConfig(({ name, status, config }) => (
  <div style={{ backgroundColor: "red", padding: "20px" }}>
    {name}
    {config.showStatus && "-" + status}:{" "}
    {config.canDeleteUsers && <button>x</button>}
  </div>
));

const App = ({ name }) => (
  <div>
    <User name="andra" status={"active"} />
  </div>
);

export default App;
