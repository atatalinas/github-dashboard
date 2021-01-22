import { useHistory } from 'react-router-dom';
import { Button, Box, withStyles } from '@material-ui/core';

import { ROUTES } from '../../../routes/routeNames';

import styles from './styles';

const HomePage = ({ classes }) => {
    const history = useHistory();

    return (
        <Box className={classes.wrapper}>
            <Button className={classes.homeButton} onClick={() => history.push(ROUTES.REPOSITORIES)}>Repositories</Button>
        </Box>
    );
};

export default withStyles(styles)(HomePage);