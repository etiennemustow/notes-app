(function(exports) {
 function testNoteListViewDisplaysHTML() {
   var view = new NoteListView();
   var notelist = view.list;

   if (view.render() !== "There are no notes!" ) {
     throw new Error("There are no notes");
   }

   notelist.store("testing text of over 20 characters is here", Note);

   var entries = notelist.display();
   var firstEntry = entries[0];
   var firstNote = firstEntry.display();


   if (view.render() !== "<ul class=notelist><a href='#0'><li><div>testing text of ove</div></li></a></ul>" ) {
     throw new Error("Not showing text");
   }
 };

 testNoteListViewDisplaysHTML();
})(this);
