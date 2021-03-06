import React from 'react';
import PropTypes from 'prop-types';

import Job from './Experience/Job';

const Experience = ({ data, type }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>{type}</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Experience.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    position: PropTypes.string,
    link: PropTypes.string,
    daterange: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
  type: PropTypes.string,
};

Experience.defaultProps = {
  data: [],
  type: 'Experience',
};

export default Experience;
