function dateWork(xhrResponse) {
  // do work here
  const htmlArr = [];
  const todaysDate = new Date();
  const data =
    typeof xhrResponse === "string" ? JSON.parse(xhrResponse) : xhrResponse;
  const dataArr = data.values;
  dataArr.forEach(element => {
    const pickedDate = Date.parse(element[0].replace(/-/g, " "));
    const dateDifference = Math.abs(Number(todaysDate) - pickedDate);
    if (dateDifference > 86400000 && dateDifference < 172800000) {
      // let NewPage = document.createElement("h3");
      // NewPage.className = "text-center";

      for (let i = 1; i < element.length; i++) {
        htmlArr.push(element[i]);
      }
    }
  });

  return htmlArr;
}

function makeRequest(method, url) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader(
      "Authorization",
      "Bearer " +
        "ya29.GltZB7Oip1H_tZ9leiTpT2IBUOUrX8PeooNZP3Y1_prGerUGBa047_PIwfFBrfdlxonJREVWKSHeWSxtBos3PCH1eLJMRSYyKTI5a4ArKl1SZhvE6mgL2hhS_J_3"
    );
    xhr.onload = function() {
      if (this.status >= 200 && this.status < 300) {
        resolve(dateWork(xhr.response));
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function() {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    xhr.send();
  });
}

export async function doAjaxThings() {
  const url =
    "https://sheets.googleapis.com/v4/spreadsheets/1pG2h6Ofs6k7FjKDutM2Uhdh8yB9_TeWJa0M6gL6vPwA/values/A:F";
  // await code here
  const result = await makeRequest("GET", url);
  // code below here will only execute when await makeRequest() finished loading
  return result;
}
