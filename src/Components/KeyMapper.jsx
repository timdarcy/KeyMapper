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
                        let nativeEvent = keyDown.nativeEvent;
                        keyDown.preventDefault()
                        this.setState({
                            keyPress: nativeEvent.code,
                            keyCode: keyDown.keyCode,
                            keyLocation: keyDown.location,
                        })
                    }}
                    >
                        <ul>
                            <li>KeyPress: {this.state.keyPress}</li>
                            <li>KeyCode: {this.state.keyCode}</li>
                            <li>KeyLocation: {this.state.keyLocation}</li>
                            <li>KeyWhich: {this.state.nativeKeyCode}</li>
                        </ul>
                    </div>
                
            </>
        )
    }
}