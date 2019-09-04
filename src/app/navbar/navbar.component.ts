import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser:string;
  userId:string;
  currentId:string;


  constructor(public router: Router) { }


  ngOnInit() {
    this.currentUser=localStorage.getItem('CurrentUser');
  }

  isAdmin()
  {
    if(localStorage.getItem('CurrentRole')=="Admin")
    {
      return true;
    }
    return false;
  }

  isHost()
  {
    if(localStorage.getItem('CurrentRole')=="Host")
    {
      return true;
    }
    return false;
  }

  isGuest()
  {
    if(localStorage.getItem('CurrentRole')=="Guest")
    {
      return true;
    }
    return false;
  }

  BackToAdmin()
  {
    let split=this.router.url.split('/');
    this.userId=split[2];
    this.router.navigateByUrl(`/admin/${this.userId}`);
    localStorage.setItem('CurrentComponent','AdminComponent');
  }

  BackToHost()
  {
    let split=this.router.url.split('/');
    this.userId=split[2];
    this.router.navigateByUrl(`/host/${this.userId}`);
    localStorage.setItem('CurrentComponent','HostComponent');
  }

  BackToGuest()
  {
    let split=this.router.url.split('/');
    this.userId=split[2];
    this.router.navigateByUrl(`/guest/${this.userId}`);
    localStorage.setItem('CurrentComponent','GuestComponent');
  }

  CurrentUsername()
  {
    this.currentUser=localStorage.getItem('CurrentUsername');
    return this.currentUser;
  }

  CurrentId()
  {
    this.currentId=localStorage.getItem('CurrentId');
    return this.currentId;
  }


  CurrentComponent()
  {
    return localStorage.getItem('CurrentComponent');
  }

  ShowLogout()
  {
    if(localStorage.getItem('Logged')=='true')
    {
      return true;
    }
    return false;
  }

  ShowLogin()
  {
    if(localStorage.getItem('Logged')!='true')
    {
      return true;
    }
    return false;
  }

  CallLogout()
  {
    localStorage.clear();
    this.router.navigateByUrl('/checkavail');
  }

  BackToCheck()
  {
    
    localStorage.setItem('Logged','false');
    localStorage.setItem('CurrentComponent','CheckavailComponent');
    this.router.navigateByUrl('/checkavail');
  }



}
