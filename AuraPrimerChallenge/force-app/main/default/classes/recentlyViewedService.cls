public with sharing class recentlyViewedService {
    public recentlyViewedService() {

    }

    @AuraEnabled
    public static sObject returnRecentId(){
        sObject recentlyViewObject = [SELECT Id, LastViewedDate, Type, Name 
                                        FROM RecentlyViewed 
                                        WHERE Type 
                                        IN ('Account','Contact','Opportunity') 
                                        ORDER BY LastViewedDate DESC LIMIT 1];

        return recentlyViewObject;
    }
}