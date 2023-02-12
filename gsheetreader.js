// Google Sheet API v4 access token: 
//ya29.a0AVvZVsq0U0WLF7DtsNKl1ApViRmyi3Cv9nRAOhycCSlRvi6P3byNtmBFr3dkKHqCun74JdO4y7_w4RFkwZVqK1vU0jWItKwGbXjUxtIyLOEPYkX98GAl7mauiYthV5uDfvMTQoD7wST5wJnWgwbfIs9zH87YaCgYKASsSARMSFQGbdwaIHoNslE24fQc9qTflD7mavg0163

// Tutorials:
// https://levelup.gitconnected.com/google-sheets-api-tutorial-with-javascript-588f581aa1d9
// https://developer.okta.com/blog/2021/08/02/fix-common-problems-cors#cors-in-flight

// Google Sheet的ID藏在網址裡面
// Google sheet的連結: https://docs.google.com/spreadsheets/d/1hb2XiLriTd_RzLYDDxsQwSmflKVDJCdSnY-5VNqYR68/edit#gid=0
const SHEET_ID = '1hb2XiLriTd_RzLYDDxsQwSmflKVDJCdSnY-5VNqYR68';

// 存取Google Sheet API v4的API key
// 如果題庫讀取失敗，顯示錯誤為憑證錯誤的話，打開一個任意的Google Cloud Project新建一個API key即可
const API_KEY = 'AIzaSyAb8fdJjnhKwj0LlZWz3kcC0Uz7kxyIQXc';

//工作表(Sheet)的名稱
const PAGE1_NAME = '1 - iPhone';
const PAGE2_NAME = '2 - Samsung';
const PAGE3_NAME = '3 - iPad';

//提取資料的範圍
const PAGE1_RANGE = 'A2:C10';

getSheetValues = async () => {
    const request = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${PAGE1_NAME}!${PAGE1_RANGE}?key=${API_KEY}`,
    {
        headers: 
        {
        "Content-Type": "application/json" 
        }
    });
    const data = await request.json();
    console.log(data);
    return data;
  }

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: "1hb2XiLriTd_RzLYDDxsQwSmflKVDJCdSnY",
      range: "1 - iPhone!C2",
      valueRenderOption: "FORMULA"
    },
    function(err, res) {
      if (err) {
        console.log(err);
        return;
      }
      const url = res.data.values[0][0].match(/https?:\/\/[\w\S][^"]+/)[0];
      console.log(url);
    }
  )

  console.log("gsheetreader.mjs is working");
  document.getElementById("testButton").onclick = getSheetValues;