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
            name: "Ramada Sibiu",
            //tier: "Motor",
            logoPath: "assets/sponsors/ramada_logo.png",
            link: "https://www.wyndhamhotels.com/ramada/sibiu-romania/ramada-sibiu/overview"
        },
        {
            name: "IT Perspectives",
            //tier: "Motor",
            logoPath: "assets/sponsors/itp_logo.png",
            link: "https://www.itperspectives.com/"
        },
        {
            name: "Tello",
            //tier: "Motor",
            logoPath: "assets/sponsors/tello_logo.png",
            link: "https://www.tello.com/"
        },
        {
            name: "Mâini Unite",
            //tier: "Motor",
            logoPath: "assets/sponsors/maini_unite_logo.png",
            link: "https://www.facebook.com/MainiUnite/"
        },
        {
            name: "Rotary Sibiu",
            //tier: "Motor",
            logoPath: "assets/sponsors/rotary_logo.png",
            link: "https://www.facebook.com/RotaryClubSibiu/"
        },
        {
            name: "HMS Networks",
            //tier: "Primele Roțițe",
            logoPath: "assets/sponsors/hms_logo.png",
            link: "https://www.hms-networks.com/"
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
