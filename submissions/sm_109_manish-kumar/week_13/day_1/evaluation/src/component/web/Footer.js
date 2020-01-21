import React from 'react'

function Footer() {
    
    const whatsapp = ["Features", "Security", "Downloads","Whtasapp web", "Business"];
    const company = ["About", "Careers", "Brand Center", "Get In touch", "Blog", "WhatsApp Stories"];
    const download = ["Mac/pc", "Amdroid","iPhone", "Windows Phone"];
    const help = ["Faq" , "twitter", "Facebook"];
    return (
        <div className ="container-fluid" style ={{background :"#273443"}}>
            <div className ="row">
                <div className ="col mt-5">
                <div>
                    <center><p className="text-white" style ={{fontSize :"12px"}}>WHATSAPP</p>
                    
                    {whatsapp.map(ele =>{
                        return <p className="text-white" style ={{fontSize :"12px"}}>{ele}</p>
                    })}
                    </center>
                </div>
                </div>
                <div className ="col mt-5">
                <div>
                    <center><p className="text-white" style ={{fontSize :"12px"}}>Company</p>
                        
                    {company.map(ele =>{
                        return <p className="text-white" style ={{fontSize :"12px"}}>{ele}</p>
                    })}
                    </center>
                </div>
                </div>
                <div className ="col mt-5">
                <div>
                    <center><p className="text-white" style ={{fontSize :"12px"}}>Downloads</p>
                    
                    {download.map(ele =>{
                        return <p className="text-white" style ={{fontSize :"12px"}}>{ele}</p>
                    })}
                    </center>
                </div>
                </div>
                <div className ="col mt-5">
                    <div>
                        <center><p className="text-white" style ={{fontSize :"12px"}}>Help</p>
                        
                        {help.map(ele =>{
                            return <p className="text-white" style ={{fontSize :"12px"}}>{ele}</p>
                        })}
                        </center>
                    </div>
                </div>
                <div className ="col"></div>
            </div>
            <div className ="row" style ={{background :"#232f3c"}}>
                <div className ="col mt-2">
                    <center><p className ="text-white" style ={{fontSize :"12px"}}>2020 &copy; WhatsApp.Inc</p></center>
                </div>
                <div className ="col mt-2">
                    <center><p className ="text-white" style ={{fontSize :"12px"}}>Privacy And Terms</p></center>
                </div>
                <div className ="col"></div>
                <div className ="col"></div>
                <div className ="col"></div>
            </div>
        </div>
    )
}

export default Footer
