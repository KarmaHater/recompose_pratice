import React, { Component } from 'react';

const User = ({ name, status }) => <div>{name}: {status}</div>;

const App = () => {
    return (
        <div>
            <User name="andra" />
        </div>
    );
};

export default App;
