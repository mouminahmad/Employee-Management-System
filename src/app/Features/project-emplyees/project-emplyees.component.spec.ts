import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEmplyeesComponent } from './project-emplyees.component';

describe('ProjectEmplyeesComponent', () => {
  let component: ProjectEmplyeesComponent;
  let fixture: ComponentFixture<ProjectEmplyeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectEmplyeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectEmplyeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
