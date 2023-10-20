function renderFirstChart() {
  let data = firstChart().then((data) => {
    createFirstChart(data);
  });
}

function renderSecondChart() {
  let data = secondChart().then((data) => {
    createSecondChart(data);
  });
}

function renderThirdChart() {
  let data = thirdChart().then((data) => {
    createThirdChart(data);
  });
}
