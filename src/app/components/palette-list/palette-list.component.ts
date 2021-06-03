import { Component, OnInit } from '@angular/core';
import { PaletteService } from '../../services/palette.service';
import { Palette } from '../../models/palette.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'palette-list',
  templateUrl: './palette-list.component.html',
  styleUrls: ['./palette-list.component.scss'],
})
export class PaletteListComponent implements OnInit {
  public palettes$: Observable<Palette[]>;

  constructor(private paletteService: PaletteService) {}

  ngOnInit(): void {
    this.palettes$ = this.paletteService.getTopPalettes();
  }
}
