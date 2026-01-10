import { Product } from '@/types';

export const products: Product[] = [
  // ==================== ELECTRICAL SWITCHGEAR & CONTROL ====================
  {
    id: 'prod-001',
    name: 'Siemens 3RT2 Contactor 9A',
    description: 'Siemens SIRIUS 3RT2 power contactor, 3-pole, 9A, 4kW/400V, 24V DC coil. Suitable for switching motors and other loads.',
    price: 45.00,
    currency: 'USD',
    category: 'Electrical Switchgear & Control',
    categorySlug: 'switchgear-control',
    brand: 'Siemens',
    image: 'https://images.unsplash.com/photo-1621905251918-48116d1b9c42?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 25,
    featured: true,
    specifications: {
      'Rated Current': '9A',
      'Power Rating': '4kW at 400V',
      'Coil Voltage': '24V DC',
      'Poles': '3',
      'Mounting': 'DIN Rail'
    },
    sku: 'SIE-3RT2016',
    warranty: '12 months'
  },
  {
    id: 'prod-002',
    name: 'Siemens 3RT2 Contactor 25A',
    description: 'Siemens SIRIUS 3RT2 power contactor, 3-pole, 25A, 11kW/400V, 230V AC coil for motor and general load switching.',
    price: 78.00,
    currency: 'USD',
    category: 'Electrical Switchgear & Control',
    categorySlug: 'switchgear-control',
    brand: 'Siemens',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 18,
    featured: true,
    specifications: {
      'Rated Current': '25A',
      'Power Rating': '11kW at 400V',
      'Coil Voltage': '230V AC',
      'Poles': '3',
      'Mounting': 'DIN Rail'
    },
    sku: 'SIE-3RT2026',
    warranty: '12 months'
  },
  {
    id: 'prod-003',
    name: 'Siemens 3RT2 Contactor 40A',
    description: 'Siemens SIRIUS 3RT2 power contactor, 3-pole, 40A, 18.5kW/400V. Heavy-duty contactor for industrial applications.',
    price: 125.00,
    currency: 'USD',
    category: 'Electrical Switchgear & Control',
    categorySlug: 'switchgear-control',
    brand: 'Siemens',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=Siemens+40A',
    inStock: true,
    stockQuantity: 12,
    featured: false,
    specifications: {
      'Rated Current': '40A',
      'Power Rating': '18.5kW at 400V',
      'Coil Voltage': '230V AC',
      'Poles': '3'
    },
    sku: 'SIE-3RT2035',
    warranty: '12 months'
  },
  {
    id: 'prod-004',
    name: 'Siemens 3RT2 Contactor 65A',
    description: 'Siemens SIRIUS 3RT2 power contactor, 3-pole, 65A, 30kW/400V. For heavy industrial motor control.',
    price: 195.00,
    currency: 'USD',
    category: 'Electrical Switchgear & Control',
    categorySlug: 'switchgear-control',
    brand: 'Siemens',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=Siemens+65A',
    inStock: true,
    stockQuantity: 8,
    specifications: {
      'Rated Current': '65A',
      'Power Rating': '30kW at 400V',
      'Coil Voltage': '230V AC',
      'Poles': '3'
    },
    sku: 'SIE-3RT2037',
    warranty: '12 months'
  },
  {
    id: 'prod-005',
    name: 'ABB AF09 Contactor 9A',
    description: 'ABB AF series contactor, 3-pole, 9A, 4kW/400V with wide voltage range coil (100-250V AC/DC).',
    price: 52.00,
    currency: 'USD',
    category: 'Electrical Switchgear & Control',
    categorySlug: 'switchgear-control',
    brand: 'ABB',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 20,
    featured: true,
    specifications: {
      'Rated Current': '9A',
      'Power Rating': '4kW at 400V',
      'Coil Voltage': '100-250V AC/DC',
      'Poles': '3'
    },
    sku: 'ABB-AF09-30',
    warranty: '12 months'
  },
  {
    id: 'prod-006',
    name: 'ABB AF26 Contactor 26A',
    description: 'ABB AF series contactor, 3-pole, 26A, 11kW/400V. Compact design with electronic coil.',
    price: 85.00,
    currency: 'USD',
    category: 'Electrical Switchgear & Control',
    categorySlug: 'switchgear-control',
    brand: 'ABB',
    image: 'https://placehold.co/400x400/DC2626/FFFFFF?text=ABB+AF26',
    inStock: true,
    stockQuantity: 15,
    specifications: {
      'Rated Current': '26A',
      'Power Rating': '11kW at 400V',
      'Coil Voltage': '100-250V AC/DC',
      'Poles': '3'
    },
    sku: 'ABB-AF26-30',
    warranty: '12 months'
  },
  {
    id: 'prod-007',
    name: 'Schneider LC1D09 Contactor 9A',
    description: 'Schneider Electric TeSys D contactor, 3-pole, 9A, 4kW/400V, 230V AC coil.',
    price: 42.00,
    currency: 'USD',
    category: 'Electrical Switchgear & Control',
    categorySlug: 'switchgear-control',
    brand: 'Schneider',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 30,
    featured: true,
    specifications: {
      'Rated Current': '9A',
      'Power Rating': '4kW at 400V',
      'Coil Voltage': '230V AC',
      'Poles': '3'
    },
    sku: 'SCH-LC1D09P7',
    warranty: '12 months'
  },
  {
    id: 'prod-008',
    name: 'Schneider LC1D25 Contactor 25A',
    description: 'Schneider Electric TeSys D contactor, 3-pole, 25A, 11kW/400V. Reliable motor control.',
    price: 68.00,
    currency: 'USD',
    category: 'Electrical Switchgear & Control',
    categorySlug: 'switchgear-control',
    brand: 'Schneider',
    image: 'https://placehold.co/400x400/3B8132/FFFFFF?text=Schneider+LC1D25',
    inStock: true,
    stockQuantity: 22,
    specifications: {
      'Rated Current': '25A',
      'Power Rating': '11kW at 400V',
      'Coil Voltage': '230V AC',
      'Poles': '3'
    },
    sku: 'SCH-LC1D25P7',
    warranty: '12 months'
  },
  {
    id: 'prod-009',
    name: 'Siemens 3RU2 Overload Relay 1-1.6A',
    description: 'Siemens thermal overload relay, setting range 1-1.6A. CLASS 10 for motor protection.',
    price: 35.00,
    currency: 'USD',
    category: 'Electrical Switchgear & Control',
    categorySlug: 'switchgear-control',
    brand: 'Siemens',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=Overload+Relay',
    inStock: true,
    stockQuantity: 35,
    specifications: {
      'Setting Range': '1-1.6A',
      'Class': '10',
      'Type': 'Thermal'
    },
    sku: 'SIE-3RU2116',
    warranty: '12 months'
  },
  {
    id: 'prod-010',
    name: 'Siemens 3RU2 Overload Relay 4-6A',
    description: 'Siemens thermal overload relay, setting range 4-6A. For motor protection applications.',
    price: 38.00,
    currency: 'USD',
    category: 'Electrical Switchgear & Control',
    categorySlug: 'switchgear-control',
    brand: 'Siemens',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=Overload+4-6A',
    inStock: true,
    stockQuantity: 28,
    specifications: {
      'Setting Range': '4-6A',
      'Class': '10',
      'Type': 'Thermal'
    },
    sku: 'SIE-3RU2126',
    warranty: '12 months'
  },
  {
    id: 'prod-011',
    name: 'ABB TA25DU Overload Relay 1-1.4A',
    description: 'ABB thermal overload relay with adjustable setting range 1-1.4A.',
    price: 32.00,
    currency: 'USD',
    category: 'Electrical Switchgear & Control',
    categorySlug: 'switchgear-control',
    brand: 'ABB',
    image: 'https://placehold.co/400x400/DC2626/FFFFFF?text=ABB+Overload',
    inStock: true,
    stockQuantity: 25,
    specifications: {
      'Setting Range': '1-1.4A',
      'Type': 'Thermal'
    },
    sku: 'ABB-TA25DU-1.4',
    warranty: '12 months'
  },
  {
    id: 'prod-012',
    name: 'Eaton DILM25 Contactor 25A',
    description: 'Eaton DILM series contactor, 3-pole, 25A, 11kW/400V, 230V AC coil.',
    price: 65.00,
    currency: 'USD',
    category: 'Electrical Switchgear & Control',
    categorySlug: 'switchgear-control',
    brand: 'Eaton',
    image: 'https://placehold.co/400x400/1E40AF/FFFFFF?text=Eaton+DILM25',
    inStock: true,
    stockQuantity: 18,
    specifications: {
      'Rated Current': '25A',
      'Power Rating': '11kW at 400V',
      'Coil Voltage': '230V AC',
      'Poles': '3'
    },
    sku: 'EAT-DILM25',
    warranty: '12 months'
  },
  {
    id: 'prod-013',
    name: 'Allen Bradley 100-C09 Contactor',
    description: 'Allen Bradley 100-C series contactor, 9A, for motor and general purpose switching.',
    price: 58.00,
    currency: 'USD',
    category: 'Electrical Switchgear & Control',
    categorySlug: 'switchgear-control',
    brand: 'Allen Bradley',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 12,
    featured: true,
    specifications: {
      'Rated Current': '9A',
      'Coil Voltage': '230V AC',
      'Poles': '3'
    },
    sku: 'AB-100-C09',
    warranty: '12 months'
  },

  // ==================== VARIABLE FREQUENCY DRIVES ====================
  {
    id: 'prod-014',
    name: 'INVT GD20 VFD 0.75kW',
    description: 'INVT GD20 series variable frequency drive, 0.75kW/1HP, 220V single phase input, vector control.',
    price: 145.00,
    currency: 'USD',
    category: 'Variable Frequency Drives',
    categorySlug: 'vfd-drives',
    brand: 'INVT',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 15,
    featured: true,
    specifications: {
      'Power Rating': '0.75kW / 1HP',
      'Input Voltage': '220V 1-Phase',
      'Output Voltage': '220V 3-Phase',
      'Control Mode': 'V/F, Vector'
    },
    sku: 'INVT-GD20-0R7',
    warranty: '18 months'
  },
  {
    id: 'prod-015',
    name: 'INVT GD20 VFD 1.5kW',
    description: 'INVT GD20 series variable frequency drive, 1.5kW/2HP, 220V single phase input.',
    price: 175.00,
    currency: 'USD',
    category: 'Variable Frequency Drives',
    categorySlug: 'vfd-drives',
    brand: 'INVT',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 12,
    featured: true,
    specifications: {
      'Power Rating': '1.5kW / 2HP',
      'Input Voltage': '220V 1-Phase',
      'Output Voltage': '220V 3-Phase',
      'Control Mode': 'V/F, Vector'
    },
    sku: 'INVT-GD20-1R5',
    warranty: '18 months'
  },
  {
    id: 'prod-016',
    name: 'INVT GD20 VFD 2.2kW',
    description: 'INVT GD20 series variable frequency drive, 2.2kW/3HP, 220V single phase input.',
    price: 210.00,
    currency: 'USD',
    category: 'Variable Frequency Drives',
    categorySlug: 'vfd-drives',
    brand: 'INVT',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=INVT+2.2kW',
    inStock: true,
    stockQuantity: 10,
    specifications: {
      'Power Rating': '2.2kW / 3HP',
      'Input Voltage': '220V 1-Phase',
      'Output Voltage': '220V 3-Phase'
    },
    sku: 'INVT-GD20-2R2',
    warranty: '18 months'
  },
  {
    id: 'prod-017',
    name: 'INVT GD100 VFD 4kW 380V',
    description: 'INVT GD100 series VFD, 4kW/5.5HP, 380V 3-phase input, heavy-duty industrial drive.',
    price: 320.00,
    currency: 'USD',
    category: 'Variable Frequency Drives',
    categorySlug: 'vfd-drives',
    brand: 'INVT',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 8,
    featured: true,
    specifications: {
      'Power Rating': '4kW / 5.5HP',
      'Input Voltage': '380V 3-Phase',
      'Output Voltage': '380V 3-Phase',
      'Control Mode': 'Sensorless Vector'
    },
    sku: 'INVT-GD100-4R0',
    warranty: '18 months'
  },
  {
    id: 'prod-018',
    name: 'INVT GD100 VFD 7.5kW 380V',
    description: 'INVT GD100 series VFD, 7.5kW/10HP, 380V 3-phase, for pumps, fans, and general machinery.',
    price: 485.00,
    currency: 'USD',
    category: 'Variable Frequency Drives',
    categorySlug: 'vfd-drives',
    brand: 'INVT',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=INVT+7.5kW',
    inStock: true,
    stockQuantity: 6,
    specifications: {
      'Power Rating': '7.5kW / 10HP',
      'Input Voltage': '380V 3-Phase',
      'Output Voltage': '380V 3-Phase'
    },
    sku: 'INVT-GD100-7R5',
    warranty: '18 months'
  },
  {
    id: 'prod-019',
    name: 'INVT GD100 VFD 11kW 380V',
    description: 'INVT GD100 series VFD, 11kW/15HP, 380V 3-phase input/output.',
    price: 620.00,
    currency: 'USD',
    category: 'Variable Frequency Drives',
    categorySlug: 'vfd-drives',
    brand: 'INVT',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=INVT+11kW',
    inStock: true,
    stockQuantity: 5,
    specifications: {
      'Power Rating': '11kW / 15HP',
      'Input Voltage': '380V 3-Phase',
      'Output Voltage': '380V 3-Phase'
    },
    sku: 'INVT-GD100-011',
    warranty: '18 months'
  },
  {
    id: 'prod-020',
    name: 'INVT GD100 VFD 15kW 380V',
    description: 'INVT GD100 series VFD, 15kW/20HP, 380V 3-phase, heavy-duty industrial applications.',
    price: 785.00,
    currency: 'USD',
    category: 'Variable Frequency Drives',
    categorySlug: 'vfd-drives',
    brand: 'INVT',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=INVT+15kW',
    inStock: true,
    stockQuantity: 4,
    specifications: {
      'Power Rating': '15kW / 20HP',
      'Input Voltage': '380V 3-Phase'
    },
    sku: 'INVT-GD100-015',
    warranty: '18 months'
  },
  {
    id: 'prod-021',
    name: 'INVT GD100 VFD 22kW 380V',
    description: 'INVT GD100 series VFD, 22kW/30HP, 380V 3-phase for large motor applications.',
    price: 1050.00,
    currency: 'USD',
    category: 'Variable Frequency Drives',
    categorySlug: 'vfd-drives',
    brand: 'INVT',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=INVT+22kW',
    inStock: true,
    stockQuantity: 3,
    specifications: {
      'Power Rating': '22kW / 30HP',
      'Input Voltage': '380V 3-Phase'
    },
    sku: 'INVT-GD100-022',
    warranty: '18 months'
  },
  {
    id: 'prod-022',
    name: 'Siemens SINAMICS V20 1.5kW',
    description: 'Siemens SINAMICS V20 basic inverter, 1.5kW, 230V single phase input. Compact and reliable.',
    price: 285.00,
    currency: 'USD',
    category: 'Variable Frequency Drives',
    categorySlug: 'vfd-drives',
    brand: 'Siemens',
    image: 'https://images.unsplash.com/photo-1621905251918-48116d1b9c42?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 6,
    featured: true,
    specifications: {
      'Power Rating': '1.5kW',
      'Input Voltage': '230V 1-Phase',
      'IP Rating': 'IP20'
    },
    sku: 'SIE-V20-1R5',
    warranty: '24 months'
  },
  {
    id: 'prod-023',
    name: 'ABB ACS355 VFD 2.2kW',
    description: 'ABB ACS355 machinery drive, 2.2kW, 380V 3-phase, for OEM and system integrators.',
    price: 425.00,
    currency: 'USD',
    category: 'Variable Frequency Drives',
    categorySlug: 'vfd-drives',
    brand: 'ABB',
    image: 'https://placehold.co/400x400/DC2626/FFFFFF?text=ABB+ACS355',
    inStock: true,
    stockQuantity: 5,
    specifications: {
      'Power Rating': '2.2kW',
      'Input Voltage': '380V 3-Phase'
    },
    sku: 'ABB-ACS355-2R2',
    warranty: '24 months'
  },

  // ==================== CABLES & TERMINATION KITS ====================
  {
    id: 'prod-024',
    name: 'SWA Cable 4x10mm² per meter',
    description: 'Steel Wire Armoured cable, 4 core, 10mm² copper conductors, 600/1000V rated.',
    price: 8.50,
    currency: 'USD',
    category: 'Cables & Termination Kits',
    categorySlug: 'cables-termination',
    brand: 'Cafca',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=SWA+Cable',
    inStock: true,
    stockQuantity: 500,
    specifications: {
      'Cores': '4',
      'Size': '10mm²',
      'Type': 'SWA',
      'Voltage Rating': '600/1000V'
    },
    sku: 'CAB-SWA-4X10',
    warranty: 'N/A'
  },
  {
    id: 'prod-025',
    name: 'SWA Cable 4x16mm² per meter',
    description: 'Steel Wire Armoured cable, 4 core, 16mm² copper conductors.',
    price: 12.50,
    currency: 'USD',
    category: 'Cables & Termination Kits',
    categorySlug: 'cables-termination',
    brand: 'Cafca',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=SWA+4x16mm',
    inStock: true,
    stockQuantity: 400,
    specifications: {
      'Cores': '4',
      'Size': '16mm²',
      'Type': 'SWA'
    },
    sku: 'CAB-SWA-4X16',
    warranty: 'N/A'
  },
  {
    id: 'prod-026',
    name: 'SWA Cable 4x25mm² per meter',
    description: 'Steel Wire Armoured cable, 4 core, 25mm² copper conductors.',
    price: 18.00,
    currency: 'USD',
    category: 'Cables & Termination Kits',
    categorySlug: 'cables-termination',
    brand: 'Cafca',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=SWA+4x25mm',
    inStock: true,
    stockQuantity: 300,
    specifications: {
      'Cores': '4',
      'Size': '25mm²'
    },
    sku: 'CAB-SWA-4X25',
    warranty: 'N/A'
  },
  {
    id: 'prod-027',
    name: 'Metaplast Cable Joining Kit MX3',
    description: 'Metaplast low tension cable splicing/joining kit, suitable for cables up to 4x16mm².',
    price: 28.00,
    currency: 'USD',
    category: 'Cables & Termination Kits',
    categorySlug: 'cables-termination',
    brand: 'Metaplast',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 45,
    featured: true,
    specifications: {
      'Type': 'Resin Joint',
      'Voltage': '1.1kV',
      'Max Cable Size': '4x16mm²'
    },
    sku: 'MET-MX3',
    warranty: 'N/A'
  },
  {
    id: 'prod-028',
    name: 'Metaplast Cable Joining Kit MX4',
    description: 'Metaplast low tension cable splicing kit for cables up to 4x35mm².',
    price: 38.00,
    currency: 'USD',
    category: 'Cables & Termination Kits',
    categorySlug: 'cables-termination',
    brand: 'Metaplast',
    image: 'https://placehold.co/400x400/800080/FFFFFF?text=MX4+Kit',
    inStock: true,
    stockQuantity: 35,
    specifications: {
      'Type': 'Resin Joint',
      'Voltage': '1.1kV',
      'Max Cable Size': '4x35mm²'
    },
    sku: 'MET-MX4',
    warranty: 'N/A'
  },
  {
    id: 'prod-029',
    name: 'Heat Shrink Termination Kit 11kV 3-core',
    description: '11kV heat shrink cable termination kit for 3-core XLPE cables, indoor type.',
    price: 185.00,
    currency: 'USD',
    category: 'Cables & Termination Kits',
    categorySlug: 'cables-termination',
    brand: 'REPL',
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 15,
    featured: true,
    specifications: {
      'Voltage Class': '11kV',
      'Cores': '3',
      'Type': 'Indoor Heat Shrink'
    },
    sku: 'REPL-HT11-3C',
    warranty: 'N/A'
  },
  {
    id: 'prod-030',
    name: 'Heat Shrink Termination Kit 11kV Outdoor',
    description: '11kV heat shrink cable termination kit, outdoor type with weather sealing.',
    price: 245.00,
    currency: 'USD',
    category: 'Cables & Termination Kits',
    categorySlug: 'cables-termination',
    brand: 'REPL',
    image: 'https://placehold.co/400x400/DC2626/FFFFFF?text=11kV+Outdoor',
    inStock: true,
    stockQuantity: 10,
    specifications: {
      'Voltage Class': '11kV',
      'Type': 'Outdoor Heat Shrink'
    },
    sku: 'REPL-HT11-OUT',
    warranty: 'N/A'
  },

  // ==================== LIGHTING EQUIPMENT ====================
  {
    id: 'prod-031',
    name: 'LED Floodlight 50W IP65',
    description: 'Industrial LED floodlight, 50W, 6500K daylight, IP65 weatherproof, slim design.',
    price: 35.00,
    currency: 'USD',
    category: 'Lighting Equipment',
    categorySlug: 'lighting',
    brand: 'Ammon',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 50,
    featured: true,
    specifications: {
      'Power': '50W',
      'Color Temp': '6500K',
      'IP Rating': 'IP65',
      'Lumens': '4500lm'
    },
    sku: 'LED-FL50',
    warranty: '24 months'
  },
  {
    id: 'prod-032',
    name: 'LED Floodlight 100W IP65',
    description: 'Industrial LED floodlight, 100W, 6500K daylight, IP65 weatherproof.',
    price: 55.00,
    currency: 'USD',
    category: 'Lighting Equipment',
    categorySlug: 'lighting',
    brand: 'Ammon',
    image: 'https://placehold.co/400x400/FFD700/000000?text=LED+100W',
    inStock: true,
    stockQuantity: 40,
    specifications: {
      'Power': '100W',
      'Color Temp': '6500K',
      'IP Rating': 'IP65',
      'Lumens': '9000lm'
    },
    sku: 'LED-FL100',
    warranty: '24 months'
  },
  {
    id: 'prod-033',
    name: 'LED Floodlight 200W IP65',
    description: 'High-power industrial LED floodlight, 200W, 6500K, for large area illumination.',
    price: 95.00,
    currency: 'USD',
    category: 'Lighting Equipment',
    categorySlug: 'lighting',
    brand: 'Ammon',
    image: 'https://placehold.co/400x400/FFD700/000000?text=LED+200W',
    inStock: true,
    stockQuantity: 25,
    specifications: {
      'Power': '200W',
      'Color Temp': '6500K',
      'IP Rating': 'IP65',
      'Lumens': '18000lm'
    },
    sku: 'LED-FL200',
    warranty: '24 months'
  },
  {
    id: 'prod-034',
    name: 'LED High Bay Light 100W',
    description: 'UFO style LED high bay light, 100W, 6500K, 120° beam angle, for warehouses and factories.',
    price: 75.00,
    currency: 'USD',
    category: 'Lighting Equipment',
    categorySlug: 'lighting',
    brand: 'Generic',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 30,
    featured: true,
    specifications: {
      'Power': '100W',
      'Color Temp': '6500K',
      'Beam Angle': '120°',
      'Mounting Height': '6-10m'
    },
    sku: 'LED-HB100',
    warranty: '24 months'
  },
  {
    id: 'prod-035',
    name: 'LED High Bay Light 150W',
    description: 'UFO style LED high bay light, 150W, for industrial and warehouse applications.',
    price: 105.00,
    currency: 'USD',
    category: 'Lighting Equipment',
    categorySlug: 'lighting',
    brand: 'Generic',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=High+Bay+150W',
    inStock: true,
    stockQuantity: 20,
    specifications: {
      'Power': '150W',
      'Color Temp': '6500K',
      'Beam Angle': '120°'
    },
    sku: 'LED-HB150',
    warranty: '24 months'
  },
  {
    id: 'prod-036',
    name: 'LED High Bay Light 200W',
    description: 'UFO style LED high bay light, 200W, high output for large industrial spaces.',
    price: 135.00,
    currency: 'USD',
    category: 'Lighting Equipment',
    categorySlug: 'lighting',
    brand: 'Generic',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=High+Bay+200W',
    inStock: true,
    stockQuantity: 15,
    specifications: {
      'Power': '200W',
      'Color Temp': '6500K'
    },
    sku: 'LED-HB200',
    warranty: '24 months'
  },

  // ==================== MOTORS & GENERATORS ====================
  {
    id: 'prod-037',
    name: 'WEG Electric Motor 0.75kW 4-pole',
    description: 'WEG W22 three-phase induction motor, 0.75kW, 1440rpm, B3 foot mount, IE2 efficiency.',
    price: 185.00,
    currency: 'USD',
    category: 'Motors & Generators',
    categorySlug: 'motors-generators',
    brand: 'WEG',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 10,
    featured: true,
    specifications: {
      'Power': '0.75kW / 1HP',
      'Speed': '1440 rpm',
      'Poles': '4',
      'Frame': '80',
      'Mounting': 'B3 Foot'
    },
    sku: 'WEG-W22-0R75',
    warranty: '12 months'
  },
  {
    id: 'prod-038',
    name: 'WEG Electric Motor 1.5kW 4-pole',
    description: 'WEG W22 three-phase induction motor, 1.5kW, 1440rpm, B3 foot mount.',
    price: 245.00,
    currency: 'USD',
    category: 'Motors & Generators',
    categorySlug: 'motors-generators',
    brand: 'WEG',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=WEG+1.5kW',
    inStock: true,
    stockQuantity: 8,
    specifications: {
      'Power': '1.5kW / 2HP',
      'Speed': '1440 rpm',
      'Poles': '4'
    },
    sku: 'WEG-W22-1R5',
    warranty: '12 months'
  },
  {
    id: 'prod-039',
    name: 'WEG Electric Motor 3kW 4-pole',
    description: 'WEG W22 three-phase induction motor, 3kW, 1440rpm, B3 foot mount.',
    price: 345.00,
    currency: 'USD',
    category: 'Motors & Generators',
    categorySlug: 'motors-generators',
    brand: 'WEG',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=WEG+3kW',
    inStock: true,
    stockQuantity: 6,
    specifications: {
      'Power': '3kW / 4HP',
      'Speed': '1440 rpm',
      'Poles': '4'
    },
    sku: 'WEG-W22-3R0',
    warranty: '12 months'
  },
  {
    id: 'prod-040',
    name: 'WEG Electric Motor 5.5kW 4-pole',
    description: 'WEG W22 three-phase induction motor, 5.5kW, 1460rpm, B3 foot mount.',
    price: 485.00,
    currency: 'USD',
    category: 'Motors & Generators',
    categorySlug: 'motors-generators',
    brand: 'WEG',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=WEG+5.5kW',
    inStock: true,
    stockQuantity: 5,
    specifications: {
      'Power': '5.5kW / 7.5HP',
      'Speed': '1460 rpm',
      'Poles': '4'
    },
    sku: 'WEG-W22-5R5',
    warranty: '12 months'
  },
  {
    id: 'prod-041',
    name: 'Atlas Vibration Motor 0.5kW',
    description: 'Atlas industrial vibration motor, 0.5kW, for vibrating screens and feeders.',
    price: 320.00,
    currency: 'USD',
    category: 'Motors & Generators',
    categorySlug: 'motors-generators',
    brand: 'Atlas',
    image: 'https://placehold.co/400x400/FF6B00/FFFFFF?text=Vibro+Motor',
    inStock: true,
    stockQuantity: 8,
    featured: true,
    specifications: {
      'Power': '0.5kW',
      'Voltage': '380V 3-Phase',
      'Type': 'Unbalanced Mass'
    },
    sku: 'ATL-VM-0R5',
    warranty: '12 months'
  },
  {
    id: 'prod-042',
    name: 'Atlas Vibration Motor 1.1kW',
    description: 'Atlas industrial vibration motor, 1.1kW, heavy-duty for mining applications.',
    price: 485.00,
    currency: 'USD',
    category: 'Motors & Generators',
    categorySlug: 'motors-generators',
    brand: 'Atlas',
    image: 'https://placehold.co/400x400/FF6B00/FFFFFF?text=Vibro+1.1kW',
    inStock: true,
    stockQuantity: 5,
    specifications: {
      'Power': '1.1kW',
      'Voltage': '380V 3-Phase'
    },
    sku: 'ATL-VM-1R1',
    warranty: '12 months'
  },

  // ==================== SENSORS & INSTRUMENTATION ====================
  {
    id: 'prod-043',
    name: 'IFM Inductive Sensor M18 PNP',
    description: 'IFM inductive proximity sensor, M18, 8mm sensing distance, PNP NO, 10-30V DC.',
    price: 65.00,
    currency: 'USD',
    category: 'Sensors & Instrumentation',
    categorySlug: 'sensors-instrumentation',
    brand: 'IFM',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 25,
    featured: true,
    specifications: {
      'Type': 'Inductive',
      'Size': 'M18',
      'Sensing Distance': '8mm',
      'Output': 'PNP NO',
      'Voltage': '10-30V DC'
    },
    sku: 'IFM-IE5343',
    warranty: '24 months'
  },
  {
    id: 'prod-044',
    name: 'IFM Inductive Sensor M30 PNP',
    description: 'IFM inductive proximity sensor, M30, 15mm sensing distance, PNP NO.',
    price: 75.00,
    currency: 'USD',
    category: 'Sensors & Instrumentation',
    categorySlug: 'sensors-instrumentation',
    brand: 'IFM',
    image: 'https://placehold.co/400x400/FF6B00/FFFFFF?text=IFM+M30',
    inStock: true,
    stockQuantity: 20,
    specifications: {
      'Type': 'Inductive',
      'Size': 'M30',
      'Sensing Distance': '15mm',
      'Output': 'PNP NO'
    },
    sku: 'IFM-IE5344',
    warranty: '24 months'
  },
  {
    id: 'prod-045',
    name: 'SICK Inductive Sensor M18',
    description: 'SICK IME18 inductive proximity sensor, M18, flush mount, PNP NO.',
    price: 72.00,
    currency: 'USD',
    category: 'Sensors & Instrumentation',
    categorySlug: 'sensors-instrumentation',
    brand: 'SICK',
    image: 'https://placehold.co/400x400/0066CC/FFFFFF?text=SICK+Sensor',
    inStock: true,
    stockQuantity: 18,
    specifications: {
      'Type': 'Inductive',
      'Size': 'M18',
      'Output': 'PNP NO'
    },
    sku: 'SICK-IME18',
    warranty: '24 months'
  },
  {
    id: 'prod-046',
    name: 'Omron Limit Switch D4N',
    description: 'Omron D4N series safety limit switch, roller lever type, 2NC contacts.',
    price: 45.00,
    currency: 'USD',
    category: 'Sensors & Instrumentation',
    categorySlug: 'sensors-instrumentation',
    brand: 'Omron',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=Limit+Switch',
    inStock: true,
    stockQuantity: 30,
    specifications: {
      'Type': 'Roller Lever',
      'Contacts': '2NC',
      'IP Rating': 'IP67'
    },
    sku: 'OMR-D4N-4132',
    warranty: '12 months'
  },
  {
    id: 'prod-047',
    name: 'Telemecanique Limit Switch XCK-J',
    description: 'Schneider Telemecanique limit switch, adjustable roller lever, 1NC+1NO.',
    price: 38.00,
    currency: 'USD',
    category: 'Sensors & Instrumentation',
    categorySlug: 'sensors-instrumentation',
    brand: 'Schneider',
    image: 'https://placehold.co/400x400/3B8132/FFFFFF?text=Telemecanique',
    inStock: true,
    stockQuantity: 35,
    specifications: {
      'Type': 'Adjustable Roller',
      'Contacts': '1NC+1NO'
    },
    sku: 'SCH-XCKJ161',
    warranty: '12 months'
  },

  // ==================== MINING EQUIPMENT ====================
  {
    id: 'prod-048',
    name: 'Deebar Mine Bell S101',
    description: 'Deebar electric mine bell, 24V DC, for shaft signaling in mining operations.',
    price: 285.00,
    currency: 'USD',
    category: 'Mining Equipment',
    categorySlug: 'mining-equipment',
    brand: 'Deebar',
    image: 'https://placehold.co/400x400/FCD34D/000000?text=Mine+Bell',
    inStock: true,
    stockQuantity: 12,
    featured: true,
    specifications: {
      'Voltage': '24V DC',
      'Type': 'Electric Bell',
      'Application': 'Underground Mining'
    },
    sku: 'DEB-S101',
    warranty: '12 months'
  },
  {
    id: 'prod-049',
    name: 'Wallcomm Communication Unit',
    description: 'Wallcomm underground communication unit for mining, intrinsically safe.',
    price: 450.00,
    currency: 'USD',
    category: 'Mining Equipment',
    categorySlug: 'mining-equipment',
    brand: 'Wallcomm',
    image: 'https://placehold.co/400x400/FF6B00/FFFFFF?text=Wallcomm',
    inStock: true,
    stockQuantity: 8,
    featured: true,
    specifications: {
      'Type': 'Communication Unit',
      'Application': 'Underground Mining',
      'Rating': 'Intrinsically Safe'
    },
    sku: 'WAL-COMM-01',
    warranty: '12 months'
  },
  {
    id: 'prod-050',
    name: 'Belt Trip Switch Single Arm',
    description: 'Conveyor belt emergency trip switch, single arm, for conveyor safety systems.',
    price: 125.00,
    currency: 'USD',
    category: 'Mining Equipment',
    categorySlug: 'mining-equipment',
    brand: 'Generic',
    image: 'https://placehold.co/400x400/FF6B00/FFFFFF?text=Trip+Switch',
    inStock: true,
    stockQuantity: 20,
    specifications: {
      'Type': 'Single Arm',
      'Contacts': '2NC+2NO',
      'Reset': 'Manual'
    },
    sku: 'TRIP-SA',
    warranty: '12 months'
  },
  {
    id: 'prod-051',
    name: 'Belt Trip Switch Double Arm',
    description: 'Conveyor belt emergency trip switch, double arm (both sides), heavy-duty.',
    price: 165.00,
    currency: 'USD',
    category: 'Mining Equipment',
    categorySlug: 'mining-equipment',
    brand: 'Generic',
    image: 'https://placehold.co/400x400/FF6B00/FFFFFF?text=Double+Arm',
    inStock: true,
    stockQuantity: 15,
    specifications: {
      'Type': 'Double Arm',
      'Contacts': '2NC+2NO',
      'Reset': 'Manual'
    },
    sku: 'TRIP-DA',
    warranty: '12 months'
  },
  {
    id: 'prod-052',
    name: 'Pull Wire Switch 50m',
    description: 'Emergency pull wire switch for conveyors, 50m rope length, IP65.',
    price: 145.00,
    currency: 'USD',
    category: 'Mining Equipment',
    categorySlug: 'mining-equipment',
    brand: 'Generic',
    image: 'https://placehold.co/400x400/FF6B00/FFFFFF?text=Pull+Wire',
    inStock: true,
    stockQuantity: 18,
    specifications: {
      'Rope Length': '50m',
      'IP Rating': 'IP65',
      'Contacts': '2NC+2NO'
    },
    sku: 'PULL-50M',
    warranty: '12 months'
  },

  // ==================== VALVES & PNEUMATICS ====================
  {
    id: 'prod-053',
    name: 'Burkert 6014 Solenoid Valve 1/4"',
    description: 'Burkert Type 6014 direct-acting solenoid valve, 1/4" BSP, 24V DC, normally closed.',
    price: 95.00,
    currency: 'USD',
    category: 'Valves & Pneumatics',
    categorySlug: 'valves-pneumatics',
    brand: 'Burkert',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=Burkert+Valve',
    inStock: true,
    stockQuantity: 15,
    featured: true,
    specifications: {
      'Size': '1/4" BSP',
      'Voltage': '24V DC',
      'Function': '2/2-way NC',
      'Media': 'Air, Water, Oil'
    },
    sku: 'BUR-6014-1/4',
    warranty: '12 months'
  },
  {
    id: 'prod-054',
    name: 'Burkert 6014 Solenoid Valve 1/2"',
    description: 'Burkert Type 6014 solenoid valve, 1/2" BSP, 230V AC, normally closed.',
    price: 125.00,
    currency: 'USD',
    category: 'Valves & Pneumatics',
    categorySlug: 'valves-pneumatics',
    brand: 'Burkert',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=Burkert+1/2',
    inStock: true,
    stockQuantity: 12,
    specifications: {
      'Size': '1/2" BSP',
      'Voltage': '230V AC',
      'Function': '2/2-way NC'
    },
    sku: 'BUR-6014-1/2',
    warranty: '12 months'
  },
  {
    id: 'prod-055',
    name: 'Festo VUVG Solenoid Valve 5/2',
    description: 'Festo VUVG series 5/2-way solenoid valve, G1/8, 24V DC, for pneumatic control.',
    price: 145.00,
    currency: 'USD',
    category: 'Valves & Pneumatics',
    categorySlug: 'valves-pneumatics',
    brand: 'Festo',
    image: 'https://placehold.co/400x400/0066CC/FFFFFF?text=Festo+Valve',
    inStock: true,
    stockQuantity: 10,
    featured: true,
    specifications: {
      'Type': '5/2-way',
      'Port Size': 'G1/8',
      'Voltage': '24V DC'
    },
    sku: 'FES-VUVG-5/2',
    warranty: '12 months'
  },
  {
    id: 'prod-056',
    name: 'Festo Cylinder DSBC 32x100',
    description: 'Festo DSBC ISO cylinder, 32mm bore, 100mm stroke, double-acting.',
    price: 185.00,
    currency: 'USD',
    category: 'Valves & Pneumatics',
    categorySlug: 'valves-pneumatics',
    brand: 'Festo',
    image: 'https://placehold.co/400x400/0066CC/FFFFFF?text=Festo+Cylinder',
    inStock: true,
    stockQuantity: 8,
    specifications: {
      'Bore': '32mm',
      'Stroke': '100mm',
      'Type': 'ISO 15552'
    },
    sku: 'FES-DSBC-32-100',
    warranty: '12 months'
  },

  // ==================== TESTING EQUIPMENT ====================
  {
    id: 'prod-057',
    name: 'Fluke 117 Digital Multimeter',
    description: 'Fluke 117 true-RMS digital multimeter with non-contact voltage detection, ideal for electricians.',
    price: 285.00,
    currency: 'USD',
    category: 'Testing Equipment',
    categorySlug: 'testing-equipment',
    brand: 'Fluke',
    image: 'https://images.unsplash.com/photo-1621905251918-48116d1b9c42?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 8,
    featured: true,
    specifications: {
      'Type': 'True-RMS',
      'DC Voltage': '600V',
      'AC Voltage': '600V',
      'Resistance': '40MΩ',
      'Features': 'VoltAlert, AutoV/LoZ'
    },
    sku: 'FLK-117',
    warranty: '36 months'
  },
  {
    id: 'prod-058',
    name: 'Fluke 87V Industrial Multimeter',
    description: 'Fluke 87V true-RMS industrial multimeter with temperature measurement.',
    price: 485.00,
    currency: 'USD',
    category: 'Testing Equipment',
    categorySlug: 'testing-equipment',
    brand: 'Fluke',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format',
    inStock: true,
    stockQuantity: 5,
    featured: true,
    specifications: {
      'Type': 'True-RMS',
      'DC Voltage': '1000V',
      'AC Voltage': '1000V',
      'Temperature': 'Yes',
      'Category': 'CAT IV 600V'
    },
    sku: 'FLK-87V',
    warranty: '36 months'
  },
  {
    id: 'prod-059',
    name: 'Fluke 323 Clamp Meter',
    description: 'Fluke 323 true-RMS clamp meter, 400A AC, compact design for tight spaces.',
    price: 195.00,
    currency: 'USD',
    category: 'Testing Equipment',
    categorySlug: 'testing-equipment',
    brand: 'Fluke',
    image: 'https://placehold.co/400x400/FFD700/000000?text=Fluke+323',
    inStock: true,
    stockQuantity: 10,
    specifications: {
      'AC Current': '400A',
      'AC Voltage': '600V',
      'Resistance': '4kΩ',
      'Jaw Size': '30mm'
    },
    sku: 'FLK-323',
    warranty: '36 months'
  },
  {
    id: 'prod-060',
    name: 'Fluke 376 FC Clamp Meter',
    description: 'Fluke 376 FC true-RMS clamp meter with iFlex probe, 1000A AC/DC, Fluke Connect enabled.',
    price: 685.00,
    currency: 'USD',
    category: 'Testing Equipment',
    categorySlug: 'testing-equipment',
    brand: 'Fluke',
    image: 'https://placehold.co/400x400/FFD700/000000?text=Fluke+376+FC',
    inStock: true,
    stockQuantity: 4,
    specifications: {
      'AC/DC Current': '1000A',
      'With iFlex': '2500A AC',
      'Wireless': 'Fluke Connect'
    },
    sku: 'FLK-376-FC',
    warranty: '36 months'
  },
  {
    id: 'prod-061',
    name: 'Fluke 1587 FC Insulation Tester',
    description: 'Fluke 1587 FC insulation multimeter, 50V-1000V test voltages, PI/DAR, Fluke Connect.',
    price: 1250.00,
    currency: 'USD',
    category: 'Testing Equipment',
    categorySlug: 'testing-equipment',
    brand: 'Fluke',
    image: 'https://placehold.co/400x400/FFD700/000000?text=Fluke+1587',
    inStock: true,
    stockQuantity: 3,
    specifications: {
      'Test Voltages': '50V, 100V, 250V, 500V, 1000V',
      'Insulation Range': '0.01MΩ to 2GΩ',
      'Features': 'PI, DAR, Fluke Connect'
    },
    sku: 'FLK-1587-FC',
    warranty: '36 months'
  },
  {
    id: 'prod-062',
    name: 'Hioki DT4256 Digital Multimeter',
    description: 'Hioki DT4256 digital multimeter, true-RMS, CAT IV 600V, with backlight.',
    price: 145.00,
    currency: 'USD',
    category: 'Testing Equipment',
    categorySlug: 'testing-equipment',
    brand: 'Hioki',
    image: 'https://placehold.co/400x400/0066CC/FFFFFF?text=Hioki+DT4256',
    inStock: true,
    stockQuantity: 12,
    specifications: {
      'DC Voltage': '1000V',
      'AC Voltage': '1000V',
      'Category': 'CAT IV 600V'
    },
    sku: 'HIK-DT4256',
    warranty: '36 months'
  },

  // ==================== SOFT STARTERS ====================
  {
    id: 'prod-063',
    name: 'ABB PSR9 Soft Starter 4kW',
    description: 'ABB PSR series compact soft starter, 9A, 4kW at 400V, for simple motor starting.',
    price: 245.00,
    currency: 'USD',
    category: 'Soft Starters',
    categorySlug: 'soft-starters',
    brand: 'ABB',
    image: 'https://placehold.co/400x400/DC2626/FFFFFF?text=ABB+PSR9',
    inStock: true,
    stockQuantity: 8,
    featured: true,
    specifications: {
      'Current': '9A',
      'Power': '4kW at 400V',
      'Voltage': '208-600V'
    },
    sku: 'ABB-PSR9',
    warranty: '24 months'
  },
  {
    id: 'prod-064',
    name: 'ABB PSR25 Soft Starter 11kW',
    description: 'ABB PSR series soft starter, 25A, 11kW at 400V.',
    price: 385.00,
    currency: 'USD',
    category: 'Soft Starters',
    categorySlug: 'soft-starters',
    brand: 'ABB',
    image: 'https://placehold.co/400x400/DC2626/FFFFFF?text=ABB+PSR25',
    inStock: true,
    stockQuantity: 6,
    specifications: {
      'Current': '25A',
      'Power': '11kW at 400V'
    },
    sku: 'ABB-PSR25',
    warranty: '24 months'
  },
  {
    id: 'prod-065',
    name: 'ABB PSTX45 Soft Starter 22kW',
    description: 'ABB PSTX series advanced soft starter, 45A, 22kW at 400V, with built-in bypass.',
    price: 785.00,
    currency: 'USD',
    category: 'Soft Starters',
    categorySlug: 'soft-starters',
    brand: 'ABB',
    image: 'https://placehold.co/400x400/DC2626/FFFFFF?text=ABB+PSTX45',
    inStock: true,
    stockQuantity: 4,
    featured: true,
    specifications: {
      'Current': '45A',
      'Power': '22kW at 400V',
      'Features': 'Built-in bypass, torque control'
    },
    sku: 'ABB-PSTX45',
    warranty: '24 months'
  },
  {
    id: 'prod-066',
    name: 'ABB PSTX85 Soft Starter 45kW',
    description: 'ABB PSTX series soft starter, 85A, 45kW at 400V, with built-in bypass.',
    price: 1250.00,
    currency: 'USD',
    category: 'Soft Starters',
    categorySlug: 'soft-starters',
    brand: 'ABB',
    image: 'https://placehold.co/400x400/DC2626/FFFFFF?text=ABB+PSTX85',
    inStock: true,
    stockQuantity: 3,
    specifications: {
      'Current': '85A',
      'Power': '45kW at 400V'
    },
    sku: 'ABB-PSTX85',
    warranty: '24 months'
  },
  {
    id: 'prod-067',
    name: 'Siemens 3RW30 Soft Starter 7.5kW',
    description: 'Siemens SIRIUS 3RW30 soft starter, 7.5kW, 400V, basic functionality.',
    price: 425.00,
    currency: 'USD',
    category: 'Soft Starters',
    categorySlug: 'soft-starters',
    brand: 'Siemens',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=Siemens+3RW30',
    inStock: true,
    stockQuantity: 5,
    specifications: {
      'Power': '7.5kW at 400V',
      'Voltage': '200-480V'
    },
    sku: 'SIE-3RW3026',
    warranty: '24 months'
  },

  // ==================== HOISTS & LIFTING EQUIPMENT ====================
  {
    id: 'prod-068',
    name: 'Electric Chain Hoist 1 Ton',
    description: 'Electric chain hoist, 1 ton capacity, 6m lift, 380V 3-phase, single speed.',
    price: 685.00,
    currency: 'USD',
    category: 'Hoists & Lifting Equipment',
    categorySlug: 'hoists-lifting',
    brand: 'Generic',
    image: 'https://placehold.co/400x400/FFD700/000000?text=Hoist+1T',
    inStock: true,
    stockQuantity: 6,
    featured: true,
    specifications: {
      'Capacity': '1 Ton',
      'Lift Height': '6m',
      'Voltage': '380V 3-Phase',
      'Speed': 'Single'
    },
    sku: 'HOIST-1T-6M',
    warranty: '12 months'
  },
  {
    id: 'prod-069',
    name: 'Electric Chain Hoist 2 Ton',
    description: 'Electric chain hoist, 2 ton capacity, 6m lift, 380V 3-phase, dual speed.',
    price: 985.00,
    currency: 'USD',
    category: 'Hoists & Lifting Equipment',
    categorySlug: 'hoists-lifting',
    brand: 'Generic',
    image: 'https://placehold.co/400x400/FFD700/000000?text=Hoist+2T',
    inStock: true,
    stockQuantity: 4,
    specifications: {
      'Capacity': '2 Ton',
      'Lift Height': '6m',
      'Speed': 'Dual'
    },
    sku: 'HOIST-2T-6M',
    warranty: '12 months'
  },
  {
    id: 'prod-070',
    name: 'Electric Chain Hoist 5 Ton',
    description: 'Electric chain hoist, 5 ton capacity, 9m lift, 380V 3-phase, heavy-duty.',
    price: 2450.00,
    currency: 'USD',
    category: 'Hoists & Lifting Equipment',
    categorySlug: 'hoists-lifting',
    brand: 'Generic',
    image: 'https://placehold.co/400x400/FFD700/000000?text=Hoist+5T',
    inStock: true,
    stockQuantity: 2,
    specifications: {
      'Capacity': '5 Ton',
      'Lift Height': '9m'
    },
    sku: 'HOIST-5T-9M',
    warranty: '12 months'
  },
  {
    id: 'prod-071',
    name: 'Manual Chain Block 1 Ton',
    description: 'Manual chain block/hoist, 1 ton capacity, 3m lift, portable.',
    price: 85.00,
    currency: 'USD',
    category: 'Hoists & Lifting Equipment',
    categorySlug: 'hoists-lifting',
    brand: 'Generic',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=Chain+Block',
    inStock: true,
    stockQuantity: 15,
    specifications: {
      'Capacity': '1 Ton',
      'Lift Height': '3m',
      'Type': 'Manual'
    },
    sku: 'CB-1T-3M',
    warranty: '12 months'
  },
  {
    id: 'prod-072',
    name: 'Manual Chain Block 2 Ton',
    description: 'Manual chain block, 2 ton capacity, 3m lift.',
    price: 125.00,
    currency: 'USD',
    category: 'Hoists & Lifting Equipment',
    categorySlug: 'hoists-lifting',
    brand: 'Generic',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=CB+2T',
    inStock: true,
    stockQuantity: 12,
    specifications: {
      'Capacity': '2 Ton',
      'Lift Height': '3m'
    },
    sku: 'CB-2T-3M',
    warranty: '12 months'
  },

  // ==================== TRANSFORMERS ====================
  {
    id: 'prod-073',
    name: 'Control Transformer 250VA',
    description: 'Control transformer, 250VA, 380V/24V, for control circuit applications.',
    price: 65.00,
    currency: 'USD',
    category: 'Transformers',
    categorySlug: 'transformers',
    brand: 'Generic',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=Transformer',
    inStock: true,
    stockQuantity: 20,
    specifications: {
      'Rating': '250VA',
      'Primary': '380V',
      'Secondary': '24V'
    },
    sku: 'CTRL-TX-250',
    warranty: '12 months'
  },
  {
    id: 'prod-074',
    name: 'Control Transformer 500VA',
    description: 'Control transformer, 500VA, 380V/24V.',
    price: 95.00,
    currency: 'USD',
    category: 'Transformers',
    categorySlug: 'transformers',
    brand: 'Generic',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=TX+500VA',
    inStock: true,
    stockQuantity: 15,
    specifications: {
      'Rating': '500VA',
      'Primary': '380V',
      'Secondary': '24V'
    },
    sku: 'CTRL-TX-500',
    warranty: '12 months'
  },
  {
    id: 'prod-075',
    name: 'Control Transformer 1000VA',
    description: 'Control transformer, 1000VA, 380V/24V, for larger control circuits.',
    price: 145.00,
    currency: 'USD',
    category: 'Transformers',
    categorySlug: 'transformers',
    brand: 'Generic',
    image: 'https://placehold.co/400x400/1E3A8A/FFFFFF?text=TX+1kVA',
    inStock: true,
    stockQuantity: 10,
    specifications: {
      'Rating': '1000VA',
      'Primary': '380V',
      'Secondary': '24V'
    },
    sku: 'CTRL-TX-1000',
    warranty: '12 months'
  }
];

// Helper functions
export const getAllProducts = (): Product[] => {
  return products;
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (categorySlug: string): Product[] => {
  return products.filter(p => p.categorySlug === categorySlug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getProductsByBrand = (brand: string): Product[] => {
  return products.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(searchTerm) ||
    p.description.toLowerCase().includes(searchTerm) ||
    p.brand.toLowerCase().includes(searchTerm) ||
    p.category.toLowerCase().includes(searchTerm)
  );
};

export const getProductsInPriceRange = (min: number, max: number): Product[] => {
  return products.filter(p => p.price >= min && p.price <= max);
};

export const getInStockProducts = (): Product[] => {
  return products.filter(p => p.inStock);
};

export const getAllBrands = (): string[] => {
  const brands = [...new Set(products.map(p => p.brand))];
  return brands.sort();
};

export const getProductCount = (): number => {
  return products.length;
};

export const getProductCountByCategory = (categorySlug: string): number => {
  return products.filter(p => p.categorySlug === categorySlug).length;
};
