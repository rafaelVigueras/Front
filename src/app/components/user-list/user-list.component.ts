import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { SystemUser } from 'src/app/models/system-user';
import { ServiceResponse } from 'src/app/models/response';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'email', 'userName', 'status', 'gender', 'creationDate'];
  dataUser: SystemUser[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.userService.getAll().subscribe(x => {
      if (x.isSucces === true) {
        this.dataUser = x.data;
        console.log(this.dataUser);
      }
       });
  }

  delete(element: SystemUser) {
    console.log(element);
    element.status = false;
    this.userService.delete(element).subscribe(x => this.loadData());
  }

}
