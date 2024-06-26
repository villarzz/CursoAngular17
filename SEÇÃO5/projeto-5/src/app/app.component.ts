import { isWithinInterval } from 'date-fns';
import { UsersList } from './data/user-list';
import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
import { IFilterOptions } from './interfaces/filter-options.interface';
import { filterUsersList } from './utils/filter-user-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'projeto-5';
  usersList: IUser[] = [];
  showUserDetails = false;
  usersListFiltered: IUser[] = [];
  userSelected: IUser = {} as IUser;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 1);
  }

  onUserSelected(user:IUser){
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions:IFilterOptions){
    this.usersListFiltered = filterUsersList(filterOptions, this.usersList);
  }
}
