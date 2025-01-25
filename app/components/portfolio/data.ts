export interface _links { 
    slug:string,
    name:string, 
    icon:string, 
    desc:string, 
    link:string, 
    year?:number,
    imageUrl?:string[],
    type:'beenMade'|'beenPartOf',
}
export const links:_links[] = [
    ////////////////////////////////////////////
    // Been Made
    {
        slug: 'bm-quizsense',
        type: 'beenMade',
        name: 'Quizsense',
        icon: 'https://img.icons8.com/color/48/000000/python.png',
        desc: 'Learning platform for students with visual impairments. Using text-to-speech technology to read the questions and answers. This platform aims to make learning more accessible and inclusive for all students.',
        link: 'https://netradapt.com',
        imageUrl: ['quizsense.png'],
    },
    {
        slug: 'bm-traffic-sign-detection',
        type: 'beenMade',
        name: 'Traffic Sign Detection',
        icon: 'https://img.icons8.com/color/48/000000/python.png',
        desc: 'Multi labels machine learning model that can detect different traffic route signs. Made with Roboflow and YOLOv8. This project helps in improving road safety by accurately identifying traffic signs.',
        link: 'https://demo.roboflow.com/pendeteksi-rambu-handal/2?publishable_key=rf_n3cdmhH7RsfO40uOeaqpv3mfM5e2',
        imageUrl: ['rambu-1.png', 'rambu-2.png']
    },
    {
        slug: 'bm-teknik-komputer',
        type: 'beenMade',
        name: 'Teknik Komputer',
        icon: 'https://img.icons8.com/color/48/000000/php.png',
        desc: 'Official website of Computer Engineering Department, Universitas Pendidikan Indonesia. This website provides information about the department, its programs, faculty, and research activities.',
        link: 'https://tekkom.upi.edu',
        imageUrl: ['tekkom-1.png']
    },
    {
        slug: 'bm-quizsense-hub-api',
        type: 'beenMade',
        name: 'Quizsense Hub API',
        icon: 'https://img.icons8.com/color/48/000000/typescript.png',
        desc: 'Control and program setup area for Quizsense. This hub provides API for quiz and text-to-speech assets to be used in Quizsense. It facilitates seamless integration and management of educational content.',
        link: 'https://quizsense.netradapt.com',
        imageUrl: ['quizsense-2.png']
    },
    {
        slug: 'bm-kencana-seni',
        type: 'beenMade',
        name: 'Kencana Seni',
        icon: 'https://img.icons8.com/color/48/000000/typescript.png',
        desc: 'Product of Devotion. An inclusive Education Platform for Disaster Mitigation, made for students with special needs. Granted an HKI (Hak Kekayaan Intelektual) from Kemenkumham. This platform aims to educate and prepare students for disaster scenarios through interactive and accessible content.',
        link: 'https://kencanaseni.com',
        imageUrl: ['kencana-seni-3.png', 'kencana-seni.png'],
    },
    {
        slug: 'bm-priangan-wifi',
        type: 'beenMade',
        name: 'Priangan WiFi',
        icon: 'https://img.icons8.com/color/48/000000/typescript.png',
        desc: 'Automated MAC Filtering on WiFi management system for people lived in Kos Priangan. This system helps in managing and securing the WiFi network by automatically filtering MAC addresses.',
        link: 'https://wifi.salamp.id',
        imageUrl: ['wifi-1.png']
    },
    {
        slug: 'bm-spot-upi-2',
        type: 'beenMade',
        name: 'SPOT UPI 2.0',
        icon: 'https://img.icons8.com/color/48/000000/javascript.png',
        desc: 'Serve enchanted visual aesthetics and features of the SPOT UPI. Also provide task list notifications. This extension enhances the user experience by providing a visually appealing interface and useful features.',
        link: 'https://chromewebstore.google.com/detail/spot-upi-20/fccldipdnhfhfdnbifompbaddhaifoen',
        imageUrl: ['spot-1.png', 'spot-2.png'],
    },
    {
        slug: 'bm-tekkom-fiber',
        type: 'beenMade',
        name: 'TekkomFiber',
        icon: 'https://img.icons8.com/color/48/000000/javascript.png',
        desc: 'Learning platform to learn about parts of a computer. Made for Computer Engineering Department, Universitas Pendidikan Indonesia. This platform provides interactive content to help students understand computer components.',
        link: 'https://tfiber.salamp.id',
    },
    {
        slug: 'bm-cepatga',
        type: 'beenMade',
        name: 'CEPATga',
        icon: 'https://img.icons8.com/color/48/000000/javascript.png',
        desc: 'Excel-like mobile application for PLN employees to record detailed status and specifications of the power grid in the field. This app helps in efficiently managing and documenting the power grid infrastructure.',
        link: 'https://web.pln.co.id/',
    },
    {
        slug: 'bm-pwa-dashboard',
        type: 'beenMade',
        name: 'PWA Dashboard',
        icon: 'https://img.icons8.com/color/48/000000/javascript.png',
        desc: 'A Progressive Web App Dashboard for public that served task list, SPOT task notifications, and adzan schedule. This dashboard provides a convenient way to manage tasks and receive important notifications.',
        link: 'https://lamptest.vercel.app/',
        imageUrl: ['dashboard-1.png'],
    },
    {
        slug: 'bm-pigano',
        type: 'beenMade',
        name: 'PiGANO',
        icon: 'https://img.icons8.com/color/48/000000/dart.png',
        desc: 'A mobile application to instantly encrypt and decrypt your private message using CC and LSB method. This app allows you to secure secret messages within an image.',
        link: 'https://github.com/SalamPS/PiGANO/tree/main',
    },
    {
        slug: 'bm-integral-solver',
        type: 'beenMade',
        name: 'Integral Solver',
        icon: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png',
        desc: 'Solving integral problems even with multiple variables. Made with Native C++. Available on my GitHub Repository.',
        link: 'https://github.com/SalamPS/Calculus-Calculator',
    },
    
    ////////////////////////////////////////////
    // Been Part Of
    {
        slug: 'bp-netradapt',
        type: 'beenPartOf',
        name: 'Netradapt',
        icon: '/storage/portfolio/netradapt.png',
        desc: 'The CEO and CTO at of Netradapt. Great startup company focuses on innovating technology to help students with visual impairments. This role involves leading the company in developing cutting-edge solutions to improve accessibility and inclusivity in education.',
        link: 'https://netradapt.com',
        year: 2024,
        imageUrl: ['quizsense.png']
    },
    {
        slug: 'bp-kencana-seni',
        type: 'beenPartOf',
        name: 'Kencana Seni',
        icon: '/storage/portfolio/kencana-seni.png',
        desc: 'Full stack, developed the disaster mitigation educational inclusive website using NextJS and Gamepad API. Granted an HKI (Hak Kekayaan Intelektual) from Kemenkumham. This project aims to provide accessible educational content to prepare students for disaster scenarios.',
        link: 'https://kencanaseni.com',
        year: 2024,
        imageUrl: ['kencana-seni.png', 'kencana-seni-2.png'],
    },
    {
        slug: 'bp-robotics-lab',
        type: 'beenPartOf',
        name: 'Robotics Lab',
        icon: '/storage/portfolio/lab-robot.png',
        desc: 'Provided service for lecture classes that held in the Teknik Komputer UPI, also maintained and staff-guarded items belonging to the Robotic Lab. This role involved ensuring the smooth operation of the lab and supporting educational activities.',
        link: 'https://tekkom.upi.edu/laboratorium-robotika-pendidikan/',
        year: 2024,
        imageUrl: ['aslab-1.jpg', 'aslab-2.jpg'],
    },
    {
        slug: 'bp-kompetegram',
        type: 'beenPartOf',
        name: 'Kompetegram',
        icon: '/storage/portfolio/kompetegram.png',
        desc: 'Developed SPOT UPI 2.0 chrome extension and led the way of our other community projects. Also taught our members to learn about web programming. This role involved mentoring and guiding members in web development projects.',
        link: 'https://www.instagram.com/kompetegram/',
        year: 2024,
        imageUrl: ['spot-2.png', 'spot-3.png'],
    },
    {
        slug: 'bp-pln',
        type: 'beenPartOf',
        name: 'PLN',
        icon: '/storage/portfolio/pln.png',
        desc: 'Built an excel-type mobile monitoring application for Electrical Data Control of PLN in Riau Islands Province using React Native. Not accessible for public. This project involved developing a tool to help PLN employees efficiently manage and monitor the power grid.',
        link: 'https://web.pln.co.id/',
        year: 2024,
    },
    {
        slug: 'bp-serviam',
        type: 'beenPartOf',
        name: 'SMP Santa Ursula',
        icon: '/storage/portfolio/serviam.png',
        desc: 'Devotion for SMP Santa Ursula Bandung. Taught robotics theories and materials to their students for a full semester. Successfully led them to finish a robotic project. The project involved designing, building, and programming a robot to perform specific tasks, which enhanced the student\'s understanding of robotics and teamwork.',
        link: 'https://www.kompasiana.com/muhammadtaufikdwiputra4541/66d6ba7634777c778a5e7da2/pengabdian-pada-masyarakat-program-pelatihan-peningkatan-kemampuan-computational-thinking-siswa-dengan-menggunakan-media-robotik-bagi-guru',
        year: 2024,
        imageUrl: ['serviam-1.jpg', 'serviam-2.jpg'],
    },
    {
        slug: 'bp-tekkom',
        type: 'beenPartOf',
        name: 'Teknik Komputer',
        icon: '/storage/portfolio/tekkom.png',
        desc: 'Upgraded, monitored, and maintained the official website of Teknik Komputer UPI Cibiru. Also wrote content for the website and social media posts. Accessible via tekkom.upi.edu and Instagram @teknikkomputer.upi. Ensured the website was always up-to-date with the latest information and events, improving the online presence of the department.',
        link: 'https://tekkom.upi.edu/',
        year: 2024,
        imageUrl: ['tekkom-1.png', 'tekkom-2.png'],
    },
    {
        slug: 'bp-bem',
        type: 'beenPartOf',
        name: 'BEM UPI Cibiru',
        icon: '/storage/portfolio/bem.png',
        desc: 'Head of Operator Division at "MOKAKU UPI Cibiru 2024" and "Kajian dan Lomba 2023". Led and organized all electronical and sound system requirements for the event. Coordinated with various teams to ensure smooth operation of all technical aspects, contributing to the overall success of the events.',
        link: 'https://www.instagram.com/bemupicibiru/',
        year: 2024,
        imageUrl: ['bem-1.jpg', 'bem-2.jpg'],
    },
    {
        slug: 'bp-hima-tekkom',
        type: 'beenPartOf',
        name: 'HIMA TEKKOM',
        icon: '/storage/portfolio/hima-tekkom.png',
        desc: 'Member of Commision III, Member of Operator Division at ODWH TEKKOM 2023, Member of Design and Decoration Division at MABIM TEKKOM 2023. Actively participated in organizing and managing events, contributing to the success of various activities and enhancing the overall experience for participants.',
        link: 'https://www.instagram.com/hima.tekkom/',
        year: 2023,
    },
    {
        slug: 'bp-gdsc',
        type: 'beenPartOf',
        name: 'GDSC',
        icon: '/storage/portfolio/gdsc.png',
        desc: 'Member of Google Developer Student Club Batch 2022. Spoke about "Basics of Web Programming" at a Study Jam session. Shared knowledge and experience with fellow students, helping them to understand the fundamentals of web development and encouraging them to pursue further learning in the field.',
        link: 'https://developers.google.com/community/',
        year: 2023,
        imageUrl: ['gdsc-1.png', 'gdsc-2.jpeg'],
    },
    {
        slug: 'bp-github',
        type: 'beenPartOf',
        name: 'GitHub Student Developer',
        icon: '/storage/portfolio/github.png',
        desc: 'Verified and active member of GitHub Campus Expert.',
        link: 'https://github.com/education/students',
        imageUrl: ['github-1.png'],
    },
    {
        slug: 'bp-discord',
        type: 'beenPartOf',
        name: 'Discord Developer',
        icon: '/storage/portfolio/discord.png',
        desc: 'Verified member of Discord Developer Community.',
        link: 'https://discord.com/servers/discord-developers-613425648685547541',
    },
];