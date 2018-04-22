import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { AuthPageComponent } from './pages/auth-page/auth-page.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'login', component: AuthPageComponent }
    ]),
  ],
  declarations: [AuthPageComponent]
})
export class AuthModule { }
