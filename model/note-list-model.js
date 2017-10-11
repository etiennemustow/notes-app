
(function(exports) {

 function NoteList () {
   this.list = []
 };

 NoteList.prototype.display = function(){
   return this.list
 };

NoteList.prototype.store = function(text, Constructor = Note){
  var note = new Constructor(text)
  this.list.push(note)
}

exports.NoteList = NoteList;
})(this);
