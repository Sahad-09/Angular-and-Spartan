import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Client } from '../../model/class/Client';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/interface/roles';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client()
  clientList: Client[] = []

  clientService = inject(ClientService)

  ngOnInit(): void {
    this.loadClient()
  }

  loadClient() {
    this.clientService.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data
    })
  }

  onSaveClient() {
    console.log("CLICKED ONSAVE");

    this.clientService.addUpdate(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Sucess")
        this.loadClient()
        this.clientObj = new Client()
      } else {
        alert("Failed")
      }
    })
  }

  onEdit(data: Client) {
    this.clientObj = data
  }

  deleteClient(id: number) {
    console.log("CLIENT DELETED");

    this.clientService.deletClientById(id).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("DELETED")
        this.loadClient()
        this.clientObj = new Client()
      } else {
        alert("Failed")
      }
    })
  }


}
