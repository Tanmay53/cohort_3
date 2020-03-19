import React from "react"
const {Provider, Consumer} = React.createContext()



class UserContextProvider extends React.Component {
    render(props) {
        return (
            <Provider value={this.props.item}>
                {this.props.children}
            </Provider>
        )
    }
}

export {UserContextProvider, Consumer as UserContextConsumer}