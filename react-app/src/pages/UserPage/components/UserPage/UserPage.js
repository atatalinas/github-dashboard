import PropTypes from 'prop-types';

import { Box, withStyles } from '@material-ui/core';

import styles from './styles';

const UserPage = ({ avatar, isLoading, linkToRepo, userName, classes }) => {
    return (
        <Box>
            <Box className={classes.avatar} style={{ backgroundImage: `url(${avatar})` }}></Box>
            <Box> UserName: {userName}</Box>
            <Box><a href={linkToRepo}>Link to repo</a></Box>
        </Box>
    );
};

UserPage.propTypes = {

};

export default withStyles(styles)(UserPage);