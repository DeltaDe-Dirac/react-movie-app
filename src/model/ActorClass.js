export default class Actor {
  constructor(fname, lname, born, imgsrc) {
    this.fname = fname;
    this.lname = lname;
    this.born = born;
    this.imgsrc = imgsrc;
  }

  get age() {
    return this.calcAge();
  }

  calcAge() {
    const re = new RegExp(/(?:^Born):\s([a-zA-Z]+)\s([0-9]{1,2}),\s([0-9]{4,4})(?:.*)/, "i");
    let matchGroups = [];
    let res = 0;

    if (re.test(this.born)) {
      matchGroups = this.born.match(re);
    }

    if (matchGroups && matchGroups.length > 3) {
      res =
        new Date(Date.now() - Date.parse(`${matchGroups[1]} ${matchGroups[2]} ${matchGroups[3]}`)).getFullYear() - 1970;
    }

    return res;
  }
}
