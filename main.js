$(document).ready(function() {
  //dichiaro le variabili che mi servono
  var date = '2018-01-01';
  //Salvo oggetto mese corrente in una variabile
  var moment_date = moment(date);
  //salvo anno, mese e giorni del mese
  var anno = moment_date.format('YYYY');
  var days = moment_date.daysInMonth();
  var mese = moment_date.format('MMMM');
  //variabile di appoggio per il controllo del mese
  var d = 1;
  //appendo mese
  $('#mese').append(mese + ' ' + anno);
  //salvo il numero di giorni del mese corrente
  days = moment_date.daysInMonth();
  console.log(days)

  //appendo i giorni del mese
  for (var i = 1; i <= days; ++i) {
    $('#giorni').append('<li>' + i + ' ' + mese + '</li>')
  }

  //definisco funzione per andare avanti con i mesi
  $('#next').click(function() {
    $('#mese').empty();
    $('#giorni').empty();
    //definisco i casi dello switch
    switch (d) {
      case 12:
        date = '2018-12-01';
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
      $('#giorni').append('<li>' + i + ' ' + mese + '</li>')
    }
  });

  $('#prev').click(function() {
    $('#mese').empty();
    $('#giorni').empty();
    //definisco i casi dello switch
    switch (d) {
      case 1:
        date = '2018-01-01';
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
      $('#giorni').append('<li>' + i + ' ' + mese + '</li>')
    }
  });
});
