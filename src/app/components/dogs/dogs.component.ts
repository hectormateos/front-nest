import {Component, OnInit} from '@angular/core';
import {DogsService} from '../../services/dogs.service';
import {
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';

@Component({
    selector: 'app-dogs',
    templateUrl: './dogs.component.html'
})
export class DogsComponent implements OnInit {

    dogs: any;
    error: any;
    dogForm: FormGroup;

    constructor(private _dogsService: DogsService) {
        this.dogs = [];
    }

    ngOnInit() {
        this.getDogs();

        this.dogForm = new FormGroup({
            name: new FormControl('', [
                Validators.required
            ]),
        });
    }

    getDogs() {
        this._dogsService.getDogs().subscribe(
            data => {
                this.dogs = data;
                this.error = false;
            },
            err => {
                this.error = err.message;
            }
        );
    }

    addDog() {
        if (this.dogForm.valid) {
            const newDog = this.dogForm.value;
            this._dogsService.postDog(newDog).subscribe(
                data => {
                    this.dogs.push(data);
                    this.error = false;
                    this.dogForm.reset();
                },
                err => {
                    console.log(err);
                    this.error = err.message;
                }
            );
        }
    }
}
