/* 8. Crea una web en la que cada vez que se accede se muestre una imagen
(de modo aleatorio) de entre 3 posibles. */
var img1 = "https://www.imagenesdeamor.pro/wp-content/uploads/2016/09/imagenes-de-amistad-para-amigos-hombres-4.jpg";
var img2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ6Nsloac4VUvM1Zs4k0GGLn-_7pygGf62IXL_0fwo7H3ivPZb";
var img3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAejRpvcTszUkRh8cvVeilhw0KvrXvQgKsbvdg18exae3yC-yaKA";
var azar = Math.round(Math.random() * (3 - 1) + 1);
switch (azar){
    case 1:
        document.write("<img src="+img1+">");
        break;
    case 2:
        document.write("<img src="+img2+">");
        break;
    case 3:
        document.write("<img src="+img3+">");
        break;
}