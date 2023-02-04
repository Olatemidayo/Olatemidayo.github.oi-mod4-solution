var names = new Array();
names[0] = "Yaakov";
names[1] = "James";
names[2] = "Jason";
names[3] = "petter";
names[4] = "David";
names[5] = "Mike";
names[6] = "paul";
names[7] = "Faith";
names[8] = "jackson";
names[9] = "john";

//var names = ["Yaakovs", "james", "jason"];
  for (var i = 0; i < names.length; i++) {
    if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i]);
    }
  else{
    console.log("Hello "+ names[i]);
     }
}