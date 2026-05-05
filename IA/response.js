const output = document.getElementById("output");
const chatInput = document.getElementById("chatInput");

function sendMessage() {
  const userText = chatInput.value.trim().toLowerCase();
  if (!userText) return;

  appendMessage("Tú: " + userText, "user");

  let response;
  if (userText === "hola") {
    response = "IA: ¡Hola! ¿Listo para buscar una rutina y entrenar?";
  } else if (userText === "rutina de pecho") {
    response = "IA: Press banca, aperturas con mancuernas, fondos y flexiones.";
  } else if (userText === "necesito masa muscular") {
    response = "IA: Entrena con cargas progresivas, come proteína y descansa bien.";
  } else if (userText === "otra rutina porfavor") {
    response = "IA: Press inclinado, cruces en polea, flexiones declinadas y press con mancuernas.";
  } else if (userText === "rutina de pierna") {
    response = "IA: ¡Claro! puedes intentar con extensión de cuadríceps, abductores, aductores y femoral";
  } else if (userText === "mierda") {
    response = "IA: CALLESE BOBO QUE ES MI TRABAJO.";
  } else if (userText === "no necesito ayuda") {
    response = "IA: Lo entiendo, ¡sigue tus sueños de forma independiente!";
  } else if (userText === "rutina de Triceps") {
    response = "IA: Extensión en polea y en maquina, flexiones cerradas declinadas y Dippings en bancos.";
  } else if (userText === "rutina de brazo") {
    response = "IA: Curl de Bicep en polea, Curl de bicep en maquina, Extensión de triceps.";
  } else if (userText === "¿no hay otra rutina de pecho?") {
    response = "IA: Lo entiendo, intenta estudiar tus preferencias con un instructor en tu gimnasio";
  } else if (userText === "Rutina de biceps") {
    response = "IA: Intenta con pesos progresivos, a continuación una serie de ejercicios propuestos.";
  } else if (userText === "Necesito bajar peso") {
    response = "IA: Un poco de cardio extremo, caminadora y ejericios HIT te vendrian bien";
  } else if (userText === "Gracias") {
    response = "IA: ¡Con todo el gusto! Prote IA siempre a tu favor";
  } else {
    response = "IA: Parece que no entiendo tu mensaje.¡Preguntame sobre entrenamientos y rutinas!.";
  }


  appendMessage(response, "ia");
  chatInput.value = "";
}

function appendMessage(text, type) {
  const p = document.createElement("p");
  p.textContent = text;
  p.className = type;
  output.appendChild(p);
  output.scrollTop = output.scrollHeight;
}

// Detectar Enter
chatInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});
