import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ActorsGallery from "./pages/ActorsGallery/ActorsGallery";
import MoviesGallery from "./pages/MoviesGallery/MoviesGallery";
import HomePage from "./pages/HomePage/HomePage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faFilm } from "@fortawesome/free-solid-svg-icons";
import { HashRouter, Route, Switch } from "react-router-dom";

library.add(fab, faCheckSquare, faCoffee, faFilm);

function App() {
  const rowSize = 3;
  const pathPre = process.env.PUBLIC_URL;

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <HomePage pathPre={pathPre} />
        </Route>
        <Route exact path="/movies">
          <MoviesGallery />
        </Route>
        <Route exact path="/actors">
          <ActorsGallery dataPath={pathPre.concat("/data/actors.json")} pathPre={pathPre} rowSize={rowSize} />
        </Route>
        <Route path="/">
          <PageNotFound />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
