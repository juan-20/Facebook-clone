import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './components/home/home.module';
import { LoginComponent } from './components/login/login.component';
import { FacebookGuard } from './guards/facebook.guard';

const routes: Routes = [
    {
        // lazy load
        path: '',
        // se não tiver rota vai carregar o module home
        component: HomeModule,
        canActivate: [FacebookGuard]
    },
    {
        path: 'login',
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