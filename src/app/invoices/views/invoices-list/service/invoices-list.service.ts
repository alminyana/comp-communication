import { Injectable } from '@angular/core';
import { ResultList } from '../../../../core/interfaces/result-list.interface';
import { Invoice } from '../../../model/invoice.interface';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvoicesRemoteService } from '../../../services/invoices-remote.service';
import { InvoiceFormComponent } from '../../../components/invoice-form/invoice-form.component';

@Injectable({
    providedIn: 'root'
})
export class InvoicesListService {

    private model = new Subject<ResultList<Invoice>>();

    constructor(
        private remoteSrv: InvoicesRemoteService,
        private modalSrv: NgbModal
    ) {}

    public get modelChanges() {
        return this.model.asObservable();
    }

    public getData() {
        const data = this.remoteSrv.getList();
        this.model.next(data);
    }

    public openAddInvoice() {
        const modal = this.modalSrv.open(InvoiceFormComponent);
        modal.result.then((value) => {
            if (value) {
              this.getData();
            }
          });
    }
}
