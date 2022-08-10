import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
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

  //should have set fakeAsync for .whenStable to work.....
  it('should update title after input', fakeAsync(() => {
    const movieFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#movieForm').querySelectorAll('input')[0];
    movieFormUserElement.value = 'Power of The Dog';
    movieFormUserElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const titleValueFromGroup = component.movieForm.get('title');
      expect(movieFormUserElement.value).toEqual(titleValueFromGroup?.value as string);
      expect(titleValueFromGroup?.errors).toBeNull();
    })
    }));

  it('should update original_title after input', fakeAsync(() => {
    const movieFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#movieForm').querySelectorAll('input')[1];
    movieFormUserElement.value = 'Morometii';
    movieFormUserElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const og_titleValueFromGroup = component.movieForm.get('original_title');
      expect(movieFormUserElement.value).toEqual(og_titleValueFromGroup?.value as string);
      expect(og_titleValueFromGroup?.errors).toBeNull();
    })
  }));

  it('should update release date after input', fakeAsync(() => {
    const movieFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#movieForm').querySelectorAll('input')[2];
    movieFormUserElement.value = '2005-11-21';
    movieFormUserElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const release_dateValueFromGroup = component.movieForm.get('release_date');
      expect(movieFormUserElement.value).toEqual(release_dateValueFromGroup?.value as string);
      expect(release_dateValueFromGroup?.errors).toBeNull();
    })
  }));

  it('should update vote average after input', fakeAsync(() => {
    const movieFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#movieForm').querySelectorAll('input')[3];
    console.log(movieFormUserElement);
    movieFormUserElement.value = '5';
    movieFormUserElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const vote_averageValueFromGroup = component.movieForm.get('vote_average');
      expect(movieFormUserElement.value).toEqual(String(vote_averageValueFromGroup?.value));
      expect(vote_averageValueFromGroup?.errors).toBeNull();
    })
  }));

  it('should update vote count after input', fakeAsync(() => {
    const movieFormUserElement: HTMLInputElement = fixture.debugElement.nativeElement
      .querySelector('#movieForm').querySelectorAll('input')[4];
    movieFormUserElement.value = '1000';
    movieFormUserElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const vote_countValueFromGroup = component.movieForm.get('vote_count');
      expect(movieFormUserElement.value).toEqual(String(vote_countValueFromGroup?.value));
      expect(vote_countValueFromGroup?.errors).toBeNull();
    })
  }));

  it('should update adult after input', fakeAsync(() => {
    const movieFormUserElement: HTMLSelectElement = fixture.debugElement.nativeElement
      .querySelector('#movieForm').querySelectorAll('select')[0];
    console.log(movieFormUserElement);
    movieFormUserElement.value = movieFormUserElement.options[0].value;
    movieFormUserElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const adultValueFromGroup = component.movieForm.get('adult');
      expect(movieFormUserElement.value).toEqual(adultValueFromGroup?.value as string);
      expect(adultValueFromGroup?.errors).toBeNull();
    })
  }));

  it('should update overview after input', fakeAsync(() => {
    const movieFormUserElement: HTMLSelectElement = fixture.debugElement.nativeElement
      .querySelector('#movieForm').querySelectorAll('textarea')[0];
    movieFormUserElement.value = 'Cool description';
    movieFormUserElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const overviewValueFromGroup = component.movieForm.get('overview');
      expect(overviewValueFromGroup?.value).toEqual(overviewValueFromGroup?.value as string);
      expect(overviewValueFromGroup?.errors).toBeNull();
    })
  }));
});



