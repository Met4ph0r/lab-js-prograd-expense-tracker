infoSubmit = () => {
    let key = document.getElementById("text").value
    let val = document.getElementById("amount").value

    let expense = parseFloat(document.getElementById("money-minus").innerText)
    let income = parseFloat(document.getElementById("money-plus").innerText)

    if(val<0){
        expense -= parseFloat(val)
        document.getElementById("money-minus").innerText = expense;
    }
    else{
        income += parseFloat(val)
        document.getElementById("money-plus").innerText = income;
    }
    
    document.getElementById("balance").innerText = income - expense

    localStorage.setItem("income", income)
    localStorage.setItem("expense", expense)
    localStorage.setItem(key, val)

    document.getElementById("list").innerHTML = ""
    updateList()

    document.getElementById("text").value = ""
    document.getElementById("amount").value = ""
    btnEnable()
}

btnEnable = () => {
    if (document.getElementById("text").value != "" && document.getElementById("amount").value != ""){
        document.getElementById("button").disabled=false
    }
    else{
        document.getElementById("button").disabled=true
    }
}

// console.log(JSON.stringify(localStorage))


updateList = () => {
    keys = Object.keys(localStorage)
    for(a of keys){
        if(a == "expense" || a == "income")
        continue

        let val = localStorage.getItem(a)
        
        if(val>0)
            document.getElementById("list").innerHTML += "<li class='liPlus'>" + a + " &emsp; : &emsp; " + val + "</li>&#10;"
        else
            document.getElementById("list").innerHTML += "<li class='liMinus'>" + a + " &emsp; : &emsp; " + val + "</li>&#10;"
    }
}


fillDefault = () => {
    if(localStorage.getItem("expense") != null){
        let exp = localStorage.getItem("expense")
        let inc = localStorage.getItem("income")
        document.getElementById("money-minus").innerText = exp
        document.getElementById("money-plus").innerText = inc
        document.getElementById("balance").innerText = inc - exp
    }
    updateList()
}

fillDefault()
