// - Task 9:
function saveToBothStorages(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
  
    console.log("LocalStorage Value:", localStorage.getItem(key));
    console.log("SessionStorage Value:", sessionStorage.getItem(key));
  }
  
  saveToBothStorages("sharedKey", "Shared Value");
  
  console.log("***Task 9 Ended Here!✅***");