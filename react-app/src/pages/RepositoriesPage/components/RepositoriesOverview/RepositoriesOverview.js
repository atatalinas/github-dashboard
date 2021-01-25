import PropTypes from 'prop-types';
import { Box, TextField, Typography, withStyles, Button } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import RepositoryCard from '../RepositoryCard/RepositoryCard';
import { PAGE } from '../../../../constants/pageConstants';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './styles';

const { DEFAULT_PAGE_ID, ITEMS_PER_PAGE } = PAGE;

const RepositoriesOverview = ({ repositories, isLoading, errors, handleGoToRepository, handleSearchInputChange, handlePageChange,
    handleClearInput, currentPageId, searchInputValue, getRepositoriesSubarray, classes }) => {

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.dashboard}>
                <Typography variant="h3" className={classes.typographyStyle}>
                    Github-dashboard
                    </Typography>
                <Box className={classes.boxStyle}>
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
                {isLoading
                    ? <Box className={classes.circularProgressContainer}>
                        <CircularProgress className={classes.circularProgressItem} size='100px' />
                    </Box>
                    : <>
                        {searchInputValue.trim() === '' ? getRepositoriesSubarray.map((repository) => {
                            return (
                                <Box className={classes.boxStyle}>
                                    <RepositoryCard
                                        name={repository.name}
                                        ownerUrl={repository.owner.html_url}
                                        userLogin={repository.owner.login}
                                        handleGoToDetails={() => handleGoToRepository(repository.id)}
                                    />
                                </Box>
                            )
                        }) : repositories.length !== 0
                                ? repositories.map((repository) => {
                                    return (
                                        <Box className={classes.boxStyle}>
                                            <RepositoryCard
                                                name={repository.name}
                                                ownerUrl={repository.owner.html_url}
                                                userLogin={repository.owner.login}
                                                handleGoToDetails={() => handleGoToRepository(repository.id)}
                                            />
                                        </Box>
                                    )
                                })
                                : <Box className={classes.notFoundWrapper}>
                                    <Box className={classes.notFoundItem}>
                                        <Box>
                                            <Typography variant='h4' component='h5' className={classes.typographyStyle}>
                                                Oops! <br />
                                            </Typography>
                                            <Typography variant='h5' className={classes.typographyStyle}>
                                                This repo can’t be found <br />
                                                Please, try again
                                            </Typography>
                                        </Box>
                                        <Button className={classes.clearButton} variant="text" size="large" color="primary" onClick={handleClearInput}  >
                                            TRY AGAIN
                                        </Button>
                                    </Box>
                                </Box>
                        }
                        {repositories.length === 0
                            ? ''
                            : <Pagination
                                count={searchInputValue.trim() === '' ? ITEMS_PER_PAGE : repositories.length < ITEMS_PER_PAGE
                                    ? currentPageId : currentPageId === ITEMS_PER_PAGE ? currentPageId : currentPageId + 1}
                                color="primary"
                                defaultPage={DEFAULT_PAGE_ID}
                                onChange={handlePageChange}
                                page={currentPageId !== '' ? currentPageId : DEFAULT_PAGE_ID}
                                className={classes.pagination}
                            />
                        }
                    </>
                }
            </Box>
        </Box >
    );
};

RepositoriesOverview.propTypes = {

};

export default withStyles(styles)(RepositoriesOverview);