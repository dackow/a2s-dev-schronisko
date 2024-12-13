import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZwierzakComponent } from './zwierzak.component';

describe('ZwierzakComponent', () => {
  let component: ZwierzakComponent;
  let fixture: ComponentFixture<ZwierzakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZwierzakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZwierzakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
