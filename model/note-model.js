
(function(exports) {


 function Note (some_text) {
   this.text = some_text;
   this.id = id
   id++
 };

var id = 0

 Note.prototype.display = function(){
   return this.text
 };

 Note.prototype.getId = function(){
   return this.id;
 }


 exports.Note  = Note;
})(this);
