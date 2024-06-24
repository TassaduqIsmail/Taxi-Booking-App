import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Ellipseee, Gellel, Red} from '../../assets/Images/SVGs/Continue';
import {ListExample} from '../Policy';

const Policytext = () => {
  return (
    <View>
      <Text style={styles.Heading}>Uppgifter som vi behandlar</Text>
      <Text style={styles.InnerPolicy}>
        Vi behandlar den information som vi behöver för att kunna ge dig den
        bästa servicen på vår transportmarknad. Kontaktuppgifter: saker som
        namn, telefonnummer och e-postadress. profilinformation: som din
        profilbild, sparade adresser, språk och kommunikationspreferenser.
        Geolokalisering: t.ex. varifrån du behöver skjuts eller platsen ,tiden,
        resans förlopp och slut- destination. samt t.ex. det debiterade beloppet
        och det använda betalkortet.Begränsade identifieringsuppgifter för
        enheten, t.ex. IP-adressen som Blink-appen installerats
      </Text>

      <Text style={styles.InnerPolicy2}>
        Vi ansluter dig med en förare. Vi samlar in och behandlar
        personuppgifter i syfte att ansluta passagerare med förare så att du kan
        hämtas upp och lämnas av. Snabbmeddelanden direkt i Blink-appen
        behandlas för att tillhandahålla service och kundsupport (inklusive att
        lösa tvister mellan förare och passagerare), för säkerhetsändamål och
        för att förbättra våra produkter och tjänster samt för analys.
      </Text>

      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Ellipseee />
        </View>
        <Text style={styles.InnerPolicy2}>
          <Text style={styles.InnerPolicy3}>Vårt uppdrag; </Text>
          Vi visar passagerarnas geolokaliseringsuppgifter och telefonnummer för
          taxichaufför när de kör för att möjliggöra upphämtning och avlämning
          samt göra rutten transparent. Dessa uppgifter samlas endast in när
          Blink-appen är aktiverad. Insamlingen av geolokaliseringsuppgifter
          upphör när du stänger Blink-appen. .
        </Text>
      </View>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Ellipseee />
        </View>
        <Text style={styles.InnerPolicy2}>
          <Text style={styles.InnerPolicy3}>Syftet; </Text>
          Vi använder geolokalieringsuppgifter för att se till att du anländer
          vid din destination och för att lösa kvalitetsproblem i samband med
          våra tjänster.
        </Text>
      </View>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Ellipseee />
        </View>
        <Text style={styles.InnerPolicy2}>
          <Text style={styles.InnerPolicy3}>Ambitionen; </Text>
          Att meddela passagerare om uppdateringar av Blink-appen . Vi samlar
          också in begränsade uppgifter från den enhet som du använder för att
          ansluta dig till våra internet-, apptjänster och för att hjälpa till
          att hålla ditt konto säkert genom autentiserings- och
          verifieringskontroller. Vi samlar in data om de rutter som våra
          passagerare tar för att analysera den geografiska täckningen.
        </Text>
      </View>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Ellipseee />
        </View>
        <Text style={styles.InnerPolicy2}>
          <Text style={styles.InnerPolicy3}>Betalningar; </Text>
          Vi erhåller betaluppgifter för att behandla passagerares betalningar.
        </Text>
      </View>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Ellipseee />
        </View>
        <Text style={styles.InnerPolicy2}>
          <Text style={styles.InnerPolicy3}>Status; </Text>
          Vi samlar in uppgifter om resestatus, tid och passageraromdömen från
          omdömen om föraren för att främja användarnas säkerhet, och se till
          att vi tillhandahåller en högkvalitativ och trevlig tjänst för alla.
          Uppgifter från och korrespondens med kundsupport samlas in för att ge
          feedback och lösa tvister och frågor om tjänstekvalitet.
        </Text>
      </View>

      <Text style={styles.InnerPolicy2}>
        <Text style={styles.InnerPolicy3}>Kommunikation: </Text>
        Ditt namn, telefonnummer och din e-postadress används för att
        kommunicera med dig, t.ex. för att informera dig om att din resa har
        slutförts, för att skicka resebekräftelser och kvitton till dig och för
        att informera dig om viktiga uppdateringar av tjänsten.
      </Text>
      <Text style={styles.Heading2}>Rättslig grund</Text>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Ellipseee />
        </View>
        <Text style={styles.InnerPolicy2}>
          Personuppgifter behandlas i allmänhet för att tillhandahålla de
          tjänster som avtalats med dig via Blink-appen. Detta innebär att vi
          ger dig den tjänst vi lovat, och för att uppfylla våra villkor
          behandlar vi dina personuppgifter för att uppfylla dess skyldigheter.
        </Text>
      </View>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Ellipseee />
        </View>
        <Text style={styles.InnerPolicy2}>
          Under andra omständigheter behandlar vi i allmänhet dina
          personuppgifter på grund av legitima intressen. Legitima intressen
          omfattar våra kommersiella intressen i att tillhandahålla en
          innovativ, personlig, säker och lönsam tjänst till våra passagerare
          och samarbetspartners, såvida inte dessa intressen åsidosätts av andra
          intressen. Våra legitima intressen omfattar också saker som att utreda
          och upptäcka bedrägliga betalningar och annan skadlig verksamhet,
          upprätthålla säkerheten i vårt nätverk och våra system och reagera på
          misstänkta eller faktiska brottsliga handlingar.
        </Text>
      </View>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Ellipseee />
        </View>
        <Text style={styles.InnerPolicy2}>
          Rättslig grund; det kan nödvändigt för att uppfylla en rättslig
          förpliktelse, dvs att behandla uppgifter när lagen kräver det, t.ex.
          om det finns en giltig rättslig begäran om att lämna ut
          personuppgifter till en tredje part, t.ex. en domstol eller en
          tillsynsmyndighet;
        </Text>
      </View>
      <Text style={styles.Heading2}>Mottagare</Text>
      <Text style={styles.InnerPolicy2}>
        Vi samarbetar endast med betrodda samarbetspartners och myndigheter. Vi
        delar endast uppgifter när det finns en god anledning att göra det. Vi
        begränsar delningen till endast det som krävs. Vi säljer inte dina
        personuppgifter.
      </Text>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Ellipseee />
        </View>
        <Text style={styles.InnerPolicy2}>
          Passagerarens personuppgifter lämnas endast ut till föraren när en
          resa bokas i Blink-appen, och i sådana fall ser föraren passagerarens
          namn och telefonnummer.
        </Text>
      </View>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Ellipseee />
        </View>
        <Text style={styles.InnerPolicy2}>
          Omdömen som passagerarna ger om kvaliteten på taxitjänsten är anonym.
          Ditt omdöme är privat mellan dig och Blink.
        </Text>
      </View>
      <Text style={styles.InnerPolicy2}>
        Du kan få tillgång till och uppdatera dina personuppgifter via
        Blink-appen. Du har rätt att be oss att rätta informationen som du anser
        vara felaktig. Du har också rätt att be oss komplettera information som
        du anser vara ofullständig.
      </Text>
      <Text style={styles.Heading2}>Lagring</Text>
      <Text style={styles.InnerPolicy2}>
        Bokningsuppgifter; Vi sparar information som upphämtningplats,
        avlämningsplats, upphämtningstid, namn, telefonnummer, speciella val
        samt pris när en bokning görs. I det fall resan betalas med kort sparas
        även information om betaltransaktionen samt bokföringsuppgifter. Denna
        information genereras varje gång en bokning görs och kan inte väljas
        bort. Informationen sparas i minst 7 år i enlighet med tex lagar och
        skattesystem. Informationen behandlas för att kunna tillhanda hålla
        tjänster du beställer samt för våra andra legitima affärsintressen som
        säkerhet, trygghet och förebyggande arbete mot bedrägeri.
      </Text>
      <Text style={styles.InnerPolicy2}>
        Observera att dina personuppgifter inte raderas när du avinstallerar.ri.
      </Text>
      <Text style={styles.Heading2}>Direkt marknadsföring</Text>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Ellipseee />
        </View>
        <Text style={styles.InnerPolicy2}>
          Vi kan skicka meddelanden med direkt marknadsföring till din
          e-postadress och/eller ditt telefonnummer när du har gett oss
          tillåtelse att göra det, eller om du har valt att delta (soft opt-in).
          Vi kan anpassa meddelanden med direkt marknadsföring med hjälp av
          information om hur du använder Bolts tjänster, t.ex. hur ofta du
          använder Blink-appen och dina transportpreferenser.
        </Text>
      </View>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Ellipseee />
        </View>
        <Text style={styles.InnerPolicy2}>
          Om du inte längre vill ta emot meddelanden med direkt marknadsföring
          kan du klicka på länken "Avsluta prenumeration" i sidfoten i ett av
          våra e-postmeddelanden eller välja att sluta delta i profilavsnittet i
          Blink-appen.
        </Text>
      </View>
    </View>
  );
};

const Termstext = () => {
  return (
    <View>
      <Text style={styles.InnerPolicy}>
        Blink sammanför transportör och passagerare och är därmed inte ett
        transportföretag utan endast en plattform för beställning av taxiresor.
      </Text>
      <Text style={styles.InnerPolicy2}>
        För att kunna använda Blink-appen behöver du acceptera villkoren nedan.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 1 Blink tillhandahåller ej själva transportörtjänsten utan endast
        information om tillgängliga resealternativ. Själva transporttjänsten
        utövas av föraren via eget eller annans företag.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 2 Uppkomna tvister av vad slag månde vara är mellan transportör och
        passagerare.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 3 Tillämplig betalmetod är endast fast pris vid bokningstillfället.
        Variationer kan förekomma beroende på tidpunkt och trafiksituation.
      </Text>
      <Text style={styles.InnerPolicy2}>
        Betalning görs vid bokning från ditt registrerade betal-eller
        kreditkort. Resan är bokad då beloppet når Blink. Blink vidarbefordrar
        beloppet till transportören. Efter resan skickas ett kvitto till din
        registerade e-post adress.
      </Text>

      <Text style={styles.InnerPolicy2}>
        Tvister/problem rörande in-app betalning anges till
        <Text style={styles.email}> blinktaxi.stockholm@gmail.com</Text>
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 4 En av föraren bekräftat uppdrag upprättar ett avtal mellan
        transportören och passageraren. Blink är inte part i detta avtal.
      </Text>
      <Text style={styles.InnerPolicy2}>
        Avbokning av avtalad resa anses gjord om du avstår, avbokar eller vägrar
        transporttjänsten. Sker detta efter en viss tidsperiod debiteras en
        avbokningsavgift.
      </Text>
      <Text style={styles.InnerPolicy2}>
        Är du ej på plats då bil anländer anses resan avbokad efter en viss
        tidsperiod. Ändras destinationen under resans gång anses det vara ny
        resa och måste då bokas.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 5 Eftersom Blink-appen är en informationstjänst (ett
        kommunikationsmedel) mellan passagerare och förare, kan vi inte
        garantera eller ta något ansvar för kvaliteten, tillgängligheten eller
        fel i transporttjänsterna.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 6 Konsumenters eventuella rätt till återbetalning gäller inte avseende
        beställningar via Blink-appen. Förfrågan om återbetalning för
        transporttjänster innebär inte att du frångår avtalet under vilket
        transporttjänsten beställdes.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 7 Blink-appen tillhandahålls i mån av tillgänglighet. Blink ansvarar
        eller garanterar inte att tillgången till Blink-appen kommer att vara
        oavbruten eller felfri. För det fall det upptäcks felaktigheter i
        mjukvaran kommer vi att arbeta för att få dem rättade så fort som
        möjligt.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 8 Blink, dess representanter, ledning och anställda är inte ansvariga
        för någon förlust eller skada som kan uppkomma till följd av
        användningen av Blink-appen.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 9 Blinks totala ekonomiska ansvar gentemot dig är begränsat. Du har
        enbart rätt att kräva skadestånd för skador som Blink medvetet har
        orsakat.
      </Text>
      <Text style={styles.InnerPolicy2}>
        Blink kommer inte att ansvara för handlingar, eller underlåtenhet att
        handla, som utförs av föraren och kommer inte att ansvara för eventuella
        skador som oaktsam förare orsakar passagerarna.
      </Text>
    </View>
  );
};

const Transporter = () => {
  return (
    <View>
      <Text style={styles.InnerPolicy}>
        § 1 Blink-appen är en informationstjänst (ett kommunikationsmedel)
        mellan passagerare och förare. Blink inte garantera eller ta något
        ansvar för kvalitet, tillgänglighet eller fel i transporttjänsterna.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 2 Blink-appen tillhandahålls i mån av tillgänglighet. Blink ansvarar
        eller garanterar inte att tillgången till Blink-appen kommer att vara
        oavbruten eller felfri. För det fall det upptäcks felaktigheter i
        mjukvaran kommer vi att få dem rättade så fort som möjligt.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 3 Blink, dess representanter, ledning och anställda är inte ansvariga
        för någon förlust eller skada som kan uppkomma till följd av
        användningen av Blink-appen.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 4 Transportör samtycker till att fullständigt hålla Blink, dess
        dotterbolag, representanter, anställda och ledning skadeslösa gentemot
        anspråk eller förluster, ansvar, skador, kostnader och utgifter av alla
        slag som det drabbas av till följd av din användning av Blink-appen och
        de resor du erhåller genom användningen av Blink-appen. Exempel anspråk
        gällande skada på egendom eller finansiell förlust, eller dito utebliven
        vinst tillika förlust av goodwill, rykte kontakter, avtal eller
        utebliven inkomst till följd av dataavbrott samt andra felaktigheter i
        Blink-appen.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 5 Transportören ska inneha erforderliga tillstånd och försäkringar
        avseende såväl person som godstransporter. Transportören har det fulla
        arbetsgivaransvaret för av honom anställd personal. Transportören ska
        vidare driva sin verksamhet i enlighet med lagar och förordningar. Bil
        ska vara ansluten till godkänd redovisningscentral.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 6 Ett oskadat och väl fungerande fordon godkänns oavsett årsmodell.
        ”Hel och ren” är ledstjärnan.
      </Text>

      <Text style={styles.InnerPolicy2}>
        § 7 Blink tillhandahåller plattform för vidarbefordran av köruppdrag.
        För tjänsten innehåller Blink -% av inkörda bruttobelopp. -% betalas ut
        till transportör en gång per veck.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 8 Blink kan omedelbart avsluta din användning av Blink-appen om du
        överträder dessa Allmänna Villkor, Vidare skäl för omedelbart avslut är
        upprepade klagomål, domar i brottmål, bedrägligt beteende gällande
        betalningar, indragen taxilegitimation, indraget taxitillstånd, bil som
        ej uppfyller kriterierna. Diskriminering av passagerare med anledning av
        deras kön,etnisk tillhörighet,religion,, funktionsnedsättning,sexuell
        läggning eller könsöverskridande identitet.
      </Text>
      <Text style={styles.InnerPolicy2}>
        Avbokning av avtalad resa anses gjord om du avstår, avbokar eller vägrar
        transporttjänsten. Sker detta efter en viss tidsperiod debiteras en
        avbokningsavgift.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 9 Transportören äger endast rätt att behandla personuppgifter i
        samband med tilldelat köruppdrag. All övrig vidarbefordran av uppgifter
        rörande person omfattas av tystnadsplikt.
      </Text>
      <Text style={styles.InnerPolicy2}>
        § 10 Alla immateriella rättigheter rörande Blink är densammes egendom
        och får ej användas i sammanhang som ej godkänts av Blink.
      </Text>
    </View>
  );
};

const Policyfor = () => {
  return (
    <View>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Gellel />
        </View>
        <Text style={styles.InnerPolicy2}>
          P-40, Subash Nagar, Banglore Subash Nagar, Banglore Subash Nagar,
          Banglore
        </Text>
      </View>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Red />
        </View>
        <Text style={styles.InnerPolicy2}>
          Airport AC Bus Stand, International Airport
        </Text>
      </View>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Red />
        </View>
        <Text style={styles.InnerPolicy2}>
          Banglore Subash Nagar Banglore Subash Nagar Airport AC Bus Stand,
          International Airport
        </Text>
      </View>
      <View style={styles.EllipseeeContainer}>
        <View style={styles.Elview}>
          <Red />
        </View>
        <Text style={styles.InnerPolicy2}>
          Airport AC Bus Stand, International Airport
        </Text>
      </View>
    </View>
  );
};

const Driveeeeeeeeeeeer = () => {
  return (
    <View>
      <Text style={styles.InnerPolicy}>
        Nedan villkor för att använda sig av BLINK-tjänsten behöver godkännas.
      </Text>
      <Text style={styles.InnerPolicy2}>
        Genom att fullfölja registreringen anses du ha förstått och godkänt
        villkoren i sin helhet.
      </Text>
      <Text style={styles.InnerPolicy2}>
        Genom att fullfölja registreringen anses du ha förstått och godkänt
        villkoren i sin helhet.
      </Text>
      <Text style={styles.Heading2}>IKRAFTTRÄDANDE AV AVTALET:</Text>
      <Text style={styles.InnerPolicy2}>
        1. Inför användningen av Blinktjänsterna måste du registrera dig genom
        att tillhandahålla sådan information som efterfrågas i
        registreringsprocessen, t.ex. på hemsidan. I samband med registreringen
        kommer vi be dig ladda upp nödvändig dokumentation som begärs av oss så
        som exempelvis. (i) kopior på giltigt körkort, taxiförarlegitimation,
        registreringar, intyg och annan dokumentation som krävs enligt svensk
        rätt vid tillhandahållandet av Transporttjänster; förarkod; (iii)
        registreringsbevis inklusive kopia på besiktningsprotokoll; utdrag ur
        belastningsregister; information som styrker tillgång till en mobil
        enhet som stödjer GPS; samt övrig information som efterfrågas. Vi kan
        också komma att skicka e-mail, SMS eller liknande till dig för att
        begära in kompletterande information eller dokumentation. Underlåtenhet
        att uppfylla något av dessa villkor kan leda till uppsägning av Avtalet
        och rätten att använda Blinktjänsterna. Efter en genomförd registrering
        av din ansökan kommer vi att ge dig åtkomst till ett personligt konto
        genom ett användarnamn och lösenord. Genom att trycka på ”Registrera
        dig” i slutet av registreringsansökan, garanterar du att:
      </Text>
      <Text style={styles.InnerPolicy2}>
        2. du har juridisk rätt att teckna avtal med oss för att använda
        Blinkplattformen för tillhandahållandet av Transporttjänsten;
      </Text>

      <Text style={styles.InnerPolicy2}>
        3. du noga har läst, helt förstått och uppfyller kraven i dessa Allmänna
        Villkor, inklusive samtliga skyldigheter som uppstår i enlighet med vad
        som anges häri eller annars följer av Avtalet;
      </Text>
      <Text style={styles.InnerPolicy2}>
        4. all information som du har försett oss med är riktig, korrekt och
        fullständig;
      </Text>
      <Text style={styles.InnerPolicy2}>
        5. ditt Blinkförarkonto alltid ska innehålla korrekt och uppdaterad
        information om din profil;
      </Text>
      <Text style={styles.InnerPolicy2}>
        6. du inte kommer ge någon annan person behörighet till ditt
        Blinkförarkonto, och att du inte heller kommer överföra eller överlåta
        kontot till någon annan;
      </Text>
      <Text style={styles.InnerPolicy2}>
        7. du inte ska använda Blinktjänsterna i obehörigt, olagligt eller
        olämpligt syfte;
      </Text>
      <Text style={styles.InnerPolicy2}>
        8. alltid efterleva samtliga svenska lagar och bestämmelser, inklusive
        (men inte begränsat till) lagar som reglerar transporttjänster för
        passagerare .
      </Text>
      <Text style={styles.InnerPolicy2}>
        9. Du är skyldig att lämna dina bankuppgifter vid registreringen. Om du
        är en juridisk person måste du ange bankuppgifterna för företaget. Vi
        överför avgifter från In-app Betalning till det bankkonto som du har
        angivit. Vi tar inte ansvar för felaktiga betalningsöverföringar som
        sker på grund av att du har angett felaktiga bankuppgifter.
      </Text>
      <Text style={styles.InnerPolicy2}>
        10. Registrering av kontot som juridisk person (d.v.s. ett företag). Du
        anses vara en juridisk person om mottagaren av avgifterna markeras som
        en juridisk person i betalningsuppgifterna (som finns tillgängliga i
        Blinkförarkontot). I sådant fall anses den indikerade juridiska personen
        vara leverantören av Transporttjänster och part till dessa Allmänna
        Villkor, Avtalet samt eventuella ytterligare avtal. Enbart den specifika
        fysiska personen som indikeras i registreringsprocessen kan faktiskt
        erbjuda Transporttjänsterna. Sådan fysisk person får använda Förarens
        konto enbart om han/hon har läst och samtycker till att vara bunden av
        dessa Allmänna Villkor och eventuell ytterligare dokumentation som är en
        del av Avtalet. DEN JURIDISKA PERSONEN I BETALNINGSUPPGIFTERNA OCH DEN
        FYSISKA PERSONEN SOM FAKTISKT ERBJUDER TRANSPORTTJÄNSTERNA GENOM
        BLINKKONTO SKA FÖRBLI SOLIDARISKT ANSVARIGA FÖR SAMTLIGA AV FÖRARENS
        ÖVERTRÄDELSER AV DE ALLMÄNNA VILLKOREN OCH AVTALET.
      </Text>
      <Text style={styles.InnerPolicy2}>
        11. Registrering av Blinkförarkonto som ett taxiåkeri. Genom ingående av
        Avtalet kan ett taxiåkeri på egen hand registrera konton åt sina
        anställda och/eller tjänsteleverantörer. I sådant fall måste taxiåkeriet
        säkerställa att dess anställda och/eller tjänsteleverantörer efterlever
        kraven i de Allmänna Villkoren, Avtalet och eventuella ytterligare avtal
        och samtycker till att agera i enlighet med och vara bunden av dessa
        villkor och skyldigheter. Taxiåkeriet och dess anställda och/eller
        tjänsteleverantörer ska förbli solidariskt ansvariga för samtliga
        överträdelser av sådan anställd och/eller tjänsteleverantör. Var
        chaufför som använder Blink-appen ska inkomma med sina uppgifter och
        ladda upp foto på Tfl och Körkort.
      </Text>
      <Text style={styles.Heading2}>
        RÄTTEN TILL ATT ANVÄNDA BLINK-APPEN OCH BLINKFÖRARKONTO
      </Text>
      <Text style={styles.InnerPolicy2}>
        12. Licens till att använda Blink-appen och Blinkförarkonto. Härmed
        beviljas du en licens att använda Blink-appen och Blinkförarkontot.
        Licensen ger dig inte rätt att upplåta, underlicensiera eller överföra
        några rättigheter till tredje part. Åkerier kan dock underlicensiera
        Blink-appen och Blinkförarkontot uteslutande till förare inom
        åkeriverksamheten.
      </Text>
      <Text style={styles.InnerPolicy2}>
        13. Vid användning av Blink-appen och/eller Blinkförarkontot är det inte
        tillåtet att:
      </Text>
      <Text style={styles.InnerPolicy2}>
        14. dekompilera, demontera, baklängeskonstruera eller på annat sätt
        försöka erhålla källkoden för Blink-appen, Blinkförarkontot eller annan
        av Blinks mjukvara;
      </Text>
      <Text style={styles.InnerPolicy2}>
        15. modifiera Blink-appen eller Blinkförarkontot på något sätt, eller
        att använda modifierade versioner av Blink-appen eller Blinkförarkontot;
      </Text>
      <Text style={styles.InnerPolicy2}>
        16. överföra filer som innehåller virus, skadade filer, eller andra
        program som kan komma att skada eller negativt påverka driften av
        Blinkplattformen;
      </Text>
      <Text style={styles.InnerPolicy2}>
        17. försöka få obehörig tillgång till Blink-appen, Blinkförarkonto eller
        några andra Blinktjänster.
      </Text>
      <Text style={styles.InnerPolicy2}>
        18. Licensen som ges häri återkallas automatiskt vid uppsägning av
        Avtalet. Efter uppsägning av Avtalet måste du omedelbart sluta använda
        Blink-appen och Blinkförarkontot, och vi har rätt att blockera samt ta
        bort Blinkförarkonto utan förvarning.
      </Text>
      <Text style={styles.InnerPolicy2}>
        19. Användning av Blink varumärke. Vi kan också komma att ge dig taggar,
        etiketter, klistermärken eller andra märken som hänvisar till Blinks
        varumärke eller annars indikerar att du är en användare av
        Blinkplattformen. Vi beviljar dig härmed en icke-exklusiv licens att
        använda sådana märken, och enbart i syfte att indikera att du erbjuder
        Transporttjänster via Blinkplattformen. Denna licens får inte
        underlicenseras eller överföras till tredje part. Efter uppsägning av
        Avtalet måste du omedelbart ta bort och kassera alla märken som hänvisar
        till Bolts varumärke.
      </Text>
      <Text style={styles.InnerPolicy2}>
        20. All copyright och alla varumärkesrättigheter, inklusive källkod,
        databaser, loggor och visuell design ägs av Blink och skyddas av
        copyright, varumärkeslagar och/eller lagar om affärshemligheter och
        internationella fördragsbestämmelser. Genom att använda Blinkplattformen
        eller någon annan Blinktjänst, förvärvar du ingen äganderätt till några
        immateriella rättigheter.
      </Text>
      <Text style={styles.Heading2}>
        TILLHANDAHÅLLANDE AV TRANSPORTTJÄNSTER
      </Text>
      <Text style={styles.InnerPolicy2}>
        21. Förarens skyldigheter. Härmed garanterar du att tillhandahålla
        Transporttjänster i enlighet med de Allmänna Villkoren, Avtalet samt
        gällande svenska lagar och bestämmelser. Vänligen notera att du är
        fullständigt ansvarig för samtliga överträdelser av lagar föreskrifter
        eller andra bestämmelser som kan uppkomma genom tillhandahållandet av
        Transporttjänster.
      </Text>
      <Text style={styles.InnerPolicy2}>
        22. Du måste inneha samtliga tillstånd och certifieringar, så som
        giltigt körkort, taxitrafiktillstånd och taxiförarlegitimation, godkänd
        taxameterutrustning, bilförsäkring, ansvarsförsäkring (om tillämpligt),
        registreringar, intyg och annan dokumentation som krävs enligt svensk
        rätt vid tillhandahållandet av Transporttjänster. Det är din skyldighet
        att säkerställa att ovan nämnd dokumentation i alla avseende är giltig
        och korrekt. Blink kan komma att begära att du uppvisar bevis samt
        inkommer med kopior alla nödvändiga tillstånd, registreringsbevis och
        intyg för granskning.
      </Text>
      <Text style={styles.InnerPolicy2}>
        23. Du måste tillhandahålla Transporttjänsterna på ett professionellt,
        fackmannamässigt och etiskt sätt, samt sträva efter att fullgöra
        Passagerarens beställning i enlighet med Passagerarens intressen. Bland
        annat, ska du: inte göra några otillåtna stopp; inte ha några andra
        passagerare i fordonet förutom Passageraren och passagerarna som
        medföljer Passageraren; och följa tillämpliga trafikbestämmelser, så som
        trafikförordning (1998:1276) senast ändrad genom lag (2017:1284) vilken
        innehåller ett krav på att mobiltelefon endast får användas under färd
        med ett fordon om detta inte inverkar menligt på framförandet av
        fordonet.
      </Text>
      <Text style={styles.InnerPolicy2}>
        24. Du behåller ensamrätten att avgöra när du vill tillhandahålla
        Transporttjänster. Du ska således acceptera, avböja eller ignorera
        Passagerares beställningar av Transporttjänster efter eget val.
      </Text>
      <Text style={styles.InnerPolicy2}>
        25. Kostnader du ådrar dig när du tillhandahåller Transporttjänster. Du
        är skyldig att tillhandahålla och upprätthålla all utrustning och alla
        medel som är nödvändiga för att utföra Transporttjänsterna på egen
        bekostnad, inklusive en bil, smartphone, etc. Du är också ansvarig för
        att betala alla kostnader som du ådrar dig när du utför
        Transporttjänsterna, inklusive men inte begränsat till, bensin,
        kostnader för mobildata, avgifter, amortering av fordonet, försäkring,
        aktuella företagsskatter och arbetsgivaravgifter, etc. Vänligen beakta
        att användningen av Blink-appen kan innebära att stora mängder data
        förbrukas från ditt mobilabonnemang. Du bör teckna ett mobilabonnemang
        med obegränsad eller väldigt stor mängd surf.
      </Text>
      <Text style={styles.InnerPolicy2}>
        26. Fast pris. Passagerare använder sig av ett resealternativ som
        innebär att Passageraren godkänner en fast taxa (s.k. fast pris). Fast
        pris kommuniceras via Blink-appen till Passageraren innan beställning av
        resan görs, och till dig när resan är accepterad eller i slutet av
        resan.
      </Text>
      <Text style={styles.InnerPolicy2}>
        27 Användningen av taxameterutrustningen. Härmed bekräftar du att du
        kommer att använda taxameterutrustningen enligt tillämpliga regler för
        tillhandahållandet av taxitrafik och redovisa Transporttjänsterna på ett
        korrekt sätt i taxameterutrustningen för att efterleva samtliga
        tillämpliga skatteregler samt andra föreskrifter såsom
        Transportstyrelsens föreskrifter om taxitrafik.
      </Text>
      <Text style={styles.InnerPolicy2}>
        28. Kvitton. Efter varje slutförd Transporttjänst kommer Blink
        framställa och vidarebefordra ett kvitto till Passageraren som bland
        annat innehåller följande information: transportföretagets namn,
        organisationsnummer och driftställe; Förarens för- och efternamn; ett
        foto på Föraren; (iv) förarkod, registreringsnumret för fordonet, datum,
        tidpunkt, start- och slutdestination, varaktighet; och sträcka, Taxan
        och Taxan som betalats för tillhandahållandet av Transporttjänsten.
        Kvittot för varje tillhandahållande av Transporttjänster finns
        tillgängligt för dig i Blinkförarkontot.
      </Text>
      <Text style={styles.InnerPolicy2}>
        29. Avboknings- och väntetidsavgift. Passagerare kan avboka en
        beställning av Transporttjänst som en Förare har accepterat via
        Blink-appen. Förare har rätt till Taxan för avbokade Transporttjänster
        (Avbokningsavgift) i det fall Passageraren avbokar en accepterad
        beställning för Transporttjänst efter en särskild tidsperiod som
        fastställts av Blink-appen.
      </Text>
      <Text style={styles.InnerPolicy2}>
        30. Dina skattskyldigheter. Härmed bekräftar du att du är skyldig att
        till fullo efterleva samtliga skattskyldigheter som du har enligt
        tillämpliga lagar vid tillhandahållandet av Transporttjänster, inklusive
        att betala inkomstskatt, sociala avgifter och annan tillämplig skatt;
        och att uppfylla samtliga skyldigheter avseende registrering av
        arbetstagare och skatt för beräkningar avseende redovisning och
        överföringar till tillämpliga statliga myndigheter som krävs enligt
        tillämplig lagstiftning. I det fall Skatteverket lämnar in en giltig
        förfrågan till oss för att erhålla information angående dina
        aktiviteter, kan vi komma att tillgängliggöra information om dina
        aktiviteter till Skatteverket i den omfattning som bestäms av gällande
        lag. Utöver detta är det din skyldighet att efterleva samtliga
        tillämpliga skatteregler som kan gälla i samband med tillhandahållandet
        av Transporttjänster. Härmed samtycker du till att ersätta Blink
        samtliga statliga avgifter, fordringar, utbetalningar, böter eller andra
        skattskyldigheter som Blink kommer att ådra sig i samband med de
        skyldigheter som uppstår genom tillämpliga skatteregler som inte har
        uppfyllts av dig (inklusive betalning av inkomstskatt och sociala
        avgifter).
      </Text>
      <Text style={styles.Heading2}>BLINKAVGIFTER</Text>
      <Text style={styles.InnerPolicy2}>
        31. För att kunna använda Blinktjänsterna måste du betala en avgift
        (s.k. Blinkavgiften). Blinkavgiften beräknas baserat på Taxan för varje
        enskild beställning av en Transporttjänst som du har genomfört.
        Blinkavgiftens belopp görs tillgänglig för dig genom e-mail,
        Blink-appen, Blinkförarkontot eller genom andra relevanta
        kommunikationsmedel. Vänligen beakta att metoden för beräkningen av
        Blinkavgiften kan ändras. Vi kommer att skicka en förvarning innan varje
        sådan ändring.
      </Text>
      <Text style={styles.Heading2}>IN-APP BETALNING</Text>
      <Text style={styles.InnerPolicy2}>
        32. Vi möjliggör för Passagerare att betala för Transporttjänsterna via
        kort, Apple Pay & Google Pay direkt i Blink-appen (s.k. In-app
        Betalning). Härmed ger du oss befogenhet att agera för din räkning
        uteslutande i syfte att inkassera Taxa eller andra avgifter som betalas
        av Passageraren via In-app Betalning. Alla Passagerarens
        betalningsskyldigheter vid In-app Betalning ska anses vara uppfyllda vid
        den tidpunkten då betalningen genomförts.
      </Text>
      <Text style={styles.InnerPolicy2}>
        33. Du har rätt att granska rapporter avseende In-app Betalningar i
        Blinkförarkontot eller i Blink-appen. Rapporterna kommer att visa
        beloppen som In-app Betalningar förmedlade den föregående veckan samt de
        reserverade beloppen för Blinkavgifter. Du måste meddela oss om
        eventuella förändrade omständigheter som kan påverka våra möjligheter
        att inkassera och fördela Taxa som betalats via In-app Betalning.
      </Text>
      <Text style={styles.InnerPolicy2}>
        33. Du har rätt att granska rapporter avseende In-app Betalningar i
        Blinkförarkontot eller i Blink-appen. Rapporterna kommer att visa
        beloppen som In-app Betalningar förmedlade den föregående veckan samt de
        reserverade beloppen för Blinkavgifter. Du måste meddela oss om
        eventuella förändrade omständigheter som kan påverka våra möjligheter
        att inkassera och fördela Taxa som betalats via In-app Betalning.
      </Text>
      <Text style={styles.InnerPolicy2}>
        34. Innan tillhandahållandet av Transporttjänster, måste du verifiera
        att tjänsten tillhandahålls till rätt Passagerare eller att Passageraren
        uttryckligen har bekräftat att han/hon tillåter att andra passagerare
        reser via Passagerarens konto. Om du misstar dig vid identifieringen av
        Passageraren, och In-app Betalningen debiterar en person som inte har
        tillhandahållits Transporttjänsten, eller godkänt Transporttjänsten för
        andra passagerare, kommer vi att återbetala personen för Taxan. I sådant
        fall har du inte rätt till ersättning för Taxan från oss. Vi har vidare
        rätt att debitera dig ett avtalsvite på upp till 10 EUR för varje
        felaktigt tillämpad In-app Betalning.
      </Text>
      <Text style={styles.InnerPolicy2}>
        35. Vänligen notera att vi kommer att kvitta all Taxa som betalas via
        In-app Betalning mot de belopp som du är skyldig oss (t.ex.
        Blinkavgifter och avtalsvite). Vi förbehåller oss även rätten att kvitta
        samtliga anspråk du gör gällande gentemot oss mot motstående fordringar
        som vi har mot dig.
      </Text>
      <Text style={styles.InnerPolicy2}>
        36. Om vi inte kan betala Taxan till dig på grund av att du inte har
        inkluderat dina bankuppgifter på ditt Blinkförarkonto, eller om
        bankuppgifterna som har angetts är felaktiga, kommer vi att reservera
        sådana betalningar i 180 dagar. Om du inte meddelar oss de korrekta
        bankuppgifterna inom 180 dagar från det datum då rätten att kräva sådan
        betalning fastställdes, kommer ditt anspråk på betalning av Taxa att
        förfalla.
      </Text>
      <Text style={styles.Heading2}>BETYGSSÄTTNING OCH AKTIVITET</Text>
      <Text style={styles.InnerPolicy2}>
        37. För att kunna garantera högkvalitativ service och tillhandahålla
        ytterligare goodwill till Passagerarna, bekräftar du härmed att
        Passagerarna får ge dig ett betyg och lämna feedback angående kvaliteten
        på de Transporttjänster som du har tillhandahållit. Ditt genomsnittliga
        betyg kommer att kopplas till ditt Blinkförarkonto och kommer finnas
        tillgängligt för Passagerare via Blink-appen. Om vi upptäcker att
        betyget eller kommentaren inte.
      </Text>
      <Text style={styles.Heading2}>MARKNADSFÖRING OCH KAMPANJER</Text>
      <Text style={styles.InnerPolicy2}>
        38. Marknadsöversikter. Vi kan komma att skicka marknadsöversikter till
        dig genom Blink-appen, Blinkförarkontot, SMS, e-mail eller genom andra
        medel, för att öka din medvetenhet om när Passagerarnas efterfrågan är
        som störst. Sådana marknadsöversikter utgör enbart rekommendationer och
        medför inga skyldigheter för dig. Eftersom marknadsöversikterna baseras
        på tidigare statistik, kan vi inte garantera att den faktiska
        marknadssituationen motsvarar uppskattningarna i marknadsöversikten.
      </Text>
      <Text style={styles.Heading2}>
        RELATIONEN MELLAN DIG, OSS OCH PASSAGERARNA
      </Text>
      <Text style={styles.InnerPolicy2}>
        39. Härmed bekräftar du och samtycker till att vi tillhandahåller en
        informationstjänst och inte en Transporttjänst. Genom att tillhandahålla
        Blinkplattformen och Blinktjänster agerar vi som en marknadsplats som
        kopplar ihop Passagerare med Förare. Du bekräftar att du tillhandahåller
        Transporttjänster baserat på av ett avtal med enskilda Passagerare samt
        att du tillhandahåller Transporttjänster antingen individuellt eller via
        ett företag som en näringsverksamhet.
      </Text>
      <Text style={styles.InnerPolicy2}>
        40. Du bekräftar härmed att inget anställningsavtal eller
        anställningsförhållande har eller kommer att föreligga mellan dig och
        oss. Du bekräftar också att detta avtal inte konstituerar ett
        bolagsförhållande eller ett joint venture. Du får inte agera som vår
        anställd, agent eller representant och inte heller ingå avtal å våra
        vägnar. Om du anses vara anställd hos oss, med stöd av tvingande lagar,
        samtycker du härmed till att avstå från att göra gällande anspråk mot
        oss som kan uppkomma som ett resultat av ett sådant
        anställningsförhållande.
      </Text>
      <Text style={styles.InnerPolicy2}>
        41. Du får inte överföra dina rättigheter och skyldigheter som följer
        från de Allmänna Villkoren eller Avtalet till någon tredje part.
      </Text>
      <Text style={styles.Heading2}>BEHANDLING AV PERSONUPPGIFTER</Text>
      <Text style={styles.InnerPolicy2}>
        42.Dina personuppgifter kommer att behandlas i enlighet med Integritets
        villkoren.
      </Text>
      <Text style={styles.Heading2}>ANSVAR</Text>
      <Text style={styles.InnerPolicy2}>
        43. Blinkplattformen tillhandahålls ”i befintligt skick” och ”såsom
        tillgänglig”. Vi garanterar inte att tillgången till Blinkplattformen
        kommer att vara oavbruten eller felfri. Eftersom användningen av
        Blinkplattformen för att beställa transporttjänster beror på
        Passagerarnas beteende, kan vi inte garantera att din användning av
        Blinkplattformen kommer att resultera i några förfrågningar om
        Transporttjänster.
      </Text>
      <Text style={styles.InnerPolicy2}>
        44. Varken vi, Blinks representanter, ledning eller anställda är, i den
        utsträckning som tillåts enligt gällande lag, ansvariga för någon
        förlust eller skada som kan uppkomma till följd av användningen av
        Bolttjänsterna, inklusive men inte begränsat till:
      </Text>
      <Text style={styles.InnerPolicy2}>
        45. direkt eller indirekt skada på egendom eller finansiell förlust;
      </Text>
      <Text style={styles.InnerPolicy2}>
        46. utebliven vinst eller förlust av förväntade besparingar;
      </Text>
      <Text style={styles.InnerPolicy2}>
        47. förlust av avtal, kontakter, goodwill, rykte och eventuell förlust
        som kan uppkomma till följd av avbrott i verksamheten;
      </Text>
      <Text style={styles.InnerPolicy2}>
        48. förlust av eller felaktighet i data; och
      </Text>
      <Text style={styles.InnerPolicy2}>
        50. Vårt totala ansvar för överträdelser av de Allmänna Villkoren eller
        Avtalet kommer att vara begränsat till 500 EUR. Du har enbart rätt att
        kräva skadestånd om vi medvetet har överträtt de Allmänna Villkoren
        eller Avtalet.
      </Text>
      <Text style={styles.InnerPolicy2}>
        51. Vi är inte ansvariga för Passagerarnas eller dess medpassagerares
        handlingar eller underlåtenhet att handla, och ansvarar inte för
        eventuell förlust eller skada som kan drabba dig eller ditt fordon till
        följd av Passagerarnas eller dess medpassagerares handlande eller
        underlåtenhet att handla.
      </Text>
      <Text style={styles.InnerPolicy2}>
        52. Du ska hållas fullt ansvarig för överträdelse av de Allmänna
        Villkoren, Avtalet eller andra tillämpliga lagar eller bestämmelser och
        ska upphöra med en sådan överträdelse omedelbart efter att detta har
        påtalats (exempelvis av oss eller av en myndighet). Du ska ersätta oss
        för eventuella direkta och/eller indirekta förlust och/eller skador,
        utebliven vinst, utgifter, straffavgifter, avtalsvite som kan uppkomma i
        samband med din överträdelse av de Allmänna Villkoren, Avtalet och
        tillämpliga lagar och bestämmelser. Om Passageraren framför krav mot oss
        i samband med ditt tillhandahållande av Transporttjänster, ska du
        ersätta oss för en sådan skada inom 7 (sju) dagar räknat från
        mottagandet av motsvarande begäran från oss. I det fall vi har rätt att
        framföra anspråk mot dig, ska du ersätta oss för eventuella
        sammanhängande juridiska kostnader.
      </Text>
      <Text style={styles.Heading2}>AVTALSLÄNGD OCH UPPSÄGNING</Text>
      <Text style={styles.InnerPolicy2}>
        53. Villkoren som anges i dessa Allmänna Villkor ska träda i kraft vid
        inlämningen av registreringsansökan. Avtalet och andra villkor ska träda
        i kraft när det specifika dokumentet eller meddelandet har gjorts
        tillgänglig för dig och du påbörjar eller fortsätter att tillhandahålla
        Transporttjänster genom Blinkplattformen.
      </Text>
      <Text style={styles.InnerPolicy2}>
        54. Du kan säga upp Avtalet när du som helst genom att meddela Blink
        minst 1 vecka förväg, varefter din rätt att använda Blinkplattformen och
        Blinktjänsterna upphör. Blink kan säga upp Avtalet av eget gottfinnande,
        när som helst oavsett anledning, genom att meddela dig minst 3 (tre)
        dagar i förväg.
      </Text>
      <Text style={styles.InnerPolicy2}>
        55. Blink har rätt att omedelbart säga upp Avtalet och blockera din
        tillgång till Blinkplattformen utan att ge någon förvarning i det fall
        du bryter mot de Allmänna Villkoren eller Avtalet, bryter mot
        tillämpliga lagar eller bestämmelser, talar nedsättande om Blink eller
        skadar Blinks varumärke, rykte eller verksamhet, vilket avgörs efter
        Blinks egna gottfinnande. I de ovannämnda fallen kan vi komma att, efter
        vårt eget gottfinnande, förbjuda dig från att registrera ett nytt
        Boltförarkonto.
      </Text>
      <Text style={styles.InnerPolicy2}>
        56. Vi kan också omedelbart blockera din åtkomst till Blinkplattformen
        och till Blinkförarkontot under tiden för utredningen, om vi misstänker
        överträdelse av Avtalet eller bedrägliga aktiviteter från din sida.
        Blockeringen av åtkomsten kommer att upphävas när utredningen avvisar
        sådana misstankar.
      </Text>
      <Text style={styles.InnerPolicy2}>
        57. Vårt mål är att erbjuda service av högsta kvalitet till våra
        Passagerare, därför övervakar vi Förarnas aktivitet på Blinkplattformen.
        Om du misslyckas med att uppfylla minimikraven för service, såsom
        minimibetyg och aktivitetspoäng, har vi rätt att omedelbart säga upp
        Avtalet utan förvarning.
      </Text>
      <Text style={styles.Heading2}>TILLÄGG</Text>
      <Text style={styles.InnerPolicy2}>
        58. Eventuella ändringar i Avtalet ska träda i kraft efter att de har
        gjorts tillgängliga till dig via e-mail, Blink-appen eller
        Blinkförarkontot, förutsatt att du fortsatt tillhandahåller
        Transporttjänsterna.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Heading: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  Heading2: {
    color: '#000',
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginTop: 10,
  },
  InnerPolicy: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'left',
  },
  InnerPolicy2: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'left',
    marginTop: 15,
  },
  InnerPolicy3: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 15,
    textAlign: 'left',
  },
  EllipseeeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    paddingRight: 25,
  },
  Elview: {
    marginTop: 25,
    marginRight: 20,
  },
  email: {
    color: '#0079BC',
  },
});

export {Policytext, Termstext, Policyfor, Transporter, Driveeeeeeeeeeeer};
export default Policytext;
