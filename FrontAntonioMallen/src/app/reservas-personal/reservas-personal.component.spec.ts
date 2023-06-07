import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasPersonalComponent } from './reservas-personal.component';

describe('ReservasPersonalComponent', () => {
  let component: ReservasPersonalComponent;
  let fixture: ComponentFixture<ReservasPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
