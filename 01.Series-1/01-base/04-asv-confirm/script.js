// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Woods programmer');

    do{
        var  userAge = prompt("How old are you?");
        var userGender = prompt("What is your gender?");
        var userTown = prompt("What is the name of your town?");

        var  confirmation = confirm("So you are " + userAge + ", you are a " + userGender + " and you live in " + userTown );
    } while (confirmation != true);
})();