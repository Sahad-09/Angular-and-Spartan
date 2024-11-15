import { Component, inject, OnInit } from '@angular/core';
import { MasterComponent } from '../master/master.component';
import { MasterService } from '../../services/service.service';
import { IDesignation } from "../../model/interface/roles"
import { APIModel } from "../../model/interface/roles"


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
    this.masterService.getDesignation().subscribe((res: APIModel) => {
      this.designationList = res.data
    }
    )
  }
}
