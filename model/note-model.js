// (function(exports) {
//
// function NoteModel (text) {
//   this.text = text;
// };
//
//   NoteModel.prototype.showText = function() {
//     return this.text;
//   };
//
// exports.NoteModel = NoteModel;
// })(this)
(function(exports) {

 function Note (some_text) {
   this.text = some_text
 };

 Note.prototype.display = function(){
   return this.text
 };

 exports.Note  = Note;
})(this);
