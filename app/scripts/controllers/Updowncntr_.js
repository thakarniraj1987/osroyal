app.controller("Updowncntr",["$scope","$http","$stateParams","sessionService","Dialog","get_userser","$rootScope","deviceDetector","$interval","speech","$state","$filter",function(e,a,t,n,s,c,r,o,d,l,i,u){function y(e){return 0==e.data.OddValue?"DOWN[Lay]":"UP[Back]"}function h(){if(D){var e={getRows:function(e){setTimeout(function(){var a=D.slice(e.startRow,e.endRow),t=-1;D.length<=e.endRow&&(t=D.length),e.successCallback(a,t)},500)}};m.api.setDatasource(e)}}function p(e){D=e,h()}e.btnPlaceDis=!1,e.matchId=t.matchId,e.FancyID=t.FancyID,e.TypeID=t.TypeID,e.sportId=t.sportId,e.MatchName=t.matchName,e.betValue=0,e.OddValue="odd",e.EvenValue="even",e.showOdd1=!1,e.showEven1=!1,e.ngValue=!1,e.userType=sessionService.get('type'),e.UserTypeId=n.get("slctUseTypeID"),c.userChipSetting(function(e){r.userPlcBtn=e,r.MyLenth=e.length}),e.GetBetValue=function(a,t){e.betValue=parseInt(a)+parseInt(t)},e.display_Back=function(){e.showOdd1=!0,e.showEven1=!1,e.betValue=0,e.userType=sessionService.get('type'),e.UserTypeId=n.get("slctUseTypeID")},e.display_Lay=function(){e.showEven1=!0,e.showOdd1=!1,e.betValue=0,e.userType=sessionService.get('type'),e.UserTypeId=n.get("slctUseTypeID")},e.checkValidation=function(e){return""==e.betValue||e.betValue<=0?(s.autohide("You cannot play at zero Bet On..."),$("#betValue").focus(),!1):!0},e.GetFancyBal=function(){c.GetFancyBal(t.FancyID,function(a){null==a?e.TotalBet=0:e.TotalBet=a})},e.Save_updownFancy=function(d,i){e.btnPlaceDis=!0;var u=document.getElementById("betValue").value,y=e.FancyData[0].HeadName,h=t.sportId,D=(n.get("slctUseTypeID"),n.get("slctUseID")),I=sessionService.get('user_id'),m=n.get("slctParantID"),u=e.betValue,f=t.TypeID;c.GetFancyBal(t.FancyID,function(t){null==t?e.TotalBet=0:e.TotalBet=t;var b=0,g=0;g=parseInt(r.Balance),b=parseInt(e.TotalBet)+parseInt(u);var v=parseInt(e.FancyData[0].MaxStake);if("unknown"==o.device)var F="Desktop";else var F=o.device;var w='" browser: '+o.browser+" browser_version :"+o.browser_version+"  device: "+F+"  OS : "+o.os+" os_version: "+o.os_version+'"',B={userId:D,ParantId:m,loginId:I,betValue:u,FancyID:e.FancyID,matchId:e.matchId,OddValue:d,type:sessionService.get('type'),OddsNumber:i,TypeID:f,HeadName:y,SessInptNo:"null",SessInptYes:e.FancyData[0].upDwnLimit,sportId:h,FancyId:e.FancyData[0].FncyId,pointDiff:"null",deviceInformation:w},V=a.post(BASE_URL+"Lstsavemstrcontroller/getUserInfo/"+n.get("slctUseID"));V.then(function(t){var o=t.data.userInfo,u=parseInt(o[0].mstrlock),y=parseInt(o[0].lgnusrlckbtng),h=parseInt(o[0].lgnusrCloseAc),D=parseInt(o[0].stakeLimit),I=parseInt(o[0].active),m=parseInt(o[0].usetype),f=parseInt(document.getElementById("betValue").value),g=0;g=1==d?parseInt(document.getElementById("betValue").value)*parseInt(i):parseInt(document.getElementById("betValue").value)*(parseInt(e.FancyData[0].upDwnLimit)-parseInt(i)),1==u&&1==y&&1==h&&1==I&&3==m&&(0==D||D>=f)&&parseFloat(r.Balance)>=g?parseInt(e.TotalBet)<=v-500&&v+500>=b?e.checkValidation(B)?a({method:"POST",url:BASE_URL+"Lstsavemstrcontroller/saveUserFancy",data:B,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(a){c.GetWALLibiInfo(n.get("slctUseID")),e.UserBetData=a.UserBetData,e.scorePosition=a.scorePosition,e.showOdd1=!1,e.showEven1=!1,s.autohide("Bet Saved Successfully..."),e.btnPlaceDis=!1,l.sayText("b"),p(a.UserBetData)}):e.btnPlaceDis=!1:(s.autohide("Rate Change..."),e.btnPlaceDis=!1):0==u?(s.autohide("user Lock","3000"),e.btnPlaceDis=!1):0==y?(s.autohide("user batting is Lock ","3000"),e.btnPlaceDis=!1):0==h?(s.autohide("user account closed","3000"),e.btnPlaceDis=!1):0==I?(s.autohide("user Inactive","3000"),e.btnPlaceDis=!1):3!=m?(s.autohide("Please Select valid user","3000"),e.btnPlaceDis=!1):0!=D&&f>D?(s.autohide("Invalid Stake Limit,Your Stake Limit is "+D,"3000"),e.btnPlaceDis=!1):parseInt(r.Balance)<g&&(s.autohide("insufficient Balance","3000"),e.btnPlaceDis=!1)})})},e.checkValidation=function(a){return""==a.betValue||a.betValue<=0?(s.autohide("You cannot play at zero Stake...",500),e.btnPlaceDis=!1,$("#betValue").focus(),!1):!0};var D,I=[{headerName:"Sno",width:55,field:"SrNo",cellClass:function(e){return 0==e.data.OddValue?"lay-head":"back-head"}},{headerName:"Username",field:"userName",width:130,cellClass:function(e){return 0==e.data.OddValue?"lay-head":"back-head"}},{headerName:"Parent",field:"ParantName",width:130,cellClass:function(e){return 0==e.data.OddValue?"lay-head":"back-head"}},{headerName:"bet_value",field:"bet_value",width:90,cellClass:function(e){return 0==e.data.OddValue?"lay-head":"back-head"}},{headerName:"Odds No.",field:"OddsNumber",width:90,cellClass:function(e){return 0==e.data.OddValue?"lay-head":"back-head"}},{headerName:"Back/Lay",valueGetter:y,width:100,cellClass:function(e){return 0==e.data.OddValue?"lay-head":"back-head"}},{headerName:"Time",field:"dateTime",width:140,cellClass:function(e){return 0==e.data.OddValue?"lay-head":"back-head"}},{headerName:"Fancy Name",field:"fancyName",width:130,cellClass:function(e){return 0==e.data.OddValue?"lay-head":"back-head"}},{headerName:"id",width:60,field:"bet_id",cellClass:function(e){return 0==e.data.OddValue?"lay-head":"back-head"}}],m={enableSorting:!0,enableFilter:!0,debug:!0,rowSelection:"multiple",enableColResize:!0,paginationPageSize:500,columnDefs:I,rowModelType:"pagination"},f=document.querySelector("#myGrid");new agGrid.Grid(f,m),a.get("Lstsavemstrcontroller/getFancyData/"+t.matchId+"/"+t.FancyID+"/"+n.get("user_id")+"/"+n.get("type")+"/"+t.TypeID).success(function(a,t,n,s){e.FancyData=a.fancyForm,e.scorePosition=a.scorePosition,e.showOdd1=!1,e.showEven1=!1,e.ngValue=!1,e.UserBetData=a.UserBetData,p(a.UserBetData)}),e.RefreshData=function(){a.get("Lstsavemstrcontroller/getFancyData/"+t.matchId+"/"+t.FancyID+"/"+n.get("user_id")+"/"+n.get("type")+"/"+t.TypeID).success(function(a,t,n,s){e.scorePosition=a.scorePosition})},e.GetBetLst=function(){c.GetFancyData(t.matchId,t.FancyID,n.get("user_id"),n.get("type"),t.TypeID,function(a){e.FancyData[0].upDwnLimit=a.data.fancyForm[0].upDwnLimit,e.FancyData[0].active=a.data.fancyForm[0].active,e.FancyData[0].DisplayMsg=a.data.fancyForm[0].DisplayMsg,e.FancyData[0].FncyId=a.data.fancyForm[0].FncyId,e.FancyData[0].MaxStake=a.data.fancyForm[0].MaxStake,(e.FancyData[0].upDwnBack=a.data.fancyForm[0].upDwnBack)&&(e.FancyData[0].upDwnLay=a.data.fancyForm[0].upDwnLay)||(e.FancyData=data.fancyForm),"3"!=n.get("type")&&e.UserBetData.length!=a.data.UserBetData.length&&(e.scorePosition=a.data.scorePosition,e.UserBetData=a.data.UserBetData,l.sayText("b"),p(a.data.UserBetData))}),"0"!=n.get("type")&&a({method:"POST",url:"Geteventcntr/matchMarketLst/",data:{matchId:t.matchId,sportsId:4,user_id:n.get("user_id")},headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(function(e){try{"1"==u("filter")(e.getMatchFancy,{ID:t.FancyID})[0].IsPlay&&(r.$broadcast("changeSidebar_Market",{}),"1"==n.get("type")?i.go("dashboard.Masterdashboard"):"2"==n.get("type")?i.go("dashboard.Dealerdashboard"):"3"==n.get("type")&&i.go("dashboard.Userdashboard"))}catch(a){}}),e.GetFancyBal()};var b=d(e.GetBetLst,1e3);e.$on("$destroy",function(e){d.cancel(b),b=angular.isUndefinedOrNull})}]);