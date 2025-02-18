

export const months = [
    { value: "jan", title: "January",key:1 },
    { value: "feb", title: "February",key:2 },
    { value: "mar", title: "March" ,key:3},
    { value: "apr", title: "April" ,key:4},
    { value: "may", title: "May" ,key:5},
    { value: "jun", title: "June" ,key:6},
    { value: "jul", title: "July" ,key:7},
    { value: "aug", title: "August" ,key:8},
    { value: "sep", title: "September" ,key:9},
    { value: "oct", title: "October" ,key:10},
    { value: "nov", title: "November" ,key:11},
    { value: "dec", title: "December" ,key:12},
  ];
  


  export const deviceMasterMapping = [
    {deviceId:101,value:"Compute App Server"},
    {deviceId:102,value:"SPINE Switch"},
    {deviceId:103,value:"Leaf Switch"},
    {deviceId:104,value:"SAN Switch"},
    {deviceId:105,value:"Performance Storage - Block"},
    {deviceId:106,value:"Performance Storage - File"},
    {deviceId:107,value:"Capacity Storage File/ Block"},
    {deviceId:108,value:"D2D Backup Device/Appliance"},
    {deviceId:109,value:"Tape Backup Solution"},

  ]


  export const barData = [
    { name: "Switch 1", utilized: 4, total: 10, colorTop: "#2F7ED8", colorBottom: "#8EE59C" },
    { name: "Switch 2", utilized: 6, total: 12, colorTop: "#2F7ED8", colorBottom: "#8EE59C" },
    { name: "Switch 3", utilized: 5, total: 15, colorTop: "#2F7ED8", colorBottom: "#8EE59C" },
    { name: "Switch 4", utilized: 7, total: 20, colorTop: "#2F7ED8", colorBottom: "#8EE59C" },
    { name: "Switch 5", utilized: 8, total: 25, colorTop: "#2F7ED8", colorBottom: "#8EE59C" },
  ];
  
  export const barDataStorage = [
    { name: "UNITY XT 680", utilized: 4, total: 10, colorTop: "#5585BF", colorBottom: "#C25553" },
    { name: "POWER STORE 3200T", utilized: 6, total: 12, colorTop: "#5585BF", colorBottom: "#C25553" },
    { name: "POWER SCALE F600", utilized: 5, total: 15, colorTop: "#5585BF", colorBottom: "#C25553" }
  ];


  export function findMonth(monDay){
    for(let i=0; i<months.length; i++){
      if(months[i].value==monDay){
        return months[i].key;
      }
    }
  }