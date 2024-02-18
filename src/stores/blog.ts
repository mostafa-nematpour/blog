import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', () => {
  // i know this is not good idea
  const blogsData = ref([
    {
      id: 2,
      title: 'استقرار سایت با کمک GitHub Pages و cloudflare',
      slug: 'استقرار-سایت-با-کمک-github-pages-و-cloudflare',
      description: 'تازه فصل سوم سریال The Mandalorian رو تموم کردم و دنبال اسم برای دامنه سایت بودم. خب اولین اسمی که تو ذهنم اومد grogu بود که اسم اصلی baby yoda بود و در عین ناباوری دامنه رو کسی رزرو نکرده بود :) و این شد شروع خرید و اتصال دامنه به سایت، در این پست توضیحات بیشتری میدم.',
      body: '<p>تازه فصل سوم سریال The Mandalorian رو تموم کردم و دنبال اسم برای دامنه سایت بودم. خب اولین اسمی که تو ذهنم اومد grogu بود که اسم اصلی baby yoda بود و در عین ناباوری دامنه رو کسی رزرو نکرده بود :) و این شد شروع خرید و اتصال دامنه به سایت، در این پست توضیحات بیشتری میدم.</p> <h2 id="-grogu-ir">خرید دامنه grogu.ir</h2> <p>برای خرید دامنه باید توی <a href="https://nic.ir">nic.ir</a> اکانت داشته باشید و تایید هویت رو انجام بدین. من برای خرید دامنه از طریق <a href="https://www.iranserver.com/">ایران سرور</a> اقدام کردم و در کمال تعجب در مدت زمان دو تا سه ساعت خرید دامنه انجام شد و حتی می‌شد از خود ایرنیک ns ها رو در لحظه عوض کرد که خیلی برام عجیب بود چون خرید دامنه و ثبت اون توی دفعه‌های قبلی خرید، حداقل یکی دو روز طول می‌کشید.</p> <h2 id="-ns-dns-">ثبت NS ها برای تنظیم DNS سایت</h2> <p>برای هاستیگ سایت از سرویس هاستینگ استاتیک گیت‌هاب استفاده کردم که در ادامه بیشتر توضیح میدم. برای اتصال دامنه به هاست پروژه تو گیت‌هاب یه سری IP داده بود (من در این زمینه دانش کافی ندارم) که خب هر کاری کردم نتونستم توی ایرنیک در قسمت <strong>ردیف‌های کارگزار نام (NS)</strong> اضافه کنم، به پشتیبانی ایران سرور پیام دادم و نتیجه این شد که باید از سرویس DNS سایت <a href="https://cloudflare.com/">cloudflare</a> استفاده کنم.</p> <p>بعد از ثبت نام و اضافه کردن دامنه و ردیف‌های DNS همه چیز به درستی کار کرد.</p> <p>توی لینوکس با دستور <code>nslookup</code> میشه درخواست جستجوی DNS داد. برای مثال برای دامنه grogu.ir درخواست میدیم:</p> <pre><code><span class="hljs-variable">$ </span>nslookup grogu.ir</code></pre><p>نتیجه میشه:</p> <pre><code><span class="hljs-selector-tag">Server</span>:         5<span class="hljs-selector-class">.200</span><span class="hljs-selector-class">.200</span><span class="hljs-selector-class">.200</span> <br><span class="hljs-selector-tag">Address</span>:        5<span class="hljs-selector-class">.200</span><span class="hljs-selector-class">.200</span><span class="hljs-selector-class">.200</span><span class="hljs-selector-id">#53</span>  <br><br><span class="hljs-selector-tag">Non-authoritative</span> <span class="hljs-selector-tag">answer</span>: <br><span class="hljs-selector-tag">Name</span>:   <span class="hljs-selector-tag">grogu</span><span class="hljs-selector-class">.ir</span> <br><span class="hljs-selector-tag">Address</span>: 185<span class="hljs-selector-class">.199</span><span class="hljs-selector-class">.111</span><span class="hljs-selector-class">.153</span> <br><span class="hljs-selector-tag">Name</span>:   <span class="hljs-selector-tag">grogu</span><span class="hljs-selector-class">.ir</span> <br><span class="hljs-selector-tag">Address</span>: 185<span class="hljs-selector-class">.199</span><span class="hljs-selector-class">.109</span><span class="hljs-selector-class">.153</span> <br><span class="hljs-selector-tag">Name</span>:   <span class="hljs-selector-tag">grogu</span><span class="hljs-selector-class">.ir</span> <br><span class="hljs-selector-tag">Address</span>: 185<span class="hljs-selector-class">.199</span><span class="hljs-selector-class">.108</span><span class="hljs-selector-class">.153</span> <br><span class="hljs-selector-tag">Name</span>:   <span class="hljs-selector-tag">grogu</span><span class="hljs-selector-class">.ir</span> <br><span class="hljs-selector-tag">Address</span>: 185<span class="hljs-selector-class">.199</span><span class="hljs-selector-class">.110</span><span class="hljs-selector-class">.153</span> <br><span class="hljs-selector-tag">Name</span>:   <span class="hljs-selector-tag">grogu</span><span class="hljs-selector-class">.ir</span> <br><span class="hljs-selector-tag">Address</span>: 2606<span class="hljs-selector-pseudo">:50c0</span><span class="hljs-selector-pseudo">:8001</span><span class="hljs-selector-pseudo">::153</span> <br><span class="hljs-selector-tag">Name</span>:   <span class="hljs-selector-tag">grogu</span><span class="hljs-selector-class">.ir</span> <br><span class="hljs-selector-tag">Address</span>: 2606<span class="hljs-selector-pseudo">:50c0</span><span class="hljs-selector-pseudo">:8000</span><span class="hljs-selector-pseudo">::153</span> <br><span class="hljs-selector-tag">Name</span>:   <span class="hljs-selector-tag">grogu</span><span class="hljs-selector-class">.ir</span> <br><span class="hljs-selector-tag">Address</span>: 2606<span class="hljs-selector-pseudo">:50c0</span><span class="hljs-selector-pseudo">:8003</span><span class="hljs-selector-pseudo">::153</span> <br><span class="hljs-selector-tag">Name</span>:   <span class="hljs-selector-tag">grogu</span><span class="hljs-selector-class">.ir</span> <br><span class="hljs-selector-tag">Address</span>: 2606<span class="hljs-selector-pseudo">:50c0</span><span class="hljs-selector-pseudo">:8002</span><span class="hljs-selector-pseudo">::153</span> </code></pre><h2 id="github-pages">GitHub Pages</h2> <p> یکی از سرویس های پرکاربرد و خیلی خوب گیت‌هاب، GitHub Pages هست. برای مشاهده <a href="https://docs.github.com/en/pages">اسناد اون از این لینک</a> استفاده کنید. بطور کلی برای هر repo می‌تونید اون رو فعال کنید و امکان هاستینگ فایل های استاتیک رو در اختیارتون قرار میده. همچین برای استفاده از اون نیازی به دامنه اختصاصی ندارید و آدرسی با فرمت <code>‎http(s)://&lt;username&gt;.github.io/&lt;repository&gt;‎</code> در اختیارتون قرار میده. برای اتصال اون به دامنه اختصاصی باید IP هایی که توی داکیومنتش هست رو در بخش DNS Records سرویس دهنده DNS تون قرار بدید.</p> <img src="/image/cloudflare-dns-screenshot.png" width="2286" height="1213" alt="تصویری از رکورد های dns در سایت cloudflare.com"><br> <h2 id="-vuejs-vite">تنظیمات اضافی Vuejs و Vite</h2> <h3 id="vite">Vite</h3> <p>یکی از خوبی‌های GitHub Pages رایگان بودنش هست ولی در کنار خوبی‌هایی که داره مشکلاتی هم هست که باید رفع بشه. برای مثال GitHub Pages فقط دو پوشه <code>‎/ (root)</code> یا <code>‎/docs</code> رو برای نمایش محتوا ارائه میده که خب چون سورس اصلی سایت هم روی همین repo هست تنها انتخاب من <code>‎/docs</code> می‌تونست باشه. برای همین توی فایل <code>vite.config.ts</code> تنظیمات مربوط به پوشه خروجی رو تغییر دادم به <code>&#39;‎./docs&#39;</code> :</p>  <pre><code class="lang-2"><span class="hljs-selector-tag">export</span> <span class="hljs-selector-tag">default</span> <span class="hljs-selector-tag">defineConfig</span>({<br>   <span class="hljs-attribute">plugins</span>: [<br>     <span class="hljs-built_in">vue</span>(),<br>   ],<br>   resolve: {<br>     alias: {<br>       <span class="hljs-string">"@"</span>: <span class="hljs-built_in">fileURLToPath</span>(new URL(<span class="hljs-string">"./src"</span>, import.meta.url))<br>     }<br>   },<br>   <span class="hljs-selector-tag">build</span>: {<br>     <span class="hljs-attribute">outDir</span>: <span class="hljs-string">"./docs"</span><br>   }<br> }) </code></pre> <h3 id="vuejs">Vuejs</h3> <p>چون من از <code>vue-router</code> استفاده می‌کنم و توانایی تغییر تنظیمات وب‌سرور رو  ندارم تا درخواست‌های صفحات وب رو به <code>index.html</code> منتقل کنم فعلا باید از <code>vue-router</code> در حالت WebHashHistory استفاده کنم که به SEO سایت ضربه می‌زنه. هرچند فعلا هیچ محتوای خاصی نداریم که بخوام دنبال SEO باشم :) رویکرد پیشنهادی در این شرایط استفاده از فریمرک‌های SSG مثل <a href="https://vitepress.dev/">VitePress</a> هست، ولی ترجیح من استفاده از خود Vue هست تا در آینده، نگه‌داری وبلاگ راحت‌تر باشه.</p> <h2 id="-">سخن آخر</h2> <p>اینکه سایت به مرور در حال تکامل هست خیلی هیجان انگیزه. </p>  ',
      author: 'مصطفی نعمت‌پور',
      imageURL: '/image/github-page-image.png',
      imageAlt: 'متن hello world که روی یک تصویر با زمینه تیره نوشته شده',
      blogColor: '#1f2328',
      categories: [
        {
          id: 2,
          title: 'برنامه نویسی',
          color: ['#0f172a', '#717cdd']
        },
        {
          id: 3,
          title: 'GitHub',
          color: ['#1158c7', '#a371f7']
        },
        {
          id: 4,
          title: 'cloudflare',
          color: ['#f6821f', '#fbad41']
        },
      ]
    },
    {
      id: 1,
      title: 'سلام دنیا',
      slug: 'سلام-دنیا',
      description:
        'خیلی وقت بود که دوست داشتم وبلاگ خودم رو داشته باشم. یکی دوبار هم تلاش کردم ولی ادامه ندادم. دوست داشتم جایی جایی داشته باشم تا نظرات خودم رو بنویسم، شاید هم چند تا پست برای آموزش برنامه‌نویسی نوشتم.',
      body: '<p>خیلی وقت بود که دوست داشتم وبلاگ خودم رو داشته باشم. یکی دوبار هم تلاش کردم ولی ادامه ندادم. دوست داشتم جایی داشته باشم تا نظرات خودم رو بنویسم، شاید هم چند تا پست برای آموزش برنامه‌نویسی نوشتم.</p> <p>اما دلیل اصلی که تو این زمان شروع کردم به ساخت وبلاگ اینه که حس می‌کنم دارم بزرگ می‌شم، نه از اون نظر که دانش بسیاری کسب کردم و الان وقتشه که انتشارشون بدم. نه. فکر می‌کنم حافظه‌ام پر شده و هر خاطره جدید که میاد یه خاطره قدیمی رو پاک می‌کنه. انگار ظرفیت‌ش پر شده. شاید مسخره باشه ولی الان حس می‌کنم آدم خنگ‌تری هستم نسبت به چند سال قبل خودم. که البته اصلا منطقی نیست چون اندوخته‌های این چند مدت به علاوه اندوخته‌های قبلی‌ام باید باعث پیشرفت ذهنی بشه نه نقطه‌ای که الان هستم. بیخیال بیاین از اینا عبور کنیم.</p> <p>این پروژه وبلاگ با Vuejs درست شده و بخش زیادی از طرح بصری (همون دیزاین خودمون) از بلاگ گیت‌هاب کپی شده. فعلا هیچ بخش خاصی نداره که بخوام توضیح بدم، پس یکم در مورد تعریف خودم از وبلاگ صحبت می‌کنم.</p> <p>زمانی که من برای اولین بار به اینترنت دسترسی پیدا کردم، سال اول راهنماییم بود (الان شده متوسطه اول). در اون دوران ما با فیلتر شکن‌ها و روش‌های پیچیده‌ای که این روز ها با استفاده ازشون به اینترنت وصل می‌شیم آشنا نبودم. قهرمان اون زمان من موتورهای جستجویی مثل یاهو، گوگل و بینگ بودن که البته گوگل از بقیه بهتر بود. رفته رفته یاد گرفتم که چطور از چیزی که اون زمان بهش می‌گفتیم اینترنت استفاده کنم. سرچ می‌کردیم و توی سایت‌هایی که میاورد جوابم رو پیدا می‌کردیم و یا انقدر خوش شانس بودم که ساعت رولکس چند میلیون تومنی رو سی و نه هزار تومن برنده می‌شدم. تمام درک من هم از شبکه اجتماعی انجمن های فارسی زبانی بود که توشون عضو بودم.</p> <p>شاید بشه اون زمان رو روزهای آخر دوران باشکوه وبلاگ نویسی بیان کرد. و همچنین روزهای شروع جنگ کمپانی‌ها، که کدوم سریع تر گوشی با صفحه نمایش بزرگتر و تعداد هسته سی‌پی‌یو بیشتر به بازار می‌دن.<br>زمانی که دید انتقادی به ماهیت تکنولوژی های جدید هیچ جایگاهی بین ما نداشت.</p> <p>در این لحظه ساخت این بلاگ شاید ایده خوبیه، تا ببینیم چی پیش میاد :)</p> ',
      author: 'مصطفی نعمت‌پور',
      imageURL: '/image/hello-word-image.png',
      imageAlt: 'متن hello world که روی یک تصویر با زمینه تیره نوشته شده',
      blogColor: '#1f2328',
      categories: [
        {
          id: 1,
          title: 'عمومی',
          color: ['#42d392', '#647eff']
        }
      ]
    }
  ])
  function getBlog(id: Number) {
    return blogsData.value.find((item) => item.id === id)
  }

  return { blogsData, getBlog }
})
