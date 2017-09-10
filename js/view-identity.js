/**
 * Created by ZM on 2017/9/10.
 */


    //将上一个页面获取到的玩家信息的值储存起来
var stringOfPlayer = decodeURIComponent(location.search.substr(1));

// 将玩家信息还原为数组
//玩家信息，0代表杀手，1代表平民
var arrayOfPlayer = stringOfPlayer.split("-");
//        var arrayOfPlayer = new Array(1, 0, 1, 0, 0, 0, 1);


//定义    查看状态、当前查看到几号身份，
//当前身份从1号开始
//viewStatus： 0表示还没有查看身份，1表示正在查看身份
var  viewStatus = 0 , numberOfStatus = 1;


//设置点击查看身份按钮的相关操作
function buttonClickOfViewStatus() {
    //判断是否该传给法官
    if (document.getElementById("idButtonOfViewStatus").textContent ==="法官查看"){
        alert("要给法官查看了");
    }
    //不传给法官后的操作，
    //根据情况改变信息
    else {
        //状态为还没有查看身份
        if( viewStatus === 0 ){
            viewStatus = 1;
            document.getElementById("idButtonOfViewStatus").textContent =
                "查看" + numberOfStatus + "号身份";
            document.getElementById("idStatus").style.backgroundImage='url(../images/view-status.png)';
            document.getElementById("idStatusText").textContent =    "";
            document.getElementById("lookCircle").textContent =  numberOfStatus;
        }
        //状态为正在查看身份
        else {
            viewStatus = 0;
            if (numberOfStatus    === arrayOfPlayer.length){
                document.getElementById("idButtonOfViewStatus").textContent =
                    "法官查看";
            }
            else {
                document.getElementById("idButtonOfViewStatus").textContent =
                    "隐藏并传递给" + (numberOfStatus + 1) + "号";
            }

            document.getElementById("idStatus").style.backgroundImage='url(../images/status.png)';
            if (arrayOfPlayer[numberOfStatus-1] === 0){
                document.getElementById("idStatusText").textContent =    "杀手";
            }
            else {
                document.getElementById("idStatusText").textContent =     "平民";
            }
            numberOfStatus++;
        }
    }
}

function jumpLink() {

    if (numberPlayer<4 || numberPlayer>18){
        alert("请输入正确的玩家数量");
    }
    else  {
        var str = "view-identity.html?";
        var stringOfPlayer = arrayOfPlayer.join("-");
        str = str  + stringOfPlayer;
        location.href = str;
    }
}