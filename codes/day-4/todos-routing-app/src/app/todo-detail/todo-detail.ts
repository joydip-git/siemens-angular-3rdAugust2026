import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  imports: [],
  templateUrl: './todo-detail.html',
  styleUrl: './todo-detail.css',
})
export class TodoDetail implements OnInit {
  private currentRoute = inject(ActivatedRoute)
  private router = inject(Router)

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot;
    const params: Params = snapshot.params
    const id = Number(params["id"])
    console.log(id);
  }

  goBack() {    
    this.router.navigate(['/todos'])
  }
}
