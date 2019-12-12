import React from 'react';
import Button1 from './part2/Button1';
import Button2 from './part2/Button2';
import Button3 from './part2/Button3';
import Button4 from './part2/Button4';
import Button5 from './part2/Button5';
import Button6 from './part2/Button6';
import Button7 from './part2/Button7';
import Button8 from './part2/Button8';

function Links() {
  return (
    <div>
      <div className='d-flex'>
        <Button1 />
        <Button2 />
      </div>
      <div className='d-flex'>
        <Button3 />
        <Button4 />
      </div>
      <div className='d-flex'>
        <Button5 />
        <Button6 />
      </div>
      <div className='d-flex'>
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

export default Links;
