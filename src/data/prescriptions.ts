
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
    "id": "acatasia",
    "category": "Psiquiatria",
    "condition": "Acatisia",
    "tags": ["inquietação", "propranolol", "clonazepam", "biperideno"],
    "prescriptions": [
      { "drug": "Propranolol", "dosage": "10mg", "route": "VO", "frequency": "2x ao dia. Pode aumentar até 60mg/dia." },
      { "drug": "Clonazepam", "dosage": "0,5 a 2,5mg", "route": "VO", "frequency": "Dose diária." },
      { "drug": "Lorazepam", "dosage": "0,5mg", "route": "VO", "frequency": "2x ao dia. Dose máxima 6-10mg/dia." }
    ],
    "clinicalNotes": "Contraindicado em asma e DPOC. Avaliar retirada do agente causador (geralmente antipsicóticos)."
  },
  {
    "id": "agitacao-psicomotora",
    "category": "Psiquiatria",
    "condition": "Agressividade e Agitação Psicomotora",
    "tags": ["surto", "haldol", "fernegan", "clorpromazina", "midazolam"],
    "prescriptions": [
      { "drug": "Clorpromazina (se verbalmente manejável)", "dosage": "25mg", "route": "VO", "frequency": "A cada 30min até tranquilização (máx 2g/dia)." },
      { "drug": "Haloperidol + Prometazina (se não manejável)", "dosage": "5mg + 50mg", "route": "IM ou EV", "frequency": "Pode repetir a cada 30 min (máx 3x)." },
      { "drug": "Midazolam", "dosage": "15mg", "route": "IM", "frequency": "0,5 ampola se necessário." }
    ],
    "clinicalNotes": "O combo Haloperidol + Prometazina é uma abordagem clássica e eficaz para agitação severa."
  },
  {
    "id": "alergias",
    "category": "Imunologia",
    "condition": "Alergias",
    "tags": ["loratadina", "desloratadina", "hidroxizina", "prometazina", "hidrocortisona", "dexametasona"],
    "prescriptions": [
      { "drug": "Loratadina", "dosage": "10mg", "route": "VO", "frequency": "1x ao dia à noite por 5-7 dias." },
      { "drug": "Desloratadina", "dosage": "5mg", "route": "VO", "frequency": "1-2x ao dia." },
      { "drug": "Hidroxizina", "dosage": "25mg", "route": "VO", "frequency": "1x ao dia à noite." },
      { "drug": "Prometazina", "dosage": "25mg", "route": "IM", "frequency": "Pode repetir após 2 horas. Evitar IV." },
      { "drug": "Hidrocortisona", "dosage": "1 ampola", "route": "IV diluída ou IM", "frequency": "Dose única." },
      { "drug": "Dexametasona", "dosage": "1 ampola", "route": "IV diluída ou IM", "frequency": "Dose única." }
    ],
    "clinicalNotes": "Desloratadina tem menor efeito de sonolência. Prometazina IV tem risco de gangrena por extravasamento."
  },
  {
    "id": "aminas-vasoativas",
    "category": "Terapia Intensiva",
    "condition": "Aminas Vasoativas (Guia Rápido)",
    "tags": ["choque", "noradrenalina", "dobutamina", "vasopressina", "uti", "dopamina", "nitroglicerina", "nitroprussiato"],
    "prescriptions": [
      { "drug": "Noradrenalina", "dosage": "0,05-2 mcg/kg/min", "route": "IV Contínuo", "frequency": "Diluir 5 ampolas (20ml) em 180ml SG 5%." },
      { "drug": "Dobutamina", "dosage": "2-20 mcg/kg/min", "route": "IV Contínuo", "frequency": "Diluir 2 ampolas (40ml) em 210ml SF." },
      { "drug": "Nitroglicerina (Tridil)", "dosage": "5 mcg/min (inicial)", "route": "IV Contínuo", "frequency": "Diluir 1 ampola (10ml) em 240ml SF." },
      { "drug": "Nitroprussiato de Sódio (Nipride)", "dosage": "0,25-0,5 mcg/kg/min (inicial)", "route": "IV Contínuo", "frequency": "Diluir 1 ampola (2ml) em 248ml SF." },
      { "drug": "Dopamina", "dosage": "N/A", "route": "IV Contínuo", "frequency": "Diluir 5 ampolas em 200ml SF/SG 5%." },
      { "drug": "Vasopressina", "dosage": "0,01-0,04 U/min", "route": "IV Contínuo", "frequency": "Diluir 3 ampolas (60UI) em 57ml SG 5%/SF." }
    ],
    "clinicalNotes": "Requer acesso venoso central e monitorização arterial invasiva (PAI) para titulação segura."
  },
  {
    "id": "analgesicos-gerais",
    "category": "Dor",
    "condition": "Analgésicos (Guia Rápido)",
    "tags": ["dor", "dipirona", "paracetamol", "tramadol", "morfina", "cetoprofeno", "ibuprofeno", "diclofenaco", "naproxeno", "torsilax"],
    "prescriptions": [
      { "drug": "Dipirona", "dosage": "1g", "route": "VO/IV", "frequency": "6/6h." },
      { "drug": "Paracetamol", "dosage": "750mg", "route": "VO", "frequency": "6/6h." },
      { "drug": "Cetoprofeno", "dosage": "100mg IV / 150mg VO", "route": "IV/VO", "frequency": "IV: Diluir em 100ml SF. VO: 12/12h máx 5 dias." },
      { "drug": "Tramadol", "dosage": "50-100mg", "route": "IV", "frequency": "Diluir em 100ml SF, correr em 30 min." },
      { "drug": "Morfina", "dosage": "2-5mg (0,1mg/kg)", "route": "IV", "frequency": "Dose de resgate para dor intensa." },
      { "drug": "Ibuprofeno", "dosage": "400mg", "route": "VO", "frequency": "Até 6/6h, máx 5 dias." },
      { "drug": "Diclofenaco", "dosage": "50mg", "route": "VO", "frequency": "12/12h, máx 5 dias." },
      { "drug": "Naproxeno", "dosage": "500mg", "route": "VO", "frequency": "Até 12/12h." },
      { "drug": "Torsilax (ou similar)", "dosage": "1 cp", "route": "VO", "frequency": "8/8h ou 12/12h, máx 7 dias." }
    ],
    "clinicalNotes": "Escalonar analgesia conforme a intensidade da dor. Cuidado com AINEs em pacientes com risco renal ou gastrointestinal."
  },
  {
    "id": "anemia-ferropriva",
    "category": "Hematologia",
    "condition": "Anemia Ferropriva",
    "tags": ["anemia", "ferro", "sulfato ferroso", "noripurum"],
    "prescriptions": [
      { "drug": "Sulfato Ferroso", "dosage": "300mg (60mg Fe elementar)", "route": "VO", "frequency": "1-3x/dia, antes das refeições." },
      { "drug": "Hidróxido Férrico (Noripurum)", "dosage": "100-200mg", "route": "IV", "frequency": "Diluir em 250ml SF e infundir em 30 min. 1-3x/semana." }
    ],
    "clinicalNotes": "Reposição oral é preferencial. Evitar laticínios junto com o ferro. A reposição IV é para casos de intolerância ou má absorção."
  },
  {
    "id": "crise-ansiedade-panico",
    "category": "Psiquiatria",
    "condition": "Ansiedade Aguda e Crise de Pânico",
    "tags": ["ansiedade", "pânico", "clonazepam", "lorazepam", "diazepam", "alprazolam"],
    "prescriptions": [
      { "drug": "Clonazepam", "dosage": "2mg", "route": "VO", "frequency": "Manutenção: 0,25 a 4 mg/dia." },
      { "drug": "Lorazepam", "dosage": "0,5 a 2mg", "route": "VO", "frequency": "Manutenção: 2 a 3 mg/dia." },
      { "drug": "Diazepam", "dosage": "5 a 10mg", "route": "VO", "frequency": "Manutenção: 5 a 40 mg/dia." },
      { "drug": "Alprazolam", "dosage": "0,25 a 1mg", "route": "VO", "frequency": "Manutenção: 0,5 a 4 mg/dia." }
    ],
    "clinicalNotes": "Benzodiazepínicos são para alívio agudo. O tratamento a longo prazo deve envolver ISRS e terapia."
  },
  {
    "id": "antimicrobianos-gerais",
    "category": "Infectologia",
    "condition": "Antimicrobianos (Guia Rápido)",
    "tags": ["antibiótico", "infecção", "penicilina", "ceftriaxona", "ciprofloxacino", "amoxicilina", "clavulanato", "cefuroxima", "azitromicina", "claritromicina", "levofloxacino", "fosfomicina", "piperacilina", "tazobactam", "bactrim", "doxiciclina", "meropenem", "metronidazol"],
    "prescriptions": [
      { "drug": "Amoxicilina+Clavulanato", "dosage": "500+125mg ou 875+125mg", "route": "VO", "frequency": "8/8h ou 12/12h." },
      { "drug": "Penicilina Benzatina", "dosage": "1.2 Milhões UI", "route": "IM", "frequency": "Dose única." },
      { "drug": "Cefuroxima", "dosage": "500mg", "route": "VO", "frequency": "12/12h." },
      { "drug": "Ceftriaxona", "dosage": "1-2g", "route": "IV", "frequency": "24/24h." },
      { "drug": "Cefepima", "dosage": "1g", "route": "IV", "frequency": "12/12h." },
      { "drug": "Azitromicina", "dosage": "500mg", "route": "VO", "frequency": "24/24h." },
      { "drug": "Claritromicina", "dosage": "500mg", "route": "VO", "frequency": "12/12h." },
      { "drug": "Ciprofloxacino", "dosage": "500mg VO ou 400mg IV", "route": "VO/IV", "frequency": "12/12h." },
      { "drug": "Levofloxacino", "dosage": "750mg VO ou 500mg IV", "route": "VO/IV", "frequency": "24/24h." },
      { "drug": "Fosfomicina", "dosage": "3g", "route": "VO", "frequency": "Dose única." },
      { "drug": "Piperacilina+Tazobactam", "dosage": "4g+500mg", "route": "IV", "frequency": "8/8h." },
      { "drug": "Sulfametoxazol+Trimetoprima", "dosage": "800+160mg", "route": "VO", "frequency": "12/12h." },
      { "drug": "Doxiciclina", "dosage": "100mg", "route": "VO", "frequency": "12/12h." },
      { "drug": "Meropeném", "dosage": "1g", "route": "IV", "frequency": "8/8h." },
      { "drug": "Metronidazol", "dosage": "400mg VO ou 500mg IV", "route": "VO/IV", "frequency": "8/8h." }
    ],
    "clinicalNotes": "Este é um guia de referência rápida. A escolha do antimicrobiano depende do foco da infecção, perfil do paciente e epidemiologia local."
  },
  {
    "id": "candidiase-vaginal",
    "category": "Ginecologia",
    "condition": "Candidíase Vaginal",
    "tags": ["candidiase", "corrimento", "clotrimazol", "fluconazol", "miconazol", "itraconazol"],
    "prescriptions": [
      { "drug": "Clotrimazol (creme)", "dosage": "1 aplicador (5g)", "route": "Endovaginal", "frequency": "Ao deitar, por 6 dias." },
      { "drug": "Miconazol (creme)", "dosage": "1 aplicador (5g)", "route": "Endovaginal", "frequency": "Ao deitar, por 14 dias." },
      { "drug": "Fluconazol", "dosage": "150mg", "route": "VO", "frequency": "Dose única." },
      { "drug": "Itraconazol", "dosage": "200mg (2 cp)", "route": "VO", "frequency": "Dose única." }
    ],
    "clinicalNotes": "Orientar o paciente a aplicar o creme o mais profundo possível na vagina."
  },
  {
    "id": "cefaleia-primaria",
    "category": "Neurologia",
    "condition": "Cefaleia Primária",
    "tags": ["dor de cabeça", "dipirona", "ibuprofeno", "paracetamol", "cetoprofeno", "dexametasona"],
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
    "id": "choque-anafilatico",
    "category": "Imunologia",
    "condition": "Choque Anafilático",
    "tags": ["anafilaxia", "adrenalina", "choque"],
    "prescriptions": [
      { "drug": "Adrenalina (Adultos >50kg)", "dosage": "0,5 mg (meia ampola)", "route": "IM no vasto lateral (coxa)", "frequency": "Cada ampola de 1mg/mL." },
      { "drug": "Adrenalina (Crianças 25-50kg)", "dosage": "0,3 mg", "route": "IM no vasto lateral (coxa)", "frequency": "Dose pediátrica." },
      { "drug": "Adrenalina (Crianças 10-25kg)", "dosage": "0,15 mg", "route": "IM no vasto lateral (coxa)", "frequency": "Dose pediátrica." },
      { "drug": "Adrenalina (Crianças <10kg)", "dosage": "0,01 mL/kg", "route": "IM no vasto lateral (coxa)", "frequency": "Dose pediátrica." }
    ],
    "clinicalNotes": "Adrenalina é o tratamento de primeira linha e salva vidas. Não hesite em usar em caso de suspeita de anafilaxia."
  },
  {
    "id": "colangite",
    "category": "Gastroenterologia",
    "condition": "Colangite",
    "tags": ["colangite", "infecção", "piperacilina", "tazobactam", "cefepime", "ciprofloxacino", "metronidazol", "morfina", "tramadol", "dipirona", "ondansetrona", "enoxaparina"],
    "prescriptions": [
      { "drug": "Piperacilina + Tazobactam", "dosage": "4,5g", "route": "IV", "frequency": "8/8h por 7-10 dias." },
      { "drug": "Cefepima + Metronidazol", "dosage": "2g + 500mg", "route": "IV", "frequency": "8/8h por 7-10 dias." },
      { "drug": "Ciprofloxacino", "dosage": "400mg", "route": "IV", "frequency": "12/12h por 7-10 dias." },
      { "drug": "Morfina", "dosage": "0,1mg/kg", "route": "IV", "frequency": "Para controle da dor." },
      { "drug": "Ondansetrona", "dosage": "4mg", "route": "IV", "frequency": "8/8h se náuseas." },
      { "drug": "Enoxaparina (Profilaxia TVP)", "dosage": "40mg", "route": "SC", "frequency": "24/24h." }
    ],
    "clinicalNotes": "Tríade de Charcot (febre, icterícia, dor QSD). Pêntade de Reynolds se choque e confusão mental. Priorizar desobstrução da via biliar (CPRE)."
  },
  {
    "id": "conjuntivite",
    "category": "Oftalmologia",
    "condition": "Conjuntivite",
    "tags": ["olho vermelho", "colírio", "moxifloxacino", "dexametasona", "hialuronato", "gatifloxacino"],
    "prescriptions": [
      { "drug": "Hialuronato de Sódio (Viral)", "dosage": "1 gota", "route": "Oftálmico", "frequency": "4/4h para lubrificação." },
      { "drug": "Moxifloxacino Colírio (Bacteriana)", "dosage": "1 gota", "route": "Oftálmico", "frequency": "4/4h por 7-14 dias." },
      { "drug": "Gatifloxacino Colírio (Bacteriana)", "dosage": "1 gota", "route": "Oftálmico", "frequency": "4/4h por 7-14 dias." },
      { "drug": "Dexametasona Colírio (se pseudomembrana)", "dosage": "1 gota", "route": "Oftálmico", "frequency": "6/6h por 5 dias." }
    ],
    "clinicalNotes": "Compressas geladas aliviam os sintomas. A maioria dos casos é viral e autolimitada. Corticoide apenas com avaliação oftalmológica."
  },
  {
    "id": "hemocomponentes-hemacias",
    "category": "Hematologia",
    "condition": "Concentrado de Hemácias",
    "tags": ["sangue", "transfusão", "hemácias", "anemia"],
    "prescriptions": [
      { "drug": "Concentrado de Hemácias", "dosage": "1-2 Unidades", "route": "IV", "frequency": "Infusão em 60-120min por unidade. Acesso exclusivo." }
    ],
    "clinicalNotes": "Elevação esperada de Hb é de 1-1,5g/dL. Considerar tipos especiais: Irradiado, Lavado, Desleucocitado conforme indicações."
  },
  {
    "id": "hemocomponentes-plaquetas",
    "category": "Hematologia",
    "condition": "Concentrado de Plaquetas",
    "tags": ["sangue", "transfusão", "plaquetas", "plaquetopenia"],
    "prescriptions": [
      { "drug": "Concentrado de Plaquetas", "dosage": "1 unidade/10kg", "route": "IV", "frequency": "Infusão rápida." }
    ],
    "clinicalNotes": "Indicações: Plaquetopenia < 10.000, < 50.000 com sangramento ativo, ou < 100.000 para cirurgias neurológicas/oftálmicas."
  },
  {
    "id": "controle-glicemico",
    "category": "Endocrinologia",
    "condition": "Controle Glicêmico",
    "tags": ["hiperglicemia", "insulina"],
    "prescriptions": [
      { "drug": "Insulina Regular", "dosage": "Variável", "route": "IV em BIC", "frequency": "Iniciar se 2 glicemias > 180. Diluir 100Ui em 100ml SF. Ajustar infusão conforme glicemia." }
    ],
    "clinicalNotes": "Objetivo é manter glicemia entre 140-180 mg/dL. Após controle, transicionar para esquema basal-bolus."
  },
  {
    "id": "hemocomponentes-crio-plasma",
    "category": "Hematologia",
    "condition": "Crioprecipitado e Plasma",
    "tags": ["sangue", "transfusão", "plasma", "crioprecipitado", "coagulação"],
    "prescriptions": [
      { "drug": "Crioprecipitado", "dosage": "1 unidade/10kg", "route": "IV", "frequency": "Para hipofibrinogenemia." },
      { "drug": "Plasma Fresco Congelado", "dosage": "10-15 ml/kg", "route": "IV", "frequency": "Para deficiência de múltiplos fatores de coagulação com sangramento." }
    ],
    "clinicalNotes": "Usado para corrigir distúrbios da coagulação. Monitorar RNI e TTPa."
  },
  {
    "id": "crise-asmatica",
    "category": "Respiratório",
    "condition": "Crise Asmática",
    "tags": ["asma", "aerolin", "berotec", "falta de ar", "ipratropio", "atrovent", "prednisolona", "hidrocortisona"],
    "prescriptions": [
      { "drug": "Salbutamol (Aerolin) Spray", "dosage": "4 a 10 jatos", "route": "Inalatório", "frequency": "A cada 20 min na 1ª hora (com espaçador)." },
      { "drug": "Ipratrópio (Atrovent)", "dosage": "4 jatos (ou 40 gotas nebu)", "route": "Inalatório", "frequency": "Adjuvante na crise moderada/grave." },
      { "drug": "Prednisolona", "dosage": "40-60mg", "route": "VO", "frequency": "Dose de ataque." },
      { "drug": "Hidrocortisona (se grave)", "dosage": "500mg", "route": "IV", "frequency": "Diluir em 10ml ABD para dose de ataque." }
    ],
    "clinicalNotes": "Oxigênio para manter Sat > 93-95%."
  },
  {
    "id": "crise-convulsiva",
    "category": "Neurologia",
    "condition": "Crise Convulsiva",
    "tags": ["convulsão", "ataque", "diazepam", "midazolam", "hidantal", "fenobarbital", "propofol", "tiopental"],
    "prescriptions": [
      { "drug": "Diazepam (1º Passo)", "dosage": "10mg", "route": "IV Lento", "frequency": "Pode repetir 1x após 5 min." },
      { "drug": "Midazolam (Alternativa)", "dosage": "10mg", "route": "IM", "frequency": "Opção na falta de acesso venoso." },
      { "drug": "Fenitoína (Hidantal) (2º Passo)", "dosage": "5-10mg/kg", "route": "IV", "frequency": "Diluir 2 ampolas em 40ml SF 0,9%." },
      { "drug": "Fenobarbital (3º Passo)", "dosage": "10mg/kg", "route": "IV", "frequency": "Diluir 5 ampolas em 90ml SF 0,9%." },
      { "drug": "Intubação (se refratário)", "dosage": "N/A", "route": "Procedimento", "frequency": "Com Midazolam, Propofol ou Tiopental." }
    ],
    "clinicalNotes": "Garantir via aérea pérvia e monitorização. Tratar causa base."
  },
  {
    "id": "delirium",
    "category": "Psiquiatria",
    "condition": "Delirium (Misto ou Hiperativo)",
    "tags": ["confusão mental", "haloperidol", "risperidona", "quetiapina", "olanzapina"],
    "prescriptions": [
      { "drug": "Haloperidol", "dosage": "0,5 a 5mg", "route": "VO, IM ou EV", "frequency": "Repetir a cada 30min até estabilização. Máx 5mg/dia." },
      { "drug": "Risperidona", "dosage": "0,5 a 6mg/dia", "route": "VO", "frequency": "Iniciar com 0,5mg à noite e ajustar." },
      { "drug": "Olanzapina", "dosage": "2,5 a 7,5mg/dia", "route": "VO", "frequency": "Iniciar com 5mg à noite e ajustar." },
      { "drug": "Quetiapina", "dosage": "12,5 a 150mg/dia", "route": "VO", "frequency": "Iniciar com 25mg à noite e ajustar." }
    ],
    "clinicalNotes": "Evitar Haloperidol se QTc > 500ms. O mais importante é tratar a causa base do delirium."
  },
  {
    "id": "dengue",
    "category": "Infectologia",
    "condition": "Dengue (Manejo por Grupos)",
    "tags": ["dengue", "febre", "hidratação", "paracetamol", "dipirona", "ondansetrona", "omeprazol"],
    "prescriptions": [
      { "drug": "Paracetamol / Dipirona (Grupo A/B)", "dosage": "750mg / 1g", "route": "VO", "frequency": "Para febre ou dor." },
      { "drug": "Hidratação Oral (Grupo A/B)", "dosage": "60ml/kg/dia", "route": "VO", "frequency": "Aumentar ingestão de líquidos." },
      { "drug": "Hidratação IV (Grupo C - Expansão)", "dosage": "10ml/kg", "route": "IV", "frequency": "Em 1-2h. Reavaliar e repetir se necessário." },
      { "drug": "Hidratação IV (Grupo D - Expansão)", "dosage": "20ml/kg", "route": "IV", "frequency": "Em 20min. Reavaliar e repetir até 3x." }
    ],
    "clinicalNotes": "NÃO usar AINEs ou AAS. Monitorar sinais de alarme (dor abdominal, vômitos, sangramentos). A classificação em grupos (A, B, C, D) é essencial para o manejo."
  },
  {
    "id": "diarreia-aguda",
    "category": "Gastroenterologia",
    "condition": "Diarreia Aguda",
    "tags": ["diarreia", "reidratação", "floratil", "tiorfan", "ciprofloxacino", "metronidazol"],
    "prescriptions": [
      { "drug": "Sais para Reidratação Oral", "dosage": "1 envelope/500ml", "route": "VO", "frequency": "Beber ao longo do dia." },
      { "drug": "Racecadotrila (Tiorfan)", "dosage": "100mg", "route": "VO", "frequency": "8/8h enquanto houver diarreia." },
      { "drug": "Probiótico (Floratil)", "dosage": "200mg", "route": "VO", "frequency": "12/12h por 3 dias." },
      { "drug": "Ciprofloxacino + Metronidazol (se infecciosa)", "dosage": "500mg + 400mg", "route": "VO", "frequency": "Cipro 12/12h por 5d; Metro 8/8h por 7d." }
    ],
    "clinicalNotes": "Se sinais de infecção (febre, sangue/pus nas fezes), considerar antibióticos."
  },
  {
    "id": "dpoc-exacerbado",
    "category": "Respiratório",
    "condition": "DPOC Exacerbado",
    "tags": ["dpoc", "salbutamol", "ipratropio", "prednisolona", "amoxicilina", "clavulanato", "azitromicina", "claritromicina", "levofloxacino", "formoterol", "tiotropio"],
    "prescriptions": [
      { "drug": "Salbutamol + Ipratrópio Spray", "dosage": "2 jatos de cada", "route": "Inalatório", "frequency": "Salbutamol 4/4h-6/6h; Ipratrópio 6/6h por 7 dias." },
      { "drug": "Prednisolona", "dosage": "40mg", "route": "VO", "frequency": "1x/dia pela manhã por 7 dias." },
      { "drug": "Amoxicilina + Clavulanato", "dosage": "875+125mg", "route": "VO", "frequency": "12/12h por 7 dias (se critérios de infecção)." },
      { "drug": "Formoterol + Tiotrópio (Manutenção Grupo B)", "dosage": "1-2 cápsulas + 2 puffs", "route": "Inalatório", "frequency": "Formoterol 12/12h; Tiotrópio 24/24h." }
    ],
    "clinicalNotes": "Antibióticos indicados se houver aumento do volume e/ou purulência do escarro, ou necessidade de ventilação mecânica."
  },
  {
    "id": "encefalopatia-hepatica",
    "category": "Gastroenterologia",
    "condition": "Encefalopatia Hepática",
    "tags": ["lactulose", "metronidazol", "rifaximina", "fígado", "ondansetrona", "aspartato de ornitina"],
    "prescriptions": [
      { "drug": "Lactulose", "dosage": "20-40ml", "route": "VO", "frequency": "12/12h, ajustar p/ 2-3 evacuações/dia." },
      { "drug": "Metronidazol", "dosage": "400mg", "route": "VO", "frequency": "8/8h por 14 dias." },
      { "drug": "Rifaximina", "dosage": "550mg", "route": "VO", "frequency": "12/12h por 14 dias." },
      { "drug": "Aspartato de Ornitina (se refratário)", "dosage": "5g", "route": "VO", "frequency": "12/12h ou 24/24h." }
    ],
    "clinicalNotes": "Manter cabeceira elevada e monitorar sinais vitais e nível de consciência."
  },
  {
    "id": "enxaqueca",
    "category": "Neurologia",
    "condition": "Enxaqueca",
    "tags": ["dor de cabeça", "enxaqueca", "sumatriptano", "naproxeno", "sumax", "cetoprofeno", "dexametasona", "dipirona"],
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
    "id": "faringoamigdalite-bacteriana",
    "category": "Respiratório",
    "condition": "Faringoamigdalite Bacteriana",
    "tags": ["garganta", "amigdalite", "benzetacil", "amoxicilina", "azitromicina", "ibuprofeno", "prednisolona"],
    "prescriptions": [
      { "drug": "Penicilina Benzatina (Benzetacil)", "dosage": "1.200.000 UI", "route": "IM", "frequency": "Dose única." },
      { "drug": "Amoxicilina + Clavulanato (se oral)", "dosage": "875+125mg", "route": "VO", "frequency": "12/12h por 10 dias." },
      { "drug": "Azitromicina (se alergia)", "dosage": "500mg", "route": "VO", "frequency": "1x/dia por 5 dias." },
      { "drug": "Ibuprofeno", "dosage": "400mg", "route": "VO", "frequency": "Até 6/6h para dor/febre." },
      { "drug": "Prednisolona", "dosage": "60mg", "route": "VO", "frequency": "1x/dia pela manhã por 3 dias." }
    ],
    "clinicalNotes": "Benzetacil é o tratamento de escolha para erradicar o Streptococo e prevenir febre reumática."
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
    "id": "hemorragia-digestiva-alta",
    "category": "Gastroenterologia",
    "condition": "Hemorragia Digestiva Alta",
    "tags": ["hda", "varizes", "terlipressina", "octreotide", "ceftriaxona", "omeprazol", "ondansetrona", "ciprofloxacino", "norfloxacino", "lactulose"],
    "prescriptions": [
      { "drug": "Terlipressina (Varicosa)", "dosage": "2mg", "route": "IV Bolus", "frequency": "Seguido de 1mg 4/4h." },
      { "drug": "Octreotide (Varicosa)", "dosage": "50mcg bolus + 50mcg/h", "route": "IV", "frequency": "Diluir 1 amp em 250ml SF e infundir." },
      { "drug": "Ceftriaxona (Profilaxia PBE)", "dosage": "1g", "route": "IV", "frequency": "24/24h por 7 dias." },
      { "drug": "Omeprazol", "dosage": "40mg", "route": "IV", "frequency": "12/12h." }
    ],
    "clinicalNotes": "Prioridade é a estabilização hemodinâmica. EDA nas primeiras 12-24h."
  },
  {
    "id": "hemorragia-digestiva-baixa",
    "category": "Gastroenterologia",
    "condition": "Hemorragia Digestiva Baixa",
    "tags": ["hdb", "sangramento", "dieta zero", "omeprazol", "ondansetrona"],
    "prescriptions": [
      { "drug": "Dieta Suspensa", "dosage": "N/A", "route": "N/A", "frequency": "Até estabilização e investigação." },
      { "drug": "Omeprazol", "dosage": "40mg", "route": "IV", "frequency": "12/12h." },
      { "drug": "Ondansetrona", "dosage": "4mg", "route": "IV", "frequency": "8/8h se náuseas/vômitos." }
    ],
    "clinicalNotes": "Prioridade é estabilização hemodinâmica. Investigar causa com colonoscopia após preparo."
  },
  {
    "id": "herpes-simples",
    "category": "Infectologia",
    "condition": "Herpes Simples",
    "tags": ["herpes", "aciclovir", "lesão"],
    "prescriptions": [
      { "drug": "Aciclovir (Oral)", "dosage": "200mg ou 400mg", "route": "VO", "frequency": "200mg 5x/dia ou 400mg 8/8h, por 5-10 dias." },
      { "drug": "Aciclovir (IV)", "dosage": "5-10 mg/kg", "route": "IV", "frequency": "8/8h (casos graves como encefalite)." },
      { "drug": "Aciclovir (Supressão)", "dosage": "400mg", "route": "VO", "frequency": "12/12h por 4-6 meses (se >5 episódios/ano)." }
    ],
    "clinicalNotes": "O tratamento é mais eficaz quando iniciado nas primeiras 72h do surgimento das lesões."
  },
  {
    "id": "hipercalemia",
    "category": "Nefrologia",
    "condition": "Hipercalemia (Potássio Alto)",
    "tags": ["potássio", "gluconato de cálcio", "glicoinsulina", "sorcal", "fenoterol", "salbutamol", "furosemida"],
    "prescriptions": [
      { "drug": "Gluconato de Cálcio 10%", "dosage": "1 ampola (10mL)", "route": "IV", "frequency": "Diluir em 50-100mL SF e correr em 3-5 min (se alteração no ECG)." },
      { "drug": "Solução Polarizante", "dosage": "Insulina Regular 10UI + SG 50% 100mL", "route": "IV", "frequency": "Correr em 1h. Medida para baixar o potássio." },
      { "drug": "Salbutamol (Nebulização)", "dosage": "40 gotas", "route": "Inalatório", "frequency": "Diluir em 3-5mL SF e nebulizar." },
      { "drug": "Sorcal (Poliestirenosulfonato)", "dosage": "30g", "route": "VO", "frequency": "Diluir em 100ml de água ou manitol 10%." },
      { "drug": "Furosemida", "dosage": "0,5-1 mg/Kg", "route": "IV", "frequency": "Até 4/4h, conforme tolerância." }
    ],
    "clinicalNotes": "Gluconato de cálcio não baixa o potássio, apenas estabiliza a membrana cardíaca. Hemodiálise em casos refratários ou urgência."
  },
  {
    "id": "hipercalcemia",
    "category": "Endocrinologia",
    "condition": "Hipercalcemia (Cálcio Alto)",
    "tags": ["cálcio", "pamidronato", "ácido zoledrônico"],
    "prescriptions": [
      { "drug": "Hidratação Vigorosa", "dosage": "200 a 500 mL/h", "route": "IV", "frequency": "Conforme tolerância do paciente." },
      { "drug": "Pamidronato", "dosage": "60-90 mg", "route": "IV", "frequency": "A cada 4 horas." },
      { "drug": "Ácido Zoledrônico", "dosage": "4mg", "route": "IV", "frequency": "Correr em 15 minutos." }
    ],
    "clinicalNotes": "Pode-se associar diurético de alça (Furosemida) após início da hidratação para aumentar a calciúria."
  },
  {
    "id": "hipermagnesemia",
    "category": "Nefrologia",
    "condition": "Hipermagnesemia",
    "tags": ["magnésio", "gluconato de cálcio", "furosemida"],
    "prescriptions": [
      { "drug": "Gluconato de Cálcio 10%", "dosage": "1 ampola (10mL)", "route": "IV", "frequency": "Diluir em 50-100mL SF 0.9% e correr em 3-5 min (se grave/sintomático)." },
      { "drug": "Furosemida", "dosage": "0,5-1 mg/Kg", "route": "IV", "frequency": "Até 4/4h, conforme tolerância." }
    ],
    "clinicalNotes": "Interromper fontes de magnésio. Considerar diálise se refratário ou insuficiência renal."
  },
  {
    "id": "hipernatremia",
    "category": "Nefrologia",
    "condition": "Hipernatremia (Sódio Alto)",
    "tags": ["sódio", "soro glicosado", "ringer lactato"],
    "prescriptions": [
      { "drug": "Hidratação Inicial", "dosage": "Conforme volemia", "route": "IV", "frequency": "Ringer Lactato ou SF 0,9% para estabilizar." },
      { "drug": "Soro Glicosado 5% ou SF 0,45%", "dosage": "Cálculo complexo", "route": "IV", "frequency": "Para correção do sódio livre de água, infusão em BIC." }
    ],
    "clinicalNotes": "A correção deve ser lenta (máx 8-12 mEq/L em 24h) para evitar edema cerebral. O cálculo da velocidade de infusão é complexo."
  },
  {
    "id": "hipocalcemia",
    "category": "Endocrinologia",
    "condition": "Hipocalcemia (Cálcio Baixo)",
    "tags": ["cálcio", "gluconato de cálcio"],
    "prescriptions": [
      { "drug": "Gluconato de Cálcio 10% (Sintomático)", "dosage": "1 ampola (10mL)", "route": "IV", "frequency": "Diluir em 50-100mL SF e correr em 1h." },
      { "drug": "Reposição de Manutenção", "dosage": "5 ampolas (50mL)", "route": "IV", "frequency": "Diluir em 500mL SF e correr em 5-10h." },
      { "drug": "Reposição Oral (Assintomático)", "dosage": "1000-2600 mg/dia", "route": "VO", "frequency": "Dose diária." }
    ],
    "clinicalNotes": "Corrigir hiperfosfatemia associada antes de infundir cálcio para evitar precipitação."
  },
  {
    "id": "hipocalemia",
    "category": "Nefrologia",
    "condition": "Hipocalemia (Potássio Baixo)",
    "tags": ["potássio", "kcl", "slow-k"],
    "prescriptions": [
      { "drug": "KCl Xarope 6% (Leve)", "dosage": "10 a 30 mL", "route": "VO", "frequency": "De 6/6h." },
      { "drug": "KCl Comprimido (Leve)", "dosage": "1 cp (600mg)", "route": "VO", "frequency": "Após refeições, 6/6h." },
      { "drug": "KCl 10% (Reposição IV)", "dosage": "2 ampolas (20mL)", "route": "IV", "frequency": "Diluir em 500ml SF e correr em 2-3h (acesso periférico)." }
    ],
    "clinicalNotes": "Em acesso central, pode-se usar concentrações maiores (ex: 4 ampolas em 500mL SF)."
  },
  {
    "id": "hipomagnesemia",
    "category": "Nefrologia",
    "condition": "Hipomagnesemia (Magnésio Baixo)",
    "tags": ["magnésio", "sulfato de magnésio", "torsades", "óxido de magnésio"],
    "prescriptions": [
      { "drug": "Sulfato de Magnésio 10% (Torsades/Grave)", "dosage": "2 ampolas (20mL)", "route": "IV", "frequency": "Diluir em 100mL SG 5% e correr em 2-5 min." },
      { "drug": "Sulfato de Magnésio 10% (Manutenção)", "dosage": "4 ampolas (40mL)", "route": "IV", "frequency": "Diluir em 460mL SF 0,9% e correr em 12-24h." },
      { "drug": "Óxido de Magnésio (Leve)", "dosage": "800-1600 mg/dia", "route": "VO", "frequency": "Dividido em 3-4 doses." }
    ],
    "clinicalNotes": "A reposição máxima recomendada é de 6g de Sulfato de Magnésio por dia."
  },
  {
    "id": "hiponatremia",
    "category": "Nefrologia",
    "condition": "Hiponatremia (Sódio Baixo)",
    "tags": ["sódio", "solução salina", "nacl"],
    "prescriptions": [
      { "drug": "Solução Salina 3%", "dosage": "Cálculo complexo", "route": "IV", "frequency": "890mL NaCl 0,9% + 110mL NaCl 20%. Infusão em BIC." }
    ],
    "clinicalNotes": "A correção deve ser lenta (máx 8-12 mEq/L em 24h) para evitar mielinólise pontina. O cálculo da velocidade de infusão é complexo e depende do sódio do paciente e da água corporal total."
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
    "id": "itu-cistite-pielonefrite",
    "category": "Infectologia",
    "condition": "Infecção do Trato Urinário (ITU)",
    "tags": ["itu", "dor ao urinar", "monuril", "cipro", "rocefin", "nitrofurantoina", "amoxicilina", "clavulanato", "levofloxacino", "bactrim", "pyridium", "piperacilina", "tazobactam", "cefepima", "meropenem"],
    "prescriptions": [
      { "drug": "Fosfomicina (Monuril) (Cistite)", "dosage": "3g", "route": "VO", "frequency": "Dose Única." },
      { "drug": "Nitrofurantoína (Cistite)", "dosage": "100mg", "route": "VO", "frequency": "6/6h por 7 dias." },
      { "drug": "Ceftriaxona (Pielonefrite)", "dosage": "1g", "route": "IV", "frequency": "1x ao dia por 10-14 dias." },
      { "drug": "Ciprofloxacino (Pielonefrite)", "dosage": "500mg VO / 400mg IV", "route": "VO/IV", "frequency": "12/12h por 10-14 dias." },
      { "drug": "Piperacilina+Tazobactam (Pielo com sepse)", "dosage": "4g+500mg", "route": "IV", "frequency": "8/8h por 10-14 dias." },
      { "drug": "Fenazopiridina (Sintomático)", "dosage": "200mg", "route": "VO", "frequency": "8/8h se disúria." }
    ],
    "clinicalNotes": "Solicitar urocultura em casos de pielonefrite ou recorrência."
  },
  {
    "id": "intoxicacao-cocaina",
    "category": "Toxicologia",
    "condition": "Intoxicação por Cocaína",
    "tags": ["cocaina", "midazolam", "diazepam"],
    "prescriptions": [
      { "drug": "Diazepam", "dosage": "5-10mg", "route": "IV", "frequency": "Repetir a cada 5-10 min conforme agitação ou dor torácica." },
      { "drug": "Midazolam", "dosage": "3mg", "route": "IV", "frequency": "Repetir a cada 5 min conforme agitação." }
    ],
    "clinicalNotes": "Benzodiazepínicos são a primeira linha para agitação, hipertensão e dor torácica associada. Evitar betabloqueadores."
  },
  {
    "id": "intoxicacao-organofosforado",
    "category": "Toxicologia",
    "condition": "Intoxicação por Organofosforado/Carbamato",
    "tags": ["veneno", "atropina", "antidoto"],
    "prescriptions": [
      { "drug": "Atropina", "dosage": "1-2 ampolas (0,5mg/mL)", "route": "IV Bolus", "frequency": "Repetir até controle dos sintomas muscarínicos (atropinização)." }
    ],
    "clinicalNotes": "O objetivo é reverter a síndrome colinérgica (salivação, broncorreia, miose). Não há dose máxima de atropina."
  },
  {
    "id": "intoxicacao-paracetamol",
    "category": "Toxicologia",
    "condition": "Intoxicação por Paracetamol",
    "tags": ["paracetamol", "acetilcisteina", "antidoto"],
    "prescriptions": [
      { "drug": "N-Acetilcisteína (Antídoto)", "dosage": "Ataque: 150mg/kg", "route": "IV", "frequency": "Em 60 min, seguido de doses de manutenção." }
    ],
    "clinicalNotes": "A eficácia é máxima nas primeiras 8 horas após a ingestão. Indicado se ingestão >7,5g ou sinais de hepatotoxicidade."
  },
  {
    "id": "intubacao-orotraqueal",
    "category": "Terapia Intensiva",
    "condition": "Intubação (Sequência Rápida - SRI)",
    "tags": ["iot", "intubação", "sedação", "fentanil", "midazolam", "rocuronio", "succinilcolina", "cetamina", "etomidato"],
    "prescriptions": [
      { "drug": "Fentanil (Analgesia)", "dosage": "3 mcg/kg", "route": "IV", "frequency": "Para pré-oxigenação, se houver tempo e estabilidade." },
      { "drug": "Cetamina (Sedação)", "dosage": "1,5 mg/kg", "route": "IV", "frequency": "Início em 45-60s. Cardioestável." },
      { "drug": "Etomidato (Sedação)", "dosage": "0,3 mg/kg", "route": "IV", "frequency": "Início em 45-60s. Cardioestável." },
      { "drug": "Succinilcolina (Bloqueador)", "dosage": "1,5 mg/kg", "route": "IV", "frequency": "Início rápido (45s), curta duração. Cuidado com hipercalemia." },
      { "drug": "Rocurônio (Bloqueador)", "dosage": "1,5 mg/kg", "route": "IV", "frequency": "Início em 60s, longa duração." }
    ],
    "clinicalNotes": "A SRI visa otimizar as condições de intubação e minimizar o risco de broncoaspiração. Seguir os 7 Ps da intubação."
  },
  {
    "id": "lombalgia-mecanica",
    "category": "Ortopedia",
    "condition": "Lombalgia Mecânica e Torcicolo",
    "tags": ["dor nas costas", "lombalgia", "relaxante muscular", "torsilax", "miosan", "cetoprofeno", "dipirona", "tramadol", "paracetamol", "ibuprofeno"],
    "prescriptions": [
      { "drug": "Cetoprofeno (IV)", "dosage": "100mg", "route": "IV", "frequency": "Diluir em 100mL SF 0,9%, correr em 20 min." },
      { "drug": "Torsilax (ou similar)", "dosage": "1 cp", "route": "VO", "frequency": "12/12h ou 8/8h, por no máximo 7 dias." },
      { "drug": "Ciclobenzaprina (Miosan)", "dosage": "10mg", "route": "VO", "frequency": "12/12h, por 5 dias." }
    ],
    "clinicalNotes": "Aplicar calor local. Orientar repouso relativo e evitar fatores de piora."
  },
  {
    "id": "otite-media-aguda",
    "category": "Respiratório",
    "condition": "Otite Média Aguda",
    "tags": ["otite", "dor de ouvido", "amoxicilina", "clavulanato", "cefuroxima", "azitromicina", "claritromicina", "levofloxacino"],
    "prescriptions": [
      { "drug": "Amoxicilina + Clavulanato", "dosage": "875+125mg", "route": "VO", "frequency": "12/12h por 10 dias." },
      { "drug": "Cefuroxima (se falha)", "dosage": "500mg", "route": "VO", "frequency": "12/12h por 10 dias." },
      { "drug": "Azitromicina (se alergia)", "dosage": "500mg", "route": "VO", "frequency": "1x/dia por 5 dias." }
    ],
    "clinicalNotes": "Sinais de falha: febre ou otalgia persistentes após 48-72h de antibiótico."
  },
  {
    "id": "pancreatite-aguda",
    "category": "Gastroenterologia",
    "condition": "Pancreatite Aguda",
    "tags": ["pancreatite", "dieta zero", "ringer lactato", "morfina", "tramadol", "dipirona", "ondansetrona", "enoxaparina", "meropenem"],
    "prescriptions": [
      { "drug": "Dieta Suspensa", "dosage": "N/A", "route": "N/A", "frequency": "Jejum inicial, ajustar conforme evolução." },
      { "drug": "Ringer Lactato", "dosage": "20-30 ml/kg", "route": "IV", "frequency": "Em 30 min se hipotensão, seguido de manutenção." },
      { "drug": "Morfina", "dosage": "0,1mg/kg", "route": "IV", "frequency": "Para controle da dor, se refratária a outros analgésicos." },
      { "drug": "Ondansetrona", "dosage": "4mg", "route": "IV", "frequency": "8/8h se náuseas/vômitos." },
      { "drug": "Meropenem (se necrose infectada)", "dosage": "1g", "route": "IV", "frequency": "8/8h." }
    ],
    "clinicalNotes": "Hidratação venosa vigorosa é crucial. Solicitar exames para Score de Ranson e monitorar sinais de choque ou falência orgânica."
  },
  {
    "id": "pneumonia-comunidade",
    "category": "Respiratório",
    "condition": "Pneumonia Adquirida na Comunidade (PAC)",
    "tags": ["infecção", "clavulin", "amoxicilina", "azitromicina", "ceftriaxona", "claritromicina", "dipirona"],
    "prescriptions": [
      { "drug": "Amoxicilina + Clavulanato (ambulatorial)", "dosage": "875+125mg", "route": "VO", "frequency": "12/12h por 7 dias." },
      { "drug": "Azitromicina (associado ou monoterapia leve)", "dosage": "500mg", "route": "VO", "frequency": "1x ao dia por 5 dias." },
      { "drug": "Ceftriaxona + Claritromicina (internação)", "dosage": "1-2g + 500mg", "route": "IV + VO/IV", "frequency": "Ceftriaxona 1x/dia; Claritromicina 12/12h." }
    ],
    "clinicalNotes": "Usar CURB-65 para decidir internação. Considerar fatores de risco para germes atípicos."
  },
  {
    "id": "refluxo-gastroesofagico",
    "category": "Gastroenterologia",
    "condition": "Refluxo Gastroesofágico (DRGE)",
    "tags": ["azia", "refluxo", "omeprazol", "domperidona", "esomeprazol", "bromoprida"],
    "prescriptions": [
      { "drug": "Omeprazol", "dosage": "20-40mg", "route": "VO", "frequency": "1x/dia em jejum." },
      { "drug": "Esomeprazol", "dosage": "20-40mg", "route": "VO", "frequency": "1x/dia em jejum." },
      { "drug": "Domperidona", "dosage": "10mg", "route": "VO", "frequency": "8/8h, 30 min antes das refeições." },
      { "drug": "Bromoprida", "dosage": "10mg", "route": "VO", "frequency": "8/8h." }
    ],
    "clinicalNotes": "Orientar mudanças de estilo de vida: elevar cabeceira, não deitar após comer, evitar alimentos desencadeantes."
  },
  {
    "id": "sedacao-pos-intubacao",
    "category": "Terapia Intensiva",
    "condition": "Sedação Pós-Intubação",
    "tags": ["sedação", "fentanil", "midazolam", "cetamina"],
    "prescriptions": [
      { "drug": "Fentanil", "dosage": "0,7-2 mcg/kg/h", "route": "IV Contínuo", "frequency": "Diluir 40ml (4 ampolas) em 160ml NaCl 0,9%." },
      { "drug": "Midazolam", "dosage": "0,02-0,2 mg/kg/h", "route": "IV Contínuo", "frequency": "Diluir 40ml (4 ampolas) em 60ml SF 0,9%." },
      { "drug": "Cetamina", "dosage": "0,3-1 mg/kg/h", "route": "IV Contínuo", "frequency": "Diluir 1 ampola em 90ml SG 5%." }
    ],
    "clinicalNotes": "Ajustar as doses para atingir o nível de sedação desejado (ex: RASS -1 a -2)."
  },
  {
    "id": "sifilis",
    "category": "Infectologia",
    "condition": "Sífilis",
    "tags": ["sífilis", "penicilina benzatina", "benzetacil", "doxiciclina", "ist"],
    "prescriptions": [
      { "drug": "Penicilina Benzatina (recente)", "dosage": "2.400.000 UI", "route": "IM", "frequency": "Dose única (1.2M em cada glúteo)." },
      { "drug": "Penicilina Benzatina (tardia)", "dosage": "2.400.000 UI", "route": "IM", "frequency": "1x/semana por 3 semanas." },
      { "drug": "Doxiciclina (alternativa)", "dosage": "100mg", "route": "VO", "frequency": "12/12h por 15 dias (recente) ou 30 dias (tardia)." }
    ],
    "clinicalNotes": "Tratar parceiros. Doxiciclina não é indicada para gestantes."
  },
  {
    "id": "sindrome-neuroleptica-maligna",
    "category": "Psiquiatria",
    "condition": "Síndrome Neuroléptica Maligna",
    "tags": ["snm", "bromocriptina", "dantroleno", "amantadina", "toxicologia"],
    "prescriptions": [
      { "drug": "Bromocriptina", "dosage": "2 a 10 mg", "route": "VO ou SNG", "frequency": "A cada 8 horas, por até 10 dias." },
      { "drug": "Amantadina", "dosage": "100 mg", "route": "VO ou SNG", "frequency": "Alternativa à bromocriptina. Máx 400mg/dia." },
      { "drug": "Dantroleno sódico", "dosage": "1 a 10 mg/kg", "route": "IV", "frequency": "Por 8 dias, se hipertermia ou rigidez extrema." }
    ],
    "clinicalNotes": "Medida mais importante é a suspensão do antipsicótico. Dantroleno é contraindicado se disfunção hepática."
  },
  {
    "id": "sindrome-psicotica",
    "category": "Psiquiatria",
    "condition": "Síndrome Psicótica",
    "tags": ["psicose", "haloperidol", "risperidona", "olanzapina", "midazolam", "lorazepam", "diazepam", "prometazina"],
    "prescriptions": [
      { "drug": "Haloperidol", "dosage": "1 a 5mg", "route": "VO ou IM", "frequency": "Dose máxima de 40mg/dia." },
      { "drug": "Risperidona", "dosage": "2 a 8mg", "route": "VO", "frequency": "Aumentar 1mg/dia se necessário. Máx 16mg/dia." },
      { "drug": "Olanzapina", "dosage": "10 a 20mg", "route": "VO", "frequency": "Aumentar 5mg/semana se necessário. Máx 20mg/dia." },
      { "drug": "Prometazina (adjuvante)", "dosage": "50mg", "route": "IM", "frequency": "Repetir a cada 30min até 3x se necessário." }
    ],
    "clinicalNotes": "Atentar para síndromes extrapiramidais com Haloperidol. Benzodiazepínicos podem ser adjuvantes para ansiedade/insônia."
  },
  {
    "id": "sindrome-serotoninergica",
    "category": "Psiquiatria",
    "condition": "Síndrome Serotoninérgica",
    "tags": ["serotonina", "diazepam", "ciproeptadina", "toxicologia"],
    "prescriptions": [
      { "drug": "Diazepam", "dosage": "0,1 a 0,2 mg/Kg", "route": "IV", "frequency": "Repetir de 8/8h até melhora dos sintomas." },
      { "drug": "Ringer Lactato (moderado/grave)", "dosage": "20 a 30 ml/kg", "route": "IV", "frequency": "Meta de diurese > 50-100 ml/h." },
      { "drug": "Ciproeptadina (moderado/grave)", "dosage": "12 mg (inicial)", "route": "VO ou SNG", "frequency": "Repetir 2mg a cada 2h se necessário. Máx 32mg/dia." }
    ],
    "clinicalNotes": "Retirada do agente serotoninérgico é fundamental. Evitar contenção mecânica pelo risco de rabdomiólise."
  },
  {
    "id": "iam-sca",
    "category": "Cardiologia",
    "condition": "Síndrome Coronariana Aguda (SCA)",
    "tags": ["infarto", "iam", "dor no peito", "aas", "clopidogrel", "ticagrelor", "atorvastatina", "isordil", "enoxaparina", "tridil", "metoprolol"],
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
    "id": "sinusite-bacteriana",
    "category": "Respiratório",
    "condition": "Sinusite Bacteriana",
    "tags": ["sinusite", "amoxicilina", "levofloxacino", "budesonida", "dipirona", "prednisolona"],
    "prescriptions": [
      { "drug": "Amoxicilina + Clavulanato", "dosage": "875+125mg", "route": "VO", "frequency": "12/12h por 10 dias." },
      { "drug": "Levofloxacino (se alergia)", "dosage": "750mg", "route": "VO", "frequency": "1x/dia por 5 dias." },
      { "drug": "Prednisolona", "dosage": "40mg", "route": "VO", "frequency": "1x/dia pela manhã por 5 dias." },
      { "drug": "Budesonida Spray Nasal", "dosage": "2 jatos/narina", "route": "Inalatório", "frequency": "12/12h por 10 dias." }
    ],
    "clinicalNotes": "Critérios para sinusite bacteriana: secreção purulenta, dor facial intensa, febre > 38°C."
  },
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
    "clinicalNotes": "Em caso de instabilidade hemodinâmica (hipotensão, choque, dor torácica, dispneia), proceder com cardioversão elétrica sincronizada. Evitar em pacientes com doença pulmonar descompensada."
  },
  {
    "id": "taquicardia-ventricular",
    "category": "Cardiologia",
    "condition": "Taquicardia Ventricular (TV)",
    "tags": ["arritmia", "tv", "amiodarona", "lidocaina", "metoprolol"],
    "prescriptions": [
      { "drug": "Amiodarona (Ataque)", "dosage": "150mg", "route": "IV", "frequency": "Diluir em 100ml de SGI 5% e correr em 30 min." },
      { "drug": "Amiodarona (Manutenção)", "dosage": "450mg", "route": "IV em BIC", "frequency": "Diluir em 230ml SGI 5%, correr 16ml/h por 6h, depois 8ml/h por 18h." },
      { "drug": "Lidocaína 2% (opcional)", "dosage": "1.5 mg/kg", "route": "IV Lento", "frequency": "Se falha, repetir 0.5 mg/kg. Máx: 3-4 mg/kg." },
      { "drug": "Metoprolol (ambulatorial)", "dosage": "25mg", "route": "VO", "frequency": "24/24h, progredindo até 100-200mg/dia." }
    ],
    "clinicalNotes": "Em pacientes instáveis, a cardioversão elétrica é o tratamento de escolha. Descontinuar amiodarona se ocorrer bloqueio AV."
  },
  {
    "id": "trombolise-iam",
    "category": "Cardiologia",
    "condition": "Trombólise no IAM com Supra",
    "tags": ["trombolise", "infarto", "iam", "alteplase", "sca"],
    "prescriptions": [
      { "drug": "Alteplase 1 mg/ml", "dosage": "Dose máxima: 100 mg", "route": "IV", "frequency": "Fazer Bolus de 15 mg, depois 0,75 mg/Kg durante 30 min (máximo de 50 mg) e depois mais 0,50 mg/Kg durante 60 min (máximo de 35 mg)." }
    ],
    "clinicalNotes": "Contraindicações absolutas à trombólise: AVC hemorrágico prévio, AVC isquêmico nos últimos 3 meses, lesão estrutural do SNC (malformação vascular, câncer primário ou metastático), cirurgia do SNC ou medular nos últimos 2 mese, suspeita de dissecção de aorta, sangramento ativo (exceto menstruação), trauma facial ou TCE grave nos últimos 3 meses, hipertensão arterial grave e não controlada."
  },
  {
    "id": "tricomoniase",
    "category": "Ginecologia",
    "condition": "Tricomoníase",
    "tags": ["tricomoniase", "corrimento", "metronidazol"],
    "prescriptions": [
      { "drug": "Metronidazol (dose única)", "dosage": "2g (5 cp de 400mg)", "route": "VO", "frequency": "Dose única." },
      { "drug": "Metronidazol (7 dias)", "dosage": "500mg (2 cp de 250mg)", "route": "VO", "frequency": "12/12h por 7 dias." }
    ],
    "clinicalNotes": "É fundamental tratar parceiros sexuais para evitar reinfecção."
  },
  {
    "id": "tvp-tep",
    "category": "Respiratório",
    "condition": "TVP / TEP (Anticoagulação)",
    "tags": ["tvp", "tep", "trombose", "enoxaparina", "rivaroxabana", "heparina"],
    "prescriptions": [
      { "drug": "Enoxaparina (Profilaxia)", "dosage": "40mg ou 0,5mg/kg", "route": "SC", "frequency": "24/24h." },
      { "drug": "Enoxaparina (Terapêutica)", "dosage": "1mg/kg", "route": "SC", "frequency": "12/12h." },
      { "drug": "Heparina Não Fracionada", "dosage": "80 UI/kg bolus + 18 UI/kg/h", "route": "IV", "frequency": "Contínuo, com controle de PTTa." },
      { "drug": "Rivaroxabana (Xarelto)", "dosage": "15mg", "route": "VO", "frequency": "12/12h por 3 semanas, depois 20mg 1x/dia." }
    ],
    "clinicalNotes": "A escolha da terapia depende do perfil do paciente, risco de sangramento e estabilidade hemodinâmica."
  },
  {
    "id": "ureterolitiase",
    "category": "Nefrologia",
    "condition": "Ureterolitíase (Cólica Nefrética)",
    "tags": ["pedra nos rins", "cólica renal", "cetoprofeno", "tansulosina", "buscopan", "dipirona", "morfina", "ondansetrona", "diclofenaco", "nifedipino"],
    "prescriptions": [
      { "drug": "Cetoprofeno (Profenid)", "dosage": "100mg", "route": "IV", "frequency": "Diluir em 100ml SF, correr em 20 min." },
      { "drug": "Dipirona", "dosage": "1g", "route": "IV Lento", "frequency": "Se dor." },
      { "drug": "Tansulosina", "dosage": "0,4mg", "route": "VO", "frequency": "1x ao dia, por até 10 dias (ajuda a expelir o cálculo)." },
      { "drug": "Nifedipino", "dosage": "10mg", "route": "VO", "frequency": "8/8h por 10 dias." }
    ],
    "clinicalNotes": "Hidratação e analgesia são pilares. Orientar retorno se febre, dor incontrolável ou anúria. Cálculos > 10mm geralmente necessitam de intervenção."
  },
  {
    "id": "uretrite-gonococica",
    "category": "Infectologia",
    "condition": "Uretrite Gonocócica",
    "tags": ["uretrite", "gonorreia", "ceftriaxona", "azitromicina", "doxiciclina"],
    "prescriptions": [
      { "drug": "Ceftriaxona", "dosage": "500mg", "route": "IM", "frequency": "Dose única." },
      { "drug": "Azitromicina", "dosage": "1g (2 cp de 500mg)", "route": "VO", "frequency": "Dose única (associar)." }
    ],
    "clinicalNotes": "Sempre tratar para gonococo e clamídia (com Azitromicina) devido à alta taxa de coinfecção."
  },
  {
    "id": "uretrite-nao-gonococica",
    "category": "Infectologia",
    "condition": "Uretrite Não Gonocócica (Clamídia)",
    "tags": ["uretrite", "clamidia", "azitromicina", "doxiciclina"],
    "prescriptions": [
      { "drug": "Azitromicina", "dosage": "1g (2 cp de 500mg)", "route": "VO", "frequency": "Dose única." },
      { "drug": "Doxiciclina", "dosage": "100mg", "route": "VO", "frequency": "12/12h por 7 dias." }
    ],
    "clinicalNotes": "Tratar parceiros sexuais. Se persistência, pensar em outras causas como Mycoplasma genitalium."
  },
  {
    "id": "vaginose-bacteriana",
    "category": "Ginecologia",
    "condition": "Vaginose Bacteriana",
    "tags": ["vaginose", "corrimento", "metronidazol", "clindamicina"],
    "prescriptions": [
      { "drug": "Metronidazol", "dosage": "500mg (2 cp de 250mg)", "route": "VO", "frequency": "12/12h por 7 dias." },
      { "drug": "Clindamicina", "dosage": "300mg (2 cp de 150mg)", "route": "VO", "frequency": "12/12h por 7 dias." }
    ],
    "clinicalNotes": "Em caso de recorrência, considerar tratamento estendido com metronidazol por 10-14 dias."
  },
  {
    "id": "vertigem",
    "category": "Neurologia",
    "condition": "Vertigem",
    "tags": ["tontura", "labirintite", "dramin", "cinarizina", "meclizina"],
    "prescriptions": [
      { "drug": "Dimenidrato + Piridoxina (Dramin B6)", "dosage": "50mg", "route": "IV ou VO", "frequency": "De 6/6h. IV causa sonolência." },
      { "drug": "Cinarizina", "dosage": "25mg", "route": "VO", "frequency": "De 8/8h." },
      { "drug": "Meclozina", "dosage": "50mg", "route": "VO", "frequency": "De 8/8h." }
    ],
    "clinicalNotes": "Medicamentos para suprimir o sistema vestibular: anti-histamínicos, benzodiazepínicos e antieméticos. Diferenciar vertigem central (AVC) de periférica."
  }
]
