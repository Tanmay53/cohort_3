import React from 'react';

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            footerItems: [
                {   
                    id:'foot1',
                    header5:"PRODUCT",
                    para: ["Why Slack?", "Enterprise", "Security", "Customer stories", "Pricing", "Slack demo"],
                },
                {
                    id:'foot2',
                    header5: "SLACK FOR TEAMS",
                    para: ["Engineering", "Financial services", "Sales", "IT","Marketing", "Customer support", "Human resources", "Project management", "Media"]
                },
                {
                    id:'foot3',
                    header5: "RESOURCES",
                    para: ["Slack Tips", "Blog", "Slack Certified programme","Help Centre", "API", "App Directory", "Download Slack", "Partners"]
                },
                {
                    id:'foot6',
                    header5: "COMPANY",
                    para: ["About Us", "Leadership", "News", "Media kit", "Careers"],
                },
                
            ]
        }
    }

    render(){
        return (
            <React.Fragment>
                    <div className="jumbotron jumbotron-fluid footer_text mb-0">
                        <div className = "row ml-3 text-secondary">
                            <div>
                                <img style={{width:'70px'}} className='mr-5' src="https://www.stickpng.com/assets/images/5cb480cd5f1b6d3fbadece79.png" alt=""/>
                            </div>
                            {
                                this.state.footerItems.map((e)=> 
                                    <div className = "container col-2">
                                        <h5 className="font-weight-bold">{e.header5}</h5>
                                        <span className='small mt-2'>
                                            {e.para.map((e)=> <p> {e}</p>)}
                                        </span>
                                    </div>
                            )}
                        </div>
                
                </div>
            </React.Fragment>
        )
    }
}

export default Footer;