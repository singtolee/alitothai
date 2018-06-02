import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
export interface Item {name: string;}

@Component({
  selector: 'app-key-word',
  templateUrl: './key-word.component.html',
  styleUrls: ['./key-word.component.css']
})
export class KeyWordComponent implements OnInit {

  keywords:Observable<Item[]>;
  private keywordsCollection: AngularFirestoreCollection<Item>;
  public keyword:string='';

  constructor(private db:AngularFirestore) {
    this.keywordsCollection = db.collection<Item>('KEY-WORDS');
    this.keywords = this.keywordsCollection.valueChanges();
  }

  ngOnInit() {
  }

  saveKeyWord(){
    this.keyword = this.keyword.trim();
    if(!this.keyword){
      return;
    }
    this.db.collection('KEY-WORDS').add({'name':this.keyword});
    this.keyword = '';
  }

}
