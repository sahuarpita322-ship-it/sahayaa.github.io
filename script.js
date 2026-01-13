const bloodBanks = [
  {
    name: "District Blood Bank, Ganjam",
    location: "Brahmapur",
    phone: "9437000000",
    groups: ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"],
    status: "Available"
  },
  {
    name: "Red Cross Blood Bank",
    location: "Brahmapur",
    phone: "9438000000",
    groups: ["A+", "B+", "O+", "AB+"],
    status: "Limited"
  },
  {
    name: "MKCG Medical College Blood Bank",
    location: "Brahmapur",
    phone: "6802221234",
    groups: ["A+", "A-", "B+", "O+", "O-", "AB+", "AB-"],
    status: "Available"
  },
  {
    name: "City Hospital Blood Bank",
    location: "Brahmapur",
    phone: "6802225678",
    groups: ["B+", "B-", "O+", "AB+"],
    status: "Limited"
  },
  {
    name: "Life Care Blood Centre",
    location: "Brahmapur",
    phone: "6802234567",
    groups: ["A+", "O+", "O-", "AB-"],
    status: "Available"
  }
];
const hospitals = [
  {
    name: "MKCG Medical College & Hospital",
    type: "Government",
    address: "Brahmapur, Odisha",
    hospitalPhone: "06802221111",
    ambulancePhone: "108",
    beds: "Available",
    doctors: "Available",
    rating: 4.6
  },
  {
    name: "District Headquarters Hospital (DHH)",
    type: "Government",
    address: "Brahmapur, Odisha",
    hospitalPhone: "06802224444",
    ambulancePhone: "108",
    beds: "Limited",
    doctors: "Available",
    rating: 4.0
  },
  {
    name: "City Hospital",
    type: "Private",
    address: "Brahmapur, Odisha",
    hospitalPhone: "06802222222",
    ambulancePhone: "9439001111",
    beds: "Limited",
    doctors: "Available",
    rating: 4.1
  },
  {
    name: "Apollo Hospital",
    type: "Private",
    address: "Brahmapur, Odisha",
    hospitalPhone: "06802233333",
    ambulancePhone: "9439002222",
    beds: "Available",
    doctors: "Limited",
    rating: 4.3
  },
  {
    name: "Life Care Hospital",
    type: "Private",
    address: "Brahmapur, Odisha",
    hospitalPhone: "06802255555",
    ambulancePhone: "9439003333",
    beds: "Available",
    doctors: "Available",
    rating: 4.2
  },
  {
    name: "Arya Hospital",
    type: "Private",
    address: "Brahmapur, Odisha",
    hospitalPhone: "06802266666",
    ambulancePhone: "9439004444",
    beds: "Limited",
    doctors: "Available",
    rating: 3.9
  }
];

function showHospitals(list) {
  const container = document.getElementById("hospitalList");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(h => {
    container.innerHTML += `
      <div class="card">
        <h3>${h.name}</h3>
        <p>🏥 <b>${h.type}</b></p>
        <p>📍 ${h.address}</p>
        <p>🛏 Beds: <b>${h.beds}</b></p>
        <p>👨‍⚕️ Doctors: <b>${h.doctors}</b></p>
        <p>⭐ Rating: ${h.rating}</p>

        <p>📞 Hospital: ${h.hospitalPhone}</p>
        

        <button onclick="callNumber('${h.hospitalPhone}')">
          📞 Call Hospital
        </button>

        <button onclick="callNumber('${h.ambulancePhone}')" 
                style="background:#ef6c00;">
          🚑 Call Ambulance
        </button>
      </div>
    `;
  });

}

function filterHospitals() {
  const type = document.getElementById("typeFilter").value;
  if (type === "all") {
    showHospitals(hospitals);
  } else {
    showHospitals(
      hospitals.filter(h => h.type === type)
    );
  }
}

showHospitals(hospitals);

function callNumber(number) {
  window.location.href = "tel:" + number;
}

function showBloodBanks(list) {
  const container = document.getElementById("bloodList");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(bank => {
    container.innerHTML += `
      <div class="card">
        <h3>${bank.name}</h3>
        <p>📍 ${bank.location}</p>
        <p>🩸 ${bank.groups.join(", ")}</p>
        <p>Status: <b>${bank.status}</b></p>
        <button onclick="callNumber('${bank.phone}')">📞 Call</button>
      </div>
    `;
  });
}

function filterBlood() {
  const group = document.getElementById("groupFilter").value;
  if (group === "all") {
    showBloodBanks(bloodBanks);
  } else {
    showBloodBanks(
      bloodBanks.filter(b => b.groups.includes(group))
    );
  }
}
// VOICE ASSISTANT
function speakText(text, lang="en-US") {
  if (!('speechSynthesis' in window)) {
    alert("Sorry, your browser does not support voice.");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang; // "en-US" for English, "hi-IN" for Hindi, "or-IN" for Odia
  utterance.rate = 1;     // speed
  utterance.pitch = 1;    // pitch
  window.speechSynthesis.speak(utterance);
}

// Attach click event to the button
const voiceBtn = document.getElementById("voiceBtn");
if (voiceBtn) {
  voiceBtn.addEventListener("click", function(){
    const pageText = "Welcome to Sahaya. Click Ambulance, Police, or Fire for emergency help. You can also browse Blood Banks, Hospitals, Emergency Numbers, and About Sahaya.";
    speakText(pageText, "en-US"); // Change text and lang for Hindi/Odia
  });
}

showBloodBanks(bloodBanks);
// VOICE ASSISTANT
function speakText(text, lang="en-US") {
  if (!('speechSynthesis' in window)) {
    alert("Sorry, your browser does not support voice.");
    return;
  }
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang; // "en-US", "hi-IN", "or-IN" (Odia)
  utterance.rate = 1; // speed
  utterance.pitch = 1; // pitch
  window.speechSynthesis.speak(utterance);
}

// Example instructions for Home page
document.getElementById("voiceBtn").addEventListener("click", function(){
  const pageText = "Welcome to Sahaya. Click Ambulance, Police, or Fire buttons for emergency help. You can also browse Blood Banks, Hospitals, Emergency Numbers, and About Sahaya.";
  speakText(pageText, "en-US"); // For English
  speakText("सहाय वेबसाइट में आपका स्वागत है। आप आपातकालीन मदद के लिए एम्बुलेंस, पुलिस या फायर बटन पर क्लिक कर सकते हैं।", "hi-IN");
});
// Text for each page in different languages
const translations = {
  home: {
    en: {
      heading: "Local Help & Emergency Services 🏥",
      voice: "Welcome to Sahaya. Click Ambulance, Police, or Fire for emergency help. You can also browse Blood Banks, Hospitals, Emergency Numbers, and About Sahaya."
    },
    hi: {
      heading: "स्थानीय सहायता और आपातकालीन सेवाएँ 🏥",
      voice: "सहाय वेबसाइट में आपका स्वागत है। आप आपातकालीन मदद के लिए एम्बुलेंस, पुलिस या फायर बटन पर क्लिक कर सकते हैं। आप रक्त बैंक, अस्पताल, आपातकालीन नंबर और साहाय के बारे में भी देख सकते हैं।"
    },
    or: {
      heading: "ସ୍ଥାନୀୟ ସହାୟତା ଏବଂ ଆପତ୍କାଳୀନ ସେବା 🏥",
      voice: "ସାହାୟା ୱେବସାଇଟ୍‌କୁ ସ୍ୱାଗତ। ଆପଣ ଏମ୍ବୁଲାନ୍ସ, ପୁଲିସ୍‌ କିମ୍ବା ଫାୟାର ବଟନ୍‌ରେ କ୍ଲିକ୍‌ କରି ଆପତ୍କାଳୀନ ସହାୟତା ପାଇପାରିବେ। ଆପଣ ରକ୍ତ ବ୍ୟାଙ୍କ, ହସ୍ପିଟାଲ, ଆପତ୍କାଳୀନ ନମ୍ବର ଏବଂ ସାହାୟ ବିଷୟରେ ମଧ୍ୟ ଦେଖିପାରିବେ।"
    }
  }
  // You can add blood, hospital, emergency pages similarly
};
let currentLang = "en"; // default language

function setLanguage(lang) {
  currentLang = lang;

  // Change heading text (example for home page)
  const h1 = document.querySelector("h1");
  if(h1 && translations.home[lang]) {
    h1.innerText = translations.home[lang].heading;
  }

  // Speak instructions in selected language
  const voiceBtn = document.getElementById("voiceBtn");
  if(voiceBtn){
    voiceBtn.onclick = function(){
      speakText(translations.home[lang].voice, 
                lang === "en" ? "en-US" : lang === "hi" ? "hi-IN" : "or-IN");
    }
  }
}
/* ---------- GOVERNMENT SCHEMES DATA ---------- */
const healthSchemes = [
  {
    name: "Ayushman Bharat",
    facility: "Health insurance coverage up to ₹5 Lakh per family",
    eligibility: "All BPL and EWS families",
    documents: "Aadhaar Card, Ration Card",
    office: "District Health Office, Brahmapur",
    contact: "0680-2223333",
    applyLink: "https://www.ayushmanbharat.gov.in/"
  },
  {
    name: "National Health Mission (NHM)",
    facility: "Free maternal and child health services",
    eligibility: "All pregnant women & children",
    documents: "Aadhaar Card / Health ID",
    office: "District Health Office, Brahmapur",
    contact: "0680-2224444",
    applyLink: "https://nhm.gov.in/"
  },
  {
    name: "Pradhan Mantri Jan Arogya Yojana (PMJAY)",
    facility: "Cashless hospitalization for serious illnesses",
    eligibility: "Eligible families under SECC list",
    documents: "Aadhaar Card, SECC Certificate",
    office: "District Hospital, Brahmapur",
    contact: "0680-2225555",
    applyLink: "https://pmjay.gov.in/"
  },
  {
    name: "Rashtriya Bal Swasthya Karyakram (RBSK)",
    facility: "Free health screening for children",
    eligibility: "Children aged 0–18 years",
    documents: "Birth certificate / Aadhaar",
    office: "District Hospital, Brahmapur",
    contact: "0680-2226666",
    applyLink: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1133&lid=176"
  },
  {
    name: "Janani Suraksha Yojana (JSY)",
    facility: "Cash incentive for institutional deliveries",
    eligibility: "Pregnant women below poverty line",
    documents: "Pregnancy Card, Aadhaar",
    office: "PHC / CHC, Brahmapur",
    contact: "0680-2227777",
    applyLink: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=1132&lid=175"
  }
];

/* ---------- SHOW SCHEMES ---------- */
function showSchemes(list) {
  const container = document.getElementById("schemeList");
  if (!container) return;

  container.innerHTML = "";

  list.forEach(s => {
    container.innerHTML += `
      <div class="card">
        <h3>${s.name}</h3>
        <p>🏥 Facility: ${s.facility}</p>
        <p>✅ Eligibility: ${s.eligibility}</p>
        <p>📄 Documents: ${s.documents}</p>
        <p>📍 Office: ${s.office}</p>
        <p>📞 Contact: <a href="tel:${s.contact}">${s.contact}</a></p>
        <a href="${s.applyLink}" target="_blank">
          <button style="background:#ff9800;color:white;padding:8px 12px;border-radius:5px;margin-top:5px;">
            📝 Apply
          </button>
        </a>
      </div>
    `;
  });
}

/* ---------- LOAD SCHEMES ---------- */
document.addEventListener("DOMContentLoaded", () => {
  showSchemes();
});
/* ---------- CHILD LOCK SYSTEM ---------- */
let childLock = localStorage.getItem("childLock") === "on";

function updateChildLockUI() {
  const btn = document.getElementById("childLockBtn");
  const emergencyBtns = document.querySelectorAll(".emergency button");

  if (!btn) return;

  if (childLock) {
    btn.innerText = "🔒 Child Lock ON";
    emergencyBtns.forEach(b => b.disabled = true);
  } else {
    btn.innerText = "🔓 Child Lock OFF";
    emergencyBtns.forEach(b => b.disabled = false);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateChildLockUI();

  const btn = document.getElementById("childLockBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (childLock) {
      const pin = prompt("Enter PIN to unlock:");
      if (pin === "1234") {
        childLock = false;
        localStorage.setItem("childLock", "off");
      } else {
        alert("Wrong PIN");
      }
    } else {
      childLock = true;
      localStorage.setItem("childLock", "on");
    }
    updateChildLockUI();
  });
});
// GET USER LOCATION
function getUserLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log("Latitude:", lat, "Longitude:", lon);

        // Save location for use in maps or services
        localStorage.setItem("userLat", lat);
        localStorage.setItem("userLon", lon);

        // Optional: Show a Google Map centered on user location
        showUserMap(lat, lon);
      },
      function(error) {
        alert("Unable to get your location. Please allow location access.");
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
}

// CALL THIS ON PAGE LOAD
document.addEventListener("DOMContentLoaded", function() {
  getUserLocation();
});
function showUserMap(lat, lon) {
  const mapContainer = document.getElementById("userMap");
  if (!mapContainer) return;

  mapContainer.innerHTML = `
    <iframe
      width="100%" height="220"
      style="border:0;"
      loading="lazy"
      allowfullscreen
      src="https://www.google.com/maps?q=${lat},${lon}&hl=es;z=15&output=embed">
    </iframe>
  `;
}
function sendEmergencySMS() {
  if (!navigator.geolocation) {
    alert("Location not supported");
    return;
  }

  navigator.geolocation.getCurrentPosition(pos => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;

    const message =
      "🚨 EMERGENCY! I need help.\n" +
      "My live location:\n" +
      "https://www.google.com/maps?q=" + lat + "," + lng;

    const phone = "108"; // or family number

    // Opens SMS app
    window.location.href =
      "sms:" + phone + "?body=" + encodeURIComponent(message);
  });
}
