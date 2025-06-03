
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">الشروط والأحكام</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">القبول بالشروط</h2>
              <p>
                باستخدام موقع متجر إبتكار، فإنك توافق على هذه الشروط والأحكام. إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">تعريفات</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>"الموقع" يشير إلى متجر إبتكار الإلكتروني</li>
                <li>"نحن/الشركة" تشير إلى إدارة متجر إبتكار</li>
                <li>"العميل/المستخدم" يشير إلى مستخدم الموقع</li>
                <li>"الخدمة" تشير إلى خدمات البيع والتوصيل المقدمة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">استخدام الموقع</h2>
              <p>يجب عليك:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>تقديم معلومات صحيحة ودقيقة</li>
                <li>الحفاظ على سرية بيانات الحساب</li>
                <li>عدم استخدام الموقع لأغراض غير قانونية</li>
                <li>احترام حقوق الملكية الفكرية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">المنتجات والأسعار</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>نحتفظ بالحق في تغيير الأسعار دون إشعار مسبق</li>
                <li>الأسعار المعروضة تشمل جميع الضرائب المطبقة</li>
                <li>توفر المنتجات محدود وقابل للتغيير</li>
                <li>الصور المعروضة قد تختلف قليلاً عن المنتج الفعلي</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">الطلبات والدفع</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>جميع الطلبات تخضع لتأكيدنا وتوفر المنتجات</li>
                <li>نحتفظ بالحق في رفض أي طلب</li>
                <li>طرق الدفع المتاحة: الدفع عند الاستلام</li>
                <li>الأسعار نهائية وغير قابلة للتفاوض</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">التوصيل</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>مدة التوصيل: 2-5 أيام عمل</li>
                <li>رسوم التوصيل: 15 دينار ليبي</li>
                <li>التوصيل مجاني للطلبات فوق 100 دينار ليبي</li>
                <li>يجب وجود شخص لاستلام الطلب في العنوان المحدد</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">الإرجاع والاستبدال</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>يمكن إرجاع المنتجات خلال 14 يوم من الاستلام</li>
                <li>المنتجات يجب أن تكون في حالتها الأصلية</li>
                <li>تكاليف الإرجاع يتحملها العميل</li>
                <li>بعض المنتجات غير قابلة للإرجاع لأسباب صحية</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">الضمان</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>ضمان الجودة على جميع المنتجات</li>
                <li>ضمان الشركة المصنعة ساري المفعول</li>
                <li>نحن غير مسؤولين عن سوء الاستخدام</li>
                <li>العيوب المصنعية مغطاة بالضمان</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">المسؤولية</h2>
              <p>
                نحن غير مسؤولين عن أي أضرار مباشرة أو غير مباشرة نتيجة استخدام الموقع أو المنتجات، باستثناء ما ينص عليه القانون.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">القانون المطبق</h2>
              <p>
                هذه الشروط محكومة بالقانون الليبي، وأي نزاع سيتم حله في المحاكم المختصة في ليبيا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">التعديلات</h2>
              <p>
                نحتفظ بالحق في تعديل هذه الشروط في أي وقت. التعديلات ستكون سارية فور نشرها على الموقع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">التواصل</h2>
              <p>
                لأي استفسارات حول هذه الشروط:
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
