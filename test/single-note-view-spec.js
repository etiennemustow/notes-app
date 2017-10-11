(function(exports) {
 function testSingleNoteViewDisplaysHTML() {
   var note = new Note("hello")
   var view = new SingleNoteView(note);


   if (view.getHTML() !== "<div>" + "hello" + "</div" ) {
     throw new Error("Note isn't showing");
   }
 };

 testSingleNoteViewDisplaysHTML();
})(this);
