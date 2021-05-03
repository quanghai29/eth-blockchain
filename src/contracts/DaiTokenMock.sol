// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DaiTokenMock is ERC20 {
    constructor() ERC20("Dai Stablecoin (DAI)", "DAI"){
        decimals();
    }

    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    function mint(address account, uint256 amount) public {
        _mint(account, amount);
    }
}