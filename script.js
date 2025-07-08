function sanitizeInput(input) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function generateXML() {
  const input = document.getElementById("userInput").value;
  const safeInput = sanitizeInput(input);

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<userInput>${safeInput}</userInput>`;

  const blob = new Blob([xmlContent], { type: "application/xml" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "user_input.xml";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

document.getElementById("downloadBtn").addEventListener("click", generateXML);
