let hours=0,minutes=0,seconds=0,mseconds=0;
let intervalId=null;

function countup(){//countup関数を作成
    mseconds++;
    if(mseconds>9){
        mseconds=0
        seconds++;
    }
    if(seconds>=60){
        seconds=0
        minutes++;
    }
    if(minutes>=60){
        minutes=0
        hours++;
    };
    document.getElementById("mseconds").textContent = mseconds;//HTML要素の時間表示をcountup関数で実行されたものに更新する
    document.getElementById("seconds").textContent = seconds;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("hours").textContent = hours;
};

const start=document.getElementById('start')//スタート要素を取得
start.addEventListener('click',function(){ 
        intervalId = setInterval(countup, 100);//スタートボタンをクリックすると100ミリ秒ごとにcountup関数が実行されるイベントを追加
});

const stop=document.getElementById('stop')//ストップ要素を取得
stop.addEventListener('click',function(){
       clearInterval(intervalId);//ストップボタンをクリックするとsetIntervalによる実行を停止するイベントを追加
})

const reset=document.getElementById('reset')//リセット要素を取得
reset.addEventListener('click',function(){
       intervalId=null//intervalIdをリセットする
      document.getElementById('mseconds').textContent="0";//HTML要素の時間表示を0に更新する
      document.getElementById('seconds').textContent="0";
      document.getElementById('minutes').textContent="0";
      document.getElementById('hours').textContent="0";
});
$('#start').click(function(){//スタートボタンを押すと
    $(this).prop('disabled',true);//スタートボタンが押せなくなる
    $(stop).prop('disabled',false);//ストップボタンが押せるようになる
    $(reset).prop('disabled',false);//リセットボタンが押せるようになる
});
$('#stop').click(function(){//ストップボタンを押すと
    $('#start').prop('disabled',false);//スタートボタンが押せるようになる
    $(this).prop('disabled',true);//ストップボタンが押せなくなる
});
$('#reset').click(function(){//リセットボタンを押すと
    $(this).prop('disabled',true);//リセットボタンが押せなくなる
});

