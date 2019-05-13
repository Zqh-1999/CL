$('.helpProblem_nav_onlineOrder').click(function(){
    $('.helpProblem_nav_contact button').css('display','none');
    $('.onlineOrder-tab').css('display','block');
    $('.goods-tab').css('display','none');
    $('.return-tab').css('display','none');
    $('.boutique-tab').css('display','none');
    $('.someProblems-tab').css('display','none');
})
$('.helpProblem_nav_return').click(function(){
    $('.helpProblem_nav_contact button').css('display','none');
    $('.onlineOrder-tab').css('display','none');
    $('.goods-tab').css('display','none');
    $('.return-tab').css('display','block');
    $('.boutique-tab').css('display','none');
    $('.someProblems-tab').css('display','none');
})
$('.helpProblem_nav_goods').click(function(){
    $('.helpProblem_nav_contact button').css('display','none');
    $('.return-tab').css('display','none');
    $('.onlineOrder-tab').css('display','none');
    $('.goods-tab').css('display','block');
    $('.boutique-tab').css('display','none');
    $('.someProblems-tab').css('display','none');
})
$('.helpProblem_nav_boutique').click(function(){
    $('.helpProblem_nav_contact button').css('display','none');
    $('.return-tab').css('display','none');
    $('.onlineOrder-tab').css('display','none');
    $('.goods-tab').css('display','none');
    $('.boutique-tab').css('display','block');
    $('.someProblems-tab').css('display','none');
})
$('.helpProblem_nav_someProblems').click(function(){
    $('.helpProblem_nav_contact button').css('display','none');
    $('.return-tab').css('display','none');
    $('.onlineOrder-tab').css('display','none');
    $('.goods-tab').css('display','none');
    $('.boutique-tab').css('display','none');
    $('.someProblems-tab').css('display','block');
})