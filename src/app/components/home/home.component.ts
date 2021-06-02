import { Component, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserData } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  posts: any[] = [];
  // tipagem do usuario feito no auth
  users: UserData;
  subs: Subscription[] = [];

  @ViewChild("containerRef", { static: true, read: ViewContainerRef }) containerRef: ViewContainerRef;
  data = {
    formgroup: new FormGroup({
      message: new FormControl("")
    })
  }


  constructor(
  ) {
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  login() {
    console.log(this.data.formgroup.controls.login);
    console.log(this.data.formgroup.controls);
    console.log(this.data.formgroup);
  }

  ngOnInit() {
  }

}
