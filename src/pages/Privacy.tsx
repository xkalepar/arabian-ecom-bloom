
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">سياسة الخصوصية</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">مقدمة</h2>
              <p>
                نحن في متجر إبتكار نلتزم بحماية خصوصيتك وبياناتك الشخصية. هذه السياسة توضح كيفية جمعنا واستخدامنا وحماية معلوماتك الشخصية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">المعلومات التي نجمعها</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>المعلومات الشخصية مثل الاسم والبريد الإلكتروني ورقم الهاتف</li>
                <li>عنوان التوصيل ومعلومات الدفع</li>
                <li>سجل التصفح والمشتريات</li>
                <li>المعلومات التقنية مثل عنوان IP ونوع المتصفح</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">كيف نستخدم معلوماتك</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>معالجة الطلبات والمدفوعات</li>
                <li>التواصل معك بخصوص طلباتك</li>
                <li>تحسين خدماتنا وتجربة المستخدم</li>
                <li>إرسال العروض والتحديثات (بإذنك)</li>
                <li>الامتثال للمتطلبات القانونية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">مشاركة المعلومات</h2>
              <p>
                نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك مع:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>شركاء الشحن والتوصيل</li>
                <li>معالجات الدفع الآمنة</li>
                <li>مزودي الخدمات التقنية</li>
                <li>السلطات القانونية عند الضرورة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">أمان البيانات</h2>
              <p>
                نستخدم تدابير أمنية متقدمة لحماية معلوماتك الشخصية، بما في ذلك التشفير والوصول المحدود والمراقبة المستمرة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">حقوقك</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>الوصول إلى معلوماتك الشخصية</li>
                <li>تصحيح المعلومات غير الصحيحة</li>
                <li>حذف معلوماتك الشخصية</li>
                <li>إلغاء الاشتراك في الرسائل التسويقية</li>
                <li>تقييد معالجة بياناتك</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">ملفات تعريف الارتباط</h2>
              <p>
                نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا وتذكر تفضيلاتك. يمكنك إدارة إعدادات ملفات تعريف الارتباط من خلال متصفحك.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">التغييرات على هذه السياسة</h2>
              <p>
                قد نقوم بتحديث هذه السياسة من وقت لآخر. سنخطرك بأي تغييرات جوهرية عبر البريد الإلكتروني أو إشعار على الموقع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">التواصل معنا</h2>
              <p>
                إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>البريد الإلكتروني: contact@ebtkar.tech</li>
                <li>الهاتف: +218928666458</li>
                <li>العنوان: طرابلس، ليبيا</li>
              </ul>
            </section>

            <div className="border-t pt-6 text-sm">
              <p>آخر تحديث: يناير 2024</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
