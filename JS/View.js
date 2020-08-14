let colorState = 0;

let initsize={
    width:0,
    height:0
}
let collector = [];
$(document).ready(function(){
    /*Show only main home on launch*/
    $("main").show();
    $("myhome").hide();
    $("#general_homepage_section").hide();




    $('#right,.right>* , #left,.left>*').click(function(event){
        if($(this).hasClass('no_content')) return;

       /*choose which section to display*/
        let choice = '#'+ event.target.id + '_content'; //construct id of section to be displayed

        $('#content>*').hide(); //hide all other divs under content
        $('.my_home_section').css({"width":"100%","margin":"0%"});
        $(choice).show(); //show the currently selected section

        /*expand the selected section to meet the content box*/
        if(!$(this).hasClass('active')) {
            let a = "#" + event.target.id;
            $(a).css("width", "108%"); //expland left sections
            if ([...event.target.classList].includes("right_section")) {
                $(a).css("margin-left", "-8%"); //expand right sections in the opp direction
            }
        }
        if(!$('.middle').hasClass('content_view') || $(this).hasClass('active')){
            changeMode($(this));
        }
        toggleActive($(this));
    });

    /*Close content view with close btn*/
    $('.content_view_close').click(function(){
        changeMode();
        /*reset all the css to default on close*/
        $('.my_home_section').css({"width":"100%","margin":"0%"});
        $('.active').removeClass('active');
    });

    /*Links the login button to my home view*/
        $('#login').click(function() {
            if($(this).text() === "LOGIN"){
                $(this).text("LOGOUT");
            } else{
                $(this).text("LOGIN");
                $( "#logo" ).trigger( "click" );
                return;
            }
            $("main").hide();
            $("#switch_campus_options").hide();
            $("#general_homepage_section").show();
            $("myhome").show();
        });
    /*Links the logo main homepage*/
        $('#logo, #general_homepage, #go_to_home_title').click(function() {
            if($("login").text() === "LOGOUT"){
                //add my home button
            }
            $("myhome").hide();
            $("main").show();
            $("#switch_campus_options").show();
            $("#general_homepage_section").hide();
        });

    //*When edit btn is clicked*/
    $("#edit_profile").click(function(){
      if($(this).text() === "Save"){
          $(this).text("Edit");
          $('.mpd_content').attr('contenteditable','false');

      } else {
          $(this).text("Save");
          $('.mpd_content').attr('contenteditable', 'true');
      }
    });



    // When an emoji clicked, it is colored.
    function faceSwitch(){
        $('.face').click(function(){
            if($('.clicked').length>0){
                let clickedId = $('.clicked').attr('id');
                console.log(clickedId);
                $('.clicked').attr('src','dummyPictures/face/'+clickedId+'.png');
                $('.clicked').removeClass('clicked');
            }

            let id = this.id;
           let d = $(this).attr('src','dummyPictures/face/'+id+'-click.png');
           console.log(d);
            $(this).addClass('clicked');
        });
    };
// Show/update questions
    function showQuestions(){
        for (let i=0; i<QDB.questions.length;i++){
            collector.push(QDB.questions[i]);
        };
        return collector;
    }

    let j=1;

    function questionUpdate(){
        let item = '<div class = ask>' + collector[j-1]['question'+j] + '</div>'; //question1
        console.log(item);
        let percentage = '<span class = percentage>'+j+'0%'+'</span>'; //10%
        console.log(percentage);
        console.log(collector[j-1]['question'+j]);
        $(".inquiry").append(item);
        $("#percentage").append(percentage);
        // 왤케 배열 겹겹으로 하는지?
    }

    let QDB = {
        "questions":
            [{
                "question1" : "1.Overall, my child enjoyed his/her experiences at Smile Kindergarten."
            },{
                "question2" : "2.Overall, my child developed his/her physical skills at Smile Kindergarten."
            },{
                "question3" : "3.Overall, my child developed social skills at Smile Kindergarten."
            },{
                "question4" : "4.Overall, my child enjoyed his/her experiences at Smile Kindergarten."
            },{
                "question5" : "5.Overall, my child enjoyed his/her experiences at Smile Kindergarten."
            },{
                "question6" : "6.Overall, my child enjoyed his/her experiences at Smile Kindergarten."
            },{
                "question7" : "7.Overall, my child enjoyed his/her experiences at Smile Kindergarten."
            },{
                "question8" : "8.Overall, my child enjoyed his/her experiences at Smile Kindergarten."
            },{
                "question9" : "9.Overall, my child enjoyed his/her experiences at Smile Kindergarten."
            },{
                "question10" : "10.Overall, my child enjoyed his/her experiences at Smile Kindergarten."
            }]

    };



    faceSwitch();
    showQuestions();
// When the right arrow clicked
    $('#arrow-right').click(function(){
        // 1. Smiley emoji reset
        if($('.clicked').length>0){
            let clickedId = $('.clicked').attr('id');
            $('.clicked').attr('src','dummyPictures/face/'+clickedId+'.png');
            $('.clicked').removeClass('clicked');
        }
        if(j<10){j++;}
        // 2. Next Question -> progress bar changes
        if($('.ask').length>0){
            $('.ask').remove();
            $('.percentage').remove();
            $('#percentage').css('width',j*10+'%');
        }

        questionUpdate();
        return j;

        // 4. What about the data?

    })
    $('#arrow-left').click(function(){
        // 1.previous emoji data
        // 2.Progress bar backwards
    })

    // surveyResponse();
    console.log('j is ' + j);
    /*
    });*/

});
$(document).keypress(function(e) {
  if(e.key == 'c') {
    toggleColor();
  }
});

function changeMode(obj){
    $('.left, .right, .middle').toggleClass('content_view');
    $('#left, #right, #middle').toggleClass('content_view');
    $('.content_view_close').toggleClass('show');
    //$('#ch4, #ch5, #ch6').toggleClass('content_view');
}
function toggleActive(obj){

    let isActive = obj.hasClass('active');
    $('.active').removeClass('active');
    if(!isActive) obj.addClass('active');

}
function toggleColor(){
	$('#color').remove();
	if (colorState === 0) {
		$('head').append('<link id = "color" rel="stylesheet" type="text/css" href="../CSS/Color1.css">');
		colorState = 1;
	} else if (colorState === 1) {
		$('head').append('<link id = "color" rel="stylesheet" type="text/css" href="../CSS/Color3.css">');
		colorState = 2;
	    } else {
		$('head').append('<link id = "color" rel="stylesheet" type="text/css" href="../CSS/Color1.css">');
		colorState = 0;
	}
}

//Ability test section, show/hide physical,social,cognitive,language
var navcounter = 0;
$(document).ready(function(){

    $(".navforward").click(function(){
        if (navcounter === 4) {
            navcounter = 1;
        } else {
            navcounter++;
        }
        switchAbility(); console.log(navcounter);
    });

    $(".navback").click(function(){
        if (navcounter === 0) {
            navcounter = 3;
        } else {
            navcounter--;
        }
        switchAbility(); console.log(navcounter);
    });
});

function switchAbility() {
    switch(navcounter) {
        case 1:
            $(".abilityPhysical").css("display", "none");
            $(".abilitySocial").css("display", "initial");
            $(".abilityCognitive").css("display", "none");
            $(".abilityLanguage").css("display", "none");
            $(".abilitynav").text("Social Milestones");
            break;
        case 2:
            $(".abilityPhysical").css("display", "none");
            $(".abilitySocial").css("display", "none");
            $(".abilityCognitive").css("display", "initial");
            $(".abilityLanguage").css("display", "none");
            $(".abilitynav").text("Cognitive Milestones");
            break;
        case 3:
            $(".abilityPhysical").css("display", "none");
            $(".abilitySocial").css("display", "none");
            $(".abilityCognitive").css("display", "none");
            $(".abilityLanguage").css("display", "initial");
            $(".abilitynav").text("Language Milestones");
            break;
        default:
            $(".abilityPhysical").css("display", "initial");
            $(".abilitySocial").css("display", "none");
            $(".abilityCognitive").css("display", "none");
            $(".abilityLanguage").css("display", "none");
            $(".abilitynav").text("Physical Milestones");
            break;
    }
}
