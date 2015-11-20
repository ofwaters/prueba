app.controller('contactosController', function ($scope, contactosService) {
    //VistaModelo
    $scope.Contact = {}; //Objeto Actual
    $scope.Contacts = []; //Listado de Objetos
    $scope.editMode = false; // Modo de Edición
    //Cargar los datos
    loadRecords();
    //Function to Reset Scope variables
    function initialize() {
        $scope.Contact = {};
        $scope.Contact.Nombre = 0;
        $scope.Contact.Telefono = "";
    }
    //Function to load all Employee records
    function loadRecords() {
        var promiseGet = contactosService.getAll(); //The Method Call from service
        promiseGet.then(function (pl) {$scope.Contacts = pl.data;},
              function (errorPl) {
                  $log.error('failure loading Contactos', errorPl);
              });
    }
    //Model popup events
    $scope.showadd = function () {
        initialize();
        $scope.editMode = false;
        $('#regModal').modal('show');
    };
    $scope.cancel = function () {
         console.log($scope.editMode);
         if (!$scope.editMode) {
             initialize();
         }
         $('#regModal').modal('hide');
     };
    $scope.get = function () {
         $scope.Contact = this.contact;
         $('#viewModal').modal('show');
     };
    $scope.showconfirm = function () {
         $scope.Product = this.product;
         $('#confirmModal').modal('show');
     };
    $scope.edit = function () {
         $scope.Contact = this.contact;
         $scope.editMode = true;
         $('#regModal').modal('show');
     };
    //Function to Submit the form
    $scope.add = function () {
        var Contacto = {};
        Contacto.Nombre = $scope.Contact.Nombre;
        Contacto.Telefono = $scope.Contact.Telefono;
        var promisePost = contactosService.post(Contacto);
        promisePost.then(function (d) {
            $scope.Contact.Telefono = d.data.Telefono;
            loadRecords();
        }, function (err) {
            alert("Some Error Occured "+ JSON.stringify(err));
        });
    };
    //Function to Cancel Form
    $scope.cancelForm = function () {
        initialize();
    };
    //Functin Para Actualizar
    $scope.update = function () {
        var Contacto = {};
        Contacto.Id = $scope.Contact.Id;
        Contacto.Telefono = $scope.Contact.Telefono;
        Contacto.Nombre = $scope.Contact.Nombre;
        var promisePost = contactosService.put(Contacto.Id,Contacto);
        promisePost.then(function (d) {
            $scope.Contact.Telefono = d.data.Telefono;
            loadRecords();
            alert("Guardó los Datos");
        }, function (err) {
            alert("Some Error Occured "+ JSON.stringify(err));
        });
   }; 
    //Confirmar Para Eliminar
    $scope.showconfirm = function () {
         $scope.Contacto = this.contact;
         if(confirm("Desea Eliminar al Contacto:" +$scope.Contacto.Nombre)){
             alert("Implemente el método para eliminar" );
             //Invocar Servicio de Eliminación
             //Actualizar datos de $scope.Contacts 
         }
     };
});

