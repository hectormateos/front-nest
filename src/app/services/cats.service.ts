import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class CatsService {

    cats: any;
    endpoint = environment.animals.endpoint + '/cats';

    constructor(private http: HttpClient) {
        this.cats = [];
    }

    getCats() {
        const params = {};
        const httpOptions = {
            params
        };

        return this.http.get<any>(this.endpoint, httpOptions).map(
            res => {
                this.cats = [];
                for (const t of res) {
                    this.cats.push(t);
                }
                return this.cats;
            }, err => {
                return err;
            });
    }

    postCat(cat: any) {
        const params = {};
        const httpOptions = {
            params
        };

        return this.http.post<any>(this.endpoint, cat, httpOptions).map(
            res => {
                return res;
            }, err => {
                return err;
            });
    }
}
