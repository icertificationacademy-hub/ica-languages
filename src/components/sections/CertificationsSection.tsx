import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { certifications } from "@/data/site";

export default function CertificationsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">
              Certificaciones Internacionales
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-slate-900 mb-5"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Tu preparación tiene respaldo internacional
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              En ICA Languages, superarás tus metas con certificaciones oficiales de
              instituciones reconocidas mundialmente como Cambridge y la Alianza Francesa.
            </p>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <Link
                  key={cert.id}
                  href={cert.href}
                  className="flex items-center gap-4 p-4 bg-slate-50 hover:bg-blue-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-all group"
                >
                  <span className="text-3xl">{cert.icon}</span>
                  <div className="flex-1">
                    <p className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {cert.title}
                    </p>
                    <p className="text-sm text-slate-500">{cert.subtitle}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 text-white">
              <p
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Más de 130 países reconocen
              </p>
              <p className="text-blue-200 text-sm mb-8">
                las certificaciones que obtienes con nosotros.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {["KET", "PET", "FCE", "CAE", "DELF", "DALF"].map((exam) => (
                  <div
                    key={exam}
                    className="bg-white/10 backdrop-blur rounded-xl p-3 text-center"
                  >
                    <p className="font-bold text-lg">{exam}</p>
                    <p className="text-xs text-blue-200">Disponible</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/20 pt-6">
                <p className="text-sm text-blue-200 mb-4">
                  ¿Listo para certificarte? Agenda una asesoría gratuita.
                </p>
                <Link
                  href="/certificaciones/cambridge"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-900 font-semibold rounded-xl transition-all text-sm"
                >
                  Conocer más <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
