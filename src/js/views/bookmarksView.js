import View from './View.js';
import previewView from './previewView.js'

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `No bookmarked yet. Find a nice recipe and bookmarked it ;)`;
  _message;

  addHandlerRender(handler){
   window.addEventListener('load', handler) 
  }

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }


}

export default new BookmarksView();
