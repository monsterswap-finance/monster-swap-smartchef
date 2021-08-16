pragma solidity >=0.5.0;
/*
 * MonsterSwap 
 * App:             https://monsterswap.finance
 * Medium:          https://monsterswap.medium.com/    
 * Twitter:         https://twitter.com/MonsterSwapping
 * Telegram:        https://t.me/monster_finance
 * Announcements:   https://t.me/monsterswap_news
 * GitHub:          ##
 */


interface IMonsterCallee {
    function pancakeCall(address sender, uint amount0, uint amount1, bytes calldata data) external;
}