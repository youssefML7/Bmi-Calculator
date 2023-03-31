
document.getElementById("sbmt_btn").addEventListener("click", function () {
	bmi;
	var weight =  document.getElementById("weight_input").value
	var height =  document.getElementById("height_input").value
	console.log(weight,height)
	bmi = weight/(height*height)
	console.log(bmi)
	document.getElementById("bmi").innerHTML = bmi

	if (bmi<18) {
		console.log("underweight")
		document.getElementById("bmi_category").innerHTML = "underweight 🪫" 
		bmi_category.style.color = "blue"
	} else if ( bmi>=18 && bmi<=24.9 ) {
		console.log("normal")
		document.getElementById("bmi_category").innerHTML = "normal ✅" 
		bmi_category.style.color = "green"
	}   else if (bmi>24.9 && bmi <29.9 ) {
		console.log("overweight")
		document.getElementById("bmi_category").innerHTML = "overweight ☢️" 
		bmi_category.style.color = "orange"
	} else if (bmi>30 && bmi<=34.9) {
		console.log("obese")
		document.getElementById("bmi_category").innerHTML = "obese 📈" 
		bmi_category.style.color = "red"
	} else if (bmi>=35) {
		console.log("extremly obese")
		document.getElementById("bmi_category").innerHTML = "extremly obese ✋" 
		bmi_category.style.color = "red"
	}

})



array = [
	"heello",
	"text"
	]


