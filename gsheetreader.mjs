  // ************ You need a Google Cloud Project with Google Sheet API enabled, as well as a API key.

  // apiKey (required) - the API key you generated in the steps above. It will look something like this: 'BIfqSyD4ZoTrXMfF2mhAMVNNiensNsWL4XC6Sxc'
  // sheetId (required) - the id of the sheet you have made pulicly available, in this case, the ID is 1hb2XiLriTd_RzLYDDxsQwSmflKVDJCdSnY-5VNqYR68,
  // which is extracted from the shareable link: https://docs.google.com/spreadsheets/d/1hb2XiLriTd_RzLYDDxsQwSmflKVDJCdSnY-5VNqYR68/edit#gid=0 (the letters between d/ and /edit)

  // returnAllResults (optional) - if you wish to override the filter (perhaps for demoing or testing) then set this value to true
  // filter (optional) - an object consisting of key/value pairs where key is a column header in the Sheet and value is the value to match for the filter.

  // filterOptions - (optional) - to better control the filter's matching, you can optionally supply a filterOptions object consisting of the following properties:
  // (1) operator - default = 'or' - supplying either 'or' or 'and', this dictates whether to match ALL the values in the row, 
  // or ANY of them -- e.g. when supplying 'or', if any of the row's values match, that row will be returned.
  // (2) matching - default = 'loose' - with matching, if you wish to control how strictly the filter matches against the cell's value, 
  // you can supply 'loose', which offers a fuzzy search, or 'strict' which is more picky. 
  // For example, 'loose' would match 'introduction' in the following sentence, 
  // 'introduction to mathematatics', but 'strict' would not.
  import GSheetReader from "./node_modules/g-sheets-api";
  
  const page1 = {
    apiKey: 'BIfqSyD4ZoTrXMfF2mhAMVNNiensNsWL4XC6Sxc',
    sheetId: '1hb2XiLriTd_RzLYDDxsQwSmflKVDJCdSnY-5VNqYR68',
    sheetNumber: 1,
    sheetName: 'Sheet1', // if sheetName is supplied, this will take precedence over sheetNumber
    returnAllResults: false,
    filter: {
      'department': 'archaeology',
      'module description': 'introduction'
    },
    filterOptions: {
      operator: 'or',
      matching: 'loose'
    }
  }

console.log("Working");
  // Because we're dealing with JavaScript Promises, 
//in order to call and use the reader, you'll need to pass in an options object (explained below)
// and a callback function that will be passed the returned results from your Sheet.

GSheetReader(page1, results => {

  const table = document.createElement('table');
  const header = table.createTHead();
  const headerRow = header.insertRow(0);
  const tbody = table.createTBody();

  // First, create a header row
  Object.getOwnPropertyNames(results[0]).forEach(colName => {
    const cell = headerRow.insertCell(-1);
    cell.innerHTML = colName;
  });

  // Next, fill the rest of the rows with the lovely data
  results.forEach(result => {
    const row = tbody.insertRow(-1);

    Object.keys(result).forEach(key => {
      const cell = row.insertCell(-1);
      cell.innerHTML = result[key];
    })
  });

  const main = document.querySelector('#googleSheetTest');
  main.innerHTML = "";
  main.append(table);
});