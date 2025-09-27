// Load from localStorage first if available
const savedAccounts = JSON.parse(localStorage.getItem("accounts"));

export const accounts = savedAccounts || [
  { accountNum: "1111111111", email: "esesejoshua01@gmail.com", otp: "", pin: "" },
  { accountNum: "2222222222", email: "aa@gmail.com", otp: "", pin: "" },
  { accountNum: "3333333333", email: "bb@gmail.com", otp: "", pin: "" },
];
