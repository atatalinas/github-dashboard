import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import RepositoryPage from '../components/RepositoryPage/RepositoryPage';
import { GET_REPOSITORY_INFO_REQUEST } from '../actions';


const RepositoryPageContainer = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const { repositoryName, starsUrl, commitsUrl, avatar, userLogin, linkToGithub, languagesUrl, decription, isLoading, errors } =
        useSelector(state => state.repositoryPage);

    useEffect(() => {
        dispatch(GET_REPOSITORY_INFO_REQUEST(id))
    }, [dispatch]);

    return (
        <RepositoryPage
            repositoryName={repositoryName}
            starsUrl={starsUrl}
            commitsUrl={commitsUrl}
            avatar={avatar}
            userLogin={userLogin}
            linkToGithub={linkToGithub}
            languagesUrl={languagesUrl}
            decription={decription}
            isLoading={isLoading}
            errors={errors}
        />
    );
};

export default RepositoryPageContainer;