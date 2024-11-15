import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from "../../model/interface/roles"
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  http = inject(HttpClient)
  roleList: IRole[] = [];


  ngOnInit(): void {
    this.getAllRoles()

  }

  getAllRoles() {
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res: any) => {
      this.roleList = res.data
      console.log(this.roleList);

    })
  }























  // firstName: string = "Sahad"
  // angularVersion: number = 18
  // isActive: boolean = true
  // currentDate: Date = new Date()
}
