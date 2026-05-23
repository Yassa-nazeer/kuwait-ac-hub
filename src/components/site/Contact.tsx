import { motion } from "motion/react";
import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_BASE = "https://wa.me/96565954080";

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", area: "", service: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("الرجاء إدخال الاسم ورقم الهاتف");
      return;
    }
    setLoading(true);
    const msg = `طلب جديد من الموقع:\nالاسم: ${form.name}\nالهاتف: ${form.phone}\nالمنطقة: ${form.area}\nالخدمة: ${form.service}`;
    const url = `${WHATSAPP_BASE}?text=${encodeURIComponent(msg)}`;
    setTimeout(() => {
      window.open(url, "_blank");
      toast.success("جارٍ تحويلك للواتساب لإتمام الطلب");
      setLoading(false);
      setForm({ name: "", phone: "", area: "", service: "" });
    }, 400);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-block glass rounded-full px-4 py-1.5 text-xs font-bold text-accent mb-4">تواصل معنا</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">احصل على <span className="text-gradient">تقييم مجاني</span> الآن</h2>
          <p className="text-muted-foreground text-lg">املأ النموذج وسنتواصل معك خلال دقائق.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <motion.form
            onSubmit={submit}
            initial={{opacity:0, x:20}}
            whileInView={{opacity:1, x:0}}
            viewport={{once:true}}
            className="lg:col-span-3 glass-strong rounded-3xl p-8 shadow-elegant space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="الاسم الكامل" value={form.name} onChange={v => setForm({...form, name:v})} placeholder="أدخل اسمك" />
              <Field label="رقم الهاتف" value={form.phone} onChange={v => setForm({...form, phone:v})} placeholder="65xxxxxx" type="tel" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">المنطقة</label>
              <select value={form.area} onChange={e => setForm({...form, area:e.target.value})} className="w-full glass rounded-xl px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-accent">
                <option value="" className="bg-card">اختر المنطقة</option>
                {["حولي","الفروانية","الجهراء","الأحمدي","العاصمة","مبارك الكبير"].map(a => <option key={a} value={a} className="bg-card">{a}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">الخدمة المطلوبة</label>
              <select value={form.service} onChange={e => setForm({...form, service:e.target.value})} className="w-full glass rounded-xl px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-accent">
                <option value="" className="bg-card">اختر الخدمة</option>
                {["شراء مكيفات مستعملة","شراء سكراب","بيع مكيفات مستعملة","فك ونقل","صيانة وتنظيف"].map(a => <option key={a} value={a} className="bg-card">{a}</option>)}
              </select>
            </div>
            <button disabled={loading} type="submit" className="w-full gradient-primary text-primary-foreground py-4 rounded-2xl font-extrabold shadow-glow hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 disabled:opacity-60">
              <Send className="w-5 h-5" />
              {loading ? "جارٍ الإرسال..." : "أرسل الطلب الآن"}
            </button>
          </motion.form>

          <motion.div initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="lg:col-span-2 space-y-4">
            <a href="tel:65954080" className="block glass-strong rounded-3xl p-6 shadow-card hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl gradient-primary grid place-items-center shadow-glow"><Phone className="w-7 h-7 text-primary-foreground" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">اتصل بنا</div>
                  <div className="text-xl font-black text-gradient">65954080</div>
                </div>
              </div>
            </a>
            <a href={`${WHATSAPP_BASE}?text=${encodeURIComponent("مرحبا، أرغب بالاستفسار")}`} target="_blank" rel="noopener" className="block glass-strong rounded-3xl p-6 shadow-card hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[var(--whatsapp)] grid place-items-center shadow-card"><MessageCircle className="w-7 h-7 text-white" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">واتساب</div>
                  <div className="text-xl font-black text-foreground">دردشة فورية</div>
                </div>
              </div>
            </a>
            <div className="glass-strong rounded-3xl p-6 shadow-card">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-14 h-14 rounded-2xl glass grid place-items-center"><MapPin className="w-7 h-7 text-accent" /></div>
                <div>
                  <div className="text-xs text-muted-foreground">موقعنا</div>
                  <div className="text-base font-extrabold text-foreground">دولة الكويت • جميع المناطق</div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-border h-40">
                <iframe
                  title="map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=47.5%2C28.9%2C48.4%2C29.6&layer=mapnik"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type="text" }: { label:string; value:string; onChange:(v:string)=>void; placeholder?:string; type?:string }) {
  return (
    <div>
      <label className="block text-sm font-bold mb-2">{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} className="w-full glass rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 outline-none focus:ring-2 focus:ring-accent" />
    </div>
  );
}
