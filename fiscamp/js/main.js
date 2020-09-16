function seminar_open(i) {
    //#contents에 세미나 동영상 불러오기
    $("#seminar").load("../page/seminar" + i + ".html");
    $(window).scrollTop(0);
}

function assign_open(i) {
    //#contents에 우수과제 불러오기
    $("#assign").load("../page/assign" + i + ".html");
    $(window).scrollTop(0);
}

function mentor_open(i) {
    //#contents에 멘토 동영상 불러오기
    $("#mentor").load("../page/mentor" + i + ".html");
    $(window).scrollTop(0);
}

function video_play(i) {
    //#contents에 서브페이지 링크 불러오기
    $("#video-area").load("../page/video" + i + ".html");
}
$(document).ready(function () {
    //인클루드 파일 불러오기
    $("#header").load("../page/include_header.html");
    $("#footer").load("../page/include_footer.html");
    $("#side-menu").load("../page/include_side.html");
});
