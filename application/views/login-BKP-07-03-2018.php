<style>
.load-box{ background:#1a1d2b}

</style>   
  <div class="limiter">
		 <div class="load-box" ng-show="loading">
            <img id="mySpinner" src="app/images/loading1.gif" />
        </div>
        <div class="container-login100">
			<div class="wrap-login100">
			 
                <form class="navbar-form login100-form validate-form" name="userForm" method="post" autocomplete>
					<span class="login100-form-logo" style="background:none;"> 
						<i class="zmdi "><img src="app/images/logo.png"></i>
                       
					</span>

					<span class="login100-form-title p-b-34 p-t-27">
						Log in 
					</span>
				<div class="login-error" ng-show="showGreeting"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/OOjs_UI_icon_alert_destructive.svg">  
                {{message}}                
</div>

					<div class="wrap-input100 validate-input" data-validate = "Enter username">
						
                          <input type="text" name="username" id="username" class="input100" ng-model="user.username1" required="required" placeholder="Username" autofocus/>
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div class="wrap-input100 validate-input" data-validate="Enter password">
                     
						<input class="input100" type="password" name="password" ng-model="user.password1" placeholder="Password" required/>
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
					</div>
 
	 <input type="hidden" name="device" class="form-control" ng-model="user.device_info" />  
	 <input type="hidden" name="browser" class="form-control" ng-model="user.browser_info" />  
					<div class="container-login100-form-btn">
						<button class="login100-form-btn" type="submit" ng-click="submitForm(user)" ng-disabled="userForm.$invalid">
							Login
						</button>
					</div>

					<!--<div class="text-center p-t-90">
						<a class="txt1" href="#">
							Forgot Password?
						</a>
					</div>-->
				</form>
                
                <div class="powerd"> <img style="    max-width: 130px;  margin: 30px auto 0;display: block;" src="app/assets/newscreen/images/powered_by_betfair_light.svg" /></div>
			</div>
            
		</div>
        
        
        
	</div>
  
  

 
