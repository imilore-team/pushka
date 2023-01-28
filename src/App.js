import './App.module.scss';
import Grid2 from "@mui/material/Unstable_Grid2";
import Header from "./components/header/Header";
import Drawer from "./components/drawer/Drawer";
import {Route, Routes} from "react-router-dom";
import {Box} from "@mui/material";
import Dashboard from "./pages/dashboard/Dashboard";
import Prices from "./pages/prices/Prices";
import { routes } from "./helpers/routes";
import Account from "./pages/account/Account";
import {useIsMobile} from "./hooks/useIsMobile";
import CurrentModal from "./components/currentModal/CurrentModal";

function App() {
  const isMobile = useIsMobile();

  return (
    <Box sx={{ display: 'flex' }}>
      {!isMobile && <Drawer/>}
      <CurrentModal />
      <Box
        component="main"
        sx={{ flexGrow: 1 }}
      >
        <Header />
        <Grid2 container p={2}>
          <Routes>
            <Route path={`${routes.dashboard}/:id`} element={<Dashboard />} />
            <Route path={routes.prices} element={<Prices />} />
            <Route path={routes.account} element={<Account />} />
          </Routes>
        </Grid2>
      </Box>
    </Box>
  );
}

export default App;
