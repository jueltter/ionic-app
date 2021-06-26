import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DEFAULT_RIDE_OBJECT, Ride } from 'src/models/Ride';
import { RideService } from 'src/services/ride';

@Component({
  selector: 'app-ride-form',
  templateUrl: './ride-form.page.html',
  styleUrls: ['./ride-form.page.scss'],
})
export class RideFormPage implements OnInit {
  id: string;
  editing: boolean = false;
  ride: Ride = DEFAULT_RIDE_OBJECT;
  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private rideService: RideService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.editing = this.id !== 'new';
  }

  save() {
    if (this.editing) {

    } else {
      this.rideService.create(this.ride).subscribe((data) => {
        alert('Se creó tu roddada');
        this.navCtrl.pop();
        console.log(data);
      }, (error) => {
        alert('No se pudo crear la rodada...');
        console.log(error);
      });
    }
  }

}
