import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-status-form',
  standalone: true,
  imports: [MatStepperModule],
  templateUrl: './status-form.component.html',
  styleUrl: './status-form.component.scss',
})
export class StatusFormComponent {
  private fb: FormBuilder = inject(FormBuilder);
  public translate: TranslateService = inject(TranslateService);
  public statusForm: FormGroup;
  public painFormGroup: FormGroup;

  constructor() {
    this.painFormGroup = this.fb.group({
      pain: ['', Validators.required],
    });
    this.statusForm = this.fb.group({
      energy: ['', Validators.required],
      stress: ['', Validators.required],
      sleep: ['', Validators.required],
      availability: ['', Validators.required],
    });
  }

  get painControl() {
    return this.statusForm.get('pain') as FormControl;
  }
}
