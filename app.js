
(function() {
  var app = angular.module('myApp', [ 'ngResource' ]);
  
//   app.factory('Country', function( $resource ) {
// 	      return $resource("http://localhost:3000/countries");
// 		
// 	    });
    
  app.controller("CountriesController", function() {
	
	  this.countries = cou;
	  this.cities = ci;

	  this.showId = function(id){
	    var list = "Cities: ";
	    this.cities.forEach(function(item,i,ci)  {
	      
	      if(item.country_id == id) {
		list = list + " "+item.title;
	      }
	    });
	    alert(list); 
	  }
	
  });
  
  var cou = [
{
"id": 1, 
"title":"United Kingdom",
"text":"The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign state in Europe."
},
{
"id": 2, 
"title":"France",
"text":"France, officially the French Republic (French: R\u00e9publique fran\u00e7aise), is a unitary sovereign state comprising territory in western Europe and several overseas regions and territories."
},
{
"id": 3, 
"title":"Spain",
"text":"Spain (Spanish: Espa\u00f1a), officially the Kingdom of Spain (Spanish: Reino de Espa\u00f1a), is a sovereign state located on the Iberian Peninsula in southwestern Europe."
},
{
"id": 4, 
"title":"Germany",
"text":"Germany, officially the Federal Republic of Germany (German: Bundesrepublik Deutschland), is a federal parliamentary republic in western-central Europe."
}
];

  var ci = [
{
"id": 1, 
"country_id": 1, 
"title": "London", 
"desc": ""
},
{
"id": 2, 
"country_id": 1, 
"title": "Liverpool", 
"desc": ""
},
{
"id": 3, 
"country_id": 2, 
"title": "Paris", 
"desc": "Go to Paris" 
},
{
"id": 4, 
"country_id": 3, 
"title": "Madrid", 
"desc": "" 
},
{
"id": 5, 
"country_id": 4, 
"title": "Berlin", 
"desc": "" 
},
{
"id": 6, 
"country_id": 4, 
"title": "Munich", 
"desc": "" 
},
{
"id": 7, 
"country_id": 4, 
"title": "Hamburg", 
"desc": "" 
}
];

})();
