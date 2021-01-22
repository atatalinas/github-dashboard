import {
    withStyles,
    Card,
    CardActionArea,
    CardContent,
    Typography,
    CardActions,
    Button,
    Link,
    Box
} from '@material-ui/core';
import PropTypes from 'prop-types';

import styles from './styles';

const RepositoryCard = ({ name, ownerUrl, userLogin, classes, handleGoToDetails }) => {
    return (
        <Card className={classes.wrapper}>
            <CardActionArea>
                <CardContent>
                    <Box className={classes.avatarNameWrapper}>
                        <Typography gutterBottom variant="h5" className={classes.textElement}>
                            {name}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography gutterBottom variant="body1" className={classes.textElement}>
                            Owner: {userLogin}
                        </Typography>
                    </Box>
                    <Box>
                        <Typography gutterBottom variant="body1" className={classes.textElement}>
                            Link to github:
                            <Link href={ownerUrl}> {ownerUrl}</Link>
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button variant="text" onClick={handleGoToDetails} size="small" color="primary">
                    LEARN MORE
                </Button>
            </CardActions>
        </Card>
    );
};

RepositoryCard.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
    name: PropTypes.string.isRequired,
    ownerUrl: PropTypes.string.isRequired,
    handleGoToDetails: PropTypes.func.isRequired,
};

export default withStyles(styles)(RepositoryCard);