import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukcjaZwierzakowComponent } from './produkcja-zwierzakow.component';

describe('ProdukcjaZwierzakowComponent', () => {
  let component: ProdukcjaZwierzakowComponent;
  let fixture: ComponentFixture<ProdukcjaZwierzakowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdukcjaZwierzakowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdukcjaZwierzakowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
