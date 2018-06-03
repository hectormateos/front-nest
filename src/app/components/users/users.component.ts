import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users.service';
import {
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

    users: any;
    error: any;
    userForm: FormGroup;

    constructor(private _usersService: UsersService) {
        this.users = [];
    }

    ngOnInit() {
        this.getUsers();

        this.userForm = new FormGroup({
            name: new FormControl('', [
                Validators.required
            ]),
            favouriteColor: new FormControl('', [
                Validators.required
            ]),
            age: new FormControl('', [
                Validators.required,
                Validators.min(18)
            ])
        });
    }

    getUsers() {
        this._usersService.getUsers().subscribe(
            data => {
                this.users = data;
                this.error = false;
            },
            err => {
                this.error = err.message;
            }
        );
    }

    addUser() {
        if (this.userForm.valid) {
            const newUser = this.userForm.value;
            this._usersService.postUser(newUser).subscribe(
                data => {
                    this.users.push(data);
                    this.error = false;
                    this.userForm.reset();
                },
                err => {
                    console.log(err);
                    this.error = err.message;
                }
            );
        }
    }
}
