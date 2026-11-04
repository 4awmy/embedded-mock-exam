// Embedded Systems Programming (CCS4207) - Section Sheets & Mock Exam Dataset
// Derived directly from Section Sheets 1–5 & Lecture Materials (Dr. Ehab Elsehely)

export interface TrueFalseQuestion {
  id: string;
  num: number;
  question: string;
  correctAnswer: boolean;
  sheet: number;
  lecture: string;
  slideTitle: string;
  quote: string;
  explanation: string;
  topic: string;
}

export interface MCQQuestion {
  id: string;
  num: number;
  question: string;
  options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctOption: 'A' | 'B' | 'C' | 'D';
  correctText: string;
  sheet: number;
  lecture: string;
  slideTitle: string;
  quote: string;
  explanation: string;
  topic: string;
}

export interface RubricItem {
  criteria: string;
  points: number;
}

export interface EssayQuestion {
  id: string;
  num: number;
  question: string;
  maxPoints: number;
  sheet: number;
  lecture: string;
  slideTitle?: string;
  modelAnswer: string;
  keyPoints: string[];
  rubric: RubricItem[];
  topic: string;
}

export interface ExamMetadata {
  id: string;
  sheetNumber?: number;
  courseCode: string;
  courseTitle: string;
  institution: string;
  examTitle: string;
  sourceDoc: string;
  lectures: string[];
  totalTF: number;
  totalMCQ: number;
  totalEssay: number;
  totalPoints: number;
  timeLimitMinutes: number;
}

export const SHEET_1_METADATA: ExamMetadata = {
  "id": "sheet-1",
  "sheetNumber": 1,
  "courseCode": "CCS4207",
  "courseTitle": "Embedded Systems Programming",
  "institution": "College of Computing & Information Technology \u2014 AASTMT",
  "examTitle": "Sheet 1: Introduction to Embedded Systems",
  "sourceDoc": "Week 01 - Lecture 1 (Dr. Ehab Elsehely)",
  "lectures": [
    "Week 01 - Lecture 1 (Dr. Ehab Elsehely)"
  ],
  "totalTF": 10,
  "totalMCQ": 10,
  "totalEssay": 5,
  "totalPoints": 45,
  "timeLimitMinutes": 30
};

export const SHEET_1_MCQ: MCQQuestion[] = [
  {
    "id": "s1-mcq-1",
    "num": 1,
    "question": "An embedded system is defined as:",
    "options": [
      {
        "key": "A",
        "text": "A general-purpose computer for multiple tasks"
      },
      {
        "key": "B",
        "text": "An electronic/electro-mechanical system designed to perform a specific function using both hardware and firmware (software)"
      },
      {
        "key": "C",
        "text": "Only a microcontroller without software"
      },
      {
        "key": "D",
        "text": "Only an application program running on a PC"
      }
    ],
    "correctOption": "B",
    "correctText": "An electronic/electro-mechanical system designed to perform a specific function using both hardware and firmware (software)",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Definition of Embedded Systems",
    "quote": "An embedded system is an electronic/electro-mechanical system designed to perform a specific function and is a combination of both hardware and firmware.",
    "explanation": "Embedded systems are purpose-built for dedicated real-time functions, closely integrating dedicated hardware with application firmware.",
    "topic": "System Definition"
  },
  {
    "id": "s1-mcq-2",
    "num": 2,
    "question": "Firmware in an embedded system is typically stored in:",
    "options": [
      {
        "key": "A",
        "text": "Hard disk only"
      },
      {
        "key": "B",
        "text": "RAM only"
      },
      {
        "key": "C",
        "text": "ROM or Flash memory"
      },
      {
        "key": "D",
        "text": "CD/DVD only"
      }
    ],
    "correctOption": "C",
    "correctText": "ROM or Flash memory",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Firmware & Memory Hierarchy",
    "quote": "The program instructions written for embedded systems are referred to as firmware. It is stored in Read-Only Memory (ROM) or Flash memory.",
    "explanation": "Firmware must be non-volatile so the device boots instantly without external secondary media.",
    "topic": "Memory & Firmware"
  },
  {
    "id": "s1-mcq-3",
    "num": 3,
    "question": "Which of the following is a primary characteristic of embedded systems?",
    "options": [
      {
        "key": "A",
        "text": "High user awareness of the computer inside"
      },
      {
        "key": "B",
        "text": "Designed for specific tasks, often with real-time constraints"
      },
      {
        "key": "C",
        "text": "Must support unlimited arbitrary user applications"
      },
      {
        "key": "D",
        "text": "Operates only with heavy desktop operating systems"
      }
    ],
    "correctOption": "B",
    "correctText": "Designed for specific tasks, often with real-time constraints",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Characteristics",
    "quote": "Embedded systems are designed for specific tasks, often with real-time constraints and stringent power limits.",
    "explanation": "Unlike PCs, embedded devices are engineered for singular or limited functions under strict timing bounds.",
    "topic": "Characteristics"
  },
  {
    "id": "s1-mcq-4",
    "num": 4,
    "question": "The first recognized modern embedded system is commonly considered to be:",
    "options": [
      {
        "key": "A",
        "text": "ENIAC"
      },
      {
        "key": "B",
        "text": "Apollo Guidance Computer (AGC)"
      },
      {
        "key": "C",
        "text": "Intel 4004"
      },
      {
        "key": "D",
        "text": "IBM PC 5150"
      }
    ],
    "correctOption": "B",
    "correctText": "Apollo Guidance Computer (AGC)",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "History of Embedded Computing",
    "quote": "The Apollo Guidance Computer (AGC) built in the 1960s by MIT is widely recognized as the first modern embedded computer.",
    "explanation": "The AGC used integrated circuits, magnetic core memory, and a real-time executive for lunar navigation.",
    "topic": "History"
  },
  {
    "id": "s1-mcq-5",
    "num": 5,
    "question": "The astronaut user interface of the AGC (Apollo Guidance Computer) is known as:",
    "options": [
      {
        "key": "A",
        "text": "GUI"
      },
      {
        "key": "B",
        "text": "DSKY (display/keyboard)"
      },
      {
        "key": "C",
        "text": "BIOS"
      },
      {
        "key": "D",
        "text": "UART"
      }
    ],
    "correctOption": "B",
    "correctText": "DSKY (display/keyboard)",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Apollo AGC Interface",
    "quote": "The DSKY (Display and Keyboard) allowed astronauts to communicate with the AGC using two-digit Verb and Noun codes.",
    "explanation": "DSKY enabled manual query and command execution via verb-noun codes on numerical displays.",
    "topic": "AGC Architecture"
  },
  {
    "id": "s1-mcq-6",
    "num": 6,
    "question": "A microcontroller usually includes:",
    "options": [
      {
        "key": "A",
        "text": "No memory"
      },
      {
        "key": "B",
        "text": "I/O devices, timers, and on-board memory (RAM/ROM)"
      },
      {
        "key": "C",
        "text": "Only a GPU"
      },
      {
        "key": "D",
        "text": "Only external wireless antennas"
      }
    ],
    "correctOption": "B",
    "correctText": "I/O devices, timers, and on-board memory (RAM/ROM)",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Microcontroller Definition",
    "quote": "A microcontroller contains CPU, memory (RAM/ROM), timers, and I/O ports integrated on a single silicon die.",
    "explanation": "This self-contained nature makes MCUs cost-effective and compact for embedded devices.",
    "topic": "MCU Architecture"
  },
  {
    "id": "s1-mcq-7",
    "num": 7,
    "question": "DSP stands for:",
    "options": [
      {
        "key": "A",
        "text": "Digital Signal Processor"
      },
      {
        "key": "B",
        "text": "Dynamic System Program"
      },
      {
        "key": "C",
        "text": "Data Secure Processor"
      },
      {
        "key": "D",
        "text": "Direct System Protocol"
      }
    ],
    "correctOption": "A",
    "correctText": "Digital Signal Processor",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Processor Classes",
    "quote": "DSP: Digital Signal Processor \u2014 optimized for mathematical processing of continuous digital signals.",
    "explanation": "DSPs feature dedicated hardware for rapid multiply-accumulate (MAC) operations in audio, video, and RF filtering.",
    "topic": "DSPs"
  },
  {
    "id": "s1-mcq-8",
    "num": 8,
    "question": "Typical embedded word sizes span:",
    "options": [
      {
        "key": "A",
        "text": "5-bit only"
      },
      {
        "key": "B",
        "text": "8-bit, 16-bit, and 32-bit"
      },
      {
        "key": "C",
        "text": "64-bit only"
      },
      {
        "key": "D",
        "text": "128-bit only"
      }
    ],
    "correctOption": "B",
    "correctText": "8-bit, 16-bit, and 32-bit",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Embedded Architecture",
    "quote": "Embedded processors span 8-bit, 16-bit, and 32-bit architectures.",
    "explanation": "From simple 8-bit MCUs (e.g. ATmega328P) to 32-bit ARM Cortex-M processors, embedded systems match word size to cost and throughput.",
    "topic": "MCU Architecture"
  },
  {
    "id": "s1-mcq-9",
    "num": 9,
    "question": "In an Anti-lock Braking System (ABS), the hydraulic pump is used to:",
    "options": [
      {
        "key": "A",
        "text": "Increase wheel skidding"
      },
      {
        "key": "B",
        "text": "Pump brakes to reduce skidding and maintain traction"
      },
      {
        "key": "C",
        "text": "Disable wheel sensors permanently"
      },
      {
        "key": "D",
        "text": "Turn off vehicle electrical power"
      }
    ],
    "correctOption": "B",
    "correctText": "Pump brakes to reduce skidding and maintain traction",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Automotive Systems (ABS)",
    "quote": "The ABS pump pulses brake fluid pressure rapidly to prevent wheel lockup and preserve steering control.",
    "explanation": "Pulsing the hydraulic line pressure prevents tyre lockup during hard emergency braking.",
    "topic": "Automotive Systems"
  },
  {
    "id": "s1-mcq-10",
    "num": 10,
    "question": "Which application domain encompasses satellites, network routers, cell phones, and optical switches?",
    "options": [
      {
        "key": "A",
        "text": "Medical"
      },
      {
        "key": "B",
        "text": "Communications"
      },
      {
        "key": "C",
        "text": "Home entertainment"
      },
      {
        "key": "D",
        "text": "Office automation"
      }
    ],
    "correctOption": "B",
    "correctText": "Communications",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Application Domains",
    "quote": "Communication systems: Satellites, mobile phones, routers, switches, and transmission hubs.",
    "explanation": "Telecommunication infrastructure relies heavily on specialized real-time embedded systems.",
    "topic": "Application Domains"
  }
];

export const SHEET_1_TF: TrueFalseQuestion[] = [
  {
    "id": "s1-tf-1",
    "num": 1,
    "question": "Embedded systems always require the user to know that a computer is inside the device.",
    "correctAnswer": false,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Characteristics",
    "quote": "In most embedded devices, users interact through physical buttons or dials and are unaware of the internal microcontroller.",
    "explanation": "Most embedded appliances completely obscure the computational processor behind a minimal operational interface.",
    "topic": "User Awareness"
  },
  {
    "id": "s1-tf-2",
    "num": 2,
    "question": "The program instructions written for embedded systems are referred to as firmware.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Firmware Concept",
    "quote": "The software burned into ROM/Flash of an embedded system is termed firmware.",
    "explanation": "Firmware directly interfaces with hardware registers and remains stored in non-volatile memory.",
    "topic": "Firmware"
  },
  {
    "id": "s1-tf-3",
    "num": 3,
    "question": "A microcontroller usually includes I/O devices and on-board memory.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Microcontroller Definition",
    "quote": "Microcontrollers integrate CPU, RAM, Flash/ROM, and I/O peripherals on one chip.",
    "explanation": "Unlike microprocessors requiring external memory buses, microcontrollers are self-contained.",
    "topic": "Microcontrollers"
  },
  {
    "id": "s1-tf-4",
    "num": 4,
    "question": "DSPs are generally optimized for digital signal processing tasks.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "DSPs",
    "quote": "DSPs incorporate hardware MAC units and circular buffers optimized for mathematical signal filtering.",
    "explanation": "They perform real-time discrete mathematics at high speed compared to general-purpose CPUs.",
    "topic": "DSPs"
  },
  {
    "id": "s1-tf-5",
    "num": 5,
    "question": "Embedded processors account for 99% of processors worldwide.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Market Distribution",
    "quote": "Over 98-99% of all microprocessors manufactured today are deployed in embedded systems.",
    "explanation": "Desktop PC processors represent less than 1-2% of global processor shipments.",
    "topic": "Industry Statistics"
  },
  {
    "id": "s1-tf-6",
    "num": 6,
    "question": "The AGC was designed on 4K words of ROM and 256 words of RAM.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "AGC Specifications",
    "quote": "Block I AGC featured 4K words of core rope ROM and 256 words of magnetic core RAM.",
    "explanation": "The AGC achieved historical lunar guidance within these strict hardware memory bounds.",
    "topic": "AGC Architecture"
  },
  {
    "id": "s1-tf-7",
    "num": 7,
    "question": "ABS works by pumping the brakes to reduce skidding.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "ABS Operational Logic",
    "quote": "ABS modulates hydraulic pressure to pump brakes rapidly, maintaining steering authority.",
    "explanation": "Pumping the caliper pressure prevents static lockup on wet or icy roads.",
    "topic": "Automotive Systems"
  },
  {
    "id": "s1-tf-8",
    "num": 8,
    "question": "Typical embedded system components include CPU, memory, sensors, actuators, and communication interfaces.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "System Architecture",
    "quote": "The embedded triad consists of sensors (input), processing element & memory, and actuators (output).",
    "explanation": "These core components form the fundamental sense-compute-actuate loop.",
    "topic": "System Architecture"
  },
  {
    "id": "s1-tf-9",
    "num": 9,
    "question": "The Intel 4004 microprocessor was designed for use in business calculators.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Intel 4004 History",
    "quote": "Commissioned by Japanese calculator manufacturer Busicom, the 4004 was the first commercial single-chip microprocessor.",
    "explanation": "Intel engineer Federico Faggin led the design of the 4004 for Busicom's desktop calculators.",
    "topic": "History"
  },
  {
    "id": "s1-tf-10",
    "num": 10,
    "question": "Many modern automobiles have only a few processors (less than 10).",
    "correctAnswer": false,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Automotive Electronics",
    "quote": "Modern passenger cars deploy between 50 and 100+ separate Electronic Control Units (ECUs).",
    "explanation": "Vehicles rely on dozens to over a hundred distributed MCUs interconnected via CAN, LIN, and FlexRay buses.",
    "topic": "Automotive Electronics"
  }
];

export const SHEET_1_ESSAY: EssayQuestion[] = [
  {
    "id": "s1-essay-1",
    "num": 1,
    "question": "Explain the definition of an embedded system and distinguish it from a general-purpose computer on functionality, constraints, and user interface.",
    "maxPoints": 5,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "modelAnswer": "An embedded system is an electronic/electro-mechanical system designed to perform a dedicated, specific function, combining specialized hardware with firmware in ROM/Flash.\n\nDistinctions:\n1. Functionality: Dedicated to a single predefined task vs. general-purpose PCs designed to run arbitrary diverse user applications.\n2. Operating Constraints: Strict real-time deadlines, low power dissipation, small memory footprints, and low unit cost vs. PCs prioritizing peak throughput and software upgradeability.\n3. User Interface: Minimal domain-specific controls (buttons, 7-segments, LCDs) where users often don't perceive the computer inside vs. rich desktop GUIs (monitors, keyboards, mice).",
    "keyPoints": [
      "Definition combining dedicated hardware and firmware",
      "Dedicated purpose vs general-purpose multi-application computing",
      "Resource constraints (real-time deadlines, low power, memory bounds)",
      "Specialized minimal UI vs general GUI"
    ],
    "rubric": [
      {
        "criteria": "Accurate embedded system definition (hardware + firmware)",
        "points": 2
      },
      {
        "criteria": "Contrasts functionality and operating constraints",
        "points": 1.5
      },
      {
        "criteria": "Explains user interface difference",
        "points": 1.5
      }
    ],
    "topic": "Definitions & Comparison"
  },
  {
    "id": "s1-essay-2",
    "num": 2,
    "question": "List and explain four major components of a typical embedded system.",
    "maxPoints": 5,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "modelAnswer": "1. Processing Core (MCU/DSP): Executes firmware instructions, performs mathematical logic, and orchestrates timing (e.g. ARM Cortex-M, AVR ATmega328P).\n2. Memory Subsystem: Non-volatile Flash/ROM stores persistent firmware; volatile SRAM holds stack, heap, and operational buffers.\n3. Sensors & Actuators: Sensors convert physical phenomena (temperature, pressure, light) into electrical signals; Actuators convert electrical commands into physical movement or indication (motors, relays, buzzers, LEDs).\n4. Communication & I/O Interfaces: Facilitate communication with other ICs, modules, or network hosts using protocols like UART, SPI, I2C, CAN, or USB.",
    "keyPoints": [
      "Processing core (MCU/DSP)",
      "Memory subsystem (ROM/Flash vs RAM)",
      "Sensors (inputs) and Actuators (outputs)",
      "Communication protocols (I2C, SPI, UART, CAN)"
    ],
    "rubric": [
      {
        "criteria": "Accurate explanation of processing element",
        "points": 1.25
      },
      {
        "criteria": "Explanation of memory roles (volatile vs non-volatile)",
        "points": 1.25
      },
      {
        "criteria": "Explanation of sensors & actuators with examples",
        "points": 1.25
      },
      {
        "criteria": "Explanation of communication/IO interfaces",
        "points": 1.25
      }
    ],
    "topic": "System Components"
  },
  {
    "id": "s1-essay-3",
    "num": 3,
    "question": "Describe the historical importance of the Apollo Guidance Computer (AGC). Include at least three key architectural and operational facts.",
    "maxPoints": 5,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "modelAnswer": "The Apollo Guidance Computer (AGC), developed by the MIT Instrumentation Lab for NASA's Apollo missions, was the first recognized modern embedded system.\n\nKey Facts:\n1. Silicon Technology: Pioneered the mass adoption of silicon integrated circuits (using ~4,000 dual 3-input NOR gate ICs), drastically advancing the microelectronics industry.\n2. Memory Architecture: Operated with 4,096 words of core rope ROM (non-volatile hardwired software) and 256 words of magnetic core RAM.\n3. Real-Time OS & DSKY: Featured an innovative priority-based cooperative operating system and the iconic DSKY (Display/Keyboard) verb-noun command interface that safely navigated Apollo 11's lunar descent under computer overload alarms.",
    "keyPoints": [
      "First recognized modern embedded computer (MIT/NASA)",
      "Use of early integrated circuits (dual NOR gates)",
      "Memory constraints (4K core rope ROM, 256 words RAM)",
      "Priority-driven executive and DSKY interface"
    ],
    "rubric": [
      {
        "criteria": "Historical significance explained",
        "points": 1.5
      },
      {
        "criteria": "Accurate memory & IC technology facts",
        "points": 2
      },
      {
        "criteria": "Mention of DSKY and real-time execution",
        "points": 1.5
      }
    ],
    "topic": "Historical Systems"
  },
  {
    "id": "s1-essay-4",
    "num": 4,
    "question": "Explain how an Anti-lock Braking System (ABS) functions as an embedded control system, including the roles of wheel speed sensors, ECU, and hydraulic valves.",
    "maxPoints": 5,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "modelAnswer": "An Anti-lock Braking System (ABS) operates as a closed-loop, hard real-time embedded control system:\n\n1. Sensing: Inductive or Hall-effect wheel speed sensors continuously monitor the rotational velocity of each wheel.\n2. Processing (ECU): The microcontroller calculates vehicle velocity and wheel deceleration. If a wheel decelerates disproportionately faster than the vehicle, imminent lockup (skidding) is detected.\n3. Actuation: The ECU commands electromechanical solenoid valves and a hydraulic pump to pulse brake caliper pressure (up to 15-20 times per second). This releases pressure when locking occurs and re-applies pressure once rotation is restored, keeping the tire in its peak friction zone and preserving directional steering.",
    "keyPoints": [
      "Closed-loop hard real-time control system",
      "Wheel speed sensors detect rotational deceleration",
      "ECU algorithmic decision for skid detection",
      "Hydraulic solenoid valves & pump modulate pressure"
    ],
    "rubric": [
      {
        "criteria": "Explains sensing phase (wheel speed sensors)",
        "points": 1.5
      },
      {
        "criteria": "Explains ECU decision-making logic",
        "points": 1.5
      },
      {
        "criteria": "Explains actuation via hydraulic modulation",
        "points": 2
      }
    ],
    "topic": "Automotive Control"
  },
  {
    "id": "s1-essay-5",
    "num": 5,
    "question": "Compare microprocessors, microcontrollers, and Digital Signal Processors (DSPs) in terms of integration, architecture, and primary optimization.",
    "maxPoints": 5,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "modelAnswer": "1. Microprocessor (MPU):\n- Integration: CPU core only; requires external RAM, ROM, clock generators, and I/O chips on the PCB.\n- Optimization: High clock frequency, complex instruction processing, and peak throughput (e.g. Intel Core, ARM Cortex-A).\n\n2. Microcontroller (MCU):\n- Integration: Highly integrated single chip containing CPU, RAM, Flash memory, timers, ADC, and I/O peripherals.\n- Optimization: Cost-effectiveness, ultra-low power consumption, and compact physical footprint for control applications (e.g. AVR, PIC, ARM Cortex-M).\n\n3. Digital Signal Processor (DSP):\n- Integration: Dedicated processor with specialized hardware like Multiply-Accumulate (MAC) units and Harvard bus structures.\n- Optimization: Real-time mathematical throughput for continuous signal streams (audio, video, radar, telecommunications).",
    "keyPoints": [
      "MPU: CPU core only, external buses, throughput focus",
      "MCU: Single-chip computer (CPU+RAM+ROM+IO), control focus",
      "DSP: Specialized MAC hardware, signal processing focus"
    ],
    "rubric": [
      {
        "criteria": "Clear characterization of Microprocessor",
        "points": 1.5
      },
      {
        "criteria": "Clear characterization of Microcontroller",
        "points": 1.75
      },
      {
        "criteria": "Clear characterization of DSP",
        "points": 1.75
      }
    ],
    "topic": "Processor Comparison"
  }
];

export const SHEET_2_METADATA: ExamMetadata = {
  "id": "sheet-2",
  "sheetNumber": 2,
  "courseCode": "CCS4207",
  "courseTitle": "Embedded Systems Programming",
  "institution": "College of Computing & Information Technology \u2014 AASTMT",
  "examTitle": "Sheet 2: Purposes & Characteristics of Embedded Systems",
  "sourceDoc": "Week 02 - Lecture 2 (Dr. Ehab Elsehely)",
  "lectures": [
    "Week 02 - Lecture 2 (Dr. Ehab Elsehely)"
  ],
  "totalTF": 10,
  "totalMCQ": 10,
  "totalEssay": 5,
  "totalPoints": 45,
  "timeLimitMinutes": 30
};

export const SHEET_2_MCQ: MCQQuestion[] = [
  {
    "id": "s2-mcq-1",
    "num": 1,
    "question": "Which of the following is NOT listed as a primary purpose of an embedded system?",
    "options": [
      {
        "key": "A",
        "text": "Data Collection, Storage & Representation"
      },
      {
        "key": "B",
        "text": "General-purpose desktop personal computing"
      },
      {
        "key": "C",
        "text": "Monitoring & Control"
      },
      {
        "key": "D",
        "text": "Application Specific User Interface"
      }
    ],
    "correctOption": "B",
    "correctText": "General-purpose desktop personal computing",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Purposes of Embedded Systems",
    "quote": "The six purposes are: Data collection/storage/representation, Data communication, Data (signal) processing, Monitoring, Control, and Application-specific UI.",
    "explanation": "General-purpose desktop computing is the domain of PCs, not purpose-built embedded systems.",
    "topic": "Embedded Purposes"
  },
  {
    "id": "s2-mcq-2",
    "num": 2,
    "question": "An Electrocardiogram (ECG) machine that monitors patient heartbeat without administering treatment is primarily classified under which purpose?",
    "options": [
      {
        "key": "A",
        "text": "Control only"
      },
      {
        "key": "B",
        "text": "Monitoring"
      },
      {
        "key": "C",
        "text": "General computing"
      },
      {
        "key": "D",
        "text": "Secondary storage"
      }
    ],
    "correctOption": "B",
    "correctText": "Monitoring",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Monitoring Purpose",
    "quote": "Monitoring embedded systems track physical state variables without imposing feedback control to change the system.",
    "explanation": "Monitoring systems observe and display or record parameters without driving closed-loop actuators.",
    "topic": "Embedded Purposes"
  },
  {
    "id": "s2-mcq-3",
    "num": 3,
    "question": "How are microcontrollers best described in relation to microprocessors?",
    "options": [
      {
        "key": "A",
        "text": "An obsolete precursor to microprocessors"
      },
      {
        "key": "B",
        "text": "A subset that contains no internal arithmetic units"
      },
      {
        "key": "C",
        "text": "A superset incorporating CPU, RAM, ROM, and I/O on a single chip"
      },
      {
        "key": "D",
        "text": "Identical in pinout and packaging"
      }
    ],
    "correctOption": "C",
    "correctText": "A superset incorporating CPU, RAM, ROM, and I/O on a single chip",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "MCU vs Microprocessor",
    "quote": "A microcontroller is a superset of a microprocessor, containing the CPU along with RAM, ROM, and peripheral hardware.",
    "explanation": "MCUs envelop the CPU core and integrate memory and peripherals on one chip.",
    "topic": "MCU vs MPU"
  },
  {
    "id": "s2-mcq-4",
    "num": 4,
    "question": "Which of the following components is NOT typically integrated on-chip in a microcontroller?",
    "options": [
      {
        "key": "A",
        "text": "Static RAM (SRAM)"
      },
      {
        "key": "B",
        "text": "Timers / Counters"
      },
      {
        "key": "C",
        "text": "Analog-to-Digital Converter (ADC)"
      },
      {
        "key": "D",
        "text": "High-capacity rotating magnetic hard drive"
      }
    ],
    "correctOption": "D",
    "correctText": "High-capacity rotating magnetic hard drive",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "MCU Components",
    "quote": "Microcontrollers contain on-chip RAM, Flash, timers, ADC, and I/O ports; they do not integrate mechanical hard drives.",
    "explanation": "Microcontrollers use solid-state Flash and SRAM, never mechanical spinning disks.",
    "topic": "MCU Architecture"
  },
  {
    "id": "s2-mcq-5",
    "num": 5,
    "question": "What is the primary consequence of missing a deadline in a Hard Real-Time system?",
    "options": [
      {
        "key": "A",
        "text": "Slight degradation in video playback quality"
      },
      {
        "key": "B",
        "text": "Catastrophic failure of the entire system"
      },
      {
        "key": "C",
        "text": "Automatic restart with zero side effects"
      },
      {
        "key": "D",
        "text": "Temporary reduction in network bandwidth"
      }
    ],
    "correctOption": "B",
    "correctText": "Catastrophic failure of the entire system",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Hard vs Soft Real-Time",
    "quote": "In a hard real-time system, missing a deadline constitutes total system failure, potentially causing catastrophe.",
    "explanation": "Hard real-time systems (e.g. airbag deployment, flight avionics) equate missing a deadline with fatal failure.",
    "topic": "Real-Time Systems"
  },
  {
    "id": "s2-mcq-6",
    "num": 6,
    "question": "Which of the following is an example of a Hard Real-Time system?",
    "options": [
      {
        "key": "A",
        "text": "Automated teller machine (ATM)"
      },
      {
        "key": "B",
        "text": "Antilock Braking System (ABS) and Airbag Controller"
      },
      {
        "key": "C",
        "text": "MP3 music player"
      },
      {
        "key": "D",
        "text": "Digital wrist watch"
      }
    ],
    "correctOption": "B",
    "correctText": "Antilock Braking System (ABS) and Airbag Controller",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Hard Real-Time Applications",
    "quote": "ABS and Airbag controllers must respond within microseconds to prevent injury or collision; they are hard real-time.",
    "explanation": "Airbag triggers and vehicle braking require deterministic hard deadlines where delays are intolerable.",
    "topic": "Real-Time Systems"
  },
  {
    "id": "s2-mcq-7",
    "num": 7,
    "question": "Why are languages like C++ and Java used less frequently in resource-constrained embedded systems compared to C?",
    "options": [
      {
        "key": "A",
        "text": "They cannot perform mathematical additions"
      },
      {
        "key": "B",
        "text": "They incur significant run-time overhead and memory footprint"
      },
      {
        "key": "C",
        "text": "They have no available compilers for any processor"
      },
      {
        "key": "D",
        "text": "They do not support functions or loops"
      }
    ],
    "correctOption": "B",
    "correctText": "They incur significant run-time overhead and memory footprint",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Programming Languages Overhead",
    "quote": "C++ and Java introduce substantial run-time overhead, virtual table pointers, and garbage collection pauses.",
    "explanation": "C offers direct register memory mapping, zero hidden runtime overhead, and compact machine code.",
    "topic": "Embedded Programming"
  },
  {
    "id": "s2-mcq-8",
    "num": 8,
    "question": "What does ASIP stand for in the context of embedded processor architectures?",
    "options": [
      {
        "key": "A",
        "text": "Advanced Serial Interface Protocol"
      },
      {
        "key": "B",
        "text": "Asynchronous Signal Integration Port"
      },
      {
        "key": "C",
        "text": "Application Specific Instruction Set Processor"
      },
      {
        "key": "D",
        "text": "Automated Signal Processing Interface"
      }
    ],
    "correctOption": "C",
    "correctText": "Application Specific Instruction Set Processor",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "ASIP Architecture",
    "quote": "ASIP: Application Specific Instruction Set Processor \u2014 tailored instruction set for a specific application domain.",
    "explanation": "ASIPs customize instruction sets to accelerate specific domain workloads like audio codecs or automotive control.",
    "topic": "Processor Architecture"
  },
  {
    "id": "s2-mcq-9",
    "num": 9,
    "question": "How does a single-core processor achieve the appearance of concurrent execution in multithreading?",
    "options": [
      {
        "key": "A",
        "text": "By executing instructions at the exact same physical instant on separate hardware ALUs"
      },
      {
        "key": "B",
        "text": "By rapidly context-switching between active threads"
      },
      {
        "key": "C",
        "text": "By pausing all tasks until the system is restarted"
      },
      {
        "key": "D",
        "text": "By running solely on external analog circuits"
      }
    ],
    "correctOption": "B",
    "correctText": "By rapidly context-switching between active threads",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Multithreading & Concurrency",
    "quote": "A single core processor rapidly switches between threads (interleaving execution) to provide the illusion of parallelism.",
    "explanation": "Time-slicing and context switching create pseudo-concurrency on single-core processors.",
    "topic": "Concurrency & RTOS"
  },
  {
    "id": "s2-mcq-10",
    "num": 10,
    "question": "Which of the following is a key consumer product constraint in embedded system engineering?",
    "options": [
      {
        "key": "A",
        "text": "Maximal production cost to convey luxury status"
      },
      {
        "key": "B",
        "text": "Slow development cycle to allow endless redesigns"
      },
      {
        "key": "C",
        "text": "Minimal unit production cost and rapid time-to-market"
      },
      {
        "key": "D",
        "text": "Mandatory reliance on manual reboots for error clearance"
      }
    ],
    "correctOption": "C",
    "correctText": "Minimal unit production cost and rapid time-to-market",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Design Metrics",
    "quote": "Key non-operational attributes: Minimal production cost, fast time-to-market, testability, and field reliability.",
    "explanation": "High-volume consumer products demand low BOM costs and swift release to avoid market obsolescence.",
    "topic": "Design Constraints"
  }
];

export const SHEET_2_TF: TrueFalseQuestion[] = [
  {
    "id": "s2-tf-1",
    "num": 1,
    "question": "Microprocessors are independent units that contain all functional blocks (RAM, ROM, I/O ports) for independent operation.",
    "correctAnswer": false,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Microprocessor vs Microcontroller",
    "quote": "Microprocessors are dependent units requiring external memory and peripherals. Microcontrollers are independent single-chip systems.",
    "explanation": "A microprocessor contains only the CPU core and requires external memory and peripheral chips to function.",
    "topic": "MCU vs MPU"
  },
  {
    "id": "s2-tf-2",
    "num": 2,
    "question": "Data communication in embedded systems can occur through wired interfaces (e.g. Ethernet, USB, SPI) or wireless interfaces (e.g. Wi-Fi, Bluetooth).",
    "correctAnswer": true,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Data Communication",
    "quote": "Communication occurs via wired channels (USB, I2C, SPI, Ethernet) or wireless channels (BLE, Wi-Fi, Zigbee).",
    "explanation": "Embedded devices deploy both serial buses and wireless transceivers depending on distance and bandwidth needs.",
    "topic": "Data Communication"
  },
  {
    "id": "s2-tf-3",
    "num": 3,
    "question": "In a soft real-time system, missing a deadline is considered catastrophic and causes the entire system to fail.",
    "correctAnswer": false,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Real-Time Classification",
    "quote": "Missing a deadline in soft real-time degrades quality of service but does not cause catastrophic system failure.",
    "explanation": "Hard real-time systems experience catastrophic failure upon missing deadlines; soft real-time systems only degrade QoS (e.g. dropped audio frames).",
    "topic": "Real-Time Classification"
  },
  {
    "id": "s2-tf-4",
    "num": 4,
    "question": "A task may be partitioned into one or more concurrent threads in an embedded system.",
    "correctAnswer": true,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Task & Thread Partitioning",
    "quote": "Complex embedded tasks are commonly partitioned into concurrent threads managed by an RTOS scheduler.",
    "explanation": "Threads enable concurrent execution of periodic sampling, user interface updates, and communication tasks.",
    "topic": "Multithreading"
  },
  {
    "id": "s2-tf-5",
    "num": 5,
    "question": "The dominant programming language for embedded systems is C, due to high portability and efficient compact code generation.",
    "correctAnswer": true,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Embedded Languages",
    "quote": "C remains the predominant embedded language due to direct memory access, minimal runtime overhead, and high portability.",
    "explanation": "C provides low-level bit manipulation, predictable execution timing, and zero hidden runtime overhead.",
    "topic": "Programming Languages"
  },
  {
    "id": "s2-tf-6",
    "num": 6,
    "question": "An air conditioner that maintains room temperature to a specified limit is an example of an embedded system with a 'Monitoring' purpose only.",
    "correctAnswer": false,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Control Purpose",
    "quote": "Air conditioning imposes closed-loop actuation (turning the compressor on/off) and is therefore a Control system.",
    "explanation": "Because it actively drives an actuator (compressor/fan) to alter physical state, it is classified under 'Control', not merely 'Monitoring'.",
    "topic": "Purposes"
  },
  {
    "id": "s2-tf-7",
    "num": 7,
    "question": "Embedded software must be designed to tolerate errors and unexpected situations because many systems cannot simply be rebooted.",
    "correctAnswer": true,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Reliability & Fault Tolerance",
    "quote": "Embedded software must be fault-tolerant because reboots during critical operation (e.g. flight, medical) are unacceptable.",
    "explanation": "Mission-critical devices require watchdog timers and defensive exception handlers to recover gracefully without crashing.",
    "topic": "Reliability"
  },
  {
    "id": "s2-tf-8",
    "num": 8,
    "question": "Application Specific Instruction Set Processors (ASIPs) are optimized for specific domain requirements like network processing or automotive applications.",
    "correctAnswer": true,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "ASIP Domain Optimization",
    "quote": "ASIPs balance the programmability of general-purpose CPUs with the efficiency of custom ASICs for specific domains.",
    "explanation": "Custom instructions in ASIPs accelerate target algorithms like Viterbi decoding or CRC calculations.",
    "topic": "ASIP"
  },
  {
    "id": "s2-tf-9",
    "num": 9,
    "question": "In a single-core processor, concurrent execution means that multiple threads are physically executed at the exact same instant.",
    "correctAnswer": false,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Concurrency Mechanics",
    "quote": "At any exact physical picosecond, a single core executes only one instruction. Rapid switching creates the illusion of concurrency.",
    "explanation": "True simultaneous execution requires multiple physical CPU cores. A single core uses rapid interleaved scheduling.",
    "topic": "Concurrency"
  },
  {
    "id": "s2-tf-10",
    "num": 10,
    "question": "The evolution of Microcontroller Units (MCUs) shows a rapid shift from 8-bit and 16-bit processors toward 32-bit processors.",
    "correctAnswer": true,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "MCU Market Evolution",
    "quote": "32-bit MCUs (especially ARM Cortex-M) increasingly dominate embedded designs due to falling prices and high performance.",
    "explanation": "Modern 32-bit architectures offer superior code density, advanced math units, and competitive pricing.",
    "topic": "Market Trends"
  }
];

export const SHEET_2_ESSAY: EssayQuestion[] = [
  {
    "id": "s2-essay-1",
    "num": 1,
    "question": "Briefly explain the fundamental difference between a Microprocessor and a Microcontroller.",
    "maxPoints": 5,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "modelAnswer": "Microprocessor (MPU):\n- A silicon chip containing only the CPU (ALU, control unit, registers).\n- Dependent component: Requires external RAM, ROM/Flash, clock oscillators, and I/O interface chips connected via address/data buses to function.\n- Optimized for high performance and versatile computing (e.g., Intel Core, ARM Cortex-A).\n\nMicrocontroller (MCU):\n- An independent computer-on-a-chip integrating CPU, volatile SRAM, non-volatile Flash/ROM, timers, ADC, interrupt controllers, and I/O ports on a single silicon die.\n- Self-contained: Can execute embedded applications with minimal external components (power, ground, crystal).\n- Optimized for low cost, small physical footprint, low power consumption, and control tasks (e.g., ATmega328P, TI TM4C123).",
    "keyPoints": [
      "Microprocessor is CPU-only, dependent on external chips",
      "Microcontroller is complete single-chip computer (CPU+RAM+ROM+IO)",
      "Comparison of application targets and optimization metrics"
    ],
    "rubric": [
      {
        "criteria": "Explains Microprocessor architecture & dependency",
        "points": 2
      },
      {
        "criteria": "Explains Microcontroller on-chip integration",
        "points": 2
      },
      {
        "criteria": "Contrasts target use-cases",
        "points": 1
      }
    ],
    "topic": "Processor Comparison"
  },
  {
    "id": "s2-essay-2",
    "num": 2,
    "question": "List and briefly describe four primary purposes of an embedded system as discussed in the lecture.",
    "maxPoints": 5,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "modelAnswer": "Four primary purposes:\n1. Data Collection / Storage / Representation: Acquires physical data via sensors, stores it locally or in memory, and visualizes it (e.g. digital camera, environmental weather logger).\n2. Monitoring: Continuively tracks parameters without active control loop intervention to change the measured physical variable (e.g. hospital patient ECG monitor, digital voltmeter).\n3. Control: Imposes closed-loop corrective action on the environment using actuators based on sensor feedback (e.g. automobile ABS brake controller, air conditioner thermostat).\n4. Data Communication: Transmits and routes data packets over wired or wireless network mediums (e.g. Wi-Fi router, telematics cellular gateway).",
    "keyPoints": [
      "Names 4 distinct purposes from the official 6",
      "Describes Data Collection with example",
      "Describes Monitoring with example",
      "Describes Control with example",
      "Describes Communication with example"
    ],
    "rubric": [
      {
        "criteria": "Correctly names and describes Purpose 1 with example",
        "points": 1.25
      },
      {
        "criteria": "Correctly names and describes Purpose 2 with example",
        "points": 1.25
      },
      {
        "criteria": "Correctly names and describes Purpose 3 with example",
        "points": 1.25
      },
      {
        "criteria": "Correctly names and describes Purpose 4 with example",
        "points": 1.25
      }
    ],
    "topic": "Embedded Purposes"
  },
  {
    "id": "s2-essay-3",
    "num": 3,
    "question": "Differentiate between Soft Real-Time and Hard Real-Time systems, and provide one real-world engineering example for each.",
    "maxPoints": 5,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "modelAnswer": "1. Hard Real-Time Systems:\n- Timing Requirement: Deadlines are absolute and deterministic.\n- Failure Consequence: Missing even a single deadline is considered catastrophic failure of the entire system, leading to loss of life, equipment destruction, or mission abort.\n- Example: Automotive Airbag Deployment Controller (must inflate within 20-30 ms of crash impact) or Anti-lock Braking System (ABS).\n\n2. Soft Real-Time Systems:\n- Timing Requirement: Deadlines are desirable targets; timing jitter is permissible.\n- Failure Consequence: Missing a deadline does not compromise system integrity, but results in degraded Quality of Service (QoS).\n- Example: Streaming Video Player (dropped video frames cause visual stutter without destroying the system) or automated ticket vending machine.",
    "keyPoints": [
      "Hard Real-Time: Deadlines absolute; missing deadline = catastrophic total failure",
      "Hard Real-Time example: Airbag deployment, flight avionics, ABS",
      "Soft Real-Time: Deadlines flexible; missing deadline = degraded QoS",
      "Soft Real-Time example: Video streaming, ATM, MP3 playback"
    ],
    "rubric": [
      {
        "criteria": "Defines Hard Real-Time with consequences and example",
        "points": 2.5
      },
      {
        "criteria": "Defines Soft Real-Time with consequences and example",
        "points": 2.5
      }
    ],
    "topic": "Real-Time Classification"
  },
  {
    "id": "s2-essay-4",
    "num": 4,
    "question": "What is an ASIP (Application Specific Instruction Set Processor), and how does it bridge the gap between a General Purpose Processor (GPP) and an ASIC?",
    "maxPoints": 5,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "modelAnswer": "An Application Specific Instruction Set Processor (ASIP) is a microprocessor tailored for a specific application domain (e.g., audio codecs, video compression, telecommunications) by incorporating custom hardware execution units and dedicated instructions.\n\nBridging the Spectrum:\n1. General Purpose Processor (GPP): Highly programmable and flexible, but inefficient in silicon area, execution cycles, and power when executing specialized algorithms.\n2. Application Specific Integrated Circuit (ASIC): Implements dedicated hardware logic with maximum speed and lowest power, but is completely non-programmable; any algorithm change requires silicon re-fabrication.\n3. ASIP Advantage: Retains software programmability (like a GPP) while incorporating custom instructions that execute critical algorithmic bottlenecks in 1-2 clock cycles (approaching ASIC silicon efficiency).",
    "keyPoints": [
      "Definition of ASIP and domain tailoring",
      "Comparison to GPP (programmable but less efficient)",
      "Comparison to ASIC (maximum hardware efficiency but zero programmability)",
      "ASIP combines software programmability with tailored hardware acceleration"
    ],
    "rubric": [
      {
        "criteria": "Defines ASIP clearly",
        "points": 2
      },
      {
        "criteria": "Contrasts with GPP and ASIC characteristics",
        "points": 2
      },
      {
        "criteria": "Highlights optimal balance of programmability and efficiency",
        "points": 1
      }
    ],
    "topic": "ASIP Architecture"
  },
  {
    "id": "s2-essay-5",
    "num": 5,
    "question": "Why is reliability a paramount design demand in embedded systems? Explain at least two reasons cited in the lecture.",
    "maxPoints": 5,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "modelAnswer": "Reliability in embedded systems is paramount because:\n\n1. Inability to Simply Reboot in Critical Operations:\nUnlike desktop computers where a blue-screen error can be resolved by a reboot, embedded systems operate safety-critical equipment (pacemakers, fly-by-wire flight control, nuclear monitoring, anti-lock brakes). A software crash or reboot during operation can cause immediate physical harm or fatalities.\n\n2. Inaccessibility and Hostile Operating Environments:\nMany embedded systems are deployed in inaccessible locations (deep-sea sensors, orbital satellites, subterranean oil drills) or harsh environments with high electromagnetic interference, temperature swings, and vibration. Physical maintenance is impossible or astronomically expensive, requiring hardware watchdogs, defensive firmware, and fault recovery mechanisms.",
    "keyPoints": [
      "Safety-critical environments where crashes cause injury or loss of life",
      "Reboots cannot be tolerated during real-time actuation",
      "Inaccessible deployment locations (space, biomedical, industrial)",
      "Hardware watchdogs and fault-tolerant defensive code"
    ],
    "rubric": [
      {
        "criteria": "Explains safety-critical impact and reboot impossibility",
        "points": 2.5
      },
      {
        "criteria": "Explains inaccessible environments and high cost of failure",
        "points": 2.5
      }
    ],
    "topic": "System Reliability"
  }
];

export const SHEET_3_METADATA: ExamMetadata = {
  "id": "sheet-3",
  "sheetNumber": 3,
  "courseCode": "CCS4207",
  "courseTitle": "Embedded Systems Programming",
  "institution": "College of Computing & Information Technology \u2014 AASTMT",
  "examTitle": "Sheet 3: Processors, DSPs & Architecture Trade-offs",
  "sourceDoc": "Week 03 - Lecture 3 (Dr. Ehab Elsehely)",
  "lectures": [
    "Week 03 - Lecture 3 (Dr. Ehab Elsehely)"
  ],
  "totalTF": 10,
  "totalMCQ": 10,
  "totalEssay": 5,
  "totalPoints": 45,
  "timeLimitMinutes": 30
};

export const SHEET_3_MCQ: MCQQuestion[] = [
  {
    "id": "s3-mcq-1",
    "num": 1,
    "question": "How much faster are Digital Signal Processors (DSPs) compared to general-purpose microprocessors in signal processing applications?",
    "options": [
      {
        "key": "A",
        "text": "1 to 2 times faster"
      },
      {
        "key": "B",
        "text": "2 to 3 times faster"
      },
      {
        "key": "C",
        "text": "4 to 5 times faster"
      },
      {
        "key": "D",
        "text": "10 times faster"
      }
    ],
    "correctOption": "B",
    "correctText": "2 to 3 times faster",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "DSP Performance Advantage",
    "quote": "DSPs are roughly 2 to 3 times faster than general-purpose microprocessors in signal processing applications.",
    "explanation": "Specialized DSP hardware units (MAC, circular buffers) provide a 2x-3x speedup over standard CPUs for filtering algorithms.",
    "topic": "DSP Performance"
  },
  {
    "id": "s3-mcq-2",
    "num": 2,
    "question": "In a Little-Endian processor, how is multi-byte data arranged in memory?",
    "options": [
      {
        "key": "A",
        "text": "Higher-order byte at the lowest address"
      },
      {
        "key": "B",
        "text": "Lower-order (least significant) byte at the lowest address"
      },
      {
        "key": "C",
        "text": "Bytes are stored in random order"
      },
      {
        "key": "D",
        "text": "Bits are inverted in alternate byte positions"
      }
    ],
    "correctOption": "B",
    "correctText": "Lower-order (least significant) byte at the lowest address",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Endianness",
    "quote": "Little-Endian: The least significant byte (LSB) is stored at the lowest memory address.",
    "explanation": "In Little-Endian systems (like ARM Cortex-M default or x86), the LSB occupies address N, and MSB occupies address N+k.",
    "topic": "Endianness"
  },
  {
    "id": "s3-mcq-3",
    "num": 3,
    "question": "Which of the following is a volatile memory that loses its contents when power is removed?",
    "options": [
      {
        "key": "A",
        "text": "Mask ROM"
      },
      {
        "key": "B",
        "text": "NOR Flash Memory"
      },
      {
        "key": "C",
        "text": "Random Access Memory (RAM - SRAM/DRAM)"
      },
      {
        "key": "D",
        "text": "Electrically Erasable PROM (EEPROM)"
      }
    ],
    "correctOption": "C",
    "correctText": "Random Access Memory (RAM - SRAM/DRAM)",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Memory Technologies",
    "quote": "RAM (SRAM and DRAM) is volatile read-write memory that loses its stored contents when power is turned off.",
    "explanation": "SRAM and DRAM require continuous electrical power to maintain bit state.",
    "topic": "Memory Types"
  },
  {
    "id": "s3-mcq-4",
    "num": 4,
    "question": "What is the primary advantage of utilizing Commercial Off-The-Shelf (COTS) components in an embedded product?",
    "options": [
      {
        "key": "A",
        "text": "They are custom-fabricated for a single customer"
      },
      {
        "key": "B",
        "text": "They are readily available, cost-effective, and dramatically reduce development time"
      },
      {
        "key": "C",
        "text": "They can never be altered or updated"
      },
      {
        "key": "D",
        "text": "They require zero electrical power"
      }
    ],
    "correctOption": "B",
    "correctText": "They are readily available, cost-effective, and dramatically reduce development time",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "COTS Components",
    "quote": "COTS components reduce development risk, lower initial engineering costs, and drastically accelerate time-to-market.",
    "explanation": "Standardized components eliminate the multi-million dollar overhead of custom ASIC tape-outs.",
    "topic": "Hardware Design"
  },
  {
    "id": "s3-mcq-5",
    "num": 5,
    "question": "Which tool in the embedded software toolchain performs address fix-ups to bind code to physical target memory addresses before burning to ROM?",
    "options": [
      {
        "key": "A",
        "text": "Compiler"
      },
      {
        "key": "B",
        "text": "Linker"
      },
      {
        "key": "C",
        "text": "Locator"
      },
      {
        "key": "D",
        "text": "Assembler"
      }
    ],
    "correctOption": "C",
    "correctText": "Locator",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Embedded Build Process",
    "quote": "The Locator assigns physical memory addresses to the relocatable code and data sections produced by the linker.",
    "explanation": "The locator maps code blocks to absolute addresses matching the target's physical ROM/Flash memory layout.",
    "topic": "Build Toolchain"
  },
  {
    "id": "s3-mcq-6",
    "num": 6,
    "question": "Which solid-state component isolates two circuits electrically by combining an infrared LED and a phototransistor in a single package?",
    "options": [
      {
        "key": "A",
        "text": "Relay"
      },
      {
        "key": "B",
        "text": "Optocoupler (Opto-isolator)"
      },
      {
        "key": "C",
        "text": "Piezo Buzzer"
      },
      {
        "key": "D",
        "text": "Darlington Pair"
      }
    ],
    "correctOption": "B",
    "correctText": "Optocoupler (Opto-isolator)",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Optocoupler Isolation",
    "quote": "An optocoupler combines an LED and phototransistor to transmit signals optically while maintaining galvanic isolation.",
    "explanation": "Optocouplers protect sensitive low-voltage MCU pins from high-voltage transients on industrial or power lines.",
    "topic": "Interfacing & Isolation"
  },
  {
    "id": "s3-mcq-7",
    "num": 7,
    "question": "What type of rotational motion does a stepper motor generate in response to digital electrical pulses?",
    "options": [
      {
        "key": "A",
        "text": "Continuous smooth free-wheeling rotation"
      },
      {
        "key": "B",
        "text": "Discrete angular displacements (fixed steps)"
      },
      {
        "key": "C",
        "text": "Random non-repeatable oscillations"
      },
      {
        "key": "D",
        "text": "Linear lateral sliding only"
      }
    ],
    "correctOption": "B",
    "correctText": "Discrete angular displacements (fixed steps)",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Actuators: Stepper Motors",
    "quote": "A stepper motor converts digital pulses into precise discrete mechanical angular steps.",
    "explanation": "Stepper motors move in calibrated angular increments (e.g. 1.8 degrees per step) ideal for 3D printers and CNCs.",
    "topic": "Actuators"
  },
  {
    "id": "s3-mcq-8",
    "num": 8,
    "question": "In a 7-Segment display with Common Anode configuration:",
    "options": [
      {
        "key": "A",
        "text": "All segment cathodes are tied to Ground"
      },
      {
        "key": "B",
        "text": "All segment anodes are tied together to VCC (+5V)"
      },
      {
        "key": "C",
        "text": "Each segment operates with high-frequency AC only"
      },
      {
        "key": "D",
        "text": "Segments cannot be individually turned on or off"
      }
    ],
    "correctOption": "B",
    "correctText": "All segment anodes are tied together to VCC (+5V)",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "7-Segment Displays",
    "quote": "In Common Anode displays, the anodes of all LED segments are connected to common positive supply; pulling a cathode LOW lights it.",
    "explanation": "In Common Anode, applying Logic 0 (Low) to an individual cathode pin completes the circuit and lights the segment.",
    "topic": "Displays"
  },
  {
    "id": "s3-mcq-9",
    "num": 9,
    "question": "Why is a push-to-make (normally open) switch commonly paired with a pull-up resistor when connected to an active-low MCU pin?",
    "options": [
      {
        "key": "A",
        "text": "To increase power consumption when the switch is open"
      },
      {
        "key": "B",
        "text": "To hold the pin at a stable HIGH (VCC) voltage when unpressed, preventing floating inputs"
      },
      {
        "key": "C",
        "text": "To invert the DC voltage polarity"
      },
      {
        "key": "D",
        "text": "To convert analog signals into sound waves"
      }
    ],
    "correctOption": "B",
    "correctText": "To hold the pin at a stable HIGH (VCC) voltage when unpressed, preventing floating inputs",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Switch Interfacing",
    "quote": "Pull-up resistors guarantee a definitive HIGH logic level when the switch is open, avoiding unpredictable floating input states.",
    "explanation": "CMOS inputs have high impedance; without pull-up or pull-down resistors, static noise causes erratic logic transitions.",
    "topic": "Input Interfacing"
  },
  {
    "id": "s3-mcq-10",
    "num": 10,
    "question": "What is the key architectural difference between Harvard and Von-Neumann computer architectures?",
    "options": [
      {
        "key": "A",
        "text": "Harvard has separate buses for instructions and data; Von-Neumann shares a single bus for both"
      },
      {
        "key": "B",
        "text": "Von-Neumann uses only analog circuits while Harvard is strictly digital"
      },
      {
        "key": "C",
        "text": "Harvard cannot execute arithmetic additions"
      },
      {
        "key": "D",
        "text": "Von-Neumann has separate physical chips for each byte of memory"
      }
    ],
    "correctOption": "A",
    "correctText": "Harvard has separate buses for instructions and data; Von-Neumann shares a single bus for both",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Harvard vs Von-Neumann",
    "quote": "Harvard architecture features separate memory spaces and buses for instructions and data, enabling simultaneous fetch.",
    "explanation": "Separate buses eliminate the 'Von-Neumann bottleneck', allowing concurrent instruction fetch and data operand access.",
    "topic": "Bus Architecture"
  }
];

export const SHEET_3_TF: TrueFalseQuestion[] = [
  {
    "id": "s3-tf-1",
    "num": 1,
    "question": "In Little-Endian format, the most significant byte (MSB) is stored at the lowest memory address.",
    "correctAnswer": false,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Endianness Definition",
    "quote": "Little-Endian stores the Least Significant Byte (LSB) at the lowest memory address. Big-Endian stores the MSB at the lowest address.",
    "explanation": "Storing the MSB at the lowest memory address is the definition of Big-Endian, not Little-Endian.",
    "topic": "Endianness"
  },
  {
    "id": "s3-tf-2",
    "num": 2,
    "question": "DSPs contain dedicated hardware Multiply-Accumulate (MAC) units to accelerate digital filtering algorithms.",
    "correctAnswer": true,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "DSP MAC Unit",
    "quote": "The MAC unit performs a multiplication and accumulation in a single clock cycle, vital for convolution and FIR filters.",
    "explanation": "MAC units compute equations of the form `Acc = Acc + (A * B)` in a single clock cycle.",
    "topic": "DSPs"
  },
  {
    "id": "s3-tf-3",
    "num": 3,
    "question": "FPGAs and CPLDs are fixed non-programmable logic devices whose hardware circuits cannot be changed once manufactured.",
    "correctAnswer": false,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Programmable Logic Devices",
    "quote": "FPGAs and CPLDs are reconfigurable programmable logic devices defined via hardware description languages (VHDL/Verilog).",
    "explanation": "FPGAs are field-programmable gate arrays whose internal interconnects and lookup tables can be reprogrammed anytime.",
    "topic": "Programmable Logic"
  },
  {
    "id": "s3-tf-4",
    "num": 4,
    "question": "Harvard architecture allows simultaneous access to instruction memory and data memory in the same clock cycle.",
    "correctAnswer": true,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Harvard Architecture",
    "quote": "Separate physical buses for instruction and data eliminate bus contention and permit simultaneous memory accesses.",
    "explanation": "Instruction fetch and operand read/write occur simultaneously across separate bus lines.",
    "topic": "Architecture"
  },
  {
    "id": "s3-tf-5",
    "num": 5,
    "question": "SRAM and DRAM are non-volatile Read-Write memory types that retain stored bits after system power-down.",
    "correctAnswer": false,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Memory Volatility",
    "quote": "RAM (both SRAM and DRAM) is volatile and immediately loses its contents when power is turned off.",
    "explanation": "Non-volatile memory technologies include Flash, ROM, and EEPROM.",
    "topic": "Memory Volatility"
  },
  {
    "id": "s3-tf-6",
    "num": 6,
    "question": "Big-Endian byte order stores the Most Significant Byte (MSB) at the lowest memory address.",
    "correctAnswer": true,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Big-Endian Storage",
    "quote": "Big-Endian arranges multi-byte integers with the most significant byte at the lowest address (base pointer).",
    "explanation": "This mirrors natural left-to-right reading order and is the standard for TCP/IP network byte order.",
    "topic": "Endianness"
  },
  {
    "id": "s3-tf-7",
    "num": 7,
    "question": "A normal standard DC motor produces precise discrete angular stepping rotations without continuous turning.",
    "correctAnswer": false,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Motor Types",
    "quote": "Standard DC motors produce continuous rotation when powered; stepper motors produce discrete incremental angular steps.",
    "explanation": "Stepper motors produce discrete step rotations; standard DC motors rotate continuously under DC voltage.",
    "topic": "Actuators"
  },
  {
    "id": "s3-tf-8",
    "num": 8,
    "question": "An optocoupler combines an infrared LED and a phototransistor to provide galvanic electrical isolation.",
    "correctAnswer": true,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Opto-isolators",
    "quote": "The optical barrier inside an optocoupler prevents electrical transients on the load circuit from damaging the sensitive MCU.",
    "explanation": "Light photons transfer the signal across a dielectric gap, preventing voltage spikes from reaching the MCU.",
    "topic": "Electrical Isolation"
  },
  {
    "id": "s3-tf-9",
    "num": 9,
    "question": "A Piezo buzzer is an input device used to sense acoustic sound waves from the environment.",
    "correctAnswer": false,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Piezo Transducers",
    "quote": "Piezo buzzers are audio output actuators driven by oscillating electrical signals to generate audible alarms.",
    "explanation": "In standard embedded circuits, buzzers are output actuators that emit sound, not input microphones.",
    "topic": "Actuators"
  },
  {
    "id": "s3-tf-10",
    "num": 10,
    "question": "Circular addressing buffers in DSPs prevent pointer overflow by automatically wrapping the index back to the start of the buffer.",
    "correctAnswer": true,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Circular Buffers in DSP",
    "quote": "Hardware circular buffer support automatically wraps pointers modulo buffer length without software branch overhead.",
    "explanation": "Circular buffers are essential for implementing sliding FIR filter sample histories without shifting memory arrays.",
    "topic": "DSP Architecture"
  }
];

export const SHEET_3_ESSAY: EssayQuestion[] = [
  {
    "id": "s3-essay-1",
    "num": 1,
    "question": "List and describe four key hardware units typically incorporated within a Digital Signal Processor (DSP).",
    "maxPoints": 5,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "modelAnswer": "Four key hardware units of a DSP:\n1. Multiply-Accumulate (MAC) Unit: Multiplies two numbers and accumulates the result into a wide register in a single machine cycle, accelerating discrete convolution and matrix calculations.\n2. Barrel Shifter: Shifts or rotates a data word by multiple bit positions in a single clock cycle without looping, critical for floating-to-fixed point alignment and scaling.\n3. Dedicated Address Generation Units (AGU): Computes memory operand addresses in parallel with data execution, supporting circular addressing and bit-reversed addressing for FFTs.\n4. Harvard Multiple-Bus System: Features separate program memory and data memory buses (often with multiple data read buses) to sustain high-bandwidth streaming operand throughput.",
    "keyPoints": [
      "Multiply-Accumulate (MAC) unit",
      "Barrel Shifter",
      "Address Generation Unit (AGU) for circular/bit-reversed addressing",
      "Harvard multiple-bus architecture"
    ],
    "rubric": [
      {
        "criteria": "Explains MAC unit and single-cycle multiply-add",
        "points": 1.5
      },
      {
        "criteria": "Explains Barrel Shifter operation",
        "points": 1
      },
      {
        "criteria": "Explains AGU with circular/bit-reversed addressing",
        "points": 1.25
      },
      {
        "criteria": "Explains Harvard multi-bus architecture",
        "points": 1.25
      }
    ],
    "topic": "DSP Hardware Units"
  },
  {
    "id": "s3-essay-2",
    "num": 2,
    "question": "Compare RISC (Reduced Instruction Set Computer) and CISC (Complex Instruction Set Computer) processors on instruction sets, execution cycles, pipelining, and compiler complexity.",
    "maxPoints": 5,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "modelAnswer": "1. Instruction Set & Encoding:\n- RISC: Small set of simple, orthogonal, fixed-length instructions (e.g. 32-bit ARM). Only explicit LOAD/STORE instructions access memory.\n- CISC: Large set of specialized, variable-length instructions (e.g. x86); many arithmetic instructions can operate directly on memory operands.\n\n2. Execution Cycles & Pipelining:\n- RISC: Most instructions execute in a single clock cycle, enabling deep, efficient hardware instruction pipelining.\n- CISC: Complex instructions require multi-cycle microcode execution, complicating pipeline hazard resolution.\n\n3. Hardware vs Compiler Complexity:\n- RISC: Simple hardwired decode logic leaves silicon area for large general-purpose register files; relies on optimizing compilers to combine simple instructions.\n- CISC: Complex microcode ROM and complex decode hardware; simplifies assembly programming at the expense of silicon area and power dissipation.",
    "keyPoints": [
      "RISC simple fixed instructions vs CISC complex variable instructions",
      "Load/Store architecture in RISC vs direct memory operands in CISC",
      "Single-cycle pipelined execution vs multi-cycle microcoded instructions",
      "Compiler optimization focus (RISC) vs hardware decode complexity (CISC)"
    ],
    "rubric": [
      {
        "criteria": "Compares instruction set format & memory access",
        "points": 1.5
      },
      {
        "criteria": "Compares execution cycles & pipelining",
        "points": 1.5
      },
      {
        "criteria": "Compares hardware complexity vs compiler role",
        "points": 2
      }
    ],
    "topic": "RISC vs CISC"
  },
  {
    "id": "s3-essay-3",
    "num": 3,
    "question": "Explain the concept of Endianness. Given the 32-bit integer hexadecimal value 0x12345678, illustrate byte by byte how it is stored in memory starting at address 0x2000 in both Little-Endian and Big-Endian architectures.",
    "maxPoints": 5,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "modelAnswer": "Endianness defines the ordering convention used to store multi-byte numbers in byte-addressable computer memory.\nValue: 0x12345678 (MSB = 0x12, LSB = 0x78)\n\n1. Little-Endian Architecture:\nThe Least Significant Byte (LSB) is stored at the lowest address (base address).\n- Address 0x2000: 0x78 (LSB)\n- Address 0x2001: 0x56\n- Address 0x2002: 0x34\n- Address 0x2003: 0x12 (MSB)\n(Common in ARM Cortex-M default and x86).\n\n2. Big-Endian Architecture:\nThe Most Significant Byte (MSB) is stored at the lowest address (base address).\n- Address 0x2000: 0x12 (MSB)\n- Address 0x2001: 0x34\n- Address 0x2002: 0x56\n- Address 0x2003: 0x78 (LSB)\n(Common in TCP/IP network protocol byte order).",
    "keyPoints": [
      "Definition of Endianness for multi-byte values",
      "Little-Endian: LSB at lowest address (0x78, 0x56, 0x34, 0x12)",
      "Big-Endian: MSB at lowest address (0x12, 0x34, 0x56, 0x78)",
      "Real-world architecture and network protocol citations"
    ],
    "rubric": [
      {
        "criteria": "Accurate definition of Endianness",
        "points": 1
      },
      {
        "criteria": "Correct Little-Endian memory layout with addresses",
        "points": 2
      },
      {
        "criteria": "Correct Big-Endian memory layout with addresses",
        "points": 2
      }
    ],
    "topic": "Endianness"
  },
  {
    "id": "s3-essay-4",
    "num": 4,
    "question": "Describe the operational design of an Optocoupler circuit. Why is it utilized to interface an MCU with an inductive AC or DC motor load?",
    "maxPoints": 5,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "modelAnswer": "An Optocoupler (opto-isolator) consists of an infrared Gallium Arsenide LED and a silicon phototransistor sealed within an optically transparent, electrically insulating package.\n\nCircuit Operation:\n1. An MCU digital output pin sources or sinks current through a current-limiting resistor to energize the internal IR LED.\n2. The emitted photons travel across an internal dielectric barrier and strike the base region of the phototransistor, generating electron-hole pairs that switch the transistor ON.\n3. The phototransistor conducts current in the secondary, driving the motor driver or relay coil.\n\nImportance with Inductive Loads:\nInductive motor coils produce massive negative-going flyback voltage spikes (back-EMF = -L * di/dt) upon switching off. Galvanic isolation prevents these high-voltage transients and electrical ground bounce noise from traversing back to the microcontroller, eliminating processor latch-up and brown-out resets.",
    "keyPoints": [
      "Construction: IR LED + phototransistor across optical barrier",
      "Signal transmission via light photons with complete galvanic isolation",
      "Inductive flyback back-EMF spikes (-L * di/dt)",
      "Protection against MCU latch-up and ground noise"
    ],
    "rubric": [
      {
        "criteria": "Explains internal optocoupler components and operation",
        "points": 2
      },
      {
        "criteria": "Explains inductive back-EMF mechanism",
        "points": 1.5
      },
      {
        "criteria": "Explains protection of low-voltage MCU logic",
        "points": 1.5
      }
    ],
    "topic": "Circuit Isolation"
  },
  {
    "id": "s3-essay-5",
    "num": 5,
    "question": "Explain the difference between Common Anode and Common Cathode 7-segment LED display configurations, and deduce the binary byte required to display the digit '1' in a Common Cathode configuration (segments a through g).",
    "maxPoints": 5,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "modelAnswer": "1. Common Anode (CA):\nThe anodes of all eight LED segments (a, b, c, d, e, f, g, and decimal point dp) are connected to a common +VCC rail. An individual segment illuminates when its cathode is driven LOW (Logic 0 / 0V).\n\n2. Common Cathode (CC):\nThe cathodes of all eight LED segments are tied to a common Ground (0V). An individual segment illuminates when its anode is driven HIGH (Logic 1 / +5V).\n\nDisplaying Digit '1' on Common Cathode Display:\nStandard 7-segment mapping: Digit '1' requires illuminating segments 'b' and 'c' only; segments a, d, e, f, g, and dp are OFF.\nBit order [dp, g, f, e, d, c, b, a]:\n- a = 0\n- b = 1\n- c = 1\n- d = 0\n- e = 0\n- f = 0\n- g = 0\n- dp = 0\nBinary Pattern: 0000 0110_2 = 0x06 (Hexadecimal).",
    "keyPoints": [
      "CA: Anodes tied to VCC, active LOW (0 lights segment)",
      "CC: Cathodes tied to GND, active HIGH (1 lights segment)",
      "Digit '1' requires segments b and c active",
      "Binary: 0b00000110 (Hex 0x06)"
    ],
    "rubric": [
      {
        "criteria": "Explains Common Anode electrical setup & logic",
        "points": 1.5
      },
      {
        "criteria": "Explains Common Cathode electrical setup & logic",
        "points": 1.5
      },
      {
        "criteria": "Correct segment identification and hex/binary value (0x06)",
        "points": 2
      }
    ],
    "topic": "Displays & Decoding"
  }
];

export const SHEET_4_METADATA: ExamMetadata = {
  "id": "sheet-4",
  "sheetNumber": 4,
  "courseCode": "CCS4207",
  "courseTitle": "Embedded Systems Programming",
  "institution": "College of Computing & Information Technology \u2014 AASTMT",
  "examTitle": "Sheet 4: Digital Circuit Design & Logic Optimization",
  "sourceDoc": "Week 04 - Lecture 4 (Dr. Ehab Elsehely)",
  "lectures": [
    "Week 04 - Lecture 4 (Dr. Ehab Elsehely)"
  ],
  "totalTF": 10,
  "totalMCQ": 10,
  "totalEssay": 5,
  "totalPoints": 45,
  "timeLimitMinutes": 30
};

export const SHEET_4_MCQ: MCQQuestion[] = [
  {
    "id": "s4-mcq-1",
    "num": 1,
    "question": "Which of the following best describes analog circuits?",
    "options": [
      {
        "key": "A",
        "text": "They operate exclusively with binary 0 and 1 voltage states"
      },
      {
        "key": "B",
        "text": "They deal with continuously varying signals with respect to time"
      },
      {
        "key": "C",
        "text": "They are immune to physical environmental noise"
      },
      {
        "key": "D",
        "text": "They contain only software look-up tables"
      }
    ],
    "correctOption": "B",
    "correctText": "They deal with continuously varying signals with respect to time",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Analog vs Digital",
    "quote": "Analog circuits deal with continuous physical waveforms whose amplitude varies smoothly over time.",
    "explanation": "Natural phenomena (temperature, sound, voltage) are continuous analog signals.",
    "topic": "Analog vs Digital"
  },
  {
    "id": "s4-mcq-2",
    "num": 2,
    "question": "In an embedded system, what component is responsible for converting real-world continuous signals into discrete binary values?",
    "options": [
      {
        "key": "A",
        "text": "DAC (Digital-to-Analog Converter)"
      },
      {
        "key": "B",
        "text": "Multiplexer (MUX)"
      },
      {
        "key": "C",
        "text": "ADC (Analog-to-Digital Converter)"
      },
      {
        "key": "D",
        "text": "Schmitt Trigger Inverter"
      }
    ],
    "correctOption": "C",
    "correctText": "ADC (Analog-to-Digital Converter)",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Signal Conditioning & Conversion",
    "quote": "The Analog-to-Digital Converter (ADC) samples continuous analog sensor voltages and quantizes them into digital binary words.",
    "explanation": "The ADC bridges the analog physical realm and digital microcontroller ALU.",
    "topic": "ADC Conversion"
  },
  {
    "id": "s4-mcq-3",
    "num": 3,
    "question": "Which C bitwise operator is commonly used to toggle an output pin on an embedded microcontroller?",
    "options": [
      {
        "key": "A",
        "text": "Bitwise AND (&)"
      },
      {
        "key": "B",
        "text": "Bitwise OR (|)"
      },
      {
        "key": "C",
        "text": "Bitwise XOR (^) (e.g. PORTA ^= 0x01;)"
      },
      {
        "key": "D",
        "text": "Logical NOT (!)"
      }
    ],
    "correctOption": "C",
    "correctText": "Bitwise XOR (^) (e.g. PORTA ^= 0x01;)",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Bitwise Register Masking",
    "quote": "XORing a bit with 1 inverts (toggles) its state without altering surrounding register bits.",
    "explanation": "`0 ^ 1 = 1` and `1 ^ 1 = 0`; hence XOR with mask 1 toggles the target bit.",
    "topic": "Bitwise Masking"
  },
  {
    "id": "s4-mcq-4",
    "num": 4,
    "question": "What is the Boolean expression for the Carry (C) output of a Half Adder with inputs A and B?",
    "options": [
      {
        "key": "A",
        "text": "C = A \u2295 B"
      },
      {
        "key": "B",
        "text": "C = A \u00b7 B (AND)"
      },
      {
        "key": "C",
        "text": "C = A + B (OR)"
      },
      {
        "key": "D",
        "text": "C = A' \u00b7 B'"
      }
    ],
    "correctOption": "B",
    "correctText": "C = A \u00b7 B (AND)",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Half Adder Equations",
    "quote": "Half Adder Boolean equations: Sum S = A \u2295 B, Carry C = A \u00b7 B.",
    "explanation": "A carry is generated only when both input bits A and B are 1 (A \u00b7 B).",
    "topic": "Arithmetic Circuits"
  },
  {
    "id": "s4-mcq-5",
    "num": 5,
    "question": "In microcontroller architecture, what is the primary purpose of a Multiplexer (MUX) connected to external I/O pins?",
    "options": [
      {
        "key": "A",
        "text": "To increase power consumption intentionally"
      },
      {
        "key": "B",
        "text": "To amplify analog radio signals"
      },
      {
        "key": "C",
        "text": "To act as an internal selector allowing a single physical pin to route UART, SPI, PWM, or GPIO functions"
      },
      {
        "key": "D",
        "text": "To replace internal Flash program memory"
      }
    ],
    "correctOption": "C",
    "correctText": "To act as an internal selector allowing a single physical pin to route UART, SPI, PWM, or GPIO functions",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Pin Multiplexing",
    "quote": "Pin multiplexers select which internal peripheral (UART, SPI, Timer, GPIO) connects to a physical external package pin.",
    "explanation": "Multiplexing maximizes silicon versatility on pin-constrained packages.",
    "topic": "Pin Multiplexing"
  },
  {
    "id": "s4-mcq-6",
    "num": 6,
    "question": "Why is Boolean logic optimization critical in battery-operated embedded system design?",
    "options": [
      {
        "key": "A",
        "text": "It increases the number of required transistors"
      },
      {
        "key": "B",
        "text": "It reduces gate count and switching activity, lowering dynamic power consumption and heat"
      },
      {
        "key": "C",
        "text": "It prevents the software from executing loops"
      },
      {
        "key": "D",
        "text": "It eliminates the need for an external crystal oscillator"
      }
    ],
    "correctOption": "B",
    "correctText": "It reduces gate count and switching activity, lowering dynamic power consumption and heat",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Logic Optimization",
    "quote": "Minimizing Boolean logic reduces gate delays, shrinks silicon die area, and lowers dynamic CMOS power consumption (P = C * V^2 * f).",
    "explanation": "Fewer logic transitions directly extend battery runtime and reduce propagation delays.",
    "topic": "Optimization"
  },
  {
    "id": "s4-mcq-7",
    "num": 7,
    "question": "How many inputs does a Full Adder require to perform multi-bit binary arithmetic addition?",
    "options": [
      {
        "key": "A",
        "text": "1 input"
      },
      {
        "key": "B",
        "text": "2 inputs"
      },
      {
        "key": "C",
        "text": "3 inputs (A, B, and Carry-In Cin)"
      },
      {
        "key": "D",
        "text": "4 inputs"
      }
    ],
    "correctOption": "C",
    "correctText": "3 inputs (A, B, and Carry-In Cin)",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Full Adder Circuit",
    "quote": "A Full Adder accepts three binary inputs: operand bits A, B, and the carry-in bit Cin from the previous stage.",
    "explanation": "To cascade adders into an n-bit ripple-carry ALU adder, each stage must incorporate the previous stage's carry.",
    "topic": "Adders"
  },
  {
    "id": "s4-mcq-8",
    "num": 8,
    "question": "Which diagnostic measuring tool is specifically engineered for multi-channel digital signal and serial protocol debugging?",
    "options": [
      {
        "key": "A",
        "text": "Analog Voltmeter"
      },
      {
        "key": "B",
        "text": "Pyrometer"
      },
      {
        "key": "C",
        "text": "Logic Analyzer"
      },
      {
        "key": "D",
        "text": "Wattmeter"
      }
    ],
    "correctOption": "C",
    "correctText": "Logic Analyzer",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Diagnostic Instruments",
    "quote": "A Logic Analyzer monitors dozens of synchronized digital signal lines simultaneously and decodes protocols (UART, SPI, I2C).",
    "explanation": "Logic Analyzers excel at capturing digital bus states and triggering on specific protocol frame words.",
    "topic": "Diagnostic Tools"
  },
  {
    "id": "s4-mcq-9",
    "num": 9,
    "question": "When a high-level C statement like 'int X = a + b;' is executed by a microcontroller, what hardware unit performs the binary addition?",
    "options": [
      {
        "key": "A",
        "text": "The Flash ROM controller"
      },
      {
        "key": "B",
        "text": "Full Adders inside the Arithmetic Logic Unit (ALU)"
      },
      {
        "key": "C",
        "text": "The watchdog timer"
      },
      {
        "key": "D",
        "text": "The analog comparator"
      }
    ],
    "correctOption": "B",
    "correctText": "Full Adders inside the Arithmetic Logic Unit (ALU)",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "ALU Arithmetic",
    "quote": "Arithmetic operations are executed by hardware Full Adders inside the processor's Arithmetic Logic Unit (ALU).",
    "explanation": "The compiler emits an ADD assembly instruction that routes operands through the ALU's cascaded Full Adders.",
    "topic": "ALU Execution"
  },
  {
    "id": "s4-mcq-10",
    "num": 10,
    "question": "In the Proteus Home Security System simulation example, which sensor is used to detect combustible gas leaks?",
    "options": [
      {
        "key": "A",
        "text": "PIR Motion Sensor"
      },
      {
        "key": "B",
        "text": "DS18B20 Temperature Probe"
      },
      {
        "key": "C",
        "text": "LDR Light Sensor"
      },
      {
        "key": "D",
        "text": "MQ-6 Gas Sensor"
      }
    ],
    "correctOption": "D",
    "correctText": "MQ-6 Gas Sensor",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Embedded Application Example",
    "quote": "The Proteus security system model uses the MQ-6 gas sensor to detect LPG and butane gas concentrations.",
    "explanation": "The MQ-6 semiconductor gas sensor provides an analog voltage proportional to LPG/propane gas levels.",
    "topic": "Simulation Example"
  }
];

export const SHEET_4_TF: TrueFalseQuestion[] = [
  {
    "id": "s4-tf-1",
    "num": 1,
    "question": "Analog circuits can handle a wide range of amplitude signals and are widely used in audio amplifiers and RF communication.",
    "correctAnswer": true,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Analog Systems",
    "quote": "Analog circuits process continuous signals over a wide dynamic range in audio and RF transceivers.",
    "explanation": "Continuous analog amplification is essential for radio antennas, microphones, and power stages.",
    "topic": "Analog Systems"
  },
  {
    "id": "s4-tf-2",
    "num": 2,
    "question": "Real-world physical quantities like temperature and pressure are inherently digital in nature.",
    "correctAnswer": false,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Physical Transduction",
    "quote": "Physical phenomena in nature (temperature, pressure, acoustic vibration) are continuous analog quantities.",
    "explanation": "Natural quantities vary smoothly and continuously; they must be converted to digital via ADCs for MCU processing.",
    "topic": "Physical Quantities"
  },
  {
    "id": "s4-tf-3",
    "num": 3,
    "question": "Bitwise AND and OR operations are frequently used in register bit masking to selectively clear and set individual bits.",
    "correctAnswer": true,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Bit Manipulation",
    "quote": "Bitwise AND clears targeted bits (e.g., REG &= ~(1<<b)); Bitwise OR sets targeted bits (e.g., REG |= (1<<b)).",
    "explanation": "AND with 0 forces a bit low; OR with 1 forces a bit high, preserving surrounding configuration bits.",
    "topic": "Bitwise Operations"
  },
  {
    "id": "s4-tf-4",
    "num": 4,
    "question": "A Half Adder can add two binary operand bits plus an additional carry-in bit from a previous stage.",
    "correctAnswer": false,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Adders Comparison",
    "quote": "A Half Adder accepts only two inputs (A and B). A Full Adder accepts three inputs (A, B, and Cin).",
    "explanation": "Handling an incoming carry-in bit requires a Full Adder, which has 3 inputs.",
    "topic": "Adders"
  },
  {
    "id": "s4-tf-5",
    "num": 5,
    "question": "Demultiplexers (DEMUX) are used to distribute a single input signal to one of multiple output lines based on selector lines.",
    "correctAnswer": true,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Demultiplexers",
    "quote": "A DEMUX takes a single input data stream and routes it to one of 2^n outputs selected by n control lines.",
    "explanation": "DEMUX operates as a 1-to-N electronic routing switch.",
    "topic": "Demultiplexers"
  },
  {
    "id": "s4-tf-6",
    "num": 6,
    "question": "Logic simplification and optimization directly increase the power consumption of battery-operated systems.",
    "correctAnswer": false,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Power & Logic Minimization",
    "quote": "Logic simplification decreases transistor count and parasitic capacitance, directly lowering power consumption.",
    "explanation": "Reducing gate counts lowers dynamic switching power (P = C * V^2 * f) and leakage.",
    "topic": "Power Optimization"
  },
  {
    "id": "s4-tf-7",
    "num": 7,
    "question": "The Boolean expression for a basic two-input AND gate is Y = A + B.",
    "correctAnswer": false,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Logic Gate Theorems",
    "quote": "AND is Boolean multiplication: Y = A \u00b7 B. The expression Y = A + B represents an OR gate.",
    "explanation": "Y = A \u00b7 B is AND; Y = A + B is OR.",
    "topic": "Boolean Theorems"
  },
  {
    "id": "s4-tf-8",
    "num": 8,
    "question": "Integrated Circuits (ICs) like the 74HC04N package multiple logic gates (e.g. hex inverters) in a single package.",
    "correctAnswer": true,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Standard Logic ICs",
    "quote": "The 74HC04N contains six independent NOT gates (hex inverter) in a 14-pin DIP package.",
    "explanation": "Standard 74-series logic chips package multiple gates (e.g. quad 2-input NAND 74HC00, hex inverter 74HC04).",
    "topic": "Digital ICs"
  },
  {
    "id": "s4-tf-9",
    "num": 9,
    "question": "An Oscilloscope is primarily used for analyzing signal waveforms over time, while a Logic Analyzer captures multi-channel digital logic states.",
    "correctAnswer": true,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Oscilloscope vs Logic Analyzer",
    "quote": "Oscilloscopes display continuous analog voltage waveforms; Logic Analyzers capture multi-line timing states and decode bus protocols.",
    "explanation": "Oscilloscopes inspect signal integrity and rise times; logic analyzers decode parallel and serial data packets.",
    "topic": "Test Equipment"
  },
  {
    "id": "s4-tf-10",
    "num": 10,
    "question": "In the Proteus simulation example, an alphanumeric LCD 20x4 is used to display system status messages to the operator.",
    "correctAnswer": true,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Display Interfacing",
    "quote": "The 20x4 LCD displays real-time sensory telemetry and alert statuses in Proteus simulation.",
    "explanation": "20x4 HD44780 LCD modules are widely used in prototyping to output human-readable diagnostic messages.",
    "topic": "LCD Interfacing"
  }
];

export const SHEET_4_ESSAY: EssayQuestion[] = [
  {
    "id": "s4-essay-1",
    "num": 1,
    "question": "Describe the complete signal flow in an embedded system from a real-world physical quantity to execution within the MCU ALU.",
    "maxPoints": 5,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "modelAnswer": "1. Physical Domain: The environment contains a physical phenomenon (e.g. ambient temperature or soil moisture).\n2. Transduction (Sensor): A sensor (e.g. thermistor or POT-HG) converts the physical parameter into a continuously varying analog electrical signal (voltage/current).\n3. Signal Conditioning: Amplifiers or low-pass filter circuits eliminate high-frequency noise and scale the signal to match the MCU ADC range (e.g. 0 to 3.3V/5V).\n4. Analog-to-Digital Conversion (ADC): The ADC samples the continuous voltage and quantizes it into a discrete digital binary representation (e.g. 10-bit value 0\u20131023).\n5. Digital Bus & Registers: The binary word is stored in an ADC data register and loaded into MCU general-purpose registers via internal data buses.\n6. ALU Processing: The Arithmetic Logic Unit (ALU), using cascaded Full Adders and logic gates, executes firmware comparisons or threshold algorithms to trigger output decisions.",
    "keyPoints": [
      "Physical parameter detection",
      "Sensor transduction to analog voltage",
      "Signal conditioning / filtering",
      "ADC sampling and quantization",
      "Register storage via internal buses",
      "ALU logic processing and decision"
    ],
    "rubric": [
      {
        "criteria": "Explains sensor transduction and signal conditioning",
        "points": 1.75
      },
      {
        "criteria": "Explains ADC sampling & quantization process",
        "points": 1.75
      },
      {
        "criteria": "Explains ALU execution and register flow",
        "points": 1.5
      }
    ],
    "topic": "Signal Flow"
  },
  {
    "id": "s4-essay-2",
    "num": 2,
    "question": "Compare a Half Adder and a Full Adder. State their respective inputs, outputs, truth tables, and Boolean equations.",
    "maxPoints": 5,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "modelAnswer": "1. Half Adder:\n- Inputs: 2 single-bit operands (A, B).\n- Outputs: Sum (S), Carry (C).\n- Boolean Equations:\n  * Sum: S = A \u2295 B\n  * Carry: C = A \u00b7 B\n- Limitation: Cannot accept a carry from a preceding stage; can only be used for the least significant bit (LSB).\n\n2. Full Adder:\n- Inputs: 3 inputs: 2 operand bits (A, B) and a Carry-In (Cin) from the lower stage.\n- Outputs: Sum (S), Carry-Out (Cout).\n- Boolean Equations:\n  * Sum: S = A \u2295 B \u2295 Cin\n  * Carry-Out: Cout = (A \u00b7 B) + (Cin \u00b7 (A \u2295 B)) [or AB + BCin + ACin]\n- Capability: Can be cascaded into an n-bit ripple-carry adder to perform arbitrary multi-byte integer addition inside an MCU ALU.",
    "keyPoints": [
      "Half Adder: 2 inputs (A, B); S = A\u2295B, C = A\u00b7B",
      "Full Adder: 3 inputs (A, B, Cin); S = A\u2295B\u2295Cin, Cout = AB + Cin(A\u2295B)",
      "Full Adder supports cascading for n-bit arithmetic"
    ],
    "rubric": [
      {
        "criteria": "Half Adder inputs, outputs & equations",
        "points": 2
      },
      {
        "criteria": "Full Adder inputs, outputs & equations",
        "points": 2
      },
      {
        "criteria": "Explains cascading capability in ALUs",
        "points": 1
      }
    ],
    "topic": "Binary Adders"
  },
  {
    "id": "s4-essay-3",
    "num": 3,
    "question": "Explain how bitwise operations (AND, OR, XOR, NOT) are used in microcontroller C programming to manipulate individual hardware registers without affecting other bits.",
    "maxPoints": 5,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "modelAnswer": "Microcontroller peripherals are controlled by memory-mapped registers where each bit controls a distinct hardware function (e.g. pin direction, interrupt enable).\n\n1. Setting a Bit (Bitwise OR with 1):\nFormula: `REG |= (1 << n);`\nTruth table property: `x | 1 = 1`, and `x | 0 = x`. Forces bit n to 1 while leaving all other bits completely unchanged.\n\n2. Clearing a Bit (Bitwise AND with NOT):\nFormula: `REG &= ~(1 << n);`\nTruth table property: `x & 0 = 0`, and `x & 1 = x`. `~(1<<n)` creates a mask with 0 at bit n and 1 everywhere else, forcing bit n to 0 without disturbing adjacent bits.\n\n3. Toggling a Bit (Bitwise XOR with 1):\nFormula: `REG ^= (1 << n);`\nTruth table property: `0 ^ 1 = 1`, and `1 ^ 1 = 0`. Inverts bit n on every execution (ideal for blinking LEDs).\n\n4. Testing / Reading a Bit (Bitwise AND):\nFormula: `if (REG & (1 << n))`\nIsolates bit n to check if an input pin is HIGH or an interrupt flag is set.",
    "keyPoints": [
      "Setting bits with `|= (1<<n)`",
      "Clearing bits with `&= ~(1<<n)`",
      "Toggling bits with `^= (1<<n)`",
      "Testing bits with `& (1<<n)`"
    ],
    "rubric": [
      {
        "criteria": "Explains Setting bits with OR syntax and logic",
        "points": 1.25
      },
      {
        "criteria": "Explains Clearing bits with AND/NOT syntax and logic",
        "points": 1.25
      },
      {
        "criteria": "Explains Toggling bits with XOR syntax and logic",
        "points": 1.25
      },
      {
        "criteria": "Explains Testing bits with AND mask",
        "points": 1.25
      }
    ],
    "topic": "Register Bitwise Manipulation"
  },
  {
    "id": "s4-essay-4",
    "num": 4,
    "question": "Simplify the following Boolean expression step-by-step using Boolean algebra theorems: F = A\u00b7B\u00b7C + A\u00b7B\u00b7C' + A'\u00b7B\u00b7C.",
    "maxPoints": 5,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "modelAnswer": "Expression: F = A\u00b7B\u00b7C + A\u00b7B\u00b7C' + A'\u00b7B\u00b7C\n\nStep 1 (Factoring first two terms):\nNotice that the first two terms share common factor (A\u00b7B):\nA\u00b7B\u00b7C + A\u00b7B\u00b7C' = A\u00b7B\u00b7(C + C')\n\nStep 2 (Complement Law):\nSince C + C' = 1:\nA\u00b7B\u00b7(1) = A\u00b7B\n\nStep 3 (Recombining):\nNow the expression becomes: F = A\u00b7B + A'\u00b7B\u00b7C\n\nStep 4 (Factoring out B):\nFactor common variable B:\nF = B\u00b7(A + A'\u00b7C)\n\nStep 5 (Distributive / Redundancy Law):\nUsing the Boolean identity A + A'\u00b7C = (A + A')\u00b7(A + C) = 1\u00b7(A + C) = A + C:\nF = B\u00b7(A + C)\n\nStep 6 (Final SOP Form):\nF = A\u00b7B + B\u00b7C\n\nConclusion: The original 3-term, 9-literal expression simplifies to 2 terms with 4 literals, eliminating one full AND gate and several gate inputs.",
    "keyPoints": [
      "Factor A\u00b7B from first two terms",
      "Apply C + C' = 1 to get A\u00b7B",
      "Factor B to get B(A + A'C)",
      "Apply absorption/distributive identity to arrive at A\u00b7B + B\u00b7C"
    ],
    "rubric": [
      {
        "criteria": "Correct grouping of terms",
        "points": 1.5
      },
      {
        "criteria": "Application of complement and identity laws",
        "points": 2
      },
      {
        "criteria": "Correct final simplified expression (AB + BC or B(A+C))",
        "points": 1.5
      }
    ],
    "topic": "Boolean Simplification"
  },
  {
    "id": "s4-essay-5",
    "num": 5,
    "question": "What is the function of a Multiplexer (MUX)? Explain how pin multiplexing allows an MCU with only 48 physical pins to provide over 100 peripheral signal connections.",
    "maxPoints": 5,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Pin Multiplexing",
    "modelAnswer": "A Multiplexer (MUX) is a combinational digital circuit with 2^n data input lines, n selector lines, and 1 output line. It routes one of the input lines to the common output based on the binary combination on the selector lines.\n\nPin Multiplexing in Microcontrollers:\nMicrocontrollers face strict physical package pin constraints (e.g., 28-pin DIP, 48-pin or 64-pin LQFP) to maintain compact board size and low fabrication cost, yet modern MCUs contain dozens of on-chip peripherals (multiple UARTs, SPI buses, I2C controllers, PWM channels, ADC inputs, timers, and GPIO ports).\n\nSolution Mechanism:\nInstead of assigning a dedicated physical pin to every peripheral, each physical package pin is wired to the output of an internal multiplexer. Configuration registers (such as the Port Control Register `GPIOPCTL` and Alternate Function Select `GPIOAFSEL` in ARM Cortex-M) serve as the selector lines. Software configures these registers during boot to assign each pin its specific role (e.g. Pin PA0 can be selected as GPIO, UART0_RX, or CAN0_Rx), enabling over 100 functional signals to share 48 physical pins.",
    "keyPoints": [
      "Definition of MUX (2^n inputs, n select lines, 1 output)",
      "Physical package constraints vs numerous on-chip peripherals",
      "Internal MUX routes peripheral to shared physical pin",
      "Configured via registers (e.g. GPIOAFSEL/GPIOPCTL in ARM)"
    ],
    "rubric": [
      {
        "criteria": "Clear definition of Multiplexer circuit",
        "points": 1.5
      },
      {
        "criteria": "Explains pin constraint problem in modern MCUs",
        "points": 1.5
      },
      {
        "criteria": "Explains register-based peripheral routing mechanism",
        "points": 2
      }
    ],
    "topic": "Pin Multiplexing"
  }
];

export const SHEET_5_METADATA: ExamMetadata = {
  "id": "sheet-5",
  "sheetNumber": 5,
  "courseCode": "CCS4207",
  "courseTitle": "Embedded Systems Programming",
  "institution": "College of Computing & Information Technology \u2014 AASTMT",
  "examTitle": "Sheet 5: ARM Architecture & TM4C123GH6PM Programming",
  "sourceDoc": "Week 06 - Lecture 5 (Dr. Ehab Elsehely)",
  "lectures": [
    "Week 06 - Lecture 5 (Dr. Ehab Elsehely)"
  ],
  "totalTF": 10,
  "totalMCQ": 10,
  "totalEssay": 5,
  "totalPoints": 45,
  "timeLimitMinutes": 35
};

export const SHEET_5_MCQ: MCQQuestion[] = [
  {
    "id": "s5-mcq-1",
    "num": 1,
    "question": "What did the acronym ARM originally stand for?",
    "options": [
      {
        "key": "A",
        "text": "Advanced Real-time Machine"
      },
      {
        "key": "B",
        "text": "Acorn RISC Machine"
      },
      {
        "key": "C",
        "text": "Automated RISC Microcontroller"
      },
      {
        "key": "D",
        "text": "Application Routing Module"
      }
    ],
    "correctOption": "B",
    "correctText": "Acorn RISC Machine",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "ARM History",
    "quote": "ARM originally stood for Acorn RISC Machine when developed by Acorn Computers in the UK.",
    "explanation": "Developed by Acorn Computers in 1985, the company later spun off as Advanced RISC Machines (ARM).",
    "topic": "ARM History"
  },
  {
    "id": "s5-mcq-2",
    "num": 2,
    "question": "Which processor family was introduced in 1991 to meet Apple's requirement for the Newton PDA?",
    "options": [
      {
        "key": "A",
        "text": "ARM1"
      },
      {
        "key": "B",
        "text": "ARM2"
      },
      {
        "key": "C",
        "text": "ARM6"
      },
      {
        "key": "D",
        "text": "Cortex-M3"
      }
    ],
    "correctOption": "C",
    "correctText": "ARM6",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "ARM History & Apple Partnership",
    "quote": "In 1991, ARM introduced the ARM6 family to meet Apple's requirements for the Apple Newton handheld device.",
    "explanation": "The collaboration between Acorn, Apple, and VLSI Technology led to the ARM6 architecture.",
    "topic": "ARM History"
  },
  {
    "id": "s5-mcq-3",
    "num": 3,
    "question": "Which ARM Cortex processor profile is specifically optimized for high-performance rich operating systems like Linux and Android?",
    "options": [
      {
        "key": "A",
        "text": "Cortex-M"
      },
      {
        "key": "B",
        "text": "Cortex-R"
      },
      {
        "key": "C",
        "text": "Cortex-A"
      },
      {
        "key": "D",
        "text": "Cortex-S"
      }
    ],
    "correctOption": "C",
    "correctText": "Cortex-A",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "ARM Cortex Profiles",
    "quote": "Cortex-A (Application): Optimized for rich operating systems (Android, Linux) with high memory management (MMU) capabilities.",
    "explanation": "Cortex-A features Memory Management Units (MMUs) required to support multi-user virtual memory OSs.",
    "topic": "Cortex Profiles"
  },
  {
    "id": "s5-mcq-4",
    "num": 4,
    "question": "Which ARM Cortex profile is engineered for hard real-time, fault-tolerant applications like automotive braking and avionics?",
    "options": [
      {
        "key": "A",
        "text": "Cortex-A"
      },
      {
        "key": "B",
        "text": "Cortex-R"
      },
      {
        "key": "C",
        "text": "Cortex-M"
      },
      {
        "key": "D",
        "text": "Cortex-X"
      }
    ],
    "correctOption": "B",
    "correctText": "Cortex-R",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "Cortex-R Profile",
    "quote": "Cortex-R (Real-Time): Tailored for hard real-time systems where high deterministic throughput and low latency are critical.",
    "explanation": "Cortex-R cores feature tightly coupled memory (TCM) and fault-detecting lockstep configurations.",
    "topic": "Cortex Profiles"
  },
  {
    "id": "s5-mcq-5",
    "num": 5,
    "question": "Which ARM Cortex series is optimized for low-cost, low-power discrete microcontrollers and IoT endpoints?",
    "options": [
      {
        "key": "A",
        "text": "Cortex-A"
      },
      {
        "key": "B",
        "text": "Cortex-R"
      },
      {
        "key": "C",
        "text": "Cortex-M"
      },
      {
        "key": "D",
        "text": "Cortex-H"
      }
    ],
    "correctOption": "C",
    "correctText": "Cortex-M",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "Cortex-M Profile",
    "quote": "Cortex-M (Microcontroller): Engineered for discrete processing, rapid interrupt handling, and ultra-low power.",
    "explanation": "Cortex-M (M0, M3, M4, M7) provides single-cycle I/O, integrated NVIC, and efficient interrupt dispatch.",
    "topic": "Cortex Profiles"
  },
  {
    "id": "s5-mcq-6",
    "num": 6,
    "question": "What microcontroller chip is featured on the Texas Instruments Tiva C Series LaunchPad evaluation board used in this course?",
    "options": [
      {
        "key": "A",
        "text": "ATmega328P"
      },
      {
        "key": "B",
        "text": "TM4C123GH6PM"
      },
      {
        "key": "C",
        "text": "STM32F103C8T6"
      },
      {
        "key": "D",
        "text": "PIC16F877A"
      }
    ],
    "correctOption": "B",
    "correctText": "TM4C123GH6PM",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "TM4C123GH6PM Hardware",
    "quote": "The course hardware platform is the TI EK-TM4C123GXL LaunchPad featuring the TM4C123GH6PM MCU (ARM Cortex-M4F).",
    "explanation": "The TM4C123GH6PM includes an 80 MHz Cortex-M4F core, 256 KB Flash, 32 KB SRAM, and rich GPIO ports.",
    "topic": "Target Hardware"
  },
  {
    "id": "s5-mcq-7",
    "num": 7,
    "question": "What is the mandatory first step before configuring or writing to any GPIO port register in the TM4C123GH6PM?",
    "options": [
      {
        "key": "A",
        "text": "Write to the GPIODIR register"
      },
      {
        "key": "B",
        "text": "Enable the clock gating for that GPIO port in the RCGCGPIO register and wait for it to stabilize"
      },
      {
        "key": "C",
        "text": "Pull the RESET pin LOW"
      },
      {
        "key": "D",
        "text": "Clear the Flash memory entirely"
      }
    ],
    "correctOption": "B",
    "correctText": "Enable the clock gating for that GPIO port in the RCGCGPIO register and wait for it to stabilize",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "GPIO Clock Initialization",
    "quote": "Before accessing any GPIO register, the run-mode clock gating for that port must be enabled via SYSCTL_RCGCGPIO_R.",
    "explanation": "Accessing an unclocked peripheral bus triggers an immediate hardware Bus Fault exception.",
    "topic": "Peripheral Clocking"
  },
  {
    "id": "s5-mcq-8",
    "num": 8,
    "question": "In the TM4C123, which register sets individual port pins as either inputs (0) or outputs (1)?",
    "options": [
      {
        "key": "A",
        "text": "GPIODEN"
      },
      {
        "key": "B",
        "text": "GPIODATA"
      },
      {
        "key": "C",
        "text": "GPIODIR"
      },
      {
        "key": "D",
        "text": "GPIOAFSEL"
      }
    ],
    "correctOption": "C",
    "correctText": "GPIODIR",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "GPIODIR Register",
    "quote": "GPIODIR: Setting a bit to 1 configures the corresponding pin as an output; clearing to 0 configures it as an input.",
    "explanation": "Direction Register (GPIODIR): 0 = Input, 1 = Output.",
    "topic": "GPIO Registers"
  },
  {
    "id": "s5-mcq-9",
    "num": 9,
    "question": "Which register must be written with 1 to enable digital functionality for target pins in the TM4C123?",
    "options": [
      {
        "key": "A",
        "text": "GPIODEN (Digital Enable)"
      },
      {
        "key": "B",
        "text": "GPIOAMSEL (Analog Mode Select)"
      },
      {
        "key": "C",
        "text": "GPIOPUR"
      },
      {
        "key": "D",
        "text": "GPIOLOCK"
      }
    ],
    "correctOption": "A",
    "correctText": "GPIODEN (Digital Enable)",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "GPIODEN Register",
    "quote": "The Digital Enable register (GPIODEN) must be set to 1 for each pin used for digital I/O.",
    "explanation": "GPIODEN enables the internal digital input buffers and output drivers for the corresponding pin.",
    "topic": "GPIO Registers"
  },
  {
    "id": "s5-mcq-10",
    "num": 10,
    "question": "What is the primary architectural purpose of Bit-Banding in ARM Cortex-M microcontrollers?",
    "options": [
      {
        "key": "A",
        "text": "To increase processor operating voltage"
      },
      {
        "key": "B",
        "text": "To provide atomic, single-cycle read and write access to individual bits in SRAM and peripheral registers"
      },
      {
        "key": "C",
        "text": "To compress assembly code size"
      },
      {
        "key": "D",
        "text": "To disable all interrupts permanently"
      }
    ],
    "correctOption": "B",
    "correctText": "To provide atomic, single-cycle read and write access to individual bits in SRAM and peripheral registers",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "Bit-Banding Concept",
    "quote": "Bit-banding maps an entire 32-bit word alias to a single bit in memory, allowing atomic bit modification without read-modify-write hazard.",
    "explanation": "Bit-banding guarantees atomic bit updates, preventing race conditions when interrupts preempt register writes.",
    "topic": "Bit-Banding"
  }
];

export const SHEET_5_TF: TrueFalseQuestion[] = [
  {
    "id": "s5-tf-1",
    "num": 1,
    "question": "The ARM processor architecture is based on CISC (Complex Instruction Set Computer) design philosophy.",
    "correctAnswer": false,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "ARM Architecture Principles",
    "quote": "ARM is a textbook RISC (Reduced Instruction Set Computer) architecture featuring a load-store structure.",
    "explanation": "ARM is fundamentally a RISC architecture with uniform 32-bit (or 16-bit Thumb) instructions.",
    "topic": "ARM Architecture"
  },
  {
    "id": "s5-tf-2",
    "num": 2,
    "question": "ARM Cortex-M processors deploy a Harvard architecture with separate instruction and data buses.",
    "correctAnswer": true,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "Cortex-M Bus Architecture",
    "quote": "Cortex-M3 and M4 utilize Harvard bus architecture (I-Code, D-Code, and System bus) for concurrent memory operations.",
    "explanation": "Separate internal buses allow concurrent instruction fetching and data operand access.",
    "topic": "Bus Architecture"
  },
  {
    "id": "s5-tf-3",
    "num": 3,
    "question": "The TM4C123GH6PM microcontroller incorporates an ARM Cortex-M4F processor core capable of operating at up to 80 MHz.",
    "correctAnswer": true,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "TM4C123 Clock Speed",
    "quote": "The TM4C123GH6PM features an ARM Cortex-M4F processor core with single-precision FPU operating up to 80 MHz.",
    "explanation": "The LaunchPad PLL can be configured to run the system clock at up to 80 MHz from a 16 MHz crystal.",
    "topic": "Microcontroller Specs"
  },
  {
    "id": "s5-tf-4",
    "num": 4,
    "question": "Attempting to read or write a GPIO register in TM4C123 before enabling its clock in RCGCGPIO triggers a hardware Bus Fault.",
    "correctAnswer": true,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "Clock Gating & Faults",
    "quote": "Accessing an unclocked peripheral raises a Precise Data Bus Fault exception.",
    "explanation": "Peripheral buses are disabled upon reset to conserve power; accessing them unclocked generates a bus error.",
    "topic": "Peripheral Clocking"
  },
  {
    "id": "s5-tf-5",
    "num": 5,
    "question": "In the TM4C123 GPIODIR register, setting a bit to 0 configures the corresponding pin as an output.",
    "correctAnswer": false,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "GPIODIR Direction Bits",
    "quote": "In GPIODIR: 0 = Input, 1 = Output.",
    "explanation": "0 designates Input (high impedance); 1 designates Output (push-pull or open drain).",
    "topic": "GPIO Registers"
  },
  {
    "id": "s5-tf-6",
    "num": 6,
    "question": "The GPIODEN register must be set to 1 for any pin used for digital input or output functions.",
    "correctAnswer": true,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "GPIODEN Function",
    "quote": "GPIODEN enables the digital I/O buffers for the designated pin.",
    "explanation": "If GPIODEN is 0, the digital buffers remain disabled (used when pins are dedicated to analog ADC inputs).",
    "topic": "GPIO Registers"
  },
  {
    "id": "s5-tf-7",
    "num": 7,
    "question": "Bit-banding allows modifying a single bit in peripheral registers atomically without requiring a read-modify-write sequence.",
    "correctAnswer": true,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "Bit-Banding Mechanism",
    "quote": "A 32-bit write to a bit-band alias address performs an atomic single-cycle bit modification in hardware.",
    "explanation": "The hardware memory controller handles the bit read, update, and write in one atomic bus cycle.",
    "topic": "Bit-Banding"
  },
  {
    "id": "s5-tf-8",
    "num": 8,
    "question": "Cortex-A processors are optimized for low-cost, ultra-low-power discrete microcontroller applications.",
    "correctAnswer": false,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "Cortex Comparison",
    "quote": "Cortex-A is for application processing (smartphones); Cortex-M is for low-power microcontrollers.",
    "explanation": "Cortex-M is the profile designed for cost-sensitive, low-power microcontrollers.",
    "topic": "Cortex Profiles"
  },
  {
    "id": "s5-tf-9",
    "num": 9,
    "question": "In TM4C123, GPIODATA masking uses address bus bits [9:2] to prevent bus contention and allow atomic bitmask writes.",
    "correctAnswer": true,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "GPIODATA Address Masking",
    "quote": "Bits [9:2] of the access address serve as a bitmask for the GPIODATA register write operations.",
    "explanation": "This hardware masking prevents software read-modify-write races on multi-pin ports.",
    "topic": "Data Register Masking"
  },
  {
    "id": "s5-tf-10",
    "num": 10,
    "question": "The NVIC (Nested Vectored Interrupt Controller) is an external discrete chip connected to the Cortex-M processor over an SPI bus.",
    "correctAnswer": false,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "NVIC Architecture",
    "quote": "The NVIC is tightly integrated directly inside the ARM Cortex-M processor core for low-latency interrupt nesting.",
    "explanation": "The NVIC is built into the Cortex-M core itself, providing sub-12 cycle interrupt latency.",
    "topic": "NVIC Architecture"
  }
];

export const SHEET_5_ESSAY: EssayQuestion[] = [
  {
    "id": "s5-essay-1",
    "num": 1,
    "question": "Contrast the three ARM Cortex processor profiles: Cortex-A, Cortex-R, and Cortex-M. Provide the primary optimization and one typical application for each.",
    "maxPoints": 5,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "modelAnswer": "1. ARM Cortex-A (Application Profile):\n- Optimization: High computational throughput, advanced pipelining, multi-core symmetrical multiprocessing (SMP), and full Memory Management Units (MMU) for virtual memory.\n- Target Applications: Smartphones, tablets, enterprise servers, and single-board computers (e.g. Raspberry Pi running Linux, Android).\n\n2. ARM Cortex-R (Real-Time Profile):\n- Optimization: High performance paired with deterministic execution timing, low interrupt latency, tightly coupled memory (TCM), and hardware fault-tolerant lockstep operation.\n- Target Applications: Automotive powertrain/braking systems, medical life-support instrumentation, and hard disk/modem controllers.\n\n3. ARM Cortex-M (Microcontroller Profile):\n- Optimization: Deterministic interrupt handling (integrated NVIC), small silicon area, ultra-low standby power, and single-cycle register I/O without MMU overhead.\n- Target Applications: Internet of Things (IoT) sensor nodes, smart home appliances, industrial motor control, and automotive body electronics (e.g. TM4C123, STM32).",
    "keyPoints": [
      "Cortex-A: High performance, MMU, rich OS (Linux/Android)",
      "Cortex-R: Deterministic real-time, low latency, safety-critical",
      "Cortex-M: Low cost/power, integrated NVIC, microcontrollers"
    ],
    "rubric": [
      {
        "criteria": "Explains Cortex-A optimization and application",
        "points": 1.75
      },
      {
        "criteria": "Explains Cortex-R optimization and application",
        "points": 1.75
      },
      {
        "criteria": "Explains Cortex-M optimization and application",
        "points": 1.5
      }
    ],
    "topic": "Cortex Profiles"
  },
  {
    "id": "s5-essay-2",
    "num": 2,
    "question": "Write a complete C code initialization sequence for Texas Instruments TM4C123GH6PM to configure Port F Pins 1, 2, and 3 (RGB LEDs) as digital outputs. Include clock gating and stabilization delay.",
    "maxPoints": 5,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "modelAnswer": "```c\n// TM4C123 Port F Initialization for On-Board RGB LEDs (PF1=Red, PF2=Blue, PF3=Green)\n#define SYSCTL_RCGCGPIO_R  (*((volatile unsigned long *)0x400FE608))\n#define GPIO_PORTF_DIR_R   (*((volatile unsigned long *)0x40025400))\n#define GPIO_PORTF_DEN_R   (*((volatile unsigned long *)0x4002551C))\n#define GPIO_PORTF_AFSEL_R (*((volatile unsigned long *)0x40025420))\n#define GPIO_PORTF_AMSEL_R (*((volatile unsigned long *)0x40025528))\n#define GPIO_PORTF_PCTL_R  (*((volatile unsigned long *)0x4002552C))\n\nvoid PortF_Init(void) {\n    volatile unsigned long delay;\n    \n    // 1. Enable Run-Mode Clock for Port F (Bit 5 = 0x20)\n    SYSCTL_RCGCGPIO_R |= 0x20;\n    \n    // 2. Allow clock stabilization delay (at least 3-5 clock cycles)\n    delay = SYSCTL_RCGCGPIO_R;\n    \n    // 3. Disable analog mode on PF1-PF3\n    GPIO_PORTF_AMSEL_R &= ~0x0E;\n    \n    // 4. Configure PF1-PF3 for regular GPIO (clear alternate function)\n    GPIO_PORTF_PCTL_R &= ~0x0000FFF0;\n    GPIO_PORTF_AFSEL_R &= ~0x0E;\n    \n    // 5. Set direction: PF1, PF2, PF3 as outputs (1), others unchanged\n    GPIO_PORTF_DIR_R |= 0x0E;   // Bits 1, 2, 3 = 1\n    \n    // 6. Enable digital functionality on PF1, PF2, PF3\n    GPIO_PORTF_DEN_R |= 0x0E;\n}\n```",
    "keyPoints": [
      "Enable clock in RCGCGPIO (Bit 5 for Port F)",
      "Add mandatory clock stabilization delay",
      "Disable analog mode in AMSEL",
      "Clear alternate function select in AFSEL and PCTL",
      "Set direction in GPIODIR to 0x0E (outputs)",
      "Enable digital pins in GPIODEN to 0x0E"
    ],
    "rubric": [
      {
        "criteria": "Enables clock and adds stabilization delay",
        "points": 1.5
      },
      {
        "criteria": "Configures direction register (GPIODIR)",
        "points": 1.5
      },
      {
        "criteria": "Enables digital functionality (GPIODEN) and clears analog/alternate functions",
        "points": 2
      }
    ],
    "topic": "GPIO Initialization Routine"
  },
  {
    "id": "s5-essay-3",
    "num": 3,
    "question": "Explain the concept and formula of ARM Bit-Banding. Calculate the alias address for bit 3 of a peripheral register located at base address 0x40025400.",
    "maxPoints": 5,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "modelAnswer": "Concept of Bit-Banding:\nBit-banding maps each individual bit in a 1 MB SRAM or Peripheral bit-band memory region to a unique 32-bit word in a 32 MB 'alias' memory region. Writing a 1 or 0 to this 32-bit alias word atomically updates the targeted single bit in the hardware register, eliminating software read-modify-write sequences and preventing race conditions during interrupt preemption.\n\nBit-Band Formula:\n`Alias_Address = Alias_Base + (Byte_Offset * 32) + (Bit_Number * 4)`\n\nFor Peripheral Space:\n- Peripheral Bit-Band Base: `0x40000000`\n- Peripheral Alias Base: `0x42000000`\n\nGiven Register Address = `0x40025400`, Bit = 3:\n1. Byte_Offset = `0x40025400 - 0x40000000 = 0x00025400`\n2. Byte_Offset * 32 = `0x25400 * 0x20 = 0x4A8000`\n3. Bit_Number * 4 = `3 * 4 = 12 = 0x0C`\n4. Alias_Address = `0x42000000 + 0x4A8000 + 0x0C = 0x424A800C`.\n\nWriting 1 to address `0x424A800C` atomically sets bit 3 of `0x40025400`.",
    "keyPoints": [
      "Definition of bit-banding as 32-bit word alias to single bit",
      "Formula: Alias = Alias_Base + (Byte_Offset * 32) + (Bit_Number * 4)",
      "Peripheral Alias Base = 0x42000000",
      "Correct numerical calculation yielding 0x424A800C"
    ],
    "rubric": [
      {
        "criteria": "Explains concept of bit-banding & atomic benefit",
        "points": 2
      },
      {
        "criteria": "States general calculation formula",
        "points": 1.5
      },
      {
        "criteria": "Correct step-by-step math producing 0x424A800C",
        "points": 1.5
      }
    ],
    "topic": "Bit-Banding Mathematics"
  },
  {
    "id": "s5-essay-4",
    "num": 4,
    "question": "What is the function of the GPIOLOCK and GPIOCR registers in TM4C123, and why are pins PD7 and PF0 specifically locked upon power-up?",
    "maxPoints": 5,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "modelAnswer": "Function of GPIOLOCK and GPIOCR:\nIn the TM4C123GH6PM, the GPIO Commit Register (`GPIOCR`) controls write access to critical pin configuration registers (such as `GPIOAFSEL`, `GPIOPUR`, `GPIOPDR`, and `GPIODEN`). To prevent accidental software corruption of sensitive pins, `GPIOCR` is write-protected by the `GPIOLOCK` register.\n\nTo unlock a locked pin:\n1. Software must write the magic unlock key `0x4C4F434B` to `GPIO_PORTx_LOCK_R`.\n2. Software then sets the corresponding bit in `GPIO_PORTx_CR_R` to 1, committing subsequent writes.\n\nWhy PD7 and PF0 are Locked by Default:\n- `PD7` is defaulted to the Non-Maskable Interrupt (`NMI`) input.\n- `PF0` on Port F is also multiplexed with the `NMI` input function.\nBecause accidentally reconfiguring an NMI line as a standard GPIO could prevent the microcontroller from servicing critical hardware fault conditions or freeze the debugger, Texas Instruments intentionally locks PD7 and PF0 upon hardware reset.",
    "keyPoints": [
      "GPIOLOCK write-protects GPIOCR",
      "Magic unlock key 0x4C4F434B",
      "GPIOCR commits changes to critical registers",
      "PD7 and PF0 default to NMI (Non-Maskable Interrupt)",
      "Protection prevents disabling critical hardware fault detection"
    ],
    "rubric": [
      {
        "criteria": "Explains role of GPIOLOCK and magic key",
        "points": 1.5
      },
      {
        "criteria": "Explains role of GPIOCR in committing configuration",
        "points": 1.5
      },
      {
        "criteria": "Explains why PD7 and PF0 are locked (NMI protection)",
        "points": 2
      }
    ],
    "topic": "Pin Locking & NMI Protection"
  },
  {
    "id": "s5-essay-5",
    "num": 5,
    "question": "Explain how GPIO data register address masking operates in TM4C123GH6PM to allow atomic bit updates.",
    "maxPoints": 5,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "modelAnswer": "Address Masking Mechanism:\nIn the TM4C123GH6PM, the GPIO Data Register (`GPIODATA`) uses a unique hardware address masking scheme. The register occupies an entire address block of 256 words (`0x000` to `0x3FC`). Bits [9:2] of the address bus serve as an 8-bit mask that determines which of the 8 port pins are affected by a read or write operation.\n\nOperational Rules:\n1. Address bit [2] controls access to Pin 0, bit [3] controls Pin 1, ..., bit [9] controls Pin 7.\n2. When writing to an address, only the pins corresponding to '1' bits in address lines [9:2] are updated; pins corresponding to '0' bits retain their previous state completely undisturbed.\n\nExample:\nTo write only to Pin 1 and Pin 2 of Port F:\n- Mask = Bits 1 and 2 = `(1<<1) | (1<<2) = 0x06`.\n- Address offset = Mask shifted left by 2 bits = `0x06 << 2 = 0x18`.\n- Access Address = Base (`0x40025000`) + Offset (`0x18`) = `0x40025018`.\nWriting to `*((volatile unsigned long *)0x40025018)` modifies only PF1 and PF2 in a single atomic instruction without needing a software read-modify-write sequence.",
    "keyPoints": [
      "GPIODATA occupies 256-word address block",
      "Address bus bits [9:2] act as write/read bitmask",
      "Only masked pins are modified; unmasked pins untouched",
      "Enables atomic pin updates without software read-modify-write"
    ],
    "rubric": [
      {
        "criteria": "Explains address bits [9:2] bitmask principle",
        "points": 2
      },
      {
        "criteria": "Explains atomic update without read-modify-write",
        "points": 1.5
      },
      {
        "criteria": "Provides concrete address calculation example",
        "points": 1.5
      }
    ],
    "topic": "GPIODATA Address Masking"
  }
];

export const COMPREHENSIVE_EXAM_METADATA: ExamMetadata = {
  "id": "comprehensive",
  "courseCode": "CCS4207",
  "courseTitle": "Embedded Systems Programming",
  "institution": "College of Computing & Information Technology \u2014 AASTMT",
  "examTitle": "All Section Sheets Comprehensive Mock Examination",
  "sourceDoc": "Section Sheets 1\u20135 (Dr. Ehab Elsehely)",
  "lectures": [
    "Week 01 - Lecture 1: Introduction to Embedded Systems",
    "Week 02 - Lecture 2: Purposes & Characteristics of Embedded Systems",
    "Week 03 - Lecture 3: Processors, DSPs & Architecture Trade-offs",
    "Week 04 - Lecture 4: Digital Circuit Design & Optimization",
    "Week 06 - Lecture 5: ARM Architecture & TM4C123 Programming"
  ],
  "totalTF": 50,
  "totalMCQ": 50,
  "totalEssay": 25,
  "totalPoints": 225,
  "timeLimitMinutes": 90
};

export const ALL_MCQ_QUESTIONS: MCQQuestion[] = [
  {
    "id": "s1-mcq-1",
    "num": 1,
    "question": "An embedded system is defined as:",
    "options": [
      {
        "key": "A",
        "text": "A general-purpose computer for multiple tasks"
      },
      {
        "key": "B",
        "text": "An electronic/electro-mechanical system designed to perform a specific function using both hardware and firmware (software)"
      },
      {
        "key": "C",
        "text": "Only a microcontroller without software"
      },
      {
        "key": "D",
        "text": "Only an application program running on a PC"
      }
    ],
    "correctOption": "B",
    "correctText": "An electronic/electro-mechanical system designed to perform a specific function using both hardware and firmware (software)",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Definition of Embedded Systems",
    "quote": "An embedded system is an electronic/electro-mechanical system designed to perform a specific function and is a combination of both hardware and firmware.",
    "explanation": "Embedded systems are purpose-built for dedicated real-time functions, closely integrating dedicated hardware with application firmware.",
    "topic": "System Definition"
  },
  {
    "id": "s1-mcq-2",
    "num": 2,
    "question": "Firmware in an embedded system is typically stored in:",
    "options": [
      {
        "key": "A",
        "text": "Hard disk only"
      },
      {
        "key": "B",
        "text": "RAM only"
      },
      {
        "key": "C",
        "text": "ROM or Flash memory"
      },
      {
        "key": "D",
        "text": "CD/DVD only"
      }
    ],
    "correctOption": "C",
    "correctText": "ROM or Flash memory",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Firmware & Memory Hierarchy",
    "quote": "The program instructions written for embedded systems are referred to as firmware. It is stored in Read-Only Memory (ROM) or Flash memory.",
    "explanation": "Firmware must be non-volatile so the device boots instantly without external secondary media.",
    "topic": "Memory & Firmware"
  },
  {
    "id": "s1-mcq-3",
    "num": 3,
    "question": "Which of the following is a primary characteristic of embedded systems?",
    "options": [
      {
        "key": "A",
        "text": "High user awareness of the computer inside"
      },
      {
        "key": "B",
        "text": "Designed for specific tasks, often with real-time constraints"
      },
      {
        "key": "C",
        "text": "Must support unlimited arbitrary user applications"
      },
      {
        "key": "D",
        "text": "Operates only with heavy desktop operating systems"
      }
    ],
    "correctOption": "B",
    "correctText": "Designed for specific tasks, often with real-time constraints",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Characteristics",
    "quote": "Embedded systems are designed for specific tasks, often with real-time constraints and stringent power limits.",
    "explanation": "Unlike PCs, embedded devices are engineered for singular or limited functions under strict timing bounds.",
    "topic": "Characteristics"
  },
  {
    "id": "s1-mcq-4",
    "num": 4,
    "question": "The first recognized modern embedded system is commonly considered to be:",
    "options": [
      {
        "key": "A",
        "text": "ENIAC"
      },
      {
        "key": "B",
        "text": "Apollo Guidance Computer (AGC)"
      },
      {
        "key": "C",
        "text": "Intel 4004"
      },
      {
        "key": "D",
        "text": "IBM PC 5150"
      }
    ],
    "correctOption": "B",
    "correctText": "Apollo Guidance Computer (AGC)",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "History of Embedded Computing",
    "quote": "The Apollo Guidance Computer (AGC) built in the 1960s by MIT is widely recognized as the first modern embedded computer.",
    "explanation": "The AGC used integrated circuits, magnetic core memory, and a real-time executive for lunar navigation.",
    "topic": "History"
  },
  {
    "id": "s1-mcq-5",
    "num": 5,
    "question": "The astronaut user interface of the AGC (Apollo Guidance Computer) is known as:",
    "options": [
      {
        "key": "A",
        "text": "GUI"
      },
      {
        "key": "B",
        "text": "DSKY (display/keyboard)"
      },
      {
        "key": "C",
        "text": "BIOS"
      },
      {
        "key": "D",
        "text": "UART"
      }
    ],
    "correctOption": "B",
    "correctText": "DSKY (display/keyboard)",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Apollo AGC Interface",
    "quote": "The DSKY (Display and Keyboard) allowed astronauts to communicate with the AGC using two-digit Verb and Noun codes.",
    "explanation": "DSKY enabled manual query and command execution via verb-noun codes on numerical displays.",
    "topic": "AGC Architecture"
  },
  {
    "id": "s1-mcq-6",
    "num": 6,
    "question": "A microcontroller usually includes:",
    "options": [
      {
        "key": "A",
        "text": "No memory"
      },
      {
        "key": "B",
        "text": "I/O devices, timers, and on-board memory (RAM/ROM)"
      },
      {
        "key": "C",
        "text": "Only a GPU"
      },
      {
        "key": "D",
        "text": "Only external wireless antennas"
      }
    ],
    "correctOption": "B",
    "correctText": "I/O devices, timers, and on-board memory (RAM/ROM)",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Microcontroller Definition",
    "quote": "A microcontroller contains CPU, memory (RAM/ROM), timers, and I/O ports integrated on a single silicon die.",
    "explanation": "This self-contained nature makes MCUs cost-effective and compact for embedded devices.",
    "topic": "MCU Architecture"
  },
  {
    "id": "s1-mcq-7",
    "num": 7,
    "question": "DSP stands for:",
    "options": [
      {
        "key": "A",
        "text": "Digital Signal Processor"
      },
      {
        "key": "B",
        "text": "Dynamic System Program"
      },
      {
        "key": "C",
        "text": "Data Secure Processor"
      },
      {
        "key": "D",
        "text": "Direct System Protocol"
      }
    ],
    "correctOption": "A",
    "correctText": "Digital Signal Processor",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Processor Classes",
    "quote": "DSP: Digital Signal Processor \u2014 optimized for mathematical processing of continuous digital signals.",
    "explanation": "DSPs feature dedicated hardware for rapid multiply-accumulate (MAC) operations in audio, video, and RF filtering.",
    "topic": "DSPs"
  },
  {
    "id": "s1-mcq-8",
    "num": 8,
    "question": "Typical embedded word sizes span:",
    "options": [
      {
        "key": "A",
        "text": "5-bit only"
      },
      {
        "key": "B",
        "text": "8-bit, 16-bit, and 32-bit"
      },
      {
        "key": "C",
        "text": "64-bit only"
      },
      {
        "key": "D",
        "text": "128-bit only"
      }
    ],
    "correctOption": "B",
    "correctText": "8-bit, 16-bit, and 32-bit",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Embedded Architecture",
    "quote": "Embedded processors span 8-bit, 16-bit, and 32-bit architectures.",
    "explanation": "From simple 8-bit MCUs (e.g. ATmega328P) to 32-bit ARM Cortex-M processors, embedded systems match word size to cost and throughput.",
    "topic": "MCU Architecture"
  },
  {
    "id": "s1-mcq-9",
    "num": 9,
    "question": "In an Anti-lock Braking System (ABS), the hydraulic pump is used to:",
    "options": [
      {
        "key": "A",
        "text": "Increase wheel skidding"
      },
      {
        "key": "B",
        "text": "Pump brakes to reduce skidding and maintain traction"
      },
      {
        "key": "C",
        "text": "Disable wheel sensors permanently"
      },
      {
        "key": "D",
        "text": "Turn off vehicle electrical power"
      }
    ],
    "correctOption": "B",
    "correctText": "Pump brakes to reduce skidding and maintain traction",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Automotive Systems (ABS)",
    "quote": "The ABS pump pulses brake fluid pressure rapidly to prevent wheel lockup and preserve steering control.",
    "explanation": "Pulsing the hydraulic line pressure prevents tyre lockup during hard emergency braking.",
    "topic": "Automotive Systems"
  },
  {
    "id": "s1-mcq-10",
    "num": 10,
    "question": "Which application domain encompasses satellites, network routers, cell phones, and optical switches?",
    "options": [
      {
        "key": "A",
        "text": "Medical"
      },
      {
        "key": "B",
        "text": "Communications"
      },
      {
        "key": "C",
        "text": "Home entertainment"
      },
      {
        "key": "D",
        "text": "Office automation"
      }
    ],
    "correctOption": "B",
    "correctText": "Communications",
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Application Domains",
    "quote": "Communication systems: Satellites, mobile phones, routers, switches, and transmission hubs.",
    "explanation": "Telecommunication infrastructure relies heavily on specialized real-time embedded systems.",
    "topic": "Application Domains"
  },
  {
    "id": "s2-mcq-1",
    "num": 1,
    "question": "Which of the following is NOT listed as a primary purpose of an embedded system?",
    "options": [
      {
        "key": "A",
        "text": "Data Collection, Storage & Representation"
      },
      {
        "key": "B",
        "text": "General-purpose desktop personal computing"
      },
      {
        "key": "C",
        "text": "Monitoring & Control"
      },
      {
        "key": "D",
        "text": "Application Specific User Interface"
      }
    ],
    "correctOption": "B",
    "correctText": "General-purpose desktop personal computing",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Purposes of Embedded Systems",
    "quote": "The six purposes are: Data collection/storage/representation, Data communication, Data (signal) processing, Monitoring, Control, and Application-specific UI.",
    "explanation": "General-purpose desktop computing is the domain of PCs, not purpose-built embedded systems.",
    "topic": "Embedded Purposes"
  },
  {
    "id": "s2-mcq-2",
    "num": 2,
    "question": "An Electrocardiogram (ECG) machine that monitors patient heartbeat without administering treatment is primarily classified under which purpose?",
    "options": [
      {
        "key": "A",
        "text": "Control only"
      },
      {
        "key": "B",
        "text": "Monitoring"
      },
      {
        "key": "C",
        "text": "General computing"
      },
      {
        "key": "D",
        "text": "Secondary storage"
      }
    ],
    "correctOption": "B",
    "correctText": "Monitoring",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Monitoring Purpose",
    "quote": "Monitoring embedded systems track physical state variables without imposing feedback control to change the system.",
    "explanation": "Monitoring systems observe and display or record parameters without driving closed-loop actuators.",
    "topic": "Embedded Purposes"
  },
  {
    "id": "s2-mcq-3",
    "num": 3,
    "question": "How are microcontrollers best described in relation to microprocessors?",
    "options": [
      {
        "key": "A",
        "text": "An obsolete precursor to microprocessors"
      },
      {
        "key": "B",
        "text": "A subset that contains no internal arithmetic units"
      },
      {
        "key": "C",
        "text": "A superset incorporating CPU, RAM, ROM, and I/O on a single chip"
      },
      {
        "key": "D",
        "text": "Identical in pinout and packaging"
      }
    ],
    "correctOption": "C",
    "correctText": "A superset incorporating CPU, RAM, ROM, and I/O on a single chip",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "MCU vs Microprocessor",
    "quote": "A microcontroller is a superset of a microprocessor, containing the CPU along with RAM, ROM, and peripheral hardware.",
    "explanation": "MCUs envelop the CPU core and integrate memory and peripherals on one chip.",
    "topic": "MCU vs MPU"
  },
  {
    "id": "s2-mcq-4",
    "num": 4,
    "question": "Which of the following components is NOT typically integrated on-chip in a microcontroller?",
    "options": [
      {
        "key": "A",
        "text": "Static RAM (SRAM)"
      },
      {
        "key": "B",
        "text": "Timers / Counters"
      },
      {
        "key": "C",
        "text": "Analog-to-Digital Converter (ADC)"
      },
      {
        "key": "D",
        "text": "High-capacity rotating magnetic hard drive"
      }
    ],
    "correctOption": "D",
    "correctText": "High-capacity rotating magnetic hard drive",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "MCU Components",
    "quote": "Microcontrollers contain on-chip RAM, Flash, timers, ADC, and I/O ports; they do not integrate mechanical hard drives.",
    "explanation": "Microcontrollers use solid-state Flash and SRAM, never mechanical spinning disks.",
    "topic": "MCU Architecture"
  },
  {
    "id": "s2-mcq-5",
    "num": 5,
    "question": "What is the primary consequence of missing a deadline in a Hard Real-Time system?",
    "options": [
      {
        "key": "A",
        "text": "Slight degradation in video playback quality"
      },
      {
        "key": "B",
        "text": "Catastrophic failure of the entire system"
      },
      {
        "key": "C",
        "text": "Automatic restart with zero side effects"
      },
      {
        "key": "D",
        "text": "Temporary reduction in network bandwidth"
      }
    ],
    "correctOption": "B",
    "correctText": "Catastrophic failure of the entire system",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Hard vs Soft Real-Time",
    "quote": "In a hard real-time system, missing a deadline constitutes total system failure, potentially causing catastrophe.",
    "explanation": "Hard real-time systems (e.g. airbag deployment, flight avionics) equate missing a deadline with fatal failure.",
    "topic": "Real-Time Systems"
  },
  {
    "id": "s2-mcq-6",
    "num": 6,
    "question": "Which of the following is an example of a Hard Real-Time system?",
    "options": [
      {
        "key": "A",
        "text": "Automated teller machine (ATM)"
      },
      {
        "key": "B",
        "text": "Antilock Braking System (ABS) and Airbag Controller"
      },
      {
        "key": "C",
        "text": "MP3 music player"
      },
      {
        "key": "D",
        "text": "Digital wrist watch"
      }
    ],
    "correctOption": "B",
    "correctText": "Antilock Braking System (ABS) and Airbag Controller",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Hard Real-Time Applications",
    "quote": "ABS and Airbag controllers must respond within microseconds to prevent injury or collision; they are hard real-time.",
    "explanation": "Airbag triggers and vehicle braking require deterministic hard deadlines where delays are intolerable.",
    "topic": "Real-Time Systems"
  },
  {
    "id": "s2-mcq-7",
    "num": 7,
    "question": "Why are languages like C++ and Java used less frequently in resource-constrained embedded systems compared to C?",
    "options": [
      {
        "key": "A",
        "text": "They cannot perform mathematical additions"
      },
      {
        "key": "B",
        "text": "They incur significant run-time overhead and memory footprint"
      },
      {
        "key": "C",
        "text": "They have no available compilers for any processor"
      },
      {
        "key": "D",
        "text": "They do not support functions or loops"
      }
    ],
    "correctOption": "B",
    "correctText": "They incur significant run-time overhead and memory footprint",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Programming Languages Overhead",
    "quote": "C++ and Java introduce substantial run-time overhead, virtual table pointers, and garbage collection pauses.",
    "explanation": "C offers direct register memory mapping, zero hidden runtime overhead, and compact machine code.",
    "topic": "Embedded Programming"
  },
  {
    "id": "s2-mcq-8",
    "num": 8,
    "question": "What does ASIP stand for in the context of embedded processor architectures?",
    "options": [
      {
        "key": "A",
        "text": "Advanced Serial Interface Protocol"
      },
      {
        "key": "B",
        "text": "Asynchronous Signal Integration Port"
      },
      {
        "key": "C",
        "text": "Application Specific Instruction Set Processor"
      },
      {
        "key": "D",
        "text": "Automated Signal Processing Interface"
      }
    ],
    "correctOption": "C",
    "correctText": "Application Specific Instruction Set Processor",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "ASIP Architecture",
    "quote": "ASIP: Application Specific Instruction Set Processor \u2014 tailored instruction set for a specific application domain.",
    "explanation": "ASIPs customize instruction sets to accelerate specific domain workloads like audio codecs or automotive control.",
    "topic": "Processor Architecture"
  },
  {
    "id": "s2-mcq-9",
    "num": 9,
    "question": "How does a single-core processor achieve the appearance of concurrent execution in multithreading?",
    "options": [
      {
        "key": "A",
        "text": "By executing instructions at the exact same physical instant on separate hardware ALUs"
      },
      {
        "key": "B",
        "text": "By rapidly context-switching between active threads"
      },
      {
        "key": "C",
        "text": "By pausing all tasks until the system is restarted"
      },
      {
        "key": "D",
        "text": "By running solely on external analog circuits"
      }
    ],
    "correctOption": "B",
    "correctText": "By rapidly context-switching between active threads",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Multithreading & Concurrency",
    "quote": "A single core processor rapidly switches between threads (interleaving execution) to provide the illusion of parallelism.",
    "explanation": "Time-slicing and context switching create pseudo-concurrency on single-core processors.",
    "topic": "Concurrency & RTOS"
  },
  {
    "id": "s2-mcq-10",
    "num": 10,
    "question": "Which of the following is a key consumer product constraint in embedded system engineering?",
    "options": [
      {
        "key": "A",
        "text": "Maximal production cost to convey luxury status"
      },
      {
        "key": "B",
        "text": "Slow development cycle to allow endless redesigns"
      },
      {
        "key": "C",
        "text": "Minimal unit production cost and rapid time-to-market"
      },
      {
        "key": "D",
        "text": "Mandatory reliance on manual reboots for error clearance"
      }
    ],
    "correctOption": "C",
    "correctText": "Minimal unit production cost and rapid time-to-market",
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Design Metrics",
    "quote": "Key non-operational attributes: Minimal production cost, fast time-to-market, testability, and field reliability.",
    "explanation": "High-volume consumer products demand low BOM costs and swift release to avoid market obsolescence.",
    "topic": "Design Constraints"
  },
  {
    "id": "s3-mcq-1",
    "num": 1,
    "question": "How much faster are Digital Signal Processors (DSPs) compared to general-purpose microprocessors in signal processing applications?",
    "options": [
      {
        "key": "A",
        "text": "1 to 2 times faster"
      },
      {
        "key": "B",
        "text": "2 to 3 times faster"
      },
      {
        "key": "C",
        "text": "4 to 5 times faster"
      },
      {
        "key": "D",
        "text": "10 times faster"
      }
    ],
    "correctOption": "B",
    "correctText": "2 to 3 times faster",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "DSP Performance Advantage",
    "quote": "DSPs are roughly 2 to 3 times faster than general-purpose microprocessors in signal processing applications.",
    "explanation": "Specialized DSP hardware units (MAC, circular buffers) provide a 2x-3x speedup over standard CPUs for filtering algorithms.",
    "topic": "DSP Performance"
  },
  {
    "id": "s3-mcq-2",
    "num": 2,
    "question": "In a Little-Endian processor, how is multi-byte data arranged in memory?",
    "options": [
      {
        "key": "A",
        "text": "Higher-order byte at the lowest address"
      },
      {
        "key": "B",
        "text": "Lower-order (least significant) byte at the lowest address"
      },
      {
        "key": "C",
        "text": "Bytes are stored in random order"
      },
      {
        "key": "D",
        "text": "Bits are inverted in alternate byte positions"
      }
    ],
    "correctOption": "B",
    "correctText": "Lower-order (least significant) byte at the lowest address",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Endianness",
    "quote": "Little-Endian: The least significant byte (LSB) is stored at the lowest memory address.",
    "explanation": "In Little-Endian systems (like ARM Cortex-M default or x86), the LSB occupies address N, and MSB occupies address N+k.",
    "topic": "Endianness"
  },
  {
    "id": "s3-mcq-3",
    "num": 3,
    "question": "Which of the following is a volatile memory that loses its contents when power is removed?",
    "options": [
      {
        "key": "A",
        "text": "Mask ROM"
      },
      {
        "key": "B",
        "text": "NOR Flash Memory"
      },
      {
        "key": "C",
        "text": "Random Access Memory (RAM - SRAM/DRAM)"
      },
      {
        "key": "D",
        "text": "Electrically Erasable PROM (EEPROM)"
      }
    ],
    "correctOption": "C",
    "correctText": "Random Access Memory (RAM - SRAM/DRAM)",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Memory Technologies",
    "quote": "RAM (SRAM and DRAM) is volatile read-write memory that loses its stored contents when power is turned off.",
    "explanation": "SRAM and DRAM require continuous electrical power to maintain bit state.",
    "topic": "Memory Types"
  },
  {
    "id": "s3-mcq-4",
    "num": 4,
    "question": "What is the primary advantage of utilizing Commercial Off-The-Shelf (COTS) components in an embedded product?",
    "options": [
      {
        "key": "A",
        "text": "They are custom-fabricated for a single customer"
      },
      {
        "key": "B",
        "text": "They are readily available, cost-effective, and dramatically reduce development time"
      },
      {
        "key": "C",
        "text": "They can never be altered or updated"
      },
      {
        "key": "D",
        "text": "They require zero electrical power"
      }
    ],
    "correctOption": "B",
    "correctText": "They are readily available, cost-effective, and dramatically reduce development time",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "COTS Components",
    "quote": "COTS components reduce development risk, lower initial engineering costs, and drastically accelerate time-to-market.",
    "explanation": "Standardized components eliminate the multi-million dollar overhead of custom ASIC tape-outs.",
    "topic": "Hardware Design"
  },
  {
    "id": "s3-mcq-5",
    "num": 5,
    "question": "Which tool in the embedded software toolchain performs address fix-ups to bind code to physical target memory addresses before burning to ROM?",
    "options": [
      {
        "key": "A",
        "text": "Compiler"
      },
      {
        "key": "B",
        "text": "Linker"
      },
      {
        "key": "C",
        "text": "Locator"
      },
      {
        "key": "D",
        "text": "Assembler"
      }
    ],
    "correctOption": "C",
    "correctText": "Locator",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Embedded Build Process",
    "quote": "The Locator assigns physical memory addresses to the relocatable code and data sections produced by the linker.",
    "explanation": "The locator maps code blocks to absolute addresses matching the target's physical ROM/Flash memory layout.",
    "topic": "Build Toolchain"
  },
  {
    "id": "s3-mcq-6",
    "num": 6,
    "question": "Which solid-state component isolates two circuits electrically by combining an infrared LED and a phototransistor in a single package?",
    "options": [
      {
        "key": "A",
        "text": "Relay"
      },
      {
        "key": "B",
        "text": "Optocoupler (Opto-isolator)"
      },
      {
        "key": "C",
        "text": "Piezo Buzzer"
      },
      {
        "key": "D",
        "text": "Darlington Pair"
      }
    ],
    "correctOption": "B",
    "correctText": "Optocoupler (Opto-isolator)",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Optocoupler Isolation",
    "quote": "An optocoupler combines an LED and phototransistor to transmit signals optically while maintaining galvanic isolation.",
    "explanation": "Optocouplers protect sensitive low-voltage MCU pins from high-voltage transients on industrial or power lines.",
    "topic": "Interfacing & Isolation"
  },
  {
    "id": "s3-mcq-7",
    "num": 7,
    "question": "What type of rotational motion does a stepper motor generate in response to digital electrical pulses?",
    "options": [
      {
        "key": "A",
        "text": "Continuous smooth free-wheeling rotation"
      },
      {
        "key": "B",
        "text": "Discrete angular displacements (fixed steps)"
      },
      {
        "key": "C",
        "text": "Random non-repeatable oscillations"
      },
      {
        "key": "D",
        "text": "Linear lateral sliding only"
      }
    ],
    "correctOption": "B",
    "correctText": "Discrete angular displacements (fixed steps)",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Actuators: Stepper Motors",
    "quote": "A stepper motor converts digital pulses into precise discrete mechanical angular steps.",
    "explanation": "Stepper motors move in calibrated angular increments (e.g. 1.8 degrees per step) ideal for 3D printers and CNCs.",
    "topic": "Actuators"
  },
  {
    "id": "s3-mcq-8",
    "num": 8,
    "question": "In a 7-Segment display with Common Anode configuration:",
    "options": [
      {
        "key": "A",
        "text": "All segment cathodes are tied to Ground"
      },
      {
        "key": "B",
        "text": "All segment anodes are tied together to VCC (+5V)"
      },
      {
        "key": "C",
        "text": "Each segment operates with high-frequency AC only"
      },
      {
        "key": "D",
        "text": "Segments cannot be individually turned on or off"
      }
    ],
    "correctOption": "B",
    "correctText": "All segment anodes are tied together to VCC (+5V)",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "7-Segment Displays",
    "quote": "In Common Anode displays, the anodes of all LED segments are connected to common positive supply; pulling a cathode LOW lights it.",
    "explanation": "In Common Anode, applying Logic 0 (Low) to an individual cathode pin completes the circuit and lights the segment.",
    "topic": "Displays"
  },
  {
    "id": "s3-mcq-9",
    "num": 9,
    "question": "Why is a push-to-make (normally open) switch commonly paired with a pull-up resistor when connected to an active-low MCU pin?",
    "options": [
      {
        "key": "A",
        "text": "To increase power consumption when the switch is open"
      },
      {
        "key": "B",
        "text": "To hold the pin at a stable HIGH (VCC) voltage when unpressed, preventing floating inputs"
      },
      {
        "key": "C",
        "text": "To invert the DC voltage polarity"
      },
      {
        "key": "D",
        "text": "To convert analog signals into sound waves"
      }
    ],
    "correctOption": "B",
    "correctText": "To hold the pin at a stable HIGH (VCC) voltage when unpressed, preventing floating inputs",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Switch Interfacing",
    "quote": "Pull-up resistors guarantee a definitive HIGH logic level when the switch is open, avoiding unpredictable floating input states.",
    "explanation": "CMOS inputs have high impedance; without pull-up or pull-down resistors, static noise causes erratic logic transitions.",
    "topic": "Input Interfacing"
  },
  {
    "id": "s3-mcq-10",
    "num": 10,
    "question": "What is the key architectural difference between Harvard and Von-Neumann computer architectures?",
    "options": [
      {
        "key": "A",
        "text": "Harvard has separate buses for instructions and data; Von-Neumann shares a single bus for both"
      },
      {
        "key": "B",
        "text": "Von-Neumann uses only analog circuits while Harvard is strictly digital"
      },
      {
        "key": "C",
        "text": "Harvard cannot execute arithmetic additions"
      },
      {
        "key": "D",
        "text": "Von-Neumann has separate physical chips for each byte of memory"
      }
    ],
    "correctOption": "A",
    "correctText": "Harvard has separate buses for instructions and data; Von-Neumann shares a single bus for both",
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Harvard vs Von-Neumann",
    "quote": "Harvard architecture features separate memory spaces and buses for instructions and data, enabling simultaneous fetch.",
    "explanation": "Separate buses eliminate the 'Von-Neumann bottleneck', allowing concurrent instruction fetch and data operand access.",
    "topic": "Bus Architecture"
  },
  {
    "id": "s4-mcq-1",
    "num": 1,
    "question": "Which of the following best describes analog circuits?",
    "options": [
      {
        "key": "A",
        "text": "They operate exclusively with binary 0 and 1 voltage states"
      },
      {
        "key": "B",
        "text": "They deal with continuously varying signals with respect to time"
      },
      {
        "key": "C",
        "text": "They are immune to physical environmental noise"
      },
      {
        "key": "D",
        "text": "They contain only software look-up tables"
      }
    ],
    "correctOption": "B",
    "correctText": "They deal with continuously varying signals with respect to time",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Analog vs Digital",
    "quote": "Analog circuits deal with continuous physical waveforms whose amplitude varies smoothly over time.",
    "explanation": "Natural phenomena (temperature, sound, voltage) are continuous analog signals.",
    "topic": "Analog vs Digital"
  },
  {
    "id": "s4-mcq-2",
    "num": 2,
    "question": "In an embedded system, what component is responsible for converting real-world continuous signals into discrete binary values?",
    "options": [
      {
        "key": "A",
        "text": "DAC (Digital-to-Analog Converter)"
      },
      {
        "key": "B",
        "text": "Multiplexer (MUX)"
      },
      {
        "key": "C",
        "text": "ADC (Analog-to-Digital Converter)"
      },
      {
        "key": "D",
        "text": "Schmitt Trigger Inverter"
      }
    ],
    "correctOption": "C",
    "correctText": "ADC (Analog-to-Digital Converter)",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Signal Conditioning & Conversion",
    "quote": "The Analog-to-Digital Converter (ADC) samples continuous analog sensor voltages and quantizes them into digital binary words.",
    "explanation": "The ADC bridges the analog physical realm and digital microcontroller ALU.",
    "topic": "ADC Conversion"
  },
  {
    "id": "s4-mcq-3",
    "num": 3,
    "question": "Which C bitwise operator is commonly used to toggle an output pin on an embedded microcontroller?",
    "options": [
      {
        "key": "A",
        "text": "Bitwise AND (&)"
      },
      {
        "key": "B",
        "text": "Bitwise OR (|)"
      },
      {
        "key": "C",
        "text": "Bitwise XOR (^) (e.g. PORTA ^= 0x01;)"
      },
      {
        "key": "D",
        "text": "Logical NOT (!)"
      }
    ],
    "correctOption": "C",
    "correctText": "Bitwise XOR (^) (e.g. PORTA ^= 0x01;)",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Bitwise Register Masking",
    "quote": "XORing a bit with 1 inverts (toggles) its state without altering surrounding register bits.",
    "explanation": "`0 ^ 1 = 1` and `1 ^ 1 = 0`; hence XOR with mask 1 toggles the target bit.",
    "topic": "Bitwise Masking"
  },
  {
    "id": "s4-mcq-4",
    "num": 4,
    "question": "What is the Boolean expression for the Carry (C) output of a Half Adder with inputs A and B?",
    "options": [
      {
        "key": "A",
        "text": "C = A \u2295 B"
      },
      {
        "key": "B",
        "text": "C = A \u00b7 B (AND)"
      },
      {
        "key": "C",
        "text": "C = A + B (OR)"
      },
      {
        "key": "D",
        "text": "C = A' \u00b7 B'"
      }
    ],
    "correctOption": "B",
    "correctText": "C = A \u00b7 B (AND)",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Half Adder Equations",
    "quote": "Half Adder Boolean equations: Sum S = A \u2295 B, Carry C = A \u00b7 B.",
    "explanation": "A carry is generated only when both input bits A and B are 1 (A \u00b7 B).",
    "topic": "Arithmetic Circuits"
  },
  {
    "id": "s4-mcq-5",
    "num": 5,
    "question": "In microcontroller architecture, what is the primary purpose of a Multiplexer (MUX) connected to external I/O pins?",
    "options": [
      {
        "key": "A",
        "text": "To increase power consumption intentionally"
      },
      {
        "key": "B",
        "text": "To amplify analog radio signals"
      },
      {
        "key": "C",
        "text": "To act as an internal selector allowing a single physical pin to route UART, SPI, PWM, or GPIO functions"
      },
      {
        "key": "D",
        "text": "To replace internal Flash program memory"
      }
    ],
    "correctOption": "C",
    "correctText": "To act as an internal selector allowing a single physical pin to route UART, SPI, PWM, or GPIO functions",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Pin Multiplexing",
    "quote": "Pin multiplexers select which internal peripheral (UART, SPI, Timer, GPIO) connects to a physical external package pin.",
    "explanation": "Multiplexing maximizes silicon versatility on pin-constrained packages.",
    "topic": "Pin Multiplexing"
  },
  {
    "id": "s4-mcq-6",
    "num": 6,
    "question": "Why is Boolean logic optimization critical in battery-operated embedded system design?",
    "options": [
      {
        "key": "A",
        "text": "It increases the number of required transistors"
      },
      {
        "key": "B",
        "text": "It reduces gate count and switching activity, lowering dynamic power consumption and heat"
      },
      {
        "key": "C",
        "text": "It prevents the software from executing loops"
      },
      {
        "key": "D",
        "text": "It eliminates the need for an external crystal oscillator"
      }
    ],
    "correctOption": "B",
    "correctText": "It reduces gate count and switching activity, lowering dynamic power consumption and heat",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Logic Optimization",
    "quote": "Minimizing Boolean logic reduces gate delays, shrinks silicon die area, and lowers dynamic CMOS power consumption (P = C * V^2 * f).",
    "explanation": "Fewer logic transitions directly extend battery runtime and reduce propagation delays.",
    "topic": "Optimization"
  },
  {
    "id": "s4-mcq-7",
    "num": 7,
    "question": "How many inputs does a Full Adder require to perform multi-bit binary arithmetic addition?",
    "options": [
      {
        "key": "A",
        "text": "1 input"
      },
      {
        "key": "B",
        "text": "2 inputs"
      },
      {
        "key": "C",
        "text": "3 inputs (A, B, and Carry-In Cin)"
      },
      {
        "key": "D",
        "text": "4 inputs"
      }
    ],
    "correctOption": "C",
    "correctText": "3 inputs (A, B, and Carry-In Cin)",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Full Adder Circuit",
    "quote": "A Full Adder accepts three binary inputs: operand bits A, B, and the carry-in bit Cin from the previous stage.",
    "explanation": "To cascade adders into an n-bit ripple-carry ALU adder, each stage must incorporate the previous stage's carry.",
    "topic": "Adders"
  },
  {
    "id": "s4-mcq-8",
    "num": 8,
    "question": "Which diagnostic measuring tool is specifically engineered for multi-channel digital signal and serial protocol debugging?",
    "options": [
      {
        "key": "A",
        "text": "Analog Voltmeter"
      },
      {
        "key": "B",
        "text": "Pyrometer"
      },
      {
        "key": "C",
        "text": "Logic Analyzer"
      },
      {
        "key": "D",
        "text": "Wattmeter"
      }
    ],
    "correctOption": "C",
    "correctText": "Logic Analyzer",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Diagnostic Instruments",
    "quote": "A Logic Analyzer monitors dozens of synchronized digital signal lines simultaneously and decodes protocols (UART, SPI, I2C).",
    "explanation": "Logic Analyzers excel at capturing digital bus states and triggering on specific protocol frame words.",
    "topic": "Diagnostic Tools"
  },
  {
    "id": "s4-mcq-9",
    "num": 9,
    "question": "When a high-level C statement like 'int X = a + b;' is executed by a microcontroller, what hardware unit performs the binary addition?",
    "options": [
      {
        "key": "A",
        "text": "The Flash ROM controller"
      },
      {
        "key": "B",
        "text": "Full Adders inside the Arithmetic Logic Unit (ALU)"
      },
      {
        "key": "C",
        "text": "The watchdog timer"
      },
      {
        "key": "D",
        "text": "The analog comparator"
      }
    ],
    "correctOption": "B",
    "correctText": "Full Adders inside the Arithmetic Logic Unit (ALU)",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "ALU Arithmetic",
    "quote": "Arithmetic operations are executed by hardware Full Adders inside the processor's Arithmetic Logic Unit (ALU).",
    "explanation": "The compiler emits an ADD assembly instruction that routes operands through the ALU's cascaded Full Adders.",
    "topic": "ALU Execution"
  },
  {
    "id": "s4-mcq-10",
    "num": 10,
    "question": "In the Proteus Home Security System simulation example, which sensor is used to detect combustible gas leaks?",
    "options": [
      {
        "key": "A",
        "text": "PIR Motion Sensor"
      },
      {
        "key": "B",
        "text": "DS18B20 Temperature Probe"
      },
      {
        "key": "C",
        "text": "LDR Light Sensor"
      },
      {
        "key": "D",
        "text": "MQ-6 Gas Sensor"
      }
    ],
    "correctOption": "D",
    "correctText": "MQ-6 Gas Sensor",
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Embedded Application Example",
    "quote": "The Proteus security system model uses the MQ-6 gas sensor to detect LPG and butane gas concentrations.",
    "explanation": "The MQ-6 semiconductor gas sensor provides an analog voltage proportional to LPG/propane gas levels.",
    "topic": "Simulation Example"
  },
  {
    "id": "s5-mcq-1",
    "num": 1,
    "question": "What did the acronym ARM originally stand for?",
    "options": [
      {
        "key": "A",
        "text": "Advanced Real-time Machine"
      },
      {
        "key": "B",
        "text": "Acorn RISC Machine"
      },
      {
        "key": "C",
        "text": "Automated RISC Microcontroller"
      },
      {
        "key": "D",
        "text": "Application Routing Module"
      }
    ],
    "correctOption": "B",
    "correctText": "Acorn RISC Machine",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "ARM History",
    "quote": "ARM originally stood for Acorn RISC Machine when developed by Acorn Computers in the UK.",
    "explanation": "Developed by Acorn Computers in 1985, the company later spun off as Advanced RISC Machines (ARM).",
    "topic": "ARM History"
  },
  {
    "id": "s5-mcq-2",
    "num": 2,
    "question": "Which processor family was introduced in 1991 to meet Apple's requirement for the Newton PDA?",
    "options": [
      {
        "key": "A",
        "text": "ARM1"
      },
      {
        "key": "B",
        "text": "ARM2"
      },
      {
        "key": "C",
        "text": "ARM6"
      },
      {
        "key": "D",
        "text": "Cortex-M3"
      }
    ],
    "correctOption": "C",
    "correctText": "ARM6",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "ARM History & Apple Partnership",
    "quote": "In 1991, ARM introduced the ARM6 family to meet Apple's requirements for the Apple Newton handheld device.",
    "explanation": "The collaboration between Acorn, Apple, and VLSI Technology led to the ARM6 architecture.",
    "topic": "ARM History"
  },
  {
    "id": "s5-mcq-3",
    "num": 3,
    "question": "Which ARM Cortex processor profile is specifically optimized for high-performance rich operating systems like Linux and Android?",
    "options": [
      {
        "key": "A",
        "text": "Cortex-M"
      },
      {
        "key": "B",
        "text": "Cortex-R"
      },
      {
        "key": "C",
        "text": "Cortex-A"
      },
      {
        "key": "D",
        "text": "Cortex-S"
      }
    ],
    "correctOption": "C",
    "correctText": "Cortex-A",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "ARM Cortex Profiles",
    "quote": "Cortex-A (Application): Optimized for rich operating systems (Android, Linux) with high memory management (MMU) capabilities.",
    "explanation": "Cortex-A features Memory Management Units (MMUs) required to support multi-user virtual memory OSs.",
    "topic": "Cortex Profiles"
  },
  {
    "id": "s5-mcq-4",
    "num": 4,
    "question": "Which ARM Cortex profile is engineered for hard real-time, fault-tolerant applications like automotive braking and avionics?",
    "options": [
      {
        "key": "A",
        "text": "Cortex-A"
      },
      {
        "key": "B",
        "text": "Cortex-R"
      },
      {
        "key": "C",
        "text": "Cortex-M"
      },
      {
        "key": "D",
        "text": "Cortex-X"
      }
    ],
    "correctOption": "B",
    "correctText": "Cortex-R",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "Cortex-R Profile",
    "quote": "Cortex-R (Real-Time): Tailored for hard real-time systems where high deterministic throughput and low latency are critical.",
    "explanation": "Cortex-R cores feature tightly coupled memory (TCM) and fault-detecting lockstep configurations.",
    "topic": "Cortex Profiles"
  },
  {
    "id": "s5-mcq-5",
    "num": 5,
    "question": "Which ARM Cortex series is optimized for low-cost, low-power discrete microcontrollers and IoT endpoints?",
    "options": [
      {
        "key": "A",
        "text": "Cortex-A"
      },
      {
        "key": "B",
        "text": "Cortex-R"
      },
      {
        "key": "C",
        "text": "Cortex-M"
      },
      {
        "key": "D",
        "text": "Cortex-H"
      }
    ],
    "correctOption": "C",
    "correctText": "Cortex-M",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "Cortex-M Profile",
    "quote": "Cortex-M (Microcontroller): Engineered for discrete processing, rapid interrupt handling, and ultra-low power.",
    "explanation": "Cortex-M (M0, M3, M4, M7) provides single-cycle I/O, integrated NVIC, and efficient interrupt dispatch.",
    "topic": "Cortex Profiles"
  },
  {
    "id": "s5-mcq-6",
    "num": 6,
    "question": "What microcontroller chip is featured on the Texas Instruments Tiva C Series LaunchPad evaluation board used in this course?",
    "options": [
      {
        "key": "A",
        "text": "ATmega328P"
      },
      {
        "key": "B",
        "text": "TM4C123GH6PM"
      },
      {
        "key": "C",
        "text": "STM32F103C8T6"
      },
      {
        "key": "D",
        "text": "PIC16F877A"
      }
    ],
    "correctOption": "B",
    "correctText": "TM4C123GH6PM",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "TM4C123GH6PM Hardware",
    "quote": "The course hardware platform is the TI EK-TM4C123GXL LaunchPad featuring the TM4C123GH6PM MCU (ARM Cortex-M4F).",
    "explanation": "The TM4C123GH6PM includes an 80 MHz Cortex-M4F core, 256 KB Flash, 32 KB SRAM, and rich GPIO ports.",
    "topic": "Target Hardware"
  },
  {
    "id": "s5-mcq-7",
    "num": 7,
    "question": "What is the mandatory first step before configuring or writing to any GPIO port register in the TM4C123GH6PM?",
    "options": [
      {
        "key": "A",
        "text": "Write to the GPIODIR register"
      },
      {
        "key": "B",
        "text": "Enable the clock gating for that GPIO port in the RCGCGPIO register and wait for it to stabilize"
      },
      {
        "key": "C",
        "text": "Pull the RESET pin LOW"
      },
      {
        "key": "D",
        "text": "Clear the Flash memory entirely"
      }
    ],
    "correctOption": "B",
    "correctText": "Enable the clock gating for that GPIO port in the RCGCGPIO register and wait for it to stabilize",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "GPIO Clock Initialization",
    "quote": "Before accessing any GPIO register, the run-mode clock gating for that port must be enabled via SYSCTL_RCGCGPIO_R.",
    "explanation": "Accessing an unclocked peripheral bus triggers an immediate hardware Bus Fault exception.",
    "topic": "Peripheral Clocking"
  },
  {
    "id": "s5-mcq-8",
    "num": 8,
    "question": "In the TM4C123, which register sets individual port pins as either inputs (0) or outputs (1)?",
    "options": [
      {
        "key": "A",
        "text": "GPIODEN"
      },
      {
        "key": "B",
        "text": "GPIODATA"
      },
      {
        "key": "C",
        "text": "GPIODIR"
      },
      {
        "key": "D",
        "text": "GPIOAFSEL"
      }
    ],
    "correctOption": "C",
    "correctText": "GPIODIR",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "GPIODIR Register",
    "quote": "GPIODIR: Setting a bit to 1 configures the corresponding pin as an output; clearing to 0 configures it as an input.",
    "explanation": "Direction Register (GPIODIR): 0 = Input, 1 = Output.",
    "topic": "GPIO Registers"
  },
  {
    "id": "s5-mcq-9",
    "num": 9,
    "question": "Which register must be written with 1 to enable digital functionality for target pins in the TM4C123?",
    "options": [
      {
        "key": "A",
        "text": "GPIODEN (Digital Enable)"
      },
      {
        "key": "B",
        "text": "GPIOAMSEL (Analog Mode Select)"
      },
      {
        "key": "C",
        "text": "GPIOPUR"
      },
      {
        "key": "D",
        "text": "GPIOLOCK"
      }
    ],
    "correctOption": "A",
    "correctText": "GPIODEN (Digital Enable)",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "GPIODEN Register",
    "quote": "The Digital Enable register (GPIODEN) must be set to 1 for each pin used for digital I/O.",
    "explanation": "GPIODEN enables the internal digital input buffers and output drivers for the corresponding pin.",
    "topic": "GPIO Registers"
  },
  {
    "id": "s5-mcq-10",
    "num": 10,
    "question": "What is the primary architectural purpose of Bit-Banding in ARM Cortex-M microcontrollers?",
    "options": [
      {
        "key": "A",
        "text": "To increase processor operating voltage"
      },
      {
        "key": "B",
        "text": "To provide atomic, single-cycle read and write access to individual bits in SRAM and peripheral registers"
      },
      {
        "key": "C",
        "text": "To compress assembly code size"
      },
      {
        "key": "D",
        "text": "To disable all interrupts permanently"
      }
    ],
    "correctOption": "B",
    "correctText": "To provide atomic, single-cycle read and write access to individual bits in SRAM and peripheral registers",
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "Bit-Banding Concept",
    "quote": "Bit-banding maps an entire 32-bit word alias to a single bit in memory, allowing atomic bit modification without read-modify-write hazard.",
    "explanation": "Bit-banding guarantees atomic bit updates, preventing race conditions when interrupts preempt register writes.",
    "topic": "Bit-Banding"
  }
];

export const ALL_TF_QUESTIONS: TrueFalseQuestion[] = [
  {
    "id": "s1-tf-1",
    "num": 1,
    "question": "Embedded systems always require the user to know that a computer is inside the device.",
    "correctAnswer": false,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Characteristics",
    "quote": "In most embedded devices, users interact through physical buttons or dials and are unaware of the internal microcontroller.",
    "explanation": "Most embedded appliances completely obscure the computational processor behind a minimal operational interface.",
    "topic": "User Awareness"
  },
  {
    "id": "s1-tf-2",
    "num": 2,
    "question": "The program instructions written for embedded systems are referred to as firmware.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Firmware Concept",
    "quote": "The software burned into ROM/Flash of an embedded system is termed firmware.",
    "explanation": "Firmware directly interfaces with hardware registers and remains stored in non-volatile memory.",
    "topic": "Firmware"
  },
  {
    "id": "s1-tf-3",
    "num": 3,
    "question": "A microcontroller usually includes I/O devices and on-board memory.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Microcontroller Definition",
    "quote": "Microcontrollers integrate CPU, RAM, Flash/ROM, and I/O peripherals on one chip.",
    "explanation": "Unlike microprocessors requiring external memory buses, microcontrollers are self-contained.",
    "topic": "Microcontrollers"
  },
  {
    "id": "s1-tf-4",
    "num": 4,
    "question": "DSPs are generally optimized for digital signal processing tasks.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "DSPs",
    "quote": "DSPs incorporate hardware MAC units and circular buffers optimized for mathematical signal filtering.",
    "explanation": "They perform real-time discrete mathematics at high speed compared to general-purpose CPUs.",
    "topic": "DSPs"
  },
  {
    "id": "s1-tf-5",
    "num": 5,
    "question": "Embedded processors account for 99% of processors worldwide.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Market Distribution",
    "quote": "Over 98-99% of all microprocessors manufactured today are deployed in embedded systems.",
    "explanation": "Desktop PC processors represent less than 1-2% of global processor shipments.",
    "topic": "Industry Statistics"
  },
  {
    "id": "s1-tf-6",
    "num": 6,
    "question": "The AGC was designed on 4K words of ROM and 256 words of RAM.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "AGC Specifications",
    "quote": "Block I AGC featured 4K words of core rope ROM and 256 words of magnetic core RAM.",
    "explanation": "The AGC achieved historical lunar guidance within these strict hardware memory bounds.",
    "topic": "AGC Architecture"
  },
  {
    "id": "s1-tf-7",
    "num": 7,
    "question": "ABS works by pumping the brakes to reduce skidding.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "ABS Operational Logic",
    "quote": "ABS modulates hydraulic pressure to pump brakes rapidly, maintaining steering authority.",
    "explanation": "Pumping the caliper pressure prevents static lockup on wet or icy roads.",
    "topic": "Automotive Systems"
  },
  {
    "id": "s1-tf-8",
    "num": 8,
    "question": "Typical embedded system components include CPU, memory, sensors, actuators, and communication interfaces.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "System Architecture",
    "quote": "The embedded triad consists of sensors (input), processing element & memory, and actuators (output).",
    "explanation": "These core components form the fundamental sense-compute-actuate loop.",
    "topic": "System Architecture"
  },
  {
    "id": "s1-tf-9",
    "num": 9,
    "question": "The Intel 4004 microprocessor was designed for use in business calculators.",
    "correctAnswer": true,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Intel 4004 History",
    "quote": "Commissioned by Japanese calculator manufacturer Busicom, the 4004 was the first commercial single-chip microprocessor.",
    "explanation": "Intel engineer Federico Faggin led the design of the 4004 for Busicom's desktop calculators.",
    "topic": "History"
  },
  {
    "id": "s1-tf-10",
    "num": 10,
    "question": "Many modern automobiles have only a few processors (less than 10).",
    "correctAnswer": false,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "slideTitle": "Automotive Electronics",
    "quote": "Modern passenger cars deploy between 50 and 100+ separate Electronic Control Units (ECUs).",
    "explanation": "Vehicles rely on dozens to over a hundred distributed MCUs interconnected via CAN, LIN, and FlexRay buses.",
    "topic": "Automotive Electronics"
  },
  {
    "id": "s2-tf-1",
    "num": 1,
    "question": "Microprocessors are independent units that contain all functional blocks (RAM, ROM, I/O ports) for independent operation.",
    "correctAnswer": false,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Microprocessor vs Microcontroller",
    "quote": "Microprocessors are dependent units requiring external memory and peripherals. Microcontrollers are independent single-chip systems.",
    "explanation": "A microprocessor contains only the CPU core and requires external memory and peripheral chips to function.",
    "topic": "MCU vs MPU"
  },
  {
    "id": "s2-tf-2",
    "num": 2,
    "question": "Data communication in embedded systems can occur through wired interfaces (e.g. Ethernet, USB, SPI) or wireless interfaces (e.g. Wi-Fi, Bluetooth).",
    "correctAnswer": true,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Data Communication",
    "quote": "Communication occurs via wired channels (USB, I2C, SPI, Ethernet) or wireless channels (BLE, Wi-Fi, Zigbee).",
    "explanation": "Embedded devices deploy both serial buses and wireless transceivers depending on distance and bandwidth needs.",
    "topic": "Data Communication"
  },
  {
    "id": "s2-tf-3",
    "num": 3,
    "question": "In a soft real-time system, missing a deadline is considered catastrophic and causes the entire system to fail.",
    "correctAnswer": false,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Real-Time Classification",
    "quote": "Missing a deadline in soft real-time degrades quality of service but does not cause catastrophic system failure.",
    "explanation": "Hard real-time systems experience catastrophic failure upon missing deadlines; soft real-time systems only degrade QoS (e.g. dropped audio frames).",
    "topic": "Real-Time Classification"
  },
  {
    "id": "s2-tf-4",
    "num": 4,
    "question": "A task may be partitioned into one or more concurrent threads in an embedded system.",
    "correctAnswer": true,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Task & Thread Partitioning",
    "quote": "Complex embedded tasks are commonly partitioned into concurrent threads managed by an RTOS scheduler.",
    "explanation": "Threads enable concurrent execution of periodic sampling, user interface updates, and communication tasks.",
    "topic": "Multithreading"
  },
  {
    "id": "s2-tf-5",
    "num": 5,
    "question": "The dominant programming language for embedded systems is C, due to high portability and efficient compact code generation.",
    "correctAnswer": true,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Embedded Languages",
    "quote": "C remains the predominant embedded language due to direct memory access, minimal runtime overhead, and high portability.",
    "explanation": "C provides low-level bit manipulation, predictable execution timing, and zero hidden runtime overhead.",
    "topic": "Programming Languages"
  },
  {
    "id": "s2-tf-6",
    "num": 6,
    "question": "An air conditioner that maintains room temperature to a specified limit is an example of an embedded system with a 'Monitoring' purpose only.",
    "correctAnswer": false,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Control Purpose",
    "quote": "Air conditioning imposes closed-loop actuation (turning the compressor on/off) and is therefore a Control system.",
    "explanation": "Because it actively drives an actuator (compressor/fan) to alter physical state, it is classified under 'Control', not merely 'Monitoring'.",
    "topic": "Purposes"
  },
  {
    "id": "s2-tf-7",
    "num": 7,
    "question": "Embedded software must be designed to tolerate errors and unexpected situations because many systems cannot simply be rebooted.",
    "correctAnswer": true,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Reliability & Fault Tolerance",
    "quote": "Embedded software must be fault-tolerant because reboots during critical operation (e.g. flight, medical) are unacceptable.",
    "explanation": "Mission-critical devices require watchdog timers and defensive exception handlers to recover gracefully without crashing.",
    "topic": "Reliability"
  },
  {
    "id": "s2-tf-8",
    "num": 8,
    "question": "Application Specific Instruction Set Processors (ASIPs) are optimized for specific domain requirements like network processing or automotive applications.",
    "correctAnswer": true,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "ASIP Domain Optimization",
    "quote": "ASIPs balance the programmability of general-purpose CPUs with the efficiency of custom ASICs for specific domains.",
    "explanation": "Custom instructions in ASIPs accelerate target algorithms like Viterbi decoding or CRC calculations.",
    "topic": "ASIP"
  },
  {
    "id": "s2-tf-9",
    "num": 9,
    "question": "In a single-core processor, concurrent execution means that multiple threads are physically executed at the exact same instant.",
    "correctAnswer": false,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "Concurrency Mechanics",
    "quote": "At any exact physical picosecond, a single core executes only one instruction. Rapid switching creates the illusion of concurrency.",
    "explanation": "True simultaneous execution requires multiple physical CPU cores. A single core uses rapid interleaved scheduling.",
    "topic": "Concurrency"
  },
  {
    "id": "s2-tf-10",
    "num": 10,
    "question": "The evolution of Microcontroller Units (MCUs) shows a rapid shift from 8-bit and 16-bit processors toward 32-bit processors.",
    "correctAnswer": true,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "slideTitle": "MCU Market Evolution",
    "quote": "32-bit MCUs (especially ARM Cortex-M) increasingly dominate embedded designs due to falling prices and high performance.",
    "explanation": "Modern 32-bit architectures offer superior code density, advanced math units, and competitive pricing.",
    "topic": "Market Trends"
  },
  {
    "id": "s3-tf-1",
    "num": 1,
    "question": "In Little-Endian format, the most significant byte (MSB) is stored at the lowest memory address.",
    "correctAnswer": false,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Endianness Definition",
    "quote": "Little-Endian stores the Least Significant Byte (LSB) at the lowest memory address. Big-Endian stores the MSB at the lowest address.",
    "explanation": "Storing the MSB at the lowest memory address is the definition of Big-Endian, not Little-Endian.",
    "topic": "Endianness"
  },
  {
    "id": "s3-tf-2",
    "num": 2,
    "question": "DSPs contain dedicated hardware Multiply-Accumulate (MAC) units to accelerate digital filtering algorithms.",
    "correctAnswer": true,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "DSP MAC Unit",
    "quote": "The MAC unit performs a multiplication and accumulation in a single clock cycle, vital for convolution and FIR filters.",
    "explanation": "MAC units compute equations of the form `Acc = Acc + (A * B)` in a single clock cycle.",
    "topic": "DSPs"
  },
  {
    "id": "s3-tf-3",
    "num": 3,
    "question": "FPGAs and CPLDs are fixed non-programmable logic devices whose hardware circuits cannot be changed once manufactured.",
    "correctAnswer": false,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Programmable Logic Devices",
    "quote": "FPGAs and CPLDs are reconfigurable programmable logic devices defined via hardware description languages (VHDL/Verilog).",
    "explanation": "FPGAs are field-programmable gate arrays whose internal interconnects and lookup tables can be reprogrammed anytime.",
    "topic": "Programmable Logic"
  },
  {
    "id": "s3-tf-4",
    "num": 4,
    "question": "Harvard architecture allows simultaneous access to instruction memory and data memory in the same clock cycle.",
    "correctAnswer": true,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Harvard Architecture",
    "quote": "Separate physical buses for instruction and data eliminate bus contention and permit simultaneous memory accesses.",
    "explanation": "Instruction fetch and operand read/write occur simultaneously across separate bus lines.",
    "topic": "Architecture"
  },
  {
    "id": "s3-tf-5",
    "num": 5,
    "question": "SRAM and DRAM are non-volatile Read-Write memory types that retain stored bits after system power-down.",
    "correctAnswer": false,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Memory Volatility",
    "quote": "RAM (both SRAM and DRAM) is volatile and immediately loses its contents when power is turned off.",
    "explanation": "Non-volatile memory technologies include Flash, ROM, and EEPROM.",
    "topic": "Memory Volatility"
  },
  {
    "id": "s3-tf-6",
    "num": 6,
    "question": "Big-Endian byte order stores the Most Significant Byte (MSB) at the lowest memory address.",
    "correctAnswer": true,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Big-Endian Storage",
    "quote": "Big-Endian arranges multi-byte integers with the most significant byte at the lowest address (base pointer).",
    "explanation": "This mirrors natural left-to-right reading order and is the standard for TCP/IP network byte order.",
    "topic": "Endianness"
  },
  {
    "id": "s3-tf-7",
    "num": 7,
    "question": "A normal standard DC motor produces precise discrete angular stepping rotations without continuous turning.",
    "correctAnswer": false,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Motor Types",
    "quote": "Standard DC motors produce continuous rotation when powered; stepper motors produce discrete incremental angular steps.",
    "explanation": "Stepper motors produce discrete step rotations; standard DC motors rotate continuously under DC voltage.",
    "topic": "Actuators"
  },
  {
    "id": "s3-tf-8",
    "num": 8,
    "question": "An optocoupler combines an infrared LED and a phototransistor to provide galvanic electrical isolation.",
    "correctAnswer": true,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Opto-isolators",
    "quote": "The optical barrier inside an optocoupler prevents electrical transients on the load circuit from damaging the sensitive MCU.",
    "explanation": "Light photons transfer the signal across a dielectric gap, preventing voltage spikes from reaching the MCU.",
    "topic": "Electrical Isolation"
  },
  {
    "id": "s3-tf-9",
    "num": 9,
    "question": "A Piezo buzzer is an input device used to sense acoustic sound waves from the environment.",
    "correctAnswer": false,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Piezo Transducers",
    "quote": "Piezo buzzers are audio output actuators driven by oscillating electrical signals to generate audible alarms.",
    "explanation": "In standard embedded circuits, buzzers are output actuators that emit sound, not input microphones.",
    "topic": "Actuators"
  },
  {
    "id": "s3-tf-10",
    "num": 10,
    "question": "Circular addressing buffers in DSPs prevent pointer overflow by automatically wrapping the index back to the start of the buffer.",
    "correctAnswer": true,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "slideTitle": "Circular Buffers in DSP",
    "quote": "Hardware circular buffer support automatically wraps pointers modulo buffer length without software branch overhead.",
    "explanation": "Circular buffers are essential for implementing sliding FIR filter sample histories without shifting memory arrays.",
    "topic": "DSP Architecture"
  },
  {
    "id": "s4-tf-1",
    "num": 1,
    "question": "Analog circuits can handle a wide range of amplitude signals and are widely used in audio amplifiers and RF communication.",
    "correctAnswer": true,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Analog Systems",
    "quote": "Analog circuits process continuous signals over a wide dynamic range in audio and RF transceivers.",
    "explanation": "Continuous analog amplification is essential for radio antennas, microphones, and power stages.",
    "topic": "Analog Systems"
  },
  {
    "id": "s4-tf-2",
    "num": 2,
    "question": "Real-world physical quantities like temperature and pressure are inherently digital in nature.",
    "correctAnswer": false,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Physical Transduction",
    "quote": "Physical phenomena in nature (temperature, pressure, acoustic vibration) are continuous analog quantities.",
    "explanation": "Natural quantities vary smoothly and continuously; they must be converted to digital via ADCs for MCU processing.",
    "topic": "Physical Quantities"
  },
  {
    "id": "s4-tf-3",
    "num": 3,
    "question": "Bitwise AND and OR operations are frequently used in register bit masking to selectively clear and set individual bits.",
    "correctAnswer": true,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Bit Manipulation",
    "quote": "Bitwise AND clears targeted bits (e.g., REG &= ~(1<<b)); Bitwise OR sets targeted bits (e.g., REG |= (1<<b)).",
    "explanation": "AND with 0 forces a bit low; OR with 1 forces a bit high, preserving surrounding configuration bits.",
    "topic": "Bitwise Operations"
  },
  {
    "id": "s4-tf-4",
    "num": 4,
    "question": "A Half Adder can add two binary operand bits plus an additional carry-in bit from a previous stage.",
    "correctAnswer": false,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Adders Comparison",
    "quote": "A Half Adder accepts only two inputs (A and B). A Full Adder accepts three inputs (A, B, and Cin).",
    "explanation": "Handling an incoming carry-in bit requires a Full Adder, which has 3 inputs.",
    "topic": "Adders"
  },
  {
    "id": "s4-tf-5",
    "num": 5,
    "question": "Demultiplexers (DEMUX) are used to distribute a single input signal to one of multiple output lines based on selector lines.",
    "correctAnswer": true,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Demultiplexers",
    "quote": "A DEMUX takes a single input data stream and routes it to one of 2^n outputs selected by n control lines.",
    "explanation": "DEMUX operates as a 1-to-N electronic routing switch.",
    "topic": "Demultiplexers"
  },
  {
    "id": "s4-tf-6",
    "num": 6,
    "question": "Logic simplification and optimization directly increase the power consumption of battery-operated systems.",
    "correctAnswer": false,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Power & Logic Minimization",
    "quote": "Logic simplification decreases transistor count and parasitic capacitance, directly lowering power consumption.",
    "explanation": "Reducing gate counts lowers dynamic switching power (P = C * V^2 * f) and leakage.",
    "topic": "Power Optimization"
  },
  {
    "id": "s4-tf-7",
    "num": 7,
    "question": "The Boolean expression for a basic two-input AND gate is Y = A + B.",
    "correctAnswer": false,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Logic Gate Theorems",
    "quote": "AND is Boolean multiplication: Y = A \u00b7 B. The expression Y = A + B represents an OR gate.",
    "explanation": "Y = A \u00b7 B is AND; Y = A + B is OR.",
    "topic": "Boolean Theorems"
  },
  {
    "id": "s4-tf-8",
    "num": 8,
    "question": "Integrated Circuits (ICs) like the 74HC04N package multiple logic gates (e.g. hex inverters) in a single package.",
    "correctAnswer": true,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Standard Logic ICs",
    "quote": "The 74HC04N contains six independent NOT gates (hex inverter) in a 14-pin DIP package.",
    "explanation": "Standard 74-series logic chips package multiple gates (e.g. quad 2-input NAND 74HC00, hex inverter 74HC04).",
    "topic": "Digital ICs"
  },
  {
    "id": "s4-tf-9",
    "num": 9,
    "question": "An Oscilloscope is primarily used for analyzing signal waveforms over time, while a Logic Analyzer captures multi-channel digital logic states.",
    "correctAnswer": true,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Oscilloscope vs Logic Analyzer",
    "quote": "Oscilloscopes display continuous analog voltage waveforms; Logic Analyzers capture multi-line timing states and decode bus protocols.",
    "explanation": "Oscilloscopes inspect signal integrity and rise times; logic analyzers decode parallel and serial data packets.",
    "topic": "Test Equipment"
  },
  {
    "id": "s4-tf-10",
    "num": 10,
    "question": "In the Proteus simulation example, an alphanumeric LCD 20x4 is used to display system status messages to the operator.",
    "correctAnswer": true,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Display Interfacing",
    "quote": "The 20x4 LCD displays real-time sensory telemetry and alert statuses in Proteus simulation.",
    "explanation": "20x4 HD44780 LCD modules are widely used in prototyping to output human-readable diagnostic messages.",
    "topic": "LCD Interfacing"
  },
  {
    "id": "s5-tf-1",
    "num": 1,
    "question": "The ARM processor architecture is based on CISC (Complex Instruction Set Computer) design philosophy.",
    "correctAnswer": false,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "ARM Architecture Principles",
    "quote": "ARM is a textbook RISC (Reduced Instruction Set Computer) architecture featuring a load-store structure.",
    "explanation": "ARM is fundamentally a RISC architecture with uniform 32-bit (or 16-bit Thumb) instructions.",
    "topic": "ARM Architecture"
  },
  {
    "id": "s5-tf-2",
    "num": 2,
    "question": "ARM Cortex-M processors deploy a Harvard architecture with separate instruction and data buses.",
    "correctAnswer": true,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "Cortex-M Bus Architecture",
    "quote": "Cortex-M3 and M4 utilize Harvard bus architecture (I-Code, D-Code, and System bus) for concurrent memory operations.",
    "explanation": "Separate internal buses allow concurrent instruction fetching and data operand access.",
    "topic": "Bus Architecture"
  },
  {
    "id": "s5-tf-3",
    "num": 3,
    "question": "The TM4C123GH6PM microcontroller incorporates an ARM Cortex-M4F processor core capable of operating at up to 80 MHz.",
    "correctAnswer": true,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "TM4C123 Clock Speed",
    "quote": "The TM4C123GH6PM features an ARM Cortex-M4F processor core with single-precision FPU operating up to 80 MHz.",
    "explanation": "The LaunchPad PLL can be configured to run the system clock at up to 80 MHz from a 16 MHz crystal.",
    "topic": "Microcontroller Specs"
  },
  {
    "id": "s5-tf-4",
    "num": 4,
    "question": "Attempting to read or write a GPIO register in TM4C123 before enabling its clock in RCGCGPIO triggers a hardware Bus Fault.",
    "correctAnswer": true,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "Clock Gating & Faults",
    "quote": "Accessing an unclocked peripheral raises a Precise Data Bus Fault exception.",
    "explanation": "Peripheral buses are disabled upon reset to conserve power; accessing them unclocked generates a bus error.",
    "topic": "Peripheral Clocking"
  },
  {
    "id": "s5-tf-5",
    "num": 5,
    "question": "In the TM4C123 GPIODIR register, setting a bit to 0 configures the corresponding pin as an output.",
    "correctAnswer": false,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "GPIODIR Direction Bits",
    "quote": "In GPIODIR: 0 = Input, 1 = Output.",
    "explanation": "0 designates Input (high impedance); 1 designates Output (push-pull or open drain).",
    "topic": "GPIO Registers"
  },
  {
    "id": "s5-tf-6",
    "num": 6,
    "question": "The GPIODEN register must be set to 1 for any pin used for digital input or output functions.",
    "correctAnswer": true,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "GPIODEN Function",
    "quote": "GPIODEN enables the digital I/O buffers for the designated pin.",
    "explanation": "If GPIODEN is 0, the digital buffers remain disabled (used when pins are dedicated to analog ADC inputs).",
    "topic": "GPIO Registers"
  },
  {
    "id": "s5-tf-7",
    "num": 7,
    "question": "Bit-banding allows modifying a single bit in peripheral registers atomically without requiring a read-modify-write sequence.",
    "correctAnswer": true,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "Bit-Banding Mechanism",
    "quote": "A 32-bit write to a bit-band alias address performs an atomic single-cycle bit modification in hardware.",
    "explanation": "The hardware memory controller handles the bit read, update, and write in one atomic bus cycle.",
    "topic": "Bit-Banding"
  },
  {
    "id": "s5-tf-8",
    "num": 8,
    "question": "Cortex-A processors are optimized for low-cost, ultra-low-power discrete microcontroller applications.",
    "correctAnswer": false,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "Cortex Comparison",
    "quote": "Cortex-A is for application processing (smartphones); Cortex-M is for low-power microcontrollers.",
    "explanation": "Cortex-M is the profile designed for cost-sensitive, low-power microcontrollers.",
    "topic": "Cortex Profiles"
  },
  {
    "id": "s5-tf-9",
    "num": 9,
    "question": "In TM4C123, GPIODATA masking uses address bus bits [9:2] to prevent bus contention and allow atomic bitmask writes.",
    "correctAnswer": true,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "GPIODATA Address Masking",
    "quote": "Bits [9:2] of the access address serve as a bitmask for the GPIODATA register write operations.",
    "explanation": "This hardware masking prevents software read-modify-write races on multi-pin ports.",
    "topic": "Data Register Masking"
  },
  {
    "id": "s5-tf-10",
    "num": 10,
    "question": "The NVIC (Nested Vectored Interrupt Controller) is an external discrete chip connected to the Cortex-M processor over an SPI bus.",
    "correctAnswer": false,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "slideTitle": "NVIC Architecture",
    "quote": "The NVIC is tightly integrated directly inside the ARM Cortex-M processor core for low-latency interrupt nesting.",
    "explanation": "The NVIC is built into the Cortex-M core itself, providing sub-12 cycle interrupt latency.",
    "topic": "NVIC Architecture"
  }
];

export const ALL_ESSAY_QUESTIONS: EssayQuestion[] = [
  {
    "id": "s1-essay-1",
    "num": 1,
    "question": "Explain the definition of an embedded system and distinguish it from a general-purpose computer on functionality, constraints, and user interface.",
    "maxPoints": 5,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "modelAnswer": "An embedded system is an electronic/electro-mechanical system designed to perform a dedicated, specific function, combining specialized hardware with firmware in ROM/Flash.\n\nDistinctions:\n1. Functionality: Dedicated to a single predefined task vs. general-purpose PCs designed to run arbitrary diverse user applications.\n2. Operating Constraints: Strict real-time deadlines, low power dissipation, small memory footprints, and low unit cost vs. PCs prioritizing peak throughput and software upgradeability.\n3. User Interface: Minimal domain-specific controls (buttons, 7-segments, LCDs) where users often don't perceive the computer inside vs. rich desktop GUIs (monitors, keyboards, mice).",
    "keyPoints": [
      "Definition combining dedicated hardware and firmware",
      "Dedicated purpose vs general-purpose multi-application computing",
      "Resource constraints (real-time deadlines, low power, memory bounds)",
      "Specialized minimal UI vs general GUI"
    ],
    "rubric": [
      {
        "criteria": "Accurate embedded system definition (hardware + firmware)",
        "points": 2
      },
      {
        "criteria": "Contrasts functionality and operating constraints",
        "points": 1.5
      },
      {
        "criteria": "Explains user interface difference",
        "points": 1.5
      }
    ],
    "topic": "Definitions & Comparison"
  },
  {
    "id": "s1-essay-2",
    "num": 2,
    "question": "List and explain four major components of a typical embedded system.",
    "maxPoints": 5,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "modelAnswer": "1. Processing Core (MCU/DSP): Executes firmware instructions, performs mathematical logic, and orchestrates timing (e.g. ARM Cortex-M, AVR ATmega328P).\n2. Memory Subsystem: Non-volatile Flash/ROM stores persistent firmware; volatile SRAM holds stack, heap, and operational buffers.\n3. Sensors & Actuators: Sensors convert physical phenomena (temperature, pressure, light) into electrical signals; Actuators convert electrical commands into physical movement or indication (motors, relays, buzzers, LEDs).\n4. Communication & I/O Interfaces: Facilitate communication with other ICs, modules, or network hosts using protocols like UART, SPI, I2C, CAN, or USB.",
    "keyPoints": [
      "Processing core (MCU/DSP)",
      "Memory subsystem (ROM/Flash vs RAM)",
      "Sensors (inputs) and Actuators (outputs)",
      "Communication protocols (I2C, SPI, UART, CAN)"
    ],
    "rubric": [
      {
        "criteria": "Accurate explanation of processing element",
        "points": 1.25
      },
      {
        "criteria": "Explanation of memory roles (volatile vs non-volatile)",
        "points": 1.25
      },
      {
        "criteria": "Explanation of sensors & actuators with examples",
        "points": 1.25
      },
      {
        "criteria": "Explanation of communication/IO interfaces",
        "points": 1.25
      }
    ],
    "topic": "System Components"
  },
  {
    "id": "s1-essay-3",
    "num": 3,
    "question": "Describe the historical importance of the Apollo Guidance Computer (AGC). Include at least three key architectural and operational facts.",
    "maxPoints": 5,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "modelAnswer": "The Apollo Guidance Computer (AGC), developed by the MIT Instrumentation Lab for NASA's Apollo missions, was the first recognized modern embedded system.\n\nKey Facts:\n1. Silicon Technology: Pioneered the mass adoption of silicon integrated circuits (using ~4,000 dual 3-input NOR gate ICs), drastically advancing the microelectronics industry.\n2. Memory Architecture: Operated with 4,096 words of core rope ROM (non-volatile hardwired software) and 256 words of magnetic core RAM.\n3. Real-Time OS & DSKY: Featured an innovative priority-based cooperative operating system and the iconic DSKY (Display/Keyboard) verb-noun command interface that safely navigated Apollo 11's lunar descent under computer overload alarms.",
    "keyPoints": [
      "First recognized modern embedded computer (MIT/NASA)",
      "Use of early integrated circuits (dual NOR gates)",
      "Memory constraints (4K core rope ROM, 256 words RAM)",
      "Priority-driven executive and DSKY interface"
    ],
    "rubric": [
      {
        "criteria": "Historical significance explained",
        "points": 1.5
      },
      {
        "criteria": "Accurate memory & IC technology facts",
        "points": 2
      },
      {
        "criteria": "Mention of DSKY and real-time execution",
        "points": 1.5
      }
    ],
    "topic": "Historical Systems"
  },
  {
    "id": "s1-essay-4",
    "num": 4,
    "question": "Explain how an Anti-lock Braking System (ABS) functions as an embedded control system, including the roles of wheel speed sensors, ECU, and hydraulic valves.",
    "maxPoints": 5,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "modelAnswer": "An Anti-lock Braking System (ABS) operates as a closed-loop, hard real-time embedded control system:\n\n1. Sensing: Inductive or Hall-effect wheel speed sensors continuously monitor the rotational velocity of each wheel.\n2. Processing (ECU): The microcontroller calculates vehicle velocity and wheel deceleration. If a wheel decelerates disproportionately faster than the vehicle, imminent lockup (skidding) is detected.\n3. Actuation: The ECU commands electromechanical solenoid valves and a hydraulic pump to pulse brake caliper pressure (up to 15-20 times per second). This releases pressure when locking occurs and re-applies pressure once rotation is restored, keeping the tire in its peak friction zone and preserving directional steering.",
    "keyPoints": [
      "Closed-loop hard real-time control system",
      "Wheel speed sensors detect rotational deceleration",
      "ECU algorithmic decision for skid detection",
      "Hydraulic solenoid valves & pump modulate pressure"
    ],
    "rubric": [
      {
        "criteria": "Explains sensing phase (wheel speed sensors)",
        "points": 1.5
      },
      {
        "criteria": "Explains ECU decision-making logic",
        "points": 1.5
      },
      {
        "criteria": "Explains actuation via hydraulic modulation",
        "points": 2
      }
    ],
    "topic": "Automotive Control"
  },
  {
    "id": "s1-essay-5",
    "num": 5,
    "question": "Compare microprocessors, microcontrollers, and Digital Signal Processors (DSPs) in terms of integration, architecture, and primary optimization.",
    "maxPoints": 5,
    "sheet": 1,
    "lecture": "Week 01 - Lecture 1",
    "modelAnswer": "1. Microprocessor (MPU):\n- Integration: CPU core only; requires external RAM, ROM, clock generators, and I/O chips on the PCB.\n- Optimization: High clock frequency, complex instruction processing, and peak throughput (e.g. Intel Core, ARM Cortex-A).\n\n2. Microcontroller (MCU):\n- Integration: Highly integrated single chip containing CPU, RAM, Flash memory, timers, ADC, and I/O peripherals.\n- Optimization: Cost-effectiveness, ultra-low power consumption, and compact physical footprint for control applications (e.g. AVR, PIC, ARM Cortex-M).\n\n3. Digital Signal Processor (DSP):\n- Integration: Dedicated processor with specialized hardware like Multiply-Accumulate (MAC) units and Harvard bus structures.\n- Optimization: Real-time mathematical throughput for continuous signal streams (audio, video, radar, telecommunications).",
    "keyPoints": [
      "MPU: CPU core only, external buses, throughput focus",
      "MCU: Single-chip computer (CPU+RAM+ROM+IO), control focus",
      "DSP: Specialized MAC hardware, signal processing focus"
    ],
    "rubric": [
      {
        "criteria": "Clear characterization of Microprocessor",
        "points": 1.5
      },
      {
        "criteria": "Clear characterization of Microcontroller",
        "points": 1.75
      },
      {
        "criteria": "Clear characterization of DSP",
        "points": 1.75
      }
    ],
    "topic": "Processor Comparison"
  },
  {
    "id": "s2-essay-1",
    "num": 1,
    "question": "Briefly explain the fundamental difference between a Microprocessor and a Microcontroller.",
    "maxPoints": 5,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "modelAnswer": "Microprocessor (MPU):\n- A silicon chip containing only the CPU (ALU, control unit, registers).\n- Dependent component: Requires external RAM, ROM/Flash, clock oscillators, and I/O interface chips connected via address/data buses to function.\n- Optimized for high performance and versatile computing (e.g., Intel Core, ARM Cortex-A).\n\nMicrocontroller (MCU):\n- An independent computer-on-a-chip integrating CPU, volatile SRAM, non-volatile Flash/ROM, timers, ADC, interrupt controllers, and I/O ports on a single silicon die.\n- Self-contained: Can execute embedded applications with minimal external components (power, ground, crystal).\n- Optimized for low cost, small physical footprint, low power consumption, and control tasks (e.g., ATmega328P, TI TM4C123).",
    "keyPoints": [
      "Microprocessor is CPU-only, dependent on external chips",
      "Microcontroller is complete single-chip computer (CPU+RAM+ROM+IO)",
      "Comparison of application targets and optimization metrics"
    ],
    "rubric": [
      {
        "criteria": "Explains Microprocessor architecture & dependency",
        "points": 2
      },
      {
        "criteria": "Explains Microcontroller on-chip integration",
        "points": 2
      },
      {
        "criteria": "Contrasts target use-cases",
        "points": 1
      }
    ],
    "topic": "Processor Comparison"
  },
  {
    "id": "s2-essay-2",
    "num": 2,
    "question": "List and briefly describe four primary purposes of an embedded system as discussed in the lecture.",
    "maxPoints": 5,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "modelAnswer": "Four primary purposes:\n1. Data Collection / Storage / Representation: Acquires physical data via sensors, stores it locally or in memory, and visualizes it (e.g. digital camera, environmental weather logger).\n2. Monitoring: Continuively tracks parameters without active control loop intervention to change the measured physical variable (e.g. hospital patient ECG monitor, digital voltmeter).\n3. Control: Imposes closed-loop corrective action on the environment using actuators based on sensor feedback (e.g. automobile ABS brake controller, air conditioner thermostat).\n4. Data Communication: Transmits and routes data packets over wired or wireless network mediums (e.g. Wi-Fi router, telematics cellular gateway).",
    "keyPoints": [
      "Names 4 distinct purposes from the official 6",
      "Describes Data Collection with example",
      "Describes Monitoring with example",
      "Describes Control with example",
      "Describes Communication with example"
    ],
    "rubric": [
      {
        "criteria": "Correctly names and describes Purpose 1 with example",
        "points": 1.25
      },
      {
        "criteria": "Correctly names and describes Purpose 2 with example",
        "points": 1.25
      },
      {
        "criteria": "Correctly names and describes Purpose 3 with example",
        "points": 1.25
      },
      {
        "criteria": "Correctly names and describes Purpose 4 with example",
        "points": 1.25
      }
    ],
    "topic": "Embedded Purposes"
  },
  {
    "id": "s2-essay-3",
    "num": 3,
    "question": "Differentiate between Soft Real-Time and Hard Real-Time systems, and provide one real-world engineering example for each.",
    "maxPoints": 5,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "modelAnswer": "1. Hard Real-Time Systems:\n- Timing Requirement: Deadlines are absolute and deterministic.\n- Failure Consequence: Missing even a single deadline is considered catastrophic failure of the entire system, leading to loss of life, equipment destruction, or mission abort.\n- Example: Automotive Airbag Deployment Controller (must inflate within 20-30 ms of crash impact) or Anti-lock Braking System (ABS).\n\n2. Soft Real-Time Systems:\n- Timing Requirement: Deadlines are desirable targets; timing jitter is permissible.\n- Failure Consequence: Missing a deadline does not compromise system integrity, but results in degraded Quality of Service (QoS).\n- Example: Streaming Video Player (dropped video frames cause visual stutter without destroying the system) or automated ticket vending machine.",
    "keyPoints": [
      "Hard Real-Time: Deadlines absolute; missing deadline = catastrophic total failure",
      "Hard Real-Time example: Airbag deployment, flight avionics, ABS",
      "Soft Real-Time: Deadlines flexible; missing deadline = degraded QoS",
      "Soft Real-Time example: Video streaming, ATM, MP3 playback"
    ],
    "rubric": [
      {
        "criteria": "Defines Hard Real-Time with consequences and example",
        "points": 2.5
      },
      {
        "criteria": "Defines Soft Real-Time with consequences and example",
        "points": 2.5
      }
    ],
    "topic": "Real-Time Classification"
  },
  {
    "id": "s2-essay-4",
    "num": 4,
    "question": "What is an ASIP (Application Specific Instruction Set Processor), and how does it bridge the gap between a General Purpose Processor (GPP) and an ASIC?",
    "maxPoints": 5,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "modelAnswer": "An Application Specific Instruction Set Processor (ASIP) is a microprocessor tailored for a specific application domain (e.g., audio codecs, video compression, telecommunications) by incorporating custom hardware execution units and dedicated instructions.\n\nBridging the Spectrum:\n1. General Purpose Processor (GPP): Highly programmable and flexible, but inefficient in silicon area, execution cycles, and power when executing specialized algorithms.\n2. Application Specific Integrated Circuit (ASIC): Implements dedicated hardware logic with maximum speed and lowest power, but is completely non-programmable; any algorithm change requires silicon re-fabrication.\n3. ASIP Advantage: Retains software programmability (like a GPP) while incorporating custom instructions that execute critical algorithmic bottlenecks in 1-2 clock cycles (approaching ASIC silicon efficiency).",
    "keyPoints": [
      "Definition of ASIP and domain tailoring",
      "Comparison to GPP (programmable but less efficient)",
      "Comparison to ASIC (maximum hardware efficiency but zero programmability)",
      "ASIP combines software programmability with tailored hardware acceleration"
    ],
    "rubric": [
      {
        "criteria": "Defines ASIP clearly",
        "points": 2
      },
      {
        "criteria": "Contrasts with GPP and ASIC characteristics",
        "points": 2
      },
      {
        "criteria": "Highlights optimal balance of programmability and efficiency",
        "points": 1
      }
    ],
    "topic": "ASIP Architecture"
  },
  {
    "id": "s2-essay-5",
    "num": 5,
    "question": "Why is reliability a paramount design demand in embedded systems? Explain at least two reasons cited in the lecture.",
    "maxPoints": 5,
    "sheet": 2,
    "lecture": "Week 02 - Lecture 2",
    "modelAnswer": "Reliability in embedded systems is paramount because:\n\n1. Inability to Simply Reboot in Critical Operations:\nUnlike desktop computers where a blue-screen error can be resolved by a reboot, embedded systems operate safety-critical equipment (pacemakers, fly-by-wire flight control, nuclear monitoring, anti-lock brakes). A software crash or reboot during operation can cause immediate physical harm or fatalities.\n\n2. Inaccessibility and Hostile Operating Environments:\nMany embedded systems are deployed in inaccessible locations (deep-sea sensors, orbital satellites, subterranean oil drills) or harsh environments with high electromagnetic interference, temperature swings, and vibration. Physical maintenance is impossible or astronomically expensive, requiring hardware watchdogs, defensive firmware, and fault recovery mechanisms.",
    "keyPoints": [
      "Safety-critical environments where crashes cause injury or loss of life",
      "Reboots cannot be tolerated during real-time actuation",
      "Inaccessible deployment locations (space, biomedical, industrial)",
      "Hardware watchdogs and fault-tolerant defensive code"
    ],
    "rubric": [
      {
        "criteria": "Explains safety-critical impact and reboot impossibility",
        "points": 2.5
      },
      {
        "criteria": "Explains inaccessible environments and high cost of failure",
        "points": 2.5
      }
    ],
    "topic": "System Reliability"
  },
  {
    "id": "s3-essay-1",
    "num": 1,
    "question": "List and describe four key hardware units typically incorporated within a Digital Signal Processor (DSP).",
    "maxPoints": 5,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "modelAnswer": "Four key hardware units of a DSP:\n1. Multiply-Accumulate (MAC) Unit: Multiplies two numbers and accumulates the result into a wide register in a single machine cycle, accelerating discrete convolution and matrix calculations.\n2. Barrel Shifter: Shifts or rotates a data word by multiple bit positions in a single clock cycle without looping, critical for floating-to-fixed point alignment and scaling.\n3. Dedicated Address Generation Units (AGU): Computes memory operand addresses in parallel with data execution, supporting circular addressing and bit-reversed addressing for FFTs.\n4. Harvard Multiple-Bus System: Features separate program memory and data memory buses (often with multiple data read buses) to sustain high-bandwidth streaming operand throughput.",
    "keyPoints": [
      "Multiply-Accumulate (MAC) unit",
      "Barrel Shifter",
      "Address Generation Unit (AGU) for circular/bit-reversed addressing",
      "Harvard multiple-bus architecture"
    ],
    "rubric": [
      {
        "criteria": "Explains MAC unit and single-cycle multiply-add",
        "points": 1.5
      },
      {
        "criteria": "Explains Barrel Shifter operation",
        "points": 1
      },
      {
        "criteria": "Explains AGU with circular/bit-reversed addressing",
        "points": 1.25
      },
      {
        "criteria": "Explains Harvard multi-bus architecture",
        "points": 1.25
      }
    ],
    "topic": "DSP Hardware Units"
  },
  {
    "id": "s3-essay-2",
    "num": 2,
    "question": "Compare RISC (Reduced Instruction Set Computer) and CISC (Complex Instruction Set Computer) processors on instruction sets, execution cycles, pipelining, and compiler complexity.",
    "maxPoints": 5,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "modelAnswer": "1. Instruction Set & Encoding:\n- RISC: Small set of simple, orthogonal, fixed-length instructions (e.g. 32-bit ARM). Only explicit LOAD/STORE instructions access memory.\n- CISC: Large set of specialized, variable-length instructions (e.g. x86); many arithmetic instructions can operate directly on memory operands.\n\n2. Execution Cycles & Pipelining:\n- RISC: Most instructions execute in a single clock cycle, enabling deep, efficient hardware instruction pipelining.\n- CISC: Complex instructions require multi-cycle microcode execution, complicating pipeline hazard resolution.\n\n3. Hardware vs Compiler Complexity:\n- RISC: Simple hardwired decode logic leaves silicon area for large general-purpose register files; relies on optimizing compilers to combine simple instructions.\n- CISC: Complex microcode ROM and complex decode hardware; simplifies assembly programming at the expense of silicon area and power dissipation.",
    "keyPoints": [
      "RISC simple fixed instructions vs CISC complex variable instructions",
      "Load/Store architecture in RISC vs direct memory operands in CISC",
      "Single-cycle pipelined execution vs multi-cycle microcoded instructions",
      "Compiler optimization focus (RISC) vs hardware decode complexity (CISC)"
    ],
    "rubric": [
      {
        "criteria": "Compares instruction set format & memory access",
        "points": 1.5
      },
      {
        "criteria": "Compares execution cycles & pipelining",
        "points": 1.5
      },
      {
        "criteria": "Compares hardware complexity vs compiler role",
        "points": 2
      }
    ],
    "topic": "RISC vs CISC"
  },
  {
    "id": "s3-essay-3",
    "num": 3,
    "question": "Explain the concept of Endianness. Given the 32-bit integer hexadecimal value 0x12345678, illustrate byte by byte how it is stored in memory starting at address 0x2000 in both Little-Endian and Big-Endian architectures.",
    "maxPoints": 5,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "modelAnswer": "Endianness defines the ordering convention used to store multi-byte numbers in byte-addressable computer memory.\nValue: 0x12345678 (MSB = 0x12, LSB = 0x78)\n\n1. Little-Endian Architecture:\nThe Least Significant Byte (LSB) is stored at the lowest address (base address).\n- Address 0x2000: 0x78 (LSB)\n- Address 0x2001: 0x56\n- Address 0x2002: 0x34\n- Address 0x2003: 0x12 (MSB)\n(Common in ARM Cortex-M default and x86).\n\n2. Big-Endian Architecture:\nThe Most Significant Byte (MSB) is stored at the lowest address (base address).\n- Address 0x2000: 0x12 (MSB)\n- Address 0x2001: 0x34\n- Address 0x2002: 0x56\n- Address 0x2003: 0x78 (LSB)\n(Common in TCP/IP network protocol byte order).",
    "keyPoints": [
      "Definition of Endianness for multi-byte values",
      "Little-Endian: LSB at lowest address (0x78, 0x56, 0x34, 0x12)",
      "Big-Endian: MSB at lowest address (0x12, 0x34, 0x56, 0x78)",
      "Real-world architecture and network protocol citations"
    ],
    "rubric": [
      {
        "criteria": "Accurate definition of Endianness",
        "points": 1
      },
      {
        "criteria": "Correct Little-Endian memory layout with addresses",
        "points": 2
      },
      {
        "criteria": "Correct Big-Endian memory layout with addresses",
        "points": 2
      }
    ],
    "topic": "Endianness"
  },
  {
    "id": "s3-essay-4",
    "num": 4,
    "question": "Describe the operational design of an Optocoupler circuit. Why is it utilized to interface an MCU with an inductive AC or DC motor load?",
    "maxPoints": 5,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "modelAnswer": "An Optocoupler (opto-isolator) consists of an infrared Gallium Arsenide LED and a silicon phototransistor sealed within an optically transparent, electrically insulating package.\n\nCircuit Operation:\n1. An MCU digital output pin sources or sinks current through a current-limiting resistor to energize the internal IR LED.\n2. The emitted photons travel across an internal dielectric barrier and strike the base region of the phototransistor, generating electron-hole pairs that switch the transistor ON.\n3. The phototransistor conducts current in the secondary, driving the motor driver or relay coil.\n\nImportance with Inductive Loads:\nInductive motor coils produce massive negative-going flyback voltage spikes (back-EMF = -L * di/dt) upon switching off. Galvanic isolation prevents these high-voltage transients and electrical ground bounce noise from traversing back to the microcontroller, eliminating processor latch-up and brown-out resets.",
    "keyPoints": [
      "Construction: IR LED + phototransistor across optical barrier",
      "Signal transmission via light photons with complete galvanic isolation",
      "Inductive flyback back-EMF spikes (-L * di/dt)",
      "Protection against MCU latch-up and ground noise"
    ],
    "rubric": [
      {
        "criteria": "Explains internal optocoupler components and operation",
        "points": 2
      },
      {
        "criteria": "Explains inductive back-EMF mechanism",
        "points": 1.5
      },
      {
        "criteria": "Explains protection of low-voltage MCU logic",
        "points": 1.5
      }
    ],
    "topic": "Circuit Isolation"
  },
  {
    "id": "s3-essay-5",
    "num": 5,
    "question": "Explain the difference between Common Anode and Common Cathode 7-segment LED display configurations, and deduce the binary byte required to display the digit '1' in a Common Cathode configuration (segments a through g).",
    "maxPoints": 5,
    "sheet": 3,
    "lecture": "Week 03 - Lecture 3",
    "modelAnswer": "1. Common Anode (CA):\nThe anodes of all eight LED segments (a, b, c, d, e, f, g, and decimal point dp) are connected to a common +VCC rail. An individual segment illuminates when its cathode is driven LOW (Logic 0 / 0V).\n\n2. Common Cathode (CC):\nThe cathodes of all eight LED segments are tied to a common Ground (0V). An individual segment illuminates when its anode is driven HIGH (Logic 1 / +5V).\n\nDisplaying Digit '1' on Common Cathode Display:\nStandard 7-segment mapping: Digit '1' requires illuminating segments 'b' and 'c' only; segments a, d, e, f, g, and dp are OFF.\nBit order [dp, g, f, e, d, c, b, a]:\n- a = 0\n- b = 1\n- c = 1\n- d = 0\n- e = 0\n- f = 0\n- g = 0\n- dp = 0\nBinary Pattern: 0000 0110_2 = 0x06 (Hexadecimal).",
    "keyPoints": [
      "CA: Anodes tied to VCC, active LOW (0 lights segment)",
      "CC: Cathodes tied to GND, active HIGH (1 lights segment)",
      "Digit '1' requires segments b and c active",
      "Binary: 0b00000110 (Hex 0x06)"
    ],
    "rubric": [
      {
        "criteria": "Explains Common Anode electrical setup & logic",
        "points": 1.5
      },
      {
        "criteria": "Explains Common Cathode electrical setup & logic",
        "points": 1.5
      },
      {
        "criteria": "Correct segment identification and hex/binary value (0x06)",
        "points": 2
      }
    ],
    "topic": "Displays & Decoding"
  },
  {
    "id": "s4-essay-1",
    "num": 1,
    "question": "Describe the complete signal flow in an embedded system from a real-world physical quantity to execution within the MCU ALU.",
    "maxPoints": 5,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "modelAnswer": "1. Physical Domain: The environment contains a physical phenomenon (e.g. ambient temperature or soil moisture).\n2. Transduction (Sensor): A sensor (e.g. thermistor or POT-HG) converts the physical parameter into a continuously varying analog electrical signal (voltage/current).\n3. Signal Conditioning: Amplifiers or low-pass filter circuits eliminate high-frequency noise and scale the signal to match the MCU ADC range (e.g. 0 to 3.3V/5V).\n4. Analog-to-Digital Conversion (ADC): The ADC samples the continuous voltage and quantizes it into a discrete digital binary representation (e.g. 10-bit value 0\u20131023).\n5. Digital Bus & Registers: The binary word is stored in an ADC data register and loaded into MCU general-purpose registers via internal data buses.\n6. ALU Processing: The Arithmetic Logic Unit (ALU), using cascaded Full Adders and logic gates, executes firmware comparisons or threshold algorithms to trigger output decisions.",
    "keyPoints": [
      "Physical parameter detection",
      "Sensor transduction to analog voltage",
      "Signal conditioning / filtering",
      "ADC sampling and quantization",
      "Register storage via internal buses",
      "ALU logic processing and decision"
    ],
    "rubric": [
      {
        "criteria": "Explains sensor transduction and signal conditioning",
        "points": 1.75
      },
      {
        "criteria": "Explains ADC sampling & quantization process",
        "points": 1.75
      },
      {
        "criteria": "Explains ALU execution and register flow",
        "points": 1.5
      }
    ],
    "topic": "Signal Flow"
  },
  {
    "id": "s4-essay-2",
    "num": 2,
    "question": "Compare a Half Adder and a Full Adder. State their respective inputs, outputs, truth tables, and Boolean equations.",
    "maxPoints": 5,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "modelAnswer": "1. Half Adder:\n- Inputs: 2 single-bit operands (A, B).\n- Outputs: Sum (S), Carry (C).\n- Boolean Equations:\n  * Sum: S = A \u2295 B\n  * Carry: C = A \u00b7 B\n- Limitation: Cannot accept a carry from a preceding stage; can only be used for the least significant bit (LSB).\n\n2. Full Adder:\n- Inputs: 3 inputs: 2 operand bits (A, B) and a Carry-In (Cin) from the lower stage.\n- Outputs: Sum (S), Carry-Out (Cout).\n- Boolean Equations:\n  * Sum: S = A \u2295 B \u2295 Cin\n  * Carry-Out: Cout = (A \u00b7 B) + (Cin \u00b7 (A \u2295 B)) [or AB + BCin + ACin]\n- Capability: Can be cascaded into an n-bit ripple-carry adder to perform arbitrary multi-byte integer addition inside an MCU ALU.",
    "keyPoints": [
      "Half Adder: 2 inputs (A, B); S = A\u2295B, C = A\u00b7B",
      "Full Adder: 3 inputs (A, B, Cin); S = A\u2295B\u2295Cin, Cout = AB + Cin(A\u2295B)",
      "Full Adder supports cascading for n-bit arithmetic"
    ],
    "rubric": [
      {
        "criteria": "Half Adder inputs, outputs & equations",
        "points": 2
      },
      {
        "criteria": "Full Adder inputs, outputs & equations",
        "points": 2
      },
      {
        "criteria": "Explains cascading capability in ALUs",
        "points": 1
      }
    ],
    "topic": "Binary Adders"
  },
  {
    "id": "s4-essay-3",
    "num": 3,
    "question": "Explain how bitwise operations (AND, OR, XOR, NOT) are used in microcontroller C programming to manipulate individual hardware registers without affecting other bits.",
    "maxPoints": 5,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "modelAnswer": "Microcontroller peripherals are controlled by memory-mapped registers where each bit controls a distinct hardware function (e.g. pin direction, interrupt enable).\n\n1. Setting a Bit (Bitwise OR with 1):\nFormula: `REG |= (1 << n);`\nTruth table property: `x | 1 = 1`, and `x | 0 = x`. Forces bit n to 1 while leaving all other bits completely unchanged.\n\n2. Clearing a Bit (Bitwise AND with NOT):\nFormula: `REG &= ~(1 << n);`\nTruth table property: `x & 0 = 0`, and `x & 1 = x`. `~(1<<n)` creates a mask with 0 at bit n and 1 everywhere else, forcing bit n to 0 without disturbing adjacent bits.\n\n3. Toggling a Bit (Bitwise XOR with 1):\nFormula: `REG ^= (1 << n);`\nTruth table property: `0 ^ 1 = 1`, and `1 ^ 1 = 0`. Inverts bit n on every execution (ideal for blinking LEDs).\n\n4. Testing / Reading a Bit (Bitwise AND):\nFormula: `if (REG & (1 << n))`\nIsolates bit n to check if an input pin is HIGH or an interrupt flag is set.",
    "keyPoints": [
      "Setting bits with `|= (1<<n)`",
      "Clearing bits with `&= ~(1<<n)`",
      "Toggling bits with `^= (1<<n)`",
      "Testing bits with `& (1<<n)`"
    ],
    "rubric": [
      {
        "criteria": "Explains Setting bits with OR syntax and logic",
        "points": 1.25
      },
      {
        "criteria": "Explains Clearing bits with AND/NOT syntax and logic",
        "points": 1.25
      },
      {
        "criteria": "Explains Toggling bits with XOR syntax and logic",
        "points": 1.25
      },
      {
        "criteria": "Explains Testing bits with AND mask",
        "points": 1.25
      }
    ],
    "topic": "Register Bitwise Manipulation"
  },
  {
    "id": "s4-essay-4",
    "num": 4,
    "question": "Simplify the following Boolean expression step-by-step using Boolean algebra theorems: F = A\u00b7B\u00b7C + A\u00b7B\u00b7C' + A'\u00b7B\u00b7C.",
    "maxPoints": 5,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "modelAnswer": "Expression: F = A\u00b7B\u00b7C + A\u00b7B\u00b7C' + A'\u00b7B\u00b7C\n\nStep 1 (Factoring first two terms):\nNotice that the first two terms share common factor (A\u00b7B):\nA\u00b7B\u00b7C + A\u00b7B\u00b7C' = A\u00b7B\u00b7(C + C')\n\nStep 2 (Complement Law):\nSince C + C' = 1:\nA\u00b7B\u00b7(1) = A\u00b7B\n\nStep 3 (Recombining):\nNow the expression becomes: F = A\u00b7B + A'\u00b7B\u00b7C\n\nStep 4 (Factoring out B):\nFactor common variable B:\nF = B\u00b7(A + A'\u00b7C)\n\nStep 5 (Distributive / Redundancy Law):\nUsing the Boolean identity A + A'\u00b7C = (A + A')\u00b7(A + C) = 1\u00b7(A + C) = A + C:\nF = B\u00b7(A + C)\n\nStep 6 (Final SOP Form):\nF = A\u00b7B + B\u00b7C\n\nConclusion: The original 3-term, 9-literal expression simplifies to 2 terms with 4 literals, eliminating one full AND gate and several gate inputs.",
    "keyPoints": [
      "Factor A\u00b7B from first two terms",
      "Apply C + C' = 1 to get A\u00b7B",
      "Factor B to get B(A + A'C)",
      "Apply absorption/distributive identity to arrive at A\u00b7B + B\u00b7C"
    ],
    "rubric": [
      {
        "criteria": "Correct grouping of terms",
        "points": 1.5
      },
      {
        "criteria": "Application of complement and identity laws",
        "points": 2
      },
      {
        "criteria": "Correct final simplified expression (AB + BC or B(A+C))",
        "points": 1.5
      }
    ],
    "topic": "Boolean Simplification"
  },
  {
    "id": "s4-essay-5",
    "num": 5,
    "question": "What is the function of a Multiplexer (MUX)? Explain how pin multiplexing allows an MCU with only 48 physical pins to provide over 100 peripheral signal connections.",
    "maxPoints": 5,
    "sheet": 4,
    "lecture": "Week 04 - Lecture 4",
    "slideTitle": "Pin Multiplexing",
    "modelAnswer": "A Multiplexer (MUX) is a combinational digital circuit with 2^n data input lines, n selector lines, and 1 output line. It routes one of the input lines to the common output based on the binary combination on the selector lines.\n\nPin Multiplexing in Microcontrollers:\nMicrocontrollers face strict physical package pin constraints (e.g., 28-pin DIP, 48-pin or 64-pin LQFP) to maintain compact board size and low fabrication cost, yet modern MCUs contain dozens of on-chip peripherals (multiple UARTs, SPI buses, I2C controllers, PWM channels, ADC inputs, timers, and GPIO ports).\n\nSolution Mechanism:\nInstead of assigning a dedicated physical pin to every peripheral, each physical package pin is wired to the output of an internal multiplexer. Configuration registers (such as the Port Control Register `GPIOPCTL` and Alternate Function Select `GPIOAFSEL` in ARM Cortex-M) serve as the selector lines. Software configures these registers during boot to assign each pin its specific role (e.g. Pin PA0 can be selected as GPIO, UART0_RX, or CAN0_Rx), enabling over 100 functional signals to share 48 physical pins.",
    "keyPoints": [
      "Definition of MUX (2^n inputs, n select lines, 1 output)",
      "Physical package constraints vs numerous on-chip peripherals",
      "Internal MUX routes peripheral to shared physical pin",
      "Configured via registers (e.g. GPIOAFSEL/GPIOPCTL in ARM)"
    ],
    "rubric": [
      {
        "criteria": "Clear definition of Multiplexer circuit",
        "points": 1.5
      },
      {
        "criteria": "Explains pin constraint problem in modern MCUs",
        "points": 1.5
      },
      {
        "criteria": "Explains register-based peripheral routing mechanism",
        "points": 2
      }
    ],
    "topic": "Pin Multiplexing"
  },
  {
    "id": "s5-essay-1",
    "num": 1,
    "question": "Contrast the three ARM Cortex processor profiles: Cortex-A, Cortex-R, and Cortex-M. Provide the primary optimization and one typical application for each.",
    "maxPoints": 5,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "modelAnswer": "1. ARM Cortex-A (Application Profile):\n- Optimization: High computational throughput, advanced pipelining, multi-core symmetrical multiprocessing (SMP), and full Memory Management Units (MMU) for virtual memory.\n- Target Applications: Smartphones, tablets, enterprise servers, and single-board computers (e.g. Raspberry Pi running Linux, Android).\n\n2. ARM Cortex-R (Real-Time Profile):\n- Optimization: High performance paired with deterministic execution timing, low interrupt latency, tightly coupled memory (TCM), and hardware fault-tolerant lockstep operation.\n- Target Applications: Automotive powertrain/braking systems, medical life-support instrumentation, and hard disk/modem controllers.\n\n3. ARM Cortex-M (Microcontroller Profile):\n- Optimization: Deterministic interrupt handling (integrated NVIC), small silicon area, ultra-low standby power, and single-cycle register I/O without MMU overhead.\n- Target Applications: Internet of Things (IoT) sensor nodes, smart home appliances, industrial motor control, and automotive body electronics (e.g. TM4C123, STM32).",
    "keyPoints": [
      "Cortex-A: High performance, MMU, rich OS (Linux/Android)",
      "Cortex-R: Deterministic real-time, low latency, safety-critical",
      "Cortex-M: Low cost/power, integrated NVIC, microcontrollers"
    ],
    "rubric": [
      {
        "criteria": "Explains Cortex-A optimization and application",
        "points": 1.75
      },
      {
        "criteria": "Explains Cortex-R optimization and application",
        "points": 1.75
      },
      {
        "criteria": "Explains Cortex-M optimization and application",
        "points": 1.5
      }
    ],
    "topic": "Cortex Profiles"
  },
  {
    "id": "s5-essay-2",
    "num": 2,
    "question": "Write a complete C code initialization sequence for Texas Instruments TM4C123GH6PM to configure Port F Pins 1, 2, and 3 (RGB LEDs) as digital outputs. Include clock gating and stabilization delay.",
    "maxPoints": 5,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "modelAnswer": "```c\n// TM4C123 Port F Initialization for On-Board RGB LEDs (PF1=Red, PF2=Blue, PF3=Green)\n#define SYSCTL_RCGCGPIO_R  (*((volatile unsigned long *)0x400FE608))\n#define GPIO_PORTF_DIR_R   (*((volatile unsigned long *)0x40025400))\n#define GPIO_PORTF_DEN_R   (*((volatile unsigned long *)0x4002551C))\n#define GPIO_PORTF_AFSEL_R (*((volatile unsigned long *)0x40025420))\n#define GPIO_PORTF_AMSEL_R (*((volatile unsigned long *)0x40025528))\n#define GPIO_PORTF_PCTL_R  (*((volatile unsigned long *)0x4002552C))\n\nvoid PortF_Init(void) {\n    volatile unsigned long delay;\n    \n    // 1. Enable Run-Mode Clock for Port F (Bit 5 = 0x20)\n    SYSCTL_RCGCGPIO_R |= 0x20;\n    \n    // 2. Allow clock stabilization delay (at least 3-5 clock cycles)\n    delay = SYSCTL_RCGCGPIO_R;\n    \n    // 3. Disable analog mode on PF1-PF3\n    GPIO_PORTF_AMSEL_R &= ~0x0E;\n    \n    // 4. Configure PF1-PF3 for regular GPIO (clear alternate function)\n    GPIO_PORTF_PCTL_R &= ~0x0000FFF0;\n    GPIO_PORTF_AFSEL_R &= ~0x0E;\n    \n    // 5. Set direction: PF1, PF2, PF3 as outputs (1), others unchanged\n    GPIO_PORTF_DIR_R |= 0x0E;   // Bits 1, 2, 3 = 1\n    \n    // 6. Enable digital functionality on PF1, PF2, PF3\n    GPIO_PORTF_DEN_R |= 0x0E;\n}\n```",
    "keyPoints": [
      "Enable clock in RCGCGPIO (Bit 5 for Port F)",
      "Add mandatory clock stabilization delay",
      "Disable analog mode in AMSEL",
      "Clear alternate function select in AFSEL and PCTL",
      "Set direction in GPIODIR to 0x0E (outputs)",
      "Enable digital pins in GPIODEN to 0x0E"
    ],
    "rubric": [
      {
        "criteria": "Enables clock and adds stabilization delay",
        "points": 1.5
      },
      {
        "criteria": "Configures direction register (GPIODIR)",
        "points": 1.5
      },
      {
        "criteria": "Enables digital functionality (GPIODEN) and clears analog/alternate functions",
        "points": 2
      }
    ],
    "topic": "GPIO Initialization Routine"
  },
  {
    "id": "s5-essay-3",
    "num": 3,
    "question": "Explain the concept and formula of ARM Bit-Banding. Calculate the alias address for bit 3 of a peripheral register located at base address 0x40025400.",
    "maxPoints": 5,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "modelAnswer": "Concept of Bit-Banding:\nBit-banding maps each individual bit in a 1 MB SRAM or Peripheral bit-band memory region to a unique 32-bit word in a 32 MB 'alias' memory region. Writing a 1 or 0 to this 32-bit alias word atomically updates the targeted single bit in the hardware register, eliminating software read-modify-write sequences and preventing race conditions during interrupt preemption.\n\nBit-Band Formula:\n`Alias_Address = Alias_Base + (Byte_Offset * 32) + (Bit_Number * 4)`\n\nFor Peripheral Space:\n- Peripheral Bit-Band Base: `0x40000000`\n- Peripheral Alias Base: `0x42000000`\n\nGiven Register Address = `0x40025400`, Bit = 3:\n1. Byte_Offset = `0x40025400 - 0x40000000 = 0x00025400`\n2. Byte_Offset * 32 = `0x25400 * 0x20 = 0x4A8000`\n3. Bit_Number * 4 = `3 * 4 = 12 = 0x0C`\n4. Alias_Address = `0x42000000 + 0x4A8000 + 0x0C = 0x424A800C`.\n\nWriting 1 to address `0x424A800C` atomically sets bit 3 of `0x40025400`.",
    "keyPoints": [
      "Definition of bit-banding as 32-bit word alias to single bit",
      "Formula: Alias = Alias_Base + (Byte_Offset * 32) + (Bit_Number * 4)",
      "Peripheral Alias Base = 0x42000000",
      "Correct numerical calculation yielding 0x424A800C"
    ],
    "rubric": [
      {
        "criteria": "Explains concept of bit-banding & atomic benefit",
        "points": 2
      },
      {
        "criteria": "States general calculation formula",
        "points": 1.5
      },
      {
        "criteria": "Correct step-by-step math producing 0x424A800C",
        "points": 1.5
      }
    ],
    "topic": "Bit-Banding Mathematics"
  },
  {
    "id": "s5-essay-4",
    "num": 4,
    "question": "What is the function of the GPIOLOCK and GPIOCR registers in TM4C123, and why are pins PD7 and PF0 specifically locked upon power-up?",
    "maxPoints": 5,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "modelAnswer": "Function of GPIOLOCK and GPIOCR:\nIn the TM4C123GH6PM, the GPIO Commit Register (`GPIOCR`) controls write access to critical pin configuration registers (such as `GPIOAFSEL`, `GPIOPUR`, `GPIOPDR`, and `GPIODEN`). To prevent accidental software corruption of sensitive pins, `GPIOCR` is write-protected by the `GPIOLOCK` register.\n\nTo unlock a locked pin:\n1. Software must write the magic unlock key `0x4C4F434B` to `GPIO_PORTx_LOCK_R`.\n2. Software then sets the corresponding bit in `GPIO_PORTx_CR_R` to 1, committing subsequent writes.\n\nWhy PD7 and PF0 are Locked by Default:\n- `PD7` is defaulted to the Non-Maskable Interrupt (`NMI`) input.\n- `PF0` on Port F is also multiplexed with the `NMI` input function.\nBecause accidentally reconfiguring an NMI line as a standard GPIO could prevent the microcontroller from servicing critical hardware fault conditions or freeze the debugger, Texas Instruments intentionally locks PD7 and PF0 upon hardware reset.",
    "keyPoints": [
      "GPIOLOCK write-protects GPIOCR",
      "Magic unlock key 0x4C4F434B",
      "GPIOCR commits changes to critical registers",
      "PD7 and PF0 default to NMI (Non-Maskable Interrupt)",
      "Protection prevents disabling critical hardware fault detection"
    ],
    "rubric": [
      {
        "criteria": "Explains role of GPIOLOCK and magic key",
        "points": 1.5
      },
      {
        "criteria": "Explains role of GPIOCR in committing configuration",
        "points": 1.5
      },
      {
        "criteria": "Explains why PD7 and PF0 are locked (NMI protection)",
        "points": 2
      }
    ],
    "topic": "Pin Locking & NMI Protection"
  },
  {
    "id": "s5-essay-5",
    "num": 5,
    "question": "Explain how GPIO data register address masking operates in TM4C123GH6PM to allow atomic bit updates.",
    "maxPoints": 5,
    "sheet": 5,
    "lecture": "Week 06 - Lecture 5",
    "modelAnswer": "Address Masking Mechanism:\nIn the TM4C123GH6PM, the GPIO Data Register (`GPIODATA`) uses a unique hardware address masking scheme. The register occupies an entire address block of 256 words (`0x000` to `0x3FC`). Bits [9:2] of the address bus serve as an 8-bit mask that determines which of the 8 port pins are affected by a read or write operation.\n\nOperational Rules:\n1. Address bit [2] controls access to Pin 0, bit [3] controls Pin 1, ..., bit [9] controls Pin 7.\n2. When writing to an address, only the pins corresponding to '1' bits in address lines [9:2] are updated; pins corresponding to '0' bits retain their previous state completely undisturbed.\n\nExample:\nTo write only to Pin 1 and Pin 2 of Port F:\n- Mask = Bits 1 and 2 = `(1<<1) | (1<<2) = 0x06`.\n- Address offset = Mask shifted left by 2 bits = `0x06 << 2 = 0x18`.\n- Access Address = Base (`0x40025000`) + Offset (`0x18`) = `0x40025018`.\nWriting to `*((volatile unsigned long *)0x40025018)` modifies only PF1 and PF2 in a single atomic instruction without needing a software read-modify-write sequence.",
    "keyPoints": [
      "GPIODATA occupies 256-word address block",
      "Address bus bits [9:2] act as write/read bitmask",
      "Only masked pins are modified; unmasked pins untouched",
      "Enables atomic pin updates without software read-modify-write"
    ],
    "rubric": [
      {
        "criteria": "Explains address bits [9:2] bitmask principle",
        "points": 2
      },
      {
        "criteria": "Explains atomic update without read-modify-write",
        "points": 1.5
      },
      {
        "criteria": "Provides concrete address calculation example",
        "points": 1.5
      }
    ],
    "topic": "GPIODATA Address Masking"
  }
];

export interface SheetBundle {
  id: string;
  title: string;
  shortTitle: string;
  metadata: ExamMetadata;
  mcq: MCQQuestion[];
  tf: TrueFalseQuestion[];
  essay: EssayQuestion[];
}

export const AVAILABLE_SHEETS: SheetBundle[] = [
  {
    id: "comprehensive",
    title: "All Sheets Comprehensive Mock Exam",
    shortTitle: "All Sheets Exam",
    metadata: COMPREHENSIVE_EXAM_METADATA,
    mcq: ALL_MCQ_QUESTIONS,
    tf: ALL_TF_QUESTIONS,
    essay: ALL_ESSAY_QUESTIONS
  },
  {
    id: "sheet-1",
    title: "Sheet 1: Intro to Embedded Systems",
    shortTitle: "Sheet 1 (Week 1)",
    metadata: SHEET_1_METADATA,
    mcq: SHEET_1_MCQ,
    tf: SHEET_1_TF,
    essay: SHEET_1_ESSAY
  },
  {
    id: "sheet-2",
    title: "Sheet 2: Purposes & Characteristics",
    shortTitle: "Sheet 2 (Week 2)",
    metadata: SHEET_2_METADATA,
    mcq: SHEET_2_MCQ,
    tf: SHEET_2_TF,
    essay: SHEET_2_ESSAY
  },
  {
    id: "sheet-3",
    title: "Sheet 3: Processors & DSPs",
    shortTitle: "Sheet 3 (Week 3)",
    metadata: SHEET_3_METADATA,
    mcq: SHEET_3_MCQ,
    tf: SHEET_3_TF,
    essay: SHEET_3_ESSAY
  },
  {
    id: "sheet-4",
    title: "Sheet 4: Digital Circuit Design & Optimization",
    shortTitle: "Sheet 4 (Week 4)",
    metadata: SHEET_4_METADATA,
    mcq: SHEET_4_MCQ,
    tf: SHEET_4_TF,
    essay: SHEET_4_ESSAY
  },
  {
    id: "sheet-5",
    title: "Sheet 5: ARM Architecture & TM4C123",
    shortTitle: "Sheet 5 (Week 6)",
    metadata: SHEET_5_METADATA,
    mcq: SHEET_5_MCQ,
    tf: SHEET_5_TF,
    essay: SHEET_5_ESSAY
  }
];
