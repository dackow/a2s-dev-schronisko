import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KojecComponent } from './kojec.component';

describe('KojecComponent', () => {
  let component: KojecComponent;
  let fixture: ComponentFixture<KojecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KojecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KojecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
