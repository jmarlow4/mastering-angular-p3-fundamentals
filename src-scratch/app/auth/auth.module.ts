import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AuthPageComponent } from './pages/auth-page/auth-page.component'
import { LoginFormComponent } from './components/login-form/login-form.component'
import { AppMaterialModule } from '../app-material/app-material.module'
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild([
      { path: 'login', component: AuthPageComponent }
    ]),
    FormsModule
  ],
  declarations: [AuthPageComponent, LoginFormComponent]
})
export class AuthModule { }
