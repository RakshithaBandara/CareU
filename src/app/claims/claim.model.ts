export class Claim{
    public name: string;
    public policyNo: string;
    public dateOfBirth: string;
    public dateOfDeath: string;
    public causeOfDeath: string;
    public claimAmount: number;
    public imagepath: string;

    constructor(name: string, policyNo: string, dateOfBirth: string, dateOfDeath: string, causeOfDeath: string, claimAmount: number, imagepath: string){
        this.name = name;
        this.policyNo = policyNo;
        this.dateOfBirth = dateOfBirth;
        this.dateOfDeath = dateOfDeath;
        this.causeOfDeath = causeOfDeath;
        this.claimAmount = claimAmount;
        this.imagepath = imagepath;
    }
}