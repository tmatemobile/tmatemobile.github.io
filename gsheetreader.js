// Public link: https://docs.google.com/spreadsheets/d/e/2PACX-1vTWPg4HLfk7Sn3rgvnQTimIkspS1phKsDR27BZIHJnqILg5eKP3MGp2Zx95ZV9QMHakbWNEWz68AsKN/pubhtml

// 參考資料:
// https://levelup.gitconnected.com/google-sheets-api-tutorial-with-javascript-588f581aa1d9
// https://developer.okta.com/blog/2021/08/02/fix-common-problems-cors#cors-in-flight
// https://stackoverflow.com/questions/56138090/how-to-get-an-image-in-cell-url-from-the-google-sheets-api

// Google Sheet ID藏在Google sheet的連結網址裡面
// Google sheet的連結: https://docs.google.com/spreadsheets/d/1hb2XiLriTd_RzLYDDxsQwSmflKVDJCdSnY-5VNqYR68/edit#gid=0
const SHEET_ID = '1hb2XiLriTd_RzLYDDxsQwSmflKVDJCdSnY-5VNqYR68';

// 存取Google Sheet API v4的API key
// 如果題庫讀取失敗，瀏覽器按F12查看原始碼時顯示錯誤為憑證錯誤的話，打開一個任意的Google Cloud Project，加入Google Sheet API，再新建一個API key即可
// 詳見：https://levelup.gitconnected.com/google-sheets-api-tutorial-with-javascript-588f581aa1d9
const API_KEY = 'AIzaSyAb8fdJjnhKwj0LlZWz3kcC0Uz7kxyIQXc';

//工作表(Sheet)的名稱，要修改的話注意空格與大小寫。
const PAGE1_NAME = '1 - iPhone';
const PAGE2_NAME = '2 - Samsung';
const PAGE3_NAME = '3 - iPad';
const PAGE4_NAME = '4 - Samsung Tablet';
const PAGE5_NAME = '5 - Uncommon Model';
const PAGE6_NAME = '6 - Accessories';
const DAY1FILLIN_NAME =  'Day 1 Questions';
const DAY2FILLIN_NAME =  'Day 2 Questions';
const DAY3FILLIN_NAME =  'Day 3 Questions';

//提取資料的範圍(對應excel檔案的行列)
const PAGE1_RANGE = 'A2:C60';
const PAGE2_RANGE = 'A2:C60';
const PAGE3_RANGE = 'A2:C60';
const PAGE4_RANGE = 'A2:C60';
const PAGE5_RANGE = 'A2:C60';
const PAGE6_RANGE = 'A2:C60';
const DAY1FILLIN_RANGE =  'A2:D30';
const DAY2FILLIN_RANGE =  'A2:D30';
const DAY3FILLIN_RANGE =  'A2:D30';

// 1 - iPhone
var getiPhoneSheetValues = async () => {
    //發出HTTP請求
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${PAGE1_NAME}!${PAGE1_RANGE}?key=${API_KEY}`, 
    {
      // headers須使用"Content-Type": "application/json", 否則會出錯
        headers: 
        {
        "Content-Type": "application/json"
        },
        valueRenderOption: "FORMULA"
    });
    const data = await request.json();
    console.log(data);
    //return的值為JSON格式。下面的function原理一樣。
    return data;
  }

// 2 - Samsung
var getSamsungSheetValues = async () => {
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${PAGE2_NAME}!${PAGE2_RANGE}?key=${API_KEY}`, 
    {
        headers: 
        {
        "Content-Type": "application/json"
        },
        valueRenderOption: "FORMULA"
    });
    const data = await request.json();
    console.log(data);
    return data;
  }

// 3 - iPad
var getiPadSheetValues = async () => {
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${PAGE3_NAME}!${PAGE3_RANGE}?key=${API_KEY}`, 
    {
        headers: 
        {
        "Content-Type": "application/json"
        },
        valueRenderOption: "FORMULA"
    });
    const data = await request.json();
    console.log(data);
    return data;
  }

// 4 - Samsung Tablet
var getSamsungTabletSheetValues = async () => {
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${PAGE4_NAME}!${PAGE4_RANGE}?key=${API_KEY}`, 
    {
        headers: 
        {
        "Content-Type": "application/json"
        },
        valueRenderOption: "FORMULA"
    });
    const data = await request.json();
    console.log(data);
    return data;
  }

// 5 - Uncommon Model
var getUncommonModelSheetValues = async () => {
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${PAGE5_NAME}!${PAGE5_RANGE}?key=${API_KEY}`, 
    {
        headers: 
        {
        "Content-Type": "application/json"
        },
        valueRenderOption: "FORMULA"
    });
    const data = await request.json();
    console.log(data);
    return data;
  }

// 6 - Accessories
var getAccessoriesSheetValues = async () => {
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${PAGE6_NAME}!${PAGE6_RANGE}?key=${API_KEY}`, 
    {
        headers: 
        {
        "Content-Type": "application/json"
        },
        valueRenderOption: "FORMULA"
    });
    const data = await request.json();
    console.log(data);
    return data;
  }

// Day 1 Questions
var getDay1QuestionsSheetValues = async () => {
  const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${DAY1FILLIN_NAME}!${DAY1FILLIN_RANGE}?key=${API_KEY}`, 
  {
      headers: 
      {
      "Content-Type": "application/json"
      },
      valueRenderOption: "FORMULA"
  });
  const data = await request.json();
  console.log(data);
  return data;
}

// Day 2 Questions
var getDay2QuestionsSheetValues = async () => {
  const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${DAY2FILLIN_NAME}!${DAY2FILLIN_RANGE}?key=${API_KEY}`, 
  {
      headers: 
      {
      "Content-Type": "application/json"
      },
      valueRenderOption: "FORMULA"
  });
  const data = await request.json();
  console.log(data);
  return data;
}

// Day 3 Questions
var getDay3QuestionsSheetValues = async () => {
  const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${DAY3FILLIN_NAME}!${DAY3FILLIN_RANGE}?key=${API_KEY}`, 
  {
      headers: 
      {
      "Content-Type": "application/json"
      },
      valueRenderOption: "FORMULA"
  });
  const data = await request.json();
  console.log(data);
  return data;
}

  //給main.js使用
  export {getiPhoneSheetValues, 
        getSamsungSheetValues, 
        getiPadSheetValues, 
        getSamsungTabletSheetValues, 
        getUncommonModelSheetValues, 
        getAccessoriesSheetValues,
        getDay1QuestionsSheetValues,
        getDay2QuestionsSheetValues,
        getDay3QuestionsSheetValues};