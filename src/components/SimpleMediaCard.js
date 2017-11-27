import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton'
import { MoreVert } from 'material-ui-icons'
const styles = {
    card: {
        maxWidth: 345,
        margin: 'auto',
        height:500
    },
    media: {
        height: 500,
    },
};

class SimpleMediaCard extends React.Component {
    state = {
        anchorEl: null,
        open: false,
    };

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };
    render() {
        const { classes } = this.props
        return (
            <div>

                <Card className={classes.card}>
                    <div>
                        <IconButton  style={{float:'right'}}
                            aria-owns={this.state.open ? 'simple-menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                        >
                            <MoreVert />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={this.state.anchorEl}
                            open={this.state.open}
                            onRequestClose={this.handleRequestClose}
                        >
                            <MenuItem onClick={this.handleRequestClose}>Add to Dashboard</MenuItem>
                            <MenuItem onClick={this.handleRequestClose}>Configure</MenuItem>
                            <MenuItem onClick={this.handleRequestClose}>Remove</MenuItem>
                        </Menu>
                    </div>
                    <CardMedia
                        className={classes.media}
                        image="achart.gif"
                        title="Contemplative Reptile"
                    />
                    <Button style={{position:'absolute',bottom:8}} dense>View More </Button>

                    {/* <CardContent>
          <Typography type="headline" component="h2">
            Lizard
          </Typography>
          <Typography component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Share
          </Button>
          <Button dense color="primary">
            Learn More
          </Button>
        </CardActions> */}
                </Card>
            </div>
        );
    }
}

SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
