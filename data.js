// Bu dosya PDF içeriklerindeki ham metinleri barındırır.
// index.html içerisindeki script bu metinleri işleyerek sorulara dönüştürecektir.

// --- DINLER 1 (HRİSTİYANLIK) ---
// Format: Soru metni, şıklar ve hemen altında "Cevap: X" formatı mevcuttur.
const rawDinler1 = `
1. Yahudiliğin aksine Hristiyanlık'ta yer alan ve konsillerde tespit edilen inanç ilkelerine ne ad verilir?
A) Dogma
B) Kredo
C) Sakrament
D) Apokrif
E) Kanonik
Cevap: B

2. Özellikle ilk dört konsilde hangi konularda alınan kararlar Hristiyan inancının temelini oluşturmuştur?
A) Vaftiz ve günah çıkarma
B) Teslis ve İsa Mesih'in ilahi ve insani tabiatı
C) Evharist ve rahip takdisi
D) Noel ve Paskalya kutlamaları
E) Kilise hiyerarşisi ve papalık otoritesi
Cevap: B

3. Konsillerde alınan kararlara karşı görüş belirten kişi ve gruplara ne yapılmıştır?
A) Vaftiz edilmişlerdir
B) Aforoz edilmişlerdir
C) Piskopos ilan edilmişlerdir
D) Havari kabul edilmişlerdir
E) Aziz ilan edilmişlerdir
Cevap: B

4. Teslis inancına göre tek Tanrı kaç kişilikten oluşmaktadır?
A) Bir
B) İki
C) Üç
D) Dört
E) Beş
Cevap: C

5. Teslis inancında 'Baba'nın rolü aşağıdakilerden hangisidir?
A) İnsanlığı günahtan kurtarmak
B) Kainatı yaratmak
C) İlahi sevgiyi insanın kalbine ulaştırmak
D) Çarmıhta kendini feda etmek
E) Kiliseyi yönetmek
Cevap: B

6. Teslis inancında 'Oğul' (İsa) hangi amaçla bedenleşmiştir?
A) Kainatı yaratmak için
B) Kiliseyi kurmak için
C) Günahın esaretinden insanlığı kurtarmak için
D) Havarileri eğitmek için
E) Yahudilere vaaz vermek için
Cevap: C

7. Teslis inancında 'Kutsal Ruh'un işlevi nedir?
A) Kainatı yaratmak
B) Çarmıhta ölmek
C) İlahi sevgiyi insanın kalbine ulaştırmak
D) Günahları affetmek
E) Konsilleri yönetmek
Cevap: C

8. 'Üçlükte birlik' doktrini İncil'de hangi kitapta yer almaktadır?
A) Yuhanna ve Markos
B) Luka ve Vahiy
C) Matta ve Pavlus'un Korintlilere 2. mektubu
D) Elçilerin İşleri ve Yakub'un Mektubu
E) Romalılara Mektup ve İbranilere Mektup
Cevap: C

9. Matta 28:19'da İsa, havarilerine hangi adına vaftiz etmelerini söylemiştir?
A) Sadece Tanrı adına
B) İsrail adına
C) Baba, Oğul ve Kutsal Ruh adına
D) Musa adına
E) İbrahim adına
Cevap: C

10. Teslis doktrini hangi konsillerde kabul edilerek Katolik kilisesinin dogması haline gelmiştir?
A) 431 Efes ve 451 Kadıköy
B) 325 İznik ve 381 İstanbul
C) 787 İznik ve 869 İstanbul
D) 1054 Roma ve 1215 Lateran
E) 1545 Trento ve 1869 Vatikan
Cevap: B

11. Teslis doktrininde Tanrı kaç tabiata/cevhere sahiptir?
A) Üç şahısta üç tabiat
B) Bir şahısta üç tabiat
C) Üç şahısta tek tabiat
D) İki şahısta iki tabiat
E) Dört şahısta tek tabiat
Cevap: C

12. Teslis doktrinine itiraz eden en önemli tarihi kişi kimdir?
A) Pavlus
B) Petrus
C) Arius
D) Luther
E) Konstantin
Cevap: C

13. Teslis'in ilk ve asıl unsuru hangisidir?
A) Oğul
B) Kutsal Ruh
C) Meryem
D) Baba
E) Kilise
Cevap: D

14. İsa'nın bedeni ve ruhu hakkında aşağıdaki ifadelerden hangisi doğrudur?
A) Bedeni ve ruhu tamamen insandır
B) Bedeni ve ruhu tamamen tanrıdır
C) Bedeni insan, ruhu tanrıdır
D) Bedeni tanrı, ruhu insandır
E) Ne bedeni ne ruhu vardır
Cevap: C

15. Kutsal Ruh genellikle hangi sembolle nitelendirilmiştir?
A) Aslan
B) Kuzu
C) Beyaz güvercin
D) Balık
E) Наç
Cevap: C

16. Tanrı Baba'nın bütün işlerini hangi aracıyla yaptığına inanılır?
A) Oğul
B) Melekler
C) Havariler
D) Kutsal Ruh
E) Peygamberler
Cevap: D

17. İnkarnasyon/Hulul kavramı ne anlama gelmektedir?
A) Ölümden dirilme
B) Göğe yükselme
C) Bedenleşme
D) Vaftiz olma
E) Günah çıkarma
Cevap: C

18. Hristiyanlıkta İsa nasıl kabul edilmektedir?
A) Sadece uyarıcı bir peygamber olarak
B) Tanrının oğlu olarak
C) Sıradan bir insan olarak
D) Bir melek olarak
E) Sadece bir öğretmen olarak
Cevap: B

19. 325 İznik Konsili'nde İsa hakkında ne kabul edilmiştir?
A) İsa'nın yaratılmış bir varlık olduğu
B) İsa ve Tanrının aynı özden olduğu
C) İsa'nın sadece insan olduğu
D) İsa'nın bir melek olduğu
E) İsa'nın peygamber olduğu
Cevap: B

20. İznik Konsili'nde farklı düşünenler nasıl ilan edilmiştir?
A) Aziz
B) Havari
C) Heretik
D) Piskopos
E) Patrik
Cevap: C

21. Arius, İznik Konsili'nde İsa hakkında neyi savunmuştur?
A) İsa'nın Tanrı ile aynı özden olduğunu
B) İsa'nın yaratılmış bir varlık olduğunu
C) İsa'nın hiç yaşamadığını
D) İsa'nın Kutsal Ruh olduğunu
E) İsa'nın Baba olduğunu
Cevap: B

22. Nestorius hangi şehirde yetişmiş ve hangi makama gelmiştir?
A) İskenderiye'de yetişmiş, Roma Patriği olmuştur
B) Kudüs'te yetişmiş, Papa olmuştur
C) Antakya'da yetişmiş, İstanbul Patriği olmuştur
D) Roma'da yetişmiş, İskenderiye Patriği olmuştur
E) Efes'te yetişmiş, Antakya Patriği olmuştur
Cevap: C

23. Nesturilerin İsa hakkındaki görüşü nedir?
A) İsa sadece tanrıdır (tek tabiatlı)
B) İsa hem tanrı hem insandır (çift tabiatlı/diofizit)
C) İsa sadece insandır
D) İsa bir melektir
E) İsa sadece bir peygamberdir
Cevap: B

24. Nesturilere göre İsa'ya Tanrı kaç yaşında hulul etmiştir?
A) Doğduğunda
B) 12 yaşında
C) 30 yaşında
D) 33 yaşında
E) Vaftiz edildiğinde (40 yaşında)
Cevap: C

25. 431 yılında toplanan Efes Konsili'nde Nesturilerin görüşleri nasıl ilan edilmiştir?
A) Ortodoks
B) Kanonik
C) Heretik
D) Apokrif
E) Dogmatik
Cevap: C

26. Efes Konsili'nde Meryem nasıl kabul edilmiştir?
A) Christotokos (Mesih'in annesi)
B) Teotokos (Tanrının annesi)
C) Antropotokos (İnsanın annesi)
D) Hagia (Kutsal)
E) Regina (Kraliçe)
Cevap: B

27. Teotokos doktrinin oluşumunda hangi pagan inançlarının etkisi görülmektedir?
A) Zeus ve Hera kültü
B) Apollo ve Dionysos kültü
C) İsis tanrıçası ve Artemis gibi anatanrıça inançları
D) Mars ve Venüs kültü
E) Osiris ve Horus kültü
Cevap: C

28. İsis tanrıçasına tapımın yaygın olduğu coğrafyada hangi kilise bulunmaktadır?
A) Roma Kilisesi
B) Antakya Kilisesi
C) İskenderiye Kilisesi
D) Kudüs Kilisesi
E) İstanbul Kilisesi
Cevap: C

29. Artemis tapınağının bulunduğu ve Teotokos konsilinin toplandığı şehir hangisidir?
A) Roma
B) İstanbul
C) Efes
D) Antakya
E) İskenderiye
Cevap: C

30. Kefaret doktrinine göre İsa Mesih ne yapmıştır?
A) Sadece vaaz vermiştir
B) Çarmıhta tüm insanların günahlarına kefaret olarak kanını akıtmıştır
C) Sadece Yahudileri kurtarmıştır
D) Şeriatı getirmiştir
E) Mabedi inşa etmiştir
Cevap: B

31. Kefaret doktrinine göre İsa, Tanrı ile insanoğlu arasında neyi düzeltmiştir?
A) Şeriatı
B) Mabedi
C) Adem'in günahı sonucu meydana gelen kopmayı
D) Yahudi geleneklerini
E) Pagan ritüellerini
Cevap: C

32. Levililerde (16:21-22) bahsedilen ve tüm İsrailoğullarının günahlarının yüklendiği hayvan hangisidir?
A) Kuzu
B) Boğa
C) Keçi
D) Güvercin
E) Κος
Cevap: C

33. Yahudilerin Yom Kippur gününde günah keçisine ne yaptıkları söylenmektedir?
A) Kurban ettiler
B) Uçurumdan yuvarladılar
C) Çöle saldılar
D) Yaktılar
E) Suya attılar
Cevap: B

34. Yom Kippur'un Türkçe karşılığı nedir?
A) Fısıh Bayramı
B) Çardak Bayramı
C) Kefaret Günü
D) Haftalık Bayram
E) Purim
Cevap: C

35. Eski Yunan kültüründe kötü olaylardan korunmak için günah keçisi olarak kim seçiliyordu?
A) Hayvanlar
B) İnsanlar
C) Heykeller
D) Ağaçlar
E) Kölelere ait eşyalar
Cevap: B

36. Roma Katolik Kilisesi ve Doğu Ortodoks Kilisesi kaç sakrament kabul etmektedir?
A) 2
B) 5
C) 7
D) 10
E) 12
Cevap: C

37. Protestan Kilisesi kaç sakramenti kabul etmektedir?
A) 1
B) 2
C) 3
D) 5
E) 7
Cevap: B

38. 'Vaftiz' kelimesi Yunanca'da ne anlama gelmektedir?
A) Kutsama
B) Suya batırmak, yıkamak
C) Dua etmek
D) Günah çıkarmak
E) Takdis etmek
Cevap: B

39. Vaftiz sakramenti Hristiyanlıkta neyi sembolize eder?
A) Evlilik
B) Ölüm
C) Hristiyanlığa giriş ve günahtan temizlenme
D) Rahiplik
E) Hastalıktan şifa
Cevap: C

40. İsa, kim tarafından ve nerede vaftiz edilmiştir?
A) Petrus tarafından Celile Gölü'nde
B) Yahya Peygamber tarafından Ürdün Nehri'nde
C) Pavlus tarafından Akdeniz'de
D) Musa tarafından Kızıldeniz'de
E) Yuhanna tarafından Kudüs'te
Cevap: B

41. Konfirmasyon sakramenti ne anlama gelmektedir?
A) Günah çıkarma
B) İman teyidi ve imanın güçlendirilmesi
C) Evlilik
D) Hasta yağlama
E) Rahip takdisi
Cevap: B

42. Konfirmasyon ayininde rahip veya piskopos ne yapar?
A) Su döker
B) Ekmek ve şarap sunar
C) Takdis edilmiş yağı sürer
D) Dua okur
E) Günah dinler
Cevap: C

43. Bebekken vaftiz edilen kişi ne zaman konfirmasyonla cemaate katılmış olur?
A) Doğduğunda
B) 7 yaşında
C) Erginleşmeye başladığında
D) Evlendiğinde
E) 40 yaşında
Cevap: C

44. Hristiyanlıkta günah sadece kişisel değil aynı zamanda nasıl bir davranış olarak kabul edilir?
A) Bireysel
B) Toplumsal
C) Doğal
D) Kaçınılmaz
E) Geçici
Cevap: B

45. İsa, havarilerine günahları bağışlama yetkisini hangi İncil pasajında vermiştir?
A) Matta 5:1-12
B) Markos 1:1-10
C) Yuhanna 20:22-23
D) Luka 15:1-10
E) Vahiy 1:1-5
Cevap: C

46. Lateran Konsili (1215) şahsi tövbenin en az ne sıklıkta yapılması gerektiğine karar vermiştir?
A) Her gün
B) Her hafta
C) Her ay
D) Yılda hiç olmazsa bir defa
E) Ömürde bir kez
Cevap: D

47. Günah çıkarma sakramentini hangi mezhep kesinlikle kabul etmez?
A) Katolikler
B) Ortodokslar
C) Protestanlar
D) Koptlar
E) Süryaniler
Cevap: C

48. Yunanca 'eucharista' kelimesi ne anlama gelmektedir?
A) Vaftiz
B) Şükran/teşekkür etmek
C) Günah çıkarmak
D) Dua etmek
E) Oruç tutmak
Cevap: B

49. Evharist ayini neyi anma ve tekrarlama ayinidir?
A) İsa'nın doğumunu
B) İsa'nın vaftizini
C) İsa'nın ölmeden önce talebeleriyle paylaştığı son akşam yemeğini
D) İsa'nın dirilişini
E) İsa'nın göğe yükselişini
Cevap: C

50. Son akşam yemeğinde İsa, ekmeği ve şarabı ne olarak vasıflandırmıştır?
A) Tanrının sözü ve kitabı
B) Kendi eti ve kanı
C) Cennetin yiyeceği ve içeceği
D) Günahın ve tövbenin sembolü
E) Barış ve kurtuluş
Cevap: B

51. Evharist ayininde ekmek ve şarabın halka sunulmasına ne denir?
A) Vaftiz
B) Konfirmasyon
C) Komünyon
D) Endüljans
E) Aforoz
Cevap: C

52. Evharist sakramenti hangi gün icra edilir?
A) Cumartesi
B) Pazar (İsa'nın dirildiğine inanılan gün)
C) Cuma
D) Çarşamba
E) Pazartesi
Cevap: B

53. Evharist sakramentinin hangi Yunan-Roma paganist ritüellerle benzer olduğu görülmektedir?
A) Zeus ve Hera kültü
B) Mitra ve Diyonisos
C) Apollo ve Artemis
D) Mars ve Venüs
E) Poseidon ve Athena
Cevap: B

54. Pavlus hangi şehirde doğmuştur?
A) Kudüs
B) Roma
C) Tarsus
D) Antakya
E) İskenderiye
Cevap: C

55. Tarsus hangi kültün merkezi olarak bilinmektedir?
A) Diyonisos
B) Mitraizm
C) İsis
D) Artemis
E) Zeus
Cevap: B

56. Mitra kültündeki ibadet gününün adı nedir?
A) Sabbat
B) Sunday (Güneş günü)
C) Moonday
D) Saturnday
E) Marsday
Cevap: B

57. Mitra kültünde inananlara birbirlerine ne denilirdi?
A) Efendi
B) Dostlar
C) Kardeş
D) Yoldaş
E) Mürit
Cevap: C

58. Hristiyanlıkta evlilik nasıl bir olay olarak kabul edilir?
A) Laik ve medeni bir olay
B) Tanrının insanlığa sevgisini simgeleyen bir yaşam hali
C) Geçici bir birliktelik
D) Sadece sosyal bir anlaşma
E) İsteğe bağlı bir akit
Cevap: B

59. Hristiyanlıkta boşanma nasıl değerlendirilir?
A) Teşvik edilir
B) Caiz görülmez
C) Serbest bırakılır
D) Kilise tarafından kolaylaştırılır
E) Belirli şartlarda zorunludur
Cevap: B

60. Rahip Takdisi sakramenti neyi ifade eder?
A) Vaftiz töreni
B) Ruhbanlık rütbesi, dini hizmete atanma ve yükselme merasimi
C) Evlilik töreni
D) Cenaze merasimi
E) Günah çıkarma ayini
Cevap: B

61. Hasta yağlama sakramentinin Yeni Ahit'teki temeli hangi bölümlere dayanır?
A) Matta 5 ve Romalılara Mektup
B) Markos 6:7-13 ve Yakub'un Mektubu 5:14
C) Yuhanna 1 ve Vahiy
D) Luka 15 ve Korintlilere Mektup
E) Elçilerin İşleri ve Galatyalılara Mektup
Cevap: B

62. Hasta yağlama işini kimler yapabilir?
A) Herkes
B) Sadece vaftiz olmuş kişiler
C) Sadece piskoposlar ve rahipler
D) Sadece papa
E) Sadece diyakozlar
Cevap: C

63. Yeni Ahit'te günlük ibadet saatlerine dair en açık referans hangi kitapta yer alır?
A) Matta
B) Resullerin İşleri
C) Romalılara Mektup
D) Vahiy
E) Yuhanna
Cevap: B

64. İlk Hristiyanlarda 'terce' hangi saate karşılık gelmekteydi?
A) Sabah 6
B) Sabah 9
C) Öğlen 12
D) Öğleden sonra 3
E) Akşam 6
Cevap: B

65. 'Sext' hangi saate karşılık gelmekteydi?
A) Sabah 6
B) Sabah 9
C) Öğlen 12
D) Öğleden sonra 3
E) Akşam 6
Cevap: C

66. 'None' hangi saate karşılık gelmekteydi?
A) Sabah 6
B) Sabah 9
C) Öğlen 12
D) Öğleden sonra 3
E) Akşam 6
Cevap: D

67. IV. yüzyıldan itibaren manastır hayatının yaygınlaşmasıyla dua vakitleri kaça çıkartılmıştır?
A) 3
B) 5
C) 7
D) 9
E) 12
Cevap: C

68. II. Vatikan Konsili'nden sonra günlük ibadet vakitlerinin sayısı kaça düşürülmüştür?
A) 2
B) 3
C) 4
D) 5
E) 6
Cevap: C

69. Protestan kiliselerinde dua vakti kaçtır?
A) 1
B) 2
C) 3
D) 5
E) 7
Cevap: B

70. Lutherci kiliselerde yalnızca hangi gün ibadet yapılır?
A) Cumartesi
B) Pazar
C) Cuma
D) Her gün
E) Çarşamba
Cevap: B

71. Haftalık temel ibadet hangi olayı kutlamak üzere pazar günü yapılır?
A) İsa'nın doğumu
B) İsa'nın yeniden dirilişi
C) İsa'nın vaftizi
D) İsa'nın göğe yükselişi
E) Kutsal Ruh'un inişi
Cevap: B

72. İngilizce 'Christmas' kelimesi eski İngilizce'de ne anlama gelmektedir?
A) Mesih'in doğumu
B) İsa ayini (Christes maesse)
C) Kutsal gece
D) Kış şenliği
E) Yeni yıl
Cevap: B

73. Noel Batı'da hangi tarihte kutlanır?
A) 1 Ocak
B) 6 Ocak
C) 25 Aralık
D) 24 Aralık
E) 31 Aralık
Cevap: C

74. Bazı Doğu kiliselerinde Noel hangi tarihte kutlanır?
A) 25 Aralık
B) 6 Ocak
C) 1 Ocak
D) 24 Aralık
E) 7 Ocak
Cevap: B

75. Noel'in resmen İsa'nın doğumu olarak kabul edilmesi hangi yüzyılda olmuştur?
A) 1. yüzyıl
B) 2. yüzyıl
C) 3. yüzyıl
D) 4. yüzyıl
E) 5. yüzyıl
Cevap: D

76. Paskalya hangi Yahudi bayramından dönüştürülmüştür?
A) Yom Kippur
B) Şavuot
C) Pesah
D) Sukkot
E) Hanuka
Cevap: C

77. Paskalya Hristiyanlarca neyi temsil etmek üzere kutlanmaktadır?
A) İsa'nın doğumunu
B) İsa'nın vaftizini
C) İsa'nın dirilişini
D) İsa'nın göğe yükselişini
E) Kutsal Ruh'un inişini
Cevap: C

78. Paskalya hangi tarihler arasında kutlanır?
A) 1 Mart-15 Nisan
B) 21 Mart - 25 Nisan
C) 1 Nisan - 30 Nisan
D) 25 Mart-1 Mayıs
E) 15 Mart - 20 Nisan
Cevap: B

79. İsa çarmıha gerildikten kaç gün sonra dirilmiştir?
A) 1 gün
B) 2 gün
C) 3 gün
D) 7 gün
E) 40 gün
Cevap: C

80. İsa dirildikten sonra havarilerini kaç gün eğitmiştir?
A) 3 gün
B) 7 gün
C) 10 gün
D) 40 gün
E) 50 gün
Cevap: D

81. İsa göğe yükselirken Tanrı'nın neresine yerleşmiştir?
A) Önüne
B) Sağına
C) Soluna
D) Arkasına
E) Altına
Cevap: B

82. Yunanca 'Pentakoste' kelimesi ne anlama gelmektedir?
A) Yirmi
B) Otuz
C) Kırk
D) Elli
E) Yüz
Cevap: D

83. Pentekost (Hamsin/Whitsunday) hangi olayı kutlar?
A) İsa'nın doğumunu
B) İsa'nın dirilişini
C) Kutsal Ruh'un havariler üzerine inmesini
D) İsa'nın göğe yükselişini
E) İsa'nın vaftizini
Cevap: C

84. Kutsal Ruh havariler üzerine indiğinde onlara hangi yetenek verilmiştir?
A) Uçabilme
B) Görünmez olabilme
C) Farklı dillerde konuşabilme
D) Ölüleri diriltme
E) Su üzerinde yürüme
Cevap: C

85. Pentekost, Paskalya'dan kaç gün sonra kutlanır?
A) 7 gün
B) 10 gün
C) 40 gün
D) 50 gün
E) 60 gün
Cevap: D

86. Hristiyanlık'ın temel dini metni hangisidir?
A) Tevrat
B) Kitab- Mukaddes (Kutsal Kitap)
C) Talmud
D) Kabala
E) Apokrifa
Cevap: B

87. Kitab-ı Mukaddes kaç ana bölümden oluşmaktadır?
A) Bir
B) İki
C) Üç
D) Dört
E) Beş
Cevap: B

88. Kitab-ı Mukaddes'in iki ana bölümü hangileridir?
A) Tevrat ve Zebur
B) Mektuplar ve Vahiy
C) Eski Ahit ve Yeni Ahit
D) Kanonik ve Apokrif
E) Sinoptik ve Yuhanna
Cevap: C

89. Yeni Ahit toplam kaç kitaptan oluşmaktadır?
A) 12
B) 21
C) 27
D) 39
E) 66
Cevap: C

90. Yeni Ahit hangi dilde yazılmıştır?
A) İbranice
B) Yunanca
C) Latince
D) Aramice
E) Süryanice
Cevap: B

91. 'Ahit' kelimesi ne anlama gelmektedir?
A) Kitap
B) Antlaşma/sözleşme
C) Yasa
D) Vahiy
E) Peygamberlik
Cevap: B

92. Yeni Ahit'in ilk dört kitabına ne ad verilir?
A) Mektuplar
B) Vahiyler
C) İnciller
D) Mezmurlar
E) Tarihler
Cevap: C

93. 'İncil' kelimesi Yunanca'da ne anlama gelmektedir?
A) Kutsal kitap
B) Tanrının sözü
C) Müjde/iyi haber
D) Antlaşma
E) Peygamberlik
Cevap: C

94. Yeni Ahit İsa tarafından yaşarken yazdırılmış mıdır?
A) Evet, İsa bizzat yazdırmıştır
B) Hayır, İsa tarafından yaşarken yazdırılmamıştır
C) Kısmen yazdırılmıştır
D) Sadece İnciller yazdırılmıştır
E) Sadece mektuplar yazdırılmıştır
Cevap: B

95. İncillerin İsa'dan yaklaşık kaç yıl sonra yazıldığı tahmin edilmektedir?
A) 5-10 yıl
B) 20-30 yıl
C) 40-60 yıl (70-110 yılları arası)
D) 100-150 yıl
E) 200-300 yıl
Cevap: C

96. Yeni Ahit'in en eski kitapları hangisidir?
A) Dört İncil
B) Elçilerin İşleri
C) Pavlus'un mektupları
D) Vahiy Kitabı
E) Katolik Mektuplar
Cevap: C

97. Dört İncil hangi yüzyıldan itibaren havarilerin adlarıyla anılmaya başlanmıştır?
A) 1. yüzyılın başından
B) 2. yüzyılın 2. yarısından
C) 3. yüzyılın ortasından
D) 4. yüzyılın başından
E) 5. yüzyıldan
Cevap: B

98. Kanonik olmayan İncillere ne ad verilir?
A) Ortodoks
B) Sinoptik
C) Apokrif
D) Heretik
E) Gnostik
Cevap: C

99. Hangi konsillerde sadece dört İncil kanonik sayılmış ve diğerleri reddedilmiştir?
A) İznik ve İstanbul
B) Efes ve Kadıköy
C) Laodicea ve Hippo
D) Roma ve Trento
E) Lateran ve Vatikan
Cevap: C

100. 'Sinoptik' kelimesi Grekçe'de ne anlama gelmektedir?
A) Kutsal görmek
B) Birlikte görmek
C) Ayrı görmek
D) İlahi görmek
E) Gizli görmek
Cevap: B

101. Sinoptik İnciller hangileridir?
A) Matta, Markos, Yuhanna
B) Matta, Luka, Yuhanna
C) Matta, Markos, Luka
D) Markos, Luka, Yuhanna
E) Tüm dört İncil
Cevap: C

102. Yuhanna İncili neden Sinoptik değildir?
A) Daha kısa olduğu için
B) Üslup ve muhteva açısından farklı bir felsefi içeriğe sahip olduğu için
C) Daha eski olduğu için
D) Yunanca yazılmadığı için
E) Havari tarafından yazılmadığı için
Cevap: B

103. Dört kaynak teorisine göre Matta ve Luka'ya hangi kaynaklar kaynaklık etmiştir?
A) Yuhanna ve P kaynağı
B) Markos ve Q kaynağı
C) Tomas ve M kaynağı
D) Barnabas ve L kaynağı
E) Petrus ve R kaynağı
Cevap: B

104. En kısa İncil hangisidir?
A) Matta
B) Luka
C) Yuhanna
D) Markos
E) Tomas
Cevap: D

105. Markos İncili'nin İsa'nın hangi dönemiyle başladığı kabul edilir?
A) Doğumu
B) Çocukluğu
C) Vaftizi
D) Göğe yükselişi
E) Dirilişi
Cevap: C

106. Markos İncili kimin şakirdi tarafından yazıldığına inanılmaktadır?
A) Pavlus'un
B) Petrus'un
C) Yuhanna'nın
D) Yakub'un
E) Andreas'ın
Cevap: B

107. Markos İncili, Luka ve Matta'dan yaklaşık kaç yıl önce yazılmıştır?
A) 1-5 yıl
B) 10-15 yıl
C) 25-30 yıl
D) 50-60 yıl
E) 100 yıl
Cevap: B

108. Markos İncili'nde İsa'nın hangi dönemlerinden bahsedilmez?
A) Vaftizi ve çarmıha gerilmesi
B) Doğumu ve çocukluğu
C) Mucizeleri ve vaazları
D) Son akşam yemeği
E) Tutuklanması
Cevap: B

109. Matta İncili'nin hangi halka hitaben yazıldığı düşünülmektedir?
A) Romalılara
B) Yunanlılara
C) Yahudi Filistin halkına
D) Mısırlılara
E) Perslere
Cevap: C

110. İsa'nın Yahudi şeriatine bakışını yansıtan 'Dağ Vaazı' Matta İncili'nin hangi bölümlerinde yer alır?
A) 1-3. bölümler
B) 5-7. bölümler
C) 10-12. bölümler
D) 15-17. bölümler
E) 25-28. bölümler
Cevap: B

111. Luka İncili kimin takipçisi tarafından yazıldığı iddia edilmektedir?
A) Petrus'un
B) Pavlus'un
C) Yuhanna'nın
D) Yakub'un
E) Matta'nın
Cevap: B

112. Luka İncili kime ithafen yazılmıştır?
A) Petrus'a
B) Timoteos'a
C) Teofilos'a
D) Filemon'a
E) Titus'a
Cevap: C

113. Yuhanna İncili'nde İsa nasıl takdim edilmektedir?
A) Sadece bir peygamber olarak
B) Nasıralı bir öğretmen olarak
C) İnsan şekline girmiş bir ilah olarak
D) Sıradan bir insan olarak
E) Bir melek olarak
Cevap: C

114. Yuhanna İncili'nin başlangıcında İsa nasıl tanımlanmaktadır?
A) Davut'un oğlu olarak
B) Meryem'in oğlu olarak
C) Başlangıçtan beri Tanrı ile birlikte olan Tanrı Sözü olarak
D) Yahya'nın takipçisi olarak
E) Celileli bir balıkçı olarak
Cevap: C

115. Yuhanna İncili hangi akideyi/doktrinin izlerini taşımaktadır?
A) Ariusçuluk
B) Nesturilik
C) Teslis
D) Monofizitlik
E) Ebionizm
Cevap: C

116. Elçilerin İşleri kitabı hangi İncil'in devamı gibidir?
A) Matta
B) Markos
C) Luka
D) Yuhanna
E) Tomas
Cevap: C

117. Elçilerin İşleri kitabının son kısımlarında kimin faaliyet ve seyahatlerinden bahsedilir?
A) Petrus
B) Yuhanna
C) Yakub
D) Pavlus
E) Barnabas
Cevap: D

118. Pavlus'un Yeni Ahit'te kaç mektubu bulunmaktadır?
A) 7
B) 10
C) 13
D) 15
E) 21
Cevap: C

119. Pavlus'un mektupları hangi bölgelerde yaşayanlara yazılmıştır?
A) Mısır ve Filistin
B) Anadolu, Makedonya, Yunanistan ve Roma
C) Hindistan ve Çin
D) Afrika ve İspanya
E) Britanya ve Galya
Cevap: B

120. Genel (Katolik) Mektuplar'da hangi kişilere atfedilen mektuplar bulunmaktadır?
A) Matta, Markos, Luka
B) Yakub, Petrus, Yuhanna, Yahuda
C) Pavlus, Timoteos, Titus
D) Andreas, Filipus, Tomas
E) Barnabas, Silas, Apollo
Cevap: B

121. Vahiy Kitabı'nın ilk bölümü hangi bölgedeki kiliselere hitaben yazılmıştır?
A) Filistin'deki yedi kilise
B) Anadolu'daki yedi kilise
C) Mısır'daki yedi kilise
D) Roma'daki yedi kilise
E) Yunanistan'daki yedi kilise
Cevap: B

122. Vahiy Kitabı'nda kıyamet sonrasında kaç yıllık bir mesih çağı anlatılmaktadır?
A) 100 yıl
B) 500 yıl
C) 1000 yıl (bin yıl)
D) 7 yıl
E) 40 yıl
Cevap: C

123. 'Hristiyan' kelimesi M.S. hangi yıldan itibaren yaygın olarak kullanılmaya başlanmıştır?
A) M.S. 30
B) M.S. 60
C) M.S. 100
D) M.S. 150
E) M.S. 200
Cevap: B

124. XVI. yüzyıldan itibaren 'Hristiyanlık' kavramı yerine hangi kavramlar kullanılmaya başlanmıştır?
A) Doğu ve Batı dini
B) Ortodoksluk, Katoliklik ve Protestanlık
C) Roma ve Bizans dini
D) Latin ve Grek dini
E) Papalık ve Patriklik
Cevap: B

125. Grekçe 'katholikos' kelimesi ne anlama gelmektedir?
A) Kutsal
B) Doğru
C) Genel, evrensel
D) Roma'ya ait
E) Papalık
Cevap: C

126. Katolik kilisesinin Doğu kilisesiyle kesin olarak ayrılması hangi yılda gerçekleşmiştir?
A) 325
B) 451
C) 787
D) 1054
E) 1204
Cevap: D

127. Ortaçağ'da 'katolik' kelimesi daha çok hangi terimin karşıtı olarak kullanılmıştır?
A) Ortodoks
B) Protestan
C) Heretik
D) Pagan
E) Apokrif
Cevap: C

128. Katolik anlayışına göre İsa Mesih, kilisesini kimin üzerine kuracağını söylemiştir?
A) Pavlus
B) Yuhanna
C) Petrus
D) Yakub
E) Andreas
Cevap: C

129. 'Göklerin melekûtunun anahtarlarını sana vereceğim' sözü hangi İncil pasajında yer almaktadır?
A) Matta 16:18-19
B) Markos 1:1-5
C) Luka 22:14-20
D) Yuhanna 3:16
E) Vahiy 1:1-8
Cevap: A

130. Papaların kendilerini ne olarak kabul ettiği söylenmektedir?
A) Tanrının oğlu
B) İsa Mesih'in yeryüzündeki vekili ve Petrus'un halefi
C) Kutsal Ruh'un temsilcisi
D) Peygamber
E) Melek
Cevap: B

131. 'Ortodoks' kelimesi ne anlama gelmektedir?
A) Evrensel düşünce
B) Doğru düşünce
C) Eski düşünce
D) Yeni düşünce
E) Kutsal düşünce
Cevap: B

132. Roma şehri kendisini hangi havariye dayandırırken, İstanbul hangi havariye dayandırmaktaydı?
A) Roma-Pavlus, İstanbul-Yuhanna
B) Roma-Petrus, İstanbul-Andreas
C) Roma-Yakub, İstanbul-Petrus
D) Roma-Andreas, İstanbul-Pavlus
E) Roma-Yuhanna, İstanbul-Yakub
Cevap: B

133. 451 yılında toplanan ve İstanbul'un Roma ile eş imtiyazlara sahip olduğunu onaylayan konsil hangisidir?
A) İznik Konsili
B) İstanbul Konsili
C) Efes Konsili
D) Kadıköy Konsili
E) Laodicea Konsili
Cevap: D

134. Kadıköy Konsili'nin 28. kanonuna göre hangi bölgelerdeki metropolitler İstanbul piskoposluğunca tayin edilecekti?
A) İtalya ve İspanya
B) Mısır ve Libya
C) Asya ve Trakya
D) Galya ve Britanya
E) Filistin ve Suriye
Cevap: C

135. Katolik ve Ortodoks kiliselerinin ayrılma nedenlerinden biri olan 'filioque' meselesi neyle ilgilidir?
A) Papa'nın otoritesi
B) Kutsal Ruh'un 've Oğul'dan da çıkması
C) Vaftiz şekli
D) Evharist ayini
E) Rahiplerin evliliği
Cevap: B

136. 4. Haçlı Seferi hangi yılda gerçekleşmiş ve Doğu-Batı kilise ilişkilerini daha da bozmuştur?
A) 1054
B) 1099
C) 1204
D) 1453
E) 1517
Cevap: C

137. Protestanlık hangi kişinin teolojisinden hareketle gelişmiştir?
A) John Calvin
B) Martin Luther
C) Ulrich Zwingli
D) John Knox
E) Thomas Cranmer
Cevap: B

138. 'Protestan' tabiri ilk defa hangi olaya atıfla kullanılmıştır?
A) 95 maddelik iddiaların asılması
B) Diet of Speyer'da (1529) Lutherci görüşleri benimseyen prenslerin deklarasyonu
C) Augsburg Anlaşması
D) Luther'in aforoz edilmesi
E) İncil'in Almanca'ya çevrilmesi
Cevap: B

139. Latince 'indulgentia' kelimesinden gelen ve 'bağışlama' anlamına gelen terim nedir?
A) Aforoz
B) Endüljans
C) Engizisyon
D) Kredo
E) Dogma
Cevap: B

140. Endüljans ne anlama gelmektedir?
A) Kiliseden kovulma
B) Dini yargılama
C) Günahların dünyevi cezalarının kilise tarafından bağışlanması
D) Rahiplik yetkisi
E) İnanç esasları
Cevap: C

141. Luther'in kurtuluş anlayışına göre kurtuluş neye dayanmaktadır?
A) İbadet ve iyi davranışlara
B) Sadece imana
C) Kilise sakramentlerine
D) Papanın otoritesine
E) Hac ibadetine
Cevap: B

142. Luther dini otorite olarak neyi kabul etmiştir?
A) Papa ve Papalık konsillerini
B) Kilise geleneğini
C) Sadece Kutsal Kitab'ın otoritesini
D) Piskoposların kararlarını
E) Azizlerin öğretilerini
Cevap: C

143. Luther 95 maddelik iddialarını hangi yılda ve nereye asmıştır?
A) 1517'de Wittenberg Sarayı kilisesinin kapısına
B) 1520'de Roma'da St. Peter Bazilikası'na
C) 1521'de Worms'da şehir kapısına
D) 1525'de Berlin Katedrali'ne
E) 1530'da Augsburg'da kilise kapısına
Cevap: A

144. Luther'e göre günahları af yetkisi kime aittir?
A) Papa'ya
B) Piskoposlara
C) Rahiplere
D) İsa'ya
E) Azizlere
Cevap: D

145. Luther İncilleri hangi dile tercüme etmiştir?
A) Latince
B) Yunanca
C) Almanca
D) İngilizce
E) Fransızca
Cevap: C

146. Luther mesleki din adamlığı hakkında ne düşünmekteydi?
A) Destekliyordu
B) Reddediyordu, herkesin din adamı olduğunu savunuyordu
C) Sadece papazlığı kabul ediyordu
D) Sadece piskoposluğu kabul ediyordu
E) Tarafsızdı
Cevap: B

147. Luther'in geçerli gördüğü sakramentler hangileridir?
A) Tüm yedi sakrament
B) Vaftiz ve Evharist (Ekmek-Şarap)
C) Sadece vaftiz
D) Sadece evharist
E) Hiçbiri
Cevap: B

148. Romalılara 13:1-4'e göre Pavlus yönetime karşı direnenler hakkında ne söylemektedir?
A) Onurlandırılacaklardır
B) Tanrının düzenine karşı gelmiş olurlar ve yargılanırlar
C) Ödüllendirileceklerdir
D) Kilise tarafından kutsanacaklardır
E) Cennete gideceklerdir
Cevap: B

149. 1555 yılında Katolik İmparator V. Charles (Şarlken) Protestan prenslerle hangi anlaşmayı imzaladı?
A) Worms Anlaşması
B) Augsburg Anlaşması
C) Westphalia Anlaşması
D) Trento Anlaşması
E) Speyer Anlaşması
Cevap: B

150. Augsburg Anlaşması'na göre prenslik topraklarındaki kiliseler kimin takdirine bırakılmıştır?
A) Papa'nın
B) İmparator'un
C) O prensin
D) Halkın
E) Piskoposların
Cevap: C

151. Luther, Tanrı anlayışında 'yargılayan adaletli Tanrı' yerine hangi Tanrı görüşünü savunmuştur?
A) Cezalandırıcı Tanrı
B) Merhametli Tanrı
C) Uzak Tanrı
D) Savaşçı Tanrı
E) Kaderci Tanrı
Cevap: B

152. Luther aforoz belgesini hangi tarihte yakmıştır?
A) 31 Ekim 1517
B) 3 Ocak 1521
C) 25 Haziran 1530
D) 18 Şubat 1546
E) 15 Ağustos 1555
Cevap: B
`;

// --- DINLER 2 (DINLER TARIHI VE YAHUDILIK) ---
// Format: Soru metni, şıklar ve cevap anahtarı ayrıdır.
const rawDinler2Questions = `
1. Tevrat kelimesi hangi dilden gelmektedir ve ne anlama gelir?
A) Arapça - Kutsal kitap
B) Yunanca - Yasa kitabı
C) İbranice - Öğreti/Yasa
D) Latince - Vahiy
E) Aramice - Emir

2. Yahudiliği sistemli bir din haline getiren dini yasalar ilk kez hangi peygambere verilmiştir?
A) İbrahim
B) Davud
C) Süleyman
D) Musa
E) Yakup

3. Musa'nın Tanrı ile görüşüp 10 emirin yazılı olduğu levhaları aldığı dağ hangisidir?
A) Zeytin Dağı
B) Horeb Dağı
C) Karmel Dağı
D) Gerizim Dağı
E) Sina Dağı

4. Tevrat kaç kitaptan meydana gelmektedir?
A) 3
B) 4
C) 5
D) 7
E) 10

5. Tevrat'ın Hristiyanlarca kullanılan diğer adı nedir?
A) Talmud
B) Mişna
C) Pentatök (Pentateuch)
D) Tanakh
E) Gemara

6. Aşağıdakilerden hangisi Tevrat'ın beş kitabından biri DEĞİLDİR?
A) Yaratılış (Bereşit)
B) Çıkış (Şemot)
C) Mezmurlar (Zebur)
D) Levililer (Vayikra)
E) Çölde Sayım (Bamidbar)

7. Tevrat hangi olayları içermektedir?
A) Alemin yaratılışından Musa'nın ölümüne kadar olan olaylar
B) Süleyman'ın saltanatı
C) Babil sürgünü sonrası
D) Roma dönemi
E) Kudüs'ün yıkılışı

8. Tevrat'ın büyük kısmı hangi dilde yazılmıştır?
A) Yunanca
B) Aramice
C) Arapça
D) İbranice
E) Latince

9. Tanakh toplam kaç kitaptan oluşur?
A) 24
B) 27
C) 39
D) 46
E) 66

10. Tanakh'ın 'Neviim' bölümü ne anlama gelir?
A) Yazılar
B) Öğreti
C) Peygamberler
D) Yasalar
E) Mezmurlar

11. Tanakh'ın 'Ketuvim' bölümü ne anlama gelir?
A) Peygamberler
B) Yazılar
C) Yasalar
D) Öğretiler
E) Tarihler

12. Mezmurlar (Zebur) Tanakh'ın hangi bölümünde yer alır?
A) Tora
B) Neviim
C) Ketuvim
D) Mişna
E) Gemara

13. Geleneksel Yahudiliğe göre vahiy sıralamasında en yüksek metin hangisidir?
A) Peygamber kitapları
B) Yazılar
C) Mişna
D) Tevrat
E) Talmud

14. Peygamber kitapları Tanrı tarafından nasıl vahyedilmiştir?
A) Doğrudan dikte yoluyla
B) Rüya veya müşahede (vizyon) kanalıyla
C) Melek aracılığıyla
D) İlham yoluyla
E) Yazılı levhalar şeklinde

15. Babil sürgünü sonrasında Tevrat'ı tekrar yazan kişi kimdir?
A) Nehemya
B) Daniel
C) Ezra
D) Zekeriya
E) Haggay

16. Tanakh metni hangi yüzyılda tamamlanmıştır?
A) M.Ö. 5. yy
B) M.Ö. 2. yy
C) M.S. 1. yy
D) M.S. 3. yy
E) M.S. 6. yy

17. Sözlü Tevrat'ı M.S. 3. yy başlarında yazıya geçiren din alimi kimdir?
A) Hillel
B) Şammai
C) Yehuda ha-Nasi
D) Akiva
E) Gamaliel

18. İlk nesil din alimleri (tannaim) tarafından oluşturulan metin hangisidir?
A) Gemara
B) Mişna
C) Talmud
D) Midraş
E) Kabala

19. İkinci nesil din alimleri (amoraim) tarafından yapılan yorumlara ne ad verilir?
A) Midraş
B) Tosefta
C) Kabala
D) Gemara
E) Halakha

20. Mişna ve Gemara'nın birleşimine ne ad verilir?
A) Tanakh
B) Midraş
C) Talmud
D) Kabala
E) Tosefta

21. 'Tannaim' terimi ne anlama gelir?
A) Konuşanlar
B) Yazanlar
C) Tekrar edenler
D) Yorumlayıcılar
E) Öğretenler

22. 'Amoraim' terimi ne anlama gelir?
A) Tekrar edenler
B) Konuşanlar
C) Yazanlar
D) Dinleyenler
E) Okuyucular

23. Mişna'nın 'Zeraim' bölümü hangi konuları içerir?
A) Bayramlar
B) Dua, yeme içme ve ziraat
C) Evlilik
D) Cezai hükümler
E) Kurban

24. Mişna'nın 'Moed' bölümü hangi konuları içerir?
A) Evlilik
B) Bayramlar
C) Cezai hükümler
D) Kurban
E) Temizlik

25. Mişna'nın 'Naşim' bölümü hangi konuları içerir?
A) Bayramlar
B) Kurban
C) Cezai hükümler
D) Evlilik ve aile hayatı
E) Ziraat

26. Mişna'nın 'Nezikin' bölümü hangi konuları içerir?
A) Bayramlar
B) Evlilik
C) Sivil ve cezai hükümler
D) Kurban
E) Temizlik

27. Mişna'nın 'Kodaşim' bölümü hangi konuları içerir?
A) Bayramlar
B) Evlilik
C) Cezai hükümler
D) Mabet ve kurban ibadeti
E) Ziraat

28. Mişna'nın 'Tohorot' bölümü hangi konuları içerir?
A) Bayramlar
B) Ritüel temizlik
C) Evlilik
D) Kurban
E) Ziraat

29. Talmud hangi yüzyılda tamamlanmıştır?
A) M.S. 2. yy
B) M.S. 3. yy
C) M.S. 4. yy
D) M.S. 6. yy
E) M.S. 8. yy

30. Hangi Talmud nüshası daha çok rağbet görmüştür?
A) Kudüs Talmud'u
B) Filistin Talmud'u
C) Babil Talmud'u
D) Mısır Talmud'u
E) Roma Talmud'u

31. Sinagogda Tevrat tomarlarının muhafaza edildiği dolaba ne ad verilir?
A) Bima
B) Teva
C) Aron Hakodeş
D) Menora
E) Mezuza

32. Tevrat okunurken tomarın konulduğu kürsüye ne ad verilir?
A) Aron Hakodeş
B) Menora
C) Teva
D) Bima
E) Şofar

33. Tevrat okunurken başa takılan takkeye ne ad verilir?
A) Tallit
B) Tefilin
C) Kipa
D) Tsitsit
E) Menora

34. Tevrat'ın yıl boyu okunmasının tamamlandığı bayrama ne ad verilir?
A) Pesah
B) Şavuot
C) Simha Tora
D) Hanuka
E) Purim

35. Tevrat yıl boyunca kaç bölüme (peraşa) ayrılarak okunur?
A) 24
B) 39
C) 52
D) 54
E) 66

36. 16. yy'dan itibaren kutsal metin eleştirilerine hangi gelişmeler yol açmıştır?
A) Haçlı Seferleri
B) Rönesans-Reform hareketleri ve bilimsel gelişmeler
C) Osmanlı fetihleri
D) Moğol istilaları
E) Veba salgınları

37. 1600'de Roma'da diri diri yakılan kutsal metin eleştirmeni kimdir?
A) Galileo Galilei
B) Giordano Bruno
C) Copernicus
D) Martin Luther
E) John Calvin

38. 1670'te Teolojik-Politik İnceleme yazarak aforoz edilen filozof kimdir?
A) Moses Mendelssohn
B) Maimonides
C) Baruh Spinoza
D) Martin Buber
E) Abraham Geiger

39. Tevrat'ın Musa tarafından yazılamayacağını belirten Hristiyan din adamı kimdir?
A) Jean Astruc
B) Julius Wellhausen
C) Richard Simon
D) Hermann Gunkel
E) Karl Graf

40. 1753'te Yaratılış kitabının derleme olduğunu belirten bilim adamı kimdir?
A) Richard Simon
B) Jean Astruc
C) Baruh Spinoza
D) Julius Wellhausen
E) Karl Graf

41. Tevrat'ta Tanrı adının 'Elohim' ve 'Yahve' olarak farklı yazılması neyi gösterir?
A) Tek kaynaktan geldiğini
B) Farklı kaynaklardan derlendiğini
C) Musa tarafından yazıldığını
D) Tanrının farklı isimlerini
E) Çeviri hatalarını

42. Elohim metninde insan nasıl yaratılmıştır?
A) Önce erkek, sonra kadın
B) Tanrı'nın suretinde, erkek ve dişi aynı anda
C) Topraktan
D) Işıktan
E) Nefesten

43. Yahvist (J) metninde kadın nasıl yaratılmıştır?
A) Adem ile aynı anda
B) Topraktan
C) Erkeğin kaburga kemiğinden
D) Işıktan
E) Su ve topraktan

44. Hangi mezhebe göre Tevrat ve Talmud vahiy değildir?
A) Ortodoks Yahudilik
B) Muhafazakar Yahudilik
C) Hasidik Yahudilik
D) Reformist Yahudilik
E) Karai Yahudilik

45. Musa'nın yaşadığı dönemle Eski Ahit'in derlenmesi arasında kaç yıl vardır?
A) 300-500 yıl
B) 500-700 yıl
C) 700-900 yıl
D) 1000-1300 yıl
E) 1500-2000 yıl

46. M.Ö. 722'de İsrail krallığının yıkılmasıyla ortaya çıkan mezhep hangisidir?
A) Ferisiler
B) Sadukiler
C) Esseniler
D) Samiriler
E) Zealotlar

47. 'Şamerim/Şomerim' ne anlama gelir?
A) Ayrılıkçılar
B) Koruyucular
C) Sadıklar
D) Dindarlar
E) Okuyucular

48. Samiriler Tanakh'ın hangi bölümüne inanır?
A) Tüm Tanakh'a
B) Sadece Peygamberlere
C) Sadece Tevrat'a
D) Sadece Yazılara
E) Talmud'a

49. Samirilerin beklediği Mesih'in adı nedir?
A) Maşiah
B) Taheb
C) Christos
D) Emmanuel
E) Şilo

50. Samirilerin kıblesi neresidir?
A) Kudüs
B) Hebron
C) Gerizim Dağı
D) Beytlehem
E) Nasıra

51. Samiriler hangi günde kurban ibadetini gerçekleştirir?
A) Şabat
B) Yom Kippur
C) Fısıh
D) Sukkot
E) Şavuot

52. Samirilerin ibadet dili hangisidir?
A) İbranice
B) Yunanca
C) Sâmirî Ârâmîcesi
D) Arapça
E) Latince

53. Samirilerde nesep hangi yolla devam eder?
A) Anne yoluyla
B) Baba yoluyla
C) Her iki yolla
D) Evlat edinme
E) Din değiştirme

54. II. Mabed dönemi hangi tarihler arasını kapsar?
A) M.Ö. 1000 - M.Ö. 586
B) M.Ö. 500'ler - M.S. 70
C) M.S. 70 - M.S. 500
D) M.Ö. 722 - M.Ö. 500
E) M.S. 1-M.S. 135

55. M.Ö. 1. yy'da Filistin'deki üç büyük Yahudi mezhebi hangileridir?
A) Samiriler, Karailer, Hasidiler
B) Sadukiler, Ferisiler, Esseniler
C) Ortodokslar, Reformistler, Muhafazakarlar
D) Zelotlar, Sikaryolar, Esseniler
E) Ferisiler, Karailer, Samiriler

56. 'Saduki' adı kimle ilişkilidir?
A) Kral Davud
B) Başkohen Sadok
C) Peygamber Sadık
D) Haham Tsadok
E) Kral Süleyman

57. Sadukiler hangi sosyal sınıftan oluşmaktaydı?
A) Köylüler
B) Tüccarlar
C) Kohenler ve aristokratlar
D) Yazıcılar
E) Askerler

58. Sadukiler Tevrat'ı nasıl yorumlamıştır?
A) Alegorik
B) Mistik
C) Lafzi (literal)
D) Tarihsel eleştiri
E) Felsefi

59. Sadukiler aşağıdakilerden hangisini KABUL ETMEMİŞTİR?
A) Tevrat'ın kutsallığı
B) Mabed ibadeti
C) Ölüm sonrası dirilme
D) Kurban kültü
E) On Emir

60. Sadukiler neyin yıkılmasıyla tarih sahnesinden silinmiştir?
A) Kudüs şehrinin
B) II. Mabedin
C) Babil'in
D) Roma'nın
E) Samirya'nın

61. 'Peruşim' (Ferisi) ne anlama gelir?
A) Dindarlar
B) Ayrılıkçılar
C) Koruyucular
D) Yazıcılar
E) Öğretmenler

62. Ferisiler kendilerini kimlerden ayırmışlardır?
A) Esseniler ve Zelotlar
B) Helenistik uygulamacılar ve Sadukiler
C) Samiriler ve Karailer
D) Romalılar ve Yunanlılar
E) Mısırlılar ve Babilliler

63. Ferisiler mabed vurgusuna karşı neyi ön plana çıkarmıştır?
A) Kurban ibadetini
B) Sinagog ve Tevrat öğretisini
C) Kohenlik sistemini
D) Hac ibadetini
E) Münzevi yaşamı

64. Ferisilere göre Sözlü Tora nasıl aktarılmıştır?
A) Sadece Musa'ya verilmiştir
B) Peygamberlerden sonra Ferisilere ilahi şekilde aktarılmıştır
C) Romalılar tarafından
D) Babil'den öğrenilmiştir
E) Sadukiler tarafından yazılmıştır

65. Ferisiler Sadukilerin aksine neye inanmışlardır?
A) Tevrat'ın kutsallığına
B) Ölümden sonra dirilmeye
C) Mabed ibadetine
D) Kurban kültüne
E) Roma ile işbirliğine

66. Ferisilerin ortaya çıkışını Makkabiler dönemine bağlayanlara göre hangi inanç etkili olmuştur?
A) Roma'ya karşı savaş
B) Makkabi isyanlarında ölenlerin şehit olduğu ve ahiret inancı
C) Helenizmin kabulü
D) Mabed'in kutsallığı
E) Krallığın restorasyonu

67. Esseniler nerede toplumdan ayrı yaşamışlardır?
A) Kudüs'te
B) Nasıra'da
C) Ölüdeniz civarında (Kumran)
D) Galile'de
E) Şam'da

68. Esseniler neyi reddetmişlerdir?
A) Tevrat'ın kutsallığını
B) İkinci Mabedin ve dini otoritenin kutsiyetini
C) Ahiret inancını
D) Melek inancını
E) Mesih beklentisini

69. Essenilerin hangi öğretiyle ilgileri vardı?
A) Helenistik felsefe
B) Roma hukuku
C) Apokaliptik öğreti
D) Stoa felsefesi
E) Epikurosçuluk

70. Esseniler neden kısmen bekarlığı gerekli görmüşlerdir?
A) Ekonomik nedenlerle
B) Mesîhî dönemin yakın olduğu inancından
C) Sağlık nedenleri
D) Roma baskısı
E) Kadın nüfusunun azlığı

71. Esseni mezhebinin hangi dine ciddi etkisi olmuştur?
A) İslam
B) Budizm
C) Hristiyanlık
D) Zerdüştlük
E) Maniheizm

72. Hangi peygamberin Essenilerle ilişkisi olduğu düşünülmektedir?
A) İsa
B) Vaftizci Yahya
C) Pavlus
D) Petrus
E) Barnaba

73. Essenilerin nesilleri neden devam etmemiştir?
A) Roma zulmü
B) Evlilik hayatına getirdikleri kısıtlama
C) Salgın hastalıklar
D) Hristiyanlığa geçiş
E) Babil'e sürgün

74. Rabbinik Yahudilik hangi kadim mezhebin devamıdır?
A) Sadukilik
B) Essenilik
C) Ferisilik
D) Samirilik
E) Zelotluk

75. Rabbinik Yahudiliğe göre Yazılı Tora'yı anlamak için ne gereklidir?
A) Felsefi eğitim
B) Sözlü Tora
C) Yunanca bilgisi
D) Mistik deneyim
E) Kohenlik soyu

76. Rabbilerin oluşturduğu Yahudi yasasına ne ad verilir?
A) Mişna
B) Gemara
C) Halakha
D) Aggada
E) Midraş

77. Ortodoks Yahudilikte kadının konumu nasıldır?
A) Cemaatte aktif rol alır
B) Haham olabilir
C) Cemaatte yeri yoktur, sadece evde görevleri vardır
D) Erkeklerle eşit
E) Sinagogda ibadet yönetir

78. 'Ortodoks' ismi Yahudilikte ne zaman kullanılmaya başlanmıştır?
A) M.S. 6. yy
B) 12. yy
C) 16. yy
D) 18. yy
E) 20. yy

79. Ultra-Ortodoks Yahudilere verilen diğer isim nedir?
A) Karaim
B) Masorti
C) Haredim
D) Mitnagdim
E) Musar

80. Hasidilik hareketi nerede ve kim önderliğinde ortaya çıkmıştır?
A) Almanya - Moses Mendelssohn
B) İspanya - Maimonides
C) Doğu Avrupa/Polonya - İsrael ben Eliezer
D) Babil - Yehuda ha-Nasi
E) Filistin - Hillel

81. 'Hasid' kelimesi ne anlama gelir?
A) Ayrılıkçı
B) Koruyucu
C) Dindar
D) Okuyucu
E) Yazıcı

82. İsrael ben Eliezer'in diğer adı nedir?
A) Rambam
B) Raşi
C) Baal Şem-Tov
D) Gaon
E) Ramban

83. İsrael ben Eliezer (Baal Şem-Tov) hangi yılda vefat etmiştir?
A) 1700
B) 1730
C) 1760
D) 1790
E) 1820

84. Hasidiliğin ortaya çıkmasında hangi faktörler etkili olmuştur?
A) Zenginlik ve refah
B) Siyasal-ekonomik sıkıntı, katliam, öğretim kurumlarından yoksunluk
C) Roma işgali
D) Arap fetihleri
E) Hristiyan misyonerlik

85. Hasidilik mezhebinin karakteri nasıldır?
A) Rasyonalist ve felsefi
B) Mistik
C) Seküler
D) Politik
E) Askeri

86. Hasidilik mezhebinde ibadet ve dini eylemlerin özelliği nedir?
A) Ciddiyet ve sessizlik
B) Mistik konsantrasyon, neşe ve haz
C) Katı kuralcılık
D) Münzevi yaşam
E) Sessiz tefekkür

87. İsrail devletine küfür gözüyle bakan anti-siyonist Hasidik grup hangisidir?
A) Lubavitch
B) Breslov
C) Satmar/Neturei Karta
D) Ger
E) Belz

88. 'Neturei Karta' ne anlama gelir?
A) Kutsal Toprak
B) Şehrin Muhafızları
C) Seçilmiş Halk
D) Ahit Bekçileri
E) Tanrı'nın Oğulları

89. Reformist Yahudilik 19. yy başlarında hangi ülkede ortaya çıkmıştır?
A) İngiltere
B) Fransa
C) Almanya
D) Rusya
E) ABD

90. Aşağıdakilerden hangisi Reformist Yahudiliğin ideologlarından biri DEĞİLDİR?
A) Moses Mendelssohn
B) Abraham Geiger
C) Isaac Mayer Wise
D) İsrael ben Eliezer
E) Hepsi Reformist ideologdur

91. Reformist Yahudilik Tevrat ve Talmud hakkında ne düşünür?
A) Kutsaldır
B) Vahiy olmadığını iddia eder
C) Değiştirilemez
D) Lafzi yorumlanmalı
E) Tek otorite

92. Reformist Yahudilik 'Vaad edilmiş toprak' hakkında ne düşünür?
A) Filistin'e dönülmeli
B) Kudüs en kutsal
C) Bu doktrini kabul etmez, bulundukları ülkeyi kutsal sayarlar
D) Gerizim dağı kutsal
E) Babil kutsal

93. Reform Yahudiliğinde kadınların konumu nasıldır?
A) Cemaatte yeri yok
B) Sadece ev işleri
C) Kadınlara cemaatte yer verilir, kadın hahamlar da var
D) Sinagoga giremez
E) Tevrat okuyamaz

94. Muhafazakar Yahudilik neye tepki olarak doğmuştur?
A) Ortodoks Yahudiliğe
B) Reformist Yahudiliğe
C) Hasidik Yahudiliğe
D) Karai Yahudiliğe
E) Samirilere

95. Muhafazakar Yahudiliğin kurucularından olan alim kimdir?
A) Moses Mendelssohn
B) Abraham Geiger
C) Zacharias Frankel
D) Isaac Mayer Wise
E) Solomon Schechter

96. Muhafazakar Yahudilik hangi düşünceye sahiptir?
A) Anti-Siyonist
B) Siyonist
C) Nötr
D) Diaspora yanlısı
E) Roma yanlısı

97. Karailik 8. yy'da nerede ve kim önderliğinde şekillenmiştir?
A) Kudüs - Hillel
B) Babil (Irak) - Anan ben David
C) İskenderiye - Philo
D) Roma - Josephus
E) Antakya - Barnaba

98. 'Karaim' kelimesi ne anlama gelir?
A) Gizli öğreti
B) Okuyucular
C) Hüküm verenler
D) Birlik
E) Beyazlık

99. Karailer kendilerini ayrıca nasıl adlandırır?
A) Bene ha-Talmud
B) Bene ha-Mikra (Tevrat'ın çocukları)
C) Bene Yisrael
D) Bene Avraham
E) Bene Kohen

100. Karailer neyi reddederek Rabbânîliğe karşı çıkmışlardır?
A) Tevrat'ı
B) Peygamberleri
C) Sözlü Tora'yı (Talmud)
D) On Emiri
E) Mabed ibadetini

101. Karailer Sadukilerden hangi konuda ayrılır?
A) Tevrat'ın yorumu
B) Kendi Tevrat yorumlarına dayanan ahiret inancı
C) Mabed ibadeti
D) Kurban kültü
E) Kohenlik sistemi

102. Karailerin ibadethanelerine ne ad verilir?
A) Sinagog
B) Mabed
C) Kenasa
D) Kilise
E) Cami

103. Günümüzde Karaîlerin çoğunluğu nerede yaşamaktadır?
A) İsrail ve ABD
B) Eski Sovyetler Birliği toprakları ve Polonya
C) Almanya ve Fransa
D) İngiltere ve Kanada
E) Arjantin ve Brezilya

104. Hristiyanlık hangi anlayış üzerine temellenir?
A) Tanrı'nın birliği
B) Îsâ Mesîh anlayışı (Kristosentrik)
C) Kutsal Ruh
D) Meryem Ana
E) Havariler

105. 'Christian' (Hristiyan) kelimesi Grekçe ne anlama gelir?
A) Tanrı'nın oğlu
B) Kutsal insan
C) Christos yanlısı
D) Peygamber takipçisi
E) Yasa uygulayıcı

106. İbranice'de 'kutsal yağ sürülmüş' anlamına gelen kelime hangisidir?
A) Rabbi
B) Kohen
C) Maşi'ah (Mesih)
D) Nabi
E) Sadık

107. İsa'ya inanlara ilk kez nerede 'Hristiyan' denmiştir?
A) Kudüs
B) Roma
C) İskenderiye
D) Antakya
E) Efes

108. İsevilik 'Hristiyanlık' olarak hangi tarihten sonra anılmaya başlanmıştır?
A) M.S. 30
B) M.S. 40
C) M.S. 70
D) M.S. 100
E) M.S. 313

109. Hristiyanlık hangi yüzyılda ve nerede ortaya çıkmıştır?
A) M.Ö. 1. yy - Mısır
B) M.S. 1. yy - Roma'ya bağlı Filistin
C) M.S. 2. yy - Yunanistan
D) M.S. 3. yy - Anadolu
E) M.S. 4. yy - Bizans

110. Günümüzde Hristiyanlığın yaklaşık kaç bağlısı vardır?
A) 500 milyon
B) 1 milyar
C) 1,5 milyar
D) 2,5 milyar
E) 3,5 milyar

111. İsa'nın dönemindeki başlıca Yahudi mezhepleri hangileridir?
A) Ortodokslar, Reformistler, Muhafazakarlar
B) Ferisiler, Sadukiler, Esseniler
C) Samiriler, Karailer, Hasidiler
D) Zelotlar, Sikaryolar, Herodiyanlar
E) Terapötler, Nasuriler, Ebionitler

112. Hristiyanlığın oluşumunda özellikle hangi Yahudi mezhebinin etkisi vardır?
A) Ferisiler
B) Sadukiler
C) Esseniler
D) Samiriler
E) Zelotlar

113. Paganist Roma dininin Hristiyanlığa etkisi ne olmuştur?
A) Tek tanrıcılık
B) Ölen ve dirilen tanrılar ile kurtuluş doktrini
C) Peygamberlik
D) Ahit kavramı
E) Seçilmiş halk

114. Hangisi Roma'daki Helenistik dinlerin ilahlarından DEĞİLDİR?
A) Attis
B) Kibele
C) Dionysos
D) Mithra
E) Yahve

115. Matta 16'ya göre İsa'yı 'Tanrı'nın Oğlu Mesih' olarak tanıyan havari kimdir?
A) Yuhanna
B) Yakup
C) Petrus
D) Andreas
E) Tomas

116. Hristiyan doktrinlerine göre İsa nasıl dünyaya gelmiştir?
A) Normal doğumla
B) Gökten inerek
C) Kutsal Ruh tarafından hamile bakire Meryem'den
D) Topraktan
E) Işıktan

117. Tarihsel İsa araştırmalarına göre İsa hangi yıllarda doğmuştur?
A) M.Ö. 10-12
B) M.Ö. 4-5
C) M.S. 1-2
D) M.S. 5-6
E) M.Ö. 20-25

118. İsa hangi bölgenin Nasıra kasabasından olan Meryem'den doğmuştur?
A) Yahudiye
B) Samirya
C) Galile
D) Perea
E) Dekapolis

119. İsa nerede dünyaya gelmiştir?
A) Nasıra
B) Kudüs
C) Beytlehem
D) Kapernaum
E) Yafa

120. İsa M.S. 28'de kim tarafından ve nerede vaftiz edilmiştir?
A) Petrus - Celile Gölü
B) Yahya - Ürdün Nehri
C) Yuhanna - Kudüs
D) Yakup - Ölüdeniz
E) Andreas - Akdeniz

121. İsa yaklaşık kaç yaşında tebliğ faaliyetlerine başlamıştır?
A) 20
B) 25
C) 30
D) 35
E) 40

122. İsa hangi yılda çarmıha gerilmiştir?
A) M.S. 27
B) M.S. 30
C) M.S. 33
D) M.S. 36
E) M.S. 40

123. İsa hangi suçlamalarla çarmıha gerilmiştir?
A) Hırsızlık
B) Kargaşa, anarşi ve isyan çıkarmak
C) Cinayet
D) Vergi kaçakçılığı
E) Casusluk

124. İsa'nın çağdaşı olup yazılarında İsa'dan bahsetmeyen Yahudi filozof kimdir?
A) Josephus
B) Philo
C) Tacitus
D) Suetonius
E) Pliny

125. Matta 15:24'e göre İsa kendisini nasıl tanımlamıştır?
A) Tüm insanlığın kurtarıcısı
B) Yalnız İsrail halkının kaybolmuş koyunlarına gönderilmiş
C) Roma'nın efendisi
D) Evrensel peygamber
E) Tanrı'nın kendisi

126. İsa etrafında kaç havari toplamıştır?
A) 7
B) 10
C) 12
D) 40
E) 70

127. İsa'nın vaazlarında vurguladığı temel mesaj neydi?
A) Roma'ya karşı savaş
B) Tanrı'nın krallığının yakın olduğu ve tövbe ederek teslim olmak
C) Yahudi hukukunun kaldırılması
D) Yeni din kurulması
E) Paganizmin kabulü

128. İsa özellikle hangi grupları sert şekilde eleştirmiştir?
A) Esseniler ve Zelotlar
B) Ferisiler ve Sadukiler
C) Samiriler ve Karailer
D) Herodiyanlar ve Sikaryolar
E) Terapötler ve Nasuriler

129. Matta 21:10'a göre halk İsa'yı nasıl tanımlamıştır?
A) Tanrı'nın Oğlu
B) Kral
C) Celile'nin Nasıra kentinden Peygamber İsa
D) Mesih
E) Rab

130. Pavlus hayatta iken İsa ile karşılaşmış mıdır?
A) Evet, havarisi idi
B) Hayır, ama havarisi olan tek kişidir
C) Evet, çarmıhta gördü
D) Hayır ve havari değildi
E) Evet, çocukluğunda tanıştı

131. Pavlus hangi Yahudi mezhebine mensuptu?
A) Saduki
B) Esseni
C) Ferisi
D) Zelot
E) Samiri

132. Pavlus hangi yılda ve nerede doğmuştur?
A) M.Ö. 5 - Kudüs
B) M.S. 10 - Tarsus
C) M.S. 5 - Antakya
D) M.Ö. 10 - Roma
E) M.S. 15 - İskenderiye

133. Pavlus hangi ülkenin vatandaşıydı?
A) Yunanistan
B) Mısır
C) Roma
D) Suriye
E) Yahudiye

134. Yeni Ahit'e göre Pavlus Hristiyan olmadan önce ne yapmıştır?
A) Hristiyanlara yardım
B) İlk Hristiyanlara eziyetlerde bulunmuştur
C) Romalılarla savaş
D) Mabedde görev
E) Münzevi yaşam

135. Pavlus nereye giderken İsa ile vizyonda konuşmuştur?
A) Kudüs
B) Roma
C) Şam
D) Antakya
E) Tarsus

136. 'Asli Günah' ve çarmıhta ölümle aklanma argümanı kime aittir?
A) Petrus
B) Yuhanna
C) Pavlus
D) Yakup
E) İsa

137. Pavlus hangi ifadeler yerine 'Tanrı Oğlu' kavramını ön plana çıkarmıştır?
A) Kurtarıcı, Rab
B) İnsanoğlu, Peygamber
C) Mesih, Kral
D) Öğretmen, Rabbi
E) Hakim, Yargıç

138. Pavlus İsa'yı şekillendirirken hangi mitolojilerden etkilenmiştir?
A) Sadece Yahudi geleneği
B) Yunan, Anadolu, Mısır ve Mezopotamya mitolojileri
C) Hint mitolojisi
D) Çin mitolojisi
E) Afrika mitolojileri

139. İsa'nın vaaz ettiği din hangi merkezlidir?
A) Kristosentrik
B) Teosentrik (Tanrı merkezli)
C) Eklesiyosentrik
D) Antroposentrik
E) Kosmosentrik

140. Pavlus Hristiyanlığının vurgusu nedir?
A) Tanrı'nın birliği
B) Yahudi hukuku
C) İsa'nın şahsında İlahi Oğul Rab Mesih (Kristosentrik)
D) Mabed ibadeti
E) Kurban kültü

141. İsa'nın ve Pavlus'un Yahudi hukukuna yaklaşımı arasındaki fark nedir?
A) Her ikisi de reddetmiştir
B) İsa bağlı kalmış, Pavlus geçersiz saymıştır
C) Pavlus daha katı uygulamıştır
D) Aynı yaklaşım
E) İsa tamamen reddetmiştir

142. Pavlus'a göre kurtuluşa ermek nasıl olacaktır?
A) Yahudi hukukuna uymakla
B) Kurban sunmakla
C) İsa-Mesih'e iman ile
D) Mabed ibadetiyle
E) Sünnet olmakla

143. Pavlus'un katkısıyla Hristiyanlık hangi karaktere bürünmüştür?
A) Roma karakteri
B) Mısır karakteri
C) Helenistik karakter
D) Pers karakteri
E) Babil karakteri

144. Pavlus yeni dini hangi bölgelere ulaştırmıştır?
A) Sadece Filistin
B) Sadece Mısır
C) Anadolu, Yunanistan, Makedonya ve Roma
D) Sadece Arabistan
E) Sadece Hindistan

145. 'Tanrı Oğlu' unvanı Kudüs cemaati için ne anlam taşımıştır?
A) İlahi varlık
B) Beşer anlamı (Mesihi anlam veya erdemli/dindar kimlik)
C) Tanrının kendisi
D) Melek
E) Yarı tanrı

146. 'Tanrı Oğlu' unvanı pagan dünyada nasıl anlaşılmıştır?
A) Beşer anlamında
B) Peygamber anlamında
C) İlahi anlam yüklenmiştir
D) Kral anlamında
E) Öğretmen anlamında

147. İsa'nın 'erdemli beşer'den 'ilahi varlık'a dönüşümünde en önemli etken nedir?
A) Roma imparatorunun kararı
B) Pavlus'un teolojik görüşleri
C) Yahudi din adamları
D) Havarilerin kararı
E) Meryem Ana'nın rolü

148. Şinasi Gündüz'e göre tarihsel İsa nasıl bir figürdür?
A) Tanrısal varlık
B) İlahi kurtarıcı
C) Eskatolojik elçi/uyarıcı, muvahhid ve sosyal devrimci
D) Roma'nın düşmanı
E) Askeri lider

149. Pavlus'un öğretilerindeki Mesih İsa nasıl tanımlanır?
A) Yahudi peygamberi
B) Varlık öncesi var olan tanrısal figür, Tanrı Oğlu, Rab, ölen ve dirilen tanrısal varlık
C) Sadece öğretmen
D) Politik lider
E) Askeri komutan

150. Pavlus'un Mesih figürünün tarihsel İsa ile ilişkisi nasıldır?
A) Tamamen aynıdır
B) Varoluşsal ve fonksiyonel açıdan ilişkisi yoktur
C) Kısmen benzer
D) Tarihsel İsa'nın devamı
E) Tarihsel İsa'yı tamamlar
`;

const rawDinler2Answers = `
1-C, 2-D, 3-E, 4-C, 5-C, 6-C, 7-A, 8-D, 9-C, 10-C, 11-B, 12-C, 13-D, 14-B, 15-C
16-C, 17-C, 18-B, 19-D, 20-C, 21-C, 22-B, 23-B, 24-B, 25-D, 26-C, 27-D, 28-B, 29-D, 30-C
31-C, 32-C, 33-C, 34-C, 35-D, 36-B, 37-B, 38-C, 39-C, 40-B, 41-B, 42-B, 43-C, 44-D, 45-D
46-D, 47-B, 48-C, 49-B, 50-C, 51-C, 52-C, 53-B, 54-B, 55-B, 56-B, 57-C, 58-C, 59-C, 60-B
61-B, 62-B, 63-B, 64-B, 65-B, 66-B, 67-C, 68-B, 69-C, 70-B, 71-C, 72-B, 73-B, 74-C, 75-B
76-C, 77-C, 78-D, 79-C, 80-C, 81-C, 82-C, 83-C, 84-B, 85-B, 86-B, 87-C, 88-B, 89-C, 90-D
91-B, 92-C, 93-C, 94-B, 95-C, 96-B, 97-B, 98-B, 99-B, 100-C, 101-B, 102-C, 103-B
104-B, 105-C, 106-C, 107-D, 108-B, 109-B, 110-D, 111-B, 112-C, 113-B, 114-E, 115-C,
116-C, 117-B, 118-C
119-C, 120-B, 121-C, 122-B, 123-B, 124-B, 125-B, 126-C, 127-B, 128-B, 129-C, 130-B,
131-C, 132-B, 133-C
134-B, 135-C, 136-C, 137-B, 138-B, 139-B, 140-C, 141-B, 142-C, 143-C, 144-C, 145-B,
146-C, 147-B, 148-C, 149-B, 150-B
`;