import {Component, OnInit} from '@angular/core';
import {CatsService} from '../../services/cats.service';
import {
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';

@Component({
    selector: 'app-cats',
    templateUrl: './cats.component.html'
})
export class CatsComponent implements OnInit {

    cats: any;
    error: any;
    catForm: FormGroup;

    constructor(private _catsService: CatsService) {
        this.cats = [];
    }

    ngOnInit() {
        this.getCats();

        this.catForm = new FormGroup({
            name: new FormControl('', [
                Validators.required
            ]),
        });
    }

    getCats() {
        this._catsService.getCats().subscribe(
            data => {
                this.cats = data;
                this.error = false;
            },
            err => {
                this.error = err.message;
            }
        );
    }

    addCat() {
        if (this.catForm.valid) {
            const newCat = this.catForm.value;
            this._catsService.postCat(newCat).subscribe(
                data => {
                    this.cats.push(data);
                    this.error = false;
                    this.catForm.reset();
                },
                err => {
                    console.log(err);
                    this.error = err.message;
                }
            );
        }
    }
}
