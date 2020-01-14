import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublishmentComponent } from './publishment/publishment.component';

export const PagesRoutes: Routes =[
    {
        path:'',
        component: PublishmentComponent
    },
    {
        path: 'perfil',
        component: ProfileComponent
    },
    {
        path: 'editar-perfil',
        component: EditProfileComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild([
        {
            path:'',
            component: PublishmentComponent
        },
        {
            path: 'perfil',
            component: ProfileComponent
        },
        {
            path: 'editar-perfil',
            component: EditProfileComponent
        }
    ])]
})

export class PagesRoutingModule{}