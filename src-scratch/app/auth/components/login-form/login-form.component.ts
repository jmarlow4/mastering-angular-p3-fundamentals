import { Component } from '@angular/core'

@Component({
  selector: 'ma-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  username: string

  onSubmit(val: string): void {
    console.log('onSubmit val', val)
  }

}
