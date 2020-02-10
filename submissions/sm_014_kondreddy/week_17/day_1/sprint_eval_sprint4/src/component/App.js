import React from "react";
import MovieData from "./MovieData";


class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            MovieData: [
                {
                    name: "joker",
                    url: "/home/masai/coding/week_8/my-app/public/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
                    rating: "8.3/10",
                    language: "english"
                },
                {
                    name: "ad astra",
                    url: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/xBHvZcjRiWyobQ9kxBhO6B2dtRI.jpg",
                    rating: "6.0/10",
                    language: "english"
                },
                {
                    name: "Bad Boys for Life",
                    url: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
                    rating: "6.6/10",
                    language: "english"
                },
                {
                    name: "ip Man4-the Finale",
                    url: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/yJdeWaVXa2se9agI6B4mQunVYkB.jpg",
                    rating: "6.0/10",
                    language: "english"
                },
                {
                    name: "Avengers:Infinity War",
                    url: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
                    rating: "8.3/10",
                    language: "english"
                },
                {
                    name: "Frozen II",
                    url: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
                    rating: "7.0/10",
                    language: "english"
                },
                {
                    name: "Star Wars: The Rise of Skywalker",
                    url: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
                    rating: "7.3/10",
                    language: "english"
                },
                {
                    name: "The Lion King",
                    url: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",
                    rating: "7.0/10",
                    language: "english"
                },
                {
                    name: "Fast & Furious Presents: Hobbs & Shaw",
                    url: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/kvpNZAQow5es1tSY6XW2jAZuPPG.jpg",
                    rating: "6.6/10",
                    language: "english"
                }
            ]
        }
    }
    render() {

        return (
            <div>
                <MovieData  data={this.state.MovieData}/>
            </div>
        );
    }
}
export default App