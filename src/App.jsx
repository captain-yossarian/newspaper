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
      <div >
        <Header />
      </div>
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="hidden md:block">
          <Nav />
        </div>
        <main className="flex w-full justify-center h-[calc(100vh-230px)]">
          <Outlet />
        </main>
      </div>
      <footer class="bg-gray-800 text-white py-6 h-[150px]">
        <div class="container mx-auto text-center">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
          <div class="mt-4">
            <a href="#" class="text-gray-400 hover:text-white mx-3">
              Privacy Policy
            </a>
            <a href="#" class="text-gray-400 hover:text-white mx-3">
              Terms of Service
            </a>
            <a href="#" class="text-gray-400 hover:text-white mx-3">
              Contact Us
            </a>
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
                <MainPage />
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
            path="/manifest"
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
