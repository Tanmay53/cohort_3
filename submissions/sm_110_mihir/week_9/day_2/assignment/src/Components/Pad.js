import React from "react";
import Products from "./Products";
import { Link, Route } from "react-router-dom";

export default function Pad() {
    return (
        <React.Fragment>
            <Route path="/iPad/cases" render={() => <Details name="cases" />} />
            <Route path="/iPad/strap" render={() => <Details name="strap" />} />
            <Route path="/iPad/pivot" render={() => <Details name="pivot" />} />
            <Route exact path="/iPad" render={() => <Details name="list" />} />
        </React.Fragment>
    );
}

const Details = props => {
    if (props.name === "cases") {
        return (
            <Products
                img="https://cdn.shopify.com/s/files/1/0173/8828/products/Studio_Proper_Ipad17_91676_2048x.jpg?v=1532309843"
                name="iPad Connect Shell Case"
                price="45.00"
                description="The Proper iPad Shell Case is slim, light weight, protective, and most importantly, your bridge into the Connect Series of iPad Mounts and Stands.
            Work or play; the Connect Series allows you to use your iPad like never before."
            />
        );
    } else if (props.name === "strap") {
        return (
            <Products
                img="https://cdn.shopify.com/s/files/1/0173/8828/products/Shoulder__0000s_0000_Studio_Proper_Ipad17_91604_b8553a87-96d6-4454-a0ac-b5de850d0d09_2048x.jpg?v=1532309971"
                name="iPad Shoulder Strap"
                price="50.00"
                description="Strap up. Feather weight and highly durable — The Proper iPad Shoulder Strap is secured with an adjustable nylon strap. A simple ‘turn & click’ locks your device firmly in place, without the need for bulky clips or unflattering velcro. We’ve taken a minimalist approach to wearable technology, readying your iPad for every activity."
            />
        );
    } else if (props.name === "pivot") {
        return (
            <Products
                img="https://cdn.shopify.com/s/files/1/0173/8828/products/0000s_0000s_0000_Studio_Proper_Ipad17_91674_f85bc3f8-b840-40e9-a018-7a100260ce45_2048x.jpg?v=1532309914"
                name="iPad Pivot Stand"
                price="59.95"
                description="The iPad Pivot Stand is the ideal complement to any desktop environment. Mount your iPad by your side and use it as secondary screen, a media control centre, or a productive sidekick. Standing tall and handsome in the office, and blending in seamlessly at home."
            />
        );
    } else if (props.name === "list") {
        return (
            <ul>
                <li>
                    <Link to="/iPad/cases">Connect iPad Case</Link>
                </li>
                <li>
                    <Link to="/iPad/strap">iPad shoulder strap</Link>
                </li>
                <li>
                    <Link to="/iPad/pivot">iPad pivot stand</Link>
                </li>
            </ul>
        );
    }
};
