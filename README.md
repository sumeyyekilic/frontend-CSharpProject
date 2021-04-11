##  EKOSİSTEM

  
:honey_pot:[Angular](https://angular.io/)
   
:honey_pot:[AngularCLI](https://cli.angular.io/)
  
:honey_pot:[TypeScript](https://www.typescriptlang.org/)
  
:honey_pot:[NODEJS](https://nodejs.org/en/)
  
:honey_pot:[Bootstrap](https://getbootstrap.com/docs/)

----
### **Angular.io**   
 :pushpin: https://angular.io/cli  ;
 
 - angulardaki bileşenleri hızlıca sistemimize entegre edebilmemizi, 
 -  uygulamalarımızı yayına alabilmemizi,  
 -  angular uygulamlarını gerçek yayın ortamına (production) almak için angular ekibi tarafından geliştirilen  bir  pakettir.
 -   npm install -g @angular/cli 

		-  :pushpin:**`npm`** paket yüklemek için bu komutu kkullanırız.
	
		- :pushpin: **`-g`** demek global.

 - **npm** paketleri  local veya global kurulur.  global demek tüm node 
   sistemi angular clı'yı tanısın. tüm işletim sistemimde. bu yuzden
   global yaptım.
   
 - **northwind** : 
[Backend ](https://github.com/sumeyyekilic/frontend-CSharpProject) projemin ismi , bir eticaret satış sisteminde olabilecek temel verileri içeren ve bir etic sisteminde olabilecek operasyonları yazığımız bir projeydi.    
 - bu yuzden fronted projemi angular ile oluşturuklen; 
	
	-:pushpin: **`ng new northwind`** 
 
ile basit bir şekilde angular bize  yapıyı sunar.

 - angular ile proj geliştirriken temeli javascript'dir. Js de de tip güvenliği
    zaayıftır.  Tip güvenliği için yetenekleri zayıftır. Bu yuzden
    angular proj lerini typescript  (microsotu geliştirdiği ve arka tarafta
    yine js e dönüşen bir üst seviye dil )  ile yazıyoruz.

 - angular 'da **rooting** denilen bir olay  nedir ?  sayfalar arası
    gezintiyi anlatır. Terminal kurulumunda buna yes diyoruz.
 - css default olarak gelir birşey seçilmezse.
 - bu aşamalardan sonra angular projem için ilgili klasörün içinde oluşmaya başlıyor. angular ile ilgili dosyalar içinde mevcut. 


   
:gem: **`code .`**      ilgili klasoru **vsCode** ile açar

:gem:  **`ng serve`**    yayınsdaki uygulamayı açabilmemizi sağlar.

:pushpin:  **`ng serve --open`**   bir taarayıcıda açar. bizim kurduğumuz ablon sonucu ortaya çıkan görütüyü açar. web uygulamamzın temeli kuruldu ve angular bilgileirmiz ile harikalar yaratabiliriz :)

web uyg:  github.com gibi tarayıcıdan girdiğim bi uygulamadır.
### Angular'  da

 - Klasik web geliştirme ortamlarında ;  php,  asp.net, django gibi  web geliştirme yaptığımız noktada herşey bizim için sayfadır. 
Ancak angular gibi react gibi uygulamalar **SPA**(single page app) tek sayfalık uygulamalardır.  
	- Tek sayfadan oluşuyorsa nasıl  hakkımda sayfasına gittiğimizde sadece o sayfaya gidebiliyoruz ??
		- SPA mantığında rootin denen olay var ve bunu component denen  bir mantık ile yapıyoruz.  bir angular uygulamasında üstte navigation alanı componenttir. arama alanı componenttir. sayfa mantığı  yerine component olayı ile sağlanır.
	-  yetkiye göre farklı comp gösterimi sağlanır.
	- istediğimiz zaman istediğimiz compoeneti çıkartıp yerine başka bi componenti koyarak  aslıdna  klasik web uyg daki sayfalama mantığını sağlamış oluyoruz.
	-  geliştirme ortamı bir geliştirrici mantığı olmamalıdır. Hangisini seçersen hangisi hangisinden avantajlı  diye yol izlemek çok yanlış.
	- eğer iyi bir gelitşticiyseniz python ile c # ile web geliştirme kararına gitmenize gerek yok. Bunlar bizim için sadece  syntax dan ibaret olmalı. 
ör: c# ile web geliştiridğim stajım ile mezun olduğumda django ile web geliştirmeyi öğrendiğimde hızlıca diğerini öğrenmek kolay olmasada adapte olmuştum.

- anguların arkasında google var -- reactın facebook var ve ikisi de çok başarılıdır.

- kurumsal firmalalr teknoloji seçimine karar verirken bu teknolojinin arkasında kim var diye bakarlar. kurumsalda angular ve react türkiyede yaygındır.
- **Angularda** herşey tek sayfadan oluşur.  

## :honey_pot:***Projede Dosya Yapısı :***

  
- :heavy_check_mark: **node_modules ::** angular projemde kullandığım  node paketlerini içeren klasör.

	 - ör: jquery kullanacaksak veya bootstrap için onun tüm kodlarının burada olması gerekir. burda durur. bu paketler çok fazladır. 
eğer projemi indirmek isterseniz :
**Gereklilikler için ;** 
	- :pushpin:   npm install 


  
- :heavy_check_mark: **package.json :** burada iki temel node görürüsünüz.. dependency ve devDependency.
bu iki ayrım bizim geliştirme yaparken kullandığımız paketlersdir. biz bunu yayına aldığımızda , sumeyyekilic.github.o gibi kullanıcı etkieleşim geçtiğinde orada lazım olan paketler dependency de bulunur. yani proje bağımlılıkları. ör: bootstrap sayfayı css anlamında güzelleştirir kullanıcı güzel bir sayfa görüyormu? Bunu dependency'ye ekleriz. 
devDep  ise bana lazım olan şeylerdir.. (geliştiriciye lazım olan paketler buraya ayrılır). neden ayrılır ? yarın biz bunu prod a yayına aldığımızda devdependency yüklenmesin sadece dependency yüklensin ve uyg boyutu küçük olsu diye kullanılan tekniktir.

- npm install işte package.json 'a bakar ve bunları sizin bilgisayaraınıza kurar.

-   :heavy_check_mark:**src**  projemin kaynak kodlarını içeren klasör.
- :heavy_check_mark: **src-app :** uygulama kodlarım burada.-
- :heavy_check_mark:**src-  index.html :** bizim angular uygulamamız SPA'dı. tek sayfa uygulamamız var ve oda buydu. geliştirme yaprken buraya heemen hemen hiç dokunmicaz.


  
- :heavy_check_mark:`"<app-root>"`  html de olan bişey değil. coponentler  knusu burada başlıyor. yani angularda böyle componentler geliştiricez.



-   :heavy_check_mark:**src-    app-**  içine    **component** klasörü oluşturdumm.

-  :heavy_check_mark: **component** klasörü içine uygulamalmamın componentlerini koyucam.

-   :heavy_check_mark: **`.spec`** uzantılı dosya unit testtir.
-  :heavy_check_mark:  **`.ts`** uzantılı bizim componenttir.
angular da nesne yönelimli programlama kendini belli ederr. mesela çeşitli patternler, injection gibi kendini belli eder. 

### app.component.html ve  app.component.ts  kardeşler
- HTML VE TS , heryere beraber gider.   
	- html olayın görüntüsü
	- ts datayı ynnettiğim yer.
	- html kenini yapılandırırken bu .ts den yararlanır. 
	
	- app.component.html içerisinde oluşturulan herşey silindi. ve trayıcda bomboş bir sayfa ile karşılşırız.

Angular; dom manipülasyondenen olayı yapar.  html dümdüz sayfada görünen şeyler ile ilgilenir.

- backendi yazmamın sebebi datayı yönetmek.
Angular ile ben bir apye bağlanıp ordaki datatları getirebilyorum  gösterebiliyorum ve dtaları alab,l,yorum.

- Angularda herşey class'dır.
- nesne güdümlü yapıya sahip.
- kısaca vomponent  htmlin datasını yönettiği yer.
- madem herşey class bunları ayırt etmemiz gerekiyor.
-  {} demek obje.  obje içerisinde 

- html taglerine **selector** denir.
- styleUrls css 'leri koyduğumuz yerdir.

- component declerasyonun kullanabilmek için şuşkeilde;
`import { Component } from  '@angular/core';`   import etmemiz gerekir.  Bu c# daki using gibi :)


- type scipt de  veri türü   : 

	    title:string = 'northwind';


- Anguları güzelleştirmek için css yerine  bootstrap kullancacağım.
- *ngFor  : directive ilgli html elementini manüp etmeme yarar

- let keyword 'ü bizim güvenli tiplerle çalışabilmemizi sağlar .. (js dünyası egma6)

- **built-in**  : kendi içinde olan demek. yani anguların içinde kendi içinde hali hazır  gelen .demek. kendi directive lerimiz olucak.
- bunu için **directive** kasörü oluşturdum.
- 
- backendimizd basit bir etic projesi yaptık.
- frontend de ise klasik etic sitelerinde olan dizilimi gerçekleştiriyor olacağım.
	- 1 navigation
	- 2 kategoriler
	- 3 diğer sayfaların yer alması.
	- yani tolamda 3 componentim oucak


1. compoenet nasıl oluşturdum : 
	**1.1 component**  kalsörü -->  Open i Integratedterminal --   
	**product componenti :**
	- :pushpin:  **`ng g component product`**
	
	g:generate (oluştur),, yukardaki komut ile ilgili bir komponentte olan tüm klasörleri ekler.
	

    enter code here
	**1.2.component**
	- :pushpin:  **`ng g component category`**


	**1.3.component**
	- :pushpin:   **`ng g component navi`**     -----> menu kısmı

- **app.module.ts**   :  :pushpin:   **module**  birbiri ile ilişkili componentleri directive leri  bieleşenleri topladığımız yer. biir uyg da iki tane module olabilir. etic uygulamasında etic kısmı ve  admin paneli  olarak. 

- modulde componentleri görebilirsiniz.

Angular'da keşfettiğim kadarrıyla aşırı hiyerarşik bir yapıya sahip    :ok_hand:

- benim eklediğim komponentleri angular gidip app.module.ts 'e eklemiş   :heartpulse: yani benim birazdan bu komponentleri kullanabilmemi sağlayacak yapı aslında burası. 
bir moduluın bir comp kullanabilmesi için  modulun declaration'da o moduluın veya componentin eklii olması gerekir. tıpkı benim projemde yaptığı gibi :

@NgModule({    
declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent
    ],

- :fist:artık börek yapabilmem lazım işin mutfağında 

- ağaç dizilimi root componenti ile başlar.
angular cli componenet ne verdiysen önüne tag'de app verior.  **app-navi ,
app-category, app-product gibi.** bunların 3'ü app'in altında demek, aynı hiyerarşiye sahip.

- **https://getbootstrap.com/**  :  componentts bölümünde bize güzel görünün ortamlar sunuyıo. html i güzelleştirmek için dünyada full stack deeveloperlar bu tip frameworklerle css ortamını yapılandırırlar.  
- **bootstrap css'leri için :**
	- npm install bootstrap,
- Angular.js : projemiz ile ilgili konfigurasyon yeridir. backend deki app.js startup gibi.
- - "**styles": [
"./node_modules/bootstrap/dist/css/bootstrap.min.css" ,      ..]**        --->  :sunny: bu hareket ile komponentlerim css class larını görebilecek.
- yenibir paket eklediğimizde programı durdurup yeniden "ng serve --open"  ile yayına alınmalı.

 
 -   :zap: extensions tavsiyesi
    	- bracket pair colorizer
    	- Prettier - Code formatter



# Northwind

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
