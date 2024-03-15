import { Component, effect } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-resident',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-resident.component.html',
  styleUrl: './add-resident.component.scss'
})
export class AddResidentComponent {
  addResidentForm!: FormGroup;
  constructor(private common: CommonService, private formbuilder: FormBuilder, public toas: ToastrService) {
    effect(() => {
      this.addResidentForm.patchValue(this.common.editRes());
    })
  }
  ngOnInit(): void {
    this.addResidentForm = this.formbuilder.group({
      flatNo: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      mobile: new FormControl('', [Validators.required]),
      rent: new FormControl('', [Validators.required]),
      advance: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
    })
  }
  resetResidentForm() {
    this.addResidentForm.reset();
  }

  addResidentBtn() {
    this.common
      .addResident(this.addResidentForm.value)
      .pipe(take(1))
      .subscribe(() => {
        this.addResidentForm.reset();
        this.toas.success('Add Resident Succesfully');
      });
  }
  
}
