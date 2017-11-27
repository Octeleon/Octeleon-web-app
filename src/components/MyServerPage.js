import List, {ListItem,ListItemIcon,ListItemText,ListItemAvatar} from 'material-ui/List'
import React from 'react'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import SimpleMediaCard from './SimpleMediaCard'
import {ArrowBack,Settings} from 'material-ui-icons'
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'
class MyServerPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        
    }

    clickAction = (loaded) => {
        console.log(loaded)
        this.setState({loaded:!loaded})
        this.props.setShowAppBar(loaded)
    }

    render() {


        let mystyle = {
            height: '15vh',
            position: 'relative',
            transform: 'translate(0,-1000)'


        };



        return (
            <div>
                
                <ListItem primaryText={"Amrut's Server"}
                    
                    onClick={()=>this.clickAction(false)}>
                    {this.state.loaded && 
                <IconButton onClick={(e)=>{e.stopPropagation();this.clickAction(true)}}>
                    <ArrowBack/>
                </IconButton>
                }
                    <Avatar src={"factory.jpg"}/>
                <ListItemText primary="Amrut's Server" />
                <ListItemIcon><Settings/></ListItemIcon>
                </ListItem>
                {this.state.loaded && 
                    <SimpleMediaCard />
                }
            </div>
        )
    }
}

export default MyServerPage