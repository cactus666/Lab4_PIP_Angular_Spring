import { Component } from '@angular/core';
     
@Component({
    selector: 'my-app',
    template: `<div class="head">
             	    <h4>
			            University ITMO<br>
			            BT
		            </h4>
		            <h1>Lab 4</h1>
		            <div id = "name">	
                        Done students:<br>
                        <em>{{name_first_student}}</em><br>
	    		        <em>{{name_second_student}}</em><br>
		    	        Version: 200123
		            </div>
                    <nav id="navigation">
                        <a class = "link" routerLink="">home</a>
                        <a class = "link" routerLink="/main">main</a>
                    </nav>
                </div>
                <router-outlet></router-outlet>`,
    styleUrls: ['./css/app.head.css']
})
  
     

export class AppComponent { 
    name_first_student="Shust Ivan"
    name_second_student="Gleb Larochkin"
}