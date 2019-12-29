import React from 'react'
import Rest from './Rest'
var rest = [
    {
        name : "URU Brewpark",
        image : "https://imgmedia.lbb.in/media/2019/07/5d2849201e155267990d40d4_1562921248384.jpg",
        type : ["Continental","Pizza","Asian","Desert"],
        cost : "Cost Rs.600 for one",
        min : "Min Rs.50",
        pay : "Accepts online payments only",
        time : "up to 30min",
        votes : "766 votes",
        reviews : "512 reviews",
        rating : "4.3"
    },
    {
        name : "Mayura Sagar",
        image : "https://media.afar.com/uploads/images/post_images/images/uwQTeEanW9/original_de9cf6573f8580964cb5b70f04374b6d.jpg?1448403809",
        type : ["Asian","Desert"],
        cost : "Cost Rs.200 for one",
        min : "Min Rs.100",
        pay : "Accepts online and cash payments",
        time : "up to 30min",
        votes : "76 votes",
        reviews : "51 reviews",
        rating : "3.6"
    },
    {
        name : "BOHO",
        image : "https://www.whatsuplife.in/bengaluru/blog/wp-content/uploads/2018/08/boho-koramangala-5th-block-bangalore-restaurants-a9ay5.jpg",
        type : ["Continental","Pizza","Asian","Desert","Mocktails"],
        cost : "Cost Rs.1500 for one",
        min : "Min Rs.500",
        pay : "Accepts online,card,cash payments",
        time : "up to 1hr",
        votes : "690 votes",
        reviews : "840 reviews",
        rating : "4.8"
    },
    {
        name : "Boozy Grifin",
        image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQizd0VTperjwiipp1qcxTY0UtZqYKNFixvovcZCktpT18rh32Y&s",
        type : ["Continental","Asian","Desert","Drinks"],
        cost : "Cost Rs.200 for one",
        min : "Min Rs.100",
        pay : "Accepts online payments only",
        time : "up to 45min",
        votes : "120 votes",
        reviews : "430 reviews",
        rating : "3.8"
    },
    {
        name : "Udupi",
        image : "https://media-cdn.tripadvisor.com/media/photo-s/16/89/ec/da/i-highly-recommend-the.jpg",
        type : ["Continental","Pizza","Asian","Desert","Punjabi"],
        cost : "Cost Rs.600 for one",
        min : "Min Rs.150",
        pay : "Accepts online and cash payments",
        time : "up to 45min",
        votes : "780 votes",
        reviews : "520 reviews",
        rating : "2.8"
    },
    {
        name : "Subhalakshmi Mess",
        image : "https://media-cdn.tripadvisor.com/media/photo-s/0b/99/a0/2a/lunch.jpg",
        type : ["Asian"],
        cost : "Cost Rs.300 for one",
        min : "Min Rs.50",
        pay : "Accepts online,card,cash payments",
        time : "up to 30min",
        votes : "50 votes",
        reviews : "800 reviews",
        rating : "1.9"
    },
    {
        name : "Cirus",
        image : "https://www.treebo.com/blog/wp-content/uploads/2018/05/Romantic-Restaurants-in-Bangalore.jpg",
        type : ["Continental","Pizza","Desert","Drinks"],
        cost : "Cost Rs.800 for one",
        min : "Min Rs.200",
        pay : "Accepts online payments only",
        time : "up to 30min",
        votes : "800 votes",
        reviews : "450 reviews",
        rating : "4.2"
    },
    {
        name : "Punjabi Tasty Khana",
        image : "https://i.ndtvimg.com/i/2015-09/punjab-grill-bangalore-625_625x350_51441266690.jpg",
        type : ["Continental","Pizza","Asian","Desert"],
        cost : "Cost Rs.600 for one",
        min : "Min Rs.50",
        pay : "Accepts cash payments only",
        time : "up to 30min",
        votes : "790 votes",
        reviews : "320 reviews",
        rating : "4.3"
    },
    {
        name : "A2B",
        image : "https://d2jz4nqvi4omcr.cloudfront.net/customerimages/large/107856_food_1_app_2017-04-05-13-16-59-000746.jpg",
        type : ["Continental","Pizza","Asian"],
        cost : "Cost Rs.800 for one",
        min : "Min Rs.200",
        pay : "Accepts online payments only",
        time : "up to 30min",
        votes : "730 votes",
        reviews : "510 reviews",
        rating : "4.1"
    },
    {
        name : "Domino's",
        image : "https://sophosnews.files.wordpress.com/2014/06/250px-dominos_pizza_logo.jpg?w=251",
        type : ["Continental","Pizza","Desert"],
        cost : "Cost Rs.400 for one",
        min : "Min Rs.100",
        pay : "Accepts online,card,cash payments",
        time : "up to 45min",
        votes : "200 votes",
        reviews : "400 reviews",
        rating : "3.9"
    }
]

class Card extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            resturant : rest
        }
    }

    filterRes = ele => {
        let val = ele.target.value
        alert(val)
        this.setState({
            resturant : rest.filter(function(elm){
                console.log(elm.rating > val)
                return elm.rating >= val && elm.rating <= val+1
            })
        })
    } 

    render()
    {
        return(
            <div>
                <div className="spanFoot my-4 mx-4 text-center">
                    <h2>Select Resturant based on rating</h2>
                    <button type="button" className="btn btn-outline-info btn-sm mx-2 my-2 p-2" value="1" onClick={this.filterRes}>1</button>
                    <button type="button" className="btn btn-outline-info btn-sm mx-2 my-2 p-2"  value="2" onClick={this.filterRes}>2</button>
                    <button type="button" className="btn btn-outline-info btn-sm mx-2 my-2 p-2"  value="3" onClick={this.filterRes}>3</button>
                    <button type="button" className="btn btn-outline-info btn-sm mx-2 my-2 p-2"  value="4" onClick={this.filterRes}>4</button>
                </div>
                {this.state.resturant.map((ele)=> (
                        <Rest label={ele}/>
                    )
                )}
            </div>
        )
    }
}

export default Card