import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-filmography',
  templateUrl: './filmography.component.html',
  styleUrls: ['./filmography.component.scss']
})
export class FilmographyComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
