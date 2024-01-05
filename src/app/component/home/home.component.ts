import { Component, OnInit } from '@angular/core';

interface Icon {
  icon: string;
  titulo: string;
  nome: string;
}

interface Projeto {
  url: string;
  titulo: string;
  tecnologias: string;
  preview: string;
}

interface Servico {
  icon: string;
  titulo: string;
}

interface Skill {
  icon: string;
  titulo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  icons: Icon[] = [
    { icon: 'fa-solid fa-envelope', titulo: 'E-mail', nome: 'rubensfilipe6@gmail.com' },
    { icon: 'fa-brands fa-github', titulo: 'Github', nome: 'github.com/Srubens' },
    { icon: 'fa-brands fa-linkedin', titulo: 'Linkedin', nome: 'in/rubensfilipe6' },
  ];

  projetos: Projeto[] = [
    { url: 'assets/imagem-1.png', titulo: 'Pizzaria-shop', tecnologias: 'html, css e javascript - Angular', preview: 'https://pizzaria-shop.vercel.app/' },
    { url: 'assets/imagem-2.png', titulo: 'Paladaria-app', tecnologias: 'html, css e javascript - Angular', preview: 'https://paladaria-app.vercel.app/' },
    { url: 'assets/imagem-3.png', titulo: 'Lading Page Amarantes', tecnologias: 'html, css e javascript - React', preview: 'https://lp-amarantes.vercel.app/' },
  ];

  servicos: Servico[] = [
    { icon: 'fa-solid fa-code', titulo: 'Criação de Sites' },
    { icon: 'fa-brands fa-figma', titulo: 'Criação de Layout' },
    { icon: 'fa-solid fa-pen-nib', titulo: 'Design Gráfico' },
  ];

  skills: Skill[] = [
    { icon: 'fa-brands fa-js', titulo: 'javascript' },
    { icon: 'fa-brands fa-wordpress', titulo: 'wordpress' },
    { icon: 'fa-brands fa-react', titulo: 'react' },
    { icon: 'fa-solid fa-database', titulo: 'sql' },
    { icon: 'fa-brands fa-css3-alt', titulo: 'css' },
    { icon: 'fa-brands fa-angular', titulo: 'angular' },
  ];

  about:any = {
    texto:`Olá meu nome é Rubens sou desenvolvedor Front End. Sou entusiasta em programação, sempre busco explorar novas formas de aprender e crescer. Estou animado para explorar o futuro, fica de olho que logo mais estarei colocando novidades por aqui. Sinta-se à vontade para entrar em contato nos links abaixo.`
  }

  constructor() {}

  ngOnInit(): void {
    this.initTypingAnimation();
    this.initIntersectionObserver();
  }

  private initTypingAnimation(): void {
    document.addEventListener("DOMContentLoaded", function () {
      var typingDemo: any = document.querySelector(".typing-demo p");
      var texts = ["Desenvolvedor Front End", "Desenvolvedor Full Stack", "Analista de Automação"];
      var index = 0;

      function typeText(text: any, callback: any) {
        var length = text.length;
        var currentText = "";
        var i = 0;

        var typingInterval = setInterval(function () {
          currentText += text[i];
          typingDemo.textContent = currentText;

          i++;
          if (i === length) {
            clearInterval(typingInterval);
            setTimeout(callback, 2000);
          }
        }, 100);

        function startBlink() {
          typingDemo.style.borderRight = "none";
        }

        setTimeout(startBlink, (length - 1) * 100);
      }

      function updateText() {
        var currentText = typingDemo.textContent;
        var nextText = texts[index];

        typeText(nextText, function () {
          index = (index + 1) % texts.length;
          typingDemo.textContent = "";
          setTimeout(updateText, 1000);
        });
      }

      updateText();
    });
  }

  private initIntersectionObserver(): void {
    document.addEventListener("DOMContentLoaded", function () {
      var icons = document.querySelectorAll(".col-12");

      function handleIntersection(entries: any, observer: any) {
        entries.forEach(function (entry: any) {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      }

      var observer = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      });

      icons.forEach(function (icon: any) {
        observer.observe(icon);
      });
    });
  }
}
