import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import ChargePointObjects from "../../support/PageObjects/ChargePointObjects"

const ChargePoint = new ChargePointObjects();

Given("Navigate to URL", function () {
    ChargePoint.NavigateChargePoint()

});

Then("The User Land on the Charge Point Installation Form", function () {

    ChargePoint.Textappear()
})

When("User add the Serial Number {string}", function (SerialNumber){
    ChargePoint.TypeSerialNumber(SerialNumber)

})

When ("User Click the Add Button",function(){
    ChargePoint.ClickAddButton()
})

Then("Serial number present in list {string}",function(SerialNumber){
    ChargePoint.CheckSerialNumberinList()
})

When ("User Delete the Serial Number {string}",function(SerialNumber){
    ChargePoint.DeleteSerialNumber(SerialNumber)
    
})
Then ("Serial Number not appear in list {string}",function(){
    ChargePoint.CheckListEmpty()
})



