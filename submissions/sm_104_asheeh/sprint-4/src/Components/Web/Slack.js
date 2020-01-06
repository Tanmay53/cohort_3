import React, { Component } from 'react'
import Header from './Header'
import Image from './Image'
import Video from './Video'
import Card from './Card'
import HorizontalCard from './HorizontalCard'
import ReverseHorizontalCard from './ReverseHorizontalCard'
import Carousel from './Carousel'

export default class Slack extends Component {
    render() {
        return (
            <div>
                <Header />
                <Image />
                <br />
                <br />
                <Video />
                <br />
                <br />
                <Card />
                <br />
                <br />
                <HorizontalCard />
                <br />
                <br />
                <ReverseHorizontalCard />
                <br />
                <br />
                <Carousel />
            </div>
        )
    }
}
