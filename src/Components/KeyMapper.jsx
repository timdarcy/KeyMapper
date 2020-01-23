import React from 'react'


export default class KeyMapper extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <>
                <div 
                    type="text"
                    className="main-display"
                    tabIndex="0"
                    
                    onKeyDownCapture={(keyDown) => {
                        keyDown.preventDefault()
                        this.setState({
                            keyPress: keyDown.key,
                            keyCode: keyDown.keyCode,
                            keyLocation: keyDown.location,
                            keyWhich: keyDown.which
                        }, () => {
                            console.log(keyDown.persist())
                        })
                    }}
                    >
                        <ul>
                            <li>KeyPress: {this.state.keyPress}</li>
                            <li>KeyCode: {this.state.keyCode}</li>
                            <li>KeyLocation: {this.state.keyLocation}</li>
                            <li>KeyWhich: {this.state.keyWhich}</li>
                        </ul>
                    </div>
                
            </>
        )
    }
}