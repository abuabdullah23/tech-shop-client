import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import OurBrands from "../OurBrands/OurBrands";
import PopularProducts from "../PopularProducts/PopularProducts";

const Home = () => {
    return (
        <div>
            <Banner />
            <OurBrands />
            <PopularProducts />
            <ContactUs />
        </div>
    );
};

export default Home;