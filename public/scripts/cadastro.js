// alert("teste")
import { jsPDF } from "jspdf";

const doc = new jsPDF()
const conteudo = document.querySelector('#ttt');
const botaoList = document.querySelector('.btt');

var elementHandler = {
  '#ignorePDF': function (element, renderer) {
    return true;
  }
};
var source = window.document.getElementsByTagName("body")[0];

botaoList.addEventListener('click', ()=> {
  doc.fromHTML(
    source,
    15,
    15,
    {
      'width': 180,'elementHandlers': elementHandler
    });

doc.output("dataurlnewwindow");
})