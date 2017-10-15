(function(exports){

 function NoteList () {
   this.list = []
 };



 NoteList.prototype.display = function(){
   return this.list
 };

NoteList.prototype.store = function(text, Constructor = Note){
  var construct = new Constructor(text)
  this.list.push(construct)
}

NoteList.prototype.findByID = function(i) {
  return this.list[i].display()
}





exports.NoteList = NoteList;
})(this)
