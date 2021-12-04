import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie } from 'src/app/models/movie.model';
import { MoviesListComponent } from './movies-list.component';

describe('MoviesListComponent', () => {
  let sut: ComponentFixture<MoviesListComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MoviesListComponent],
    }).compileComponents();

    sut = TestBed.createComponent(MoviesListComponent);
    element = sut.nativeElement;
  });

  it('Should list movies in a table', async () => {
    // arrange
    await setMovies([
      { id: 1, title: 'Title', year: 2021, imdbTitleId: 'ImdbTitleId' },
    ]);

    // assert
    expect(element.querySelectorAll('tbody tr').length).toEqual(1);
    expect(element.querySelectorAll('div .alert')?.length).toEqual(0);
  });

  it('Should show alert when movies are undefined', async () => {
    // arrange
    await setMovies(undefined);
    
    // assert
    expect(element.querySelector('div .alert')!.innerHTML!.trim()).toEqual('Oops! We can\'t find any movies!');
  });

  async function setMovies(movies: Movie[] | undefined) {
    sut.componentInstance.movies = movies;
    sut.detectChanges();
    await sut.whenStable();
  }
});
