import React from "react";
import Card from "./Card";
export default function About() {
    return (
        <div>
            <header className="container my-5 text-center border-bottom p-5">
                <h1 className="display-5 p-5 font-weight-normal">
                    Designed to do More
                </h1>
                <p className="lead">
                    Studio Proper is a boutique product design studio based in
                    Melbourne, Australia, focused on simplifying everyday
                    interactions with technology in a beautiful and minimal
                    fashion. Founded on the principal that good design should be
                    seamless; we designed a range of mounts, stands, and
                    accessories that fit cohesively in every use case with Apple
                    devices. Studio Proper currently offers mounting solutions
                    for the iPhone, iPad, and Apple Watch; featuring desk
                    stands, travel accessories, wall mounts, and more. As well
                    as a range of specialised Business Solutions designed to
                    simplify point of sale experiences and create seamless
                    customer interactions in retail, hospitality, and large
                    enterprise.
                </p>
            </header>

            <main className="container my-5">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center my-5">Meet our temp</h1>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 col-md-8">
                        <Card
                            img="https://cdn.shopify.com/s/files/1/0173/8828/files/Team-Proper-Alon_grande_baef5ad9-8328-41ed-ac7a-18669f4146f9_600x600.png?v=1575425648"
                            name="Alon Tamir"
                            title="Founder and CEO"
                        />
                    </div>
                    <div className="col-12 col-md-4">
                        <h3>Our Mission</h3>
                        <p className="lead">Proper technology experiences.</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-4 col-12">
                        <Card
                            img="https://cdn.shopify.com/s/files/1/0002/8092/0115/files/Team-Proper-James_grande.jpg?v=1522803885"
                            name="James Kennedy"
                            title="Design Director"
                        />
                    </div>
                    <div className="col-md-4 col-12">
                        <Card
                            img="https://cdn.shopify.com/s/files/1/0002/8092/0115/files/Team-Proper-Aidan_grande.jpg?v=1522803770"
                            name="Aidan Pattinson"
                            title="Industrial Design"
                        />
                    </div>
                    <div className="col-md-4 col-12">
                        <Card
                            img="https://cdn.shopify.com/s/files/1/0002/8092/0115/files/Team-Proper-Sihan_grande.jpg?v=1522803938"
                            name="Sihan Zhao"
                            title="Supply chain manager"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
