import { Component, Input } from '@angular/core';
import { Fellows } from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/bootstrap.css','./app.component.css']
})

export class AppComponent {

 	title = 'Intoduction to angular2 Components!';
 	public addFellow = false;
	public editable:boolean = false;
	public numOfFellow:number;

 	felo = new Fellows;

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

	deleteSelected(fel) {
		console.log(this.fellows);
	    let index = this.fellows.findIndex(fellow => fellow.id === fel.id);
	    console.log(index);
	    this.fellows.splice(index, 1);
	    console.log("deleted");
	    alert("Fellow has been deleted");
	}

	// Add new fellow
	addNewFellow(fellow) {
	    this.fellows.push(fellow);
	    alert("Fellow has been Added");
	    // reset form data
	    this.felo = new Fellows;
	    this.addFellow = false;
	}

	editFellow(fellow) {
		this.numOfFellow = this.fellows.indexOf(fellow);
		this.editable = true;
	}
}
