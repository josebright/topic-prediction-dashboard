type FieldOfScience = {
   [key: string]: {
     [key: string]: string[];
   }[];
 };

export const publicationTypes = [
    "Article",
    "Book",
    "Data Paper",
    "Journal",
    "Part of book or chapter of book",
    "Preprint",
    "Research",
    "Software Paper",
    "Thesis"
]

export const fieldOfSciences : FieldOfScience = {
    "natural sciences":[
       {
          "mathematics":[
             "applied mathematics",
             "general mathematics",
             "numerical & computational mathematics",
             "statistics & probability"
          ]
       },
       {
          "computer and information sciences":[
             "computation theory & mathematics"
          ]
       },
       {
          "physical sciences":[
             "acoustics",
             "applied physics",
             "astronomy & astrophysics",
             "chemical physics",
             "fluids & plasmas",
             "general physics",
             "mathematical physics",
             "nuclear & particles physics",
             "optics"
          ]
       },
       {
          "chemical sciences":[
             "analytical chemistry",
             "general chemistry",
             "inorganic & nuclear chemistry",
             "medicinal & biomolecular chemistry",
             "organic chemistry",
             "physical chemistry",
             "polymers"
          ]
       },
       {
          "earth and related environmental sciences":[
             "environmental sciences",
             "geochemistry & geophysics",
             "geology",
             "meteorology & atmospheric sciences",
             "oceanography",
             "paleontology"
          ]
       },
       {
          "biological sciences":[
             "ecology",
             "entomology",
             "evolutionary biology",
             "marine biology & hydrobiology",
             "ornithology",
             "plant biology & botany",
             "zoology",
             "biotechnology"
          ]
       }
    ],
    "engineering and technology":[
       {
          "civil engineering":[
             "civil engineering"
          ]
       },
       {
          "electrical/electronic/information engineering":[
             "artificial intelligence & image processing",
             "computer hardware & architecture",
             "distributed computing",
             "information systems",
             "medical informatics",
             "networking & telecommunications",
             "software engineering",
             "electrical & electronic engineering",
             "energy",
             "optoelectronics & photonics"
          ]
       },
       {
          "mechanical engineering":[
             "aerospace & aeronautics",
             "automobile design & engineering",
             "mechanical engineering & transports"
          ]
       },
       {
          "chemical engineering":[
             "chemical engineering"
          ]
       },
       {
          "materials engineering":[
             "mining & metallurgy",
             "materials"
          ]
       },
       {
          "medical engineering":[
             "biomedical engineering",
             "bioinformatics"
          ]
       },
       {
          "environmental engineering":[
             "environmental engineering"
          ]
       },
       {
          "environmental biotechnology":[
             "environmental engineering"
          ]
       },
       {
          "industrial biotechnology":[
             "industrial engineering & automation"
          ]
       },
       {
          "nano-technology":[
             "nanoscience & nanotechnology"
          ]
       },
       {
          "other engineering and technologies":[
             "geological & geomatics engineering",
             "mining & metallurgy",
             "operations research",
             "architecture",
             "building & construction",
             "design practice & management",
             "urban & regional planning",
             "energy",
             "optoelectronics & photonics",
             "strategic, defence & security studies"
          ]
       }
    ],
    "medical and health sciences":[
       {
          "basic medicine":[
             "anatomy & morphology",
             "biochemistry & molecular biology",
             "biophysics",
             "developmental biology",
             "genetics & heredity",
             "microbiology",
             "microscopy",
             "mycology & parasitology",
             "nutrition & dietetics",
             "physiology",
             "toxicology",
             "virology"
          ]
       },
       {
          "clinical medicine":[
             "allergy",
             "anesthesiology",
             "arthritis & rheumatology",
             "cardiovascular system & hematology",
             "complementary & alternative medicine",
             "dentistry",
             "dermatology & venereal diseases",
             "emergency & critical care medicine",
             "endocrinology & metabolism",
             "environmental & occupational health",
             "gastroenterology & hepatology",
             "general & internal medicine",
             "general clinical medicine",
             "geriatrics",
             "immunology",
             "legal & forensic medicine",
             "neurology & neurosurgery",
             "nuclear medicine & medical imaging",
             "obstetrics & reproductive medicine",
             "oncology & carcinogenesis",
             "ophthalmology & optometry",
             "orthopedics",
             "otorhinolaryngology",
             "pathology",
             "pediatrics",
             "pharmacology & pharmacy",
             "psychiatry",
             "respiratory system",
             "sport sciences",
             "surgery",
             "tropical medicine",
             "urology & nephrology"
          ]
       },
       {
          "health sciences":[
             "anatomy & morphology",
             "biochemistry & molecular biology",
             "biophysics",
             "developmental biology",
             "genetics & heredity",
             "microbiology",
             "microscopy",
             "mycology & parasitology",
             "nutrition & dietetics",
             "physiology",
             "toxicology",
             "virology"
          ]
       },
       {
          "other medical science":[
             "epidemiology",
             "gerontology",
             "health policy & services",
             "nursing",
             "public health",
             "rehabilitation",
             "speech-language pathology & audiology",
             "substance abuse"
          ]
       }
    ],
    "agricultural and veterinary sciences":[
       {
          "agriculture/forestry/fisheries":[
             "forestry",
             "fisheries",
             "agronomy & agriculture"
          ]
       },
       {
          "animal and dairy science":[
             "dairy & animal science"
          ]
       },
       {
          "veterinary science":[
             "veterinary sciences"
          ]
       },
       {
          "agricultural biotechnology":[
             "food science"
          ]
       },
       {
          "other agricultural sciences":[
             "horticulture",
             "food science"
          ]
       }
    ],
    "social sciences":[
       {
          "psychology and cognitive sciences":[
             "languages & linguistics",
             "behavioral science & comparative psychology",
             "clinical psychology",
             "developmental & child psychology",
             "experimental psychology",
             "general psychology & cognitive sciences",
             "human factors",
             "psychoanalysis",
             "social psychology"
          ]
       },
       {
          "economics and business":[
             "accounting",
             "agricultural economics & policy",
             "business & management",
             "development studies",
             "econometrics ",
             "economic theory",
             "economics",
             "finance",
             "industrial relations",
             "logistics & transportation",
             "marketing",
             "sport, leisure & tourism"
          ]
       },
       {
          "education":[
             "education"
          ]
       },
       {
          "sociology":[
             "social sciences methods",
             "sociology"
          ]
       },
       {
          "law":[
             "criminology",
             "law"
          ]
       },
       {
          "political science":[
             "international relations",
             "political science & public administration"
          ]
       },
       {
          "social and economic geography":[
             "cultural studies",
             "demography",
             "geography"
          ]
       },
       {
          "media and communications":[
             "communication & media studies"
          ]
       },
       {
          "other social sciences":[
             "criminology",
             "family studies",
             "gender studies",
             "information & library sciences",
             "science studies",
             "social work"
          ]
       }
    ],
    "humanities and the arts":[
       {
          "history and archaeology":[
             "anthropology",
             "archaeology",
             "classics",
             "history",
             "history of science, technology & medicine",
             "history of social sciences"
          ]
       },
       {
          "languages and literature":[
             "languages & linguistics",
             "literary studies"
          ]
       },
       {
          "philosophy/ethics and religion":[
             "applied ethics",
             "philosophy",
             "religions & theology"
          ]
       },
       {
          "arts":[
             "art practice, history & theory",
             "drama & theater",
             "folklore",
             "music"
          ]
       }
    ]
 }