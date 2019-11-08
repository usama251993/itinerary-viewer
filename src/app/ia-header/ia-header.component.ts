import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ia-header',
  templateUrl: './ia-header.component.html',
  styleUrls: ['./ia-header.component.scss']
})
export class IaHeaderComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['home'], { relativeTo: this.route });
  }

}
