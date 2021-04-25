export default class MovieModel {
  constructor(movie) {
    this.id = parseInt(movie["id"]);
    this.title = movie["title"];
    this.release_date = new Date(movie["release_date"]);
    this.overview = movie["overview"];
    this.original_language = movie["original_language"];
  }

  get lang() {
    return this.original_language.toUpperCase();
  }

  get year() {
    return this.release_date.getFullYear();
  }

  get imgsrc() {
    return "https://image.tmdb.org/t/p/w500".concat(this.path);
  }

  /**
   * @param {string} path
   */
  set poster_path(path) {
    this.path = path;
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
}
