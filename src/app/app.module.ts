import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
// import { InfoComponent } from './info/info.component';
// import { StudentsListComponent } from './students-list/students-list.component';
// import { CoursesListComponent } from './courses-list/courses-list.component';
 import { myRoutings } from './app-routing.module';
 import { StudentsService } from './students.service';
 import { HttpClientModule } from '@angular/common/http';
 import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

@NgModule({
  declarations: [
    AppComponent,
    myRoutings
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    jqxGridModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
