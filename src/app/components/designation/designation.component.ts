import { Component, inject, OnInit } from '@angular/core';
import { MasterComponent } from '../master/master.component';
import { MasterService } from '../../services/master.service';
import { IDesignation } from "../../model/interface/roles"
import { APIResponseModel } from "../../model/interface/roles"


@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {
  masterService = inject(MasterService)

  designationList: IDesignation[] = []

  ngOnInit() {
    this.masterService.getDesignation().subscribe((res: APIResponseModel) => {
      this.designationList = res.data
    }
    )
  }
}
