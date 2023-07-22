import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  name: String = "Abhinav";
  male: boolean = true;
  disabled: boolean = false;

  users = [
    'Abhinav', 'Kushi', 'Ashish', 'Rahul', 'Mohan'
  ];

  employees = [
    {
      "employeeId": 101,
      "name": "John Doe",
      "gender": "Male",
      "experience": 5,
      "salary": 50000
    },
    {
      "employeeId": 102,
      "name": "Jane Smith",
      "gender": "Female",
      "experience": 8,
      "salary": 65000
    },
    {
      "employeeId": 103,
      "name": "Michael Johnson",
      "gender": "Male",
      "experience": 12,
      "salary": 80000
    },
    {
      "employeeId": 104,
      "name": "Emily Brown",
      "gender": "Female",
      "experience": 3,
      "salary": 45000
    },
    {
      "employeeId": 105,
      "name": "David Lee",
      "gender": "Male",
      "experience": 7,
      "salary": 60000
    },
    {
      "employeeId": 106,
      "name": "Sophia Wang",
      "gender": "Female",
      "experience": 10,
      "salary": 75000
    },
    {
      "employeeId": 107,
      "name": "Robert Johnson",
      "gender": "Male",
      "experience": 4,
      "salary": 48000
    },
    {
      "employeeId": 108,
      "name": "Ava Martinez",
      "gender": "Female",
      "experience": 6,
      "salary": 55000
    },
    {
      "employeeId": 109,
      "name": "William Kim",
      "gender": "Male",
      "experience": 9,
      "salary": 70000
    },
    {
      "employeeId": 110,
      "name": "Olivia Fischer",
      "gender": "Female",
      "experience": 2,
      "salary": 42000
    }
  ]

  removeIt(employeeId: any): void {
    for (let i = 0; i < this.employees.length; i++) {
      if (employeeId == this.employees[i].employeeId) {
        alert(this.employees[i].employeeId);
      }
    }
  }

}
