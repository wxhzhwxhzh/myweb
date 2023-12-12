function updateTime() {
    var date = new Date();
    var options = { weekday: 'long' };
    var options2 ={hour: '2-digit', minute:'2-digit'};
    var dateTimeString = date.toLocaleDateString() +' '+  date.toLocaleDateString('zh-CN', options) +' '+ date.toLocaleTimeString([],options2 );
    document.getElementById("time").textContent = dateTimeString;
  }
  
  setInterval(updateTime, 1000); // 每秒钟更新一次时间
  


