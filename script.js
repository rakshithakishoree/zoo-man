document
  .getElementById("surpriseButton")
  .addEventListener("click", function () {
    const animals = [
      "Red Panda 🐼",
      "Koala 🐨",
      "Kangaroo 🦘",
      "Penguin 🐧",
      "Flamingo 🦩",
    ];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    document.getElementById(
      "surpriseAnimal"
    ).textContent = `Surprise! It's a ${randomAnimal}!`;
  });
