import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DatapageService } from '../_services/datapage.service';
import { Subscription, Observable } from 'rxjs';
import { HttpParams, HttpHeaders } from '@angular/common/http';
import { OpenAssignmentService } from '../_messages/openassignment.service';
import { RefreshWorkListService } from '../_messages/refreshworklist.service';






@Component({
  selector: 'app-unifiedtasklist',
  templateUrl: './unifiedtasklist.component.html',
  styleUrls: ['./unifiedtasklist.component.scss']
})
export class UnifiedtasklistComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  unifiedtasklist$: MatTableDataSource<any>;
  works$: Object;
  headers: any;

  message: any;
  subscription: Subscription;

  displayedColumns = ['pxRefObjectInsName', 'pyAssignmentStatus', 'pyLabel', 'pxUrgencyAssign'];



  constructor(private datapage: DatapageService,
              private oaservice: OpenAssignmentService,
              private rwlservice: RefreshWorkListService) { }

  ngOnInit() {

    this.getunifiedtasklist();

    this.subscription = this.rwlservice.getMessage().subscribe(message => {
      this.message = message;


      if (this.message.unifiedtasklist === 'Work' || this.message.unifiedtasklist === 'unifiedtasklist') {
        this.getunifiedtasklist();

      } else {
        // this.getWorkBaskets(this.message.unifiedtasklist);
      }
    });



  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getunifiedtasklist() {
    const unifiedtasklistParams = new HttpParams()
    .set('UserId', 'SallyJones')
    .set('WorkGroup', 'NewWaveWG');


    this.datapage.getDataPage('D_UnifiedWorkList', unifiedtasklistParams).subscribe(

      response => {
        this.unifiedtasklist$ = new MatTableDataSource<any>(this.getResults(response.body));
        this.headers = response.headers;

        this.unifiedtasklist$.paginator = this.paginator;
        this.unifiedtasklist$.sort = this.sort;

      },
      err => {
        alert('Error form unifiedtasklist:' + err.errors);
      }
    );



  }








  getResults(data) {

    return data.pxResults;
  }

  openAssignment(row) {

    this.oaservice.sendMessage(row.pxRefObjectInsName, row);

  }
}
