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

//butonlar seçildi.
const calcButton = document.querySelector(".button-1")
const delButton = document.querySelector(".button-2")

//sonuç inputu seçildi.
const finalExamResult= document.querySelector(".finalResult")

//calculate butonuna tıklayınca yapılacak işlemler için fonksiyon oluşturuldu.
calcButton.addEventListener("click",calculate);
function calculate(e){

    e.preventDefault();

    //quiz ve writing quizleri seçip işlem yapıldı.
    q1Result= q1.value;
    wq1Result= wq1.value
    q2Result= q2.value;
    wq2Result= wq2.value;
    q3Result= q3.value;
    wq3Result= wq3.value;
    q4Result= q4.value;
    wq4Result= wq4.value;
    var qwqValue= (parseInt(q1Result) + parseInt(wq1Result) + parseInt(q2Result) + parseInt(wq2Result) + parseInt(q3Result) + parseInt(wq3Result) + parseInt(q4Result) + parseInt(wq4Result))*0.04

    //achievementlar seçildi işlem yapıldı.
    ach1Result= ach1.value;
    ach2Result= ach2.value;
    ach3Result= ach3.value;
    var achValue= (parseInt(ach1Result)+parseInt(ach2Result)+parseInt(ach3Result))*0.1;

    //student performanslar seçildi işlem yapıldı.
    sp1Result= sp1.value;
    sp2Result= sp2.value;
    var spValue= (parseInt(sp1Result)+parseInt(sp2Result))*0.03;
    
    //lms ler seçildi işlem yapıldı.
    lms1Result= lms1.value;
    lms2Result= lms2.value;
    var lmsValue= (parseInt(lms1Result)+parseInt(lms2Result))*0.05
    
    //speaking exam seçildi işlem yapıldı.
    seResult= se.value;
    var seValue= parseInt(seResult)*0.08;

    //speaking project seçildi işlem yapıldı.
    spjResult= spj.value;
    var spjValue=parseInt(spjResult)*0.06
    
    //loe seçildi işlem yapıldı.
    loeResult= loe.value;
    var loeValue= parseInt(loeResult)*0.08

    //dönem içi sınavlar ayrı ayrı toplandı işlem yapıldı en sonunda 40'ı alındı.
    var totalExamsValue = (parseInt(qwqValue) + parseInt(achValue) + parseInt(spValue) + parseInt(lmsValue) + parseInt(seValue) + parseInt(spjValue) + parseInt(loeValue))*0.4

    //elde edilen puan departmenta göre değişen hazırlığı geçme puanından çıkarıldı.
    var pointShouldGet = 65 - parseInt(totalExamsValue)

    //toplanması gereken puan 0.6'ya bölündü ve final sınavından en az kaç alınması gerektiği hesaplandı ve yazdırıldı.
    var minFinalMark= parseInt( parseInt(pointShouldGet) / 0.6 )
    





    //result list eklendi
    const resultList = document.querySelector(".result-list")

    //section bölümü
    const resultDiv= document.createElement("section")
    resultDiv.classList.add("result-area")

    //sectionun içindeki div 
    const resultInfoDiv = document.createElement("div")
    resultInfoDiv.classList.add("result-info")
    resultDiv.appendChild(resultInfoDiv);

    //divin içindeki açıklama
    const h2Info = document.createElement("h2")
    h2Info.classList.add("font-20")
    h2Info.innerText="The minimum grade you need to get in the final exam is :"
    resultDiv.appendChild(h2Info)

    //divin içindeki notu gösteren paragraf
    const pInfo = document.createElement("p")
    pInfo.innerText=parseInt(minFinalMark)
    pInfo.classList.add("finalResult")
    resultDiv.appendChild(pInfo)

    //sectionı result liste ekleyen dalga
    resultList.appendChild(resultDiv)

    


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
    
    



    
    
    
    
    
    
    







