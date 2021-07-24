import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

const appRoutes: Routes = [
  { path: 'info', component: InfoComponent},
  { path: 'students', component: StudentsListComponent},
  { path: 'courses', component: CoursesListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

export const myRoutings = [
  InfoComponent,
  StudentsListComponent,
  CoursesListComponent
];