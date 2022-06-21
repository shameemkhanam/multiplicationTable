var a = {
  fname : "shameem",
  lname : "khan"
};
// console.log(a);
// document.write(a.fname);

for(var key in a){
  document.write( key + " " + ":" + a[key]+ "<br>");
}