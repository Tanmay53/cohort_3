import React, { Component } from 'react'

class Contact extends Component {
    constructor(){
        super();

        this.state = {
            contactInfo: [
                {imgSrc:"https://uca700cdf24dba9c50a5398dd156.previews.dropboxusercontent.com/p/thumb/AArJnZQLBIny04_deBesF32fZ1d88PwarT-nOTWQW-naCO4YI1uh-uDGRL0JfLOfpYS9VJSuv-Jb30l9ZVEsoUl29j7mG0D88cHGxxAtan0GBsol9vspE8Of1d59-VyiqFVtD1ibxwO-zxYAeRGQJqPQta1Jm61IOnZDWDb4FS_FJuSb79YgtU6Pbl8ZCFcNKIh1R2LknFv3oaR_XsyUmteJd5ulXe-GLuaAQ6vpr7VJwgua3engdCCQD8NR3lgP722_lpOJKoQHJthT3AO-iZVWeUEnwZez8LMAhqGYV2DqNVfWUGdDYMYJ7EaThrmJB2gtXPSkt6yJfSKbrIOlVwHy6FkbWtTLUgxpRz_JUT_rX0LcxrTi_71HfOYxcmzI_WFmCBp7WnGRIMKnDvsY2NK5VTkYRCOJwgL2C7wyJ4ok2i_e6rSdPTIN1vrcQ9vCBGBU5OHPHxs00oE179TQmEALGTF0hkqFqM8awCYhNVZHKQ/p.png?size=1280x960&size_mode=3", cardTitle:"About us", cardText:"Find out how we started, what drives us, and how we’re igniting opportunity.", linkText:"Learn more"
                },
                {imgSrc:"https://ucc70bb1a06220b332d23a73878a.previews.dropboxusercontent.com/p/thumb/AApk3lZoBmIJ2d_MyVu3wP48mrdE4Hz6ws0iSdpVbJQG-HNUQ0AYBgPUyq7uORPdWLc4KuaQYrszwqtWiAE1p7gLYpigJ4eEzyuFlJ70W6UXeWJByst223RSjkcMVWgRZNWBoKIYZgd0q0CHtb6YCoToAF8_-kKqw4txoGqgrJ5JaJaYaoUq8s4_7N6qh6oJWe73JJ4UkBTD_5QTX_qbEmoe8XDUHwd4NrAxmN_YwUM7lmqK6MQuUXNQLC0US71Md0iqCXuc3W0ubTe8cYwtxZrW7jkCSnFk0KS-qCXQdWUQPgAjeQ1Ln-SwCa_byzHPuoYu_jcW-Alq5v2VTOFY13_4nhDFvLbkSdkzy1H7gU6TpehD8DyOO5wuZJ4JTcmU93Kx9722XFKQtiip3qOUX1dFDjhJSRc-P0fBkMjIz8B8vje3HeHtoSg1nn_uYuH0vprQMYGM4Iv5OXAQsPKNQCpCzHs-54obwQQ39CLLux5DVw/p.png?fv_content=true&size_mode=5", cardTitle:"Newsroom", cardText:"See announcements about our latest releases, initiatives, and partnerships.", linkText:"Learn more"
                },
                {imgSrc:"https://uc68f9858425ee88ff56092bde85.previews.dropboxusercontent.com/p/thumb/AAqUKir0zTCsdOtN5kLBUlTKkgo6roS4QTnQWvLwQ9wmoTmWBTuDRO5KnaJt4uzCYqkiEjdwW71gOqbE64AdDV1Zv4meAqZWsSfSEoF-zSZANUmTLuSzZVyd6OhLKTA5Ao_35wc6vkzEhd0AhQ6REKyiMf-8DlPCycyZuzql3F1dK7EKgDSQyfWuxZk_lMUYl-hA8zIE8MHhe5N0IYx3ptG3zpsWlyReY3Ul_o4rLIHkB65gLovR8llfqJHmSfMr9BE0neSYjIkxZSOwgoiPSa0dFsgcyeUkD_iuBfp0-iqobexBtEdqKu4XqF-a1o4fRclJ_7k1bYnbjzHQcqY2padCK2RAQw9OQhPZTInrBSN4PfcRDEpgrpXxGgcrudo_ya6D8hYQ9F0OOLMJIiX7uvvLGSaezFxVdwovvrxPVxdSR3My4iP2sRMKlFjd-fzw9-G4T-sIA5NS6_GYXMH_bqxUtNq5AjofK3R6rnM7LMtQKA/p.png?fv_content=true&size_mode=5", cardTitle:"Global citizenship", cardText: "Read about our commitment to making a positive impact in the cities we serve.", linkText:"Learn more"
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <br /><br />
                <div className="card-deck">
                    {this.state.contactInfo.map((e)=> 
                        <div className="card" style={{width: '18rem'}}>
                            <img className="ml-3" style={{width:30}} src={e.imgSrc}  alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">{e.cardTitle}</h5>
                                <p className="card-text">{e.cardText}</p>
                                <a href="#" className="btn font-weight-bold text-primary">{e.linkText}</a>
                            </div>
                        </div>
                    
                    )}
                </div>
            </React.Fragment>
        )
    }
}

export default Contact;