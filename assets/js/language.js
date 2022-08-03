class Translate{
    constructor(){
        document.getElementById("arabic").addEventListener("click",()=>{
            this.translate("arabic");
        });

        document.getElementById("eng").addEventListener("click",()=>{
            this.translate("eng");
        });
        this.translate(localStorage.getItem("Laugauge"));
    }
    translate(language){
        if(language == "arabic"){
            
            document.getElementById("lang1").innerHTML="MHG IT";
            document.getElementById("lang2").innerHTML="نجعل التكنولوجيا في المتناول! وكل شيء سهل";
            document.getElementById("lang3").innerHTML="احجز الان";

        }
        else if(language == "eng"){

            document.getElementById("lang1").innerHTML="MHG IT Staff & Trainee";
            document.getElementById("lang2").innerHTML="We make technology accessible! And Everything is easy";
            document.getElementById("lang3").innerHTML="Book now";

        }
        localStorage.setItem("Laugauge",language)

    }
}
onload=new Translate();