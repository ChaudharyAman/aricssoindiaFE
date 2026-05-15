export const company = {
  name: 'Aricsso India',
  tagline: 'Smart Works',
  fullTagline: 'Powering Smart Industrial Automation',
  phone1: '+91-9999525101',
  phone2: '0124-10786669',
  phone3: '+91-9716111152',
  email1: 'info@aricssoindia.co.in',
  email2: 'aricssoindia@gmail.com',
  website: 'www.aricssoindia.co.in',
  address:
    'Basement of O 79-A, M3M Smart Word, Nearby Trumpet Flyover, Dwarka Expressway, Sector 89, Gurugram, Haryana 122004',
  shortAddress:
    'Basement of O 79-A, M3M Smart Word, Sector 89, Gurugram, Haryana',
  gstin: '06BARPK2820C1ZZ',
  authorizations: ['GIC', 'BCH', 'EXOR'],
  established: 2019,
}

export const services = [
  {
    id: 'automation-scada',
    icon: 'Cpu',
    title: 'Automation, Wireless & SCADA',
    shortDesc:
      'Microprocessor-based automation with wireless connectivity and full SCADA supervisory control for utilities and critical infrastructure.',
    fullDesc:
      'Aricsso India specialises in process automation, turnkey instrumentation and SCADA software. Our systems use microprocessor-based technology with wireless sensor integration to deliver real-time control visibility for pump houses, valves, tanks and field assets.',
    features: [
      'Process Automation Systems',
      'Turnkey Instrumentation Projects',
      'SCADA Software Integration',
      'Wireless Sensor Networks',
      'Electric Actuator Valve control',
      'Ultrasonic Sensor integration',
      'Real-time data to management',
    ],
    cpd: {
      control: [
        'Process automation systems',
        'Wireless sensor networks',
        'SCADA supervisory control',
      ],
      protection: [
        'System health monitoring',
        'Field fault visibility',
        'Alarm escalation workflows',
      ],
      data: [
        'Real-time field status',
        'Pump and valve operating state',
        'Wireless sensor feedback',
        'Management dashboard visibility',
      ],
    },
    color: 'slate',
    suitableFor: [
      'Industrial facilities',
      'Government assets',
      'Hospitals',
      'Large campuses',
    ],
  },
  {
    id: 'substation-power',
    icon: 'Zap',
    title: 'Substation & Power Distribution Management',
    shortDesc:
      'IoT-based smart protection and monitoring for electrical substations, power distribution systems and MCC panels with digital overload relay integration.',
    fullDesc:
      'Aricsso India automates electrical power distribution systems and substations with IoT-based smart starters, digital overload relays and real-time monitoring to protect and manage electrical infrastructure across commercial, industrial and government sites.',
    features: [
      'Electricity power distribution system automation',
      'Substation management system',
      'IoT based smart starter',
      'Digital overload relay integration',
      'Real-time protection monitoring',
      'Energy and load data dashboard',
      'MCC panel integration',
    ],
    cpd: {
      control: [
        'Distribution system control',
        'Starter control',
        'Auto / manual switching',
      ],
      protection: [
        'Digital overload relay',
        'Over / under voltage',
        'Phase fault',
        'Phase reversal',
      ],
      data: [
        'Load status per feeder',
        'Voltage and current',
        'Energy consumption kWh',
        'Fault history',
      ],
    },
    color: 'orange',
    suitableFor: [
      'Substations',
      'Industrial plants',
      'Commercial complexes',
      'Government buildings',
    ],
  },
  {
    id: 'water-management',
    icon: 'Droplets',
    title: 'Water Management System',
    shortDesc:
      'Automation of pump houses, electric actuator valves and wireless ultrasonic sensors for complete water management.',
    fullDesc:
      'We are in automation of pump houses, electric actuator valves and wireless ultrasonic sensors for complete water management. Our microprocessor-based technology controls and protects the system while keeping real-time information flowing to the concerned teams and top management.',
    features: [
      'Real-time tank level monitoring',
      'Automatic pump ON / OFF / Trip control',
      'Overhead and underground tank management',
      'Delhi Jal Board integration',
      'SCADA-based visual dashboard',
      'Wireless sensor connectivity',
      'Multiple tank layout support including OBH, OH1, OH2 and OH3',
      'High and low level alarms',
    ],
    cpd: {
      control: ['Real-time level', 'Pressure monitoring', 'Customized requirements'],
      protection: [
        'Over voltage',
        'Under voltage',
        'Single phase',
        'Phase loss',
        'Phase reversal',
        'Over load',
        'Dry running',
      ],
      data: [
        'Pump ON / OFF / Trip status',
        'Over / under voltage',
        'Over / under load',
        'Power total and factors R Y B',
        'Energy consumption',
        'Pump dry run',
        'Phase single / loss / reversal',
        'All phase voltage R Y B',
        'All phase current R Y B',
        'All phase power factors R Y B',
      ],
    },
    color: 'teal',
    suitableFor: [
      'Residential towers',
      'Commercial buildings',
      'Hospitals',
      'Government campuses',
    ],
  },
  {
    id: 'storm-stp-sewage',
    icon: 'Waves',
    title: 'Storm, STP & Sewage Line Management',
    shortDesc:
      'Automation of storm water, STP systems and underpass pump houses with wireless SCADA control.',
    fullDesc:
      'We automate storm and underpass pump houses with wireless ultrasonic sensors and controller-driven logic, managing the complete water movement system with real-time visibility for operators and management teams.',
    features: [
      'Storm water pipeline monitoring',
      '7-pump parallel management from PUMP1 to PUMP7',
      'Underground tank dual-zone control for UGT1 and UGT2',
      'High and low level indicators from HIGH1 to HIGH3 and LOW1 to LOW3',
      'Current and voltage display per pump',
      'STP process automation',
      'Sewage line pressure monitoring',
    ],
    cpd: {
      control: ['Storm pipeline control', 'Real-time level', 'System auto / manual'],
      protection: [
        'Over voltage',
        'Under voltage',
        'Phase fault',
        'Over load',
        'Dry running',
      ],
      data: [
        'Pump status per zone',
        'Line voltage and current',
        'Tank high / low alerts',
        'Real-time SCADA display',
      ],
    },
    color: 'blue',
    suitableFor: ['Underpasses', 'STP plants', 'Municipal lines', 'Large campuses'],
  },
  {
    id: 'street-light',
    icon: 'Lightbulb',
    title: 'Street Light Management System',
    shortDesc:
      'Smart street lighting with LDR sensors, motion detectors and wireless SCADA for energy-efficient city lighting.',
    fullDesc:
      'We automate street lights using microcontroller-based technology to control and protect the system. The network responds intelligently to light conditions and motion, while delivering real-time operating data to the concerned teams and top management.',
    features: [
      'LDR sensor-based automatic ON / OFF',
      'Photo-conductive cell control',
      'Motion detector integration within a 15 meter radius',
      'Scheduled timing control',
      'Phase-wise voltage and current monitoring',
      'Over / under load protection',
      'Wireless remote management',
      'Energy consumption tracking',
    ],
    cpd: {
      control: [
        'LDR sensor',
        'Photo-conductive cells',
        'Motion detector',
        'Customized requirements',
      ],
      protection: [
        'Over / under voltage',
        'Over / under load',
        'Phase single / loss / reversal',
      ],
      data: [
        'Street light ON / OFF timing',
        'Over / under voltage',
        'Total power',
        'All phase voltage R Y B',
        'All phase current R Y B',
      ],
    },
    color: 'yellow',
    suitableFor: ['Townships', 'Road corridors', 'Institutional campuses', 'Smart cities'],
  },
  {
    id: 'fire-management',
    icon: 'Flame',
    title: 'Fire Management System',
    shortDesc:
      'Automated fire pump houses, sprinkler lines and hydrant monitoring with instant alarm response.',
    fullDesc:
      'We automate fire lines, pump houses and fire gensets using microprocessor-based technology to control and protect the system. Pressure drops in sprinkler or hydrant lines can trigger instant alarms so emergency action starts without delay.',
    features: [
      'Fire sprinkler line pressure monitoring',
      'Fire hydrant pressure monitoring',
      'Instant alarm to fire station on pressure drop',
      'Auto / manual system control',
      'Genset automation',
      'Fire pump house automation',
      'Real-time pressure data display',
    ],
    cpd: {
      control: [
        'Fire sprinkler pipeline pressure',
        'Fire hydrant pipeline pressure',
        'System auto / manual',
      ],
      protection: [
        'Sprinkler pressure drop to alarm station',
        'Hydrant pressure drop to alarm station',
      ],
      data: [
        'Pump ON / OFF and alarm status',
        'Over / under voltage',
        'Over / under load',
        'Total power',
        'Phase single / loss / reversal',
        'All phase voltage and current R Y B',
      ],
    },
    color: 'red',
    suitableFor: ['Hospitals', 'Hotels', 'Commercial towers', 'Industrial buildings'],
  },
  {
    id: 'smart-dustbin',
    icon: 'Trash2',
    title: 'Smart Dustbin Management System',
    shortDesc:
      'IoT-based smart dustbin monitoring with real-time fill alerts and routing support for waste operations.',
    fullDesc:
      'This innovative system keeps cities and campuses cleaner using sensor-driven fill-level tracking, buzzer alerts, graphical web displays and mapping support for waste truck routing across multiple locations.',
    features: [
      'Real-time fill-level monitoring per bin',
      'Buzzer alert on overflow',
      'Graphical web-based bin status display',
      'Waste truck routing and monitoring',
      'Multi-location mapping server',
      'Database-backed historical data',
      'Suitable for cities, hospitals, colleges and societies',
    ],
    cpd: {
      control: ['Fill level monitoring', 'Buzzer alert', 'Location mapping'],
      protection: ['Overflow prevention', 'Public alert system'],
      data: [
        'Dustbin fill percentage',
        'Bin status graphical view',
        'Truck location',
        'Waste collection history',
      ],
    },
    color: 'green',
    suitableFor: ['Cities', 'Hospitals', 'Colleges', 'Residential societies'],
  },
  {
    id: 'power-management',
    icon: 'Zap',
    title: 'Power Management System',
    shortDesc:
      'Complete power monitoring with phase-wise voltage, current, power factor and energy consumption tracking.',
    fullDesc:
      'Our power management solution delivers comprehensive three-phase monitoring, anomaly protection and real-time energy data for industrial and commercial sites, with clean SCADA integration for continuous visibility.',
    features: [
      '3-phase voltage monitoring for R, Y and B',
      '3-phase current monitoring',
      'Power factor measurement per phase',
      'Total energy consumption tracking',
      'Over / under voltage protection',
      'Phase loss and reversal detection',
      'SCADA dashboard integration',
    ],
    cpd: {
      control: ['Phase voltage control', 'Load management', 'Auto switching'],
      protection: ['Over / under voltage', 'Phase loss', 'Phase reversal', 'Over load'],
      data: [
        'All phase voltage R Y B',
        'All phase current R Y B',
        'Power factors R Y B',
        'Energy consumption kWh',
      ],
    },
    color: 'purple',
    suitableFor: [
      'Factories',
      'Commercial complexes',
      'Utility rooms',
      'Process plants',
    ],
  },
]

export const portfolioSites = [
  {
    name: 'Lok Nayak Hospital',
    location: 'New Delhi',
    type: 'Building Water Management System - OPD & Surgical Block Pump / UGT / OHT',
    highlight: true,
  },
  {
    name: 'MP Duplex Flats, North Avenue',
    location: 'New Delhi',
    type: 'Pump House Automation & Water Management',
  },
  {
    name: 'CGO Complex',
    location: 'New Delhi',
    type: 'Pump House Automation & Water Management',
  },
  {
    name: 'Nirman Bhawan',
    location: 'New Delhi',
    type: 'Pump House Automation & Water Management',
  },
  {
    name: 'AGCR Building',
    location: 'New Delhi',
    type: 'Pump House Automation & Water Management',
  },
  {
    name: 'Safdarjung Hospital',
    location: 'New Delhi',
    type: 'Pump House Automation & Water Management',
  },
  {
    name: 'LNJP Hospital',
    location: 'New Delhi',
    type: 'Pump House Automation & Water Management',
  },
  {
    name: 'GB Panth Hospital',
    location: 'New Delhi',
    type: 'Pump House Automation & Water Management',
  },
  {
    name: 'National Archives of India',
    location: 'New Delhi',
    type: 'Pump House Automation & Water Management',
  },
  {
    name: 'National Museum',
    location: 'New Delhi',
    type: 'Pump House Automation & Water Management',
  },
  {
    name: 'MAMC Hospital',
    location: 'New Delhi',
    type: 'Pump House Automation & Water Management',
  },
  {
    name: 'Dhansa, Najafgarh',
    location: 'New Delhi',
    type: 'Storm Water Pump House Automation',
  },
  {
    name: 'Sarai Kale Khan',
    location: 'New Delhi',
    type: 'Storm Water / Underpass Pump House Automation',
  },
  {
    name: 'Badarpur Border',
    location: 'New Delhi',
    type: 'Storm Water / Underpass Pump House Automation',
  },
  {
    name: 'Moolchand Underpass',
    location: 'New Delhi',
    type: 'Storm Water / Underpass Pump House Automation',
  },
  {
    name: 'Shastri Bhavan',
    location: 'New Delhi',
    type: 'Pump House Automation & Water Management',
  },
  {
    name: 'Janpath Bhawan',
    location: 'New Delhi',
    type: 'Pump House Automation & Water Management',
  },
  {
    name: 'PWD Delhi Subways',
    location: 'New Delhi',
    type: 'Storm Water / Underpass Pump House Automation',
  },
  {
    name: "CPWD Residential Colony's (Old, New & CRPF)",
    location: 'Gurugram',
    type: 'Pump House Automation & Water Management',
  },
  {
    name: 'Avlon',
    location: 'Bhiwadi',
    type: 'Industrial Automation',
  },
  {
    name: 'Rohtak Railway Station',
    location: 'Haryana',
    type: 'Railway Station Automation',
  },
  {
    name: 'Jind Railway Station',
    location: 'Haryana',
    type: 'Railway Station Automation',
  },
]

export const stats = [
  { value: 2019, label: 'Established', suffix: '' },
  { value: 22, label: 'Major Sites', suffix: '+' },
  { value: 8, label: 'Service Domains', suffix: '' },
  { value: 10, label: 'Work Orders Completed', suffix: '+' },
]

export const playground = [
  'All kinds of buildings',
  'Commercial & residential',
  'Hospitals',
  'Hotels',
  'Colleges',
  'Farms',
  'Resorts',
  'Government buildings',
]

export const pumpTypes = [
  {
    category: 'Domestic Pumps',
    items: [
      'Booster',
      'Monoblock',
      'Car washing',
      'Drainage',
      'Hydro-pneumatic',
      'Basement toilet',
      'Water circulation',
      'Fountain',
      'Jet pumps',
    ],
  },
  {
    category: 'Submersible Pumps',
    items: ['Bore well', 'Drainage', 'Waste water', 'Open well'],
  },
  { category: 'Solar Pumps', items: ['Bore well', 'Sprinkler'] },
  {
    category: 'Agriculture Pumps',
    items: ['Bore well', 'Monoblock', 'Solar', 'Engine driven'],
  },
  {
    category: 'Industrial Pumps',
    items: [
      'Dewatering sump',
      'Horizontal monoblock',
      'Vertical',
      'Vacuum',
      'Fluid transfer',
    ],
  },
]

export const workOrders = [
  {
    id: 1,
    work: 'Civil work 33/11 KV SS Pardhana, UHBVN',
    customer: 'Ganpati InfraPower',
    orderDate: '05-Dec-19',
    completion: '22-Feb-21',
    orderNumber: 'GIPL/Civil/SS/02',
  },
  {
    id: 2,
    work: 'Civil work 33/11 KV SS Kharak Jattan, UHBVN',
    customer: 'Ganpati InfraPower',
    orderDate: '12-Jan-20',
    completion: '17-Sep-21',
    orderNumber: 'GIPL/Civil/SS/05',
  },
  {
    id: 3,
    work: 'Electrical work 33/11 KV SS Pardhana, UHBVN',
    customer: 'Ganpati InfraPower',
    orderDate: '05-Dec-19',
    completion: '22-Feb-21',
    orderNumber: 'GIPL/Elect/SS/05',
  },
  {
    id: 4,
    work: 'Electrical work 33/11 KV SS Kharak Jattan',
    customer: 'Ganpati InfraPower',
    orderDate: '12-Jan-20',
    completion: '17-Sep-21',
    orderNumber: 'GIPL/Elect/SS/07',
  },
  {
    id: 5,
    work: 'Electrical work 66/25 KV TSS Ghanshyamgadh, W.Railway',
    customer: 'TBEA Energy India',
    orderDate: '20-Dec-20',
    completion: '31-Mar-21',
    orderNumber: 'TBEA/Gr213/PSI/98',
  },
  {
    id: 6,
    work: 'Civil work 66/25 KV TSS Malliya, W.Railway',
    customer: 'TBEA Energy India',
    orderDate: '12-Feb-21',
    completion: '22-Jun-21',
    orderNumber: 'TBEA/Gr213/PSI/102',
  },
  {
    id: 7,
    work: 'Electrical work 66/25 KV TSS Malliya, W.Railway',
    customer: 'TBEA Energy India',
    orderDate: '12-Feb-21',
    completion: '10-Aug-21',
    orderNumber: 'TBEA/Gr213/PSI/109',
  },
  {
    id: 8,
    work: 'Civil work 132/25 KV TSS Raghu Raj Singh, N.Railway',
    customer: 'TBEA Energy India',
    orderDate: '24-Mar-21',
    completion: '20-Sep-21',
    orderNumber: 'TBEA/Gr242/PSI/28',
  },
  {
    id: 9,
    work: 'Electrical work 132/25 KV TSS Raghu Raj Singh',
    customer: 'TBEA Energy India',
    orderDate: '24-Mar-21',
    completion: '09-Nov-21',
    orderNumber: 'TBEA/Gr242/PSI/29',
  },
  {
    id: 10,
    work: 'Electrical work 132/25 KV TSS Jetalsar, W.Railway',
    customer: 'KEC International',
    orderDate: '22-May-22',
    completion: '20-Oct-22',
    orderNumber: 'KEC/EPC12/22-23/23a',
  },
]

export const scadaReferences = [
  {
    title: 'Tank Level Display System',
    description:
      'Panel labeled LEVEL DISPLAY and WATER MANAGEMENT SYSTEM WIRELESS CONNECTIVITY TLID with 5 channels for OHT1, OHT2, UGT1, OHT3 and OHT4. Each channel includes BTC ON rotary control, high level alarm LED and 100%, 75%, 50% and 25% indicators.',
  },
  {
    title: 'Touchscreen SCADA Screen',
    description:
      'Aricsso India branded HMI showing 5th Floor RCC OH Tank, 7th Floor RCC OH Tank and 7th Floor SINTEX OH Tank with HL and LL indicators, underground tank layout, three pump inlets and left / right screen navigation.',
  },
  {
    title: 'Lok Nayak Hospital Display',
    description:
      'Blue-lit dashboard showing RCC overhead tanks for OPD block and Surgical block, wireless sensor nodes, green full indicators, red alert indicators, underground tank input line and three pump motors.',
  },
]

export const barGraphLevels = [
  { label: 'OBH OH', value: 100, tone: 'bg-teal-500' },
  { label: 'OH1', value: 100, tone: 'bg-teal-400' },
  { label: 'Deen', value: 100, tone: 'bg-teal-400' },
  { label: 'Pathology', value: 100, tone: 'bg-teal-400' },
  { label: 'UGT', value: 75, tone: 'bg-sky-400' },
]

export const globalBrands = [
  {
    category: 'Global Leaders — Most Demanded',
    brands: [
      'Siemens',
      'ABB',
      'Schneider Electric',
      'Rockwell Automation',
      'Honeywell',
      'Emerson Electric',
    ],
    description:
      'The most trusted industrial automation brands worldwide, providing PLCs, SCADA, DCS platforms, industrial IoT, robotics, and AI-powered automation technologies.',
  },
  {
    category: 'PLC, HMI & Control Systems',
    brands: [
      'Mitsubishi Electric',
      'Omron',
      'Delta Electronics',
      'Panasonic',
      'Fuji Electric',
    ],
    description:
      'Industry-leading brands for programmable logic controllers, human-machine interfaces, and control system platforms.',
  },
  {
    category: 'Robotics & Motion Control',
    brands: ['FANUC', 'Yaskawa Electric', 'KUKA', 'Danfoss', 'SEW-Eurodrive'],
    description:
      'Specialists in industrial robotics, servo systems, motion control, and variable frequency drives for demanding automation applications.',
  },
  {
    category: 'Sensors, Safety & Instrumentation',
    brands: [
      'Keyence',
      'SICK AG',
      'IFM Electronic',
      'Balluff',
      'Banner Engineering',
      'Omron',
      'Panasonic',
    ],
    description:
      'Precision sensing, safety systems and instrumentation for industrial measurement, detection and process monitoring.',
  },
  {
    category: 'Process Automation & Field Instruments',
    brands: ['Yokogawa Electric', 'Endress+Hauser', 'General Electric'],
    description:
      'Advanced field instruments including flow meters, pressure transmitters, temperature sensors and level instruments for process control.',
  },
  {
    category: 'Industrial Electrical & Control Components',
    brands: ['Bosch Rexroth', 'Phoenix Contact', 'WEG'],
    description:
      'Core electrical and control components - drives, contactors, terminals, panels and motor control equipment for industrial systems.',
  },
]

export const products = [
  { name: 'PLC Systems', icon: 'Cpu' },
  { name: 'HMI Touch Panels', icon: 'Monitor' },
  { name: 'SCADA Solutions', icon: 'Activity' },
  { name: 'Servo Drives & Motion Control', icon: 'Settings2' },
  { name: 'VFD Systems', icon: 'Zap' },
  { name: 'Industrial Robots', icon: 'Bot' },
  { name: 'Sensors & Safety Devices', icon: 'Radio' },
  { name: 'Instrumentation Products', icon: 'Gauge' },
  { name: 'Control Panels & MCC Panels', icon: 'LayoutGrid' },
  { name: 'Industrial Networking', icon: 'Network' },
  { name: 'Industrial IoT Solutions', icon: 'Wifi' },
  { name: 'Automation Spare Parts', icon: 'Wrench' },
]

export const industriesServed = [
  { name: 'Manufacturing', icon: 'Factory' },
  { name: 'Oil & Gas', icon: 'Flame' },
  { name: 'Pharmaceuticals', icon: 'FlaskConical' },
  { name: 'Food & Beverage', icon: 'UtensilsCrossed' },
  { name: 'Automotive', icon: 'Car' },
  { name: 'Packaging', icon: 'Package' },
  { name: 'Textile', icon: 'Layers' },
  { name: 'Water Treatment', icon: 'Droplets' },
  { name: 'Infrastructure', icon: 'Building2' },
  { name: 'Power Plants', icon: 'Zap' },
]

export const whyChooseUs = [
  {
    reason: 'Genuine Products',
    detail: 'Only authentic products from globally certified brands.',
  },
  {
    reason: 'Multi-brand Support',
    detail: 'Single-window access to all major automation brands.',
  },
  {
    reason: 'Fast Delivery',
    detail: 'Prompt supply and on-site deployment across PAN India.',
  },
  {
    reason: 'Technical Expertise',
    detail: 'Experienced engineers for design, installation and commissioning.',
  },
  {
    reason: 'Competitive Pricing',
    detail: 'Best market price with genuine product guarantee.',
  },
  {
    reason: 'Customized Engineering Solutions',
    detail:
      'Tailored automation solutions designed for your specific site requirements.',
  },
  {
    reason: 'PAN India Service Support',
    detail: 'On-ground service and after-sales support across all states.',
  },
]
