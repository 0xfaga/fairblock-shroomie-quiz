const questions = [
  // 🧠 Beginner Level
  {
    question: "What is Fairblock?",
    answers: [
      { text: "A game platform", correct: false },
      { text: "A decentralized cryptographic computer", correct: true },
      { text: "A centralized exchange", correct: false },
      { text: "An NFT marketplace", correct: false }
    ]
  },
  {
    question: "Which of these ecosystems does Fairblock integrate with?",
    answers: [
      { text: "Arbitrum", correct: false },
      { text: "Solana", correct: false },
      { text: "Base", correct: false },
      { text: "All of the above", correct: true }
    ]
  },
  {
    question: "What’s the name of Fairblock’s native chain?",
    answers: [
      { text: "Fairychain", correct: false },
      { text: "Fairynet", correct: false },
      { text: "Fairyring", correct: true },
      { text: "Fairhub", correct: false }
    ]
  },
  {
    question: "What kind of applications does Fairblock host natively?",
    answers: [
      { text: "CApps (Confidential Apps)", correct: true },
      { text: "Dapples", correct: false },
      { text: "Web2 apps", correct: false },
      { text: "Oracles", correct: false }
    ]
  },
  {
    question: "What main problem does Fairblock solve?",
    answers: [
      { text: "Slow transaction speed", correct: false },
      { text: "Onchain information leakage", correct: true },
      { text: "Meme coin volatility", correct: false },
      { text: "Centralized wallets", correct: false }
    ]
  },

  // ⚙️ Intermediate Level
  {
    question: "What’s the name of Fairblock’s integration toolkit for external chains?",
    answers: [
      { text: "Fairytool", correct: false },
      { text: "Fairysync", correct: false },
      { text: "Fairykit", correct: true },
      { text: "Fairlink", correct: false }
    ]
  },
  {
    question: "What role does the Encryption SDK play in Fairblock’s system?",
    answers: [
      { text: "Encrypts transactions locally in the user’s browser", correct: true },
      { text: "Stores private keys on servers", correct: false },
      { text: "Sends unencrypted data to chains", correct: false },
      { text: "Generates NFT images", correct: false }
    ]
  },
  {
    question: "Which blockchain framework is Fairyring built on?",
    answers: [
      { text: "Ethereum", correct: false },
      { text: "Cosmos", correct: true },
      { text: "Polygon", correct: false },
      { text: "Base", correct: false }
    ]
  },
  {
    question: "What makes apps built directly on Fairyring faster?",
    answers: [
      { text: "They don’t need relayers", correct: true },
      { text: "They use bridges", correct: false },
      { text: "They depend on miners", correct: false },
      { text: "They use Proof-of-Work", correct: false }
    ]
  },
  {
    question: "What does Fairyring help other chains achieve?",
    answers: [
      { text: "Better memes", correct: false },
      { text: "Confidential computation", correct: true },
      { text: "Higher gas fees", correct: false },
      { text: "Staking rewards", correct: false }
    ]
  },

  // 🔐 Fairyring & Integration
  {
    question: "What’s the purpose of Fairykit?",
    answers: [
      { text: "Allows any blockchain or app to plug into Fairblock easily", correct: true },
      { text: "Manages token listings", correct: false },
      { text: "Runs validators", correct: false },
      { text: "Sends notifications", correct: false }
    ]
  },
  {
    question: "What kind of environment does Fairyring create among chains?",
    answers: [
      { text: "Isolated networks", correct: false },
      { text: "Interconnected environment", correct: true },
      { text: "Centralized servers", correct: false },
      { text: "Private databases", correct: false }
    ]
  },
  {
    question: "What does Fairyring use to communicate between chains?",
    answers: [
      { text: "Relayers like Fairyport and IBC", correct: true },
      { text: "FTP servers", correct: false },
      { text: "Token bridges", correct: false },
      { text: "Smart wallets", correct: false }
    ]
  },
  {
    question: "What’s one big benefit of integrating with Fairyring?",
    answers: [
      { text: "Users get faster and cheaper confidential transactions", correct: true },
      { text: "Apps lose privacy", correct: false },
      { text: "Developers must migrate everything", correct: false },
      { text: "Higher transaction fees", correct: false }
    ]
  },
  {
    question: "Which of these best describes Fairblock’s approach to developers?",
    answers: [
      { text: "Developers must learn a new language", correct: false },
      { text: "Developers can plug in easily without changing their stack", correct: true },
      { text: "Developers need custom hardware", correct: false },
      { text: "Developers must host their own nodes", correct: false }
    ]
  },

  // 💰 DeFi Use Case: Fairates
  {
    question: "What is Fairates?",
    answers: [
      { text: "A Fairblock gaming platform", correct: false },
      { text: "A fixed-rate lending market using leaderless sealed-bid auctions", correct: true },
      { text: "A stablecoin index tracker", correct: false },
      { text: "An NFT launchpad", correct: false }
    ]
  },
  {
    question: "Why is Fairates different from normal DeFi lending?",
    answers: [
      { text: "It keeps bids and rates confidential", correct: true },
      { text: "It uses floating rates", correct: false },
      { text: "It leaks trader info", correct: false },
      { text: "It depends on centralized keepers", correct: false }
    ]
  },
  {
    question: "What traditional system inspired Fairates?",
    answers: [
      { text: "U.S. Treasury single-price auctions", correct: true },
      { text: "Stock markets", correct: false },
      { text: "Forex trading", correct: false },
      { text: "Crypto mining pools", correct: false }
    ]
  },
  {
    question: "What makes Fairates 'leaderless'?",
    answers: [
      { text: "There’s no single trusted auctioneer", correct: true },
      { text: "It uses random leaders", correct: false },
      { text: "All bids are public", correct: false },
      { text: "Only validators lead auctions", correct: false }
    ]
  },
  {
    question: "What do all winning lenders and borrowers get after a Fairates auction?",
    answers: [
      { text: "Different rates per person", correct: false },
      { text: "One fixed clearing rate for everyone", correct: true },
      { text: "Random interest rates", correct: false },
      { text: "Floating returns", correct: false }
    ]
  }
];
