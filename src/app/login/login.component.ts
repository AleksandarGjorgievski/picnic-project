import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { StorageService } from '../services/storage.service';
import { WatcherService } from '../services/watcher.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted = false;

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private router: Router, private watcherService: WatcherService) { 
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.storageService.setObject('user', this.loginForm.value);
    this.watcherService.emitLoginChange(true);
    this.router.navigate(['dashboard'])
  }

  get f() {
    return this.loginForm.controls;
  }
}
