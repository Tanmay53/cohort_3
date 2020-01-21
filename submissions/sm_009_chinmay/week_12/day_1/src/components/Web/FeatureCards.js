import React from 'react'
import Card from './Card'

export default function FeatureCards(props) {
    return (
        <div>
            <div class="card-group">
                <Card data={props.data}/>
                <Card data={props.data}/>
                <Card data={props.data}/>
            </div>
        </div>
    )
}
