import React from 'react'


export default class KeyMapper extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keyPress: ''
        }
    }
    render(){
        return(
            <>
                <input 
                    type="text"
                    onKeyDown={(keyDown) => {
                        
                        this.setState({keyPress: keyDown}, () => {
                            console.log(this.state.keyPress)
                        })
                        
                        
                    }}
                />
                <div>{this.state.keyPress}</div>
            </>
        )
    }
}