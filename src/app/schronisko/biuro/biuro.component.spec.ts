import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiuroComponent } from './biuro.component';

describe('BiuroComponent', () => {
  let component: BiuroComponent;
  let fixture: ComponentFixture<BiuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiuroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
