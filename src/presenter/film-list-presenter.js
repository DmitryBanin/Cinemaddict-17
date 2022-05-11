import { render } from '../render.js';
import FilmsView from '../view/films-view.js';
import FilmsListView from '../view/films-list-view.js';
import FilmsListContainerView from '../view/films-list-container-view.js';
import FilmCardView from '../view/film-card-view.js';
import ButtonShowMoreView from '../view/button-show-more-view.js';
import PopupFilmPresenter from './popup-film-presenter.js';

export default class FilmListPresenter {
  filmsComponent = new FilmsView();
  filmsListComponent = new FilmsListView();
  filmsListContainerComponent = new FilmsListContainerView();
  popupFilmPresenter = new PopupFilmPresenter();

  initFilmList = (filmListContainer, filmCardsModel) => {
    this.filmListContainer = filmListContainer;
    this.filmCards = filmCardsModel;

    render(this.filmsComponent, this.filmListContainer);
    render(this.filmsListComponent, this.filmsComponent.getElement());
    render(this.filmsListContainerComponent, this.filmsListComponent.getElement());

    for (let i = 0; i < this.filmCards.length; i++) {
      render(new FilmCardView(this.filmCards[i]), this.filmsListContainerComponent.getElement());
    }

    this.popupFilmPresenter.showPopup(this.filmListContainer, this.filmCards[0]);

    render(new ButtonShowMoreView(), this.filmsListComponent.getElement());
  };
}