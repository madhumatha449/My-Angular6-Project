import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
 
  constructor() { }
  courseList:any = [
  { course: 'Angular', fees: '35,000',qualification:'Any Degree',duration:"2 Months" },
  { course: 'Dotnet', fees: '35,000',qualification :'Any Degree',duration:"6 Months" },
  { course: 'C++', fees: '30,000',qualification :'Any Degree',duration:"6 Months" },
  { course: 'Python', fees: '20,000',qualification :'Any Degree',duration:"4 Months" },
  { course: 'HTML', fees: '20,000',qualification :'Any Degree',duration:"5 Months" },
  { course: 'CSS', fees: '20,000',qualification :'Any Degree',duration:"2 Months" },
  { course: 'Javascript', fees: '25,000',qualification :'Any Degree',duration:"2 Months" },
  { course: 'Sql', fees: '15,000',qualification :'Any Degree',duration:"2 Months" },
  { course: 'Oracle', fees: '25,000',qualification :'Any Degree',duration:"2 Months" },
  { course: 'Selenium', fees: '20,000',qualification :'Any Degree',duration:"2 Months" },
  { course: 'Java', fees: '35,000',qualification :'Any Degree',duration:"2 Months" }
  ];

  
  ngOnInit() {
  }


}
