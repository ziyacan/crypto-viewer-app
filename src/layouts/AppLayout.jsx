import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import { CryptoProvider } from "../context/CryptoContext";
// import { StorageProvider } from "../context/StorageContext";
import { TrendingProvider } from "../context/TrendingContext";

const AppLayout = () => (
  <>
    <CryptoProvider>
      <TrendingProvider>
        {/* <StorageProvider> */}
        <main>
          <div className="justify-center flex">
            <Navigation />
          </div>
          <div className="justify-center flex">
            <Outlet />
          </div>
        </main>
        {/* </StorageProvider> */}
      </TrendingProvider>
    </CryptoProvider>
  </>
);

export default AppLayout;
