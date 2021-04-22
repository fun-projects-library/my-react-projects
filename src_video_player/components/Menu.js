import React, { Component } from 'react'

export default class Menu extends Component {
    
    render() {
        return (
            <div>
                <form>


                    <input type='radio' name='video' onClick={()=>this.props.chooseVideo('fast')}/>FAST
                    <input type='radio' name='video' onClick={()=>this.props.chooseVideo('slow')}/>SLOW
                    <input type='radio' name='video' onClick={()=>this.props.chooseVideo('cute')}/>CUTE
                    <input type='radio' name='video' onClick={()=>this.props.chooseVideo('eek')}/>EEK
                    
                </form>
            </div>
        )
    }
}
