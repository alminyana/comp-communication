import { Component, OnInit } from '@angular/core';
import { InvoicesListService } from './service/invoices-list.service';
import { ResultList } from '../../../core/interfaces/result-list.interface';
import { Invoice } from '../../model/invoice.interface';

@Component({
  selector: 'app-invoices-list',
  templateUrl: './invoices-list.component.html',
  styleUrls: ['./invoices-list.component.scss']
})
export class InvoicesListComponent implements OnInit {

  public model: ResultList<Invoice>;

  constructor(private service: InvoicesListService) {
    this.service.modelChanges.subscribe( (model) => {
      this.model = model;
      console.log(model);
    });
  }

  ngOnInit() {
    this.service.getData();
  }

}
