# PlaceNL Bot (Czech Edition)

Bot pro PlaceNL! Tento robot automaticky načítá příkazy každých pár minut, aby zabránil botům pracovat proti sobě.


## Pokyny pro instalaci

Než začnete, ujistěte se, že odpočet pro umístění pixelu vypršel! (Viz nevýhody bota)

1. Nainstalujte si rozšíření prohlížeče [Tampermonkey](https://www.tampermonkey.net/)
2. Klikněte na [tento odkaz](./tampermonkey/placenlbot.user.js?raw=1). Pokud vše půjde dobře, Tampermonkey by vám měl nabídnout instalaci uživatelského skriptu. Klikněte na **Instalovat**.
3. Otevřte nebo obnovte stránku **r/place**. Pokud vše proběhlo v pořádku, v pravém horním rohu obrazovky se zobrazí „Získávání přístupového tokenu...“. Robot je nyní aktivní a bude vás informovat o tom, co dělá, prostřednictvím těchto oznámení v pravé horní části obrazovky.



https://user-images.githubusercontent.com/35738060/161389444-fe58ebf5-9527-4c8c-94d0-1e17896ce835.mp4



## Nevýhody bota


Když bot umístí pixel, může se zdát, že stále můžete umístit pixel i když to bot za vás už udělal.(takže jste v 5minutovém odpočtu).
Bot totiž ještě nezohledňuje již probíhající odpočet, takže předpokládá, že když otevřete **r/place**, může okamžitě umístit pixel. V nejhorším případě se váš první pixel umístí až v dalším cyklu za 4 minuty a 59 sekund.

## Headless Bot

Headless bota můžete používat bez otevřeného browseru a s více účty naráz. K spuštění tohoto bota je potřeba [NodeJS](https://nodejs.org/en/).

Instalační skript pro windows: 

```powershell
powershell Invoke-WebRequest "https://raw.githubusercontent.com/PlaceCZ/Bot/master/installers/install.ps1" -OutFile installer.ps1 | powershell ./installer.ps1
```

Instalační skript pro linux: 

```bash
curl https://raw.githubusercontent.com/PlaceCZ/Bot/master/installers/linux.sh | sh
```


Potom bota zapněte pomocí `node headlessBot.js <token>`.

## Autologin

Náš bot podporuje i automatické získávání access tokenu v headless botovi. Nejdřve běžte na https://www.reddit.com/prefs/apps, kde si vytvoříte aplikaci.  
![Vytváření Aplikace](https://user-images.githubusercontent.com/35738060/161429743-20f9a57c-c25d-4e1e-b4ab-85b28d3d10ce.png)  
Po vytvoření aplikace si zkopírujte AppId a AppSecret  
![AppID a AppSecret](https://user-images.githubusercontent.com/35738060/161429891-6ca287f5-f6d2-47a8-a60b-bfb82fa221fc.png)  
Ve složce vašeho bota vytvořte soubor `logins.txt`, kde napište váš appId, appSecret, Uživatelské Jméno a Heslo v tomhle pořadí rozdělené mezerou  
V mém připadě by to bylo: `Umf1Fxi6uG_1_3rhAxFHvA gIjwgfmgF6ONjvqRvDw0ZfQv7ept-A Wavelink_ MojeHeslo`  
Potom spustťe bota ve stejné složce jak máte `logins.txt` pomocí komandu `node headlessBot.js autologin`. Bot si sám vezme token.  
PS: Hodnoty uvedené v guidu nejsou platné 🙂 

## Získání tokenu

### Pomoci Tampermonkey:  
Kliknete na [tento link](./tampermonkey/print_token.user.js?raw=1) a Tampermonkey vám měl nabídne instalaci uživatelského skriptu. Klikněte na **Instalovat**. Nyni se vratte na `r/place` a znovu stranku nactete. Po chvilce by se vam mel zobrazit alert s vasim TOKENem, tento si zkopirujte a nekam ulozte.  
![token_alert](https://user-images.githubusercontent.com/539452/161394556-09c14efe-9f1d-4511-92bc-682100f34043.jpg)

### Pomoci dev-tools v prohlizeci:  
V prohlížeči otevřete nástroje pro vývojáře, přepnete na zalozku síť,  reloadnout r/place, a v požadavku na `/r/place` v odpovedi najít `"accessToken":<token>`, token zkopírovat a dát jako parametr do headless bota.
  
https://user-images.githubusercontent.com/35738060/161390213-d7f8354c-a97d-4a0f-9442-f33ba84941ba.mp4

Video credit - fuho#7423
Linux Install Script Credit - Madeline#6969
