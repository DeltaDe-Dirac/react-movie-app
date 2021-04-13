import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ActorsGallery from "./Components/ActorsGallery/ActorsGallery";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faFilm } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faFilm);

function App() {
  return <ActorsGallery />;
}

export default App;
