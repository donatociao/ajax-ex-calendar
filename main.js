$(document).ready(function() {
  //imposto data di partenza
  var date = '2018-01-01';
  //Salvo oggetto mese corrente in una variabile
  var moment_date = moment(date);
  //salvo anno, mese e giorni del mese corrente in variabili
  var anno = moment_date.format('YYYY');
  var days = moment_date.daysInMonth();
  var mese = moment_date.format('MMMM');
  //variabile di appoggio per il controllo del mese
  var d = 1;
  //appendo mese
  $('#mese').append(mese + ' ' + anno);
  //salvo il numero di giorni del mese corrente
  days = moment_date.daysInMonth();
  //appendo i giorni del mese
  for (var i = 1; i <= days; ++i) {
    $('#giorni').append('<li data-day='+ i + '>' + i + ' ' + mese + '</li>')
  }

  //interrogo API
  $.ajax({
    url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018",
    type: "GET",
    data: {
      //Imposto valori interrogazione
      'month': d - 1
    },
    success: function(risposta){
      //imposto variabile con la risposta generata
      var festemesecorrente = risposta.response;
      console.log(festemesecorrente);

      //controllo le festività nel mese corrente
      for (var i = 0; i < festemesecorrente.length; ++i) {
        var nomefesta = festemesecorrente[i].name;
        var datafesta = festemesecorrente[i].date;
        var dataarray = datafesta.split('-');
        var giorno = dataarray.slice(2, 3);
        var giornonum = parseInt(giorno);

        //eseguo controllo e cambio giorno
        $('ul li').each(function()  {
          if ($(this).attr('data-day') == giornonum) {
            $(this).text(nomefesta);
            $(this).addClass('festa');
          };
        });

      };

      //indico il codice da clonare
      // var codetoclone = $('#template').html();
      //imposto funzione compilatore
      // var template = Handlebars.compile(codetoclone);
      //dichiaro variabile che definisce i valori da cercare per creare un giocatore
      // var festemese;
      //dichiaro variabile per appendere il codice generato
      // var html;
      // html = template(player) ;
      // $('.container').append(html);
    },
    error: function(){
      alert("Chiamata fallita!!!");
    }
  });

  //definisco funzione per andare avanti con i mesi
  $('#next').click(function() {
    //svuoto mese e giorni
    $('#mese').empty();
    $('#giorni').empty();

    //definisco i casi dello switch
    switch (d) {
      case 12:
        date = '2018-12-01';
        alert('Anno finito');
        break;
      default:
        ++d;
    };

    //Imposto data di partenza
    date = '2018-0' + d + '-01';
    moment_date = moment(date);

    //salvo il nome del mese in una variabile
    mese = moment_date.format('MMMM');

    //appendo mese
    $('#mese').append(mese + ' ' + anno);

    //salvo il numero di giorni del mese corrente
    days = moment_date.daysInMonth();
    console.log(days);

    //appendo i giorni del mese
    for (var i = 1; i <= days; ++i) {
      $('#giorni').append('<li data-day='+ i + '>' + i + ' ' + mese + '</li>');
    };

    $.ajax({
      url: "https://flynn.boolean.careers/exercises/api/holidays?year=2018",
      type: "GET",
      data: {
        //Imposto valori interrogazione
        'month': d - 1
      },
      success: function(risposta){
        console.log(d);
        //imposto variabile con la risposta generata
        var festemesecorrente = risposta.response;
        console.log(festemesecorrente);

        //controllo le festività nel mese corrente
        for (var i = 0; i < festemesecorrente.length; ++i) {
          var nomefesta = festemesecorrente[i].name;
          console.log(nomefesta);
          var datafesta = festemesecorrente[i].date;
          console.log(datafesta);
          var dataarray = datafesta.split('-');
          console.log(dataarray);
          var giorno = dataarray.slice(2, 3);
          var giornonum = parseInt(giorno);
          console.log(giornonum);

          //eseguo controllo e cambio giorno
          $('ul li').each(function()  {
            if ($(this).attr('data-day') == giornonum) {
              $(this).text(nomefesta);
              console.log($(this).text(nomefesta))
              $(this).addClass('festa');
            };
          });

        };

        //indico il codice da clonare
        // var codetoclone = $('#template').html();
        //imposto funzione compilatore
        // var template = Handlebars.compile(codetoclone);
        //dichiaro variabile che definisce i valori da cercare per creare un giocatore
        // var festemese;
        //dichiaro variabile per appendere il codice generato
        // var html;
        // html = template(player) ;
        // $('.container').append(html);
      },
      error: function(){
        alert("Chiamata fallita!!!");
      }
    });
  });

  $('#prev').click(function() {
    $('#mese').empty();
    $('#giorni').empty();
    //definisco i casi dello switch
    switch (d) {
      case 1:
        date = '2018-01-01';
        alert('Puoi navigare solo il 2018');
        break;
      default:
        --d;
    };
    //Imposto data di partenza
    date = '2018-0' + d + '-01';
    moment_date = moment(date);

    //salvo il nome del mese in una variabile
    mese = moment_date.format('MMMM');

    //appendo mese
    $('#mese').append(mese + ' ' + anno);

    //salvo il numero di giorni del mese corrente
    days = moment_date.daysInMonth();
    console.log(days)

    //appendo i giorni del mese
    for (var i = 1; i <= days; ++i) {
      $('#giorni').append('<li data-day='+ i + '>' + i + ' ' + mese + '</li>');
    }
  });
});
