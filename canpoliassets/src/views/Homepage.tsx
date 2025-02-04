/*
 * This is the main homepage view, accessible to all users. The banner should be displayed
 * at the top of the page. In the middle should be a table displaying the data that was collected
 * for each mp, with search functionality. At the bottom of the page should be the footer.
 */

import Banner from "../components/Banner";
import DataTable from "../components/DataTable";
import Footer from "../components/Footer";
import InfoBanner from "../components/InfoBanner";

function Homepage() {
    
    return (
        <>
            <Banner />
            <DataTable />
            <InfoBanner />
            <Footer />
        </>
    );
}

export default Homepage;
