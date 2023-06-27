import { Info } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';

import './MoreInfo.css'; // Importing CSS file for custom styling

const MoreInfo = ({ eventDescription, rounds, date, time, venue, coordinator, image_path }) => {
return (
<div className='more-info'>
<div className='text-attributes'>
<div className='attribute'>
<div className='attribute-label'>Event Description:</div>
<div className='attribute-value'>{eventDescription}</div>
</div>
<div className='attribute'>
<div className='attribute-label'>Rounds:</div>
<div className='attribute-value'>{rounds}</div>
</div>
<div className='attribute'>
<div className='attribute-label'>Date:</div>
<div className='attribute-value'>{date}</div>
</div>
<div className='attribute'>
<div className='attribute-label'>Time:</div>
<div className='attribute-value'>{time}</div>
</div>
<div className='attribute'>
<div className='attribute-label'>Venue:</div>
<div className='attribute-value'>{venue}</div>
</div>
<div className='attribute'>
<div className='attribute-label'>Coordinator:</div>
<div className='attribute-value'>{coordinator}</div>
</div>
</div>
<div className='image-attribute'>
<img src={image_path} alt='Event' />
</div>
</div>
);
};

export default MoreInfo;