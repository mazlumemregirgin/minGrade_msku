//notların inputu seçildi.
const q1 = document.querySelector("#q1")
const wq1 = document.querySelector("#wq1")
const ach1 = document.querySelector("#ach1")
const q2 = document.querySelector("#q2")
const wq2 = document.querySelector("#wq2")
const sp1 = document.querySelector("#sp1")
const lms1 = document.querySelector("#lms1")
const se = document.querySelector("#se")
const ach2 = document.querySelector("#ach2")
const q3 = document.querySelector("#q3")
const wq3 = document.querySelector("#wq3")
const ach3 = document.querySelector("#ach3")
const q4 = document.querySelector("#q4")
const wq4 = document.querySelector("#wq4")
const spj = document.querySelector("#spj")
const lms2 = document.querySelector("#lms2")
const sp2 = document.querySelector("#sp2")
const loe = document.querySelector("#loe")

//sınavların yüzdelik ağırlıkları seçildi
const qperc = document.querySelector("#qperc")
const wqperc = document.querySelector("#wqperc")
const achperc = document.querySelector("#achperc")
const spperc = document.querySelector("#spperc")
const lmsperc = document.querySelector("#lmsperc")
const seperc = document.querySelector("#seperc")
const spjperc = document.querySelector("#spjperc")
const loeperc = document.querySelector("#loeperc")

//butonlar seçildi.
const calcButton = document.querySelector(".button-1")
const delButton = document.querySelector(".button-2")

//sonuç inputu seçildi.


//calculate butonuna tıklayınca yapılacak işlemler için fonksiyon oluşturuldu.
calcButton.addEventListener("click",calculate);
function calculate(e){

    e.preventDefault();

    //inputların valueları veya department selector boş ise program çalışmıyor.
    if(q1.value =="" || wq1.value =="" || ach1.value=="" || q2.value=="" || wq2.value=="" || sp1.value=="" || lms1.value=="" || se.value=="" || ach2.value=="" || q3.value=="" || wq3.value=="" ||ach3.value=="" ||q4.value=="" || wq4.value=="" || spj.value=="" || lms2.value=="" ||sp2.value==""|| loe.value=="" || selectedDepartment=="" ){
        alert("You Did Not Enter All Grades or You Did Not Choose Your Department ")
    //inputların valuesu 100 den büyük ise uyarı verir.
    }
    else if (q1.value>100 || wq1.value>100 || ach1.value>100 || q2.value>100 || wq2.value>100 || sp1.value>100 || lms1.value>100 || se.value>100 || ach2.value>100 || q3.value>100 || wq3.value>100 ||ach3.value>100 ||q4.value>100 || wq4.value>100 || spj.value>100 || lms2.value>100 ||sp2.value>100|| loe.value>100){
        alert("Enter a grade from 0-100")
    }
    else{
    //selectin içindeki optionların value'larına erişildi.
    const passingGradeSelect = document.querySelector("#department-selector");
    const passingGrade = parseInt(passingGradeSelect.value);

    //selectin içindeki optionların textine erişildi.
    var selectElement = document.querySelector("#department-selector");
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    var selectedDepartment = selectedOption.text;


    //quiz ve writing quizleri seçip işlem yapıldı.
    q1Result= q1.value;
    q2Result= q2.value;
    q3Result= q3.value;
    q4Result= q4.value;
    var qValue= (parseInt(q1Result) + parseInt(q2Result) + parseInt(q3Result) + parseInt(q4Result))*(qperc.value/100)

    //writing quizler seçilip işlem yapıldı.
    wq1Result= wq1.value
    wq2Result= wq2.value;
    wq3Result= wq3.value;
    wq4Result= wq4.value;
    var wqValue= ( parseInt(wq1Result) + parseInt(wq2Result) + parseInt(wq3Result) + parseInt(wq4Result) )*(wqperc.value/100)
    //achievementlar seçildi işlem yapıldı.
    ach1Result= ach1.value;
    ach2Result= ach2.value;
    ach3Result= ach3.value;
    var achValue= (parseInt(ach1Result)+parseInt(ach2Result)+parseInt(ach3Result))*(achperc.value/100);

    //student performanslar seçildi işlem yapıldı.
    sp1Result= sp1.value;
    sp2Result= sp2.value;
    var spValue= (parseInt(sp1Result)+parseInt(sp2Result))*(spperc.value/100);
    
    //lms ler seçildi işlem yapıldı.
    lms1Result= lms1.value;
    lms2Result= lms2.value;
    var lmsValue= (parseInt(lms1Result)+parseInt(lms2Result))*(lmsperc.value/100)
    
    //speaking exam seçildi işlem yapıldı.
    seResult= se.value;
    var seValue= parseInt(seResult)*(seperc.value/100);

    //speaking project seçildi işlem yapıldı.
    spjResult= spj.value;
    var spjValue=parseInt(spjResult)*(spjperc.value/100)
    
    //loe seçildi işlem yapıldı.
    loeResult= loe.value;
    var loeValue= parseInt(loeResult)*parseInt(loeperc.value/100)

    //dönem içi sınavlar ayrı ayrı toplandı işlem yapıldı en sonunda 40'ı alındı.
    var totalExamsValue = (parseInt(qValue) + parseInt(wqValue) + parseInt(achValue) + parseInt(spValue) + parseInt(lmsValue) + parseInt(seValue) + parseInt(spjValue) + parseInt(loeValue))*0.4

    //elde edilen puan departmenta göre değişen hazırlığı geçme puanından çıkarıldı.
    var pointShouldGet = passingGrade - parseInt(totalExamsValue)

    //toplanması gereken puan 0.6'ya bölündü ve final sınavından en az kaç alınması gerektiği hesaplandı ve yazdırıldı.
    var minFinalMark= parseInt( parseInt(pointShouldGet) / 0.6 )
    


    
    //result list eklendi
    const resultList = document.querySelector(".result-list")

    //section bölümü
    const resultDiv= document.createElement("section")
    resultDiv.classList.add("result-area")

    //sectionun içindeki div1
    const resultInfoDiv1 = document.createElement("div")
    resultInfoDiv1.classList.add("result-info")
    resultDiv.appendChild(resultInfoDiv1);

    //divin içindeki açıklama1
    const h2Info1 = document.createElement("h2")
    h2Info1.classList.add("font-20")
    h2Info1.innerText="Your Department :"
    resultDiv.appendChild(h2Info1)

    //divin içindeki notu gösteren paragraf1
    const pInfo1 = document.createElement("p")
    pInfo1.innerText=selectedDepartment
    pInfo1.classList.add("finalResult")
    resultDiv.appendChild(pInfo1)



    //sectionun içindeki div2
    const resultInfoDiv2 = document.createElement("div")
    resultInfoDiv2.classList.add("result-info")
    resultDiv.appendChild(resultInfoDiv2);

    //divin içindeki açıklama2
    const h2Info2 = document.createElement("h2")
    h2Info2.classList.add("font-20")
    h2Info2.innerText="Passing Grade of your department :"
    resultDiv.appendChild(h2Info2)

    //divin içindeki notu gösteren paragraf2
    const pInfo2 = document.createElement("p")
    pInfo2.innerText=parseInt(passingGrade)
    pInfo2.classList.add("finalResult")
    resultDiv.appendChild(pInfo2)



    //sectionun içindeki div3
    const resultInfoDiv3 = document.createElement("div")
    resultInfoDiv3.classList.add("result-info")
    resultDiv.appendChild(resultInfoDiv3);

    //divin içindeki açıklama3
    const h2Info3 = document.createElement("h2")
    h2Info3.classList.add("font-20")
    h2Info3.innerText="The score that you got from exams during the year :"
    resultDiv.appendChild(h2Info3)

    //divin içindeki notu gösteren paragraf3
    const pInfo3 = document.createElement("p")
    pInfo3.innerText=parseInt(totalExamsValue)
    pInfo3.classList.add("finalResult")
    resultDiv.appendChild(pInfo3)



    //sectionun içindeki div4
    const resultInfoDiv4 = document.createElement("div")
    resultInfoDiv4.classList.add("result-info")
    resultDiv.appendChild(resultInfoDiv4);

    //divin içindeki açıklama4
    const h2Info4 = document.createElement("h2")
    h2Info4.classList.add("font-20")
    h2Info4.innerText="Minimum score you need to get :"
    resultDiv.appendChild(h2Info4)

    //divin içindeki notu gösteren paragraf4
    const pInfo4 = document.createElement("p")
    pInfo4.innerText=parseInt(pointShouldGet)
    pInfo4.classList.add("finalResult")
    resultDiv.appendChild(pInfo4)



    //sectionun içindeki div5
    const resultInfoDiv5 = document.createElement("div")
    resultInfoDiv5.classList.add("result-info")
    resultDiv.appendChild(resultInfoDiv5);

    //divin içindeki açıklama5
    const h2Info5 = document.createElement("h2")
    h2Info5.classList.add("font-20")
    h2Info5.innerText="The grade you need to get from the Proficiency Exam for the minimum score :"
    resultDiv.appendChild(h2Info5)

    //divin içindeki notu gösteren paragraf5
    const pInfo5 = document.createElement("p")
    if(parseInt(minFinalMark)>100){
        pInfo5.innerText= parseInt(minFinalMark) && "You failed bro :( You can't get"+" "+parseInt(minFinalMark)+" "+ "on a single exam."
    }else{
        pInfo5.innerText= parseInt(minFinalMark)
    }
    pInfo5.classList.add("finalResult")
    resultDiv.appendChild(pInfo5)


    //section result liste eklendi.
    resultList.appendChild(resultDiv)

    
    
    console.log(wqperc.value/100)

    /* clear all butonuna basılınca yapılacaklar eklendi */ 
    const divToRemove = document.querySelector(".result-area");
    delButton.addEventListener("click", function () {
    divToRemove.remove();
    document.getElementById("q1").value = "";
    document.getElementById("wq1").value = "";
    document.getElementById("ach1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("wq2").value = "";
    document.getElementById("sp1").value = "";
    document.getElementById("lms1").value = "";
    document.getElementById("se").value = "";
    document.getElementById("ach2").value = "";
    document.getElementById("q3").value = "";
    document.getElementById("wq3").value = "";
    document.getElementById("ach3").value = "";
    document.getElementById("q4").value = "";
    document.getElementById("wq4").value = "";
    document.getElementById("spj").value = "";
    document.getElementById("lms2").value = "";
    document.getElementById("sp2").value = "";
    document.getElementById("loe").value = "";
});
}
}
    
    



    
    
    
    
    
    
    







