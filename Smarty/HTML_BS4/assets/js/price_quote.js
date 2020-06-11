/** ********************************************** **
	@Author			Herbert Magramo
	@Website		info.codebox.biz
	@Last Update	Thursay, February 22, 2018

	NOTE! 	Price quotation for Rocket Elevators
*************************************************** **/



/** ********** For residential buildings computation ************** **
  Variables: avgFloors = number of apartments / number of floors
             (Note: if the number of floors > 20 add 1 column
              if added 20 more another 1column to be added)
             totalElevators = avgFloors /6
             costOfElevators = radio button selection * totalElevators
             installationFee = elevatorPrice * (Standard*0.10; Premium*0.13; Excelium*0.16)
             totalPrice = costOfElevators + installationFee
******************************************************************* **/

var residentialForm = document.getElementById('resForm');

residentialForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  var typeOfServiceValueRes = getTypeOfServiceValueRes('optradio1');
  var percentageOfServiceRes = getPercentageOfServiceRes(typeOfServiceValueRes);
  
  
  var numApartments = parseInt(document.getElementById('renoa').value);
  var numFloors = parseInt(document.getElementById('renof').value);
  
  var avgApartments = numApartments / numFloors;
  var addElevator = getAddElevator(numFloors);
  var numberOfElevatorsRes = Math.ceil(avgApartments / 6) + addElevator;


  
  console.log(addElevator);
  
  var costOfElevatorsRes = numberOfElevatorsRes * typeOfServiceValueRes;  
  var installationFeeRes = typeOfServiceValueRes * percentageOfServiceRes;
  installationFeeRes = Math.round((installationFeeRes + Number.EPSILON) * 100) / 100;
  var totalPriceRes = costOfElevatorsRes + installationFeeRes;  
    

  var numberOfElevatorsFieldRes = document.getElementById('required-elevator-residential');
  numberOfElevatorsFieldRes.value = numberOfElevatorsRes;
  
  var costOfElevatorFieldRes = document.getElementById('cost-per-elevator-residential');
  costOfElevatorFieldRes.value = costOfElevatorsRes;
  
  var costOfInstallationFieldRes = document.getElementById('cost-of-installation-residential');
  costOfInstallationFieldRes.value = installationFeeRes;
  
  var totalPriceFieldRes = document.getElementById('total-price-residential');
  totalPriceFieldRes.value = totalPriceRes;
})

function getTypeOfServiceValueRes(radioName) {
  var typeOfServicesRes = document.getElementsByName(radioName);
  for(var i = 0;i<typeOfServicesRes.length;i++){
    var radioInput = typeOfServicesRes[i];
    if(radioInput.checked) return parseInt(radioInput.value);
  }
}

function getPercentageOfServiceRes(typeOfServiceValueRes) {
  if (typeOfServiceValueRes === 7565) {
    return 0.10;
  } else if(typeOfServiceValueRes === 12345) {
    return 0.13;
  } else {
    return 0.16;
  }
} 

function getPercentageOfServiceRes(typeOfServiceValueRes) {
  if (typeOfServiceValueRes === 7565) {
    return 0.10;
  } else if(typeOfServiceValueRes === 12345) {
    return 0.13;
  } else {
    return 0.16;
  }
} 

function getAddElevator(numFloors) {
  if (numFloors > 40) {
    return 2;
  }
  if (numFloors > 20) {
    return 1;
  }
  if (numFloors <= 20) {
    return 0;
  }
}
    
 


/** ************* For commercial buildings computation ****************** **
  Compuration: costOfElevators = numberOfElevators * radio button selection
             installationFee = elevatorPrice * (Standard*0.10; Premium*0.13; Excelium*0.16)
             totalPrice = costOfElevators + installationFee
************************************************************************* **/

var commercialForm = document.getElementById('comForm');

commercialForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  
  var numberOfElevators = parseInt(document.getElementById('comnoe').value);
  var typeOfServiceValue = getTypeOfServiceValue('optradio2');
  var percentageOfService = getPercentageOfService(typeOfServiceValue);
  var costOfElevators = numberOfElevators * typeOfServiceValue;
  
  var installationFee = typeOfServiceValue * percentageOfService;
  installationFee = Math.round((installationFee + Number.EPSILON) * 100) / 100;
  var totalPrice = costOfElevators + installationFee;
  
  var typeOfServiceValueField = document.getElementById('cost-per-elevator-commercial');
  typeOfServiceValueField.value = typeOfServiceValue ;
  
  var costOfInstallationField = document.getElementById('cost-of-installation-commercial');
  costOfInstallationField.value = installationFee;
  
  var totalPriceField = document.getElementById('total-price-commercial');
  totalPriceField.value = totalPrice;
})

function getTypeOfServiceValue(radioName) {
  var typeOfServices = document.getElementsByName(radioName);
  for(var i = 0;i<typeOfServices.length;i++){
    var radioInput = typeOfServices[i];
    if(radioInput.checked) return parseInt(radioInput.value);
  }
}

function getPercentageOfService(typeOfServiceValue) {
  if (typeOfServiceValue === 7565) {
    return 0.10;
  } else if(typeOfServiceValue === 12345) {
    return 0.13;
  } else {
    return 0.16;
  }
}  


/** ********** For corporate buildings computation ************** **
  Variables: totalNumFloors = numFloors + numBasements
             avgOccupants = maxOccupants * totalNumFloors
             totalElevators = avgOccupants / 1000
             costOfElevators = radio button selection * totalElevators
             installationFee = elevatorPrice * (Standard*0.10; Premium*0.13; Excelium*0.16)
             totalPrice = costOfElevators + installationFee
****************************************************************** **/

var corporateForm = document.getElementById('corForm');

corporateForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  
  var numFloorsCor = parseInt(document.getElementById('cornof').value);
  var numBasementsCor = parseInt(document.getElementById('cornob').value);
  var maxOccupantsCor = parseInt(document.getElementById('cormax').value);
  
  var typeOfServiceValueCor = getTypeOfServiceValueCor('optradio3');
  var percentageOfServiceCor = getPercentageOfServiceCor(typeOfServiceValueCor);

  var totalNumFloorsCor = numFloorsCor + numBasementsCor;
  var avgOccupantsCor = maxOccupantsCor * totalNumFloorsCor;    
  var numberOfElevatorsCor = Math.ceil(avgOccupantsCor / 1000);
  
  
  var costOfElevatorsCor = numberOfElevatorsCor * typeOfServiceValueCor;  
  var installationFeeCor = typeOfServiceValueCor * percentageOfServiceCor;
  installationFeeCor = Math.round((installationFeeCor + Number.EPSILON) * 100) / 100;
  var totalPriceCor = costOfElevatorsCor + installationFeeCor;  
    

  var numberOfElevatorsFieldCor = document.getElementById('required-elevator-corporate');
  numberOfElevatorsFieldCor.value = numberOfElevatorsCor;
  
  var typeOfServiceValueFieldCor = document.getElementById('cost-per-elevator-corporate');
  typeOfServiceValueFieldCor.value = typeOfServiceValueCor;
  
  var costOfInstallationFieldCor = document.getElementById('cost-of-installation-corporate');
  costOfInstallationFieldCor.value = installationFeeCor;
  
  var totalPriceFieldCor = document.getElementById('total-price-corporate');
  totalPriceFieldCor.value = totalPriceCor;
})

function getTypeOfServiceValueCor(radioName) {
  var typeOfServicesCor = document.getElementsByName(radioName);
  for(var i = 0;i<typeOfServicesCor.length;i++){
    var radioInput = typeOfServicesCor[i];
    if(radioInput.checked) return parseInt(radioInput.value);
  }
}

function getPercentageOfServiceCor(typeOfServiceValueCor) {
  if (typeOfServiceValueCor === 7565) {
    return 0.10;
  } else if(typeOfServiceValueCor === 12345) {
    return 0.13;
  } else {
    return 0.16;
  }
}  




/** ********** For hybrid buildings computation ************** **
  Variables: totalNumFloors = numFloors + numBasements
             avgOccupants = maxOccupants * totalNumFloors
             totalElevators = avgOccupants / 1000
             costOfElevators = radio button selection * totalElevators
             installationFee = elevatorPrice * radio button selection
             totalPrice = costOfElevators + installationFee
************************************************************** **/

var hybridForm = document.getElementById('hyForm');

hybridForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  
  var numFloorsHy = parseInt(document.getElementById('hynof').value);
  var numBasementsHy = parseInt(document.getElementById('hynoba').value);
  var maxOccupantsHy = parseInt(document.getElementById('hymax').value);
  
  var typeOfServiceValueHy = getTypeOfServiceValueHy('optradio4');
  var percentageOfServiceHy = getPercentageOfServiceHy(typeOfServiceValueHy);

  var totalNumFloorsHy = numFloorsHy + numBasementsHy;
  var avgOccupantsHy = maxOccupantsHy * totalNumFloorsHy;    
  var numberOfElevatorsHy = Math.ceil(avgOccupantsHy / 1000);
  
  
  var costOfElevatorsHy = numberOfElevatorsHy * typeOfServiceValueHy;  
  var installationFeeHy = typeOfServiceValueHy * percentageOfServiceHy;
  installationFeeHy = Math.round((installationFeeHy + Number.EPSILON) * 100) / 100;
  var totalPriceHy = costOfElevatorsHy + installationFeeHy;  
    

  var numberOfHybrid = document.getElementById('required-elevator-hybrid');
  numberOfHybrid.value = numberOfElevatorsHy;
  
  var typeOfServiceValueFieldHy = document.getElementById('cost-per-elevator-hybrid');
  typeOfServiceValueFieldHy.value = typeOfServiceValueHy;
  
  var costOfInstallationFieldHy = document.getElementById('cost-of-installation-hybrid');
  costOfInstallationFieldHy.value = installationFeeHy;
  
  var totalPriceFieldHy = document.getElementById('total-price-hybrid');
  totalPriceFieldHy.value = totalPriceHy;
})

function getTypeOfServiceValueHy(radioName) {
  var typeOfServicesHy = document.getElementsByName(radioName);
  for(var i = 0;i<typeOfServicesHy.length;i++){
    var radioInput = typeOfServicesHy[i];
    if(radioInput.checked) return parseInt(radioInput.value);
  }
}

function getPercentageOfServiceHy(typeOfServiceValueHy) {
  if (typeOfServiceValueHy === 7565) {
    return 0.10;
  } else if(typeOfServiceValueHy === 12345) {
    return 0.13;
  } else {
    return 0.16;
  }
}