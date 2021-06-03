import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Palette } from '../models/palette.model';
import { PALETTE_API } from '../app.constants';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PaletteService {
  constructor(private http: HttpClient) {}

  getTopPalettes(): Observable<Palette[]> {
    return this.http.get<Palette[]>(`${PALETTE_API}/palettes/top?format=json`);
  }

  getPalette(id: number): Observable<Palette> {
    return this.http
      .get<Palette[]>(`${PALETTE_API}/palette/${id}?format=json`)
      .pipe(
        map((palettes: Palette[]) => (palettes.length ? palettes[0] : null))
      );
  }
}
