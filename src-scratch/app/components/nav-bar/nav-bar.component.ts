import { Component } from '@angular/core'

@Component({
  selector: 'ma-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  navLinks = [
    { page: 'Home', linkPath: 'home' },
    { page: 'Login', linkPath: 'login' }
  ]

  onLogout() {
    console.log('logging out!')
  }
}
