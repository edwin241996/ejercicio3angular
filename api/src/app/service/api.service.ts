import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private Key = `9wnm2Zq5fnmQafwnbVSlnpnRZZb33SnC`;
  private limit = '24';
  private url = `https://api.giphy.com/v1/gifs/search`;

  getImagen(q) {
    let url = `${this.url}?api_key=${this.Key}&q=${q}&limit=${this.limit}&offset=0&rating=g&lang=en`;
    console.log(url);

    return this.http.get(url);
  }
}
