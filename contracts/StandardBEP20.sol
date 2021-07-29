// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BEP20.sol";

contract StandardBEP20 is BEP20 {

    constructor (
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 initialBalance
        )
        BEP20(name, symbol)
    {
        require(initialBalance > 0, "StandardBEP20: supply cannot be zero");

        _setupDecimals(decimals);
        _mint(_msgSender(), initialBalance);
    }
}
