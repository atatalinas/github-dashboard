import PropTypes from 'prop-types';
import { Box, TextField } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import UserCard from '../UserCard/UserCard';
import { PAGE } from '../../../../constants/pageConstants';

const { DEFAULT_PAGE_ID, ITEMS_PER_PAGE } = PAGE;

const UsersOverview = ({ users, isLoading, errors, handleGoToUser, handleSearchInputChange, handlePageChange, currentPageId,
    searchInputValue, getUserSubarray }) => {
    return (
        <Box>
            <Box style={{ marginBottom: 25 }} >
                <TextField
                    id="standard-basic"
                    value={searchInputValue}
                    name='searchValue'
                    label="user name"
                    onChange={handleSearchInputChange}
                />
            </Box>

            {searchInputValue.trim() === '' ? getUserSubarray.map((user) => {
                return (
                    <Box style={{ marginBottom: 25 }}>
                        <UserCard
                            name={user.login}
                            avatar={user.avatar_url}
                            handleGoToDetails={() => handleGoToUser(user.login)}
                        />
                    </Box>
                )
            }) : users.map((user) => {
                return (
                    <Box style={{ marginBottom: 25 }}>
                        <UserCard
                            name={user.login}
                            avatar={user.avatar_url}
                            handleGoToDetails={() => handleGoToUser(user.login)}
                        />
                    </Box>
                )
            })}

            <Pagination
                count={ITEMS_PER_PAGE}
                color="primary"
                defaultPage={DEFAULT_PAGE_ID}
                onChange={handlePageChange}
                page={currentPageId}
            />
        </Box>
    );
};

UsersOverview.propTypes = {

};

export default UsersOverview;