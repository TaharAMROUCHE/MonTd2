class Personne{
	constructor(public nom:string, public prenom:string, public ssn:string) {
	}
	display():any{
		return this.nom+ " " + this.prenom+ " " + this.ssn+ " " + (this.controlssn() ? "valid" : "No valid");
}

controlssn():boolean{
	return false;
}
let personneTable: Array<Personne>= [];

personneTable.push(new Personne(nom:"AMROUCHE", prenom:"Tahar",ssn:"9865743897"));

personneTable.map((personne:Personne)=>{
console.log(personne.display())
}
