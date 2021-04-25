export default class MovieModel {
  constructor(movie) {
    this.id = parseInt(movie["id"]);
    this.title = movie["title"];
    this.release_date = new Date(movie["release_date"]);
    this.overview = movie["overview"];
    this.original_language = movie["original_language"];
    this.lang = this.original_language.toUpperCase();
    this.year = this.release_date.getFullYear();
    this.base_url = "https://image.tmdb.org/t/p/w500";
  }

  // get lang() {
  //   return this.original_language.toUpperCase();
  // }

  // get year() {
  //   return this.release_date.getFullYear();
  // }

  // get imgsrc() {
  //   return "https://image.tmdb.org/t/p/w500".concat(this.path);
  // }

  /**
   * @param {string} path
   */
  set poster_path(path) {
    this.imgsrc = this.base_url.concat(path);
  }

  /**
   * @param {number} duration
   */
  set runtime(duration) {
    this.duration = duration;
  }

  /**
   * @param {any} crew
   */
  set director_name(crew) {
    for (let crew_member of crew) {
      if (crew_member["job"] === "Director") {
        this.director = crew_member["name"];
        break;
      }
    }
  }

  /**
   * @param {any[]} cast
   */
  set casting(cast) {
    this.actors = cast
      .filter((actor) => actor.known_for_department === "Acting")
      .sort((actor1, actor2) => actor2.popularity - actor1.popularity)
      .map((actor) => actor.name);

    this.actors = this.actors.length > 5 ? this.actors.slice(0, 5) : this.actors;
  }
}
