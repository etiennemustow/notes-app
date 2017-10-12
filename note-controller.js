(function(exports){

function NoteController(notelist){
  this.notelist = notelist || new NoteList();
  var note = this.notelist.store("Favourite drink: seltzer", Note);
  this.view = new NoteListView();
  this.view.list = this.notelist;
}

NoteController.prototype.getHTML = function(){
  var rendered = this.view.render();
  var element = document.getElementById("note");
  element.innerHTML = rendered;
};

exports.NoteController = NoteController;
})(this);
