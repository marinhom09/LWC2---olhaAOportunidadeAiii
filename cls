public with sharing class OlhaAOportunidadeAiii {
    
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> listaaa(){
        return [SELECT  Id, Name, Amount, CreatedDate, StageName FROM Opportunity WHERE StageName ='Negotiation/Review' LIMIT 5];
    }
}
