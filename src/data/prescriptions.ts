
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
    id: 'taquicardia-supraventricular-estavel',
    category: 'Cardiologia',
    condition: 'Taquicardia Supraventricular (Estável)',
    tags: ['arritmia', 'adenosina', 'metoprolol', 'manobra vagal'],
    prescriptions: [
      { drug: 'Adenosina', dosage: '6mg (1 ampola)', route: 'IV em bolus rápido', frequency: 'Dose única, seguida de flush de 20ml de SF 0,9%.' },
      { drug: 'Adenosina', dosage: '12mg (2 ampolas)', route: 'IV em bolus rápido', frequency: 'Se não houver resposta à dose inicial.' },
      { drug: 'Metoprolol', dosage: '2,5 a 5mg', route: 'IV lento (1mg/min)', frequency: 'Pode ser repetido até dose máxima de 15mg.' }
    ],
    clinicalNotes: 'Considere manobras vasovagais inicialmente. Adenosina deve ser administrada na fossa cubital. Contraindicado em pacientes com doença pulmonar descompensada ou bloqueio AV prévio. Pacientes instáveis devem ser submetidos à cardioversão elétrica.'
  },
  {
    id: 'taquicardia-ventricular-estavel',
    category: 'Cardiologia',
    condition: 'Taquicardia Ventricular (Estável)',
    tags: ['arritmia', 'amiodarona', 'lidocaina', 'metoprolol'],
    prescriptions: [
      { drug: 'Amiodarona', dosage: '150mg (1 ampola)', route: 'IV em 100ml de SGI 5%', frequency: 'Correr em 30 min (dose de ataque).' },
      { drug: 'Amiodarona (Manutenção)', dosage: '450mg (3 ampolas)', route: 'IV em 230ml de SGI 5%', frequency: 'BIC: 16ml/h por 6h, depois 8ml/h por 18h.' },
      { drug: 'Lidocaína 2%', dosage: '1,5 mg/kg', route: 'IV lento', frequency: 'Se falha, repetir 0,5 mg/kg. Dose máx: 3-4 mg/kg.' }
    ],
    clinicalNotes: 'Descontinuar se houver bloqueio atrioventricular. Para tratamento ambulatorial, pode-se usar Metoprolol 25mg VO, progredindo a dose. Pacientes instáveis requerem cardioversão elétrica.'
  },
  {
    id: 'fibrilacao-atrial-flutter-estavel',
    category: 'Cardiologia',
    condition: 'Fibrilação Atrial e Flutter (Estável)',
    tags: ['fa', 'flutter', 'arritmia', 'amiodarona', 'metoprolol', 'verapamil', 'deslanosideo'],
    prescriptions: [
      { drug: 'Amiodarona (Cardioversão)', dosage: '5-7 mg/kg', route: 'IV em 100ml SG 5%', frequency: 'Correr em 30-60 min.' },
      { drug: 'Metoprolol', dosage: '5mg', route: 'IV em 2 min', frequency: 'Pode repetir a cada 5 min, máx. 20mg.' },
      { drug: 'Verapamil', dosage: '5-10mg', route: 'IV em 2-5 min', frequency: 'Pode repetir após 30 min, máx. 20mg.' },
      { drug: 'Deslanosídeo', dosage: '0,4 a 0,8mg', route: 'IV lento', frequency: 'Administrado em 24h.' }
    ],
    clinicalNotes: 'Lembrar da anticoagulação. Não cardioverter FA com >48h sem excluir trombo atrial. Pacientes instáveis necessitam de cardioversão elétrica sincronizada.'
  },
  {
    id: 'sindrome-coronariana-aguda',
    category: 'Cardiologia',
    condition: 'Síndrome Coronariana Aguda (SCA)',
    tags: ['iam', 'infarto', 'angina', 'aas', 'clopidogrel', 'ticagrelor', 'enoxaparina', 'nitroglicerina'],
    prescriptions: [
      { drug: 'AAS', dosage: '300mg', route: 'VO', frequency: 'Dose de ataque, depois 100mg/dia.' },
      { drug: 'Ticagrelor', dosage: '180mg', route: 'VO', frequency: 'Dose de ataque, depois 90mg 12/12h.' },
      { drug: 'Clopidogrel', dosage: '300-600mg', route: 'VO', frequency: 'Dose de ataque, depois 75mg/dia.' },
      { drug: 'Enoxaparina', dosage: '1mg/kg', route: 'SC', frequency: 'De 12/12h.' },
      { drug: 'Isossorbida (Isordil)', dosage: '5mg', route: 'SL', frequency: 'Se dor, a cada 5min (máx. 3 doses).' },
      { drug: 'Nitroglicerina (Tridil)', dosage: '5-100 mcg/min', route: 'IV em BIC', frequency: 'Se dor persistente ou congestão.' }
    ],
    clinicalNotes: 'Dose de ataque do clopidogrel varia conforme o cenário (com/sem supra, idade, angioplastia). Não usar nitratos em IAM de VD ou uso recente de inibidores da PDE-5. Oxigênio se SatO2 < 90%.'
  },
  {
    id: 'icad-eap',
    category: 'Cardiologia',
    condition: 'IC Descompensada e Edema Agudo de Pulmão',
    tags: ['icad', 'eap', 'insuficiencia cardiaca', 'furosemida', 'nipride', 'tridil', 'dobutamina'],
    prescriptions: [
      { drug: 'Furosemida', dosage: '1-1,5 mg/kg', route: 'IV', frequency: 'Dose de ataque.' },
      { drug: 'Nitroprussiato de Sódio', dosage: '0,25-10 mcg/kg/min', route: 'IV em BIC', frequency: 'Titular conforme PA.' },
      { drug: 'Nitroglicerina', dosage: 'A partir de 5 mcg/min', route: 'IV em BIC', frequency: 'Titular conforme PA.' },
      { drug: 'Dobutamina', dosage: '2-20 mcg/kg/min', route: 'IV em BIC', frequency: 'Em caso de baixa perfusão.' }
    ],
    clinicalNotes: 'A abordagem depende do perfil congestão/perfusão. Considerar VNI. Morfina não é mais rotina. O objetivo é a redução controlada da PA e melhora da congestão.'
  },
  {
    id: 'cefaleia-primaria',
    category: 'Neurologia',
    condition: 'Cefaleia Primária (Tensional)',
    tags: ['dor de cabeça', 'tensional', 'cetoprofeno', 'dexametasona', 'ibuprofeno', 'dipirona'],
    prescriptions: [
      { drug: 'Cetoprofeno', dosage: '100mg', route: 'IV em 100ml SF 0,9%', frequency: 'Correr em 20 min.' },
      { drug: 'Dexametasona', dosage: '10mg', route: 'IV ou IM', frequency: 'Dose única.' },
      { drug: 'Ibuprofeno', dosage: '400mg', route: 'VO', frequency: 'Até de 6/6h.' },
      { drug: 'Dipirona', dosage: '1g', route: 'VO', frequency: 'De 6/6h.' }
    ],
    clinicalNotes: 'Atentar para a possibilidade de cefaleia por abuso de analgésicos. Orientar sobre sinais de alarme.'
  },
  {
    id: 'enxaqueca',
    category: 'Neurologia',
    condition: 'Crise de Enxaqueca',
    tags: ['enxaqueca', 'migranea', 'sumatriptano', 'naproxeno', 'cetoprofeno', 'dexametasona'],
    prescriptions: [
      { drug: 'Sumatriptano', dosage: '6mg', route: 'SC', frequency: 'Pode repetir em 1h se refratário.' },
      { drug: 'Cetoprofeno', dosage: '100mg', route: 'IV', frequency: 'Associado à Dipirona.' },
      { drug: 'Dexametasona', dosage: '10mg', route: 'IV lento', frequency: 'Se dor > 72h, para prevenir recorrência.' },
      { drug: 'Sumatriptano + Naproxeno', dosage: '50mg + 500mg', route: 'VO', frequency: 'No início da crise, pode repetir em 2h.' }
    ],
    clinicalNotes: 'Sumatriptano subcutâneo é pouco disponível no PS. Dexametasona pode ajudar a prevenir a recorrência precoce da cefaleia. Avaliar necessidade de profilaxia para enxaqueca crônica.'
  },
  {
    id: 'vertigem-periferica',
    category: 'Neurologia',
    condition: 'Vertigem Periférica Aguda',
    tags: ['tontura', 'vppb', 'labirintite', 'dimenidrato', 'dramin', 'cinarizina', 'meclizina'],
    prescriptions: [
      { drug: 'Dimenidrato + Piridoxina (Dramin B6)', dosage: '50mg', route: 'IV ou VO', frequency: 'A cada 4-6 horas.' },
      { drug: 'Cinarizina', dosage: '25mg', route: 'VO', frequency: 'A cada 8 horas.' },
      { drug: 'Meclizina', dosage: '50mg', route: 'VO', frequency: 'A cada 8 horas.' }
    ],
    clinicalNotes: 'Sempre investigar sinais de alarme para AVC de fossa posterior (diplopia, disartria, dismetria, ataxia). A Manobra de Epley pode ser diagnóstica e terapêutica na VPPB.'
  },
  {
    id: 'crise-convulsiva',
    category: 'Neurologia',
    condition: 'Crise Convulsiva / Estado de Mal Epiléptico',
    tags: ['convulsao', 'epilepsia', 'diazepam', 'midazolam', 'fenitoina', 'fenobarbital'],
    prescriptions: [
      { drug: 'Diazepam', dosage: '10mg', route: 'IV lento', frequency: 'Dose inicial. Pode repetir em 5 min.' },
      { drug: 'Midazolam', dosage: '10mg', route: 'IM', frequency: 'Alternativa sem acesso venoso.' },
      { drug: 'Fenitoína', dosage: 'Dose de ataque 5-10 mg/kg', route: 'IV', frequency: 'Se refratário após 10 min.' },
      { drug: 'Fenobarbital', dosage: '10 mg/kg', route: 'IV', frequency: 'Se refratário após 10 min.' }
    ],
    clinicalNotes: 'Se refratário, proceder à intubação orotraqueal e infusão contínua de sedativos (Midazolam, Propofol).'
  },
  {
    id: 'otite-media-aguda',
    category: 'Otorrinolaringologia',
    condition: 'Otite Média Aguda',
    tags: ['dor de ouvido', 'otite', 'amoxicilina', 'cefuroxima', 'azitromicina'],
    prescriptions: [
      { drug: 'Amoxicilina + Clavulanato', dosage: '875mg + 125mg', route: 'VO', frequency: 'De 12/12h por 10 dias.' },
      { drug: 'Cefuroxima', dosage: '500mg', route: 'VO', frequency: 'De 12/12h por 10 dias (se falha).' },
      { drug: 'Azitromicina', dosage: '500mg', route: 'VO', frequency: 'De 24/24h por 5 dias (se alergia).' }
    ],
    clinicalNotes: 'Prescrever analgesia adequada. Sinais de falha terapêutica: febre ou otalgia persistentes após 48-72h de ATB.'
  },
  {
    id: 'rinossinusite-bacteriana',
    category: 'Otorrinolaringologia',
    condition: 'Rinossinusite Bacteriana',
    tags: ['sinusite', 'amoxicilina', 'levofloxacino', 'prednisolona', 'budesonida'],
    prescriptions: [
      { drug: 'Amoxicilina + Clavulanato', dosage: '875mg + 125mg', route: 'VO', frequency: 'De 12/12h por 10 dias.' },
      { drug: 'Levofloxacino', dosage: '750mg', route: 'VO', frequency: 'De 24/24h por 5 dias (se alergia).' },
      { drug: 'Prednisolona', dosage: '40mg', route: 'VO', frequency: '1x/dia pela manhã por 5 dias.' },
      { drug: 'Budesonida', dosage: '2 jatos/narina', route: 'Nasal', frequency: 'De 12/12h por 10 dias.' }
    ],
    clinicalNotes: 'Critérios para ATB: muco purulento, dor local intensa, febre > 38°C, PCR/VHS elevado ou piora dos sintomas.'
  },
  {
    id: 'faringoamigdalite-bacteriana',
    category: 'Otorrinolaringologia',
    condition: 'Faringoamigdalite Bacteriana',
    tags: ['dor de garganta', 'amigdalite', 'penicilina', 'amoxicilina', 'azitromicina'],
    prescriptions: [
      { drug: 'Penicilina Benzatina', dosage: '1.200.000 UI', route: 'IM', frequency: 'Dose única.' },
      { drug: 'Amoxicilina + Clavulanato', dosage: '875mg + 125mg', route: 'VO', frequency: 'De 12/12h por 10 dias.' },
      { drug: 'Azitromicina', dosage: '500mg', route: 'VO', frequency: 'De 24/24h por 5 dias (se alergia).' }
    ],
    clinicalNotes: 'Penicilina Benzatina é o tratamento de escolha para faringoamigdalite estreptocócica (critérios de Centor). Prescrever analgesia e sintomáticos.'
  },
  {
    id: 'crise-asmatica',
    category: 'Pneumologia',
    condition: 'Crise Asmática',
    tags: ['asma', 'sibilancia', 'chiado', 'salbutamol', 'ipratropio', 'prednisolona', 'hidrocortisona'],
    prescriptions: [
      { drug: 'Salbutamol Spray', dosage: '4-10 jatos com espaçador', route: 'Inalatório', frequency: 'A cada 20 min na 1ª hora.' },
      { drug: 'Ipratrópio Spray', dosage: '4 jatos', route: 'Inalatório', frequency: 'A cada 20 min na 1ª hora (se grave).' },
      { drug: 'Prednisolona', dosage: '40-60mg', route: 'VO', frequency: '1x/dia por 5 dias.' },
      { drug: 'Hidrocortisona', dosage: '500mg', route: 'IV', frequency: 'Dose de ataque (se grave).' }
    ],
    clinicalNotes: 'Avaliar a gravidade da crise (frequência respiratória, uso de musculatura acessória, oximetria). A resposta à primeira hora de tratamento define a conduta subsequente.'
  },
  {
    id: 'dpoc-exacerbado',
    category: 'Pneumologia',
    condition: 'DPOC Exacerbado',
    tags: ['dpoc', 'enfisema', 'bronquite', 'salbutamol', 'ipratropio', 'prednisolona', 'amoxicilina'],
    prescriptions: [
      { drug: 'Salbutamol Spray', dosage: '2 jatos', route: 'Inalatório', frequency: 'De 4/4h ou 6/6h por 7 dias.' },
      { drug: 'Ipratrópio Spray', dosage: '2 jatos', route: 'Inalatório', frequency: 'De 6/6h por 7 dias.' },
      { drug: 'Prednisolona', dosage: '40mg', route: 'VO', frequency: '1x/dia por 7 dias.' },
      { drug: 'Amoxicilina + Clavulanato', dosage: '875mg + 125mg', route: 'VO', frequency: 'De 12/12h por 7 dias.' }
    ],
    clinicalNotes: 'Antibióticos são indicados na presença de aumento do volume ou purulência do escarro. Em casos de risco para Pseudomonas, considerar Levofloxacino.'
  },
  {
    id: 'pneumonia-comunitaria',
    category: 'Pneumologia',
    condition: 'Pneumonia Comunitária (PAC)',
    tags: ['pneumonia', 'infeccao pulmonar', 'amoxicilina', 'azitromicina', 'claritromicina'],
    prescriptions: [
      { drug: 'Amoxicilina + Clavulanato', dosage: '875mg + 125mg', route: 'VO', frequency: 'De 12/12h por 7 dias.' },
      { drug: 'Azitromicina', dosage: '500mg', route: 'VO', frequency: '1x/dia por 5-7 dias (associar se grave).' },
      { drug: 'Claritromicina', dosage: '500mg', route: 'VO', frequency: 'De 12/12h por 7 dias (alternativa).' }
    ],
    clinicalNotes: 'Para pacientes sem comorbidades, monoterapia com beta-lactâmico. Considerar dupla cobertura (beta-lactâmico + macrolídeo) em pacientes com comorbidades, uso recente de ATB ou quadro mais grave (CURB-65).'
  },
  {
    id: 'tvp-tep',
    category: 'Pneumologia',
    condition: 'Trombose Venosa Profunda (TVP) e TEP',
    tags: ['tvp', 'tep', 'trombose', 'embolia', 'enoxaparina', 'heparina', 'rivaroxabana'],
    prescriptions: [
      { drug: 'Enoxaparina (Dose Terapêutica)', dosage: '1 mg/kg', route: 'SC', frequency: 'De 12/12h.' },
      { drug: 'Enoxaparina (Dose Profilática)', dosage: '40mg (ou 0,5mg/kg)', route: 'SC', frequency: 'De 24/24h.' },
      { drug: 'Rivaroxabana', dosage: '15mg', route: 'VO', frequency: 'De 12/12h por 3 semanas, depois 20mg 1x/dia.' },
      { drug: 'Heparina Não Fracionada', dosage: 'Ataque 80 UI/kg, Manutenção 18 UI/kg/h', route: 'IV em BIC', frequency: 'Controle por PTTa.' }
    ],
    clinicalNotes: 'A escolha da anticoagulação depende do quadro clínico, comorbidades e preferência. O tratamento geralmente dura no mínimo 3 meses.'
  },
  {
    id: 'diarreia-aguda',
    category: 'Gastroenterologia',
    condition: 'Diarreia Aguda',
    tags: ['diarreia', 'gastroenterite', 'probiotico', 'racecadotrila', 'ciprofloxacino', 'metronidazol'],
    prescriptions: [
      { drug: 'Sais de Reidratação Oral', dosage: 'Conforme necessidade', route: 'VO', frequency: 'Manter hidratação.' },
      { drug: 'Racecadotrila', dosage: '100mg', route: 'VO', frequency: 'De 8/8h ou 12/12h.' },
      { drug: 'Probiótico (Floratil)', dosage: '200mg', route: 'VO', frequency: 'De 12/12h por 3 dias.' },
      { drug: 'Ciprofloxacino + Metronidazol', dosage: '500mg + 400mg', route: 'VO', frequency: 'Cipro 12/12h, Metro 8/8h (se infecciosa).' }
    ],
    clinicalNotes: 'Racecadotrila é preferível à Loperamida em diarreias agudas. Antibióticos são indicados se suspeita de quadro infeccioso/invasivo (febre, sangue/pus nas fezes).'
  },
  {
    id: 'hda-varicosa',
    category: 'Gastroenterologia',
    condition: 'Hemorragia Digestiva Alta (Varicosa)',
    tags: ['hda', 'sangramento', 'varizes esofagicas', 'omeprazol', 'terlipressina', 'octreotide', 'ceftriaxona'],
    prescriptions: [
      { drug: 'Omeprazol', dosage: '40mg', route: 'IV', frequency: 'De 12/12h.' },
      { drug: 'Terlipressina', dosage: '2mg (ataque), depois 1mg 4/4h', route: 'IV', frequency: 'Conforme protocolo.' },
      { drug: 'Octreotide', dosage: '50 mcg (ataque), depois 50 mcg/h', route: 'IV em BIC', frequency: 'Alternativa à Terlipressina.' },
      { drug: 'Ceftriaxona', dosage: '1g', route: 'IV', frequency: 'De 24/24h por 7 dias (Profilaxia de PBE).' }
    ],
    clinicalNotes: 'Prioridade é a estabilização hemodinâmica. EDA nas primeiras 12-24h. Iniciar profilaxia para PBE e Encefalopatia Hepática (Lactulose).'
  },
  {
    id: 'hda-nao-varicosa',
    category: 'Gastroenterologia',
    condition: 'Hemorragia Digestiva Alta (Não Varicosa)',
    tags: ['hda', 'sangramento', 'ulcera', 'omeprazol', 'ondansetrona'],
    prescriptions: [
      { drug: 'Omeprazol', dosage: '40mg', route: 'IV', frequency: 'De 12/12h.' },
      { drug: 'Ondansetrona', dosage: '4-8mg', route: 'IV', frequency: 'De 8/8h se náusea/vômito.' }
    ],
    clinicalNotes: 'Prioridade é a estabilização hemodinâmica. EDA nas primeiras 24h para diagnóstico e terapêutica. Manter dieta suspensa.'
  },
  {
    id: 'pancreatite-aguda',
    category: 'Gastroenterologia',
    condition: 'Pancreatite Aguda',
    tags: ['pancreatite', 'dor abdominal', 'tramadol', 'morfina', 'meropenem'],
    prescriptions: [
      { drug: 'Cloreto de Sódio 0,9%', dosage: '3 ml/kg/h', route: 'IV', frequency: 'Nas primeiras 8-12h.' },
      { drug: 'Dipirona', dosage: '1g', route: 'IV', frequency: 'De 6/6h.' },
      { drug: 'Tramadol', dosage: '100mg', route: 'IV diluído', frequency: 'De 8/8h.' },
      { drug: 'Morfina', dosage: '4-5mg (0,1mg/kg diluído)', route: 'IV', frequency: 'De 6/6h para dor intensa.' },
      { drug: 'Meropenem', dosage: '1g', route: 'IV', frequency: 'De 8/8h se suspeita de infecção.' }
    ],
    clinicalNotes: 'Dieta suspensa inicialmente. Hidratação vigorosa, analgesia potente e monitorização de sinais de choque e falência orgânica são cruciais. Solicitar exames para Score de Ranson.'
  },
  {
    id: 'cetoacidose-diabetica',
    category: 'Endocrinologia',
    condition: 'Cetoacidose Diabética (CAD)',
    tags: ['cad', 'diabetes', 'hiperglicemia', 'insulina', 'potassio'],
    prescriptions: [
      { drug: 'Cloreto de Sódio 0,9%', dosage: '15-20 ml/kg', route: 'IV', frequency: 'Na primeira hora.' },
      { drug: 'Insulina Regular', dosage: '0,1 U/kg/h em BIC', route: 'IV', frequency: 'Após ataque de 0,1-0,15 U/kg.' },
      { drug: 'Cloreto de Potássio 10%', dosage: '10-30 mEq/L', route: 'IV diluído', frequency: 'Adicionar à hidratação se K < 5,2.' }
    ],
    clinicalNotes: 'NÃO iniciar insulina se K < 3,3. Meta de queda da glicemia: 50-70 mg/dL/h. Adicionar SG 5% se glicemia < 200-250. Monitorização intensiva de glicemia e eletrólitos.'
  },
  {
    id: 'itu-cistite',
    category: 'Nefrologia',
    condition: 'Cistite (ITU Baixa)',
    tags: ['infeccao urinaria', 'cistite', 'fosfomicina', 'nitrofurantoina', 'pyridium'],
    prescriptions: [
      { drug: 'Fosfomicina', dosage: '3g', route: 'VO', frequency: 'Dose única, ao deitar.' },
      { drug: 'Nitrofurantoína', dosage: '100mg', route: 'VO', frequency: 'De 6/6h por 7 dias.' },
      { drug: 'Fenazopiridina (Pyridium)', dosage: '200mg', route: 'VO', frequency: 'De 8/8h se disúria (máx. 3 dias).' }
    ],
    clinicalNotes: 'Fosfomicina é uma opção prática de dose única. Fenazopiridina é sintomático e altera a cor da urina. Orientar aumento da ingesta hídrica.'
  },
  {
    id: 'itu-pielonefrite',
    category: 'Nefrologia',
    condition: 'Pielonefrite (ITU Alta)',
    tags: ['infeccao urinaria', 'pielonefrite', 'ceftriaxona', 'ciprofloxacino', 'piperacilina'],
    prescriptions: [
      { drug: 'Ceftriaxona', dosage: '1g', route: 'IV', frequency: 'De 24/24h por 10-14 dias.' },
      { drug: 'Ciprofloxacino', dosage: '400mg', route: 'IV', frequency: 'De 12/12h por 10-14 dias.' },
      { drug: 'Piperacilina + Tazobactam', dosage: '4,5g', route: 'IV', frequency: 'De 8/8h por 10-14 dias (se sepse).' }
    ],
    clinicalNotes: 'Prescrever hidratação IV, analgésicos e antitérmicos. Avaliar critérios de internação (sepse, intolerância a VO, gestação).'
  },
  {
    id: 'colica-nefretica',
    category: 'Nefrologia',
    condition: 'Cólica Nefrética (Ureterolitíase)',
    tags: ['pedra no rim', 'colica renal', 'cetoprofeno', 'tansulosina', 'morfina'],
    prescriptions: [
      { drug: 'Cetoprofeno', dosage: '100mg', route: 'IV diluído', frequency: 'Correr em 20 min.' },
      { drug: 'Morfina', dosage: '4-5mg (0,1mg/kg diluído)', route: 'IV', frequency: 'Se dor refratária.' },
      { drug: 'Tansulosina', dosage: '0,4mg', route: 'VO', frequency: '1x/dia à noite por até 10 dias.' }
    ],
    clinicalNotes: 'AINEs são a primeira linha para a dor. Tansulosina (alfabloqueador) auxilia na expulsão de cálculos distais (< 5mm). Hidratação e reavaliação são essenciais.'
  },
  {
    id: 'lombalgia-mecanica',
    category: 'Ortopedia',
    condition: 'Lombalgia Mecânica / Torcicolo',
    tags: ['dor nas costas', 'lombar', 'torcicolo', 'cetoprofeno', 'tramadol', 'ciclobenzaprina', 'torsilax'],
    prescriptions: [
      { drug: 'Cetoprofeno', dosage: '100mg', route: 'IV diluído', frequency: 'Correr em 20 min.' },
      { drug: 'Tramadol', dosage: '100mg', route: 'IV diluído', frequency: 'Se dor intensa.' },
      { drug: 'Carisoprodol + Diclofenaco (Torsilax)', dosage: '1 comprimido', route: 'VO', frequency: 'De 8/8h ou 12/12h por até 7 dias.' },
      { drug: 'Ciclobenzaprina', dosage: '10mg', route: 'VO', frequency: 'De 12/12h por 5 dias.' }
    ],
    clinicalNotes: 'Aplicar calor local. Repouso relativo. Orientar sobre sinais de alarme (irradiação, febre, déficits neurológicos).'
  },
  {
    id: 'sifilis',
    category: 'Infectologia',
    condition: 'Sífilis',
    tags: ['dst', 'sifilis', 'penicilina benzatina', 'doxiciclina'],
    prescriptions: [
      { drug: 'Penicilina Benzatina', dosage: '2.400.000 UI', route: 'IM (1.2M em cada nádega)', frequency: 'Dose única (recente).' },
      { drug: 'Penicilina Benzatina', dosage: '2.400.000 UI por semana', route: 'IM (1.2M em cada nádega)', frequency: 'Por 3 semanas (tardia/ignorada).' },
      { drug: 'Doxiciclina', dosage: '100mg', route: 'VO', frequency: 'De 12/12h por 15-30 dias (alternativa).' }
    ],
    clinicalNotes: 'O tratamento varia conforme o estágio da doença. Doxiciclina é alternativa para não gestantes alérgicas à penicilina. Tratar parceiros.'
  },
  {
    id: 'dengue',
    category: 'Infectologia',
    condition: 'Dengue',
    tags: ['dengue', 'febre', 'dipirona', 'paracetamol', 'hidratacao'],
    prescriptions: [
      { drug: 'Dipirona', dosage: '1g', route: 'VO ou IV', frequency: 'De 6/6h.' },
      { drug: 'Paracetamol', dosage: '750mg', route: 'VO', frequency: 'De 6/6h ou 8/8h.' },
      { drug: 'Hidratação Oral (Grupo A/B)', dosage: '60 ml/kg/dia', route: 'VO', frequency: 'Manter hidratação vigorosa.' },
      { drug: 'Hidratação Venosa (Grupo C/D)', dosage: '10-20 ml/kg', route: 'IV', frequency: 'Fase de expansão rápida.' }
    ],
    clinicalNotes: 'AINEs são contraindicados. Classificar o paciente nos grupos A, B, C ou D para definir a conduta e o nível de cuidado. Monitorar sinais de alarme (dor abdominal, vômitos, sangramentos).'
  },
  {
    id: 'anafilaxia-alergia',
    category: 'Imunologia',
    condition: 'Anafilaxia e Alergias',
    tags: ['anafilaxia', 'choque', 'alergia', 'adrenalina', 'prometazina', 'hidrocortisona', 'loratadina'],
    prescriptions: [
      { drug: 'Adrenalina (Anafilaxia)', dosage: '0,5mg (0,5ml) para >50kg', route: 'IM no vasto lateral', frequency: 'Dose única, pode repetir.' },
      { drug: 'Prometazina', dosage: '25mg', route: 'IM', frequency: 'Pode repetir em 2h.' },
      { drug: 'Hidrocortisona', dosage: '100mg', route: 'IV diluído ou IM', frequency: 'Dose única.' },
      { drug: 'Loratadina', dosage: '10mg', route: 'VO', frequency: '1x/dia à noite por 5-7 dias.' }
    ],
    clinicalNotes: 'Adrenalina IM é o tratamento de primeira linha para anafilaxia. Evitar Prometazina IV pelo risco de necrose. Anti-histamínicos e corticoides são adjuvantes.'
  },
  {
    id: 'intoxicacao-paracetamol',
    category: 'Toxicologia',
    condition: 'Intoxicação por Paracetamol',
    tags: ['intoxicacao', 'overdose', 'paracetamol', 'n-acetilcisteina'],
    prescriptions: [
      { drug: 'N-acetilcisteína (Ataque)', dosage: '140 mg/kg', route: 'VO diluído', frequency: 'Dose inicial.' },
      { drug: 'N-acetilcisteína (Manutenção)', dosage: '70 mg/kg', route: 'VO diluído', frequency: 'A cada 4h por 17 doses.' },
      { drug: 'N-acetilcisteína (IV)', dosage: '150mg/kg em 1h, depois 50mg/kg em 4h, depois 100mg/kg em 16h', route: 'IV', frequency: 'Protocolo de 21h.' }
    ],
    clinicalNotes: 'Eficácia aumenta se administrado nas primeiras 8 horas. Indicações: ingestão > 7,5g ou sinais de injúria hepática. Preferir via IV se vômitos ou rebaixamento do sensório.'
  }
];
