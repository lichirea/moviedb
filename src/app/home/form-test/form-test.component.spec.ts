import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormTestComponent } from './form-test.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('FormTestComponent', () => {
  let component: FormTestComponent;
  let fixture: ComponentFixture<FormTestComponent>;
  let formElement: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTestComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    formElement = fixture.debugElement.nativeElement.querySelector('#movieForm');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 5 inputs, 1 textarea and 1 select', () => {
    const inputElements = formElement.querySelectorAll('input');
    const textareaElements = formElement.querySelectorAll('textarea');
    const selectElements = formElement.querySelectorAll('select');
    expect(inputElements.length).toEqual(5);
    expect(textareaElements.length).toEqual(1);
    expect(selectElements.length).toEqual(1);
  });

  it('should have correct default values', () => {
    const movieFormGroup = component.movieForm;
    const movieFormValue = {
      original_title: '',
      title: '',
      release_date: '',
      adult: 'false',
      overview: '',
      vote_average: 0,
      vote_count: 0,
    };
    expect(movieFormGroup.value).toEqual(movieFormValue);
  });

  it('should update title after input', () => {
    const movie
  });
});
