async function shorten() {
  const url = document.getElementById("urlInput").value;
  if (!url) return alert("Enter a URL");

  const res = await fetch("/shorten", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url })
  });

  const data = await res.json();

  document.getElementById("result").innerHTML =
    `Short URL: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
}
