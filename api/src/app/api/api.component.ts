import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css'],
})
export class ApiComponent implements OnInit {
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  q: string;
  gifs: any = [];

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.q = params['q'];

      this.apiService.getImagen(this.q).subscribe((gifs) => {
        console.log(gifs);
        this.gifs = gifs;
      });
    });
  }
}
