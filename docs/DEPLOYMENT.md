
## Деплой
Для создания новой сид фразы при деплое из терминала:
```bash
yarn run mnemonic
```


### Деплой Remix
  - Переключить MetaMask в нужную сеть;
  - Пополнить баланс;
  - Открыть сайт [http://remix.ethereum.org/](http://remix.ethereum.org/);
  - Создать в Remix файл `FenumDistributor.sol` и скопировать в него содержимое файла `contracts/FenumDistributor.sol`;
  - Компиляция:
    - `COMPILER`: `0.7.6`;
    - `Enable optimization`: `true`;
    - `runs`: с `200` на `999999`;
    - Нажать кнопку `Compile FenumDistributor.sol`.
  - Деплой:
    - `ENVIRONMENT`: `Injected Web3` (появится адрес и баланс из `MetaMask`);
    - `CONTRACT`: `FenumDistributor - browser/FenumDistributor.sol`;
    - Сгенерировать новое MERKLE_ROOT
      - `yarn run generate-merkle-root --input /path/to/file/balance-map.json`, файл по аналогии с `scripts/example.json`.
    - Указать параметры:
      - Адрес `FenumToken` (TOKEN_ADDRESS);
      - merkleRoot (MERKLE_ROOT).
    - Нажать кнопку `Deploy`.
  - Верификация контракта на `Etherscan`:
    - Открыть контракт во вкладке `Contract`;
    - Нажать `Verify and Publish`;
    - `Please select Compiler Type`: `Solidity (Single file)`;
    - `Please select Compiler Version`: `v0.7.6`;
    - `Please select Open Source License Type`: `MIT License (MIT)`;
    - `Continue`;
    - `Optimization`: `Yes`;
    - Вставить код контракта `FenumDistributor.sol` в поле `Enter the Solidity Contract Code below *`;
    - Открыть `(Runs, EvmVersion & License Type settings)`;
    - `Runs`: `999999`;
    - Нажать `Verify and Publish`.


### Деплой Development
В отдельном терминале запустить `ganache-cli`:
```bash
yarn run ganache-cli
```

После этого деплой:
```bash
yarn run deploy development
```


### Деплой Mainnet
```bash
yarn run deploy mainnet
yarn run verify mainnet FenumDistributor
```


### Деплой Ropsten
```bash
yarn run deploy ropsten
yarn run verify ropsten FenumDistributor
```


### Деплой Kovan
```bash
yarn run deploy kovan
yarn run verify kovan FenumDistributor
```


### Деплой Rinkeby
```bash
yarn run deploy rinkeby
yarn run verify rinkeby FenumDistributor
```


### Деплой Goerli
```bash
yarn run deploy goerli
yarn run verify goerli FenumDistributor
```


### Публикация в NPM
После деплоя нужно опубликовать в [NPM](https://www.npmjs.com/).
```bash
npm publish
# или
yarn publish
```
