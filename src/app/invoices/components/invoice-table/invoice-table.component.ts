import { Component, OnInit } from '@angular/core';
import { ResultList } from '../../../core/interfaces/result-list.interface';
import { Invoice } from '../../model/invoice.interface';
import { ListComponent } from '../../../core/types/list.component';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.scss']
})
export class InvoiceTableComponent extends ListComponent<ResultList<Invoice>> implements OnInit {

  ngOnInit() {
  }

}
