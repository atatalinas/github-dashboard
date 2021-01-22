import PropTypes from 'prop-types';
import { Box, TextField, Typography, withStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import RepositoryCard from '../RepositoryCard/RepositoryCard';
import { PAGE } from '../../../../constants/pageConstants';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './styles';

const { DEFAULT_PAGE_ID, ITEMS_PER_PAGE } = PAGE;

const RepositoriesOverview = ({ repositories, isLoading, errors, handleGoToRepository, handleSearchInputChange, handlePageChange,
    currentPageId, searchInputValue, getRepositoriesSubarray, classes }) => {

    return (
        <Box className={classes.wrapper}>
            {isLoading
                ? <Box className={classes.circularProgressContainer}>
                    <CircularProgress className={classes.circularProgressItem} size='100px' />
                </Box>
                : <Box className={classes.dashboard}>
                    <Typography variant="h3" style={{ marginBottom: 10 }}>
                        Github-dashboard
                    </Typography>
                    <Box style={{ marginBottom: 25 }} >
                        <Box>
                            <TextField
                                fullWidth
                                autoFocus
                                margin='dense'
                                size='medium'
                                id="standard-basic"
                                value={searchInputValue}
                                name='searchValue'
                                label="repository name"
                                onChange={handleSearchInputChange}
                            />
                        </Box>
                    </Box>

                    {searchInputValue.trim() === '' ? getRepositoriesSubarray.map((repository) => {
                        return (
                            <Box style={{ marginBottom: 25 }}>
                                <RepositoryCard
                                    name={repository.name}
                                    ownerUrl={repository.owner.html_url}
                                    userLogin={repository.owner.login}
                                    handleGoToDetails={() => handleGoToRepository(repository.id)}
                                />
                            </Box>
                        )
                    }) : repositories.map((repository) => {
                        return (
                            <Box style={{ marginBottom: 25 }}>
                                <RepositoryCard
                                    name={repository.name}
                                    ownerUrl={repository.owner.html_url}
                                    userLogin={repository.owner.login}
                                    handleGoToDetails={() => handleGoToRepository(repository.id)}
                                />
                            </Box>
                        )
                    })}

                    <Pagination
                        count={searchInputValue.trim() === '' ? ITEMS_PER_PAGE : repositories.length < ITEMS_PER_PAGE ? currentPageId :
                            currentPageId === ITEMS_PER_PAGE ? currentPageId : currentPageId + 1}
                        color="primary"
                        defaultPage={DEFAULT_PAGE_ID}
                        onChange={handlePageChange}
                        page={currentPageId !== '' ? currentPageId : DEFAULT_PAGE_ID}
                        className={classes.pagination}
                    />
                </Box>
            }
        </Box>
    );
};

RepositoriesOverview.propTypes = {

};

export default withStyles(styles)(RepositoriesOverview);
