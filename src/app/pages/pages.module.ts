import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { NgModule } from '@angular/core';
import { PublishmentComponent } from './publishment/publishment.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        PublishmentComponent, 
        ProfileComponent, 
        EditProfileComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        CommonModule,
        RouterModule,
        PagesRoutingModule
    ],
    providers: [],
    bootstrap: []

})

export class PagesModule{}