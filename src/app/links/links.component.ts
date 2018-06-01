import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

interface Link {
  title: string;
  url: string;
  imgUrl:string;
  clickCount:number;
}


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  links: Observable<Link[]>;
  private linksCol: AngularFirestoreCollection<Link>;


  constructor(private db:AngularFirestore) {
    this.linksCol = db.collection<Link>(`TOP-LINKS`);
    this.links = this.linksCol.valueChanges();
  }

  ngOnInit() {
  }

}
