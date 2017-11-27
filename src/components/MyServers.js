import { ListItem, List, Avatar, IconButton } from "material-ui";
import React from 'react'
import MyServerPage from './MyServerPage'

class MyServers extends React.Component {
    render() {

        return (
            <div>
                <div>
                    <List>
                        <MyServerPage setShowAppBar = {this.props.setShowAppBar}/>
                    </List>
                </div>

            </div>
        )
    }
}

export default MyServers