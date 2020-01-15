import React from 'react';
import './JumboCSS.css';
class Jumbo extends React.Component{
    render(){
        return(
            <div className="bg mt-0 pb-4">
               <div className="pl-4 ml-5">
               <p className="display-4 col-6 font-weight-bold ml-4 pt-5">Slack replaces email inside your company </p>
                <p className="h3 col-6 ml-4">Keep conversations organised in Slack, the smart alternative to email.</p>
                <div className="ml-3">
                <button type="button" class="btn purple text-white col-2 ml-4 py-4">TRY SLACK</button>
                <button type="button" id="btnx" class="btn btn-outline-primary text-slack col-2 ml-2 py-4">SEE THE DEMO</button>
                </div>
                <p className="mt-4 ml-4 col-4 pb-5">Already using Slack? <u className="text-info">Sign in.</u></p>
               </div>
            </div>
        )
    }
}
export default Jumbo