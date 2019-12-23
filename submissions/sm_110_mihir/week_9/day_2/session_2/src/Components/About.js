import React from "react";
import Card from "./Card";
export default function About() {
    return (
        <div>
            <header className="container my-5 text-center border-bottom p-5">
                <h1 className="display-5 p-5 font-weight-normal">
                    We pioneered the discount broking model in India.
                    <br /> Now, we are breaking ground with our technology.
                </h1>
            </header>
            <article className="container my-5 p-5">
                <div className="row">
                    <div className="col-md-6 col-12">
                        <p>
                            We kick-started operations on the 15th of August,
                            2010 with the goal of breaking all barriers that
                            traders and investors face in India in terms of
                            cost, support, and technology.
                        </p>
                        <p>
                            Today, our disruptive pricing models and in-house
                            technology have made us the biggest stock broker in
                            India in terms of active retail clients.
                        </p>
                        <p>
                            Over 1.5+ million clients place millions of orders
                            every day through our powerful ecosystem of
                            investment platforms, contributing over 15% of all
                            Indian retail trading volumes.
                        </p>
                    </div>
                    <div className="col-md-6 col-12">
                        <p>
                            In addition, we run a number of popular open online
                            educational and community initiatives to empower
                            retail traders and investors.
                        </p>
                        <p>
                            Rainmatter, our fintech fund and incubator, has
                            invested in several fintech startups with the goal
                            of growing the Indian capital markets.
                        </p>
                        <p>
                            And yet, we are always up to something new every
                            day. Catch up on the latest updates on our blog or
                            see what the media is saying about us.
                        </p>
                    </div>
                </div>
            </article>
            <main className="container my-5">
                <div className="row">
                    <div className="col">
                        <h1 className="text-center my-5">People</h1>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-12 col-md-8">
                        <Card
                            img="https://zerodha.com/static/images/nithin-kamath.jpg"
                            name="Nitin Kamath"
                            title="Founder,CEO"
                        />
                    </div>
                    <div className="col-12 col-md-4 mt-5">
                        <p>
                            Nithin bootstrapped and founded Zerodha in 2010 to
                            overcome the hurdles he faced during his decade long
                            stint as a trader. Today, Zerodha has changed the
                            landscape of the Indian broking industry.
                        </p>
                        <p>
                            He was named one of the “Top 10 Businessmen to Watch
                            Out for in 2016 in India” by The Economic Times for
                            pioneering and scaling discount broking in India.
                        </p>
                        <p>Playing basketball is his zen.</p>
                    </div>
                </div>
                <div className="row my-5">
                    <div className="col-md-4 col-12">
                        <Card
                            img="https://zerodha.com/static/images/Austin.jpg"
                            name="Austin Prakesh"
                            title="Director - Strategy"
                        />
                    </div>
                    <div className="col-md-4 col-12">
                        <Card
                            img="https://zerodha.com/static/images/Nikhil.jpg"
                            name="Nikhil Kamath"
                            title="Co-founder & CIO"
                        />
                    </div>
                    <div className="col-md-4 col-12">
                        <Card
                            img="https://zerodha.com/static/images/Kailash.jpg"
                            name="Dr. Kailash Nadh"
                            title="CTO"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
