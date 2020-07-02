import { Injectable } from '@angular/core';
import { ResultList } from '../../core/interfaces/result-list.interface';
import { Invoice } from '../model/invoice.interface';

@Injectable({
    providedIn: 'root'
})
export class InvoicesRemoteService {

    private invoiceList: Invoice[] = [];

    getList(): ResultList<Invoice> {
        if (!this.invoiceList || !this.invoiceList.length) {
            const invoice = {
                street: 'Calle Mallorca',
                streetType: 'Avenida',
                municipality: 'Barcelona',
                zipCode: '08008',
                province: 'Toronto'
            };

            this.invoiceList.push(invoice);
        }

        return {list: this.invoiceList};
    }
}
