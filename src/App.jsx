 
import "./App.css";
import { Header } from "./components/header";
import { Page } from "./components/page";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Nav } from "./components/nav";
import { AboutUsPage } from "./pages/about-us";
import { ManifestPage } from "./pages/manifest";
import { MainPage } from "./pages/main";

function Main() {
 
  return (
    <div className="flex flex-col gap-3 ">
      <Header />
      <div className="flex flex-col md:flex-row justify-between ">
        <Nav />
        <main className="flex h-full w-full">
          <Outlet />
        </main>
      </div>
      <footer>Footer</footer>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route
            index
            element={
              <Page>
                <MainPage />
              </Page>
            }
          />
        </Route>
        <Route path="/about-us" element={<Main />}>
          <Route
            index
            element={
              <Page>
                <AboutUsPage />
              </Page>
            }
          />
        </Route>
        <Route path="/manifest" element={<Main />}>
          <Route
            index
            element={
              <Page>
                <ManifestPage />
              </Page>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
