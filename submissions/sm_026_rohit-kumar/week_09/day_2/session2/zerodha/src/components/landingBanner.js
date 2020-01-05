import React from 'react'

class LandingBanner extends React.Component {
    constructor(props) {
        super(props)
    }

    renderTuner = () => {
        let jsxToRender = [ <h1 className='mt-5'>{this.props.attrib.heading}</h1>,
                            <p>{this.props.attrib.para}</p>,
                            <button className='btn btn-primary mt-3'>
                                {this.props.attrib.buttonText}
                            </button>]
    
        if(this.props.attrib.src != null) {
            jsxToRender.unshift(<img style={this.props.attrib.style} src={`${this.props.attrib.src}`}   />)
        }

        return jsxToRender
        
    }

    render() {
        // console.log(this.props)
        return (
            <div className='text-center'>
                {this.renderTuner()}
            </div>
        )
    }
}
export default LandingBanner

