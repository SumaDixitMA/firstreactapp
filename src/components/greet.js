import React from 'react'

const Greet = props => {
console.log(props.name)
return (
<div>
<h3>Welcome {props.name} A.k.a {props.surname}</h3>
{props.children}
</div>
)
}
export default Greet
