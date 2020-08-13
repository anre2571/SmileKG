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


    $('#right,.right>* , #left,.left>*').click(function(event){
        if($(this).hasClass('no_content')) return;

       /*choose which section to display*/
        let choice = '#'+ event.target.id + '_content';
        console.log(choice);
        $('#content>*').hide();
        $(choice).show();


        if(!$('.middle').hasClass('content_view') || $(this).hasClass('active')){
            changeMode($(this));
        }
        toggleActive($(this));
    });

    /*Links the login button to my home view*/
        $('#login').click(function() {
            $("main").hide();
            $("myhome").show();
        });
    /*Links the logo main homepage*/
        $('#logo').click(function() {
            $("myhome").hide();
            $("main").show();
        });



    // When an emoji clicked, it is colored.
    function faceSwitch(){
        $('.face').click(function(){
            if($('.clicked').length>0){
                let clickedId = $('.clicked').attr('id');
                console.log(clickedId);
                $('.clicked').attr('src','face/'+clickedId+'.png');
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
            $('.clicked').attr('src','face/'+clickedId+'.png');
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


