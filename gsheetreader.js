// Public link: https://docs.google.com/spreadsheets/d/e/2PACX-1vTWPg4HLfk7Sn3rgvnQTimIkspS1phKsDR27BZIHJnqILg5eKP3MGp2Zx95ZV9QMHakbWNEWz68AsKN/pubhtml

// Tutorials:
// https://levelup.gitconnected.com/google-sheets-api-tutorial-with-javascript-588f581aa1d9
// https://developer.okta.com/blog/2021/08/02/fix-common-problems-cors#cors-in-flight
// https://stackoverflow.com/questions/56138090/how-to-get-an-image-in-cell-url-from-the-google-sheets-api

// Google Sheet的ID藏在網址裡面
// Google sheet的連結: https://docs.google.com/spreadsheets/d/1hb2XiLriTd_RzLYDDxsQwSmflKVDJCdSnY-5VNqYR68/edit#gid=0
const SHEET_ID = '1hb2XiLriTd_RzLYDDxsQwSmflKVDJCdSnY-5VNqYR68';

// 存取Google Sheet API v4的API key
// 如果題庫讀取失敗，顯示錯誤為憑證錯誤的話，打開一個任意的Google Cloud Project新建一個API key即可
const API_KEY = 'AIzaSyAb8fdJjnhKwj0LlZWz3kcC0Uz7kxyIQXc';

//工作表(Sheet)的名稱，要修改的話注意空格與大小寫。
const PAGE1_NAME = '1 - iPhone';
const PAGE2_NAME = '2 - Samsung';
const PAGE3_NAME = '3 - iPad';
const PAGE4_NAME = '4 - Samsung Tablet';
const PAGE5_NAME = '5 - Uncommon Model';
const PAGE6_NAME = '6 - Accessories';

//提取資料的範圍
const PAGE1_RANGE = 'A2:C40';
const PAGE2_RANGE = 'A2:C40';
const PAGE3_RANGE = 'A2:C40';
const PAGE4_RANGE = 'A2:C40';
const PAGE5_RANGE = 'A2:C40';
const PAGE6_RANGE = 'A2:C80';

// 1 - iPhone
var getiPhoneSheetValues = async () => {
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${PAGE1_NAME}!${PAGE1_RANGE}?key=${API_KEY}`, 
    {
        headers: 
        {
        "Content-Type": "application/json"
        },
        valueRenderOption: "FORMULA"
    });
    const data = await request.json();
    console.log(data);
    //const url = data.values[0][2].match(/https?:\/\/[\w\S][^"]+/)[0];
    // const url = data.values[0][2].match(/\/d\/(.+)\//)[1];
    // console.log(url);
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

  export {getiPhoneSheetValues, getSamsungSheetValues, getiPadSheetValues, 
    getSamsungTabletSheetValues, getUncommonModelSheetValues, getAccessoriesSheetValues};