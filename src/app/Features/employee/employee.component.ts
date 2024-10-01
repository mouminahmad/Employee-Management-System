import { Component , OnInit,inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IApiResponse, IParentDept } from '../../model/interface/master';
import { MasterService } from '../../service/master.service'; 

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  // Property to toggle form visibility
  showForm = false;
  
  masterserv = inject(MasterService)
  parentDeptList  = signal<IParentDept[]>([])

  ngOnInit(): void {
    this.getParentDept();
  }

  getParentDept(){
    this.masterserv.getAllDept().subscribe((res:IApiResponse) => {
     this.parentDeptList.set(res.data);
    })
  }

  }