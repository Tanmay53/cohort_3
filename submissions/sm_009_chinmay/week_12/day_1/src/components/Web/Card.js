import React from 'react'

export default function Card(props) {
    console.log('in card', props.data)
    return (
        
        <React.Fragment>
            <div class="card p-5">
                <img style={{width: '70px'}} src="https://img.icons8.com/wired/64/000000/bank-cards.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.</p>
                </div>
            </div>
        </React.Fragment>
    )
}