import { Injectable } from '@angular/core';
import { InvoicesRemoteService } from '../../../services/invoices-remote.service';
import { Invoice } from '../../../model/invoice.interface';

@Injectable({
  providedIn: 'root'
})
export class InvoiceFormService {

  constructor(private readonly remote: InvoicesRemoteService) { }

  saveData(data: Invoice) {
    this.remote.addInvoice(data);
  }
}
