import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component'
import { AuthModule } from './auth/auth.module'
import { AppMaterialModule } from './app-material/app-material.module'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { HomePageComponent } from './pages/home-page/home-page.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    RouterModule.forRoot([
      { path: 'home', component: HomePageComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
