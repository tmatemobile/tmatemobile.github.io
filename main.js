import {getiPhoneSheetValues, 
    getSamsungSheetValues, 
    getiPadSheetValues, 
    getSamsungTabletSheetValues, 
    getUncommonModelSheetValues, 
    getAccessoriesSheetValues,
    getDay1QuestionsSheetValues,
    getDay2QuestionsSheetValues,
    getDay3QuestionsSheetValues} from "./gsheetreader.js";

window.onload = function() {
    //更新时间的注释
    console.log('updated 20/07/2023')
    //iphone 题库； iphone, ipad, 三星主流型号题库， 以及小型号手机题库 共同组成主页上的 “phone/ipad model identification” ；可加入型号
    var iphoneList = new this.Array();
    //ipad 题库，同时也是day2 题库； 此外， iphone, ipad, 三星主流型号题库， 以及小型号手机题库 共同组成主页上的 “phone/ipad model identification” ；可加入型号
    var ipadList = new this.Array();
    //三星主流手机型号题库； iphone, ipad, 三星主流型号题库， 以及小型号手机题库 共同组成主页上的 “phone/ipad model identification” ；可加入型号
    var samsungList = new this.Array();
    //小型号手机题库； iphone, ipad, 三星主流型号题库， 以及小型号手机题库 共同组成主页上的 “phone/ipad model identification” ；可加入型号
    var otherPhoneList = new this.Array();
    //店内产品题库， 也就是主页上的"case and accessaries identification" ；可加入产品
    var caseList = new this.Array();
    //三星平板题库，也就是主页上的 “samsung tablet model identification”；可加入型号
    //day2 默认为iPhone+Samsung phone题库
    var samsungTabletList = new this.Array();
    var day1List = new this.Array();
    var day1bList = new this.Array();
    //day2 默认为ipad题库
    var day2List = new this.Array();
    //day3 多选题题库；可加入产品
    var day3List = new this.Array();

    //
    var day1QuestionsList = new this.Array();
    var day2QuestionsList = new this.Array();
    var day3QuestionsList = new this.Array();

    //以下18行不建议修改
    var caseI = 1;
    var modelI = 1;
    var stabI = 1;
    var day1I = 1;
    var day2I = 1;
    var day3I = 1;
    var caseScore = 0;
    var phoneScore = 0;
    var stabScore = 0;
    var day1MultiScore = 0;
    var day2MultiScore = 0;
    var day3MultiScore = 0;
    var caseQuestionList = [];
    var phoneQuestionList = [];
    var stabQuestionList = [];
    var day1QuestionList = [];
    var day2QuestionList = [];
    var day3QuestionList = [];

    // Called at the beginning
    var initializeLoadingText = function() {
        document.getElementById("waitDiv").style.display = "block";
    }
    // Called at the beginning
    var deleteLoadingText = function() {
        document.getElementById("waitDiv").style.display = "none";
    }
    // Called at the beginning
    var initializeDisplay = function() {
        document.getElementById("learnDiv").style.display = "block";
    }
    // Called at the beginning
    var day1FillInQuestionsGen = function() {
        day1QuestionsList.forEach(element => {
            document.getElementById('day1FillDiv').insertAdjacentHTML(
                'beforeend',
                '<div class="input-group mb-3">' +
                    '<div class="input-group-prepend">' +
                    '<span class="input-group-text">'+ element.question +'</span>'+
                    '</div>' +
                    '<input type="text" class="form-control" id="day1Fill_1" placeholder="' + element.tips + '" aria-describedby="day1Fill_1">' +
                    '<div class="valid-feedback" id="day1Fill_1_right" style="display: none;">' +
                    'Correct!' +
                    '</div>' +
                    '<div class="invalid-feedback" id="day1Fill_1_wrong" style="display: none;">' +
                    + element.wrongMessage +
                    '</div>' +
                '</div>'
            )
        }); 
        document.getElementById('day1FillDiv').insertAdjacentHTML(
            'beforeend',
            '<div class="flex_center_row row" style="margin-top: 40px;">' +
                '<button type="button" class="btn btn-primary col-8" style="display: block;" id="day1Submit" >Submit</button>' +
            '</div>'
        );
    }
    // Called at the end
    var initializeDatabase = function() {
        iphoneList.forEach(element => {
            document.getElementById('iphoneDatabase').insertAdjacentHTML(
                'beforeend',
                '<div class="grid-item">' + element.name + '</div>'      
            )
        });
        ipadList.forEach(element => {
            document.getElementById('ipadDatabase').insertAdjacentHTML(
                'beforeend',
                '<div class="grid-item">' + element.name + '</div>'      
            )
        });
        samsungList.forEach(element => {
            document.getElementById('samsungDatabase').insertAdjacentHTML(
                'beforeend',
                '<div class="grid-item">' + element.name + '</div>'      
            )
        });
        samsungTabletList.forEach(element => {
            document.getElementById('samsungTabletDatabase').insertAdjacentHTML(
                'beforeend',
                '<div class="grid-item">' + element.name + '</div>'      
            )
        });
        otherPhoneList.forEach(element => {
            document.getElementById('otherPhoneDatabase').insertAdjacentHTML(
                'beforeend',
                '<div class="grid-item">' + element.name + '</div>'      
            )
        });
        caseList.forEach(element => {
            document.getElementById('accessoriesDatabase').insertAdjacentHTML(
                'beforeend',
                '<div class="grid-item">' + element.name + '</div>'      
            )
        });
    }
    //hide all page for showing the right page
    var resetDisplay = function(){
        document.getElementById("learnDiv").style.display = "none";
        document.getElementById("caseDiv").style.display = "none";
        document.getElementById("phoneDiv").style.display = "none";
        document.getElementById("generalDiv").style.display = "none";
        document.getElementById("stabDiv").style.display = "none";
        document.getElementById("databaseDiv").style.display = "none";
        document.getElementById("day1MultiDiv").style.display = "none";
        document.getElementById("day2MultiDiv").style.display = "none";
        document.getElementById("day3MultiDiv").style.display = "none";
        document.getElementById("day1FillDiv").style.display = "none";
        document.getElementById("day2FillDiv").style.display = "none";
        document.getElementById("day3FillDiv").style.display = "none";
    }

    //下列50行均为导航栏点击函数，每当一个导航栏按键被点击，触发resetDisplay函数隐藏页面上所有内容，然后让特定内容重新显示；复用代码时注意id要与html文件中的id相匹配
    this.document.getElementById("learnButton").onclick = function(){
        resetDisplay();
        document.getElementById("learnDiv").style.display = "block";
    }

    this.document.getElementById("caseTestButton").onclick = function(){
        resetDisplay();
        document.getElementById("caseDiv").style.display = "block";
    }

    this.document.getElementById("modelTestButton").onclick = function(){
        resetDisplay();
        document.getElementById("phoneDiv").style.display = "block";
    }

    this.document.getElementById("stabTestButton").onclick = function(){
        resetDisplay();
        document.getElementById("stabDiv").style.display = "block";
    }

    this.document.getElementById("databaseButton").onclick = function(){
        resetDisplay();
        document.getElementById("databaseDiv").style.display = "block";
    }

    this.document.getElementById("day1Multi").onclick = function(){
        resetDisplay();
        document.getElementById("day1MultiDiv").style.display = "block";
    }

    this.document.getElementById("day2Multi").onclick = function(){
        resetDisplay();
        document.getElementById("day2MultiDiv").style.display = "block";
    }

    this.document.getElementById("day3Multi").onclick = function(){
        resetDisplay();
        document.getElementById("day3MultiDiv").style.display = "block";
    }

    this.document.getElementById("day1Fill").onclick = function(){
        resetDisplay();
        document.getElementById("day1FillDiv").style.display = "block";
    }

    this.document.getElementById("day2Fill").onclick = function(){
        resetDisplay();
        document.getElementById("day2FillDiv").style.display = "block";
    }

    this.document.getElementById("day3Fill").onclick = function(){
        resetDisplay();
        document.getElementById("day3FillDiv").style.display = "block";
    }


    //点击选择题选项时触发的函数
    $(document).on('click','.answer-case',function(){ //触发索引使用的class name需与生成题目选项（之前的..Gen系列函数）时的class name匹配
        $(".answer-case").removeClass("btn-success"); //使用Bootstrap框架改颜色
        $(".answer-case").removeClass("btn-danger");
        $(".answer-case").addClass("btn-secondary");
        $(".right-answer.answer-case").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-case right-answer"); //正确答案变绿
        $(".wrong-answer.answer-case").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-case wrong-answer"); //错误答案变红
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            caseScore++; //如果点击的选项时正确答案，分数加1
        } 
    });

    $(document).on('click','.answer-phone',function(){
        $(".answer-phone").removeClass("btn-success");
        $(".answer-phone").removeClass("btn-danger");
        $(".answer-phone").addClass("btn-secondary");
        $(".right-answer.answer-phone").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-phone right-answer");
        $(".wrong-answer.answer-phone").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-phone wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            phoneScore++;
        }    
    });

    $(document).on('click','.answer-stab',function(){
        $(".answer-stab").removeClass("btn-success");
        $(".answer-stab").removeClass("btn-danger");
        $(".answer-stab").addClass("btn-secondary");
        $(".right-answer.answer-stab").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-stab right-answer");
        $(".wrong-answer.answer-stab").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-stab wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            stabScore++;
        }    
    });

    $(document).on('click','.answer-day1',function(){
        $(".answer-day1").removeClass("btn-success");
        $(".answer-day1").removeClass("btn-danger");
        $(".answer-day1").addClass("btn-secondary");
        $(".right-answer.answer-day1").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-day1 right-answer");
        $(".wrong-answer.answer-day1").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-day1 wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            day1MultiScore++;
        }    
    });

    $(document).on('click','.answer-day2',function(){
        $(".answer-day2").removeClass("btn-success");
        $(".answer-day2").removeClass("btn-danger");
        $(".answer-day2").addClass("btn-secondary");
        $(".right-answer.answer-day2").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-day2 right-answer");
        $(".wrong-answer.answer-day2").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-day2 wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            day2MultiScore++;
        }    
    });

    $(document).on('click','.answer-day3',function(){
        $(".answer-day3").removeClass("btn-success");
        $(".answer-day3").removeClass("btn-danger");
        $(".answer-day3").addClass("btn-secondary");
        $(".right-answer.answer-day3").attr("class", "btn btn-success col-xl-2 col-sm-6 answer-day3 right-answer");
        $(".wrong-answer.answer-day3").attr("class", "btn btn-danger col-xl-2 col-sm-6 answer-day3 wrong-answer");
        $(".continue-button").css("display", "block");
        if($(this).hasClass('right-answer')){
            day3MultiScore++;
        }    
    });

    //填空题的验证函数，点击页面上的submit按钮时触发， 此处的索引id也要与生成时的匹配
    $(document).on('click','#day1Submit',function(){
        $("#day1Submit").addClass('disabled'); //submit按钮点击一次后便不能再点
        $("#day1Submit").prop('disabled', true);
        if($("#day1Fill_1").val() == 30){
            document.getElementById("day1Fill_1_right").style.display = "block";
        }
        if($("#day1Fill_1").val() != 30){
            document.getElementById("day1Fill_1_wrong").style.display = "block";
        };
        if($("#day1Fill_2").val() == 10){
            document.getElementById("day1Fill_2_right").style.display = "block";
        }
        if($("#day1Fill_2").val() != 10){
            document.getElementById("day1Fill_2_wrong").style.display = "block";
        };
        if($("#day1Fill_3").val() == 40){
            document.getElementById("day1Fill_3_right").style.display = "block";
        }
        if($("#day1Fill_3").val() != 40){
            document.getElementById("day1Fill_3_wrong").style.display = "block";
        };
        if($("#day1Fill_4").val() == 'No'){
            document.getElementById("day1Fill_4_right").style.display = "block";
        }
        if($("#day1Fill_4").val() == 'no'){
            document.getElementById("day1Fill_4_right").style.display = "block";
        }
        if($("#day1Fill_4").val() != 'No' && $("#day1Fill_4").val() != 'no'){
            document.getElementById("day1Fill_4_wrong").style.display = "block";
        }
        if($("#day1Fill_5").val() == 'No'){
            document.getElementById("day1Fill_5_right").style.display = "block";
        }
        if($("#day1Fill_5").val() == 'no'){
            document.getElementById("day1Fill_5_right").style.display = "block";
        }
        if($("#day1Fill_5").val() != 'No' && $("#day1Fill_5").val() != 'no'){
            document.getElementById("day1Fill_5_wrong").style.display = "block";
        }
    })

    $(document).on('click','#day2Submit',function(){
        $("#day2Submit").addClass('disabled');
        $("#day2Submit").prop('disabled', true);
        if($("#day2Fill_1").val() == 25){
            document.getElementById("day2Fill_1_right").style.display = "block";
        }
        if($("#day2Fill_1").val() != 25){
            document.getElementById("day2Fill_1_wrong").style.display = "block";
        };
        if($("#day2Fill_2").val() == 35){
            document.getElementById("day2Fill_2_right").style.display = "block";
        }
        if($("#day2Fill_2").val() != 35){
            document.getElementById("day2Fill_2_wrong").style.display = "block";
        };
        if($("#day2Fill_3").val() == 25){
            document.getElementById("day2Fill_3_right").style.display = "block";
        }
        if($("#day2Fill_3").val() != 25){
            document.getElementById("day2Fill_3_wrong").style.display = "block";
        };
        if($("#day2Fill_4").val() == 40){
            document.getElementById("day2Fill_4_right").style.display = "block";
        }
        if($("#day2Fill_4").val() != 40){
            document.getElementById("day2Fill_4_wrong").style.display = "block";
        }
        if($("#day2Fill_5").val() == 40){
            document.getElementById("day2Fill_5_right").style.display = "block";
        }
        if($("#day2Fill_5").val() != 40){
            document.getElementById("day2Fill_5_wrong").style.display = "block";
        }
    })

    $(document).on('click','#day3Submit',function(){
        $("#day3Submit").addClass('disabled');
        $("#day3Submit").prop('disabled', true);
        if($("#day3Fill_1").val() == 20){
            document.getElementById("day3Fill_1_right").style.display = "block";
        }
        if($("#day3Fill_1").val() != 20){
            document.getElementById("day3Fill_1_wrong").style.display = "block";
        };
        if($("#day3Fill_2").val() == 30){
            document.getElementById("day3Fill_2_right").style.display = "block";
        }
        if($("#day3Fill_2").val() != 30){
            document.getElementById("day3Fill_2_wrong").style.display = "block";
        };
        if($("#day3Fill_3").val() == 25){
            document.getElementById("day3Fill_3_right").style.display = "block";
        }
        if($("#day3Fill_3").val() != 25){
            document.getElementById("day3Fill_3_wrong").style.display = "block";
        };
        if($("#day3Fill_4").val() == 25){
            document.getElementById("day3Fill_4_right").style.display = "block";
        }
        if($("#day3Fill_4").val() != 25){
            document.getElementById("day3Fill_4_wrong").style.display = "block";
        }
        if($("#day3Fill_5").val() == 'No'){
            document.getElementById("day3Fill_5_right").style.display = "block";
        }
        if($("#day3Fill_5").val() == 'no'){
            document.getElementById("day3Fill_5_right").style.display = "block";
        }
        if($("#day3Fill_5").val() != 'No' && $("#day1Fill_5").val() != 'no'){
            document.getElementById("day3Fill_5_wrong").style.display = "block";
        }
    })
    
    //所有...Gen 函数的功能和实现逻辑都类似，设置一个list arr以及一个list arr2, arr和arr2在初始状态下相等，即出题范围；每生成一个正确答案为i的题目，则i从arr中被剔除（即可避免重复出题）；
    //生成每个单一题目的过程中，每生成一个错误答案m,则m从arr2中被剔除（避免正确答案被混入错误答案），并在生成下一道题目时重置
    var generateMultipleChoiceQuestions = function(caseList, maxQuestions, answerClassName, continueIDName, whereToPush) {
        var arr = JSON.parse(JSON.stringify(caseList));
        var loopNum = Math.min(maxQuestions, caseList.length); //生成题目的数量，通常情況下至多有5题或10题(maxQuestions),若题库太小则取题库的大小(questionsInListLength)
        console.log(loopNum);

        for(var i = 0; i < loopNum; i++){
            var arr2 = arr.slice();
            var rightAnswerIndex = Math.floor((Math.random()*arr.length)); //随机生成正确答案的index
            var rightAnswerPlace = Math.floor((Math.random()*4)); //正确答案在题目中的位置
            var rightAnswerContent = arr[rightAnswerIndex]; //从出题范围中获取正确答案的具体信息
            arr.splice(rightAnswerIndex,1); //从arr1中剔除正确答案避免重复出题
            arr2.splice(rightAnswerIndex,1); //从arr2中剔除正确答案避免正确答案的选项重复出现

            //生成错误答案
            var wrongAnswer1Index = Math.floor((Math.random()*arr2.length)); //随机生成错误答案1 的index
            var wrongAnswer1Content = arr2[wrongAnswer1Index]; //根据上一行随机生成的index获取错误答案1 的具体信息
            arr2.splice(wrongAnswer1Index,1); //将错误答案从arr2中剔除，避免错误答案重复出现，下同

            var wrongAnswer2Index = Math.floor((Math.random()*arr2.length));
            var wrongAnswer2Content = arr2[wrongAnswer2Index];
            arr2.splice(wrongAnswer2Index,1);

            var wrongAnswer3Index = Math.floor((Math.random()*arr2.length));
            var wrongAnswer3Content = arr2[wrongAnswer3Index]
            arr2.splice(wrongAnswer3Index,1);
           
            //一道选择题有四个选项，正确答案的位置由变量rightAnswerPlace决定，根据正确答案在题目中位置的不同生成不同的html； 
            //！！复用代码时注意修改class name "answer-?",即變數名稱 "answerClassName" 裡的string
            // 分別有: answer-day1, answer-day2, answer-day3, answer-phone, answer-case, answer-stab)！！
            if(rightAnswerPlace == 1){
                var answerButtons = 
                "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " right-answer'>" +rightAnswerContent.name + 
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer1Content.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer2Content.name + 
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>"
                + wrongAnswer3Content.name + "</button>";
            }
            else if(rightAnswerPlace == 2){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" +
                wrongAnswer1Content.name + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " right-answer'>" + rightAnswerContent.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer2Content.name + 
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>"
                + wrongAnswer3Content.name + "</button>";
            }
            else if(rightAnswerPlace == 3){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer1Content.name + 
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer2Content.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " right-answer'>" + rightAnswerContent.name + 
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>"
                + wrongAnswer3Content.name + "</button>";
            }
            else{
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" +wrongAnswer1Content.name + 
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer2Content.name +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer3Content.name + 
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " right-answer'>"
                + rightAnswerContent.name + "</button>";
            }

            //将刚才生成的（关于题目选项）html和下列（关于题目说明的）html一起加入...QuestionList，每当需要在页面上显示一道新题目时，就从这个list中抛出一道；具体详见文件底部的一系列click function 
            //题目是关于手机型号时，题目说明的内容是 “what is this model”，选项是型号名称
            //题目时关于店内产品时，题目说明的内容是 “what is this and how much is it?”, 选项是产品名称和价格；复用代码时需注意
            //！！复用代码时注意修改id "..Contiunue" ！！ 即變數名稱 "continueIDName" 裡的string
            // 分別有:day1Continue, day2Continue, day3Continue, modelContinue, caseContinue, stabContinue

            var productDescription;
            if(rightAnswerContent.desc != null) {
                productDescription = rightAnswerContent.desc + "; ";
            }
            else if(rightAnswerContent.desc == null) {
                productDescription = "";
            }
            var newQuestion = "<h3 style='text-align: center;'>" + productDescription + "what is this model? </h3><div class='flex_center_row row'><div class='image-box'><img src='" + rightAnswerContent.image + "'class='col'></div></div><div class='flex_center_row row' style='margin-top: 10px;'>" +
            answerButtons + "</div><div class='flex_center_row row' id='" + continueIDName + "' style='margin-top: 40px;'><button type='button' class='btn btn-primary col-8 continue-button' style='display: none;'>Continue</button></div>";
            whereToPush.push(newQuestion);
       }
    }

    // 與generateMultipleChoiceQuestions() 大同小異, 但須注意裡面問題的text和JSON reference有分別
    var generateMultipleChoiceQuestionsForCase = function(caseList, maxQuestions, answerClassName, continueIDName, whereToPush) {
        console.log(caseList);
        var arr = JSON.parse(JSON.stringify(caseList));
        var loopNum = Math.min(maxQuestions, caseList.length);
        console.log(loopNum);
        
        for(var i = 0; i < loopNum; i++){
            var arr2 = arr.slice();
            var randomNumber = Math.floor((Math.random()*arr.length));
            var rightAnswerPlace = Math.floor((Math.random()*4));
            var rightAnswer = arr[randomNumber];

            arr.splice(randomNumber,1);
            arr2.splice(randomNumber,1);

            var wrongAnswer1Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer1 = arr2[wrongAnswer1Place];
            arr2.splice(wrongAnswer1Place,1);

            var wrongAnswer2Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer2 = arr2[wrongAnswer2Place];
            arr2.splice(wrongAnswer2Place,1);

            var wrongAnswer3Place = Math.floor((Math.random()*arr2.length));
            var wrongAnswer3 = arr2[wrongAnswer3Place]
            arr2.splice(wrongAnswer3Place,1);
           
            if(rightAnswerPlace == 1){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case right-answer'>" +
                rightAnswer.name + " , $" + rightAnswer.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" + wrongAnswer1.name + " , $" + wrongAnswer1.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>"
                + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button>";
            }
            else if(rightAnswerPlace == 2){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" +
                wrongAnswer1.name + " , $" + wrongAnswer1.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case right-answer'>" + rightAnswer.name + " , $" + rightAnswer.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>"
                + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button>";
            }
            else if(rightAnswerPlace == 3){
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" +
                wrongAnswer1.name + " , $" + wrongAnswer1.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " right-answer'>" + rightAnswer.name + " , $" + rightAnswer.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>"
                + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button>";
            }
            else{
                var answerButtons = "<button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" +
                wrongAnswer1.name + " , $" + wrongAnswer1.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case wrong-answer'>" + wrongAnswer2.name + " , $" + wrongAnswer2.price +
                "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 " + answerClassName + " wrong-answer'>" + wrongAnswer3.name + " , $" + wrongAnswer3.price + "</button><button type='button' class='btn btn-secondary col-xl-2 col-sm-6 answer-case right-answer'>"
                + rightAnswer.name + " , $" + rightAnswer.price + "</button>";
            }
            var newQuestion = "<h3 style='text-align: center;'> what is this and how much is it?</h3><div class='flex_center_row row'><div class='image-box'><img src='" + rightAnswer.image + "'class='col'></div></div><div class='flex_center_row row' style='margin-top: 10px;'>" +
            answerButtons + "</div><div class='flex_center_row row' id='" + continueIDName + "' style='margin-top: 40px;'><button type='button' class='btn btn-primary col-8 continue-button' style='display: none;'>Continue</button></div>";
            whereToPush.push(newQuestion);
        }
    }

    var otherPhoneQuestionGen = function(){
        console.log("otherPhoneQuestionGen");
        // 5個parameter作用如下:
        // 1: 需要引用的題庫
        // 2: 決定問題的數量(例子: 若otherPhoneList小於10, 則取otherPhoneList的length, 否則取10)
        // 3, 4: HTML class reference, 用來正確顯示排版 (詳見generateMultipleChoiceQuestions() 裡的註解)
        // 5: 将刚才生成的（关于题目选项）html和下列（关于题目说明的）html一起加入...QuestionList，每当需要在页面上显示一道新题目时，就从这个list中抛出一道；具体详见文件底部的一系列click function 
        generateMultipleChoiceQuestions(otherPhoneList, 10, 'answer-phone', 'modelContinue', phoneQuestionList);
    }
    var day1Gen = function(){
        console.log("day1Gen");
        generateMultipleChoiceQuestions(day1List, 5, 'answer-day1', 'day1Continue', day1QuestionList);
    }
    var day1bGen = function(){
        console.log("day1bGen");
        generateMultipleChoiceQuestions(day1bList, 5, 'answer-day1', 'day1Continue', day1QuestionList);
    }
    var day2Gen = function(){
        console.log("day2Gen");
        generateMultipleChoiceQuestions(day2List, 10, 'answer-day2', 'day2Continue', day2QuestionList);
    }
    var day3Gen = function(){
        console.log("day3Gen");
        generateMultipleChoiceQuestions(day3List, 10, 'answer-day3', 'day3Continue', day3QuestionList);
    }
    var samsungQuestionGen = function(){
        console.log("samsungQuestionGen");
        generateMultipleChoiceQuestions(samsungList, 10, 'answer-phone', 'modelContinue', phoneQuestionList);
    }
    var samsungTabQuestionGen = function(){
        console.log("samsungTabQuestionGen");
        generateMultipleChoiceQuestions(samsungTabletList, 5, 'answer-stab', 'stabContinue', stabQuestionList);
    }
    var ipadQuestionGen = function(){
        console.log("ipadQuestionGen");
        generateMultipleChoiceQuestions(ipadList, 10, 'answer-phone', 'modelContinue', phoneQuestionList);
    }
    var phoneQuestionGen = function(){
        console.log("phoneQuestionGen");
        generateMultipleChoiceQuestions(iphoneList, 10, 'answer-phone', 'modelContinue', phoneQuestionList);
    }
    var caseQuestionGen = function(){
        console.log("caseQuestionGen");
        // 與generateMultipleChoiceQuestions() 差不多
        generateMultipleChoiceQuestionsForCase(caseList, 10, 'answer-case', 'caseContinue', caseQuestionList);
    }

    var main = async function() {
        // 0
        initializeLoadingText();
        // 1
        //使用async/await等待完getiPhoneSheetValues()回傳JSON檔案後，才會執行剩下的指令
        var iphoneData = await getiPhoneSheetValues();
        for (let i = 0; i < iphoneData.values.length; i++) {
            //只要name/description/image三項有一項為空，則跳過，防止因Google Sheet裡有空行而報錯
            if(!iphoneData.values[i][0] ||
                !iphoneData.values[i][1] ||
                !iphoneData.values[i][2]) {
                continue;
            }
            else {
                //先前從gsheetreader.js裡提取的URL格式長這樣：https://drive.google.com/file/d/19FJQCi6StpJDIEZzagZ6pZHn1SOtVLCx/view?usp=share_link
                //這條是Google Drive分享圖片用的連結，但這種格式會被CORS擋下，圖片會無法讀取。

                //解決辦法是先用Regex獲取URL裡面的ID，
                //注意這裡：＂match(/\/d\/(.+)\//)[1]＂這裡Regex會找到兩個結果，只有第二個值合適，填[1]取得第二個值。
                var oldUrl = iphoneData.values[i][2].match(/\/d\/(.+)\//)[1];
                //假設用上面的例子，獲取成功後的字串長這樣: 19FJQCi6StpJDIEZzagZ6pZHn1SOtVLCx
                
                var newUrl = "https://drive.google.com/uc?id=" + oldUrl;
                //沿用上面的例子，這裡newUrl的值會是：https://drive.google.com/uc?id=19FJQCi6StpJDIEZzagZ6pZHn1SOtVLCx
                //這種格式不會被CORS影響，能夠正常使用

                //把正確的值加到題庫裡
                iphoneList.push(
                    {
                        name: iphoneData.values[i][0],
                        desc: iphoneData.values[i][1],
                        image: newUrl
                    }
                );
            }
        }
        // 2
        var samsungData = await getSamsungSheetValues();
        for (let i = 0; i < samsungData.values.length; i++) {
            if(!samsungData.values[i][0] ||
                !samsungData.values[i][1] ||
                !samsungData.values[i][2]) {
                continue;
            }
            else {
                var oldUrl = samsungData.values[i][2].match(/\/d\/(.+)\//)[1];
                var newUrl = "https://drive.google.com/uc?id=" + oldUrl;

                samsungList.push(
                    {
                        name: samsungData.values[i][0],
                        desc: samsungData.values[i][1],
                        image: newUrl
                    }
                );
            }
        }
        // 3
        var ipadData = await getiPadSheetValues();
        for (let i = 0; i < ipadData.values.length; i++) {
            if(!ipadData.values[i][0] ||
                !ipadData.values[i][1] ||
                !ipadData.values[i][2]) {
                continue;
            }
            else {
                var oldUrl = ipadData.values[i][2].match(/\/d\/(.+)\//)[1];
                var newUrl = "https://drive.google.com/uc?id=" + oldUrl;

                ipadList.push(
                    {
                        name: ipadData.values[i][0],
                        desc: ipadData.values[i][1],
                        image: newUrl
                    }
                );
            }
        }
        // 4
        var samsungTabletData = await getSamsungTabletSheetValues();
        for (let i = 0; i < samsungTabletData.values.length; i++) {
            if(!samsungTabletData.values[i][0] ||
                !samsungTabletData.values[i][1] ||
                !samsungTabletData.values[i][2]) {
                continue;
            }
            else {
                var oldUrl = samsungTabletData.values[i][2].match(/\/d\/(.+)\//)[1];
                var newUrl = "https://drive.google.com/uc?id=" + oldUrl;

                samsungTabletList.push(
                    {
                        name: samsungTabletData.values[i][0],
                        desc: samsungTabletData.values[i][1],
                        image: newUrl
                    }
                );
            }
        }
        // 5
        var uncommonModelData = await getUncommonModelSheetValues();
        for (let i = 0; i < uncommonModelData.values.length; i++) {
            if(!uncommonModelData.values[i][0] ||
                !uncommonModelData.values[i][1] ||
                !uncommonModelData.values[i][2]) {
                continue;
            }
            else {
                var oldUrl = uncommonModelData.values[i][2].match(/\/d\/(.+)\//)[1];
                var newUrl = "https://drive.google.com/uc?id=" + oldUrl;

                otherPhoneList.push(
                    {
                        name: uncommonModelData.values[i][0],
                        desc: uncommonModelData.values[i][1],
                        image: newUrl
                    }
                );
            }
        }
        // 6
        var accessoriesData = await getAccessoriesSheetValues();
        for (let i = 0; i < accessoriesData.values.length; i++) {
            if(!accessoriesData.values[i][0] ||
                !accessoriesData.values[i][1] ||
                !accessoriesData.values[i][2]) {
                continue;
            }
            else {
                var oldUrl = accessoriesData.values[i][2].match(/\/d\/(.+)\//)[1];
                var newUrl = "https://drive.google.com/uc?id=" + oldUrl;

                caseList.push(
                    {
                        // ******** 注意這裡是price,不是desc ************
                        name: accessoriesData.values[i][0],
                        price: accessoriesData.values[i][1],
                        image: newUrl
                    }
                );
            }
        }
        // 7 - Day 1 Questions
        var day1QuestionsData = await getDay1QuestionsSheetValues();
        for (let i = 0; i < day1QuestionsData.values.length; i++) {
            //只要Question/Correct Answer/image兩項有一項為空，則跳過，防止因Google Sheet裡有空行而報錯
            //Tips和WrongMessage可以不寫,因此不判定
            if(!day1QuestionsData.values[i][0] ||
                !day1QuestionsData.values[i][1]) {
                continue;
            }
            else {
                //把正確的值加到題庫裡
                day1QuestionsList.push(
                    {
                        question: day1QuestionsData.values[i][0],
                        answer: day1QuestionsData.values[i][1],
                        tips: day1QuestionsData.values[i][2],
                        wrongMessage: day1QuestionsData.values[i][3]
                    }
                );
            }
        }
        console.log(day1QuestionsList);

        //day1 多选题题库(day1默认包含所有iPhone型号，即iphoneList的内容)； 可加入型号
        //day1: 先问完Samsung再问iPhone型号
        day1List = samsungList.slice();
        day1bList = iphoneList.slice();
        //day2 默认为ipad题库
        day2List = ipadList.slice();
        //day3 多选题题库；可加入产品
        day3List = otherPhoneList.slice();
        //顯示首頁
        deleteLoadingText();
        initializeDisplay();
        //call 题目生成函数
        day1Gen();
        day1bGen();
        day2Gen();
        day3Gen();
        caseQuestionGen();
        phoneQuestionGen();
        ipadQuestionGen();
        samsungQuestionGen();
        otherPhoneQuestionGen();
        samsungTabQuestionGen();
        
        day1FillInQuestionsGen();
        //day2FillInQuestionsGen();
        //day3FillInQuestionsGen();
        //在網頁中顯示整個題庫
        initializeDatabase();

        //点击多选题页面的continue按键时触发的函数，索引id要与生成时的匹配
        var totalday1QueNum = day1QuestionList.length; //题目数量，用于核对此题是否是最后一题并告诉用户现在做的是第几题
        $("#day1Mul_question_num").html(day1I + "/" + totalday1QueNum);
        $("#day1Question").html(day1QuestionList[0]); //初始题目
            day1QuestionList.splice(0,1); //将初始题目从列表中删除
        $(document).on('click','#day1Continue',function(){ 
            if(day1I < totalday1QueNum){ //不是最后一题：
                $("#day1Question").html(day1QuestionList[0]); //那么我们从列表抛出一题来显示
                day1QuestionList.splice(0,1); //把刚刚抛出的题删掉
                day1I++;
                $("#day1Mul_question_num").html(day1I + "/" + totalday1QueNum); 
            }
            else{ //是最后一题，那么我们显示分数
                $("#day1Question").html("<h2>Your score for 'Day 1 multiple choices question (popular models)' test is " + day1MultiScore + "/" + totalday1QueNum + "</h2>");
            }     
        });

        var totalday2QueNum = day2QuestionList.length;
        $("#day2Mul_question_num").html(day2I + "/" + totalday2QueNum);
        $("#day2Question").html(day2QuestionList[0]);
            day2QuestionList.splice(0,1);
        $(document).on('click','#day2Continue',function(){
            if(day2I < totalday2QueNum){
                $("#day2Question").html(day2QuestionList[0]);
                day2QuestionList.splice(0,1);
                day2I++;
                $("#day2Mul_question_num").html(day2I + "/" + totalday2QueNum);
            }
            else{
                $("#day2Question").html("<h2>Your score for 'Day 2 multiple choices question (iPad models)' test is " + day2MultiScore + "/" + totalday2QueNum + "</h2>");
            }     
        });
    
        var totalday3QueNum = day3QuestionList.length;
        $("#day3Mul_question_num").html(day3I + "/" + totalday3QueNum);
        $("#day3Question").html(day3QuestionList[0]);
            day3QuestionList.splice(0,1);
        $(document).on('click','#day3Continue',function(){
            if(day3I < totalday3QueNum){
                $("#day3Question").html(day3QuestionList[0]);
                day3QuestionList.splice(0,1);
                day3I++;
                $("#day3Mul_question_num").html(day3I + "/" + totalday3QueNum);
            }
            else{
                $("#day3Question").html("<h2>Your score for 'Day 3 multiple choices question (Accessaries)' test is " + day3MultiScore + "/" + totalday3QueNum + "</h2>");
            }     
        });
    
        var totalCaseQueNum = caseQuestionList.length;
        $("#case_question_num").html(caseI + "/" + totalCaseQueNum);
        $("#caseQuestion").html(caseQuestionList[0]);
            caseQuestionList.splice(0,1);
        $(document).on('click','#caseContinue',function(){
            if(caseI < totalCaseQueNum){
                $("#caseQuestion").html(caseQuestionList[0]);
                caseQuestionList.splice(0,1);
                caseI++;
                $("#case_question_num").html(caseI + "/" + totalCaseQueNum);
            }
            else{
                $("#caseQuestion").html("<h2>Your score for '(Mixed) case and accessaries test' is " + caseScore + "/" + totalCaseQueNum + "</h2>");
            }
            
        });
    
        var totalModelQueNum = phoneQuestionList.length;
        $("#model_question_num").html(modelI + "/" + totalModelQueNum);
        $("#phoneQuestion").html(phoneQuestionList[0]);
            phoneQuestionList.splice(0,1);
            $(document).on('click','#modelContinue',function(){
            if(modelI < totalModelQueNum){
                $("#phoneQuestion").html(phoneQuestionList[0]);
                phoneQuestionList.splice(0,1);
                modelI++;
                $("#model_question_num").html(modelI + "/" + totalModelQueNum);
            }
            else{
                $("#phoneQuestion").html("<h2>Your score for '(Mixed) model test' is " + phoneScore + "/" + totalModelQueNum + "</h2>");
            }
        });
        
        var totalStabQueNum = stabQuestionList.length;
        $("#stab_question_num").html(stabI + "/" + totalStabQueNum);
        $("#stabQuestion").html(stabQuestionList[0]);
            stabQuestionList.splice(0,1);
            $(document).on('click','#stabContinue',function(){
            if(stabI < totalStabQueNum){
                $("#stabQuestion").html(stabQuestionList[0]);
                stabQuestionList.splice(0,1);
                stabI++;
                $("#stab_question_num").html(stabI + "/" + totalStabQueNum);
            }
            else{
                $("#stabQuestion").html("<h2>Your score for 'Samsung tablet test' is " + stabScore + "/" + totalStabQueNum + "</h2>");
            }
        });
    }
    main();
}