import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class DogsService {

    dogs: any;
    endpoint = environment.animals.endpoint + '/dogs';

    constructor(private http: HttpClient) {
        this.dogs = [];
    }

    getDogs() {
        const params = {};
        const httpOptions = {
            params
        };

        return this.http.get<any>(this.endpoint, httpOptions).map(
            res => {
                this.dogs = [];
                for (const t of res) {
                    this.dogs.push(t);
                }
                return this.dogs;
            }, err => {
                return err;
            });
    }

    postDog(dog: any) {
        const params = {};
        const httpOptions = {
            params
        };

        return this.http.post<any>(this.endpoint, dog, httpOptions).map(
            res => {
                return res;
            }, err => {
                return err;
            });
    }
}
