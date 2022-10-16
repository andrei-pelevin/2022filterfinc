import React from "react";
import PropTypes from 'prop-types';


const IconSwitch = ({icon, onSwitch}) => {
    let view;
    
   if (icon === false) {
        view = 'view_list'
   } else {
       view = 'view_module'
   }

    return (
        <div className='IconsSwitch'>            
           <div onClick={() => onSwitch()} style={{fontSize: 50+'px'}} className='material-icons icon'>{view}</div>       
        </div>
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.bool
  };

export default IconSwitch;