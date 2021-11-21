// asal mı değil mi?
function asalmi(...sayilar) {
    for (let i = 0; i< sayilar.length; i++) {
        let asal=0;
        for (let a = 2; a <= sayilar[i]; a++) {
            if(sayilar[i] % a == 0){
                asal++;
            }
        }
        if(asal == 1){
            console.log(sayilar[i] + " asal sayıdır")
        }
    }
}
asalmi(2,3,6,8,9);

// arkadaş sayimi ?

function friendNumber(number1,number2) {
    let total1 = 0;
    let total2 = 0;

    for (let i = 1; i < number1; i++) {
        if(number1 % i == 0){
            total1 = total1 + i;
        }
    }

    for (let a = 1; a < number2; a++) {
        if(number2 % a == 0){
            total2 = total2 + a;
        }
    }

    if(total1 == number2 && total2 == number1){
        console.log(number1 + " and " + number2 + " arkadaş sayıdır " )
    }
    else
        console.log("arkadaş sayı değildir")
}

friendNumber(220,284);

//1000 e kadar ki mükemmel sayılar

function mükkemmel() {
    let toplam = 0;
    for (let i = 1; i < 1000; i++) {
        toplam = 0;
        for (let a = 1; a < i; a++) {
            if(i % a == 0){
                toplam = toplam + a ;
            }
        }
        if(toplam == i){
            console.log(i + "sayısı mükemmel sayıdır")

        }

    }

}

mükkemmel()

//4- 1000 arası asal sayılar

function aa() {
    let asal2 = 0 ;
    for (let i = 2; i < 1000; i++) {
        asal2 = 0;
        for (let a = 2; a <=i; a++) {
            if(i % a == 0){
                asal2++;
            }
         
        }

        if(asal2 == 1){
            console.log(i + " asal sayidir")
        }
    }
}

aa()
