// ============================================================
//  浮生閣・連線設定
//  只有第一次設定時需要填，之後更新網站只換 index.html，這個檔案不用動
// ============================================================

// ① 從 Firebase「專案設定 → 你的應用程式」複製過來，整段貼上取代
export const firebaseConfig = {
  apiKey: "AIzaSyB_IXTgYIy5pihFGsupWQaCshyW3uUIQjc",
  authDomain: "fusheng-ge-ae475.firebaseapp.com",
  projectId: "fusheng-ge-ae475",
  storageBucket: "fusheng-ge-ae475.firebasestorage.app",
  messagingSenderId: "830077211217",
  appId: "1:830077211217:web:da87bc9f852f040f0b1e70"
};

// ② 房主（你）的 Gmail，必須和 Firestore 規則裡的 ownerEmail() 一模一樣
export const OWNER_EMAIL = "onigidog@gmail.com";