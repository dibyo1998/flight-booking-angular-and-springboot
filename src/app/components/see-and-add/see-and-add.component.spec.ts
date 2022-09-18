import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAndAddComponent } from './see-and-add.component';

describe('SeeAndAddComponent', () => {
  let component: SeeAndAddComponent;
  let fixture: ComponentFixture<SeeAndAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeAndAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeAndAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
