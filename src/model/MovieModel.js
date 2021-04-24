export default class MovieModel {
  constructor(movie) {
    this.id = movie["id"];
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
}
