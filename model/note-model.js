
(function(exports) {

 function Note (some_text) {
   this.text = some_text
 };

 Note.prototype.display = function(){
   return this.text
 };

 exports.Note  = Note;
})(this);
