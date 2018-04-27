import { Component } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'ma-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  username: string

  onSubmit(val: NgForm): void {
    console.log('username', val.controls.username.value)
    console.log('password', val.controls.password.value)
  }

}
