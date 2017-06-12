//not working
import React, { Component } from 'react';
import { compose } from 'recompose';
import { connect } from 'redux';

const setDisplayname = override => BaseComponent => props =>
<BaseComponent {...props} {...override} />;

const setPropType = override => BaseComponent => props =>
<BaseComponent {...props} {...override} />;

const enhance = compose(
    setDisplayname('User'),
    setPropType({
        name: React.PropTypes.string.isRequired,
        status: React.PropTypes.string.isRequired
    }),
);


const User = enhance(({ name, status }) => <div>{name}: {status}</div>);

const User2 = User;

const App = () => {
    return (
        <div>
            <User2 />
        </div>
    );
};

export default App;
