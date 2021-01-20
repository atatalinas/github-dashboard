import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import UserPage from '../components/UserPage/UserPage';
import { GET_USER_INFO_REQUEST } from '../actions';


const UserPageContainer = () => {
    const { name } = useParams();

    const dispatch = useDispatch();

    const { avatar, linkToRepo, userName, isLoading, errors } = useSelector(state => state.userPage);

    useEffect(() => {
        dispatch(GET_USER_INFO_REQUEST(name))
    }, [dispatch]);

    return (
        <UserPage avatar={avatar} linkToRepo={linkToRepo} userName={userName} isLoading={isLoading} />
    );
};

export default UserPageContainer;