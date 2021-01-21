import PropTypes from 'prop-types';

import { Box, withStyles } from '@material-ui/core';

import styles from './styles';

const RepositoryPage = ({ repositoryName, starsUrl, commitsUrl, avatar, userLogin, linkToGithub, languagesUrl, decription,
    isLoading, errors, classes }) => {
    return (
        <Box>
            <Box className={classes.avatar} style={{ backgroundImage: `url(${avatar})` }}></Box>
            <Box> RepositoryName: {repositoryName}</Box>
            <Box><a href={starsUrl}>starsUrl</a></Box>
            <Box><a href={commitsUrl}>commitsUrl</a></Box>
            <Box> userLogin: {userLogin}</Box>
            <Box><a href={linkToGithub}>linkToGithub</a></Box>
            <Box><a href={languagesUrl}>languagesUrl</a></Box>
            <Box> decription: {decription}</Box>
        </Box>
    );
};

RepositoryPage.propTypes = {

};

export default withStyles(styles)(RepositoryPage);