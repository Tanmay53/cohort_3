import React from 'react'
import Button from './btn'

class Card extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            arr : [["JOIN US","#2B7EA1"],["SETTINGS","#BEE4E5"],["LOGIN","#F5913B"],["CONTACT US","#B83837"],["SEARCH","#78984C"],["HELP","#5A5897"],["HOME","#ED5A96"],["DOWNLOAD","#986F3B"]]
        }
    }

    render()
    {
        return(
            <div className="row">
                <Button arr={this.state.arr}/>
            </div>
        )
    }
}

export default Card