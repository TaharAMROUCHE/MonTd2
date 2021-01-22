var Personne = /** @class */ (function () {
    function Personne(nom, prenom, ssn) {
        this.nom = nom;
        this.prenom = prenom;
        this.ssn = ssn;
    }
    Personne.prototype.display = function () {
        return this.nom + " " + this.prenom + " " + this.ssn;
    };
    return Personne;
}());
var personneTable = [];
personneTable.push(new Personne(nom, "AMROUCHE", prenom, "Tahar", ssn, "9865743897"));
personneTable.map(function (personne) {
    console.log(personne.display());
});
