import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

    users: any;
    endpoint = environment.users.endpoint + '/users';

    constructor(private http: HttpClient) {
        this.users = [];
    }

    getUsers() {
        const params = {};
        const httpOptions = {
            params
        };

        return this.http.get<any>(this.endpoint, httpOptions).map(
            res => {
                this.users = [];
                for (const t of res) {
                    this.users.push(t);
                }
                return this.users;
            }, err => {
                return err;
            });
    }

    postUser(user: any) {
        const params = {};
        const httpOptions = {
            params
        };

        return this.http.post<any>(this.endpoint, user, httpOptions).map(
            res => {
                return res;
            }, err => {
                return err;
            });
    }
}
