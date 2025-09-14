// export const accounts = [
//   { accountNum: "1111111111", otp: "111111", pin: "1111" },
//   { accountNum: "2222222222", otp: "222222", pin: "2222", },
//   { accountNum: "3333333333", otp: "333333", pin: "3333", },
// ];

// Load from localStorage first if available
const savedAccounts = JSON.parse(localStorage.getItem("accounts"));

export const accounts = savedAccounts || [
  { accountNum: "1111111111", otp: "111111", pin: "" },
  { accountNum: "2222222222", otp: "222222", pin: "" },
  { accountNum: "3333333333", otp: "333333", pin: "" },
];
