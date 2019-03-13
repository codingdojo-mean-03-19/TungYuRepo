$(document).ready(function(){
    var points = 0;
    $('#points').html(points+ " points")
    $.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean", general);
    $.get("https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean", entertainment);
    $.get("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=boolean", science);
    function general(data) {
            for(var x in data){
                for(var i=0; i<data[x].length-7; i++){
                    $('.inner-general').append(`
                        <div class="box">
                            <div class="inner-box-content">
                                <p>${data[x][i].question}</p>
                                <p> 
                                    <label><input type="radio" name="answer1" value="${data[x][i].correct_answer}">True</label> 
                                    <label><input type="radio" name="answer1" value="${data[x][i].incorrect_answers}">False</label>
                                </p>
                                <p><input type="button" value="Submit" class="btn btn-success answer1"></p>
                            </div>
                        </div>`)
                    }
                   
                }
                $('.inner-box-content').click(function(){
                    $(this).addClass('active')
                })
            $(".answer1").click(function(){
            var radioValue = $("input[name='answer1']:checked").val();
            if(radioValue){
                alert("You answered- " + radioValue);
                if(radioValue === "True"){

                points=points + 100;
                $('#points').html(points+ " points")
                }else{
                    points=points + 0;
                }
            }
        });
        
    };

    function entertainment(data) {
            for(var x in data){
                for(var i=0; i<data[x].length-7; i++){
                    $('.inner-entertainment').append(`
                        <div class="box">
                            <div class="inner-box-content">
                                <p>${data[x][i].question}</p>
                                <p> 
                                    <label><input type="radio" name="answer2" value="${data[x][i].correct_answer}">True</label> 
                                    <label><input type="radio" name="answer2" value="${data[x][i].incorrect_answers}">False</label>
                                </p>
                                <p><input type="button" value="Submit" class="btn btn-success answer2"></p>
                            </div>
                        </div>`)
                }
            }
            $('.inner-box-content').click(function(){
                $(this).addClass('active')
            })
            $(".answer2").click(function(){
            var radioValue = $("input[name='answer2']:checked").val();
            if(radioValue){
                alert("You answered - " + radioValue);
                if(radioValue === "True"){

                points=points + 100;
                $('#points').html(points+ " points")
                }
            }
        });
    };

    function science(data) {
            for(var x in data){
                for(var i=0; i<data[x].length-7; i++){
                    $('.inner-science').append(`
                        <div class="box ">
                            <div class="inner-box-content ">
                                <p>${data[x][i].question}</p>
                                <p> 
                                    <label><input type="radio" name="answer3" value="${data[x][i].correct_answer}">True</label> 
                                    <label><input type="radio" name="answer3" value="${data[x][i].incorrect_answers}">False</label>
                                </p>
                                <p><input type="button" value="Submit" class="btn btn-success answer3"></p>
                            </div>
                        </div>`)
                }
            }
            $('.inner-box-content').click(function(){
                $(this).addClass('active')
            })
            $(".answer3").click(function(){
            var radioValue = $("input[name='answer3']:checked").val();
            if(radioValue){
                alert("You answered - " + radioValue);
                if(radioValue === "True"){

                    points=points + 100;
                    $('#points').html(points+ " points")
                }
            }
        });
    };
});