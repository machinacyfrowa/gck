///
/// Autor: Paweł Romanowski 
///

///
/// TRASH
///
$("#leftTrash").click(function(){
    $("#deleteDropdownLeft").prev().remove();
});

$("#rightTrash").click(function(){
    $("#deleteDropdownRight").prev().remove();
});

$("#mainTrash").click(function(){
    $("#deleteDropdownMain").prev().remove();
});
///
/// END TRASH
///




///
/// Main 
///
$( "#deleteImageURL" ).keyup(function() {
    imageExists($( "#deleteImageURL" ).val(), function(exists) {
       if(exists ==true){ 
           $("#mainImage").attr("src",$( "#deleteImageURL" ).val());
           $( "#deleteImageURL").removeClass("is-invalid"); 
        }
       else{
        $( "#deleteImageURL").addClass("is-invalid"); 
       }

    });
});

$( "#deleteImageALT" ).keyup(function() { 
    $("#mainImage").attr("alt",$( "#deleteImageALT" ).val());
});

$("#mainTitle").dblclick(function() {
    if ( !$( "#valueButton" ).length ) {
        var el1 = $("<input></input>").addClass("form-control");
        var el2 = $("<button ></button >").addClass("btn btn-primary");
        el2.text("OK");
        el1.attr('id', 'deleteInput');
        el2.attr('id', 'valueButton');
        $("#mainTitle").append(el1,el2);

        el2.click(function() {
            $("#mainTitle").text(el1.val());
            if( !el1.val().replace(/\s/g, '') ) {
                $("#mainTitle").text("Teatr");
            }
        });
    }
});

function imageExists(url, callback) {
    var img = new Image();
    img.onload = function() { callback(true); };
    img.onerror = function() { callback(false); };
    img.src = url;
}

///
/// END Main 
///

///
/// Example
///
var exampleFirst= ' <div class="repertoire-title"> <h6> <strong>T E A T R</strong> </h6> <h3> <strong>Ut wisi enim ad minim veniam, nostrud.</strong></h3> <br> <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed <br> diam nonummy nibh euismod tincidunt ut laoreet dolore <br> magna aliquam erat volutpat. Ut wisi enim ad minim veniam, <br> quis nostrud. </p> <hr style="border-top: 5px solid black; margin: 2rem 0 3rem 0;"> </div>';
var exampleSecond ='<p>Podobno w życiu najważniejsze są wiara, nadzieja, miłość i… uśmiech. Wszystko to odnajdziecie w spektaklu „Zacznijmy jeszcze raz”. Komedii specjalnie napisanej przez Olę Wolf (autorkę tekstów do telewizyjnego kabaretu Rozmowy w Tłoku z programu „Szymon Majewski Show”) dla dwojga aktorów – Tomasza Sapryka i Aldony Jankowskiej.</p>';
var exampleThird =  '<div class="repertoire-prize" style="text-align: center;"> <h6 class="mt-5" style="letter-spacing: 0.2rem;font-weight: 900;" >NAGRODA PUBLICZNOŚCI 2018</h6> <p>Spektakl „Zacznijmy jeszcze raz” otrzymał Nagrodą Publiczności na 11. Katowickim Karnawale Komedii.</p> <h6 style="letter-spacing: 0.2rem;font-weight: 900;">NAGRODA PUBLICZNOŚCI 2018</h6> <p>Tomasz Sapryk otrzymał Nagrodę Prezydenta Gdyni z okazji Międzynarodowego Dnia Teatru za reżyserię spektaklu „Zacznijmy jeszcze raz”.</p> </div>';
var exampleFourth ='<div class="repertoire-prize" style="text-align: center;"> <hr style="border-top: 2px solid rgba(0, 0, 0, 0.664); margin: 2rem 0 1rem 0;"> <h5>Pamiętajcie – to poker mistrzów aktorstwa, nie wiadomo kto i co ma w kartach… i to jest piękne w tym spektaklu, i to jest piękne w życiu… dopóki trwa walka, dopóki nam zależy. Zagrają dla Was o najwyższą stawkę – MIŁOŚĆ.</h5> <hr style="border-top: 2px solid rgba(0, 0, 0, 0.664); margin: 2rem 0 1rem 0;"> </div>';
var exampleFith =' <h6 class="mt-5"><strong>YOUTUBE</strong></h6> <div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/kxe6U0FXcR4"></iframe> </div>';
var exampleSix = '<h6 style=" font-weight: bold; letter-spacing: 0.2rem;">KUP BILET</h6> <button type="button" class="btn btn-lg"> <i class="fa fa-arrow-right h5"></i><span class="h4"> bilety online</span> </button>';
var exampleSeven =' <div class="pt-5"> <p><strong>Gdyńskie Centrum Filmowe, sala Warszawa </strong><br> Plac Grunwaldzki 2, Gdynia<br> Czas trwania: 75 min. *Bilety: 40/35 zł</p> <p><strong>Realizatorzy:</strong> <br> Tekst: Aleksandra Wolf<br> Reżyseria: Tomasz Sapryk<br> Scenografia: Witold Stefaniak<br> Kostiumy: Małgorzata Zwolińska<br> Asystentka reżysera: Alicja Cembrowska<br> Autor monologu Karola: Marek Modzelewski<br> Wizualizacje: Sebastian Mul<br> Światło i dźwięk: Jarosław Barczewski </p> <p><strong>Obsada:</strong> <br> Aldona Jankowska<br> Tomasz Sapryk<br> </p> </div>';
var exampleEight='<p><strong>PRAPREMIERA 14 lipca 2017 r.</strong> </p> <img class="img-thumbnail mt-1" src="https://gck.gdynia.pl/wp-content/uploads/2018/09/zacznijmy_jeszcze_raz_B2_wznowienie_internet_300.jpg" alt="">';
var exampleNine='<h6 class="mt-5" style="font-weight: bold;letter-spacing: 0.2rem;">AUDIO</h6> <button type="button" style="margin-top: .5rem!important;" class="btn w-100 text-left"> <i class="fa fa-arrow-right h4"></i> Audio </button> <button style="margin-top: .5rem!important;" type="button" class="btn w-100 text-left"> <i class="fa fa-arrow-right h4"></i> Audio </button> <button style="margin-top: .5rem!important;" type="button" class="btn w-100 text-left"> <i class="fa fa-arrow-right h4"></i> Audio </button> <button style="margin-top: .5rem!important;" type="button" class="btn w-100 text-left"> <i class="fa fa-arrow-right h4"></i> Audio </button> <button style="margin-top: .5rem!important;" type="button" class="btn w-100 text-left"> <i class="fa fa-arrow-right h4"></i> Audio</button>';
var exampleTen = ' <h5 class="font-weight-bold text-uppercase pt-5 pb-5">FOTORELACJA Z PREMIERY</h5> <div class="row no-gutters"> <div class="col-md-3 col-6"> <img class="img-fluid" src="https://gck.gdynia.pl/wp-content/uploads/2018/08/Zacznijmy-jeszcze-raz-fot.-Sebastian-Mul-e1535737426335.jpg"> </div> <div class="col-md-3 col-6"> <img class="img-fluid" src="https://gck.gdynia.pl/wp-content/uploads/2018/08/Teatrzyk-Bezwstydny-1-e1535737059180.jpg"> </div> <div class="col-md-3 col-6"> <img class="img-fluid" src="https://gck.gdynia.pl/wp-content/uploads/2018/08/Wieczory-ateńskie-1-e1535729419233.jpg"> </div> <div class="col-md-3 col-6"> <img class="img-fluid" src="https://gck.gdynia.pl/wp-content/uploads/2018/08/Mayday-1-e1535729307545.jpg"> </div> </div> ';
var exampleEleven =' <h5 class="font-weight-bold pt-5 pb-5 pl-4 ">R E C E N Z J E</h5> <div class="jumbotron yellow-bg rounded-0 mb-0"> <div class="repertoire-reviews"> <p >Dwoje brawurowo grających aktorów, niewielka scena, skromna scenografia i doskonały scenariusz. To jest prosty przepis na spektakl – perełkę. </p> <h6><strong>- KURIER GDYŃSKI</strong></h6> <hr> <p>Widownia pokładała się ze śmiechu! To farsa napisana inteligentnie i z wyczuciem humoru - Dziennik Bałtycki „Zacznijmy jeszcze raz” to pogodne, pełne życzliwości spojrzenie na codzienne troski i problemy damsko-męskie. Bez względu na poziom życiowego doświadczenia można się przejrzeć w problemach bohaterów. To w moim odczuciu zdecydowanie najlepsza z dotychczasowych komedii Centrum Kultury w Gdyni, która sądząc po żywiołowych reakcjach, na dłużej zagości w Gdyńskim Centrum Filmowym.</p> <h6><strong>– TRÓJMIASTO.PL</strong></h6> </div> </div>';
function exampleShow(index){
    $('#exampleModal').modal('show');
    switch(index) {
        case 1:
            $('#exampleModal .modal-body').append(exampleFirst);
            break;
        case 2:
            $('#exampleModal .modal-body').append(exampleSecond);
            break;
        case 3:
            $('#exampleModal .modal-body').append(exampleThird);
            break;
        case 4:
            $('#exampleModal .modal-body').append(exampleFourth);
            break;
        case 5:
            $('#exampleModal .modal-body').append(exampleFith);
            break;
        case 6:
            $('#exampleModal .modal-body').append(exampleSix);
            break;
        case 7:
            $('#exampleModal .modal-body').append(exampleSeven);
            break;
        case 8:
            $('#exampleModal .modal-body').append(exampleEight);
            break;
        case 9:
            $('#exampleModal .modal-body').append(exampleNine);
            break;
        case 10:
            $('#exampleModal .modal-body').append(exampleTen);
            break;
        case 11:
            $('#exampleModal .modal-body').append(exampleEleven);
            break;
    }
}

///
/// End Example
///

///
/// ADD LEFT
///

function admissionAdd(){
    var admission = '<div class="repertoire-title"> <h6> <strong>'+$("#admissionInputOne").val()+'</strong> </h6> <h3> <strong>'+$("#admissionInputTwo").val()+'</strong></h3> <br> <p>'+$( "#admissionTextareaThree" ).val().replace(/[\r\n]/g, "<br />")+'</p> <hr> </div>';

    $("#deleteDropdownLeft").before(admission);
}

function textAdd(){
    var text = '<p>'+$( "#textTextarea" ).val().replace(/[\r\n]/g, "<br />")+'</p>';
    
    $("#deleteDropdownLeft").before(text);
}


function prizeAddModal(){
    $("#prizeButton").before('<input class="form-control mt-2"  placeholder="Tytuł " type="text" ></button> <input class="form-control mt-2" placeholder="Opis" type="text" >');
}
function prizeClearModal(){
    $("#prizeModal .form-control").remove();
    prizeAddModal();
}

function prizeAdd(){
    var prize = '<div class="repertoire-prize"> ';
    
    $( "#prizeModal .modal-body input" ).each(function( index ) {
        if(index % 2 === 0  ){
           prize += '<h6 class="mt-5">' +$( this ).val() + '</h6>'// console.log( index + ": " + $( this ).val()+"title" );
        }
         else {
            prize += '<p>' +$( this ).val() + '</p>'
        }
    })
    prize+= '</div>'
    $("#deleteDropdownLeft").before(prize);
    prizeClearModal();
}

function quotationAdd(){
    var quotation ='<div class="repertoire-prize"> <hr> <h5>'+ $("#quotationTextarea").val().replace(/[\r\n]/g, "<br />")+'</h5> <hr> </div>'
    $("#deleteDropdownLeft").before(quotation);
}

function youtubeAdd(){
    var youtube = ' <h6 class="mt-5"><strong>'+$("#youtubeInputOne").val()+'</strong></h6> <div class="embed-responsive embed-responsive-16by9"> <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/'+$("#youtubeInputTwo").val()+'"></iframe> </div>'
    $("#deleteDropdownLeft").before(youtube);
}

///
/// END ADD LEFT
///

///
/// ADD RIGHTS
///
function ticketAdd(){
    var ticket=' <h6 >'+$("#ticketInputOne").val()+'</h6> <a href="' +$("#ticketInputTwo").val()+'"> <button type="button" class="btn btn-lg"> <i class="fa fa-arrow-right h5"></i><span class="h4"> bilety online</span> </button></a>';
    $("#deleteDropdownRight").before(ticket);
}

function titleAndTextAdd(){
    var titleAndText = ' <div class=" mt-'+$("#titleAndTextSelect").val()+'"> <p><strong>'+$("#titleAndTextInputOne").val()+'</strong><br> '+$("#titleAndTextTextarea").val().replace(/[\r\n]/g, "<br />")+'</p> </div>';
    $("#deleteDropdownRight").before(titleAndText);
}

function pictureAdd(){
    var prcture = '<p><strong>'+$("#pictureInputOne").val()+'</strong> </p> <img class="img-thumbnail mt-1" src="'+$("#pictureInputTwo").val()+'" alt="'+$("#pictureInputThree").val()+'">';
    $("#deleteDropdownRight").before(prcture);
}


function audioAddModal(){
    $("#audioButton").before('<input class="form-control mt-2"  placeholder="Link " type="text" ></button> <input class="form-control mt-2"  placeholder="Tytuł" type="text" >');
}

function audioClearModal(){
    $("#audioModal .form-control").remove();
    audioAddModal();
}

function audioAdd(){
    var audio = '<h6 class="mt-5">AUDIO</h6>';
    
    $( "#audioModal .modal-body input" ).each(function( index ) {
        if(index % 2 === 0  ){
            audio += '<a href="' +$( this ).val() + '">' ;// console.log( index + ": " + $( this ).val()+"title" );
        }
         else {
            audio += '<button type="button" class="btn w-100 text-left"> <i class="fa fa-arrow-right h4"></i> ' +$( this ).val() + '</button> </a>';
        }
    })
    $("#deleteDropdownRight").before(audio);
    audioClearModal();
}


///
/// END ADD RIGHTS
///

///
/// ADD Main
///

function galleryAdd(){
    var gallery = ' <h5 class="font-weight-bold text-uppercase pt-5 pb-5">'+$("#gallery1").val()+'</h5> <div class="row no-gutters"> <div class="col-md-3 col-6"> <img class="img-fluid" src="'+$("#gallery2").val()+'" alt="'+$("#gallery3").val()+'"> </div> <div class="col-md-3 col-6"> <img class="img-fluid" src="'+$("#gallery4").val()+'" alt="'+$("#gallery5").val()+'"> </div> <div class="col-md-3 col-6"> <img class="img-fluid" src="'+$("#gallery6").val()+'" alt="'+$("#gallery7").val()+'"> </div> <div class="col-md-3 col-6"> <img class="img-fluid" src="'+$("#gallery8").val()+'" alt="'+$("#gallery9").val()+'"> </div> </div>';
    $("#deleteDropdownMain").before(gallery);
}

function reviewsAddModal(){
    $("#reviewsButton").before(' <textarea class="form-control mt-2" placeholder="Tekst" rows="5" ></textarea> <input class="form-control" placeholder="Tytuł" type="text" >');
}

function reviewsClearModal(){
    $("#reviewsModal .form-control").remove();
    reviewsAddModal();
}

function reviewsAdd(){
    var reviews = '<!--RECENZJE--> <section > <h5 class="font-weight-bold pt-5 pb-5 pl-4 ">R E C E N Z J E</h5> <div class="jumbotron yellow-bg rounded-0 mb-0"> <div class="repertoire-reviews">';
    
    $( "#reviewsModal .modal-body input,#reviewsModal .modal-body textarea" ).each(function( index ) {
        if(index % 2 === 0  ){
            reviews += '<p >' +$( this ).val() + '</p >' ;// console.log( index + ": " + $( this ).val()+"title" );
        }
         else {
            reviews += '<h6><strong> ' +$( this ).val() + '</strong></h6>';
            if(index+1 != $( "#reviewsModal .modal-body input,#reviewsModal .modal-body textarea" ).length) 
            reviews += '<hr>';
        }
    })
    reviews+=' </div> </div> </div> </section>';
    $("#deleteDropdownMain").before(reviews);
    
    reviewsClearModal();
}

///
/// ADD END Main
///

///
/// ADD HTML
///
var htmlWho='';
function htmlAdd(who){
    $('#htmlModal').modal('show');
    htmlWho = who;
}

$("#htmlButton").click(function(){
    switch(htmlWho){
        case 'l':
        $("#deleteDropdownLeft").before($("#htmlTextarea").val());
        break;
        case 'p':
        $("#deleteDropdownRight").before($("#htmlTextarea").val());
        break;
        case 'm':
        $("#deleteDropdownMain").before($("#htmlTextarea").val());
        break;
    }
});

///
/// ADD HTML
///


///
/// END 
///
var lastHtml ;
function endClick(){
    lastHtml = $("#allHTML").html();

    $("#deleteImageURL").remove()
    $("#deleteImageALT").remove()
    $("#deleteDropdownLeft").remove()
    $("#deleteDropdownRight").remove()
    $("#deleteDropdownMain").remove()

    $('#mainTitle').removeAttr('id');
    $('#mainImage').removeAttr('id');

    //$('#mainRemoveContainer').removeAttr("class");
    $('#mainRemoveContainer').removeAttr('id');
    $("#removeContainer").removeAttr('id'); //.remove();

    var html = $("#allHTML").html();
    $("#endTextarea").val(HTMLTrim(html));
    $('#endModal').modal('show');
}

$('#endModal').on('hidden.bs.modal',function(){
    comeBack();
});

function HTMLTrim(x) {
    return x.replace(/^\s+|\s+$/gm,'');
}

function comeBack(){
    $("#allHTML").html(lastHtml);;
}

///
/// END END 
///