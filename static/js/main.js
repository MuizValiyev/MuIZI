document.addEventListener('DOMContentLoaded', function() {
  const popupOpenButton = document.getElementById('popupOpen');
  const popup = document.getElementById('popup');

  popupOpenButton.addEventListener('click', function(event) {
      event.stopPropagation();
      popup.classList.toggle('show');
  });

  document.addEventListener('click', function(event) {
      if (!popup.contains(event.target) && !popupOpenButton.contains(event.target)) {
          popup.classList.remove('show');
      }
  });

  popup.addEventListener('click', function(event) {
      event.stopPropagation();
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var options = {
    strings: ["HTML, CSS.", "JavaScript.", "Python.", "Django.", "Flask.", "And more."],
    typeSpeed: 100,      // Скорость печати
    backSpeed: 100,       // Скорость удаления
    backDelay: 2000,   // Задержка перед удалением
    loop: true,          // Зацикливание
    showCursor: true,    // Показ курсора
    cursorChar: '|',     // Символ курсора
  };

  var typed = new Typed('#anonimtext', options);
});

