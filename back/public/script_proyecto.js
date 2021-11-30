var ngApp = angular.module('myApp', []);

ngApp.controller('myController', function($scope, $http) {

    $scope.getData = function() {
        return 'qubernet';
    }

    $scope.registrarUsuario = function() {
        $http
            .post("http://localhost:900/upload", $scope.formData)
            .then(function successCallback(response) {
                // $scope.formData = {};
                $scope.msj = response.data;
                console.log(response);
            });
        document.getElementById("cedula").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("celular").value = "";
        document.getElementById("user").value = "";
        document.getElementById("clave").value = "";
        };
        
        $scope.RegistrarInmueble = function() {
            $scope.msj = "cargando...";
            $http.post("http://localhost:900/insertarInmueble", $scope.formData)
                .then(function successCallback(response) {
                    $scope.msj = response.data;
                    console.log(response);
                });
            document.getElementById("Nombre").value = "";
            document.getElementById("Tipo").value = "";
            document.getElementById("Barrio").value = "";
            document.getElementById("Transaccion").value = "";
            document.getElementById("Banios").value = "";
            document.getElementById("habitaciones").value = "";
            document.getElementById("Estrato").value = "";
            document.getElementById("Precio").value = "";
        };

        $scope.RegistrarUbi = function() {
            $scope.msj = "cargando...";
            $http.post("http://localhost:900/insertarUbicacion", $scope.formData)
                .then(function successCallback(response) {
                    $scope.msj = response.data;
                    console.log(response);
                });
            document.getElementById("Zona").value = "";
            document.getElementById("Barrio").value = "";
        };
});


window.onload = function() {
    //ACTIVAR CUANDO SE PROGRAME ANGULAR
    var appElement = document.querySelector('[ng-controller=myController]');
    var $scope = angular.element(appElement).scope();
    document.getElementById("verificar").addEventListener("click", function() {
        let cedula = document.getElementById("cedula").value;
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let correo = document.getElementById("correo").value;
        let celular = document.getElementById("celular").value;
        let user = document.getElementById("user").value;
        let clave = document.getElementById("clave").value;
        let validacion = true;
        let msg = "Errores: " + "\n";
        let esp_cedula = /^[0 -9]{10}$/;
        if (cedula.length == 0) {
            msg += "campo de cedula vacio " + "\n";
            validacion = false;
        } else if (!esp_cedula.test(cedula)) {
            msg += "El campo cedula debe llevar 10 numeros solamente" + "\n";
            validacion = false;
        }
        let esp_nombre_apellido = /^[a-z ,.'-]$/;
        if (!esp_nombre_apellido.test(nombre) || !esp_nombre_apellido.test(apellido)) {
            msg += "El campo nombre y apellido solo puede tener letras" + "\n";
            validacion = false;
        } else if (nombre.length == 0 || apellido.length == 0) {
            msg += "El campo nombre o apellido esta vacio" + "\n";
            validacion = false;
        }
        let esp_corre = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!esp_corre.test(correo)) {
            msg += "El correo no es valido revise e ingrese nuevamente" + "\n";
            validacion = false;
        } else if (correo.length == 0) {
            msg += "El campo correo esta vacio" + "\n";
            validacion = false;
        }
        if (!esp_cedula.test(celular)) {
            msg += "El campo celular solo puede tener 10 numeros" + "\n";
            validacion = false;
        } else if (celular.length == 0) {
            msg += "El campo celular esta vacio" + "\n";
            validacion = false
        }
        if (!esp_corre.test(user)) {
            msg += "Revise los caracteres ingresados al usuario" + "\n";
            validacion = false;
        } else if (user.length == 0) {
            msg += "El campo usuario esta vacio" + "\n";
            validacion = false;
        }
        if (!esp_corre.test(clave)) {
            msg += "Revise los caracteres ingresados a la contraseña" + "\n";
            validacion = false;
        } else if (clave.length == 0) {
            msg += "El campo contraseña esta vacio" + "\n";
            validacion = false;
        }
        if (validacion == true) {
            alert("Todos los campos han sido ingresados correctamente")
        } else {
            alert(msg)
        }
        console.log($scope.getData());
    })
    document.getElementById("limpiar").addEventListener("click", function() {
        document.getElementById("cedula").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("apellido").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("celular").value = "";
        document.getElementById("user").value = "";
        document.getElementById("clave").value = "";
    })
}