import React from 'react'


export default class Mobile extends React.Component {
    constructor(props) {
        super(props)
       // console.log(this.props)
       
    }

    render() {
        console.log(this.props.ele)

        // let listData = this.props.mdata.map(ele => {
        //     return (
        //         <div>
        //             <ul>
        //                 <li>{ele}</li>
        //             </ul>
        //         </div>
        //     )
        // })

        return(
            <div>
                <h3 className="display-4">{this.props.h}</h3>
                <ul>
                     <li>{this.props.ele}</li>
                </ul>
            </div>
        )

    }
}