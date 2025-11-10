import React from "react";
class ErrorBoundary extends React.Component {
    constructor(props){
        super(props);
        this.state={ hasError:false};
    }
    static getDerivedStateFromError(error){
    return { hasError:true };
}
    componentDidCatch(error,info){
        console.log("Error caught by Error Boundary:",error);
    }
    render(){
        if(this.state.hasError){
            return <h2 style={{color:"red"}}>Something went wrong.</h2>;
        }
        return this.props.children;
    }
}
export default ErrorBoundary;