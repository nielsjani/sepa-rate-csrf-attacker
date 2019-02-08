import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    // this.httpClient.get('http://localhost:8080/get/attack', {withCredentials: true})
    //   .subscribe(() => console.log('The damage has been done...'));
  }
}
