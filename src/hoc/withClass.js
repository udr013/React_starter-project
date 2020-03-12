import React from 'react';

//WrappedComponenent with upercase as this is a refference to a Component
//regular function that returns an other functional component
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass;