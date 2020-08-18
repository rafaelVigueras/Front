import { Component, OnInit } from '@angular/core';
import { SystemUser } from 'src/app/models/system-user';
import { UserService } from 'src/app/services/user-service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  displayedColumns: string[] = ['id', 'email', 'userName', 'status', 'gender', 'creationDate'];
  dataUser: SystemUser[];
  id: number;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.loadData();
  }

  loadData() {
    this.userService.getById(this.id).subscribe(x => {
      if (x.isSucces === true) {
        this.dataUser = [x.data];
        console.log(this.dataUser);
      }
    });
  }

  onGoBack() {
    this.location.back();
  }

}
