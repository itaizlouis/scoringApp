import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addscoring',
  templateUrl: './addscoring.component.html',
  styleUrls: ['./addscoring.component.css']
})
export class AddscoringComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {
    
  }
  

}


