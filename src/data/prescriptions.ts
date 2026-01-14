
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
    "tags": ["arritmia", "adenosina", "metoprolol", "coração acelerado", "tsv"],
    "prescriptions": [
      { "drug": "Manobra Vagal", "dosage": "N/A", "route": "Físico", "frequency": "Tentativa inicial em pacientes estáveis." },
      { "drug": "Adenosina", "dosage": "6mg", "route": "IV Bolus Rápido", "frequency": "Seguido de flush 20ml SF. Se falha, administrar 12mg." },
      { "drug": "Metoprolol", "dosage": "2.5-5mg", "route": "IV Lento", "frequency": "Repetir a cada 5 min até dose máxima de 15mg." }
    ],
    "clinicalNotes": "Em caso de instabilidade hemodinâmica (hipotensão, choque, dor torácica, dispneia), proceder com cardioversão elétrica sincronizada. Evitar em pacientes com doença pulmonar descompensada. Casos extremos podem cursar com assistolia."
  },
  {
    "id": "taquicardia-ventricular",
    "category": "Cardiologia",
    "condition": "Taquicardia Ventricular (TV)",
    "tags": ["arritmia", "tv", "amiodarona", "lidocaina"],
    "prescriptions": [
      { "drug": "Amiodarona (Ataque)", "dosage": "150mg", "route": "IV", "frequency": "Diluir em 100ml de SGI 5% e correr em 30 min." },
      { "drug": "Amiodarona (Manutenção)", "dosage": "450mg", "route": "IV em BIC", "frequency": "Diluir em 230ml SGI 5%, correr 16ml/h por 6h, depois 8ml/h por 18h." },
      { "drug": "Lidocaína 2% (opcional)", "dosage": "1.5 mg/kg", "route": "IV Lento", "frequency": "Se falha, repetir 0.5 mg/kg. Máx: 3-4 mg/kg." }
    ],
    "clinicalNotes": "Em pacientes instáveis, a cardioversão elétrica é o tratamento de escolha. Descontinuar amiodarona se ocorrer bloqueio AV."
  },
  {
    "id": "fibrilacao-atrial",
    "category": "Cardiologia",
    "condition": "Fibrilação Atrial (FA) / Flutter",
    "tags": ["arritmia", "fa", "flutter", "metoprolol", "verapamil", "deslanosideo", "amiodarona", "propafenona"],
    "prescriptions": [
      { "drug": "Metoprolol (Controle de Frequência)", "dosage": "5mg", "route": "IV", "frequency": "Em 2 min. Repetir a cada 5 min até máx 20mg." },
      { "drug": "Verapamil (Controle de Frequência)", "dosage": "5-10mg", "route": "IV", "frequency": "Em 2-5 min. Repetir após 30 min se necessário." },
      { "drug": "Deslanosídeo (Controle de Frequência)", "dosage": "0.4-0.8mg", "route": "IV Lento", "frequency": "Dose única." },
      { "drug": "Amiodarona (Cardioversão Química)", "dosage": "5-7 mg/kg", "route": "IV", "frequency": "Em 30-60 min, para reversão do ritmo." },
      { "drug": "Amiodarona (Pós-cardioversão)", "dosage": "300mg", "route": "VO", "frequency": "12/12h. Preferível em pacientes com IC." },
      { "drug": "Propafenona (Pós-cardioversão)", "dosage": "300mg", "route": "VO", "frequency": "12/12h. Preferível sem doença cardíaca estrutural." }
    ],
    "clinicalNotes": "Atenção à anticoagulação. Não cardioverter FA com mais de 48h sem exclusão de trombo atrial. Priorizar controle de frequência em pacientes estáveis. Em instáveis, realizar cardioversão elétrica."
  },
  {
    "id": "iam-sca",
    "category": "Cardiologia",
    "condition": "Síndrome Coronariana Aguda (SCA)",
    "tags": ["infarto", "iam", "dor no peito", "aas", "clopidogrel", "ticagrelor"],
    "prescriptions": [
      { "drug": "AAS", "dosage": "300mg", "route": "VO", "frequency": "Dose de ataque (mastigar)." },
      { "drug": "Ticagrelor", "dosage": "180mg", "route": "VO", "frequency": "Dose de ataque, seguido de 90mg 12/12h." },
      { "drug": "Clopidogrel", "dosage": "300-600mg", "route": "VO", "frequency": "Dose de ataque. Varia conforme estratégia (ICP ou conservador)." },
      { "drug": "Enoxaparina", "dosage": "1mg/kg", "route": "SC", "frequency": "De 12/12h. Ajustar dose para >75 anos ou disfunção renal." },
      { "drug": "Isordil", "dosage": "5mg", "route": "SL", "frequency": "Se dor. Máx 3 doses. Contraindicado em IAM de VD ou uso de sildenafil/tadalafil." },
      { "drug": "Nitroglicerina (Tridil)", "dosage": "5mcg/min (inicial)", "route": "IV Contínuo", "frequency": "Para dor persistente ou congestão. Titular conforme PA." },
      { "drug": "Atorvastatina", "dosage": "40mg", "route": "VO", "frequency": "Dose diária." }
    ],
    "clinicalNotes": "Monitorar SatO2 (O2 se <90%). Morfina apenas se dor refratária. Avaliar indicação de trombólise."
  },
  {
    "id": "trombolise-iam",
    "category": "Cardiologia",
    "condition": "Trombólise no IAM com Supra",
    "tags": ["trombolise", "infarto", "iam", "alteplase", "sca"],
    "prescriptions": [
      { "drug": "Alteplase", "dosage": "15mg bolus, depois 0.75mg/kg em 30min (máx 50mg), seguido de 0.5mg/kg em 60min (máx 35mg)", "route": "IV", "frequency": "Dose total máxima de 100mg." }
    ],
    "clinicalNotes": "Verificar contraindicações absolutas: AVC hemorrágico prévio, AVC isquêmico < 3 meses, lesão estrutural do SNC, cirurgia ou trauma grave recentes, sangramento ativo, suspeita de dissecção de aorta."
  },
  {
    "id": "ic-descompensada",
    "category": "Cardiologia",
    "condition": "IC Descompensada / Edema Agudo de Pulmão (EAP)",
    "tags": ["falta de ar", "furosemida", "lasix", "congestão", "eap", "ic", "nipride", "tridil", "dobutamina"],
    "prescriptions": [
      { "drug": "Furosemida", "dosage": "1 a 1.5mg/kg", "route": "IV em Bolus", "frequency": "Dose de ataque. Manter balanço hídrico negativo." },
      { "drug": "Nitroprussiato (Nipride)", "dosage": "0.25-0.5mcg/kg/min", "route": "IV Contínuo", "frequency": "Para vasodilatação. Controlar PA rigorosamente. Fotossensível." },
      { "drug": "Nitroglicerina (Tridil)", "dosage": "5mcg/min (inicial)", "route": "IV Contínuo", "frequency": "Alternativa ao Nipride. Titular conforme PA." },
      { "drug": "Dobutamina", "dosage": "2-20mcg/kg/min", "route": "IV Contínuo", "frequency": "Em caso de baixa perfusão (perfil frio e úmido)." },
      { "drug": "VNI (Ventilação Não Invasiva)", "dosage": "CPAP ou BiPAP", "route": "Dispositivo", "frequency": "Fundamental no manejo inicial do EAP hipertensivo." }
    ],
    "clinicalNotes": "Objetivo é otimizar volemia e perfusão. Morfina caiu em desuso no EAP. Classificar perfil hemodinâmico (quente/frio, seco/úmido) para guiar terapia."
  },
  {
    "id": "cefaleia-primaria",
    "category": "Neurologia",
    "condition": "Cefaleia Primária",
    "tags": ["dor de cabeça", "dipirona", "ibuprofeno", "paracetamol", "cetoprofeno"],
    "prescriptions": [
      { "drug": "Cetoprofeno (Profenid)", "dosage": "100mg", "route": "IV", "frequency": "Diluir em 100ml SF 0.9% e correr em 20 min." },
      { "drug": "Dexametasona", "dosage": "10mg", "route": "IV ou IM", "frequency": "Dose única." },
      { "drug": "Ibuprofeno", "dosage": "400mg", "route": "VO", "frequency": "Até de 6/6h." },
      { "drug": "Dipirona", "dosage": "1g", "route": "VO", "frequency": "De 6/6h." },
      { "drug": "Paracetamol", "dosage": "750mg", "route": "VO", "frequency": "De 8/8h." }
    ],
    "clinicalNotes": "Atentar para cefaleia por abuso de analgésicos. Descartar sinais de alarme antes de tratar."
  },
  {
    "id": "enxaqueca",
    "category": "Neurologia",
    "condition": "Enxaqueca Aguda",
    "tags": ["dor de cabeça", "enxaqueca", "sumatriptano", "naproxeno", "sumax"],
    "prescriptions": [
      { "drug": "Sumatriptano", "dosage": "6mg", "route": "SC", "frequency": "Pode repetir após 1h. Máximo 2 doses/dia." },
      { "drug": "Cetoprofeno (Profenid)", "dosage": "100mg", "route": "IV", "frequency": "Diluir em 100ml SF e correr em 20 min." },
      { "drug": "Dexametasona", "dosage": "10mg", "route": "IV ou IM", "frequency": "Dose única." },
      { "drug": "Sumatriptano + Naproxeno", "dosage": "50/500mg", "route": "VO", "frequency": "No início da crise. Repetir após 2h se necessário." },
      { "drug": "Naproxeno", "dosage": "500mg", "route": "VO", "frequency": "Até de 12/12h." }
    ],
    "clinicalNotes": "Sumatriptano SC é pouco disponível no PS. Atentar para cefaleia por abuso de analgésicos."
  },
  {
    "id": "vertigem",
    "category": "Neurologia",
    "condition": "Vertigem Aguda",
    "tags": ["tontura", "labirintite", "dramin", "cinarizina", "meclizina"],
    "prescriptions": [
      { "drug": "Dimenidrato + Piridoxina (Dramin B6)", "dosage": "50mg", "route": "IV ou VO", "frequency": "De 6/6h. IV causa sonolência." },
      { "drug": "Cinarizina", "dosage": "25mg", "route": "VO", "frequency": "De 8/8h." },
      { "drug": "Meclozina", "dosage": "50mg", "route": "VO", "frequency": "De 8/8h." }
    ],
    "clinicalNotes": "Medicamentos para suprimir o sistema vestibular: anti-histamínicos, benzodiazepínicos e antieméticos. Diferenciar vertigem central (AVC) de periférica."
  },
  {
    "id": "crise-convulsiva",
    "category": "Neurologia",
    "condition": "Crise Convulsiva / Status Epilepticus",
    "tags": ["convulsão", "ataque", "diazepam", "midazolam", "hidantal", "fenobarbital"],
    "prescriptions": [
      { "drug": "Diazepam (1º Passo)", "dosage": "10mg", "route": "IV Lento", "frequency": "Pode repetir 1x após 5 min se refratário." },
      { "drug": "Midazolam (Alternativa)", "dosage": "10mg", "route": "IM", "frequency": "Opção na falta de acesso venoso." },
      { "drug": "Fenitoína (Hidantal) (2º Passo)", "dosage": "5-10mg/kg", "route": "IV", "frequency": "Diluir em SF 0,9% (não usar SG!). Se refratário após 10 min." },
      { "drug": "Fenobarbital (3º Passo)", "dosage": "10mg/kg", "route": "IV", "frequency": "Diluir em SF 0,9%." },
      { "drug": "Intubação Orotraqueal (Refratário)", "dosage": "N/A", "route": "Procedimento", "frequency": "Com Midazolam, Propofol ou Tiopental." }
    ],
    "clinicalNotes": "Garantir via aérea pérvia e monitorização. Tratar causa base."
  },
  {
    "id": "agitacao-psicomotora",
    "category": "Psiquiatria",
    "condition": "Agitação Psicomotora / Agressividade",
    "tags": ["surto", "haldol", "fernegan", "contencao"],
    "prescriptions": [
      { "drug": "Haldol (Haloperidol)", "dosage": "5mg", "route": "IM", "frequency": "Antipsicótico incisivo." },
      { "drug": "Prometazina (Fenergan)", "dosage": "50mg", "route": "IM", "frequency": "Sedativo e previne distonia do Haldol." },
      { "drug": "Midazolam", "dosage": "5-15mg", "route": "IM", "frequency": "Se agitação extrema (risco p/ equipe)." }
    ],
    "clinicalNotes": "Combo 'Haldol 5 + Fenergan 50' IM é o padrão ouro. Evitar contenção física sem sedação."
  },
  {
    "id": "crise-asmatica",
    "category": "Respiratório",
    "condition": "Crise Asmática / Broncoespasmo",
    "tags": ["asma", "aerolin", "berotec", "falta de ar"],
    "prescriptions": [
      { "drug": "Salbutamol (Aerolin) Spray", "dosage": "4 a 10 jatos", "route": "Inalatório", "frequency": "A cada 20 min na 1ª hora (com espaçador)." },
      { "drug": "Ipratrópio (Atrovent)", "dosage": "4 jatos (ou 40 gotas nebu)", "route": "Inalatório", "frequency": "Adjuvante na crise moderada/grave." },
      { "drug": "Prednisolona", "dosage": "40-60mg", "route": "VO", "frequency": "Dose única ou Hidrocortisona 200mg IV se grave." },
      { "drug": "Sulfato de Magnésio", "dosage": "2g", "route": "IV", "frequency": "Em 20 min (Crise Grave/Refratária)." }
    ],
    "clinicalNotes": "Oxigênio para manter Sat > 93-95%."
  },
  {
    "id": "pneumonia-comunidade",
    "category": "Respiratório",
    "condition": "Pneumonia Adquirida na Comunidade (PAC)",
    "tags": ["infecção", "clavulin", "azitromicina", "ceftriaxona"],
    "prescriptions": [
      { "drug": "Amoxicilina + Clavulanato", "dosage": "875+125mg", "route": "VO", "frequency": "12/12h por 7 dias (Ambulatorial)." },
      { "drug": "Azitromicina", "dosage": "500mg", "route": "VO", "frequency": "1x ao dia por 5 dias (Associação ou monoterapia se leve)." },
      { "drug": "Ceftriaxona", "dosage": "1g a 2g", "route": "IV", "frequency": "1x ao dia (Internação) + Claritromicina 500mg 12/12h." }
    ],
    "clinicalNotes": "Usar CURB-65 para decidir internação."
  },
  {
    "id": "itu-cistite",
    "category": "Infectologia",
    "condition": "Infecção Urinária (Cistite / Pielonefrite)",
    "tags": ["dor urinar", "monuril", "cipro", "rocefin"],
    "prescriptions": [
      { "drug": "Fosfomicina (Monuril)", "dosage": "3g", "route": "VO", "frequency": "Dose Única (Cistite não complicada)." },
      { "drug": "Nitrofurantoína", "dosage": "100mg", "route": "VO", "frequency": "6/6h por 5-7 dias (Cistite)." },
      { "drug": "Ceftriaxona", "dosage": "1g", "route": "IV", "frequency": "1x ao dia (Pielonefrite)." },
      { "drug": "Ciprofloxacino", "dosage": "500mg", "route": "VO", "frequency": "12/12h (Opção para Pielonefrite, evitar na cistite simples)." }
    ],
    "clinicalNotes": "Solicitar urocultura em casos de pielonefrite ou recorrência."
  }
];
