(function(exports){

function NoteController(notelist){
  this.notelist = notelist || new NoteList();
  // var note = this.notelist.store("Favourite drink: seltzer", Note);
  this.view = new NoteListView();
  this.view.list = this.notelist;
}

NoteController.prototype.getHTML = function(){
  var note = this.view.render();
  var element = document.getElementById("note");
  element.innerHTML = note;


  makeUrlChangeShowNoteForCurrentPage();

      function makeUrlChangeShowNoteForCurrentPage() {
        window.addEventListener("hashchange", showNoteForCurrentPage);
      };

      function showNoteForCurrentPage() {
        showNote(notecontroller.notelist.findByID(getNoteFromUrl(window.location)));
      };

      function getNoteFromUrl(location) {
        return location.hash.split("#")[1];
      };

      function showNote(note) {
        document
          .getElementById("note")
          .innerHTML = note;
      };
};

exports.NoteController = NoteController;
})(this);
