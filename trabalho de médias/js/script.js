function calcularMedia(){

    
    var nome1, n1l1, n2l1, n3l1, n4l1, media1 = 0;

    nome1 = document.getElementById("nome1");
    n1l1 = parseFloat(document.getElementById("nota1_line1").value);
    n2l1 = parseFloat(document.getElementById("nota2_line1").value);
    n3l1 = parseFloat(document.getElementById("nota3_line1").value);
    n4l1 = parseFloat(document.getElementById("nota4_line1").value);

    media1 = (n1l1 + n2l1 + n3l1 + n4l1) / 4;

    document.getElementById("media1").innerHTML = parseFloat(media1);

    if(media1 >= 70){
        document.getElementById("situacao1").innerHTML = "Aprovado"
        var media1 = document.getElementById("media1")
        media1.style.backgroundColor = "#A8A8A8"
        var situacao1 = document.getElementById("situacao1")
        situacao1.style.backgroundColor = "#A8A8A8"
    }
    else if(media1 >= 50 && media1 < 70){
        document.getElementById("situacao1").innerHTML = "Recuperação"
        var media1 = document.getElementById("media1")
        media1.style.backgroundColor = "yellow"
        var situacao1 = document.getElementById("situacao1")
        situacao1.style.backgroundColor = "yellow"
    }
    else{
        document.getElementById("situacao1").innerHTML = "Reprovado"
        var media1 = document.getElementById("media1")
        media1.style.backgroundColor = "red"
        var situacao1 = document.getElementById("situacao1")
        situacao1.style.backgroundColor = "red"
    }

    var nome2, n1l2, n2l2, n3l2, n4l2, media2 = 0;

    nome2 = document.getElementById("nome2");
    n1l2 = parseFloat(document.getElementById("nota1_line2").value);
    n2l2 = parseFloat(document.getElementById("nota2_line2").value);
    n3l2 = parseFloat(document.getElementById("nota3_line2").value);
    n4l2 = parseFloat(document.getElementById("nota4_line2").value);

    media2 = (n1l2 + n2l2 + n3l2 + n4l2) / 4;

    document.getElementById("media2").innerHTML = parseFloat(media2);

    if(media2 >= 70){
        document.getElementById("situacao2").innerHTML = "Aprovado"
        var media2 = document.getElementById("media2")
        media2.style.backgroundColor = "#A8A8A8"
        var situacao2 = document.getElementById("situacao2")
        situacao2.style.backgroundColor = "#A8A8A8"
    }
    else if(media2 >= 50 && media2 < 70){
        document.getElementById("situacao2").innerHTML = "Recuperação"
        var media2 = document.getElementById("media2")
        media2.style.backgroundColor = "yellow"
        var situacao2 = document.getElementById("situacao2")
        situacao2.style.backgroundColor = "yellow"
    }
    else{
        document.getElementById("situacao2").innerHTML = "Reprovado"
        var media2 = document.getElementById("media2")
        media2.style.backgroundColor = "red"
        var situacao2 = document.getElementById("situacao2")
        situacao2.style.backgroundColor = "red"
    }

    var nome3, n1l3, n2l3, n3l3, n4l3, media3 = 0;

    nome3 = document.getElementById("nome3");
    n1l3 = parseFloat(document.getElementById("nota1_line3").value);
    n2l3 = parseFloat(document.getElementById("nota2_line3").value);
    n3l3 = parseFloat(document.getElementById("nota3_line3").value);
    n4l3 = parseFloat(document.getElementById("nota4_line3").value);

    media3 = (n1l3 + n2l3 + n3l3 + n4l3) / 4;

    document.getElementById("media3").innerHTML = parseFloat(media3);

    if(media3 >= 70){
        document.getElementById("situacao3").innerHTML = "Aprovado"
        var media3 = document.getElementById("media3")
        media3.style.backgroundColor = "#A8A8A8"
        var situacao3 = document.getElementById("situacao3")
        situacao3.style.backgroundColor = "#A8A8A8"
    }
    else if(media3 >= 50 && media3 < 70){
        document.getElementById("situacao3").innerHTML = "Recuperação"
        var media3 = document.getElementById("media3")
        media3.style.backgroundColor = "yellow"
        var situacao3 = document.getElementById("situacao3")
        situacao3.style.backgroundColor = "yellow"
    }
    else{
        document.getElementById("situacao3").innerHTML = "Reprovado"
        var media3 = document.getElementById("media3")
        media3.style.backgroundColor = "red"
        var situacao3 = document.getElementById("situacao3")
        situacao3.style.backgroundColor = "red"
    }

    var nome4, n1l4, n2l4, n3l4, n4l4, media4 = 0;

    nome4 = document.getElementById("nome4");
    n1l4 = parseFloat(document.getElementById("nota1_line4").value);
    n2l4 = parseFloat(document.getElementById("nota2_line4").value);
    n3l4 = parseFloat(document.getElementById("nota3_line4").value);
    n4l4 = parseFloat(document.getElementById("nota4_line4").value);

    media4 = (n1l4 + n2l4 + n3l4 + n4l4) / 4;

    document.getElementById("media4").innerHTML = parseFloat(media4);

    if(media4 >= 70){
        document.getElementById("situacao4").innerHTML = "Aprovado"
        var media4 = document.getElementById("media4")
        media4.style.backgroundColor = "#A8A8A8"
        var situacao4 = document.getElementById("situacao4")
        situacao4.style.backgroundColor = "#A8A8A8"
    }
    else if(media4 >= 50 && media4 < 70){
        document.getElementById("situacao4").innerHTML = "Recuperação"
        var media4 = document.getElementById("media4")
        media4.style.backgroundColor = "yellow"
        var situacao4 = document.getElementById("situacao4")
        situacao4.style.backgroundColor = "yellow"
    }
    else{
        document.getElementById("situacao4").innerHTML = "Reprovado"
        var media4 = document.getElementById("media4")
        media4.style.backgroundColor = "red"
        var situacao4 = document.getElementById("situacao4")
        situacao4.style.backgroundColor = "red"
    }

    var nome5, n1l5, n2l5, n3l5, n4l5, media5 = 0;

    nome5 = document.getElementById("nome5");
    n1l5 = parseFloat(document.getElementById("nota1_line5").value);
    n2l5 = parseFloat(document.getElementById("nota2_line5").value);
    n3l5 = parseFloat(document.getElementById("nota3_line5").value);
    n4l5 = parseFloat(document.getElementById("nota4_line5").value);

    media5 = (n1l5 + n2l5 + n3l5 + n4l5) / 4;

    document.getElementById("media5").innerHTML = parseFloat(media5);

    if(media5 >= 70){
        document.getElementById("situacao5").innerHTML = "Aprovado"
        var media5 = document.getElementById("media5")
        media5.style.backgroundColor = "#A8A8A8"
        var situacao5 = document.getElementById("situacao5")
        situacao5.style.backgroundColor = "#A8A8A8"
    }
    else if(media5 >= 50 && media5 < 70){
        document.getElementById("situacao5").innerHTML = "Recuperação"
        var media5 = document.getElementById("media5")
        media5.style.backgroundColor = "yellow"
        var situacao5 = document.getElementById("situacao5")
        situacao5.style.backgroundColor = "yellow"
    }
    else{
        document.getElementById("situacao5").innerHTML = "Reprovado"
        var media5 = document.getElementById("media5")
        media5.style.backgroundColor = "red"
        var situacao5 = document.getElementById("situacao5")
        situacao5.style.backgroundColor = "red"
    }
}