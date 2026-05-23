import { Phone, MessageCircle, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative pt-16 pb-8 border-t border-border/50 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary grid place-items-center shadow-glow">
                <span className="text-primary-foreground font-black">ك</span>
              </div>
              <div>
                <div className="font-extrabold text-foreground">الكويت للمكيفات المستعملة</div>
                <div className="text-xs text-muted-foreground">والسكراب • منذ سنوات</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              نحن الخيار الأول في الكويت لشراء وبيع المكيفات المستعملة وسكراب التكييف. خدمة احترافية، أسعار مميزة، وتغطية لكل المناطق.
            </p>
          </div>
          <div>
            <h4 className="font-extrabold mb-4 text-foreground">روابط سريعة</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-accent">خدماتنا</a></li>
              <li><a href="#why" className="hover:text-accent">لماذا نحن</a></li>
              <li><a href="#gallery" className="hover:text-accent">المعرض</a></li>
              <li><a href="#contact" className="hover:text-accent">اتصل بنا</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold mb-4 text-foreground">تواصل</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="tel:65954080" className="flex items-center gap-2 text-foreground hover:text-accent"><Phone className="w-4 h-4" /> 65954080</a></li>
              <li><a href="https://wa.me/96565954080" className="flex items-center gap-2 text-foreground hover:text-accent"><MessageCircle className="w-4 h-4" /> واتساب</a></li>
              <li className="flex items-center gap-2 text-muted-foreground"><MapPin className="w-4 h-4" /> دولة الكويت</li>
            </ul>
            <div className="flex gap-2 mt-4">
              {[Facebook, Instagram, Twitter].map((I,i) => (
                <a key={i} href="#" aria-label="social" className="w-9 h-9 rounded-lg glass grid place-items-center hover:bg-white/10"><I className="w-4 h-4" /></a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-border/50 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} الكويت للمكيفات المستعملة والسكراب. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
