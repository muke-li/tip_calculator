const tipCalculator = document.getElementById('tipcalculator');



tipCalculator.addEventListener('change',function(e){
	e.preventDefault;

	
	const total = document.getElementById("preTaxTotal").value;
	var tipRate = document.querySelector('input[name="tip"]:checked').value;
	var tipAmount = total * (tipRate / 100);
	var taxRate = document.getElementById("taxRate").value;
	var taxAmount = total * (taxRate / 100);
	var totalAfterTax = parseFloat(taxAmount) + parseFloat(total);
	var totalAfterTaxTip = parseFloat(totalAfterTax) + parseFloat(tipAmount);
	var dinerNumber = document.getElementById("dinerNub").value;
	var totalPerDiner = totalAfterTaxTip / dinerNumber;
	
	
	
	const preTaxTotal_list = document.getElementById("receipt_preTaxTotal");
	preTaxTotal_list.innerHTML = "pre-tax total: $" + total;
	
	const dinerNumber_list = document.getElementById("receipt_diners");
	dinerNumber_list.innerHTML = "diners: " + dinerNumber;
	
	const tipAmount_list = document.getElementById("receipt_totalTip");
	tipAmount_list.innerHTML = "total tip: $" + tipAmount.toFixed(2);
	
	const taxAmount_list = document.getElementById("receipt_totalTax");
	taxAmount_list.innerHTML = "total tax: $" + taxAmount.toFixed(2);
	
	const totalAfterTax_list = document.getElementById("receipt_totalBill");
	totalAfterTax_list.innerHTML = "total bill: $" + totalAfterTaxTip.toFixed(2);
	
	const totalPerDiner_list = document.getElementById("receipt_totalPerDiner");
	totalPerDiner_list.innerHTML = "total per diner: $" + totalPerDiner.toFixed(2);
	
	const dinerDisplayHere = document.getElementById("dinerDisplay");
	dinerDisplayHere.innerHTML = dinerNumber;

	
	
	const inputPress1 = document.getElementById("value15");
	const labelBlock1 = document.querySelector("#radio label:nth-of-type(1)");
	console.log(labelBlock1);
	
	const inputPress2 = document.getElementById("value20");
	const labelBlock2 = document.querySelector("#radio label:nth-of-type(2)");
	console.log(labelBlock2);
	
	const inputPress3 = document.getElementById("value25");
	const labelBlock3 = document.querySelector("#radio label:nth-of-type(3)");
	console.log(labelBlock3);
	
	const inputPress4 = document.getElementById("value30");
	const labelBlock4 = document.querySelector("#radio label:nth-of-type(4)");
	console.log(labelBlock4);
	
	const inputPress5 = document.getElementById("value35");
	const labelBlock5 = document.querySelector("#radio label:nth-of-type(5)");
	console.log(labelBlock5);
	
	const inputPress6 = document.getElementById("value40");
	const labelBlock6 = document.querySelector("#radio label:nth-of-type(6)");
	console.log(labelBlock6);
	
	
	
	if(labelBlock1.onmousedown = true){
		inputPress1.addEventListener('click', function(){
			labelBlock1.style.backgroundColor = "black";		
			labelBlock1.style.color = "white";
			
			labelBlock2.style.backgroundColor = "white";		
			labelBlock2.style.color = "black";
			
			labelBlock3.style.backgroundColor = "white";		
			labelBlock3.style.color = "black";
			
			labelBlock4.style.backgroundColor = "white";		
			labelBlock4.style.color = "black";
			
			labelBlock5.style.backgroundColor = "white";		
			labelBlock5.style.color = "black";
			
			labelBlock6.style.backgroundColor = "white";		
			labelBlock6.style.color = "black";
		});
	}
	if(labelBlock2.onmousedown = true){
		inputPress2.addEventListener('click', function(){
			labelBlock2.style.backgroundColor = "black";		
			labelBlock2.style.color = "white";
			
			labelBlock1.style.backgroundColor = "white";		
			labelBlock1.style.color = "black";
			
			labelBlock3.style.backgroundColor = "white";		
			labelBlock3.style.color = "black";
			
			labelBlock4.style.backgroundColor = "white";		
			labelBlock4.style.color = "black";
			
			labelBlock5.style.backgroundColor = "white";		
			labelBlock5.style.color = "black";
			
			labelBlock6.style.backgroundColor = "white";		
			labelBlock6.style.color = "black";
		});	
	}
	if(labelBlock3.onmousedown = true){
		inputPress3.addEventListener('click', function(){
			labelBlock3.style.backgroundColor = "black";		
			labelBlock3.style.color = "white";
			
			labelBlock1.style.backgroundColor = "white";		
			labelBlock1.style.color = "black";
			
			labelBlock2.style.backgroundColor = "white";		
			labelBlock2.style.color = "black";
			
			labelBlock4.style.backgroundColor = "white";		
			labelBlock4.style.color = "black";
			
			labelBlock5.style.backgroundColor = "white";		
			labelBlock5.style.color = "black";
			
			labelBlock6.style.backgroundColor = "white";		
			labelBlock6.style.color = "black";
		});	
	}
	if(labelBlock4.onmousedown = true){
		inputPress4.addEventListener('click', function(){
			labelBlock4.style.backgroundColor = "black";		
			labelBlock4.style.color = "white";
			
			labelBlock1.style.backgroundColor = "white";		
			labelBlock1.style.color = "black";
			
			labelBlock2.style.backgroundColor = "white";		
			labelBlock2.style.color = "black";
			
			labelBlock3.style.backgroundColor = "white";		
			labelBlock3.style.color = "black";
			
			labelBlock5.style.backgroundColor = "white";		
			labelBlock5.style.color = "black";
			
			labelBlock6.style.backgroundColor = "white";		
			labelBlock6.style.color = "black";
		});	
	}
	if(labelBlock5.onmousedown = true){
		inputPress5.addEventListener('click', function(){
			labelBlock5.style.backgroundColor = "black";		
			labelBlock5.style.color = "white";
			
			labelBlock1.style.backgroundColor = "white";		
			labelBlock1.style.color = "black";
			
			labelBlock2.style.backgroundColor = "white";		
			labelBlock2.style.color = "black";
			
			labelBlock3.style.backgroundColor = "white";		
			labelBlock3.style.color = "black";
			
			labelBlock4.style.backgroundColor = "white";		
			labelBlock4.style.color = "black";
			
			labelBlock6.style.backgroundColor = "white";		
			labelBlock6.style.color = "black";
		});	
	}
	if(labelBlock6.onmousedown = true){
		inputPress6.addEventListener('click', function(){
			labelBlock6.style.backgroundColor = "black";		
			labelBlock6.style.color = "white";
			
			labelBlock1.style.backgroundColor = "white";		
			labelBlock1.style.color = "black";
			
			labelBlock2.style.backgroundColor = "white";		
			labelBlock2.style.color = "black";
			
			labelBlock3.style.backgroundColor = "white";		
			labelBlock3.style.color = "black";
			
			labelBlock5.style.backgroundColor = "white";		
			labelBlock5.style.color = "black";
			
			labelBlock4.style.backgroundColor = "white";		
			labelBlock4.style.color = "black";
		});	
	}
	
});
