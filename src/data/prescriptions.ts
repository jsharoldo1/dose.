export type Prescription = {
  drug: string;
  dosage: string;
  route: string;
  frequency: string;
};

export type PrescriptionData = {
  id: string;
  category: string;
  condition: string;
  tags: string[];
  prescriptions: Prescription[];
  clinicalNotes: string;
};

export const prescriptionsData: PrescriptionData[] = [
  {
    id: "hipertensao-urgencia",
    category: "Cardiologia",
    condition: "Crise Hipertensiva (Urgência)",
    tags: ["pressão alta", "captopril", "clonidina", "hipertensão"],
    prescriptions: [
      { drug: "Captopril", dosage: "25mg a 50mg", route: "VO (sublingual é proscrito)", frequency: "Dose única. Reavaliar em 30-60min." },
      { drug: "Clonidina", dosage: "0.1mg a 0.2mg", route: "VO", frequency: "Repetir a cada hora se necessário. Máx 0.6mg." }
    ],
    clinicalNotes: "Indicado para pacientes assintomáticos ou oligossintomáticos. O objetivo é a redução gradual da Pressão Arterial (PA) em 24-48h, não a normalização imediata."
  },
  {
    id: "hipertensao-emergencia",
    category: "Cardiologia",
    condition: "Crise Hipertensiva (Emergência)",
    tags: ["pressão alta", "nitroprussiato", "avc", "iam", "eap", "uti"],
    prescriptions: [
      { drug: "Nitroprussiato de Sódio", dosage: "0.25 a 10 mcg/kg/min", route: "IV em bomba de infusão contínua", frequency: "Titular dose para atingir alvo de PA." }
    ],
    clinicalNotes: "Indicado na presença de lesão de órgão-alvo (Ex: AVC, IAM, EAP, dissecção de aorta). Requer monitorização em UTI. Reduzir PA em no máximo 25% na primeira hora."
  },
  {
    id: "hemorroida-crise",
    category: "Proctologia",
    condition: "Hemorroida (Manejo de Crise)",
    tags: ["hemorroida", "daflon", "diosmina", "analgesia", "dor", "procto"],
    prescriptions: [
      { drug: "Diosmina + Hesperidina", dosage: "1000mg", route: "VO", frequency: "3x/dia por 4 dias, depois 2x/dia por 3 dias." },
      { drug: "Analgésicos e AINEs", dosage: "Dipirona 1g ou Ibuprofeno 400mg", route: "VO", frequency: "Até de 6/6h, se dor." },
      { drug: "Laxante Suave", dosage: "Óleo Mineral 15-30mL ou Lactulose 15-30mL", route: "VO", frequency: "1x ao dia, preferencialmente à noite." }
    ],
    clinicalNotes: "Manejo complementar: banho de assento com água morna (3-4x/dia), dieta rica em fibras, aumento da ingestão hídrica e evitar trauma local (ex: papel higiênico)."
  },
  {
    id: "vertigem-aguda",
    category: "Neurologia",
    condition: "Vertigem Aguda / Crise Labiríntica",
    tags: ["tontura", "labirintite", "dramin", "cinarizina", "vertizine", "meclizina", "vppb"],
    prescriptions: [
      { drug: "Dimenidrinato + Piridoxina (Dramin B6)", dosage: "50mg + 10mg", route: "VO / IM / IV", frequency: "Até de 6/6h, conforme sintomas." },
      { drug: "Cinarizina (Stugeron)", dosage: "25mg a 75mg", route: "VO", frequency: "Até 3x ao dia." },
      { drug: "Meclizina (Meclin)", dosage: "25mg a 50mg", route: "VO", frequency: "1 a 2x ao dia." }
    ],
    clinicalNotes: "Sempre investigar sinais de alarme para AVC de fossa posterior (diplopia, disartria, dismetria, ataxia de membros). A Manobra de Epley pode ser diagnóstica e terapêutica na VPPB."
  }
];
