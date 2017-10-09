
(function(exports) {
 function testNoteDisplaysText() {
   var note = new Note("testing text");

   if (note.display() !== "testing text") {
     throw new Error("Not showing text");
   }
 };

 testNoteDisplaysText();
})(this);
