import { useHistory } from 'react-router-dom';

import { ROUTES } from '../../../routes/routeNames';

const HomePage = () => {
    const history = useHistory();

    return (
        <div>
            <button onClick={() => history.push(ROUTES.REPOSITORIES)}>Repositories</button>
        </div>
    );
};

export default HomePage;