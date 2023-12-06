import React, {Component} from 'react'

class Welcome extends Component {
    render(){
        return <h1>Welcome from Class Component {this.props.name} A.k.a {this.props.surname}</h1>
    }
}

export default Welcome