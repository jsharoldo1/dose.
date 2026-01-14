
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
    "id": "taquicardia-supraventricular",
    "category": "Cardiologia",
    "condition": "Taquicardia Supraventricular (Estável)",
    "tags": ["arritmia", "adenosina", "metoprolol", "coração acelerado"],
    "prescriptions": [
      { "drug": "Manobra Vagal", "dosage": "N/A", "route": "Físico", "frequency": "Tentativa inicial em pacientes estáveis e sem doença pulmonar grave." },
      { "drug": "Adenosina (6mg/2ml)", "dosage": "6mg (1 ampola)", "route": "IV Bolus Rápido", "frequency": "Seguido de flush 20ml SF + elevar membro. Se falha, dobrar para 12mg." },
      { "drug": "Metoprolol (5mg/5ml)", "dosage": "5mg", "route": "IV Lento", "frequency": "Repetir a cada 5 min até máx 15mg (3 ampolas) se necessário." }
    ],
    "clinicalNotes": "Se instabilidade (hipotensão, dor torácica, rebaixamento), proceder Cardioversão Elétrica Sincronizada."
  },
  {
    "id": "fibrilacao-atrial",
    "category": "Cardiologia",
    "condition": "Fibrilação Atrial / Flutter (Controle de Frequência)",
    "tags": ["arritmia", "fa", "metoprolol", "deslanosideo", "cedilanide"],
    "prescriptions": [
      { "drug": "Metoprolol (5mg/5ml)", "dosage": "5mg (1 ampola)", "route": "IV", "frequency": "Em 2 min. Repetir a cada 5 min até máx 20mg." },
      { "drug": "Deslanosídeo (0,4mg/2ml)", "dosage": "0,4 a 0,8mg (1-2 ampolas)", "route": "IV Lento", "frequency": "Dose única." },
      { "drug": "Verapamil (5mg/2ml)", "dosage": "5-10mg (1-2 ampolas)", "route": "IV", "frequency": "Em 2-5 min. Repetir após 30 min se necessário." }
    ],
    "clinicalNotes": "Atenção: Não cardioverter FA > 48h sem anticoagulação prévia (risco de trombo). Priorize controle de frequência."
  },
  {
    "id": "iam-sca",
    "category": "Cardiologia",
    "condition": "Síndrome Coronariana Aguda (IAM)",
    "tags": ["infarto", "dor no peito", "aas", "clopidogrel", "tridil"],
    "prescriptions": [
      { "drug": "AAS", "dosage": "300mg (3 cp)", "route": "VO", "frequency": "Dose de ataque (mastigar)." },
      { "drug": "Clopidogrel", "dosage": "300mg (4 cp) ou 600mg (8 cp)", "route": "VO", "frequency": "300mg se trombólise ou conservador; 600mg se Angioplastia primária." },
      { "drug": "Enoxaparina", "dosage": "1mg/kg", "route": "SC", "frequency": "De 12/12h. (Reduzir dose se >75 anos ou disfunção renal)." },
      { "drug": "Isordil", "dosage": "5mg", "route": "SL (Sublingual)", "frequency": "Se dor. Máximo 3 doses. Contraindicado se uso de viagra/tadalafila ou IAM de VD." },
      { "drug": "Nitroglicerina (Tridil)", "dosage": "5mcg/min (inicial)", "route": "IV Contínuo", "frequency": "Diluir 1 amp em 240ml SF. Titular conforme dor e PA." }
    ],
    "clinicalNotes": "Monitorar SatO2 (O2 se <90%). Morfina apenas se dor refratária (evitar se possível)."
  },
  {
    "id": "ic-descompensada",
    "category": "Cardiologia",
    "condition": "IC Descompensada / Edema Agudo de Pulmão",
    "tags": ["falta de ar", "furosemida", "lasix", "congestão"],
    "prescriptions": [
      { "drug": "Furosemida (20mg/2ml)", "dosage": "1 a 1,5mg/kg", "route": "IV em Bolus", "frequency": "Dose ataque. Manter balanço hídrico negativo." },
      { "drug": "Nitroprussiato (Nipride)", "dosage": "0,25 a 0,5mcg/kg/min", "route": "IV Contínuo", "frequency": "Diluir 1 amp (2ml) em 248ml SF. Fotossensível. Controlar PA rigorosamente." },
      { "drug": "VNI (Ventilação Não Invasiva)", "dosage": "CPAP ou BiPAP", "route": "Dispositivo", "frequency": "Fundamental no manejo inicial do EAP hipertensivo." }
    ],
    "clinicalNotes": "Objetivo: Vasodilatação e Diurese. Morfina caiu em desuso no EAP."
  }
];
