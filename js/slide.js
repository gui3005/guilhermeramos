$(document).ready(function(){

/*---------------------- HOME -----------------------*/
/*---------------------- SUMIDO -----------------------*/
  $('#home')
    .hide()
    
/*---------------------- APARECE -----------------------*/
  $('#home')
    .slideDown(1500)

/*---------------------- SE CLICAR NO MENU -----------------------*/
  $('#it1')
    .click(function(){
      $('#home').slideUp("slow")
      $('#home').slideDown("slow")
  })



/*---------------------- PORTFOLIO -----------------------*/
/*---------------------- SUMIDO -----------------------*/
  $('#portifolio')
    .hide()

/*---------------------- APARECE -----------------------*/
  $('#portifolio')
    .slideDown(1500)

// ---------------------- SE CLICAR NO MENU -----------------------
  $('#it2')
    .click(function(){
      $('#portifolio').slideUp("slow")
      $('#portifolio').slideDown("slow")
  })



/*---------------------- CONTATOS -----------------------*/
/*---------------------- SUMIDO -----------------------*/
  $('#contato')
    .hide()

/*---------------------- APARECE -----------------------*/
  $('#contato')
    .slideDown(1500)

// ---------------------- SE CLICAR NO MENU -----------------------
  $('#it3')
    .click(function(){
      $('#contato').slideUp("slow")
      $('#contato').slideDown("slow")
  })
})