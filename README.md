### Gerekli Kurulumlar

* Angular 12+
* Node
* Json-Server

## Nasıl Çalıştırılır?

> #### Projenin çalıştırabilmesi için aşağıdaki komutların çalıştırılması gerekmektedir:
* `npm install`
* `npm install -g json-server`
> #### Ardından uygulamanın çalışır hale gelebilmesi için aşağıdaki kod parçaları ayrı terminallerde çalıştırılmalıdır:
* `ng serve`
* `npm run server (içinde veri olan json file için)` - `npm run server2 (içinde veri olmayan json file için)`
> #### Bu komutların ardından uygulama *[localhost:4200](http://localhost:4200/)* portunda çalışır hale gelmektedir.


## Uygulama Ne Yapar?
* *[localhost:4200/anasayfa](http://localhost:4200/anasayfa)* adresinde müşteri , araç , randevu ve iş emirleri sayınızı görüntüleyip tıklayarak ilgili sayfalara gidebilirsiniz.
* *[localhost:4200/musteriler](http://localhost:4200/musteriler)* adresinden müşterilerinizi listeleyebilirsiniz. İlgili müşteriye tıklayarak açılan panelden müşteriye ait araçları görüntüleyebilir ve müşteriye bağlı araçlardan randevu ekleyebilir veya anlık iş emri oluşturabilirsiniz.
* *[localhost:4200/musteri-ekle](http://localhost:4200/musteri-ekle)* adresinden müşteri ekleyebilirsiniz.
* *[localhost:4200/araclar](http://localhost:4200/araclar)* adresinden sistemde bulunan tüm araçları listeleyebilirsiniz.
* *[localhost:4200/arac-ekle](http://localhost:4200/arac-ekle)* adresinden araç eklemek istediğiniz müşterinin telefon numarasını girerek o müşteriye araç ekleyebilirsiniz.
* *[localhost:4200/randevular](http://localhost:4200/randevular)* adresinden oluşturduğunuz randevuları görebilir ve istediğiniz randevudan iş emri oluşturabilirsiniz.
* *[localhost:4200/is-emirleri](http://localhost:4200/is-emirleri)* adresinden oluşturduğunuz iş emirlerini görüntüleyebilirsiniz. Anlık oluşturulan iş emirlerinde saat ve tarih bilgisi gözükmez.
