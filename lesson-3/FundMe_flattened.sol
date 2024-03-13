
// File: @chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol


pragma solidity ^0.8.0;

interface AggregatorV3Interface {
  function decimals() external view returns (uint8);

  function description() external view returns (string memory);

  function version() external view returns (uint256);

  function getRoundData(
    uint80 _roundId
  ) external view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);

  function latestRoundData()
    external
    view
    returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound);
}

// File: FundMe.sol



pragma solidity ^0.8.19;


contract FundMe {

    AggregatorV3Interface internal dataFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
    mapping(address funder => uint256 balance) public listOfFunders;
    uint256 minimum_usd = 100;
    uint256 target = 200;
    address owner;

    // status control
    uint256 lockTime;
    uint256 deploymentTime;
    bool public fundSuccess;
    bool public windowOpen = true;

    constructor(uint256 _lockTime) {
        owner = msg.sender;
        lockTime = _lockTime;
        deploymentTime = block.timestamp;
    }

    function fund() public payable {
        require(windowOpen, "the campaign is closed");
        require(convertEthToUsd(msg.value) >= minimum_usd * 10 ** 18, "Please send more ETH");
        listOfFunders[msg.sender] = msg.value;
    }

    function convertEthToUsd(uint256 ethAmount) public view returns (uint256 result) {
        // prettier-ignore
        (
            /* uint80 roundID */,
            int answer,
            /*uint startedAt*/,
            /*uint timeStamp*/,
            /*uint80 answeredInRound*/
        ) = dataFeed.latestRoundData();
        result = uint(answer) * ethAmount / (10 ** 8);
    }

    function getFund() public onlyOwner unlocked {
        require(convertEthToUsd(address(this).balance) >= target * 10 ** 18, "target is not reached");
        // 第一种方法：transfer
        payable(msg.sender).transfer(address(this).balance);
        fundSuccess = true;
        windowOpen = false;
        
        // // 第二种方法：send
        // bool success = payable(msg.sender).send(address(this).balance);
        // require(success, "withdrawal failed!");
        // // 第三种方法： call
        // (bool success1, ) = msg.sender.call{value: address(this).balance}("");
        // require(success1, "withdrawal failed");
    }

    function getRefund() public unlocked {
        require(convertEthToUsd(address(this).balance) < target, "target is reached");
        require(listOfFunders[msg.sender] != 0, "there is no fund for you");
        payable(msg.sender).transfer(listOfFunders[msg.sender]);
        windowOpen = false;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier unlocked() {
        require(block.timestamp >= deploymentTime + lockTime);
        _;
    }
}