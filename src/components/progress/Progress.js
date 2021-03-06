import React from 'react';
import './style.css';
import PropTypes from 'prop-types';

const Progress = ({percent}) => {
    return (
        <div className='Progress'>
            <div className='Progress__percent' style={{width: `${percent}%`}}/>
        </div>
    )
};
Progress.propTypes = {
    percent: PropTypes.number.isRequired
};
export default Progress;