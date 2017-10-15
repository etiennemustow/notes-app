(function(exports){

 function NoteListView(notelist) {
   this.list = notelist || new NoteList();
 }

 NoteListView.prototype.render = function(){
   var entries = this.list.display();
   var entriesCount = entries.length;


   if(entries.length === 0){
     return "There are no notes!";
   }

   if (entries.length > 0){
     var view = ["<ul class=notelist>"];
     for (i = 0; i < entriesCount; i++){
       var note = entries[i];
       var index = i;
       entries.forEach(function(note, index){
         view.push("<a href='#"+index+"'>"+"<li><div>"+note.display().substring(0, 19)+"</div></li></a>");
       });
     }
     view.push("</ul>");
     return view.join('');
   }
 };
 exports.NoteListView = NoteListView;
})(this);
