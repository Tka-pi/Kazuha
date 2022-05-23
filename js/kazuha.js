window.addEventListener('beforeunload', function(e) {
e.returnValue = '聖遺物がリセットされます。よろしいですか？';
}, false);


let ref=7;


function add1(){
    let relic = document.getElementById("relic1");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add2(){
    let relic = document.getElementById("relic2");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add3(){
    let relic = document.getElementById("relic3");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add4(){
    let relic = document.getElementById("relic4");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=(ref+1); j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add5(){
    let relic = document.getElementById("relic5");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=ref; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
}
function add6(){
    let relic = document.getElementById("weapon");
    let row_num = relic.rows.length;
    let newrow  = relic.insertRow(row_num);
    for(let j=0; j<=4; j++){
        let cellj = newrow.insertCell(j);
        cellj.innerHTML = relic.rows[row_num-1].cells[j].innerHTML;
    }
    let r=row_num;
    relic.rows[row_num].cells[0].innerHTML='<input type="radio" name="compare1" id="compare1" value="'+r+'" />';
    relic.rows[row_num].cells[1].innerHTML='<input type="radio" name="compare2" id="compare2" value="'+r+'" />';
}



function del1(){
    let relic = document.getElementById("relic1");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del2(){
    let relic = document.getElementById("relic2");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del3(){
    let relic = document.getElementById("relic3");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del4(){
    let relic = document.getElementById("relic4");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del5(){
    let relic = document.getElementById("relic5");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}
function del6(){
    let relic = document.getElementById("weapon");
    let row_num = relic.rows.length;
    if(row_num>1.5){
    relic.deleteRow(row_num-1);
    }
}



























function start(){

let relic1_matrix = [];
let allrows1 = relic1.querySelectorAll('tr');
allrows1.forEach(tr=>{
let allcells1 = tr.querySelectorAll('td');
let all =[];
allcells1.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic1_matrix.push(all);
})


let relic2_matrix = [];
let allrows2 = relic2.querySelectorAll('tr');
allrows2.forEach(tr=>{
let allcells2 = tr.querySelectorAll('td');
let all =[];
allcells2.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic2_matrix.push(all);
})


let relic3_matrix = [];
let allrows3 = relic3.querySelectorAll('tr');
allrows3.forEach(tr=>{
let allcells3 = tr.querySelectorAll('td');
let all =[];
allcells3.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic3_matrix.push(all);
})


let relic4_matrix = [];
let allrows4 = relic4.querySelectorAll('tr');
allrows4.forEach(tr=>{
let allcells4 = tr.querySelectorAll('td');
let all =[];
allcells4.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic4_matrix.push(all);
})


let relic5_matrix = [];
let allrows5 = relic5.querySelectorAll('tr');
allrows5.forEach(tr=>{
let allcells5 = tr.querySelectorAll('td');
let all =[];
allcells5.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
relic5_matrix.push(all);
})

let artifact = [relic1_matrix,relic2_matrix,relic3_matrix,relic4_matrix,relic5_matrix];

let weapon_matrix = [];
let allrowsW = weapon.querySelectorAll('tr');
allrowsW.forEach(tr=>{
let allcellsW = tr.querySelectorAll('td');
let all =[];
allcellsW.forEach(td=>{
all.push(Number(td.firstElementChild.value));
})
weapon_matrix.push(all);
})



let C1=relic1_matrix.length;
let C2=relic2_matrix.length;
let C3=relic3_matrix.length;
let C4=relic4_matrix.length;
let C5=relic5_matrix.length;
let Cx=C1*C2*C3*C4*C5;


//基本設定
let stella=Number($("#stella").val());
let t1=Number($("#talent1").val())-9;
let t2=Number($("#talent2").val())-9;
let t3=Number($("#talent3").val())-9;
let diff_after=Number($("#diff_after").val());
let diff_before=Number($("#diff_before").val());
let HV_N=Number($("#HV_N").val());
if(HV_N>=3){
    HV_N=3;
}


//不確定要素
let ATK_buff=Number($("#ATK_buff").val());
let ATKr_buff=Number($("#ATKr_buff").val())*0.01;
let CRITr_buff=Number($("#CRITr_buff").val())*0.01;
let CRITd_buff=Number($("#CRITd_buff").val())*0.01;
let EM_buff=Number($("#EM_buff").val());
let ACT_buff=Number($("#ACT_buff").val())*0.01;
let SKL_buff=Number($("#SKL_buff").val())*0.01;
let BST_buff=Number($("#BST_buff").val())*0.01;
let anemo_buff=Number($("#anemo_buff").val())*0.01;
let element_buff=Number($("#element_buff").val())*0.01;
let ALL_buff=Number($("#ALL_buff").val())*0.01;
let alpha=Number($("#alpha").val());
let beta=Number($("#beta").val());
let constraint=Number($("#constraint").val());



let N1=[
    82.6,
    88.9,
    96.1
];

let HV=[
    216.1,
    232.6,
    251.4
];

let fall=[
    375,
    404,
    433
];

let SKL_short=[
    326,
    346,
    365,
    384,
    408
];

let SKL_long=[
    443,
    469,
    496,
    522,
    544
];

let BST_slash=[
    446,
    472,
    499,
    525,
    558
];

let BST_slash_N=[
    204,
    216,
    228,
    240,
    255
];

let BST_slash_element=[
    61,
    65,
    68,
    72,
    77
];

let stella_2=0;
let stella_6=0;
if(stella>=2){
    stella_2=1;
}
if(stella>=6){
    stella_6=1;
}


function eval(ATKr_virtual, CRITr_virtual, CRITd_virtual, EM_virtual){
    let HP_total=13348*(1+HPr+HPr_w)+HP;
    let ATK_total=(297+ATK_base)*(1+ATKr+ATKr_w+ATKr_buff+ATKr_virtual*0.01)+ATK+ATK_w+ATK_buff+HP_total*bangan_rate;
    let CRITr_total=0.05+CRITr+CRITr_w+CRITr_buff+CRITr_virtual*0.01;
    if(CRITr_total>=1){
        CRITr_total=1;
    }
    let CRITd_total=0.5+CRITd+CRITd_w+CRITd_buff+CRITd_virtual*0.01;
    let EM_total=EM+EM_w+EM_buff+EM_virtual+115;
    let anemo_total=anemo+anemo_buff+anemo_w+ALL_w+ALL_buff;
    let element_total=element_w+element_buff+ALL_w+ALL_buff+0.04*0.01*EM_total;
    let ACT_total=ACT_w+ACT_buff+0.2*0.01*EM_total*stella_6;
    let SKL_total=SKL_w+SKL_buff;
    let BST_total=BST_w+BST_buff;
    function diffuse_bonus(em){
        return 1+16*em/(em+2000)+0.6*flag_s;
    }
    
    //天賦%・バフ・元素耐性
    let model=
        SKL_long[t2]*           (1+anemo_total+SKL_total)*0.9+
        fall[t1]*               (1+anemo_total+ACT_total)*0.9+
        200*                    (1+element_total+ACT_total)*(0.9+flag_s*0.25)+
        BST_slash[t3]*          (1+anemo_total+BST_total)*0.9+
        BST_slash_N[t3]*        (1+anemo_total+BST_total)*5*0.9+
        BST_slash_element[t3]*  (1+element_total+BST_total)*5*(0.9+flag_s*0.25)+
        SKL_short[t2]*          (1+anemo_total+SKL_total)*0.9+
        fall[t1]*               (1+anemo_total+ACT_total+0.4*stella_6)*0.9+
        200*                    (1+element_total+ACT_total+0.4*stella_6+0.08*stella_2)*(0.9+flag_s*0.25)+
        (N1[t1]+HV[t1])*HV_N*   (1+anemo_total+ACT_total+0.4)*0.9*stella_6;


    //攻撃・会心補正・防御補正
    return model*ATK_total*(1+CRITr_total*CRITd_total)*0.5*0.01+
        868*(diff_after*diffuse_bonus(EM_total+200*stella_2)+diff_before*diffuse_bonus(EM_total))*(0.9+0.25*flag_s);
}






let alert_label=0;
let alert_nan=0;
let alert_minus=0;
let alert_echo=0;


let weapon_el=document.getElementById("weapon");
let weapon_num=weapon_el.rows.length;
let w_index=[];
let w_max=[];
let w_used=[];
let w_info=[];

let constraint_element=document.getElementsByName("const_check");
for (let i=0;i<weapon_num; i++){
    if(constraint_element[i].checked){
        weapon_matrix[i][2]=1;
    }
}



for (let w=0;w<weapon_num;w++){

    //武器情報を反映
    var ATK_base=0;
    var HPr_w=0;
    var bangan_rate=0;
    var ATK_w=0;
    var ATKr_w=0;
    var CRITr_w=0;
    var CRITd_w=0;
    var EM_w=0;
    var ACT_w=0;
    var SKL_w=0;
    var BST_w=0;
    var anemo_w=0;
    var element_w=0;
    var ALL_w=0;
    var ws=weapon_matrix[w][3];
    var rf=weapon_matrix[w][4]-1;


    if(ws==1){
        ATK_base=608;
        EM_w=198;
        ALL_w=0.1+0.025*rf;
        ACT_w=(0.16+0.04*rf)*alpha;
        ATKr_w=(0.2+0.05*rf)*alpha;
    }
    if(ws==2){
        ATK_base=674;
        CRITd_w=0.441;
        ALL_w=0.12+0.03*rf;
        anemo_w=(0.28+0.07*rf)*beta;
    }
    if(ws==3){
        ATK_base=542;
        CRITr_w=0.441;
        HPr_w=0.2+0.05*rf;
        bangan_rate=0.012+0.003*rf;
    }
    if(ws==4){
        ATK_base=510;
        EM_w=165;
        ALL_w=(0.06+0.015*rf)*2;
    }

    w_info[w]=[
        ATK_base,
        HPr_w,
        bangan_rate,
        ATK_w,
        ATKr_w,
        CRITr_w,
        CRITd_w,
        EM_w,
        ACT_w,
        SKL_w,
        BST_w,
        anemo_w,
        element_w,
        ALL_w
    ];

    
    

    let EV_index=[];
    let EV_vector=[];
    let used_matrix=[];
    let index=0;

    for (let r1=0 ; r1<C1 ; r1++){
        for (let r2=0 ; r2<C2 ; r2++){
            for (let r3=0 ; r3<C3 ; r3++){
                for (let r4=0 ; r4<C4 ; r4++){
                    for (let r5=0 ; r5<C5 ; r5++){

                        var series= relic1_matrix[r1][0]*relic2_matrix[r2][0]*relic3_matrix[r3][0]*relic4_matrix[r4][0]*relic5_matrix[r5][0];
                        var HP=     relic1_matrix[r1][1]+relic2_matrix[r2][1]+relic3_matrix[r3][1]+relic4_matrix[r4][1]+relic5_matrix[r5][1];
                        var HPr=   (relic1_matrix[r1][2]+relic2_matrix[r2][2]+relic3_matrix[r3][2]+relic4_matrix[r4][2]+relic5_matrix[r5][2])*0.01;
                        var ATK=    relic1_matrix[r1][3]+relic2_matrix[r2][3]+relic3_matrix[r3][3]+relic4_matrix[r4][3]+relic5_matrix[r5][3];
                        var ATKr=  (relic1_matrix[r1][4]+relic2_matrix[r2][4]+relic3_matrix[r3][4]+relic4_matrix[r4][4]+relic5_matrix[r5][4])*0.01;
                        var CRITr= (relic1_matrix[r1][5]+relic2_matrix[r2][5]+relic3_matrix[r3][5]+relic4_matrix[r4][5]+relic5_matrix[r5][5])*0.01;
                        var CRITd= (relic1_matrix[r1][6]+relic2_matrix[r2][6]+relic3_matrix[r3][6]+relic4_matrix[r4][6]+relic5_matrix[r5][6])*0.01;
                        var EM=     relic1_matrix[r1][7]+relic2_matrix[r2][7]+relic3_matrix[r3][7]+relic4_matrix[r4][7]+relic5_matrix[r5][7];
                        var anemo=  relic4_matrix[r4][8]*0.01;
                        var flag_s= 0;

                        if(series%(3**2)==0){
                            anemo+=0.15;
                        }
                        if(series%(3**4)==0){
                            flag_s=1;
                        }
                        if(series%(2**2)==0){
                            ATKr+=0.18;
                        }

                        var ev=eval(0,0,0,0);
                        if(weapon_matrix[w][2]==1&&(EM+EM_buff+EM_w+115)<constraint){
                            ev=0;
                        }

                        
                        used_matrix[index]=[HP,HPr,ATK,ATKr,CRITr,CRITd,EM,anemo,flag_s];
                        EV_index[index] = [r1,r2,r3,r4,r5];
                        EV_vector[index] = ev;
                        if(isNaN(ev)){
                            alert_nan=1;
                            alert_label=1;
                        }
                        index++;
                    }
                }
            }
        }
    }

    
    if(alert_echo==0){
        if(alert_nan==1){
            alert("数値を入力してください");
            alert_echo=1;
        }
    }


    let max_index=0;
    let max=-1;
    for(let j=0 ; j<Cx ; j++){
        if(max<EV_vector[j]){
            max=EV_vector[j];
            max_index=j;
        }
    }


    //最大値を与える聖遺物の
    //used:詳細ステータスベクトル、index:組情報ベクトル、max:最大火力そのもの。
    w_used[w]=used_matrix[max_index];
    w_index[w]=EV_index[max_index];
    w_max[w]=max;
    //記述簡略化のため使った武器の情報を保存。
    


}




//武器ループから抜けた後
let w1=Number($('input[name="compare1"]:checked').val());
let w2=Number($('input[name="compare2"]:checked').val());

if(isNaN(w1)){
    w1=0;
}
if(isNaN(w2)){
    w2=0;
}

let w_start=w1;
let w_end=w2;

if(w_max[w1]>=w_max[w2]){
    w_start=w2;
    w_end=w1;
}


//弱いほうの武器情報を反映
ATK_base=   w_info[w_start][0];
HPr_w=      w_info[w_start][1];
bangan_rate=w_info[w_start][2];
ATK_w=      w_info[w_start][3];
ATKr_w=     w_info[w_start][4],
CRITr_w=    w_info[w_start][5];
CRITd_w=    w_info[w_start][6];
EM_w=       w_info[w_start][7];
ACT_w=      w_info[w_start][8];
SKL_w=      w_info[w_start][9];
BST_w=      w_info[w_start][10];
anemo_w=    w_info[w_start][11];
element_w=  w_info[w_start][12];
ALL_w=      w_info[w_start][13];



//その武器の最適聖遺物情報を反映
HP=     w_used[w_start][0];
HPr=    w_used[w_start][1];
ATK=    w_used[w_start][2];
ATKr=   w_used[w_start][3];
CRITr=  w_used[w_start][4];
CRITd=  w_used[w_start][5];
EM=     w_used[w_start][6];
anemo=  w_used[w_start][7];
flag_s= w_used[w_start][8];


let differ=[];
let limit=[0,0,0,0];

for (let i=0;i<4;i++){
    let x=0;
    let dx=1;
    let loop=0;
    
    while(dx>0.001){
        loop++;
        if(loop>1000){
            limit[i]=1;
            break;
        }

        let left=[eval(x,0,0,0),eval(0,x,0,0),eval(0,0,x,0),eval(0,0,0,x)];
        let right=[eval((x+dx),0,0,0),eval(0,(x+dx),0,0),eval(0,0,(x+dx),0),eval(0,0,0,(x+dx))];
        let a=left[i]-w_max[w_end];
        let b=right[i]-w_max[w_end];

        if(a*b>0){
            x+=dx*0.9;
        }else{
            dx*=0.5;
        }
    }

    differ[i]=x;
}



function relic_name(name){
    if(name==3){
        return "翠緑";
    }
    if(name==2){
        return"攻撃+18%系";
    }
    if(name==1){
        return "その他";
    }
}

function weapon_name(wname){
    if(wname==1){
        return "蒼古なる自由への誓い";
    }
    if(wname==2){
        return "霧切の廻光";
    }
    if(wname==3){
        return "盤岩結緑";
    }
    if(wname==4){
        return "鉄蜂の刺し";
    }
}

let power = document.getElementById('power');
let power_shift = document.getElementById('power_shift');
let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');

if(alert_label==0){
    //火力表示

	for (let h=0; h<power.rows.length; h++){
		power.deleteRow(h);
	}
    for (let y=0 ;y<weapon_num; y++){
        if(power.rows.length<weapon_num){
            let newrow  = power.insertRow(y);
            for(let i=0;i<5;i++){
                let newcell0 = newrow.insertCell(i);
            }
        }
        
        if(y==w1&&y==w2){
            power.rows[y].cells[0].innerHTML="A,B";
        }else{
            if(y==w1){
                power.rows[y].cells[0].innerHTML="A";
            }else if(y==w2){
                power.rows[y].cells[0].innerHTML="B";
            }else{
                power.rows[y].cells[0].innerHTML="";
            }
        }

        
        power.rows[y].cells[1].innerHTML=weapon_name(weapon_matrix[y][3]);
        power.rows[y].cells[2].innerHTML=weapon_matrix[y][4];
        power.rows[y].cells[3].innerHTML=(w_max[y]).toFixed();
        power.rows[y].cells[4].innerHTML=(w_used[y][6]+EM_buff+w_info[y][7]+115);
        if(weapon_matrix[y][2]==1){
            power.rows[y].cells[4].innerHTML=(w_used[y][6]+EM_buff+w_info[y][7]+115)+"（拘束）";
        }
        if(w_max[y]==0){
            power.rows[y].cells[3].innerHTML="満たす組なし";
            power.rows[y].cells[4].innerHTML="";
        }
    }

    //換算火力表示
    power_shift.rows[0].cells[1].innerHTML=differ[0].toFixed(2);
    power_shift.rows[0].cells[2].innerHTML=differ[1].toFixed(2);
    power_shift.rows[0].cells[3].innerHTML=differ[2].toFixed(2);
    power_shift.rows[0].cells[4].innerHTML=differ[3].toFixed(2);

    if(w1==w2){
        for(let i=0;i<4;i++){
            power_shift.rows[0].cells[i+1].innerHTML="なし";
        }
    }

    for (let i=0;i<4;i++){
        if(limit[i]==1){
            power_shift.rows[0].cells[i+1].innerHTML="×";
        }
    }

    if(w_max[w_start]==0){
        power_shift.rows[0].cells[1].innerHTML="×";
        power_shift.rows[0].cells[2].innerHTML="×";
        power_shift.rows[0].cells[3].innerHTML="×";
        power_shift.rows[0].cells[4].innerHTML="×";
    }



    //結果表示
    //聖遺物のシリーズ名を表示
    for (let i=0;i<5;i++){
        result1.rows[i].cells[1].innerHTML=relic_name(artifact[i][(w_index[w1][i])][0]);

        for(let s=2;s<=(ref+1);s++){
            result1.rows[i].cells[s].innerHTML=artifact[i][(w_index[w1][i])][s-1];
        }
    }
    //詳細を表示
    if(relic4_matrix[w_index[w1][3]][ref+1]>1){
        result1.rows[3].cells[0].innerHTML="杯(風)";
    }else{
        result1.rows[3].cells[0].innerHTML="杯";
    }

    //結果2同様
    for (let i=0;i<5;i++){
        result2.rows[i].cells[1].innerHTML=relic_name(artifact[i][(w_index[w2][i])][0]);

        for(let s=2;s<=(ref+1);s++){
            result2.rows[i].cells[s].innerHTML=artifact[i][(w_index[w2][i])][s-1];
        }
    }

    if(relic4_matrix[w_index[w2][3]][ref+1]>1){
        result2.rows[3].cells[0].innerHTML="杯(風)";
    }else{
        result2.rows[3].cells[0].innerHTML="杯";
    }
}
}