import "./App.css";
import { Header } from "./components/header";
import { Page } from "./components/page";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Nav } from "./components/nav";
import { AboutUsPage } from "./pages/about-us";
import { ManifestPage } from "./pages/manifest";
import { MainPage } from "./pages/main";
import { MapPage } from "./pages/map";
import { DonatesPage } from "./pages/donates";
import { JoinPage } from "./pages/join";

function Main() {
  return (
    <div className="flex flex-col gap-3 ">
      <div>
        <Header />
      </div>
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="hidden md:block">
          <Nav />
        </div>
        <main className="flex w-full justify-center h-[calc(100vh-210px)]">
          <Outlet />
        </main>
      </div>
      <footer class="bg-gray-800 text-white py-6 ">
        <div class="container mx-auto text-center">
          <div class="mt-4 flex-col md:flex-row justify-center">
            <div>
              <a
                href="http://t.me/narodnaya_vol_ya"
                class="text-gray-400 hover:text-white mx-3 flex items-center gap-2 justify-center "
              >
                <img src="./tg.svg" width="32px" /> Мы в соцсетях
              </a>
            </div>
          </div>
        </div>
      </footer>
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
                <AboutUsPage />
              </Page>
            }
          />
          <Route
            path="/about-us"
            element={
              <Page>
                <AboutUsPage />
              </Page>
            }
          />
          <Route
            path="/karta"
            element={
              <Page>
                <MapPage />
              </Page>
            }
          />
          <Route
            path="/donates"
            element={
              <Page>
                <DonatesPage />
              </Page>
            }
          />
          <Route
            path="/manifest-doc"
            element={
              <Page>
                <ManifestPage />
              </Page>
            }
          />
          <Route
            path="/join"
            element={
              <Page>
                <JoinPage />
              </Page>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
