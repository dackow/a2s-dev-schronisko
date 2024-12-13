import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoczekalniaComponent } from './poczekalnia.component';

describe('PoczekalniaComponent', () => {
  let component: PoczekalniaComponent;
  let fixture: ComponentFixture<PoczekalniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoczekalniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoczekalniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
