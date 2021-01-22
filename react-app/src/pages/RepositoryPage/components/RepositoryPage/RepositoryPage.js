import PropTypes from 'prop-types';
import {
    withStyles,
    Card,
    CardActionArea,
    CardContent,
    Typography,
    CardActions,
    Button,
    Avatar,
    Link,
    Box,
    Badge,
    CircularProgress
} from '@material-ui/core';


import StarBorderIcon from '@material-ui/icons/StarBorder';


import styles from './styles';

const RepositoryPage = ({ repositoryName, starsUrl, commitsUrl, avatar, userLogin, linkToGithub, languagesUrl, decription,
    isLoading, errors, classes, handleGoToRepositories }) => {

    return (
        <Box>
            {isLoading
                ? <Box className={classes.circularProgressContainer} >
                    <CircularProgress className={classes.circularProgressItem} size='100px' />
                </Box>
                : <Box className={classes.wrapper}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                                <Box className={classes.flexBox}>
                                    <Box>
                                        <Typography noWrap gutterBottom variant="h3" style={{ marginBottom: '10px', textAlign: 'center' }}>
                                            {repositoryName}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Badge style={{ margin: '12px' }} color="secondary" badgeContent={starsUrl} max={9999} showZero>
                                            <StarBorderIcon fontSize='large' />
                                        </Badge>
                                    </Box>
                                </Box>

                                <Box>
                                    <Typography gutterBottom variant="body1" style={{ marginBottom: 0 }}>
                                        Created: {new Date(commitsUrl).toDateString()}
                                    </Typography>
                                </Box>
                                <Box className={classes.flexBox}>
                                    <Box className={classes.avatar} style={{ backgroundImage: `url(${avatar})` }}></Box>
                                    <Box>
                                        <Typography gutterBottom variant="body1" style={{ marginBottom: 0 }}>
                                            User login: {userLogin}
                                        </Typography>
                                        <Typography gutterBottom variant="body1" style={{ marginBottom: 0 }}>
                                            Link to github: <Link href={linkToGithub}> {linkToGithub}</Link>
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box className={classes.flexBox}>
                                    <Box style={{ marginRight: 10 }} >
                                        <Typography gutterBottom variant="body1" >
                                            Languages:
                                </Typography>
                                    </Box>
                                    <Box style={{ textAlign: 'justify', marginBottom: 0 }} >
                                        <Typography gutterBottom variant="body1" style={{ marginBottom: 0 }}>
                                            {Object.keys(languagesUrl).map((language, index) => {
                                                return (
                                                    <>{language} </>
                                                )
                                            })}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography gutterBottom variant="body1" style={{ marginBottom: 0 }}>
                                        Decription: {decription}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button variant="text" size="small" color="primary" onClick={handleGoToRepositories} >
                                GO BACK
                    </Button>
                        </CardActions>
                    </Card>
                </Box >
            }
        </Box>
    );
};

RepositoryPage.propTypes = {

};

export default withStyles(styles)(RepositoryPage);