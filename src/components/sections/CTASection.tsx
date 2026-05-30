import Link from "next/link";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function CTASection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 rounded-3xl p-10 sm:p-14 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 10% 50%, rgba(255,255,255,0.3) 0%, transparent 40%),
                                radial-gradient(circle at 90% 20%, rgba(245,158,11,0.5) 0%, transparent 40%)`,
            }}
          />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                ¡Comienza tu aventura lingüística hoy!
              </h2>
              <p className="text-blue-200 text-lg leading-relaxed mb-8">
                Agenda tu clase muestra gratuita y descubre por qué cientos de estudiantes
                confían en ICA Languages para dominar el inglés y el francés.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hola, me interesa agendar una clase muestra gratuita`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold rounded-xl transition-all shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Agendar por WhatsApp
                </Link>
                <Link
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Llamar ahora
                </Link>
              </div>
            </div>

            {/* Right — Contact info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-lg mb-4">Información de Contacto</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-sm">Dirección</p>
                  <p className="text-blue-200 text-sm">{siteConfig.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <p className="font-medium text-sm">Teléfono / WhatsApp</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-blue-200 text-sm hover:text-white transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-blue-200 text-sm hover:text-white transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="pt-3 border-t border-white/20">
                <p className="text-xs text-blue-300">
                  Horario de atención: Lunes a Viernes 8:00 AM – 8:00 PM · Sábados 9:00 AM – 2:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
