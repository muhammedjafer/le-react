import { Outlet } from "react-router-dom";

const GuestLayout = () => {
    return (
        <div>
            Guest layer
            <Outlet />
        </div>
    );
}

export default GuestLayout;
