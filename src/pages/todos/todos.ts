import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the TodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {


  todosArray = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    this.loadtodosData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodosPage');
  }
  loadtodosData() {
    let url = "http://localhost/todoslim3/public/index.php/api/todos";

    this.http.get(url).subscribe((data: any) => {
      this.todosArray = data;
      console.log(this.todosArray);
    }, (error) => { console.log(error) });


  }

}
