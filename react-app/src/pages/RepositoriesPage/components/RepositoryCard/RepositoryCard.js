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

const RepositoryCard = ({ name, stars, commits, ownerUrl, classes, handleGoToDetails }) => {

    return (
        <Card className={classes.wrapper}>
            <CardActionArea>
                <CardContent>
                    <Box className={classes.avatarNameWrapper}>
                        <Typography gutterBottom variant="h5" style={{ marginBottom: 0 }}>
                            {name}
                        </Typography>
                    </Box>
                    <Box><a href={stars}>stars</a></Box>
                    <Box><a href={commits}>commits</a></Box>
                    <Box><a href={ownerUrl}>ownerUrl</a></Box>
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


RepositoryCard.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
    name: PropTypes.string.isRequired,
    stars: PropTypes.string.isRequired,
    commits: PropTypes.string.isRequired,
    ownerUrl: PropTypes.string.isRequired,
    handleGoToDetails: PropTypes.func.isRequired,
};

export default withStyles(styles)(RepositoryCard);