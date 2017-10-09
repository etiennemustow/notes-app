
(function(exports) {
 function testNoteListStoresNotes() {
   var list = new NoteList();
   list.store("text")

   var entry = list.display()

   var firstEntry = entry[0]

   if (firstEntry.display() !== "text") {
     throw new Error("Not storing notes");
   }
 };

 testNoteListStoresNotes();
})(this);
