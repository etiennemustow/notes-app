(function(exports) {
 function testSingleNoteViewDisplaysHTML() {

   var noteDouble = {
     text: 'hi'
   }

   var view = new SingleNoteView(noteDouble);


   if (view.getHTML() !== "<div>" + "hi" + "</div>" ) {
     throw new Error("Note isn't showing");
   }
 };

 testSingleNoteViewDisplaysHTML();
})(this);
