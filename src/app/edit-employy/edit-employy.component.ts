import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-edit-employy',
  templateUrl: './edit-employy.component.html',
  styleUrls: ['./edit-employy.component.scss']
})
export class EditEmployyComponent implements OnInit {
  detail:any
  constructor(
    private service:EmployeeService,
    public dialogRef: MatDialogRef<EditEmployyComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) { 
    if(data){
      console.log(data)
      this.detail = data
    }
  }

  ngOnInit(): void {
  }

  submitForm(data:any){
    
      if(data){
        let result:any = {
          id:this.detail.id,
          data:data
        }
        this.dialogRef.close(result);
      }
  
  }

}
