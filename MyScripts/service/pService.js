app.service("productsService", function ($http) {
    var uri="http://190.109.185.138:8034";
    this.get = function (id) {
        var req = $http.get(uri+'/api/products/' + id);
        return req;
    };
    this.getAll = function () {
        var req = $http.get(uri+'/api/products');
        return req;
    };
    this.post = function (product) {
        var req = $http.post(uri+'/api/products', product);
        return req;
    };
});
app.service("contactosService", function ($http) {
    var uri="http://190.109.185.138:8034";
    //var uri="http://localhost:50252";
    this.get = function (id) {
        var req = $http.get(uri+'/api/contactos/' + id);
        return req;
    };
    this.getAll = function () {
        var req = $http.get(uri+'/api/contactos');
        return req;
    };
    this.post = function (contact) {
        var req = $http.post(uri+'/api/contactos', contact);
        return req;
    };
    this.put = function (id,contact) {
        var request = $http({
            method: "put",
            url: uri+'/api/contactos/'+ id,
            data: contact
        });
        return request;
    };
});