import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';
import { WatcherService } from './services/watcher.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FICT News';
  public loggedIn = false;
  public newPostForm: FormGroup;
  public post = {title: "", img: "", description: "", likes: 0, dislikes: 0};

  constructor(private storageService: StorageService, private router: Router, private watcherService: WatcherService, private formBuilder: FormBuilder) {
    this.newPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  
  ngOnInit(): void {
    this.loggedIn = this.storageService.getObject('user') ? true: false;
    this.watcherService.loginListener().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });

    
  }

  public logout() {
    this.storageService.delete('user');
    this.watcherService.emitLoginChange(false);
    this.router.navigate(['login']);
  }

  public createNewPost() {
    this.post.img = "./../../assets/img/fict_upload.png";
    console.log('The new post is:', this.post);
    // Send the post
    this.watcherService.emitNewPostChange(this.post);
    // Reset the post object
    this.post = {title: "", img: "", description: "", likes: 0, dislikes: 0};
    document.getElementById("closeNewPostModal")?.click();
    document.getElementById("returnToTabOne")?.click();
    document.getElementById("blah")?.setAttribute("src", "./../assets/img/placeholder-image.png");
    
  }

  public uploadProfilePicture(image:any) {
    console.log(image);
  }


}
