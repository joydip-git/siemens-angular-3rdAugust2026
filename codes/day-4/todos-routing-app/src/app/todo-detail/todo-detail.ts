import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';

@Component({
  selector: 'app-todo-detail',
  imports: [],
  templateUrl: './todo-detail.html',
  styleUrl: './todo-detail.css',
})
export class TodoDetail implements OnInit {
  private route = inject(ActivatedRoute)

  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.route.snapshot;
    const params: Params = snapshot.params
    const id = Number(params["id"])
    console.log(id);
  }
}
