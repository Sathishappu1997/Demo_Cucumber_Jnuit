package com.StepDefinition;

import java.io.IOException;

import com.BaseClass.LibraryClass;
import com.Pages.OrangeHRM_Login_Page;
import com.SeleniumUtility.Selenium_Utility;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Login_Page_Step extends LibraryClass{

	Selenium_Utility selut;
	OrangeHRM_Login_Page login;
	
	@Given("^Open the Browser and Navigate to the URL$")
	public void open_the_Browser_and_Navigate_to_the_URL() throws IOException{
		LaunchApplication();
	}

	@When("^Verify the Title of the Page$")
	public void verify_the_Title_of_the_Page(){
		selut = new Selenium_Utility(driver);
		selut.gettitle();
	}

	@Then("^Enter the \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_the_and(String Username, String Password){
		login = new OrangeHRM_Login_Page(driver);
		login.Login_Username(Username);
		login.Login_Password(Password);
	}

	@Then("^Click the Submit Button$")
	public void click_the_Submit_Button(){
		login.Login_LoginButton();
	}

	@Then("^Close the Browser$")
	public void close_the_Browser(){
		teardown();
	}


}
