import React from 'react'
import {useStateValue} from './StateProvider';
function TheatreName() {
    const [{theatre__name},dispatch] = useStateValue(null);
  return (
    <div>Hello</div>
  )
}

export default TheatreName