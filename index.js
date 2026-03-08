// Cyber Enthusiast Animation
// A cyberpunk-themed console animation

const crypto = require('crypto');
const os = require('os');

// ANSI color codes
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    green: '\x1b[32m',
    cyan: '\x1b[36m',
    magenta: '\x1b[35m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    blue: '\x1b[34m'
};

// Clear screen function
function clearScreen() {
    console.clear();
}

// Matrix rain characters
const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%^&*()';

// ASCII Art Banner
const banner = `
${colors.green}${colors.bright}
██████╗ ███████╗ █████╗ ██████╗     ███████╗██╗  ██╗ █████╗ ██████╗  ██████╗ █████╗ ██████╗ ███████╗
██╔══██╗██╔════╝██╔══██╗██╔══██╗    ██╔════╝██║  ██║██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗██╔════╝
██████╔╝█████╗  ███████║██║  ██║    ███████╗███████║███████║██║  ██║██║     ███████║██║  ██║█████╗  
██╔══██╗██╔══╝  ██╔══██║██║  ██║    ╚════██║██╔══██║██╔══██║██║  ██║██║     ██╔══██║██║  ██║██╔══╝  
██║  ██║███████╗██║  ██║██████╔╝    ███████║██║  ██║██║  ██║██████╔╝╚██████╗██║  ██║██████╔╝███████╗
╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝     ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝╚═╝  ╚═╝╚═════╝ ╚══════╝
${colors.reset}
${colors.cyan}                    >>> CYBER ENTHUSIAST SYSTEM <<<${colors.reset}
`;

// Typing effect function
function typeText(text, delay = 50) {
    return new Promise(resolve => {
        let i = 0;
        const interval = setInterval(() => {
            process.stdout.write(text[i]);
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
}

// Matrix rain effect
function matrixRain(duration = 3000) {
    return new Promise(resolve => {
        const width = process.stdout.columns || 80;
        const height = process.stdout.rows || 24;
        const drops = Array(width).fill(0);
        const startTime = Date.now();
        
        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            if (elapsed > duration) {
                clearInterval(interval);
                resolve();
                return;
            }
            
            // Semi-transparent black to create trail effect
            process.stdout.write('\x1b[2J\x1b[H');
            
            for (let x = 0; x < width; x++) {
                let row = '';
                for (let y = 0; y < height; y++) {
                    const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
                    const color = Math.random() > 0.9 ? colors.green : colors.dim + colors.green;
                    row += color + char + colors.reset;
                }
                process.stdout.write(row + '\n');
            }
            
            // Update drops
            for (let i = 0; i < drops.length; i++) {
                if (Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }, 100);
    });
}

// Cyber system info
function displaySystemInfo() {
    const systemInfo = [
        `${colors.yellow}[SYSTEM]${colors.reset} Hostname: ${colors.cyan}${os.hostname()}${colors.reset}`,
        `${colors.yellow}[SYSTEM]${colors.reset} Platform: ${colors.cyan}${os.platform()}${colors.reset}`,
        `${colors.yellow}[SYSTEM]${colors.reset} Architecture: ${colors.cyan}${os.arch()}${colors.reset}`,
        `${colors.yellow}[SYSTEM]${colors.reset} CPU Cores: ${colors.cyan}${os.cpus().length}${colors.reset}`,
        `${colors.yellow}[SYSTEM]${colors.reset} Total Memory: ${colors.cyan}${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB${colors.reset}`,
        `${colors.yellow}[SYSTEM]${colors.reset} Free Memory: ${colors.cyan}${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB${colors.reset}`,
        `${colors.yellow}[SYSTEM]${colors.reset} Uptime: ${colors.cyan}${os.uptime()} seconds${colors.reset}`,
    ];
    
    systemInfo.forEach((info, index) => {
        setTimeout(() => console.log(info), index * 150);
    });
}

// Encryption demo
function encryptionDemo() {
    console.log(`\n${colors.magenta}${colors.bright}>>> ENCRYPTION DEMO <<<${colors.reset}`);
    
    const plaintext = "Hello, Cyber World!";
    const algorithm = 'aes-256-cbc';
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);
    
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(plaintext, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    
    console.log(`${colors.green}[ENCRYPT]${colors.reset} Plaintext: ${colors.cyan}${plaintext}${colors.reset}`);
    console.log(`${colors.green}[ENCRYPT]${colors.reset} Encrypted: ${colors.yellow}${encrypted}${colors.reset}`);
    
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    
    console.log(`${colors.green}[DECRYPT]${colors.reset} Decrypted: ${colors.cyan}${decrypted}${colors.reset}`);
}

// Hash generation
function hashDemo() {
    console.log(`\n${colors.magenta}${colors.bright}>>> HASH GENERATION <<<${colors.reset}`);
    
    const data = "cyber_enthusiast_2024";
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    
    console.log(`${colors.cyan}[HASH]${colors.reset} Input: ${colors.yellow}${data}${colors.reset}`);
    console.log(`${colors.cyan}[HASH]${colors.reset} SHA-256: ${colors.green}${hash}${colors.reset}`);
}

// Cyber quotes
const cyberQuotes = [
    "The only truly secure system is one that is powered off.",
    "Information wants to be free.",
    "Hack the planet!",
    "In cyberspace, reputation is everything.",
    "Security is not a product, but a process.",
    "Every system is a target.",
    "Knowledge is power.",
    "Code is poetry.",
    "Stay paranoid and keep evolving."
];

function displayQuote() {
    const quote = cyberQuotes[Math.floor(Math.random() * cyberQuotes.length)];
    console.log(`\n${colors.blue}${colors.bright}╔════════════════════════════════════════════════╗${colors.reset}`);
    console.log(`${colors.blue}${colors.bright}║${colors.reset} ${colors.cyan}▸ ${quote}${colors.reset}`);
    console.log(`${colors.blue}${colors.bright}╚════════════════════════════════════════════════╝${colors.reset}`);
}

// Main animation sequence
async function runCyberAnimation() {
    // Initial delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    clearScreen();
    console.log(banner);
    
    // Type effect intro
    console.log(`\n${colors.yellow}[INIT]${colors.reset} Initializing cyber system...`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log(`${colors.green}[OK]${colors.reset} Loading modules...`);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    console.log(`${colors.green}[OK]${colors.reset} Establishing secure connection...`);
    await new Promise(resolve => setTimeout(resolve, 600));
    
    console.log(`${colors.green}[OK]${colors.reset} System online!\n`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Display system info
    console.log(`${colors.red}${colors.bright}>>> SYSTEM INFORMATION <<<${colors.reset}\n`);
    displaySystemInfo();
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Encryption demo
    await new Promise(resolve => setTimeout(resolve, 500));
    encryptionDemo();
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Hash demo
    hashDemo();
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Display random quote
    displayQuote();
    
    // Footer
    console.log(`\n${colors.cyan}${colors.bright}═══════════════════════════════════════════════════${colors.reset}`);
    console.log(`${colors.green}${colors.bright}       © 2024 CYBER ENTHUSIAST | STAY SECURE ${colors.reset}`);
    console.log(`${colors.cyan}${colors.bright}═══════════════════════════════════════════════════${colors.reset}\n`);
}

// Run the animation
runCyberAnimation().then(() => {
    console.log(`${colors.dim}Press Ctrl+C to exit...${colors.reset}`);
}).catch(err => {
    console.error('Animation error:', err);
});

