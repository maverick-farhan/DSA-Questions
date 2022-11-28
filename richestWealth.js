var maximumWealth = function (accounts) {
  let ans = Number.MIN_VALUE;
  for (let i = 0; i < accounts.length; i++) {
    let wealth = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      wealth += accounts[i][j];
    }

    if (wealth > ans) {
      ans = wealth;
    }
  }
  return ans;
};

console.log(
  maximumWealth([
    [1, 14, 3],
    [4, 3, 4],
    [3, 1, 5],
  ])
);
