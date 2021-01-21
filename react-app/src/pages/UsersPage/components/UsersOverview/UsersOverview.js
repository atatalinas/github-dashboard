import PropTypes from 'prop-types';
import { Box, TextField } from '@material-ui/core';

import UserCard from '../UserCard/UserCard';

const UsersOverview = ({ users, isLoading, errors, handleGoToUser, handleSearchInputChange }) => {
    return (
        <Box>
            <Box style={{ marginBottom: 25 }} >
                <TextField id="standard-basic" name='searchValue' label="user name" onChange={handleSearchInputChange} />
            </Box>

            {users.map((user) => {
                return (
                    <Box style={{ marginBottom: 25 }}>
                        <UserCard name={user.login} avatar={user.avatar_url} handleGoToDetails={() => handleGoToUser(user.login)} />
                    </Box>
                )
            })}
        </Box>
    );
};

UsersOverview.propTypes = {

};

export default UsersOverview;