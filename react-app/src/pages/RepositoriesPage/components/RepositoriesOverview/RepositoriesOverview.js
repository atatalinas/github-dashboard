import PropTypes from 'prop-types';
import { Box, TextField } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';

import RepositoryCard from '../RepositoryCard/RepositoryCard';
import { PAGE } from '../../../../constants/pageConstants';

const { DEFAULT_PAGE_ID, ITEMS_PER_PAGE } = PAGE;

const RepositoriesOverview = ({ repositories, isLoading, errors, handleGoToRepository, handleSearchInputChange, handlePageChange,
    currentPageId, searchInputValue, getRepositoriesSubarray }) => {

    return (
        <Box>
            <Box style={{ marginBottom: 25 }} >
                <TextField
                    id="standard-basic"
                    value={searchInputValue}
                    name='searchValue'
                    label="repository name"
                    onChange={handleSearchInputChange}
                />
            </Box>

            {searchInputValue.trim() === '' ? getRepositoriesSubarray.map((repository) => {
                return (
                    <Box style={{ marginBottom: 25 }}>
                        <RepositoryCard
                            name={repository.name}
                            stars={repository.stargazers_url}
                            commits={repository.commits_url}
                            owner={repository.owner.url}
                            handleGoToDetails={() => handleGoToRepository(repository.id)}
                        />
                    </Box>
                )
            }) : repositories.map((repository) => {
                return (
                    <Box style={{ marginBottom: 25 }}>
                        <RepositoryCard
                            name={repository.name}
                            stars={repository.stargazers_url}
                            commits={repository.commits_url}
                            ownerUrl={repository.owner.url}
                            handleGoToDetails={() => handleGoToRepository(repository.id)}
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

RepositoriesOverview.propTypes = {

};

export default RepositoriesOverview;