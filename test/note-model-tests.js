// (function(exports) {
//  function testNoteModelDisplaysText() {
//    var note = new NoteModel("testing text");
//
//    if (note.showText() !== "testing text") {
//      throw new Error("Not showing text");
//    }
//  };
//
//  testNoteModelDisplaysText();
// })(this);
(function(exports) {
 function testNoteDisplaysText() {
   var note = new Note("testing text");

   if (note.display() !== "testing text") {
     throw new Error("Not showing text");
   }
 };

 testNoteDisplaysText();
})(this);
