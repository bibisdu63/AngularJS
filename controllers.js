angular.module('app').controller("SearchController", function(){
	var viewModel = this;

    //viewModel.searchInputDepart = '';
    //viewModel.searchInputArrive = '';

    //viewModel.afficher = false;

    viewModel.title = 'Blablacar';
    
    viewModel.searchInputStart = '';
    viewModel.searchInputDestination = '';
    viewModel.searchInputDate = '';
    
    viewModel.matchingTrajets = [];

    viewModel.trajets = [
        {
            depart: 'Beauregard léveque',
	    arrive: 'Saulzet',
            date: '18/05/2015'
        },
         {
            depart: 'Beauregard léveque',
        arrive: 'Saulzet',
            date: '19/05/2015'
        },
         {
            depart: 'Beauregard léveque',
        arrive: 'Saulzet',
            date: '20/05/2015'
        },
         {
            depart: 'Beauregard léveque',
        arrive: 'Saulzet',
            date: '21/05/2015'
        },
        {
	    depart: 'Saulzet',
	    arrive: 'Beauregard léveque',
            date: '19/05/2015'
        },
        {
	    depart: 'Beauregard léveque',
	    arrive: 'Miami',
            date: '20/05/2015'
        },
        {
	    depart: 'Beauregard léveque',
	    arrive: 'Bagdad',
            date: '21/05/2015'
        },
        {
	    depart: 'Beauregard léveque',
	    arrive: 'New York',
            date: '18/05/2015'
        },
        {
	    depart: 'Beauregard léveque',
	    arrive: 'Moscou',
            date: '28/05/2015'
        },
        {
	    depart: 'Beauregard léveque',
	    arrive: 'Genève',
            date: '28/05/2015'
        },
        {
	    depart: 'Beauregard léveque',
	    arrive: 'New York',
            date: '18/05/2015'
        },
        {
	    depart: 'Paris',
	    arrive: 'Fin fond du Cantal',
            date: '18/05/2015'
        },
        {
	    depart: 'Lyon',
	    arrive: 'Lozère',
            date: '18/05/2015'
        },
        {
	    depart: 'Nantes',
	    arrive: 'Montaigue',
            date: '28/05/2015'
        },
        {
	    depart: 'Toulon',
	    arrive: 'Munich',
            date: '17/05/2015'
        },
        {
	    depart: 'Clermont',
	    arrive: 'Poitiers',
            date: '30/05/2015'
        }
    ];

    //viewModel.Afficher = function () {
   // 	viewModel.afficher = true;
   // };

viewModel.fillMatchingTrajets = function () {
        //On vide le tableau de résultats
        viewModel.matchingTrajets.length = 0 ;
        
        viewModel.trajets.forEach(function(trajet) {
            //On vérifie le départ
            var departMatched = false;
            var destinationMatched = false;
            
            if(trajet.depart.toUpperCase().indexOf(viewModel.searchInputStart.toUpperCase()) != -1) {
                departMatched = true ;
            }
            
            if(trajet.arrive.toUpperCase().indexOf(viewModel.searchInputDestination.toUpperCase()) != -1) {
                destinationMatched = true ;
            }
            
            if(departMatched && destinationMatched) {
                viewModel.matchingTrajets.push(trajet);
                console.log("Matched !");
            }
            
        }, this);
        
        
    }

});
