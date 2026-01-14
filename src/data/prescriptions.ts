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
    id: "urgencia-hipertensiva",
    category: "Cardiologia",
    condition: "Urgência Hipertensiva",
    tags: ["pressão alta", "clonidina", "captopril", "prazosin", "labetolol", "hidralazina"],
    prescriptions: [
      { drug: "Clonidina", dosage: "0,1 a 0,3mg", route: "VO", frequency: "Dose única" },
      { drug: "Captopril", dosage: "25 a 50mg", route: "VO", frequency: "Dose única" },
      { drug: "Prazosin", dosage: "5 a 10mg", route: "VO", frequency: "Dose única" },
      { drug: "Labetolol", dosage: "200 a 400mg", route: "VO", frequency: "Dose única" },
      { drug: "Hidralazina", dosage: "12,5 a 25mg", route: "VO", frequency: "Dose única" }
    ],
    clinicalNotes: "Opções de curta ação para controle gradual da pressão arterial em pacientes com hipertensão severa, sem lesão de órgão-alvo aguda. Reavaliar o paciente em 1-2 horas."
  },
  {
    id: "emergencia-hipertensiva",
    category: "Cardiologia",
    condition: "Emergência Hipertensiva",
    tags: ["pressão alta", "nitroprussiato", "nitroglicerina", "esmolol", "uti"],
    prescriptions: [
      { drug: "Nitroprussiato de Sódio", dosage: "0,25 - 10mcg/kg/min", route: "IV (em BIC)", frequency: "Contínua, titular dose" },
      { drug: "Nitroglicerina", dosage: "5 - 100mcg/min", route: "IV (em BIC)", frequency: "Contínua, titular dose" },
      { drug: "Esmolol", dosage: "Ataque 0,5-1mg/kg em 1 min, manutenção 50-200mcg/kg/min", route: "IV (em BIC)", frequency: "Contínua, titular dose" }
    ],
    clinicalNotes: "Manejo em UTI com monitorização invasiva. Indicado na presença de lesão aguda de órgão-alvo. A meta é a redução controlada da PA, não a normalização abrupta."
  },
  {
    id: "enxaqueca-oral",
    category: "Neurologia",
    condition: "Crise de Enxaqueca (Ambulatorial)",
    tags: ["dor de cabeça", "enxaqueca", "dipirona", "ondansetrona", "trometamol"],
    prescriptions: [
      { drug: "Dipirona", dosage: "1g", route: "VO", frequency: "Até de 4/4h se dor" },
      { drug: "Ondansetrona", dosage: "4mg", route: "SL", frequency: "Até de 8/8h se náusea/vômito" },
      { drug: "Trometamol Cetorolaco", dosage: "10mg", route: "SL", frequency: "Até de 8/8h se dor intensa" }
    ],
    clinicalNotes: "Orientar o paciente a procurar a emergência se a dor mudar de padrão, vômitos em jato, ou sinais neurológicos focais."
  },
  {
    id: "enxaqueca-hospitalar",
    category: "Neurologia",
    condition: "Crise de Enxaqueca (Hospitalar)",
    tags: ["dor de cabeça", "enxaqueca", "dipirona", "cetoprofeno", "sumatriptano", "dexametasona"],
    prescriptions: [
      { drug: "Dipirona 1g + Cetoprofeno 100mg", dosage: "Combinados", route: "IV", frequency: "Dose única" },
      { drug: "Sumatriptano", dosage: "6mg", route: "SC", frequency: "Se refratário após 1h, pode repetir em 2h" },
      { drug: "Dexametasona", dosage: "10mg", route: "IV (lento)", frequency: "Se dor > 72h" }
    ],
    clinicalNotes: "A dexametasona pode ajudar a prevenir a recorrência precoce da cefaleia. Avaliar necessidade de profilaxia para enxaqueca crônica."
  },
  {
    id: "cefaleia-tensional",
    category: "Neurologia",
    condition: "Cefaleia Tensional Intensa",
    tags: ["dor de cabeça", "tensional", "dipirona", "trometamol"],
    prescriptions: [
      { drug: "Dipirona", dosage: "1g", route: "VO", frequency: "Até de 4/4h se dor" },
      { drug: "Trometamol Cetorolaco", dosage: "10mg", route: "SL", frequency: "Até de 8/8h por 3 dias" }
    ],
    clinicalNotes: "Orientar sobre sinais de alarme como mudança no padrão da dor, febre, ou déficits neurológicos."
  },
  {
    id: "lombalgia-aguda",
    category: "Ortopedia",
    condition: "Lombalgia Musculoesquelética",
    tags: ["dor nas costas", "lombar", "meloxican", "ciclobenzaprina", "dipirona"],
    prescriptions: [
      { drug: "Meloxican", dosage: "15mg", route: "VO", frequency: "1x/dia pela manhã por 5 dias" },
      { drug: "Ciclobenzaprina", dosage: "10mg", route: "VO", frequency: "1x/dia à noite por 3 dias" },
      { drug: "Dipirona", dosage: "1g", route: "VO", frequency: "Até de 6/6h se dor intensa" }
    ],
    clinicalNotes: "Sinais de alarme incluem dor irradiada, febre, perda de peso, ou disfunção esfincteriana. Opioides como Tramadol ou Codeína são segunda linha."
  },
  {
    id: "diarreia-aguda",
    category: "Gastroenterologia",
    condition: "Diarreia Aguda (Não Invasiva)",
    tags: ["diarreia", "desidratação", "ondansetrona", "loperamida", "probiótico"],
    prescriptions: [
      { drug: "Sais de Reidratação Oral", dosage: "1 sachê em 1-1,5L de água", route: "VO", frequency: "Tomar ao longo do dia" },
      { drug: "Ondansetrona", dosage: "4mg", route: "SL", frequency: "Até de 8/8h se náusea/vômito" },
      { drug: "Loperamida", dosage: "2mg (2cp dose inicial)", route: "VO", frequency: "Seguido por 1cp após cada evacuação" },
      { drug: "Probiótico (Enterogermina)", dosage: "1 frasco", route: "VO", frequency: "2x/dia" }
    ],
    clinicalNotes: "Hidratação é fundamental. A loperamida é contraindicada em diarreia invasiva (febre, sangue/pus nas fezes)."
  },
  {
    id: "diarreia-bacteriana",
    category: "Infectologia",
    condition: "Diarreia Bacteriana / Invasiva",
    tags: ["diarreia", "infecção", "ciprofloxacino", "metronidazol"],
    prescriptions: [
      { drug: "Ciprofloxacino", dosage: "500mg", route: "VO", frequency: "De 12/12h por 5 dias" },
      { drug: "Metronidazol", dosage: "400mg", route: "VO", frequency: "De 8/8h por 7 dias" },
      { drug: "Sais de Reidratação Oral", dosage: "1 sachê em 1,5L de água", route: "VO", frequency: "Tomar durante o dia" }
    ],
    clinicalNotes: "Indicado na presença de febre, muco, pus ou sangue nas fezes. Ajustar antibiótico conforme suspeita etiológica e antibiograma, se disponível."
  },
  {
    id: "dengue",
    category: "Infectologia",
    condition: "Dengue - Manejo Sintomático",
    tags: ["dengue", "febre", "dipirona", "hidratação"],
    prescriptions: [
      { drug: "Dipirona", dosage: "1g", route: "VO", frequency: "De 6/6h se dor ou febre" },
      { drug: "Ondansetrona", dosage: "4mg", route: "SL", frequency: "De 8/8h se náusea/vômito" },
      { drug: "Reidratação Oral", dosage: "Conforme aceitação", route: "VO", frequency: "Hidratação vigorosa (4L/dia)" }
    ],
    clinicalNotes: "ABSOLUTAMENTE CONTRAINDICADO O USO DE AINEs. Monitorar sinais de alarme: dor abdominal intensa, vômitos persistentes, sangramentos, letargia."
  },
  {
    id: "resfriado-comum",
    category: "Clínica Geral",
    condition: "Resfriado Comum",
    tags: ["gripe", "coriza", "prednisona", "dexclorfeniramina", "mometasona"],
    prescriptions: [
      { drug: "Dipirona", dosage: "1g", route: "VO", frequency: "De 6/6h se dor ou febre" },
      { drug: "Prednisona", dosage: "20mg", route: "VO", frequency: "1x/dia pela manhã por 5 dias" },
      { drug: "Dexclorfeniramina", dosage: "2mg", route: "VO", frequency: "1x/dia à noite por 5 dias" },
      { drug: "Furoato de Mometasona", dosage: "2 jatos/narina", route: "Nasal", frequency: "2x/dia por 5 dias" }
    ],
    clinicalNotes: "Tratamento sintomático. Orientar lavagem nasal com soro fisiológico. Retornar se febre persistente, secreção purulenta ou piora dos sintomas."
  },
  {
    id: "faringoamigdalite",
    category: "Otorrinolaringologia",
    condition: "Faringoamigdalite Bacteriana",
    tags: ["dor de garganta", "amigdalite", "penicilina", "amoxicilina", "ibuprofeno"],
    prescriptions: [
      { drug: "Penicilina Benzatina", dosage: "1.200.000 UI", route: "IM", frequency: "Dose única" },
      { drug: "Amoxicilina + Clavulanato", dosage: "875mg + 125mg", route: "VO", frequency: "De 12/12h por 10 dias (alternativa)" },
      { drug: "Ibuprofeno", dosage: "600mg", route: "VO", frequency: "De 8/8h por 3 dias" }
    ],
    clinicalNotes: "A Penicilina Benzatina é o tratamento de escolha para faringoamigdalite estreptocócica (critérios de Centor). Sprays e pastilhas podem oferecer alívio sintomático."
  },
  {
    id: "rinossinusite-bacteriana",
    category: "Otorrinolaringologia",
    condition: "Rinossinusite Bacteriana",
    tags: ["sinusite", "amoxicilina", "levofloxacino", "cefuroxima", "budesonida"],
    prescriptions: [
      { drug: "Amoxicilina + Clavulanato", dosage: "875mg + 125mg", route: "VO", frequency: "De 12/12h por 10 dias" },
      { drug: "Prednisolona", dosage: "40mg", route: "VO", frequency: "1x/dia pela manhã por 5 dias" },
      { drug: "Budesonida", dosage: "2 jatos/narina", route: "Nasal", frequency: "De 12/12h por 10 dias" }
    ],
    clinicalNotes: "O diagnóstico é clínico, baseado na persistência dos sintomas (>10 dias) ou piora após melhora inicial. Alternativas de ATB incluem Levofloxacino e Cefuroxima."
  },
  {
    id: "asma-crise",
    category: "Pneumologia",
    condition: "Asma / Crise de Sibilância",
    tags: ["asma", "chiado", "salbutamol", "ipratrópio", "prednisolona"],
    prescriptions: [
      { drug: "Salbutamol Spray (Aerolin)", dosage: "4-10 jatos com espaçador", route: "Inalatório", frequency: "A cada 20min na primeira hora" },
      { drug: "Ipratrópio Spray (Atrovent)", dosage: "2-3 puffs (40-60mcg)", route: "Inalatório", frequency: "A cada 3-8h" },
      { drug: "Prednisolona", dosage: "40mg", route: "VO", frequency: "1x/dia por 5 dias" }
    ],
    clinicalNotes: "Avaliar a gravidade da crise (frequência respiratória, uso de musculatura acessória, oximetria). A resposta à primeira hora de tratamento define a conduta subsequente."
  },
  {
    id: "pneumonia-comunitaria",
    category: "Pneumologia",
    condition: "Pneumonia Comunitária (PAC)",
    tags: ["pneumonia", "amoxicilina", "azitromicina", "infecção"],
    prescriptions: [
      { drug: "Amoxicilina + Clavulanato", dosage: "875mg + 125mg", route: "VO", frequency: "De 12/12h por 7 dias" },
      { drug: "Azitromicina", dosage: "500mg", route: "VO", frequency: "1x/dia por 5 dias (associar se atípico)" },
      { drug: "Dipirona", dosage: "1g", route: "VO", frequency: "De 6/6h se dor ou febre" }
    ],
    clinicalNotes: "Tratamento para PAC leve em paciente sem comorbidades (CURB-65 0-1). Considerar dupla cobertura (beta-lactâmico + macrolídeo) em casos moderados ou com comorbidades."
  },
  {
    id: "conjuntivite-bacteriana",
    category: "Oftalmologia",
    condition: "Conjuntivite Bacteriana",
    tags: ["olho vermelho", "conjuntivite", "tobramicina", "infecção ocular"],
    prescriptions: [
      { drug: "Tobramicina Colírio", dosage: "2 gotas no olho afetado", route: "Oftálmico", frequency: "De 6/6h por 7 dias" },
      { drug: "Soro Fisiológico 0,9%", dosage: "Abundante", route: "Oftálmico", frequency: "Para lavagem, 3x/dia" }
    ],
    clinicalNotes: "Compressas geladas com soro fisiológico ajudam no alívio sintomático. Orientar sobre a alta contagiosidade e medidas de higiene. Procurar oftalmologista se não houver melhora."
  },
  {
    id: "otite-media-aguda",
    category: "Otorrinolaringologia",
    condition: "Otite Média Aguda",
    tags: ["dor de ouvido", "otite", "amoxicilina", "trometamol"],
    prescriptions: [
      { drug: "Amoxicilina + Clavulanato", dosage: "875mg + 125mg", route: "VO", frequency: "De 12/12h por 10 dias" },
      { drug: "Dipirona", dosage: "1g", route: "VO", frequency: "De 6/6h se dor ou febre" },
      { drug: "Trometamol Cetorolaco", dosage: "10mg", route: "SL", frequency: "De 8/8h se dor intensa" }
    ],
    clinicalNotes: "Retornar à emergência se febre persistir por mais de 48h após o início do antibiótico. A maioria dos casos em adultos requer antibioticoterapia."
  },
  {
    id: "herpes-zoster",
    category: "Infectologia",
    condition: "Herpes Zoster",
    tags: ["cobreiro", "valaciclovir", "aciclovir", "pregabalina", "dor neuropática"],
    prescriptions: [
      { drug: "Valaciclovir", dosage: "1g (2cp de 500mg)", route: "VO", frequency: "De 8/8h por 7 dias" },
      { drug: "Prednisona", dosage: "40mg", route: "VO", frequency: "1x/dia pela manhã por 5 dias" },
      { drug: "Pregabalina", dosage: "75mg", route: "VO", frequency: "De 12/12h até resolução da dor" }
    ],
    clinicalNotes: "O tratamento deve ser iniciado idealmente nas primeiras 72h. A Pregabalina é para o manejo da neuralgia pós-herpética. Alternativa antiviral: Aciclovir 800mg 5x/dia."
  },
  {
    id: "erisipela",
    category: "Dermatologia",
    condition: "Erisipela",
    tags: ["infecção de pele", "cefalexina", "amoxicilina", "dermatologia"],
    prescriptions: [
      { drug: "Cefalexina", dosage: "500mg", route: "VO", frequency: "De 6/6h por 7 dias" },
      { drug: "Amoxicilina + Clavulanato", dosage: "875mg + 125mg", route: "VO", frequency: "De 12/12h por 10-14 dias (alternativa)" }
    ],
    clinicalNotes: "Manter o membro elevado e em repouso. Avaliar necessidade de antibioticoterapia IV em casos de sinais sistêmicos de gravidade ou falha no tratamento oral."
  },
  {
    id: "escabiose",
    category: "Dermatologia",
    condition: "Escabiose (Sarna)",
    tags: ["sarna", "coceira", "ivermectina", "dermatologia"],
    prescriptions: [
      { drug: "Ivermectina 6mg", dosage: "Dose calculada por peso (ex: 2cp para até 60kg)", route: "VO", frequency: "Dose única, repetir em 7-14 dias" }
    ],
    clinicalNotes: "Tratar todos os contactantes domiciliares. Orientar a lavagem de roupas de cama e de uso pessoal com água quente. A coceira pode persistir por algumas semanas mesmo após o tratamento."
  },
  {
    id: "furunculose",
    category: "Dermatologia",
    condition: "Furunculose",
    tags: ["furúnculo", "abscesso", "bactrim", "drenagem"],
    prescriptions: [
      { drug: "Sulfametoxazol + Trimetoprima", dosage: "800/160mg", route: "VO", frequency: "De 12/12h por 10 dias" }
    ],
    clinicalNotes: "O tratamento principal é a drenagem da lesão. Antibióticos são indicados para lesões > 5cm, celulite extensa, ou sinais sistêmicos como febre."
  },
  {
    id: "urticaria-aguda",
    category: "Dermatologia",
    condition: "Urticária Aguda",
    tags: ["alergia", "placas vermelhas", "dexclorfeniramina", "prednisona"],
    prescriptions: [
      { drug: "Dexclorfeniramina", dosage: "2mg", route: "VO", frequency: "À noite por 5 dias" },
      { drug: "Prednisona", dosage: "20mg", route: "VO", frequency: "1x/dia pela manhã por 5 dias" }
    ],
    clinicalNotes: "Investigar e afastar o agente causador. Anti-histamínicos de segunda geração (ex: Loratadina, Fexofenadina) são preferíveis por causarem menos sonolência."
  },
  {
    id: "pielonefrite",
    category: "Nefrologia",
    condition: "Pielonefrite Não Complicada",
    tags: ["infecção urinária alta", "ciprofloxacino", "amoxicilina"],
    prescriptions: [
      { drug: "Ciprofloxacino", dosage: "500mg", route: "VO", frequency: "De 12/12h por 10 dias" },
      { drug: "Amoxicilina + Clavulanato", dosage: "875mg + 125mg", route: "VO", frequency: "De 12/12h por 10-14 dias (alternativa)" },
      { drug: "Dipirona", dosage: "1g", route: "VO", frequency: "De 6/6h se dor ou febre" }
    ],
    clinicalNotes: "Pielonefrite em pacientes hígidos, sem obstrução ou alterações anatômicas. Avaliar critérios de internação (sepse, intolerância a VO, gestação)."
  },
  {
    id: "cistite",
    category: "Nefrologia",
    condition: "Cistite Não Complicada",
    tags: ["infecção urinária baixa", "fosfomicina", "pyridium"],
    prescriptions: [
      { drug: "Fosfomicina", dosage: "3g", route: "VO", frequency: "Dose única, à noite após esvaziar a bexiga" },
      { drug: "Fenazopiridina (Pyridium)", dosage: "200mg", route: "VO", frequency: "De 8/8h por 3 dias" }
    ],
    clinicalNotes: "A Fenazopiridina é um analgésico de vias urinárias e altera a coloração da urina. Orientar aumento da ingesta hídrica."
  },
  {
    id: "nefrolitiase",
    category: "Nefrologia",
    condition: "Cólica Nefrética (Nefrolitíase)",
    tags: ["pedra no rim", "cólica renal", "cetoprofeno", "tansulosina"],
    prescriptions: [
      { drug: "Cetoprofeno", dosage: "100mg", route: "VO", frequency: "De 12/12h por 5 dias" },
      { drug: "Tansulosina", dosage: "0,4mg", route: "VO", frequency: "1x/dia à noite por 14 dias" },
      { drug: "Dipirona", dosage: "1g", route: "VO", frequency: "De 6/6h se dor" }
    ],
    clinicalNotes: "A Tansulosina é um alfabloqueador que auxilia na expulsão de cálculos distais. AINEs são a primeira linha para a dor. Hidratação e reavaliação são essenciais."
  },
  {
    id: "infeccao-gonococica",
    category: "Infectologia",
    condition: "Infecção Gonocócica",
    tags: ["dst", "gonorreia", "ceftriaxona", "azitromicina"],
    prescriptions: [
      { drug: "Ceftriaxona", dosage: "500mg", route: "IM", frequency: "Dose única" },
      { drug: "Azitromicina", dosage: "1g", route: "VO", frequency: "Dose única (associar para cobrir Clamídia)" }
    ],
    clinicalNotes: "Tratamento da uretrite/cervicite. Sempre tratar o(s) parceiro(s) e orientar sobre práticas sexuais seguras."
  },
  {
    id: "vaginose-bacteriana",
    category: "Ginecologia",
    condition: "Vaginose Bacteriana",
    tags: ["corrimento", "metronidazol", "ginecologia"],
    prescriptions: [
      { drug: "Metronidazol", dosage: "500mg (2cp de 250mg)", route: "VO", frequency: "De 12/12h por 7 dias" }
    ],
    clinicalNotes: "Orientar a abstinência de álcool durante e até 24h após o término do Metronidazol (efeito antabuse). Tratamento do parceiro não é rotineiramente recomendado."
  },
  {
    id: "hemorroida-crise",
    category: "Proctologia",
    condition: "Hemorroida (Manejo de Crise)",
    tags: ["hemorroida", "daflon", "diosmina", "analgesia", "dor", "procto"],
    prescriptions: [
        { drug: "Diosmina + Hesperidina", dosage: "1 comp a cada 6h por 4 dias", route: "VO", frequency: "Depois 1 comp a cada 12h por 3 dias" },
        { drug: "Óleo Mineral", dosage: "10 mL", route: "VO", frequency: "A cada 8 horas" },
        { drug: "Ibuprofeno", dosage: "400mg", route: "VO", frequency: "A cada 6 horas se dor intensa" }
    ],
    clinicalNotes: "Manejo complementar: banho de assento com água morna (3-4x/dia), dieta rica em fibras, aumento da ingestão hídrica e evitar trauma local."
  },
  {
    id: "vertigem-aguda",
    category: "Neurologia",
    condition: "Vertigem Periférica Aguda",
    tags: ["tontura", "labirintite", "dramin", "cinarizina", "meclizina", "vppb"],
    prescriptions: [
      { drug: "Dimenidrinato (Dramin)", dosage: "50mg", route: "VO", frequency: "A cada 4 ou 6 horas" },
      { drug: "Cinarizina", dosage: "25mg", route: "VO", frequency: "A cada 8 horas" },
      { drug: "Meclizina", dosage: "50mg", route: "VO", frequency: "A cada 8 horas" }
    ],
    clinicalNotes: "Sempre investigar sinais de alarme para AVC de fossa posterior (diplopia, disartria, dismetria, ataxia de membros). A Manobra de Epley pode ser diagnóstica e terapêutica na VPPB."
  }
];
