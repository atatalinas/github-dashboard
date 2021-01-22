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
    isLoading, classes, handleGoToRepositories }) => {

    return (
        <Box>
            <Box className={classes.wrapper}>
                <Card className={classes.card}>

                    {isLoading
                        ? <Box className={classes.circularProgressContainer} >
                            <CircularProgress className={classes.circularProgressItem} size='100px' />
                        </Box>
                        :
                        <>
                            <CardActionArea>
                                <CardContent>
                                    <Box className={classes.flexBox}>
                                        <Box>
                                            <Typography noWrap gutterBottom variant="h3" className={classes.appHeader}>
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
                                        <Typography gutterBottom variant="body1" className={classes.textElement}>
                                            Created: {new Date(commitsUrl).toDateString()}
                                        </Typography>
                                    </Box>
                                    <Box className={classes.flexBox}>
                                        <Box className={classes.avatar} style={{ backgroundImage: `url(${avatar})` }}></Box>
                                        <Box>
                                            <Typography gutterBottom variant="body1" className={classes.textElement}>
                                                User login: {userLogin}
                                            </Typography>
                                            <Typography gutterBottom variant="body1" className={classes.textElement}>
                                                Link to github: <Link href={linkToGithub} target='_blank'> {linkToGithub}</Link>
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box className={classes.flexBox}>
                                        <Box className={classes.textElement} >
                                            <Typography gutterBottom variant="body1" >Languages: </Typography>
                                        </Box>
                                        <Box style={{ textAlign: 'justify', marginBottom: 0 }} >
                                            <Typography gutterBottom variant="body1" className={classes.textElement}>
                                                {Object.keys(languagesUrl).map((language) => {
                                                    return (
                                                        <> {language} </>
                                                    )
                                                })}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography gutterBottom variant="body1" className={classes.textElement}>
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
                        </>
                    }
                </Card>
            </Box >
        </Box >
    );
};

RepositoryPage.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
    repositoryName: PropTypes.string.isRequired,
    starsUrl: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired
    ]),
    commitsUrl: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    linkToGithub: PropTypes.string.isRequired,
    userLogin: PropTypes.string.isRequired,
    languagesUrl: PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.string.isRequired
    ]),
    decription: PropTypes.string.isRequired,
    handleGoToRepositories: PropTypes.func.isRequired,
};


export default withStyles(styles)(RepositoryPage);