function toggleMode(){
   const html = document.documentElement // acessamos nossa tag html a partir do documentElement
   
   html.classList.toggle('light')

   const img = document.querySelector(".profile img")

   if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/profile2.png')
    img.setAttribute('alt', "imagem de fundo branco")
   } else {
    img.setAttribute('src', './assets/profile.png')
    img.setAttribute('alt', "imagem de fundo preto")
   }

}