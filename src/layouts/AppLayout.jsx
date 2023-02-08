import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
// import { StorageProvider } from "../context/StorageContext";
import { TrendingProvider } from "../context/TrendingContext";
import Navbar from "../components/Navbar";
import { Container } from "@chakra-ui/react";
import Footer from "../components/Footer";

const AppLayout = () => (
  <>
    <CryptoProvider>
      <TrendingProvider>
        {/* <StorageProvider> */}
        <Container maxW="container.xl">
          <main>
            {/* <Navigation /> */}
            <div>
              <Navbar />
            </div>
            <div>
              <Outlet />
            </div>
            <div>
              <Footer />
            </div>
          </main>
        </Container>
        {/* </StorageProvider> */}
      </TrendingProvider>
    </CryptoProvider>
  </>
);

export default AppLayout;
