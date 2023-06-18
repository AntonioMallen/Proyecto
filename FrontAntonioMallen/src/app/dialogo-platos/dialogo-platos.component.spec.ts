import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoPlatosComponent } from './dialogo-platos.component';

describe('DialogoPlatosComponent', () => {
  let component: DialogoPlatosComponent;
  let fixture: ComponentFixture<DialogoPlatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoPlatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
