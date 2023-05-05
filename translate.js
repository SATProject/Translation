// If you've installed from npm, do:
const translate = require('@iamtraction/google-translate');
// var Promise = require("bluebird");

// translate('You are amazing', { to: 'fa' }).then(res => {
//     console.log(res.text); // OUTPUT: You are amazing!
//   }).catch(err => {
//     console.error(err);
//   });


  const fs = require('fs');
  // First I want to read the file
  var text = fs.readFileSync('ep12.csv','utf8')
//   console.log (text)

  const myArray = text.split("\"");
//   console.log(myArray)

var logger = fs.createWriteStream('res1.csv', {
    flags: 'a' // 'a' means appending (old data will be preserved)
  }, "utf-8")
  

var newarr = []
// a = ""
// var ahaha = function mytestfunction(numb){
//   console.log("hii")
//   return translate(numb, { to: 'fa' }).text
// }

// console.log(myArray.reduce(ahaha, val => {
//   return val
// }, ahaha.resolve()).then(data => {
//   // everything done here
//   console.log(data)
// })
// );


for(var i =0; i < myArray.length ;i++) {
  myArray[i] = myArray[i].replace(/<[+-]?([0-9]*[.])?[0-9]+, [+-]?([0-9]*[.])?[0-9]+>/gi, '')
}

console.log(myArray)

var trans = []

function names(aaaa) {
  b = ""
  aaaa.map(function(item) {
  // console.log(item['text'])
  return item['text'];
}).map(function(item) {
  
  b += "\""
  b += item
  b += "\",\n"
})
// console.log("ff", b)
return b
};
Promise.all(myArray.map(item => translate(item, { to: 'fa' })))
  .then(translated => trans=translated).then(() => console.log(trans)).then(() => logger.write(names(trans)));

  // console.log(trans)

// var uu = Promise.mapSeries(myArray, ahaha).then(res => {
//   // everything done here
//   // console.log(res.text); // OUTPUT: You are amazing!
//   //   logger.write(b)
//     console.log(uu)
//     a += res
//     return a 
// }).then(function(result) {
//   // This will run after the last step is done
//   console.log("Done!")
//   console.log(result); // ["1.txt!", "2.txt!", "3.txt!", "4.txt!", "5.txt!"]
// });;

// console.log(uu)
// console.log("fdsadfa")
// console.log(myArray)

// for (var i =0; i<myArray.length ; i++) {
//   translate(myArray[i], { to: 'fa' }).then(res => {
//     console.log(res.text); // OUTPUT: You are amazing!
//     logger.write(b)
//     newarr.push(res.text)
//   }).catch(err => {
//     console.error(err);
//   });
   
// }

  var b = newarr.join("\"");
//   console.log(b)



//   logger.end()