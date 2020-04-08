
<app-header (selectedlayout)="gridLayout($event)" (uploadimage)="saveImages()" ng-class="mat-elevation-z6"></app-header>

<div class="container-fluid">
	<div class="clearfix"></div>


	<div class="row">
	
<!-- 		<div class="border text-center col-md-4 inline-block border-warning pb-3 h-100 m-auto w-30" *ngFor="glayout of layouTemplate; let i = index;">
			<p>Grid title #{{ i+1 }}</p>
			<label class="file" for="file-1">
				<input 
					(change)="onFileSelected($event, i)" 
					name="file-{{ i }}[]" 
					id="file-{{ i }}" 
					type="file" 
					aria-label="Select File"
				/>
				<span class="file-select"></span>

			</label>
			<div class="image-preview overflow-hidden">
              <img [src]="makeURL(i)" height="300" class="img text-center" layout-file />       
          	</div>
		</div>
 -->
<!-- 
		<mat-grid-list [cols]="layouTemplate.length" rowHeight="300px" class="m-auto w-75">
		  <mat-grid-tile 
		  	class=""
		  	*ngFor="glayout of layouTemplate; let i = index;" 
	        [colspan]="tileColspan(i)" 
	        [rowspan]="tileRowSpan(i)"
	      >

	      	<mat-grid-tile-header>GRID ITEM {{ i }}</mat-grid-tile-header>

	      	<div class="">
      			<img [src]="makeURL(i)" class="img text-center rounded" layout-file />
		      	<hr>
	      		<input type="file" name="file-{{ i }}[]" id="file-{{ i }}" aria-label="Browse a file" />
      		</div>
	      </mat-grid-tile>
		</mat-grid-list>	 -->
		<div class="container">
<!-- 					<mat-grid-list [cols]="layouTemplate.length" rowHeight="300px" class="border-warning">
			
						<mat-grid-tile class="inline-block border-warning" role="list-item" *ngFor="glayout of layouTemplate; let i = index;" [colspan]="tileColspan(i)" [rowspan]="tileRowSpan(i)">
							
							<mat-grid-tile-header style="cursor:pointer;">
								<div style="cursor:pointer;position: relative; border: 1px solid red; width: 100%; height: 30px; line-height: 30px; text-align: center;" > 
								  Select file
								  <input type="file" style="cursor:pointer;opacity: 0.0; position: absolute; top:0; left: 0; bottom: 0; right:0; width: 100%; height:100%;" (change)="onFileSelected($event, i)" />
								</div>
							</mat-grid-tile-header>


							<div class="img upoad-image-preview object-fit_fill">
								<img [src]="makeURL(i)" alt="" style="max-width: 100%;" class="object-fit_cover" layout-fill />
							</div>


							<mat-grid-tile-footer>
								<label for="file-{{ i }}" class="text-center" *ngIf="this.selecetdFiles[i]">Hello{{ this.selecetdFiles[i]["file_name"] }}</label>
							</mat-grid-tile-footer>
						</mat-grid-tile>


					</mat-grid-list> -->

	<div [ngClass]="getGridClasses()" id="my-material-replacement-grid-list" class="grid-list" *ngIf="this.layouTemplate.length > 0">

		<!-- // Loop through the selecetd gid layout settings -->

		<div class="grid-item" *ngFor="glayout of layouTemplate; let j = index;">
			<div class="grid-item-header">
				<p>This is a header</p>
			</div>
			<!-- //#end grid-item-header -->
			<img [src]="makeURL(j)" alt="image-preview" />
			<div class="grid-item-footer">
				This is a footer
			</div>
			<!-- //#end grid-item-footer -->
		</div>
		<!-- //#end grid-item -->

	</div>
	<!-- //#end grid-list -->

	<!-- <main [ngClass]="getGridClasses()">
  <a href="#">
    <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A dog gazing at the sky and at a promising future. Or a nearby squirrel." />
  </a>
  <a href="#">
    <img src="https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="A bulldog with a lot of moxie" />
  </a>

</main> -->
		</div>
<!-- 
    <mat-grid-list [cols]="this.layouTemplate.length"  role="list" rowHeight="300px" ng-class="w-75">
    		<mat-grid-tile overflow="hidden" role="list-item" *ngFor="glayout of layouTemplate; let i = index;" [colspan]="tileColspan(i)" [rowspan]="tileRowSpan(i)">

			    <mat-grid-tile-header>
		        <label for="file-{{ i }}">GRID ITEM {{ i }}</label>
			    </mat-grid-tile-header>
		      	
		      		<img [src]="makeURL(i)" alt=""  layout-fill />
		      	
			  	<mat-grid-tile-footer>
			  	</mat-grid-tile-footer>
			  		<input type="file" (change)="onFileSelected($event, i)" name="file-{{ i }}">

        </mat-grid-tile>
    </mat-grid-list> -->	
	</div>
</div>

<app-footer></app-footer>


<!-- 
    <mat-grid-list [cols]="this.layouTemplate.length"  role="list" rowHeight="300px" ng-class="w-75">
    		<mat-grid-tile overflow="hidden" role="list-item" *ngFor="glayout of layouTemplate; let i = index;" [colspan]="tileColspan(i)" [rowspan]="tileRowSpan(i)">

			    <mat-grid-tile-header>
		        <label for="file-{{ i }}">GRID ITEM {{ i }}</label>
			    </mat-grid-tile-header>
		      	
		      		<img [src]="makeURL(i)" alt=""  layout-fill />
		      	
			  	<mat-grid-tile-footer>
			  	</mat-grid-tile-footer>
			  		<input type="file" (change)="onFileSelected($event, i)" name="file-{{ i }}">

        </mat-grid-tile>
    </mat-grid-list>	
	 -->
