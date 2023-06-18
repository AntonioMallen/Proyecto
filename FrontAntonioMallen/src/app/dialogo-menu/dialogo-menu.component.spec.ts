import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoMenuComponent } from './dialogo-menu.component';

describe('DialogoMenuComponent', () => {
  let component: DialogoMenuComponent;
  let fixture: ComponentFixture<DialogoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
