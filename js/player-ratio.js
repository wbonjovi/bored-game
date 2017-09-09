
var numberPlayer ,  //玩家数量
    numberKill ,    //杀手数量
    numberPeople,     //平民数量
    arrayOfPlayer;   //玩家数组


function getInputValue( ) {
    numberPlayer = document.getElementById("idOfNumberOfPlayer").value;

//            alert(numberPlayer);
    if (numberPlayer<4 || numberPlayer>18){
        alert("请输入正确的玩家数量");
        return 0;
    }
    else {
        arrayOfPlayer = [];
        arrayOfPlayer.length =  numberPlayer ;
        //计算杀手与平民的人数
        var number  =  allocateNumber(numberPlayer);

        //为杀手、平民的人数赋值
        numberKill = number[0];
        numberPeople = number[1];

        //0代表是杀手
        for (var i =0 ; i < numberKill; i++ ){
            arrayOfPlayer[i]=0;
        }
        //1代表是平民
        for (var i = numberKill ; i < numberPlayer; i++ ){
            arrayOfPlayer[i]= 1;
        }


        //数组乱序
        if (!Array.prototype.shuffle) {
            Array.prototype.shuffle = function() {
                for(var j, x, i = this.length; i; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
                return this;
            };
        }
        arrayOfPlayer.shuffle();


        //添加文本至DOM中
        document.getElementById("idOfNumberOfKill").textContent = number[0];
        document.getElementById("idOfNumberOfPeople").textContent = number[1];

    }
}

//分配杀手与平民的人数
function allocateNumber( numberOfPlayer ) {
    var number = new Array(2);
    number[0] = Math.ceil( numberOfPlayer / 4);
    number[1] = numberOfPlayer - number[0];
    return number;
}

function jumpLink() {
    var str = "view-identity.html?";
    var stringOfPlayer = arrayOfPlayer.join("-");
    str = str  + stringOfPlayer;
    return str;
}