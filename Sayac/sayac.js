const sayac = {
    deger : 0,
    arttir() {
        this.deger++;
        console.log(`Sayac ${this.deger}`);
    },

    azalt() {
        this.deger--;
        console.log(`Sayac ${this.deger}`);
    },

    sifirla () {
        this.deger = 0;
        console.log(`Sayac ${this.deger}`);
    },
}

sayac.arttir(); // Sayac 1
sayac.arttir(); // Sayac 2
sayac.arttir(); // Sayac 3
sayac.arttir(); // Sayac 4
sayac.arttir(); // Sayac 5
sayac.azalt(); // Sayac 4
sayac.sifirla(); // Sayac 0    
