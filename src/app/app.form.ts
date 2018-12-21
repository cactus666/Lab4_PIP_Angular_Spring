import {Component, OnInit} from '@angular/core';
import {scrypt} from "crypto";
// import 'conv.js';

@Component({
    selector: 'form-app',
    templateUrl: './form.html',
    styleUrls: ['./css/app.form.css']
})
export class FormComponent implements OnInit{
    x=""; r=""; y="";

    ngOnInit(): void {
        document.getElementById("lol").click();
    }
}


