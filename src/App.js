import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ActorsGallery from "./pages/ActorsGallery/ActorsGallery";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faFilm } from "@fortawesome/free-solid-svg-icons";
// import { getActors } from "./pages/ActorsGallery/ActorsGalleryData";

library.add(fab, faCheckSquare, faCoffee, faFilm);

function App() {
  const rowSize = 3;
  const pathPre = process.env.PUBLIC_URL;

  return <ActorsGallery dataPath={pathPre.concat("/data/actors.json")} pathPre={pathPre} rowSize={rowSize} />;
}

export default App;
