package com.TestRunner;



import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
@CucumberOptions
(
	
features = "C:\\Users\\Hp\\eclipse-workspace\\OrangeHRM_Hybrid_Cucumber\\src\\test\\resources\\Feature_File\\Login_Page.feature",
glue = {"com.StepDefinition"},	        
plugin = {"pretty", "html:reports/cucumber-html-report","json:reports/cucumber-html-report/jsonreport",
"com.cucumber.listener.ExtentCucumberFormatter:Reports/Extentreport.html"},
    
		       
		     monochrome = true
		        
)
public class TestRunner {
	
	@AfterClass
    public static void extendReport()
  {
      Reporter.loadXMLConfig("C:\\Users\\Hp\\eclipse-workspace\\OrangeHRM_Hybrid_Cucumber\\extend-config.xml");
      Reporter.setSystemInfo("user", System.getProperty("user.name"));
      Reporter.setSystemInfo("os", "Windows");
      Reporter.setTestRunnerOutput("Sample test runner output message");
  }

}
