import { Component, Input } from '@angular/core';
import { Fellows } from './app.data';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/bootstrap.css','./app.component.css']
})

export class AppComponent {
 	title = 'Intoduction to angular2 Components!';

 	public addFellow = false;
 	// public addFellow1 = "abb";


 	// @Input();
 	felo = new Fellows;
 	// public id:  number;
 	// public name:  string;
 	// public strength:  string;

	fellows : Fellows[] = [
		{ id: 1,
		name: 'Isreal',
		strength: 'Javascript, HTML, Typescript'},
		{ id: 2,
		name: 'Eniola',
		strength: 'Javascript, Typescript, Angularjs'},
		{ id: 3,
		name: 'Ada',
		strength: 'Javascript, HTML, CSS'},
		{ id: 4,
		name: 'Kudus',
		strength: 'python, PHP'},
		{ id: 5,
		name: 'Charles',
		strength: 'python, PHP, HTML'}

	];

	// thisFellow : Fellows;
	// // fellow = new Fellows();
	deleteSelected(fel) {
		console.log(this.fellows);
		    let index = this.fellows.findIndex(fellow => fellow.id === fel.id);
		    console.log(index);
		    this.fellows.splice(index, 1);
		    // resolve(true);
		    console.log("deleted");
		    alert("Fellow has been deleted");

		// this.thisFellow = fel;
		// this.fellows.splice(fel, 1);
		console.log(fel);
	}
	// Add new fellow
	addNewFellow(felo) {

		    this.fellows.push(felo);
		    // resolve(true);
		    console.log(felo);
		    alert("Fellow has been Added");
		    this.felo = new Fellows;
	}
}
