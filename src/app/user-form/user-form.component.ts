import {Component, EventEmitter, inject, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserServiceService} from "../user-service.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from '@angular/router';
import {User} from "../user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit{
  @Output() onSubmitEvent = new EventEmitter();
  userService: UserServiceService = inject(UserServiceService);
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
      this.userForm = this.formBuilder.group({
          firstName: ['',[Validators.required]],
          lastName: ['',[Validators.required]],
          birthDate: [new Date(), [Validators.required]],
          email: ['',[Validators.required, Validators.email]],
          gender: ['male',[Validators.required]]
      })
  }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
        const user = this.userService.getUser(Number(id));
        if(user) {
          this.userForm.controls['birthDate'].setValue(user.birthDate || new Date());
          this.userForm.controls['email'].setValue(user.email || '');
          this.userForm.controls['gender'].setValue(user.gender || '');
          this.userForm.controls['firstName'].setValue(user.firstName || '');
          this.userForm.controls['lastName'].setValue(user.lastName || '');
        }
    }
  }

  onSubmit(e: Event): void {
    e.preventDefault();

      if (this.userForm.valid) {
          const id : number | null = this.route.snapshot.paramMap.get('id') ? Number(this.route.snapshot.paramMap.get('id')) : null;

          const user: User = {
              id: id || 0,
              firstName: this.userForm.value.firstName || null,
              lastName: this.userForm.value.lastName || null,
              birthDate: this.userForm.value.birthDate || null,
              email: this.userForm.value.email || null,
              gender: this.userForm.value.gender || null
          };

          if(id){
              this.userService.editUser(user);
          } else {
              this.userService.addUser(this.userForm.value);
          }
          this.userForm.reset();
          this.router.navigate(['/']);
      } else {
          this.validateFormControls(this.userForm);
      }
  }

    private validateFormControls(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(controlName => {
            const control = formGroup.get(controlName);
            if (control) {
              control.markAsTouched();
            }

            if (control instanceof FormGroup) {
                this.validateFormControls(control);
            }
        });
    }

  onCancel(e: Event): void {
    e.preventDefault();
    this.userForm.reset()
  }
}
