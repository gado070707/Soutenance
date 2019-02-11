import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formtruck',
  templateUrl: './formtruck.component.html',
  styleUrls: ['./formtruck.component.scss']
})
export class FormtruckComponent implements OnInit {

  form: FormGroup;
  private checkboxSocieteSiret = true;

  constructor(
    private formBuilder: FormBuilder,
    private activeRoutes: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  societe() {
    if (this.getCheckbox() === false) {
      this.setCheckbox(true);
    } else {
      this.setCheckbox(false);
    }
  }

  getCheckbox(): boolean {
    return this.checkboxSocieteSiret;
  }

  setCheckbox(checkboxSocieteSiret: boolean) {
    this.checkboxSocieteSiret = checkboxSocieteSiret;
  }

  getStyle() {
    if (!this.getCheckbox()) {
      document.getElementById('labelLundi').style.display = 'none';
      document.getElementById('labelMardi').style.display = 'none';
      document.getElementById('labelMercredi').style.display = 'none';
      document.getElementById('labelJeudi').style.display = 'none';
      document.getElementById('labelVendredi').style.display = 'none';
      document.getElementById('labelSamedi').style.display = 'none';
      document.getElementById('labelDimanche').style.display = 'none';
    } else {
      document.getElementById('labelLundi').style.display = 'none';
      document.getElementById('labelMardi').style.display = 'none';
      document.getElementById('labelMercredi').style.display = 'none';
      document.getElementById('labelJeudi').style.display = 'none';
      document.getElementById('labelVendredi').style.display = 'none';
      document.getElementById('labelSamedi').style.display = 'none';
      document.getElementById('labelDimanche').style.display = 'none';
    }
  }

}
