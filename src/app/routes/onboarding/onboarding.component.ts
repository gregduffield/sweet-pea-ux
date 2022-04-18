import { FormProvider } from 'src/app/routes/onboarding/form-provider';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-onboarding',
  template: '<router-outlet></router-outlet>',

  providers: [{ provide: FormProvider, useExisting: OnboardingComponent }],
})
export class OnboardingComponent extends FormProvider implements OnInit {
  onboardingForm = new FormGroup({
    who: new FormGroup({
      self: new FormControl('', Validators.required),
      other: new FormControl('', Validators.required),
    }),
    typeOfCare: new FormGroup({}),
    additionalNeeds: new FormGroup({}),
    times: new FormGroup({}),
    days: new FormGroup({}),
    startDate: new FormGroup({}),
    otherActivities: new FormGroup({}),
    personDetails: new FormGroup({}),
  });
  constructor() {
    super();
  }

  getForm(): FormGroup {
    return this.onboardingForm;
  }

  ngOnInit(): void {}
}
