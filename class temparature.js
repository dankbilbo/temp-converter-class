class Temparature{
    constructor(tempC){
        this.tempC = tempC;
    }
    convertTempF(){
        return this.tempC * 9 / 5 + 32;
    }
    convertTempK(){
        return this.tempC + 273.15;
    }
}
let tempC = new Temparature(+prompt("Nhap do C"));
let tempF = tempC.convertTempF();
let tempK = tempC.convertTempK();
alert(`${tempC} do C bang ${tempF} do F hoac ${tempK} do K`);