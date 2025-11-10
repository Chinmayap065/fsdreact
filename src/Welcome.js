// function Welcome(props){
//     return(
//         <div>
//             <h1>Welcome to React</h1>
//             <h2>Student details</h2>
//             <p>Name:{props.name}</p>
//             <p>Age:{props.age}</p>

//         </div>
//     );
// }
import React ,{ Component } from "react";
class Welcome extends Component{
    render(){
        return <h2>Welcome to react class {this.props.name} component!</h2>;
    }
}

export default Welcome;