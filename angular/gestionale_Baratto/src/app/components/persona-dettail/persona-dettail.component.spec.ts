import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaDettailComponent } from './persona-dettail.component';

describe('PersonaDettailComponent', () => {
  let component: PersonaDettailComponent;
  let fixture: ComponentFixture<PersonaDettailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaDettailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaDettailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
