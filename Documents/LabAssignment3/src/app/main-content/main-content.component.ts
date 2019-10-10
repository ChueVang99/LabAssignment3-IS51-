import { Component, OnInit } from '@angular/core';

interface IStudent {
  id:number;
  firstName: string;
  lastName: string;
  course: string;
}
@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  students: Array<IStudent> = [];

  constructor() {
    this.students[0] = {
      id: 1,
      firstName: 'Tom',
      lastName: 'Brady',
      course: 'Swimming'
    }
    this.students[1] = {
      id: 2,
      firstName: 'Kevin',
      lastName: 'Lopez',
      course: 'Running'
    }
    this.students[2] = {
      id: 3,
      firstName: 'Pao',
      lastName: 'Rock',
      course: 'Walking'
    }
    this.students[3] = {
      id: 4,
      firstName: 'Homer',
      lastName: 'Tintin',
      course: 'Flying'
    }
   }

  ngOnInit() {
  }

  addStudent() {
    const student: IStudent = {
      id: 1,
      firstName: 'Chue',
      lastName: 'Vang',
      course: 'Programing'
    };
    this.students.push(student);
  }

}
