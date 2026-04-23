// ==========================================
// CONFIGURATION FILE
// ==========================================
// Update this file to change campaign progress and settings

// Campaign Settings
const CONFIG = {
    // Current amount raised (in EUR)
    amountRaised: 11560,
    
    // Total goal (in EUR)
    totalGoal: 35000,    
    
    // Bank Details for Individual Donations
    bankDetails: {
        beneficiary: "Asociația Mâini Unite",
        iban: "RO66BTRLRONCRT0CX2126106",
        bank: "Banca Transilvania",
        details: "roboDIEM la mondiale"
    },
    
    // Show/Hide Events Section
    showEvents: false,
    
    // Donors/Sponsors List
    // Add company sponsors here
    donors: [
        {
            name: "HMS Networks",
            tier: "Nivel 1 - Primele Roțițe",
            logoPath: "assets/sponsors/hms_logo.png",
            link: "https://www.hms-networks.com/"
        },
        {
            name: "Ramada Sibiu",
            tier: "Nivel 3 - Motor",
            logoPath: "assets/sponsors/ramada.webp",
            link: "https://www.wyndhamhotels.com/ramada/sibiu-romania/ramada-sibiu/overview"
        }
        // Example:
        // {
        //     name: "Company Name",
        //     tier: "Nivel 1 - Primele Roțițe",
        //     logoPath: "path/to/logo.png",
        //     link: "https://example.com" // Optional: clicking the card opens this link
        // }
    ],
    
    // Events List
    // Add events here
    events: [
        {
            day: "15",
            month: "APR",
            title: "Ziua Porților Deschise la Robo DIEM",
            description: "Vino să ne vizitezi la sediul nostru din Sibiu și să vezi cum lucrăm la proiectul nostru pentru competiția FIRST LEGO League! <br/>Location: Strada Robotului nr. 10, Sibiu"
        }
        // Example:
        // {
        //     day: "15",
        //     month: "APR",
        //     title: "Exemplu Eveniment",
        //     description: "Descriere eveniment - Location"
        // }
    ]
};
