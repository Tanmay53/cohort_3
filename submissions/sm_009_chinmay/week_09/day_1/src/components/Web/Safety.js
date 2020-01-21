import React, { Component } from 'react'

class Safety extends Component {
    constructor(){
        super()
        this.state = {
            Safety: [
                {
                imgSrc: "https://ucbdd06519a1c0ce46421e7fb518.previews.dropboxusercontent.com/p/thumb/AAoJLZGFGYuBJUBVnQySmgkb3xvAMG9JTUnJnljX3KD2HkshCsOXj5t9ZxrFtf-0YiuN04__OQJPtlQrg9e0tCSXBy-ejKwwF96_RniDh5xJCXx4DNVcJeaObjWkDoiRhawup8Ytpz323ojUVXwxy8tacsKEd8e9YSYf3H-itFo007ABZ6e-Ts6w-VlIzURsoCJtyeCN6BW5GK2wMv1nfNqo16MJ17qzgILOV84b_uOplNEBjeKVzzoB8exM90_Oosk-I8KZBt38bzz10nlGvS2tWCSB0JpmE9IUmH-fCmId1fu-cQk67QlTU9FLmeuXyQQnK29IZiyuKvSjhPr-jUbjNLV6RK-fOAbtjcz3D4QEZBskHHyWn0103y8_cRupT_kxyufaOkfhnJKXSSkZeAGvxVw4xayjpiA72gn_PvtNamGhbgrfd22lL2cpiViWd7XdFV9Ce-HuZ7jv3-C3x0IgquOqPhTMnAZoaCnelkUSbg/p.png?size=1280x960&size_mode=3",
                textTitle1: "Our commitment to your",
                textTitle2: "safety",
                info: "With every safety feature we add and every standard in our Community Guidelines we uphold, we’re committed to protecting you on the road ahead. Learn more about our Community Guidelines here.",
                linkText:'See all safety features'
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <br /> <br /> <br /> <br />
                {this.state.Safety.map((e)=>
                <div className='row'>
                    <div className='col-md-6 text-left'>
                        <div className="card">
                            
                            <div className='col-md-10 ml-8 border-0'>
                                <div>
                                    <h1 className="card-title text-left ml-4 ">{e.textTitle1}</h1>
                                    <h1 className="card-title text-left ml-4">{e.textTitle2}</h1>
                                    <p className='ml-4'>{e.info}</p>
                                    <a className='ml-4'><u>{e.linkText}</u></a>
                                </div>
                            
                            </div>
                        </div>
                    </div>    
                    <div className='col-md-6 text-center'>
                        <img src={e.imgSrc} alt="..." />
                    </div>
                </div>
                    
                )}
            </React.Fragment>
        )
    }
}

export default Safety;