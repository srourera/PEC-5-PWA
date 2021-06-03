import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaletteService } from '../../services/palette.service';
import { Palette } from '../../models/palette.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'palette-detail',
  templateUrl: './palette-detail.component.html',
  styleUrls: ['./palette-detail.component.scss'],
})
export class PaletteDetailComponent implements OnInit {
  public palette$: Observable<Palette>;

  constructor(
    private route: ActivatedRoute,
    private paletteService: PaletteService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.palette$ = this.paletteService.getPalette(id);
  }
}
