import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployyComponent } from './edit-employy.component';

describe('EditEmployyComponent', () => {
  let component: EditEmployyComponent;
  let fixture: ComponentFixture<EditEmployyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
