/* archivo de pruebas unitarias se encarga de verificar si la página CharacterDetailPage se crea correctamente en Angular. */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterDetailPage } from './character-detail.page';

describe('CharacterDetailPage', () => {
  let component: CharacterDetailPage;
  let fixture: ComponentFixture<CharacterDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
