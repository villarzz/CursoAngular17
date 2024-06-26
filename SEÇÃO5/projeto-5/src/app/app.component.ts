import { isWithinInterval } from 'date-fns';
import { UsersList } from './data/user-list';
import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/user/user.interface';
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
    this.usersListFiltered = this.filterUsersList(filterOptions, this.usersList);
  }

  filterUsersList(filterOptions: IFilterOptions, usersList: IUser[]): IUser[] {
    let filteredList:IUser[] = [];

    filteredList = this.filteredUsersListByName(filterOptions.name, usersList);
    filteredList = this.filteredUsersListByStatus(filterOptions.status, filteredList);
    filteredList = this.filteredUsersListByDate(filterOptions.startDate, filterOptions.endDate, filteredList);

    return filteredList;
  }

  filteredUsersListByDate(startDate: Date | undefined, endDate: Date | undefined, usersList: IUser[]): IUser[] {
    const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

    if (DATES_NOT_SELECTED) {
      return usersList;
    }

    const checkDateInterval =((user:IUser)=> isWithinInterval(new Date(user.dataCadastro), {start: startDate, end: endDate}))

    const listFiltered = usersList.filter(checkDateInterval);
    return listFiltered;
  }

  filteredUsersListByStatus(status: boolean | undefined, usersList: IUser[]): IUser[] {
    const STATUS_NOT_SELECTED = status === undefined;

    if (STATUS_NOT_SELECTED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.ativo === status);
    return filteredList;
  }

  filteredUsersListByName(name: string | undefined, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === undefined;

    if (NAME_NOT_TYPPED) {
      return usersList;
    }

    const filteredList = usersList.filter((user) => user.nome.toLowerCase().includes(name.toLowerCase()));

    return filteredList;
  }
}
