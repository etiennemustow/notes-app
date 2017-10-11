 (function(exports) {
  function testNoteControllerDisplaysHTML() {
    function NoteDouble(some_text) {
      this.text = some_text
    }

    NoteDouble.prototype = {
      display: function() {return this.text}
    };

   function NoteListDouble() {
     this.list = []
   };


   NoteListDouble.prototype = {
     display: function() {return this.list}
  }

  NoteListDouble.prototype.store = function(text, Constructor = NoteDouble){
    var note = new Constructor(text)
    this.list.push(note)
  }

  var notecontroller = new NoteController(new NoteListDouble())
  notecontroller.getHTML()

    if (document.getElementById("note").innerHTML !== "<ul><li><div>Favourite drink: seltzer</div></li></ul>" ) {
      throw new Error("Not showing text");
    }
  };

  testNoteControllerDisplaysHTML();
})(this);
