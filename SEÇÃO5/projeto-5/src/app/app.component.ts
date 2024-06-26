import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/user-list';
import { IFilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'projeto-5';
  usersList: IUser[] = [];
  showUserDetails = false;
  userSelected: IUser = {} as IUser;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
    }, 1);
  }

  onUserSelected(user:IUser){
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions:IFilterOptions){
    console.log(filterOptions);
  }
}
