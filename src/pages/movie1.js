import React, { Component } from 'react';

const overrideProps = override => BaseComponent => props =>
    <BaseComponent {...props} {...override} />;

const neverRender = BaseComponent =>
    class extends Component {
        shouldComponentUpdate() {
            return false;
        }
        render() {
            return <BaseComponent {...this.props} />;
        }
    };

const User = ({ name }) => <div>{name}</div>;
const alwaysBob = overrideProps({ name: 'bob' });
const User2 = alwaysBob(User);
const User3 = neverRender(User);

const App = () => {
    return (
        <div>
            <User2 name="tim" />
            <User3 name="andra" />
        </div>
    );
};

export default App;

// reasons to create Higher Order Components
// 1) override props /function component
// 2) tap into a lifecylce hook /class component
