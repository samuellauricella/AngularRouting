/**
 * Created by samuellauricella on 6/15/17.
 */

import { NgModule } from '@angular/core'
import { AboutComponent } from './about.component'
import { AboutSectionComponent } from './about-section.component'
import { AboutUserComponent } from './about-user.component'
import { UserService } from '../shared/services/user.service'
import { aboutRouting } from './about.routing'
import { CommonModule } from '@angular/common'
import {AboutUsersResolve} from './about-resolve.service'
import {AboutUserResolve} from './about-user-resolve.service'

@NgModule({
    imports:[aboutRouting, CommonModule],
    declarations: [AboutComponent, AboutUserComponent, AboutSectionComponent],
    providers: [UserService, AboutUsersResolve, AboutUserResolve]
})

export class AboutModule{}