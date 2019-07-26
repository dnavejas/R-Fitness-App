"use strict";
const spreadsheetId = "1MaFPLLL-sX72irtKPg55LyLzeb-e8dQrAgg-1F8GFXA";
var settings = {
  async: true,
  crossDomain: true,
  url: `https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values:batchGet`,
  method: "GET",
  headers: {},
  data: "{}"
};

$.ajax(settings).done(function(response) {
  console.log(response);
});
