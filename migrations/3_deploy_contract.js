var Zombie = artifacts.require("ZombieFactory");
module.exports = async (deployer) => {
   await deployer.deploy(Zombie);
   zombieInstance = await Zombie.deployed();
   await zombieInstance.createRandomZombie('my_zombie');
   await zombieInstance.createRandomZombie('hadi');
   await zombieInstance.createRandomZombie('hamed');
};