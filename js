import getListOpp from '@salesforce/apex/CreateOpportunityData.getListOpp';
import { LightningElement, wire } from 'lwc';

export default class OlhaAOportunidadeAiii extends LightningElement {
    opp;
    error;
    columns =[
         {label:'ID', fieldName: 'Id'},
         {label:'Nome', fieldName: 'Name'},
         {label:'Quantidade', fieldName:'Amount'},
         {label:'Fase', fieldName: 'StageName'},
         {label:'Data de Criação', fieldName:'CreatedDate'}
    ]
    @wire(listaaa)wiredAccounts({error, data}){ 
        if(data){
            this.opp = data;
            this.error = undefined;
        }else if(error){
            this.error = error;
            this.opp = undefined;
        }
    }
}
