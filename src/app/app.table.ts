import { Component } from '@angular/core';
     
@Component({
    selector: 'table-app',
    template: `<div class="table"> 
    	<table class="table">
        	<thead>
        		<tr>
	            	    <th>X</th>
        	            <th>Y</th>
                	    <th>R</th>
			    <th>Result</th>
        	            <th>Time</th>
	                </tr>
	        </thead>
        	<tbody>
        		<tr>
	                    <td>1</td>
        	            <td>2</td>
                	    <td>3</td>
			    <td>4</td>
        	            <td>5</td>
	                </tr>
        	</tbody>
        </table>		
        </div>`,
    styleUrls: ['./css/app.table.css']
})


export class TableComponent { 
    
}