(function(exports) {
   function testNoteControllerDisplaysHTML(){
      var NoteListStub = {
        store: function() {}
      };

      var testText = "<ul><li><div>Favourite drink: seltzer</div></li></ul>";

      var noteListViewDouble = {
        render: function() {return testText;}
            };


      var noteController = new NoteController(NoteListStub);
      noteController.view = noteListViewDouble;

      noteController.getHTML();
      if(document.getElementById("note").innerHTML !== testText) {
        throw new Error("not showing text")
      };

    }
  testNoteControllerDisplaysHTML()
})(this);
