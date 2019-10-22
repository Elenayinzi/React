import React from 'react'

export default class Info extends React.Component{
    
    render() {
        return(
            <div>
                this is info page.
                {this.props.match.params.value}
            </div>
        )
    }
}