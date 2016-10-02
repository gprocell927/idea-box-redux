function Ideas(options) {
  this.options = options || {};
  this.ideasList = [];
  this.id = this.options.id || Date.now();
  this.title = this.options.title;
  this.body = this.options.body;
  this.quality = this.options.quality || 'swill';
}

$('.save-button').on('click', function(event){
  event.preventDefault();
  var $titleInput = $('title-input').val();
  var $bodyInput = $('body-input').val();

  generateNewIdea($titleInput, $bodyInput);
});

function generateNewIdea(title, body){
  var idea = new Idea(title, body);
  ideasList.push(idea);
  renderIdeaToHTML(idea);
}

function renderIdeaToHTML(idea){
  var $ideaListSection = $('#idea-list');

  $ideaListSection.prepend(`<li id=${idea.id}><h3 contenteditable="true" class="idea-title">${idea.title}</h3><button class = "delete-idea"></button>
  <p contenteditable = "true" class="body-input">${idea.body}</p>
  <article class="vote"><button class="upvote"></button><article class="downvote"></article>
  <p class="quality-control">quality:${idea.quality}</p></section></li>`);
}
