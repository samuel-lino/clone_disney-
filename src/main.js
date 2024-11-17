document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-selection]');
    const heroselect = document.querySelector('.hero');
    const alturahero = heroselect.clientHeight;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function(){
        if(this.window.scrollY < alturahero){

            header.classList.add('header--is-hidden');
        }
        else{
            header.classList.remove('header--is-hidden');
        }
    })


    //abas do shows
    buttons.forEach(button =>{
        button.addEventListener('click', function(){
            remove_classe_active();

            let text_display = button.getAttribute('data-tab-button');// pega o valor do atributo
            button.classList.add('shows__tabs__button--active'); // adiciona a classe ativa
            const new_display = document.querySelector(`[data-tab-id=${text_display}]`);// busca o display correspondente ao button
            new_display.classList.add('shows__list--active'); // adiciona a classe ativa
        })
    });

    //sanfona do faq
    questions.forEach(question=>{
        question.addEventListener('click', function() {  
            const questionparent = question.parentElement
            if(questionparent.classList.contains('faq__questions__item--open')){
                questionparent.classList.remove('faq__questions__item--open');
            }
            else{
                questionparent.classList.add('faq__questions__item--open');
            }
        });
    });
    //renove classe active do shows
    function remove_classe_active(){
        const atual = document.querySelector('.shows__tabs__button--active');//pega o button atual com a classe
        atual.classList.remove('shows__tabs__button--active');// remove a classe do button
        const display_atual = document.querySelector('.shows__list--active');// busca a tag tiva
        display_atual.classList.remove('shows__list--active');//remove a classe da tag ativa
    }
}) 