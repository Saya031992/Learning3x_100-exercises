//searching

let results=["pass","fail","pass","error","fail"];

//index of-return 1st index or -1 ifnot found

results.indexof("fail");//1
results.indexof("skip");//-1

//last index of--search from end
results.lastindexof("fail");//4

//includes--returns boolean
results.includes("error");//true