function countChocolates(totalMoney, chocolateCost) {
    // Convert the input values to numeric format
    const money = parseFloat(totalMoney);
    const cost = parseFloat(chocolateCost);
  
    // Check for invalid input: negative values
    if (money < 0 || cost < 0) {
      return "Invalid input";
    }
  
    // Calculate the initial number of chocolates Ashi can buy
    let initialChocolates = Math.floor(money / cost);
  
    // Calculate the number of additional chocolates Ashi can get from wrappers
    let wrappers = initialChocolates;
    let additionalChocolates = 0;
  
    while (wrappers >= 3) {
      const exchangedChocolates = Math.floor(wrappers / 3);
      additionalChocolates += exchangedChocolates;
      wrappers = exchangedChocolates + (wrappers % 3);
    }
  
    // Calculate the total number of chocolates Ashi can consume
    const totalChocolates = initialChocolates + additionalChocolates;
  
    return totalChocolates;
  }
  
  // Example usage
  const totalMoney = "55$";
  const chocolateCost = "5$";
  const numChocolates = countChocolates(totalMoney, chocolateCost);
  console.log(numChocolates);