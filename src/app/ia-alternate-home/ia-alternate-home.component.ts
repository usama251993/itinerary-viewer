import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IaTripService } from '../shared/services/ia-trip.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-ia-alternate-home',
  templateUrl: './ia-alternate-home.component.html',
  styleUrls: ['./ia-alternate-home.component.scss']
})
export class IaAlternateHomeComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute,
    private tripService: IaTripService) { }

  ngOnInit() {
  }

  navigateTo(plan: string) {
    this.tripService.planString = plan;
    timer(500).pipe().subscribe((timerEmit: number) => {
      this.router.navigate(['../', 'view', plan], { relativeTo: this.route });
    })
  }

}
