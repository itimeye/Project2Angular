import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BContainerComponent } from './b-container.component';

describe('BContainerComponent', () => {
  let component: BContainerComponent;
  let fixture: ComponentFixture<BContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
