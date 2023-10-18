import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Container from "../components/Container/Container";
import Footer from "../pages/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </div>
    );
};

export default MainLayout;