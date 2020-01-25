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
                    tabIndex="0"
                    
                    onKeyDownCapture={(keyDown) => {
                        let nativeEvent = keyDown.nativeEvent;
                        keyDown.preventDefault()
                        this.setState({
                            keyPress: nativeEvent.code,
                            keyCode: keyDown.keyCode,
                            keyLocation: keyDown.location,
                            nativeKeyCode: nativeEvent.which
                        })
                    }}
                    >
                        <div className="panel is-info">
                            <h3 className="panel-heading">Press a Key</h3>
                            <table className="table">
                                <tr>
                                    <td>KeyPress</td>
                                    <td>{this.state.keyPress}</td>
                                </tr>
                                <tr>
                                    <td>KeyCode</td>
                                    <td>{this.state.keyCode}</td>
                                </tr>
                                <tr>
                                    <td>KeyLocation</td>
                                    <td>{this.state.keyLocation}</td>
                                </tr>
                                <tr>
                                    <td>KeyWhich</td>
                                    <td>{this.state.nativeKeyCode}</td>
                                </tr>
                            </table>
                        </div>
                </div>
                
            </>
        )
    }
}