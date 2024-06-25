import { UsersList } from '../../data/user-list';
import { IUser } from '../../interfaces/user/user.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent {
  @Input({ required: true }) usersList: IUser[] = UsersList;
  displayedColumns = ['name', 'date', 'status'];

  @Output('userSelected') userSelectedEmit = new EventEmitter<IUser>();

  onUserSelected(user: IUser) {
    this.userSelectedEmit.emit(user);
  }
}
