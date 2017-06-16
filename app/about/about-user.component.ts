/**
 * Created by samuellauricella on 6/14/17.
 */

import {Component, OnInit } from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import { User } from '../shared/models/user'



@Component({
    template:`<div *ngIf="user">
        <a (click)="goBack()" class="btn btn-sm btn-info"> Go Back</a>
        <h1>{{user.name}} ({{user.username}})</h1>
    </div>`
})

export class AboutUserComponent implements OnInit {
    user: User;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.route.data.forEach(data =>{
            this.user = data.user
        })
    }

    goBack(){
        this.router.navigate(['/about']);
    }

}