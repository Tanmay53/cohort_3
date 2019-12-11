import React from 'react';
import './buttons.css';

class Buttons extends React.Component{
    render(){
        return <div className='flex'>
                    <div>
                        <button id='one'>JOIN US</button>
                        <button id='two'>SETTINGS</button>
                    </div>
                    <div>
                        <button id='three'>LOGIN</button>
                        <button id='four'>CONTACT US</button>
                    </div>
                    <div>
                        <button id='five'>SEARCH</button>
                        <button id='six'>HELP</button>
                    </div>
                    <div>
                        <button id='seven'>HOME</button>
                        <button id='eight'>DOWNLOAD</button>
                    </div>
               </div>
            }
}

export default Buttons