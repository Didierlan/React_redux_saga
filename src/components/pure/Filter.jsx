import React from 'react';
import PropTypes from 'prop-types';


const Filter = ({active , click , children}) => {

    if(active){
        return (<span className='active'>{children}</span>)
    }

    return (
        <button className='filter' onClick={(e) => {
            e.preventDefault();
            click(); 
        }}>
        {children}
            
        </button>
    );
};


Filter.propTypes = {
    active: PropTypes.bool.isRequired,
    click: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,

};


export default Filter;
