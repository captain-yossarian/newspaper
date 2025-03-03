import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />
      <main className="flex h-full">
        <div className="flex-1 border-1">Menu</div>
        <div className="flex-2 border-1">
          <h3>Title</h3>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lacinia sem ipsum, et rutrum lacus sagittis nec. Mauris in ligula
              augue. Sed eget felis id nunc mollis accumsan at at ipsum.
              Praesent semper ultrices quam, sed iaculis magna varius gravida.
              Morbi convallis odio eu ullamcorper semper. Aliquam vel tellus
              eget nisi blandit rhoncus. Morbi feugiat nisi sit amet elit
              auctor, at fringilla ante elementum. Duis efficitur, tortor nec
              laoreet ornare, nisl magna volutpat libero, et fringilla lacus
              felis vel felis.
            </p>
            <p>
              Maecenas aliquet tortor vel nulla scelerisque commodo. Ut bibendum
              efficitur tellus. Aenean vel sapien vitae nisl iaculis semper at
              non massa. Vivamus sed orci sodales, tincidunt felis vel, vehicula
              enim. Nulla sed quam tristique, porttitor felis vel, eleifend
              arcu. Donec lectus nisl, tempor nec odio eu, rhoncus rutrum purus.
              Ut rutrum dui vitae arcu lobortis, ac lacinia eros bibendum.
            </p>

            <p>
              Quisque id purus condimentum, aliquet dolor nec, egestas nulla.
              Nam rhoncus ex dapibus auctor volutpat. Donec ullamcorper risus ac
              magna dignissim sodales. Quisque commodo pretium vehicula. Donec
              ipsum augue, sagittis ut metus sed, vestibulum sagittis ante. In
              et ornare erat, ut pellentesque tortor. Nunc vel lacus id metus
              mollis ultricies vel sed tortor. Praesent id dolor eu justo
              bibendum molestie sit amet non ante. Curabitur porttitor orci id
              nulla commodo, eu elementum felis sagittis. Duis vitae aliquam
              leo, sit amet pharetra odio. Donec varius quis urna nec congue.
              Aenean maximus fringilla sapien, id convallis odio tincidunt
              aliquam. Nullam vitae finibus dui. Nam vel posuere dolor.
            </p>
          </div>
        </div>
        <div className="flex-1 border-1">Aside</div>
      </main>
      <footer className="border-1">Footer</footer>
    </div>
  );
}

export default App;
