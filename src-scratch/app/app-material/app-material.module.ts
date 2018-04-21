import { NgModule } from '@angular/core'
import { MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule } from '@angular/material'

const matModules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule
]

@NgModule({
  imports: matModules,
  exports: matModules
})
export class AppMaterialModule { }
