

// DATOS
const data = [
{dia:"Lunes - Pecho", img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
ej:["Press banca 4x10","Flexiones 3x15","Aperturas 3x12"]},

{dia:"Martes - Espalda", img:"https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
ej:["Dominadas 4x8","Remo barra 4x10","Peso muerto 4x6"]},

{dia:"Miércoles - Piernas", img:"https://images.unsplash.com/photo-1594737625785-c2b2b7f3a7b7",
ej:["Sentadilla 4x10","Prensa 4x12","Zancadas 3x12"]},

{dia:"Jueves - Hombros", img:"https://images.unsplash.com/photo-1598970434795-0c54fe7c0648",
ej:["Press militar 4x10","Laterales 3x12","Frontales 3x12"]},

{dia:"Viernes - Brazos", img:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
ej:["Curl bíceps 3x12","Fondos 3x10","Tríceps 3x12"]}
];

// CREAR TARJETAS
const container = document.getElementById("workouts");

data.forEach((d,i)=>{
    const card=document.createElement("div");
    card.className="card";

    let list="";
    d.ej.forEach(e=> list+=`<li>${e}</li>`);

    card.innerHTML=`
    <img src="${d.img}">
    <div class="content">
    <h2>${d.dia}</h2>
    <ul>${list}</ul>
    <button onclick="complete(${i},this)">Completar</button>
    </div>`;

    container.appendChild(card);
});

// PROGRESO
function complete(i,btn){
    btn.classList.add("done");
    localStorage.setItem("day"+i,true);
    updateProgress();
}

function updateProgress(){
    let done=0;
    data.forEach((_,i)=>{
        if(localStorage.getItem("day"+i)) done++;
    });
    document.getElementById("progress").innerText =
    Math.round((done/data.length)*100);
}
updateProgress();

// MODO
function toggleMode(){
    document.body.classList.toggle("light");
}

// TIMER
let interval;
function startTimer(){
    let time=60;
    clearInterval(interval);

    interval=setInterval(()=>{
        document.getElementById("timer").innerText=time+"s";
        time--;
        if(time<0){
            clearInterval(interval);
            document.getElementById("timer").innerText="¡Listo!";
        }
    },1000);
}

// IA
function generateAI(){
    let body=document.getElementById("bodyType").value;
    let goal=document.getElementById("goal").value;

    let result="";

    if(body==="ecto"){
        if(goal==="muscle"){
            result="🔥 Pesas pesadas + poco cardio (4-5 días)";
        }else if(goal==="fat"){
            result="🔥 Full body + cardio moderado";
        }else{
            result="🔥 Rutina balanceada 3-4 días";
        }
    }

    if(body==="meso"){
        if(goal==="muscle"){
            result="🔥 Push/Pull/Legs + hipertrofia";
        }else if(goal==="fat"){
            result="🔥 HIIT + superseries";
        }else{
            result="🔥 Entrenamiento híbrido";
        }
    }

    if(body==="endo"){
        if(goal==="muscle"){
            result="🔥 Pesas + cardio ligero";
        }else if(goal==="fat"){
            result="🔥 HIIT intenso + cardio diario";
        }else{
            result="🔥 Control + cardio + fuerza";
        }
    }

    document.getElementById("aiResult").innerHTML=result;
}

