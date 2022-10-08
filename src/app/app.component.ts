import { Component } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import {MatDialog} from '@angular/material/dialog';
import { EditEmployyComponent } from './edit-employy/edit-employy.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'employeeform';
  employeeData:any;
  constructor(private servive:EmployeeService,
    public dialog: MatDialog){
    this.getAllDataArray()
  }

  getAllDataArray(){
    this.servive.getAllData().subscribe((res:any) => {
      // console.log(res)
      this.employeeData = res.data
    })
  }

  storeData(data:any){
    localStorage.setItem("setdata",JSON.stringify(data));
  }

  openDialog(data:any) {
    const dialogRef = this.dialog.open(EditEmployyComponent,{data:data,width:'50%'});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result){
        console.log(result.data)
          const array = this.employeeData.map((res:any) => {
            if(res.id === result.id){
              return {...res,first_name:result.data.first_name,last_name:result.data.last_name,email:result.data.email}
            }
            return res
          })
          console.log(array)
          this.employeeData = array
      }
    });
  }

  


}
