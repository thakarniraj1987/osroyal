app.controller("Crtmstrcontroller",["$scope","$http","$filter",function(e,r,t){e.open=function(r){r.preventDefault(),r.stopPropagation(),e.opened=!0},e.dateOptions={formatYear:"yy",startingDay:1},e.formats=["dd-MMMM-yyyy","yyyy-MM-dd","dd.MM.yyyy","shortDate"],e.format=e.formats[1],e.type=1,e.submitForm=function(){var t={username:e.username,master_name:e.master_name,password:e.password,remarks:e.remarks,type:e.type,FromDate:e.dt};r({method:"POST",url:BASE_URL+"Createmastercontroller/submitCreateMasterData/",data:t,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(t){0==t.errors?(e.message=t.message,r.get(BASE_URL+"Createmastercontroller/").success(function(r,t,s,a){e.Details=r}).error(function(r,t,s,a){e.ResponseDetails="Data: "+r+"<br />status: "+t+"<br />headers: "+jsonFilter(s)+"<br />config: "+jsonFilter(a)})):(e.message=t.message,r.get(BASE_URL+"Createmastercontroller/").success(function(r,t,s,a){e.Details=r}).error(function(r,t,s,a){e.ResponseDetails="Data: "+r+"<br />status: "+t+"<br />headers: "+jsonFilter(s)+"<br />config: "+jsonFilter(a)}))})},e.checkUserName=function(){var t=e.username;t.length<4?e.errorMsg="Username must be greater than Four Charector":r({method:"POST",url:BASE_URL+"Createmastercontroller/CheckUserName/"+t,data:t,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(r){0==r.error?e.errorMsg=r.message:e.errorMsg=r.message})}}]);