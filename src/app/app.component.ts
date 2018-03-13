import { Component } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from "rxjs";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private storage: AngularFireStorage){ }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'ensayo';
    const task = this.storage.upload(filePath, file);
    
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    this.downloadURL = task.downloadURL();
  }



}
