import React from 'react'
import Carousel from './Carousel'
import Bodyfirst from './Bodyfirst'
import Amenities from './Amenities'
import Bodysecond from './Bodysecond'
import Bodythird from './Bodythird'
import Partners from './Partners'
import './styles.css'
class Home extends React.Component{
    constructor(props){
        super(props)
        this.facilities=['Hassle free setup','No hidden costs','Pay-per-use plans','Work anytime (24X7)','PAN India access',
                    'Seamless internet','Bright open workspaces','Secure private cabins','Failsafe power backups',
                    'Contemporary conference rooms','Table tennis, foosball, board games and more']
        
        this.businessurl=[{url:'https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/10/icici1.png',alt:"icici"},
                       {url:'https://images.financialexpress.com/2018/10/paytm.jpg',alt:"paytm"},
                       {url:'https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/10/digital1.png',alt:"digital"},
                       {url:'https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/10/uber1.png',alt:"uber"}]

        this.companyurl=[{url:'https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/member_logos-02.png',alt:'phonepe'},
                        {url:'https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/member_logos-12.png',alt:'rentomojo'},
                        {url:'https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/member_logos-11.png',alt:'mobikwik'},
                        {url:'https://149361960.v2.pressablecdn.com/wp-content/uploads/2019/08/member_logos-09.png',alt:'datamat'}]

    }
    render(){
        return(
            <div>
                <Carousel/>
                <Bodyfirst/>
                <Amenities amen={this.facilities}/>
                <Bodysecond/>
                <Bodythird business={this.businessurl}
                            company={this.companyurl}/>
                <Partners/>
            </div>
        )
    }
}
export default Home