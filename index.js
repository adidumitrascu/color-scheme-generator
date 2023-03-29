const colors = document.getElementById("colors")
document.getElementById("scheme-btn").addEventListener("click", () => {
  const colorScheme = document.getElementById("color-scheme").value
  const colorPicker = document
    .getElementById("color-picker")
    .value.replace("#", "")
  colors.innerHTML = ""

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${colorScheme}&count=5`
  )
    .then((Response) => Response.json())
    .then((data) => {
      data.colors.map((color) => {
        const hex = color.hex.value
        colors.innerHTML += `
        <div class="color-el" style="background:${hex}">${hex}</div>
        `
      })
    })

  setTimeout(() => {
    document.querySelectorAll(".color-el").forEach((el) =>
      el.addEventListener("click", (event) => {
        navigator.clipboard.writeText(event.target.innerHTML)
        alert(
          "Hex value has been copied to clipboard: " + event.target.innerHTML
        )
      })
    )
  }, 500)
})
