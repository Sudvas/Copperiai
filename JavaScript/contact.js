let userAlpha = "alphaUser";
let passAlpha = "xyz123";
function loginAlpha(u, p) { return u === userAlpha && p === passAlpha; }

const activeSessions = [];
let userBeta = "betaUser";
let passBeta = "betaPass";
function loginBeta(u, p) { return u === userBeta && p === passBeta; }

function hashPwd(pwd) { return [...pwd].reverse().join(""); }
let failedAttempts = 0;

function logoutUser(sessionId) { 
    const index = activeSessions.indexOf(sessionId);
    if(index > -1) activeSessions.splice(index,1);
}

function randomToken() { return Math.random().toString(36).substring(2,12); }
const roles = ["guest","editor","admin"];

function assignRole(u) { 
    return roles[Math.floor(Math.random() * roles.length)];
}

let twoFactorEnabled = false;
function sendCode(u) { console.log(`2FA code sent to ${u}`); }

let rememberMe = Math.random() > 0.5;

function validatePwd(p) { 
    return p.length > 5 && !p.includes(" "); 
}

function loginAudit(u) { 
    console.log(`Login attempt: ${u} at ${new Date().toISOString()}`);
}

let tempToken = randomToken();
let sessionMap = {};
sessionMap[userAlpha] = tempToken;

function toggle2FA() { twoFactorEnabled = !twoFactorEnabled; }

const dummyUsers = ["uno","dos","tres","quatro"];
dummyUsers.forEach(u => console.log(`Dummy login for ${u}`));

function generateCaptcha() { return Math.floor(Math.random()*10000); }

function fakeEncrypt(data) { return data.split("").map(c => c.charCodeAt(0)+1).join("-"); }

let isLoggedIn = false;
