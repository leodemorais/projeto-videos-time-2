//Validação do Formulário de Contato//
var formC=document.forms.formContato
document.querySelector('#envia').onclick=function(){
    if(formC.nomeContato.value == ""){
        alert("Preencha o nome!")
    }else if(formC.emailContato.value == ""){
        alert("Preencha o email!")
    }else if(formC.assuntoContato.value == ""){
        alert("Informe o Assunto!")
    }else if(formC.assuntoContato.value == ""){
    }else if(formC.comentarios.value == ""){
        alert("Preencha um comentário")}
    else{
        formC.submit ();
    }
}
//Fim da Validação do Formulário de Contato//
function HabiDsabi() {
    if (document.getElementById('habi').checked == true) {
        document.querySelector('#envia').onclick=function(){
        let idChamada=parseInt (Math.floor(Math.random() * (100000 - 9999) + 9999))
        let dados=[["Nome: "+formC.nomeContato.value],["Email: "+formC.emailContato.value],["Telefone: "+formC.telefoneContato.value],["Assunto: "+formC.assuntoContato.value]]
        localStorage.setItem("Chamada: "+idChamada,dados)
        console.log(dados[[0]])
        formC.submit()
      }
    }
    if (document.getElementById('habi').checked == false) {

    }
  }
 