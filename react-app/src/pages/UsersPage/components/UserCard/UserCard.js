import {
    withStyles,
    Card,
    CardActionArea,
    CardContent,
    Typography,
    CardActions,
    Button,
    Avatar,
    Box
} from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './styles';

const UserCard = ({ name, avatar, classes, handleGoToDetails }) => {
    return (
        <Card className={classes.wrapper}>
            <CardActionArea>
                <CardContent>
                    <Box className={classes.avatarNameWrapper}>
                        <Avatar className={classes.avatar} src={avatar} />
                        <Typography gutterBottom variant="h5" style={{ marginBottom: 0 }}>
                            {name}
                        </Typography>
                    </Box>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Some text
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={handleGoToDetails} size="small" color="primary">
                    Learn more
                </Button>
            </CardActions>
        </Card>
    );
};

UserCard.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    handleGoToDetails: PropTypes.func.isRequired,
};

export default withStyles(styles)(UserCard);