import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormProvider } from 'src/app/routes/onboarding/form-provider';

@Component({
  selector: 'app-step-nine',
  templateUrl: './step-nine.component.html',
  styleUrls: ['./step-nine.component.scss'],
})
export class StepNineComponent implements OnInit {
  form: FormGroup;
  options = ['Immediately', 'Calendar'];
  constructor(private formProvider: FormProvider) {
    this.form = <FormGroup>formProvider.getForm().get('personDetails');
    this.form.addControl('age', new FormControl('', Validators.required));
    this.form.addControl('postcode', new FormControl('', Validators.required));
  }
  ngOnInit(): void {}
}
