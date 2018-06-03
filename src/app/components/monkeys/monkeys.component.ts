import {Component, OnInit} from '@angular/core';
import {MonkeysService} from '../../services/monkeys.service';
import {
    FormGroup,
    FormControl,
    Validators
} from '@angular/forms';

@Component({
    selector: 'app-monkeys',
    templateUrl: './monkeys.component.html'
})
export class MonkeysComponent implements OnInit {

    monkeys: any;
    error: any;
    monkeyForm: FormGroup;

    constructor(private _monkeysService: MonkeysService) {
        this.monkeys = [];
    }

    ngOnInit() {
        this.getMonkeys();

        this.monkeyForm = new FormGroup({
            name: new FormControl('', [
                Validators.required
            ]),
        });
    }

    getMonkeys() {
        this._monkeysService.getMonkeys().subscribe(
            data => {
                this.monkeys = data;
                this.error = false;
            },
            err => {
                this.error = err.message;
            }
        );
    }

    addMonkey() {
        if (this.monkeyForm.valid) {
            const newMonkey = this.monkeyForm.value;
            this._monkeysService.postMonkey(newMonkey).subscribe(
                data => {
                    console.log('me viene de vuelta ', data)
                    this.monkeys.push(data);
                    this.error = false;
                    this.monkeyForm.reset();
                },
                err => {
                    console.log(err);
                    this.error = err.message;
                }
            );
        }
    }
}
