import { FormControl, FormGroup } from '@angular/forms';
import { FormProvider } from 'src/app/routes/onboarding/form-provider';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.scss'],
})
export class StepThreeComponent implements OnInit {
  form: FormGroup;
  options = [
    'Washing and personal hygiene',
    'Getting dressed in the morning and undressed at night',
    'Meal planning and preparation',
    'Help with mobility and daily tasks',
  ];
  constructor(private formProvider: FormProvider) {
    this.form = <FormGroup>formProvider.getForm().get('typeOfCare');
    this.options.forEach((option: any) => {
      this.form.addControl(option, new FormControl(false));
    });
  }

  ngOnInit(): void {}
}
