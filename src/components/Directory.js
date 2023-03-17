import React from 'react';

const liStyle = {
    'display' : 'inline',
    'margin' : '2px',
    'padding' : '1px',
    'border' : '1px solid black'
}

const Directory = (props) => {
  return (
    <div>
      <h2>Directory</h2>
      <ul>
        <li style={liStyle}><a href="#">Community</a></li>
        <li style={liStyle}><a href="#">For Sale</a></li>
        <li style={liStyle}><a href="#">Jobs</a></li>
        <li style={liStyle}><a href="#">Housing</a></li>
        <li style={liStyle}><a href="#">Services</a></li>
        <li style={liStyle}><a href="#">Gigs</a></li>
        <li style={liStyle}><a href="#">Resumes</a></li>
      </ul>
    </div>
  );
};

export default Directory;
