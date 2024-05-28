import { Component } from '@angular/core';
import { UsersList } from '../../data/user-list';
import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  usersList: IUser[] = UsersList;
  displayedColumns = ['name', 'date', 'status'];

  onUserSelected(user: IUser){

  }
}
