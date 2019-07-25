module.exports = function(string) {
   if(typeof string !== "string") throw new TypeError("Plesae enter a string value!");
   return string.replace(/\s/g,"");
};