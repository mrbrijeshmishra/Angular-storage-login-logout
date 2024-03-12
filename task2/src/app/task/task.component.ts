import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  employees =
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "age": 30,
        "city": "New York",
        "country": "USA",
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane@example.com",
        "age": 25,
        "city": "Los Angeles",
        "country": "USA",
      },
      {
        "id": 3,
        "name": "Alice Johnson",
        "email": "alice@example.com",
        "age": 35,
        "city": "Chicago",
        "country": "USA",
      },
      {
        "id": 4,
        "name": "Bob Brown",
        "email": "bob@example.com",
        "age": 40,
        "city": "Houston",
        "country": "USA",
      },
      {
        "id": 5,
        "name": "Emily Davis",
        "email": "emily@example.com",
        "age": 28,
        "city": "Phoenix",
        "country": "USA",
      },
      {
        "id": 6,
        "name": "Michael Wilson",
        "email": "michael@example.com",
        "age": 32,
        "city": "Philadelphia",
        "country": "USA",
      },
      {
        "id": 7,
        "name": "Emma Martinez",
        "email": "emma@example.com",
        "age": 45,
        "city": "San Antonio",
        "country": "USA",
      },
      {
        "id": 8,
        "name": "William Anderson",
        "email": "william@example.com",
        "age": 27,
        "city": "San Diego",
        "country": "USA",
      },
      {
        "id": 9,
        "name": "Olivia Taylor",
        "email": "olivia@example.com",
        "age": 38,
        "city": "Dallas",
        "country": "USA",
      },
      {
        "id": 10,
        "name": "James Thomas",
        "email": "james@example.com",
        "age": 33,
        "city": "San Jose",
        "country": "USA",
      },
      {
        "id": 11,
        "name": "Sophia Hernandez",
        "email": "sophia@example.com",
        "age": 29,
        "city": "Austin",
        "country": "USA",
      },
      {
        "id": 12,
        "name": "Benjamin Moore",
        "email": "benjamin@example.com",
        "age": 42,
        "city": "Jacksonville",
        "country": "USA",
      },
      {
        "id": 13,
        "name": "Isabella Jackson",
        "email": "isabella@example.com",
        "age": 31,
        "city": "Indianapolis",
        "country": "USA",
      },
      {
        "id": 14,
        "name": "Mason White",
        "email": "mason@example.com",
        "age": 37,
        "city": "San Francisco",
        "country": "USA",
      },
      {
        "id": 15,
        "name": "Amelia Thompson",
        "email": "amelia@example.com",
        "age": 34,
        "city": "Columbus",
        "country": "USA",
      },
      {
        "id": 16,
        "name": "Ethan Carter",
        "email": "ethan@example.com",
        "age": 39,
        "city": "Fort Worth",
        "country": "USA",
      },
      {
        "id": 17,
        "name": "Mia Harris",
        "email": "mia@example.com",
        "age": 26,
        "city": "Charlotte",
        "country": "USA",
      },
      {
        "id": 18,
        "name": "Alexander Martin",
        "email": "alexander@example.com",
        "age": 41,
        "city": "Seattle",
        "country": "USA",
      },
      {
        "id": 19,
        "name": "Charlotte Garcia",
        "email": "charlotte@example.com",
        "age": 36,
        "city": "Denver",
        "country": "USA",
      },
      {
        "id": 20,
        "name": "William Rodriguez",
        "email": "william@example.com",
        "age": 44,
        "city": "Washington",
        "country": "USA",
      },
      {
        "id": 21,
        "name": "Ava Lee",
        "email": "ava@example.com",
        "age": 30,
        "city": "Boston",
        "country": "USA",
      },
      {
        "id": 22,
        "name": "Daniel Perez",
        "email": "daniel@example.com",
        "age": 35,
        "city": "Nashville",
        "country": "USA",
      },
      {
        "id": 23,
        "name": "Sophia Thompson",
        "email": "sophia@example.com",
        "age": 28,
        "city": "Baltimore",
        "country": "USA",
      },
      {
        "id": 24,
        "name": "Joseph Nguyen",
        "email": "joseph@example.com",
        "age": 37,
        "city": "Louisville",
        "country": "USA",
      }
    ]

  addUser:any= new FormGroup({
    id: new FormControl(this.employees.length+1,[Validators.required]),
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    age: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
  })

  addRecord() {
    console.log(this.addUser.value);
    this.employees.push(this.addUser.value);
    this.addUser.reset();
    // if (this.addUser.valid) {
    //   console.log(this.addUser.value);
    //   this.employees.push(this.addUser.value);
    //   this.addUser.reset();
    // }
  }

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
  }

  updateEmployee(index: number) {
    // console.log("Printed");
    console.log(index);
    const employee = this.employees[index];
    this.addUser.patchValue({
      id: employee.id,
      name: employee.name,
      email: employee.email,
      age: employee.age,
      city: employee.city,
      country: employee.country
    });
  }

  updateEmployeeData() {
    const updatedEmployeeData = this.addUser.value;

    const index = this.employees.findIndex(employee => employee.id === updatedEmployeeData.id);
  
    if (index !== -1) {
      this.employees[index] = {
        id: updatedEmployeeData.id,
        name: updatedEmployeeData.name,
        email: updatedEmployeeData.email,
        age: updatedEmployeeData.age,
        city: updatedEmployeeData.city,
        country: updatedEmployeeData.country
      };
      
      this.addUser.reset();
  
    }
  }   

}
