import { StepNineComponent } from './9.step-nine/step-nine.component';
import { StepEightComponent } from './8.step-eight/step-eight.component';
import { StepSevenComponent } from './7.step-seven/step-seven.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepOneComponent } from './1.step-one/step-one.component';
import { OnboardingComponent } from 'src/app/routes/onboarding/onboarding.component';
import { RouterModule, Routes } from '@angular/router';
import { StepComponent } from './step/step.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StepTwoComponent } from './2.step-two/step-two.component';
import { StepThreeComponent } from './3.step-three/step-three.component';
import { StepFourComponent } from './4.step-four/step-four.component';
import { StepFiveComponent } from './5.step-five/step-five.component';
import { StepSixComponent } from './6.step-six/step-six.component';

const routes: Routes = [
  {
    path: '',
    component: OnboardingComponent,
    children: [
      { path: '', component: StepOneComponent },
      { path: 'step-2', component: StepTwoComponent },
      { path: 'step-3', component: StepThreeComponent },
      { path: 'step-4', component: StepFourComponent },
      { path: 'step-5', component: StepFiveComponent },
      { path: 'step-6', component: StepSixComponent },
      { path: 'step-7', component: StepSevenComponent },
      { path: 'step-8', component: StepEightComponent },
      { path: 'step-9', component: StepNineComponent },
    ],
  },
];

@NgModule({
  declarations: [
    OnboardingComponent,
    StepComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepFiveComponent,
    StepSixComponent,
    StepSevenComponent,
    StepEightComponent,
    StepNineComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class OnboardingModule {}
