import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})


export class StudentsListComponent implements OnInit, AfterViewInit {
  @ViewChild('grid') grid: jqxGridComponent;

 public source:any;
 public columns:any;
  constructor(private _studentsService: StudentsService) {    
   }

   


  ngOnInit() {
    this.grid.showloadelement();
    this.columns = [
      {text: 'Id', datafield: 'id',width:50},
      {text: 'Title', datafield: 'title',width:450},
      {text: 'Completed', datafield: 'completed',width:100}
    ];
    this._studentsService.getData().subscribe(data =>{    
      this.source = new jqx.dataAdapter({
       localData: data
      });
      
     })  
    
    //this.studentsList = this._studentsService.getStudentsList();
  }

  ngAfterViewInit(){
   
  }
      
}
