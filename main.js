class Media{
constructor(title, isCheckedOut, ratings){
  this._title= title;
  this._isCheckedOut = false;
  this._ratings = [];
}
//getters
get title(){
  return this._title;
}
get isCheckedOut(){
  return this._isCheckedOut;
}
get ratings(){
  return this._ratings;
} 
//setter 
set isCheckedOut(isCheckedOutIn){
this._isCheckedOut = isCheckedOutIn
}

//methods
toggleCheckOutStatus() {
this._isCheckedOut = !this._isCheckedOut;
}
getAverageRating(){
  let sum = this.ratings.reduce((acc,val) =>   acc+val,0);
  let theRLength = this.ratings.length; 
  return 'The average rating is: '+sum/theRLength;
}
addRating(newRating){
  
  this.ratings.push(newRating);
}
};

class Book extends Media {
  constructor(author,title,pages, isCheckedOut, ratings){
    super (title,isCheckedOut,ratings);
    this._author = author;
    this._pages = pages;
}
//getters
get author(){
  return this._author;
}
get pages(){
  return this._pages;
}
};

class Movie extends Media {
constructor (director,title,runTime,movieCast)
{
    super (title);
    this._director = director;
    this._runTime = runTime;
    this._movieCast = movieCast;
    }
//getters
get director(){
  return this._director;
}
get runTime(){
  return this._runTime;
}
get movieCast(){
  return this.movieCast;
}
};
class CD extends Media {
constructor (singer,title,songTitles,ratings,isCheckedOut){
  super (title,ratings,isCheckedOut);
  this._singer = singer;
  this._songTitles = songTitles;
}

//getters
get singer(){
  return this._singer;
}
get songTitles(){
  return this._songTitles;}

//methods

shuffle (){
const song = this._songTitles;
const randomIndex = Math.floor(Math.random() * this.songTitles.length);
return song[randomIndex];
}

};

//first book
const historyOfEverything = new Book ('Bill Bryson','A Short History of Nearly Everything', 544);
//Calls 
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
historyOfEverything.getAverageRating();

console.log(historyOfEverything);
console.log(historyOfEverything.getAverageRating());
//first movie
const speed = new Movie ('Jan de Bont', 'Speed',116, ['Leonardo DiCaprio', 'Bradley Cooper',  'Mark Wahlberg', 'Christian Bale', 'Robert Downey Jr']);

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();
console.log(speed);
console.log(speed.getAverageRating());
//first CD
const bastille = new CD ('BASTILLE','Bad Blood',['Pompei','Laura Palmer','Oblivion','Flaws','Anchor']);

bastille.toggleCheckOutStatus();
bastille.addRating(3);
bastille.addRating(4);
bastille.addRating(5);
bastille.shuffle();
bastille.getAverageRating();
console.log(bastille);
console.log(bastille.getAverageRating());
console.log('Random song from '+ bastille.title +': '+ bastille.shuffle());

