const moduleInfo = {
  earthquake: {
    title: "Earthquake Preparedness",
    description: "During an earthquake, Drop, Cover, and Hold On. Stay away from windows, secure heavy furniture, and have an emergency kit ready."
  },
  flood: {
    title: "Flood Safety",
    description: "Move to higher ground, avoid walking through flood waters, and disconnect electrical appliances. Keep emergency supplies dry."
  },
  fire: {
    title: "Fire Safety",
    description: "Stay low to avoid smoke, know your escape routes, and never use elevators during a fire. Install smoke detectors and fire extinguishers."
  },
  cyclone: {
    title: "Cyclone Preparedness",
    description: "Secure outdoor items, stock up on food and water, and stay indoors away from windows. Follow official weather alerts closely."
  }
};

function openModule(type) {
  const modal = document.getElementById('moduleModal');
  const title = document.getElementById('modalTitle');
  const description = document.getElementById('modalDescription');

  title.textContent = moduleInfo[type].title;
  description.textContent = moduleInfo[type].description;
  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('moduleModal').style.display = 'none';
}

// Close modal if clicked outside
window.onclick = function(event) {
  const modal = document.getElementById('moduleModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
