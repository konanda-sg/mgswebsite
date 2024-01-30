function checkInspectElement() {
  const hasInspectElementOpen = window.location.search.includes("inspect");

  if (hasInspectElementOpen) {
    window.close();
  }
}

// Run the check when the page loads
window.addEventListener("DOMContentLoaded", checkInspectElement);