(function(exports){
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.getHTML = function() {
    return "<div>" + this.note.display() + "</div";
  };

exports.SingleNoteView = SingleNoteView;
})(this);
