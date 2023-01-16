import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Facts } from '../../model/facts';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-facts-component',
  templateUrl: './facts-component.component.html',
  styleUrls: ['./facts-component.component.css']
})
export class FactsComponentComponent implements OnInit {
  loadedFacts: Facts = new Facts();
  id: number;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    // this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.id = params['page'];
    //   }
    // );
    this.id = this.route.snapshot.params['page'];
    this.fetchFacts('https://catfact.ninja/facts?page=' + this.id);
  }

  onNext(){
    this.fetchFacts(this.loadedFacts.next_page_url);
    this.router.navigate(['/facts', this.id++]);
  }

  onPrevious(){
    this.fetchFacts(this.loadedFacts.prev_page_url);
    this.router.navigate(['/facts', this.id--]);
  }

  onRemoveFact(id: number){
    this.loadedFacts.data.splice(id, 1);
    // console.log(id)
  }

  // private fetchFacts(pageNumber: number) {
  //   this.http
  //   .get<Facts>('https://catfact.ninja/facts?page=' + pageNumber)
  //   .pipe(
  //     map(responseData => {
  //       console.log(responseData);


  //       return responseData;
  //     })
  //   )
  //   .subscribe(facts => {
  //     this.loadedFacts = facts;
  //   })
  // }
  private fetchFacts(url: string) {
    this.http
    .get<Facts>(url)
    .pipe(
      map(responseData => {
        console.log(responseData);


        return responseData;
      })
    )
    .subscribe(facts => {
      this.loadedFacts = facts;
    })
  }

}
