import {Outlet} from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <div>
            Default Layer        
            <Outlet />   
        </div>
    );
}

export default DefaultLayout;
