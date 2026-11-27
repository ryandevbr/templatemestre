export type StoreNiche = "acessorios" | "moda" | "calcados";

export interface PhysicalStoreConfig {
  active: boolean;
  title: string;
  address: string;
  cityState: string;
  mapsQuery: string;
}

export interface StoreThemeConfig {
  primary: string;
  primaryHover: string;
  secondary: string;
  background: string;
  surface: string;
  foreground: string;
  mutedForeground: string;
}

export interface StoreHeroConfig {
  badge: string;
  title: string;
  subtitle: string;
}

export interface StoreConfig {
  name: string;
  niche: StoreNiche;
  whatsapp: string;
  whatsappDisplay: string;
  instagramHandle: string;
  instagramUrl: string;
  physicalStore?: PhysicalStoreConfig | undefined;
  theme: StoreThemeConfig;
  hero: StoreHeroConfig;
  defaultAnnouncement: string;
  tagline?: string;
  aboutTitle?: string;
  aboutText?: string;
  enableAiDemoPricing: boolean;
}

/**
 * Configuração central White-Label da loja.
 * Altere apenas este arquivo para adaptar nome, nicho ("moda", "calcados" ou "acessorios"),
 * contatos, loja física, paleta de cores e textos principais.
 */
export const STORE_CONFIG: StoreConfig = {
  name: "Minha Loja",
  niche: "moda", // "moda" | "calcados" | "acessorios"
  enableAiDemoPricing: true, // Mude para false antes de entregar o painel ao cliente final
  whatsapp: "5531999999999",
  whatsappDisplay: "(31) 99999-9999",
  instagramHandle: "@minhaloja",
  instagramUrl: "https://instagram.com/minhaloja",
  physicalStore: {
    active: false,
    title: "Retirada na Loja Física",
    address: "Rua Exemplo, 123 — Centro",
    cityState: "Belo Horizonte - MG",
    mapsQuery: "Rua Exemplo, 123, Centro, Belo Horizonte - MG",
  },
  theme: {
    primary: "#C91E7C",
    primaryHover: "#A71665",
    secondary: "#EAE1EB",
    background: "#FFFFFF",
    surface: "#FAF8FB",
    foreground: "#3D3533",
    mutedForeground: "#5C514E",
  },
  hero: {
    badge: "Curadoria feita com carinho",
    title: "Invista em você: peças que são a alma do look!",
    subtitle:
      "Peças selecionadas para realçar o seu estilo em todos os momentos. Atendimento personalizado e envio para todo o Brasil.",
  },
  defaultAnnouncement: "Sua primeira compra merece um brilho extra: 10% OFF com PRIMEIRACOMPRA",
  tagline: "Seu estilo merece esse destaque.",
  aboutTitle: "Mais que peças, um pouco de você.",
  aboutText:
    "Acreditamos que os detalhes revelam quem você é. Nossa curadoria reúne estilo, qualidade e personalidade para acompanhar o seu cotidiano e os seus momentos mais especiais, com atendimento próximo e envio para todo o Brasil.",
};

export const QUICK_SIZES = [
  "PP",
  "P",
  "M",
  "G",
  "GG",
  "G1",
  "Tamanho Único",
  "36",
  "38",
  "40",
  "42",
  "44",
] as const;

export const SHOE_SIZES = [
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
] as const;

export interface NicheCatalogDefaults {
  categories: readonly string[];
  materials: readonly string[];
}

export const NICHE_CATALOG_DEFAULTS: Record<StoreNiche, NicheCatalogDefaults> = {
  acessorios: {
    categories: ["Anéis", "Colares", "Brincos", "Pulseiras", "Tornozeleiras", "Conjuntos"],
    materials: ["Prata 925", "Semijoia", "Folheado", "Aço Inox", "Bijuteria Fina"],
  },
  moda: {
    categories: [
      "Vestidos",
      "Conjuntos",
      "Blusas & Croppeds",
      "Calças",
      "Shorts & Saias",
      "Macaquinhos & Macacões",
      "Tricot & Inverno",
      "Moda Praia",
    ],
    materials: [
      "Alfaiataria",
      "Linho",
      "Viscolinho",
      "Algodão",
      "Crepe",
      "Canelado",
      "Tricot",
      "Jeans",
      "Poliamida",
    ],
  },
  calcados: {
    categories: [
      "Sandálias",
      "Rasteiras",
      "Tênis",
      "Botas",
      "Scarpins",
      "Sapatilhas",
      "Mules & Tamancos",
      "Chinelos & Slides",
    ],
    materials: [
      "Couro",
      "Couro Sintético",
      "Camurça",
      "Nobuck",
      "Verniz",
      "Napa",
      "Têxtil / Malha",
      "Borracha / EVA",
    ],
  },
};

export const NICHE_DEFAULT_CATEGORIES: Record<StoreNiche, readonly string[]> = {
  acessorios: NICHE_CATALOG_DEFAULTS.acessorios.categories,
  moda: NICHE_CATALOG_DEFAULTS.moda.categories,
  calcados: NICHE_CATALOG_DEFAULTS.calcados.categories,
};

export const NICHE_DEFAULT_MATERIALS: Record<StoreNiche, readonly string[]> = {
  acessorios: NICHE_CATALOG_DEFAULTS.acessorios.materials,
  moda: NICHE_CATALOG_DEFAULTS.moda.materials,
  calcados: NICHE_CATALOG_DEFAULTS.calcados.materials,
};

export function isFashionNiche(niche: StoreNiche = STORE_CONFIG.niche): boolean {
  return niche === "moda";
}

export function isFootwearNiche(niche: StoreNiche = STORE_CONFIG.niche): boolean {
  return niche === "calcados";
}

export function supportsSizes(niche: StoreNiche = STORE_CONFIG.niche): boolean {
  return niche === "moda" || niche === "calcados";
}

export function getQuickSizesForNiche(niche: StoreNiche = STORE_CONFIG.niche): readonly string[] {
  return niche === "calcados" ? SHOE_SIZES : QUICK_SIZES;
}

export function getNicheDisplayName(niche: StoreNiche = STORE_CONFIG.niche): string {
  if (niche === "moda") return "Moda Feminina";
  if (niche === "calcados") return "Calçados";
  return "Acessórios";
}

export function getMaterialLabel(niche: StoreNiche = STORE_CONFIG.niche): "Tecido" | "Material" {
  return niche === "moda" ? "Tecido" : "Material";
}

export function getMaterialLabelPlural(
  niche: StoreNiche = STORE_CONFIG.niche,
): "Tecidos" | "Materiais" {
  return niche === "moda" ? "Tecidos" : "Materiais";
}

export function getWhatsappUrl(
  message?: string,
  whatsappNumber: string = STORE_CONFIG.whatsapp,
): string {
  const digits = whatsappNumber.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function hasActivePhysicalStore(config: StoreConfig = STORE_CONFIG): boolean {
  return Boolean(config.physicalStore?.active);
}

export function getPhysicalStoreMapsUrl(store: PhysicalStoreConfig): string {
  const query = store.mapsQuery.trim() || `${store.address}, ${store.cityState}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function getDefaultBannerAlt(storeName: string = STORE_CONFIG.name): string {
  return `Banner ${storeName}`;
}

export function getStoreThemeVariables(theme: StoreThemeConfig): Record<string, string> {
  return {
    "--primary": theme.primary,
    "--primary-hover": theme.primaryHover,
    "--secondary": theme.secondary,
    "--accent": theme.secondary,
    "--background": theme.background,
    "--card": theme.background,
    "--popover": theme.background,
    "--surface": theme.surface,
    "--muted": theme.surface,
    "--foreground": theme.foreground,
    "--card-foreground": theme.foreground,
    "--popover-foreground": theme.foreground,
    "--secondary-foreground": theme.foreground,
    "--accent-foreground": theme.foreground,
    "--muted-foreground": theme.mutedForeground,
    "--ring": theme.primary,
  };
}

export function buildRootThemeCss(theme: StoreThemeConfig = STORE_CONFIG.theme): string {
  const entries = Object.entries(getStoreThemeVariables(theme))
    .map(([key, value]) => `${key}:${value};`)
    .join("");
  return `:root{${entries}}`;
}

export function applyStoreTheme(
  theme: StoreThemeConfig = STORE_CONFIG.theme,
  storeName: string = STORE_CONFIG.name,
): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  for (const [variable, value] of Object.entries(getStoreThemeVariables(theme))) {
    root.style.setProperty(variable, value);
  }
  if (!document.title.trim()) {
    document.title = storeName;
  }
}

export function toggleQuickSize(currentSizes: string[], size: string): string[] {
  const exists = currentSizes.includes(size);
  const next = exists ? currentSizes.filter((item) => item !== size) : [...currentSizes, size];
  const canonical = [...QUICK_SIZES, ...SHOE_SIZES.filter((s) => !(QUICK_SIZES as readonly string[]).includes(s))];
  const orderIndex = new Map<string, number>(canonical.map((label, index) => [label, index]));
  return [...next].sort((a, b) => {
    const idxA = orderIndex.get(a);
    const idxB = orderIndex.get(b);
    if (idxA !== undefined && idxB !== undefined) return idxA - idxB;
    if (idxA !== undefined) return -1;
    if (idxB !== undefined) return 1;
    return a.localeCompare(b, "pt-BR");
  });
}
