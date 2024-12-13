import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdwiedzajacyComponent } from './odwiedzajacy.component';

describe('OdwiedzajacyComponent', () => {
  let component: OdwiedzajacyComponent;
  let fixture: ComponentFixture<OdwiedzajacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OdwiedzajacyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OdwiedzajacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
