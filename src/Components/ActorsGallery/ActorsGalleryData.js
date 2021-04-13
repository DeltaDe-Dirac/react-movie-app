import ActorClass from "../ActorCard/ActorClass";

const getActors = () => actorsData.map((actor) => new ActorClass(actor.fname, actor.lname, actor.born, actor.imgsrc));

const actorsData = [
  {
    fname: "Gal",
    lname: "Gadot",
    imgsrc: "/img/actors/GalGadot.jpg",
    born: "Born: April 30, 1985 in Rosh Ha'ayin, Israel",
  },
  {
    fname: "Gal",
    lname: "Gadot",
    imgsrc: "/img/actors/GalGadot.jpg",
    born: "Born: July 14, 1981 in Rosh Ha'ayin, Israel",
  },
  {
    fname: "Ben",
    lname: "Affleck",
    imgsrc: "/img/actors/BenAffleck.jpg",
    born: "Born: August 15, 1972 in Berkeley, California, USA",
  },
  {
    fname: "Jennifer",
    lname: "Connelly",
    imgsrc: "/img/actors/JenniferConnelly.jpg",
    born: "Born: December 12, 1970 in Catskill Mountains, New York, USA",
  },
  {
    fname: "Keanu",
    lname: "Reeves",
    imgsrc: "/img/actors/KeanuReeves.jpg",
    born: "Born: September 2, 1964 in Beirut, Lebanon",
  },
  {
    fname: "Keanu",
    lname: "ZReeves",
    imgsrc: "/img/actors/KeanuReeves.jpg",
    born: "Born: September 2, 1965 in Beirut, Lebanon",
  },
  {
    fname: "Christina",
    lname: "Hendricks",
    imgsrc: "/img/actors/ChristinaHendricks.jpg",
    born: "Born: May 3, 1975 in Knoxville, Tennessee, USA",
  },
  {
    fname: "Tom",
    lname: "Hanks",
    imgsrc: "/img/actors/TomHanks.jpg",
    born: "Born: July 9, 1956 in Concord, California, USA",
  },
  {
    fname: "Jonny",
    lname: "Depp",
    imgsrc: "/img/actors/JohnnyDepp.jpg",
    born: "Born: June 9, 1963 in Owensboro, Kentucky, USA",
  },
  {
    fname: "Anthony",
    lname: "Mackie",
    imgsrc: "/img/actors/AnthonyMackie.jpg",
    born: "Born: September 23, 1978 in New Orleans, Louisiana, USA",
  },
  {
    fname: "Wallis",
    lname: "Day",
    imgsrc: "/img/actors/WallisDay.jpg",
    born: "Born: September 20, 1994 in London",
  },
];

export { getActors };
