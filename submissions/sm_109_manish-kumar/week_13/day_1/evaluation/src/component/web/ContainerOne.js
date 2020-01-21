import React from 'react'

function ContainerOne() {
    const arr = ["Android", "iPhone", "Mac or Window PC", "Windows Phone"]
    return (
        <div className ="container">
            <div className ="row">
                <div className ="col mt-4">
                    <center><h3>Simple. Secure.</h3></center>
                    <center><h3>Reliable messaging.</h3></center>

                    <p>With WhatsApp, you'll get fast, simple, secure messaging and calling for free*,
                        available on phones all over the world.</p>
                    <small>* Data charges may apply. Contact your provider for details.</small>
                    <div>
                        {arr.map(ele =>{
                                return <h4 className ="text-info">{ele}</h4>
                        })}
                    </div>
                </div>
                <div className ="col">
                    <img src = "pic.jpeg" />
                </div>
            </div>
        </div>
    )
}

export default ContainerOne
