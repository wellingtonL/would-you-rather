import React from 'react';
import {users} from '../utils/_DATA.js';

export const avatar = props => {
  const { avatarURL, image, name, big} = props;
  return (
    <img
      src={image}
      alt={name}
      style={big===true? {borderRadius:100, height:"100px"}: { borderRadius:50,height:"50px" }}
    />
  );
};

export default avatar;