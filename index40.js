// creating a function which conatain an object make_album
function make_Album(artist_Name,album_Title) {
    this.artist_Name = artist_Name;
    this.album_Title = album_Title;
}
// returning the function values to a variable
const album_Title1 =new make_Album("Rehan","Javascript");
const album_Title2 =new make_Album("Farhan","Programing");
const album_Title3 =new make_Album("Asif","Typescript");
// calling the function
console.log(album_Title1);
console.log(album_Title2);
console.log(album_Title3);