import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    // {
    //     // lazy load
    //     path: '',
    //     // se não tiver rota vai carregar o module home
    //     component: HomeModule,
    //     canActivate: [FacebookGuard]
    // },
    {
        path: '',
        component: LoginComponent,
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ]
})

export class AppRoutingModule {

}