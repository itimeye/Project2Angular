import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniRegisterComponent } from './mini-register.component';

describe('MiniRegisterComponent', () => {
  let component: MiniRegisterComponent;
  let fixture: ComponentFixture<MiniRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
