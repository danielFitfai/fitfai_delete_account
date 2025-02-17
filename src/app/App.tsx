import { CssBaseline } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./c-components/Layout/Layout";
import { NavBarButtons } from "./c-components/Layout/models/layoutProps.models";
import DeleteAccountInstructions from "./components/DeleteAccountInstructions/DeleteAccountInstructions";

function App() {
  const navBarInfo: NavBarButtons[] = [];
  return (
    <>
      <CssBaseline />
      <Container disableGutters sx={{ minWidth: "100%" }}>
        <Layout navBarButtons={navBarInfo} staticNavbar={true}>
          <Routes>
            <Route path="/" element={<DeleteAccountInstructions />} />
            <Route path="*" element={<DeleteAccountInstructions />} />
          </Routes>
        </Layout>
      </Container>
    </>
  );
}

export default App;
