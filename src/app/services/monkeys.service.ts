import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class MonkeysService {

    monkeys: any;
    endpoint = environment.animals.endpoint + '/monkeys';

    constructor(private http: HttpClient) {
        this.monkeys = [];
    }

    getMonkeys() {
        const params = {};
        const httpOptions = {
            params
        };

        return this.http.get<any>(this.endpoint, httpOptions).map(
            res => {
                this.monkeys = [];
                for (const t of res) {
                    this.monkeys.push(t);
                }
                return this.monkeys;
            }, err => {
                return err;
            });
    }

    postMonkey(monkey: any) {
        const params = {};
        const httpOptions = {
            params
        };

        return this.http.post<any>(this.endpoint, monkey, httpOptions).map(
            res => {
                return res;
            }, err => {
                return err;
            });
    }
}
