  document.addEventListener('DOMContentLoaded', function(){
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
