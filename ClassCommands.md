/*Cambio global es con "*" para hacer un cambio a todos los elementos HTML*/
/*Para asegurar espacio inicial innecesario es con margin*/
* {

  margin: 0;
  padding: 0;
  box-sizing: border-box;

}

body {

  background: #b3b3b3

}

.header{

  width: 100%;

  /*Display es para posicionar (flex y grif)*/

  display: flex;
  box-shadow: rgba(0,0,0,0.1) 0px 4px 6px -1px;
  height: 150px;

  nav { /*nav = hijo de header*/

    background: aqua;
    max-width: 100px;
    margin: 0 auto; /*Con el auto, el margen es automático*/
    margin: 3px 7px 9px 0;
    ul{
      display: flex;
      margin: 3em 3rem 3px; /*24px no se verá bien en móvil, entonces para texto están las medidas em y rem; rem toma el rute element (html); son medidas relativas, al igual que el porcentaje*/
      justify-content: space-between; /* Para alinear horizontalmente */
      align-items: center; /* Para alinear verticalmente */
      li {
        list-style: none; /* El none ya es para anular característica*/
        a{
          text-decoration: none;
          color:rgb(8, 40, 90); /*Recomendable no un negro tan fuerte*/
          transition: all .3s linear; /* Aplicar transición a todo y que dure 0,3 segundos */
          &:hover{ /* ampersand para concatenar, es como una "a" */
            color: #242424;
          }
        }
      }
    }
    .item{
      margin: 3px 7px 9px 0;
      background: aqua;
      justify-content: space-between; 
      align-items: center; 
    }
  
  }
}