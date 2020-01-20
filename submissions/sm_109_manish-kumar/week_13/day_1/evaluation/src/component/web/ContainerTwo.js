import React from 'react'

function ContainerTwo() {
    return (
        <div className ="container-fluid">
            <div className ="row mt-4">
                <div className = "col" style={{backgroundColor :"#e3f3f3"}}>
                    <center><h3 className ="mt-5">WhatsApp Business App</h3></center>
                    <center><p style={{fontSize :"12px"}}>WhatsApp Business is a free to download app 
                        that built with the small business owner in mind. Create a catalog to 
                        showcase your products and services. Connect with your customers easily 
                        by using tools to automate, sort and quickly respond to messages.
                    </p></center>

                    <center><p style={{fontSize :"12px"}}>WhatsApp can also help medium and large businesses provide customer support 
                        and deliver important notifications to customers. Learn more about 
                        WhatsApp Business API.
                    </p></center>
                    <div className ="row">
                        <center><img className ="img-fluid" src ="picOne.jpg" /></center>
                    </div>
                </div>
                <div className = "col ml-2" style={{backgroundColor :"#edf8f5"}}>
                   <center> <div className ="mt-5" style ={{width:"300px",height:"300px",borderRadius:'50%', background:"#77d7c8"}}>
                     
                    </div>
                    </center>
                
                <center><small className ="mt-3">END-TO-END ENCRYPTION</small></center>
                <center><h3 className ="mt-3">Security by Default</h3>
                <p>Some of your most personal moments are shared on WhatsApp, 
                    which is why we built end-to-end encryption into the latest versions of our app. 
                    When end-to-end encrypted, your messages and calls are secured so only you and the 
                    person you're communicating with can read or listen to them, and nobody in between, not even WhatsApp.
                </p>
                </center>
                </div>
            </div>
            <div className ="row mt-4 mb-4">
               <div className ="col">
                    <center><button className="btn py-3 px-5 my-5 rounded-pill btn-outline-success" style = {{borderRadius:"20%"}}>EXPLORE FEATURES</button></center>
               </div>
            </div>
        </div>
    )
}

export default ContainerTwo
