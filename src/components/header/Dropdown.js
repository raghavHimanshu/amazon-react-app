import React, { useState } from 'react'

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Dropdown() {
    
  const [category, setCategory] = useState(1);
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const mystyle = {
    color: '#000',
    backgroundColor: "#ddd",
    borderRadius: "5px 5px 0 0",
  };

  return (
    <div className='header__dropdown' style={mystyle}>
        <Select value={category} onChange={handleChange} inputProps={{ 'aria-label': 'Without label' }} size="small" >
          <MenuItem value={1} defaultChecked>All</MenuItem>
          <MenuItem value={2}>Arts and Crafts</MenuItem>
          <MenuItem value={3}>Thirty</MenuItem>
        </Select>
    </div>
  )
}

export default Dropdown