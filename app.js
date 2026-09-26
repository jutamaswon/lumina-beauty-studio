/**
 * LUMINA BEAUTY STUDIO - APPLICATION LOGIC
 * Operating Hours: 08:00 AM - 08:00 PM (08:00 - 20:00)
 * Dual Language Support: TH / EN
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. DATA & TRANSLATIONS (TH / EN)
  // ==========================================
  const translations = {
    th: {
      navHome: "หน้าแรก",
      navServices: "บริการ & ราคา",
      navArtists: "ช่างผู้เชี่ยวชาญ",
      navGallery: "ผลงานของเรา",
      navReviews: "รีวิวจากลูกค้า",
      navContact: "ติดต่อเรา",
      btnBookNow: "จองคิวออนไลน์",
      heroBadge: "สตูดิโอความงามพรีเมียม เปิด 08:00 - 20:00 น.",
      heroTitle: 'เนรมิตความสวยเป๊ะ <br><span class="gradient-text">เล็บ ขนตา และคิ้ว</span> สไตล์มินิมอลหรูหรา',
      heroDesc: "สัมผัสประสบการณ์การดูแลตัวเองที่ผ่อนคลาย ด้วยเทคนิคเฉพาะทาง เกรดพรีเมียมนำเข้าจากญี่ปุ่นและเกาหลี สะอาด ปลอดภัย เอาใจใส่ทุกรายละเอียดโดยช่างมืออาชีพ",
      hoursTitle: "เวลาทำการ",
      qualityTitle: "การันตีคุณภาพ",
      qualityDesc: "ช่างผ่านการรับรองสถาบันชั้นนำ",
      hygieneTitle: "ความสะอาด 100%",
      hygieneDesc: "ฆ่าเชื้ออุปกรณ์เกรดการแพทย์",
      btnHeroBook: "จองคิวรับบริการ",
      btnHeroServices: "ดูรายการบริการ & ราคา",
      ratingText: "จาก 1,200+ รีวิวลูกค้าจริง",
      slotToday: "คิวว่างวันนี้",
      slotAvail: "08:00 - 20:00 น.",
      catSub: "SPECIALIZED BEAUTY SERVICES",
      catTitle: "3 บริการหลักที่โดดเด่นของเรา",
      catNailsTitle: "บริการทำเล็บ & สปามือ-เท้า",
      catNailsDesc: "ทาสีเจลนำเข้าจากญี่ปุ่น สปามือเท้าบำรุงล้ำลึก ต่อเล็บอะคริลิก/พีวีซี และดีไซน์ลายเล็บเพ้นท์มือสุดประณีต",
      fNails1: "เจลออร์แกนิก ปลอดภัยต่อหน้าเล็บ",
      fNails2: "รับประกันงานหลุดลอก 7 วัน",
      btnViewNails: "ดูราคาทำเล็บ",
      catLashesTitle: "บริการต่อขนตา & ลิฟติ้ง",
      catLashesDesc: "ต่อขนตาเส้นต่อเส้น เทคนิค Volume 3D-6D ขนตานุ่มเบาสบายตา ไม่ระคายเคือง พร้อมบริการดัดลิฟติ้งขนตาธรรมชาติ",
      fLashes1: "กาวพรีเมียม อ่อนโยนต่อดวงตา",
      fLashes2: "เบาสบาย ไม่หนักตา ติดทนนาน",
      btnViewLashes: "ดูราคาต่อขนตา",
      catBrowsTitle: "บริการสักคิ้ว & ลิฟติ้งคิ้ว",
      catBrowsDesc: "สักคิ้วลายเส้น 6D Microblading, ฝุ่นพาวเดอร์ Ombre ให้คิ้วสวยดูเป็นธรรมชาติ สีออร์แกนิกนำเข้า ปลอดภัยไม่เปลี่ยนเป็นสีเขียว",
      fBrows1: "ออกแบบทรงคิ้วตามโครงหน้า",
      fBrows2: "สีออร์แกนิกมาตรฐานยุโรป",
      btnViewBrows: "ดูราคาบริการคิ้ว",
      serviceSub: "MENU & PRICING",
      serviceTitle: "รายการบริการและราคามาตรฐาน",
      serviceDesc: "เลือกดูรายการบริการ ราคา และระยะเวลาในการให้บริการ (เปิดบริการ 08:00 - 20:00 น.)",
      filterAll: "ทั้งหมด",
      filterNails: "ทำเล็บ (Nails)",
      filterLashes: "ต่อขนตา (Lashes)",
      filterBrows: "งานคิ้ว (Brows)",
      artistSub: "EXPERT TEAM",
      artistTitle: "ช่างผู้เชี่ยวชาญประจำสตูดิโอ",
      artistDesc: "ทีมช่างมืออาชีพที่ได้รับการฝึกอบรมมาตรฐานสูง สามารถเลือกช่างที่ชื่นชอบเมื่อทำการจอง",
      roleNails: "Master Nail Artist & Design Specialist",
      roleLashes: "Senior Lash Stylist",
      roleBrows: "Eyebrow & Facial Micro-Artist",
      exp1: "ประสบการณ์ 8 ปี (ใบรับรองจากโตเกียว)",
      exp2: "ประสบการณ์ 6 ปี (ผู้เชี่ยวชาญ Volume Lash)",
      exp3: "ประสบการณ์ 7 ปี (มาตรฐานสถาบันยุโรป)",
      btnBookWithThis: "จองคิวกับช่างท่านนี้",
      gallerySub: "PORTFOLIO & SHOWCASE",
      galleryTitle: "ภาพผลงานจริงจากทางร้าน",
      gNails: "ลายเล็บเพ้นท์เจลพรีเมียม",
      gLashes: "ต่อขนตา Volume Hybrid",
      gBrows: "สักคิ้วลายเส้น 6D Microblading",
      gStudio: "บรรยากาศสตูดิโอผ่อนคลาย",
      reviewSub: "TESTIMONIALS",
      reviewTitle: "เสียงตอบรับจากลูกค้าของเรา",
      rev1: '"ประทับใจมากค่ะ ต่อขนตาบางเบาสบายมาก ไม่หนักตาเลย ช่างน่ารักมือเบามาก ร้านสะอาดเปิดตั้งแต่ 8 โมงเช้า ได้คิวเช้าก่อนไปทำงานสะดวกมากค่ะ!"',
      rev2: '"ทำเล็บเจลที่นี่ทนนานเกิน 1 เดือน งานดีเทลเพ้นท์เนี๊ยบมาก สีเจลเงางามไม่ลอกเลิก ร้านสวยงามในโทนพรีเมียม ชอบปุ่มจองคิวออนไลน์ใช้ง่ายมาก"',
      rev3: '"สักคิ้ว 6D กับช่างเจมี่ สวยธรรมชาติมาก หน้าไม่ดุเลย ลายเส้นสโตรกเป๊ะมาก แนะนำเพื่อนๆ มาทำกันทุกคนเลยครับ"',
      contactSub: "VISIT & CONTACT",
      contactTitle: "เวลาทำการ & การเดินทาง",
      cHours: "เวลาเปิด-ปิด บริการ",
      cHoursNotice: "* คิวสุดท้ายเวลารับจองคือ 19:00 น.",
      cLoc: "สถานที่ตั้ง",
      cAddress: "โครงการ Pearl Park Mall ชั้น 2 (ตรงข้ามลิฟต์แก้ว) ถนนสุขุมวิท กรุงเทพฯ",
      cPhone: "ติดต่อสอบถาม & จองโทรศัพท์",
      cLine: "LINE Official Account",
      btnMap: "เปิด Google Maps",
      footerTagline: "สตูดิโอความงามพรีเมียม เล็บ ขนตา และคิ้ว เปิด 08:00 - 20:00 น.",
      fHoursTitle: "เวลาทำการ:",
      mBookingTitle: "ระบบจองคิวออนไลน์",
      step1: "เลือกบริการ",
      step2: "เลือกช่าง",
      step3: "วัน & เวลา",
      step4: "ยืนยันการจอง",
      titleStep1: "กรุณาเลือกบริการที่ต้องการ (เลือกได้มากกว่า 1 รายการ):",
      selectedCount: "เลือกแล้ว:",
      itemUnit: "รายการ",
      estTime: "เวลารวมประมาณ:",
      minuteUnit: "นาที",
      totalPrice: "ยอดรวม:",
      titleStep2: "เลือกช่างผู้เชี่ยวชาญที่ต้องการ:",
      anyArtist: "ช่างคนใดก็ได้ (จัดคิวเร็วที่สุด)",
      anyArtistDesc: "ระบบจะจัดช่างมืออาชีพที่ว่างตรงตามเวลาที่คุณเลือก",
      specNails: "ผู้เชี่ยวชาญทำเล็บ & งานดีไซน์เจลญี่ปุ่น",
      specLashes: "ผู้เชี่ยวชาญต่อขนตา Volume & Lash Lift",
      specBrows: "ผู้เชี่ยวชาญสักคิ้ว 6D Microblading & Ombre",
      titleStep3: "เลือกวันและเวลาที่ต้องการรับบริการ (08:00 - 20:00 น.):",
      labelDate: "เลือกวันที่:",
      labelTime: "เลือกรอบเวลา (เปิด 08:00 - 20:00 น.):",
      titleStep4: "กรอกข้อมูลผู้ติดต่อเพื่อยืนยันการจอง:",
      fName: "ชื่อ-นามสกุล",
      fPhone: "เบอร์โทรศัพท์",
      fEmail: "อีเมล (เพื่อรับตั๋วยืนยัน)",
      fNote: "หมายเหตุเพิ่มเติม / ข้อถอดเล็บเดิม",
      summaryTitle: "สรุปการจองคิว",
      sumServices: "บริการที่เลือก:",
      sumArtist: "ช่างผู้ให้บริการ:",
      sumDateTime: "วันเวลา:",
      sumTotal: "ราคารวมบริการ:",
      sumDeposit: "มัดจำจองคิว 30%:",
      depositNote: "* มัดจำชำระหน้าเคาน์เตอร์หรือโอนสแกนเมื่อเข้าใช้บริการ",
      btnPrev: "ย้อนกลับ",
      btnNext: "ถัดไป / ยืนยัน",
      ticketTitle: "จองคิวสำเร็จแล้ว!",
      ticketSub: "ขอบคุณที่เลือกใช้บริการ LUMINA Studio",
      ticketNo: "รหัสการจอง:",
      tName: "ชื่อลูกค้า:",
      tPhone: "เบอร์โทร:",
      tDate: "วันเวลานัดหมาย:",
      tArtist: "ช่างที่ให้บริการ:",
      tServices: "รายการบริการ:",
      tDeposit: "มัดจำ 30%:",
      qrHint: "ยื่นตั๋วนี้ต่อพนักงานเมื่อถึงร้าน",
      btnCloseTicket: "ปิดหน้าต่าง",
      btnPrintTicket: "พิมพ์ / บันทึกตั๋ว",
      statTotal: "การจองทั้งหมด",
      statToday: "จองวันนี้ (08:00 - 20:00)",
      statRevenue: "ยอดประเมินรายได้",
      statusOpen: "เปิดบริการ (08:00 - 20:00)",
      statusClosed: "ปิดบริการแล้ว (เปิด 08:00)"
    },
    en: {
      navHome: "Home",
      navServices: "Services & Pricing",
      navArtists: "Specialists",
      navGallery: "Portfolio",
      navReviews: "Testimonials",
      navContact: "Contact",
      btnBookNow: "Book Online",
      heroBadge: "Premium Beauty Studio • Open 8:00 AM - 8:00 PM",
      heroTitle: 'Flawless Beauty for <br><span class="gradient-text">Nails, Lashes & Brows</span>',
      heroDesc: "Experience luxury self-care with specialized techniques imported from Japan and Korea. Clean, safe, and tailored with extreme attention to detail by certified artists.",
      hoursTitle: "Opening Hours",
      qualityTitle: "Certified Quality",
      qualityDesc: "Artists certified by top international academies",
      hygieneTitle: "100% Hygiene",
      hygieneDesc: "Medical-grade tool sterilization",
      btnHeroBook: "Book Appointment",
      btnHeroServices: "View Menu & Pricing",
      ratingText: "from 1,200+ real client reviews",
      slotToday: "Available Slots Today",
      slotAvail: "8:00 AM - 8:00 PM",
      catSub: "SPECIALIZED BEAUTY SERVICES",
      catTitle: "Our 3 Signature Services",
      catNailsTitle: "Nail Care & Spa Manicure/Pedicure",
      catNailsDesc: "Japanese organic gel polish, luxury manicure & spa pedicure, acrylic/gel extensions, and bespoke hand-painted nail art.",
      fNails1: "Organic gel polish safe for natural nails",
      fNails2: "7-day peeling quality guarantee",
      btnViewNails: "View Nail Pricing",
      catLashesTitle: "Lash Extensions & Lift",
      catLashesDesc: "Individual eyelash extensions, 3D-6D Volume techniques, ultra-lightweight and comfortable with natural eyelash keratin lifting.",
      fLashes1: "Premium sensitive-eye hypoallergenic glue",
      fLashes2: "Weightless feel, long-lasting curl",
      btnViewLashes: "View Lash Pricing",
      catBrowsTitle: "Microblading & Brow Lamination",
      catBrowsDesc: "6D Microblading stroke technique, Powder Ombre shading, organic pigment certified European standard.",
      fBrows1: "Custom brow design tailored to facial structure",
      fBrows2: "Organic pigments (non-discoloring)",
      btnViewBrows: "View Brow Pricing",
      serviceSub: "MENU & PRICING",
      serviceTitle: "Services Menu & Standard Rates",
      serviceDesc: "Browse our standard rates and estimated service durations (Open 08:00 AM - 08:00 PM)",
      filterAll: "All Services",
      filterNails: "Nails",
      filterLashes: "Lashes",
      filterBrows: "Brows",
      artistSub: "EXPERT TEAM",
      artistTitle: "Our Certified Specialists",
      artistDesc: "Select your preferred master artist when booking your appointment.",
      roleNails: "Master Nail Artist & Design Specialist",
      roleLashes: "Senior Lash Stylist",
      roleBrows: "Eyebrow & Facial Micro-Artist",
      exp1: "8 Years Exp. (Tokyo Certification)",
      exp2: "6 Years Exp. (Volume Lash Expert)",
      exp3: "7 Years Exp. (European Academy)",
      btnBookWithThis: "Book with Artist",
      gallerySub: "PORTFOLIO & SHOWCASE",
      galleryTitle: "Real Client Results",
      gNails: "Japanese Pearl Gel Art",
      gLashes: "Volume Hybrid Extensions",
      gBrows: "6D Microblading Brow Art",
      gStudio: "Relaxing Studio Ambiance",
      reviewSub: "TESTIMONIALS",
      reviewTitle: "What Our Clients Say",
      rev1: '"Extremely impressed! Lashes feel weightless and super comfortable. Studio opens early at 8:00 AM which is perfect before work!"',
      rev2: '"The Japanese gel manicure lasted over a month without chipping. The online booking system is super seamless and easy to use!"',
      rev3: '"Had my 6D microblading done with Artist Jamie. Looks incredibly natural! Highly recommended to everyone."',
      contactSub: "VISIT & CONTACT",
      contactTitle: "Operating Hours & Location",
      cHours: "Studio Hours",
      cHoursNotice: "* Last booking slot is at 7:00 PM (19:00)",
      cLoc: "Location",
      cAddress: "Pearl Park Mall 2nd Floor (Opposite Glass Elevator), Sukhumvit Rd, Bangkok",
      cPhone: "Phone Inquiry & Reservation",
      cLine: "LINE Official Account",
      btnMap: "Open Google Maps",
      footerTagline: "Premium Nails, Eyelash & Eyebrow Studio. Open 8:00 AM - 8:00 PM.",
      fHoursTitle: "Working Hours:",
      mBookingTitle: "Online Booking System",
      step1: "Select Services",
      step2: "Select Artist",
      step3: "Date & Time",
      step4: "Confirmation",
      titleStep1: "Select services you wish to book (Multiple selections allowed):",
      selectedCount: "Selected:",
      itemUnit: "items",
      estTime: "Est. Total Duration:",
      minuteUnit: "mins",
      totalPrice: "Total Price:",
      titleStep2: "Choose your preferred specialist:",
      anyArtist: "Any Available Artist (Fastest Slot)",
      anyArtistDesc: "We will automatically match you with a senior artist available at your time.",
      specNails: "Japanese Gel & Nail Art Specialist",
      specLashes: "Volume Lash & Lash Lift Specialist",
      specBrows: "6D Microblading & Ombre Brow Specialist",
      titleStep3: "Choose appointment date & time (08:00 AM - 08:00 PM):",
      labelDate: "Select Date:",
      labelTime: "Select Time Slot (Open 08:00 - 20:00):",
      titleStep4: "Enter Client Information:",
      fName: "Full Name",
      fPhone: "Phone Number",
      fEmail: "Email (for ticket confirmation)",
      fNote: "Additional Notes / Gel Removal Needs",
      summaryTitle: "Booking Summary",
      sumServices: "Selected Services:",
      sumArtist: "Artist:",
      sumDateTime: "Date & Time:",
      sumTotal: "Total Price:",
      sumDeposit: "30% Deposit:",
      depositNote: "* Deposit payable at checkout or upon arrival",
      btnPrev: "Back",
      btnNext: "Next / Confirm",
      ticketTitle: "Booking Confirmed!",
      ticketSub: "Thank you for choosing LUMINA Studio",
      ticketNo: "Booking Ref:",
      tName: "Client Name:",
      tPhone: "Phone:",
      tDate: "Date & Time:",
      tArtist: "Artist:",
      tServices: "Services:",
      tDeposit: "30% Deposit:",
      qrHint: "Show this ticket code upon arrival",
      btnCloseTicket: "Close",
      btnPrintTicket: "Print / Save Ticket",
      statTotal: "Total Bookings",
      statToday: "Bookings Today (08:00 - 20:00)",
      statRevenue: "Estimated Revenue",
      statusOpen: "OPEN NOW (08:00 - 20:00)",
      statusClosed: "CLOSED NOW (Opens 08:00 AM)"
    }
  };

  // Services Catalog Database
  const servicesData = [
    {
      id: "n1",
      category: "nails",
      nameTh: "ทาสีเจลมือ (Japanese Organic Gel)",
      nameEn: "Japanese Organic Gel Manicure",
      descTh: "ทาสีเจลไม่จำกัดสี พร้อมตัดแต่งทรงเล็บและหนังฟรี เทคโนโลยีจากญี่ปุ่น",
      descEn: "Unlimited gel color application with manicuring and shaping.",
      price: 490,
      duration: 45
    },
    {
      id: "n2",
      category: "nails",
      nameTh: "ต่อเล็บเจล / พีวีซี + เพ้นท์ลาย",
      nameEn: "Gel Extensions + Custom Nail Art",
      descTh: "ต่อเล็บเจลทรงสวย พร้อมงานเพ้นท์ลาย/ติดอะไหล่ 4 นิ้ว",
      descEn: "Full set gel extensions with custom 4-finger nail art design.",
      price: 1290,
      duration: 90
    },
    {
      id: "n3",
      category: "nails",
      nameTh: "สปามือ-เท้าพรีเมียม (Luxury Foot & Hand Spa)",
      nameEn: "Luxury Hand & Foot Spa",
      descTh: "สปาขัดเซลล์ผิว สครับออร์แกนิก มาร์กบำรุง และนวดผ่อนคลาย",
      descEn: "Organic scrub, deep moisturizing mask, and relaxing massage.",
      price: 990,
      duration: 60
    },
    {
      id: "l1",
      category: "lashes",
      nameTh: "ต่อขนตาเส้นต่อเส้น Classic Natural",
      nameEn: "Classic 1-on-1 Lash Extensions",
      descTh: "ต่อขนตาธรรมชาติ เบาสบายตา เพิ่มความหวานสดใสให้ดวงตา",
      descEn: "Lightweight natural look individually applied eyelash extensions.",
      price: 1190,
      duration: 60
    },
    {
      id: "l2",
      category: "lashes",
      nameTh: "ต่อขนตา Volume 3D-6D Glamorous",
      nameEn: "Volume 3D-6D Hybrid Lashes",
      descTh: "ต่อขนตาแน่นฟู สไตล์ดาราฮอลลีวูด นุ่มตาไม่หนัก ไม่ระคายเคือง",
      descEn: "Fluffy voluminous lash technique with hypoallergenic premium glue.",
      price: 1690,
      duration: 90
    },
    {
      id: "l3",
      category: "lashes",
      nameTh: "ดัดลิฟติ้งขนตา Keratin Lash Lift & Tint",
      nameEn: "Keratin Lash Lift & Tint",
      descTh: "ดัดงอนขนตาจริงด้วยเคราตินเกรดพรีเมียม งอนสวยนาน 1-2 เดือน",
      descEn: "Lifts and darkens natural lashes with deep keratin nourishment.",
      price: 890,
      duration: 45
    },
    {
      id: "b1",
      category: "brows",
      nameTh: "สักคิ้วลายเส้น 6D Microblading Art",
      nameEn: "6D Microblading Eyebrow Artistry",
      descTh: "สักคิ้วเสมือนขนคิ้วจริง ลายเส้นพลิ้วสวย สีออร์แกนิกเยอรมนี",
      descEn: "Natural hair-like micro-strokes tailored to your face structure.",
      price: 3900,
      duration: 120
    },
    {
      id: "b2",
      category: "brows",
      nameTh: "สักคิ้วฝุ่น Powder Ombre Brows",
      nameEn: "Powder Ombre Shaded Brows",
      descTh: "สักคิ้วละมุนเหมือนปัดฝุ่นคิ้ว ตื่นมาสวยเป๊ะไม่ต้องเสียเวลาเขียน",
      descEn: "Soft gradient powder brow technique for effortless daily beauty.",
      price: 3500,
      duration: 120
    },
    {
      id: "b3",
      category: "brows",
      nameTh: "ลิฟติ้งคิ้วตั้ง Brow Lamination",
      nameEn: "Keratin Brow Lamination",
      descTh: "จัดทรงขนคิ้วให้เรียงเส้นสวย ตั้งฟู สไตล์สายฝอละมุน",
      descEn: "Feathered, fluffy, and structured brow hairs with setting keratin.",
      price: 990,
      duration: 45
    }
  ];

  // Artists Data
  const artistsData = {
    "any": { nameTh: "ช่างคนใดก็ได้", nameEn: "Any Available Artist" },
    "1": { nameTh: "คุณมุก (Master Mayu)", nameEn: "Master Mayu (Nails)" },
    "2": { nameTh: "คุณแอน (Master Ann)", nameEn: "Master Ann (Lashes)" },
    "3": { nameTh: "คุณเจมี่ (Brow Architect)", nameEn: "Jamie (Brows)" }
  };

  // State Management
  let currentLang = 'th';
  let currentWizardStep = 1;
  let selectedServices = [];
  let selectedArtistId = "any";
  let selectedDate = new Date().toISOString().split('T')[0];
  let selectedTimeSlot = "10:00";
  let bookings = JSON.parse(localStorage.getItem('lumina_bookings') || '[]');

  // Seed sample initial bookings if empty
  if (bookings.length === 0) {
    bookings = [
      {
        id: "LMN-9102",
        name: "คุณวิภาดา (K. Vipada)",
        phone: "081-234-5678",
        date: new Date().toISOString().split('T')[0],
        time: "10:00",
        services: ["n1", "l3"],
        artistId: "1",
        total: 1380,
        deposit: 414,
        status: "APPROVED"
      },
      {
        id: "LMN-9105",
        name: "คุณณิชา (K. Nicha)",
        phone: "089-999-8877",
        date: new Date().toISOString().split('T')[0],
        time: "14:00",
        services: ["b1"],
        artistId: "3",
        total: 3900,
        deposit: 1170,
        status: "APPROVED"
      }
    ];
    localStorage.setItem('lumina_bookings', JSON.stringify(bookings));
  }

  // ==========================================
  // 2. OPERATING HOURS & REAL-TIME STATUS (08:00 - 20:00)
  // ==========================================
  function updateOperatingStatus() {
    const now = new Date();
    const hours = now.getHours();
    const statusPill = document.getElementById('statusPill');
    const statusText = document.getElementById('statusText');

    // Business hours 08:00 AM - 08:00 PM (8 to 20)
    const isOpen = hours >= 8 && hours < 20;

    if (isOpen) {
      statusPill.classList.remove('closed');
      statusText.textContent = translations[currentLang].statusOpen;
    } else {
      statusPill.classList.add('closed');
      statusText.textContent = translations[currentLang].statusClosed;
    }
  }

  setInterval(updateOperatingStatus, 60000);
  updateOperatingStatus();

  // ==========================================
  // 3. INTERNATIONALIZATION (LANGUAGE SWITCH)
  // ==========================================
  const langToggleBtn = document.getElementById('langToggleBtn');
  const currentFlag = document.getElementById('currentFlag');
  const currentLangLabel = document.getElementById('currentLangLabel');

  function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('data-lang', lang);

    currentFlag.textContent = lang === 'th' ? '🇹🇭' : '🇬🇧';
    currentLangLabel.textContent = lang.toUpperCase();

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    renderServicesCatalog('all');
    renderBookingServicesList();
    updateOperatingStatus();
  }

  langToggleBtn.addEventListener('click', () => {
    setLanguage(currentLang === 'th' ? 'en' : 'th');
  });

  // ==========================================
  // 4. SERVICES CATALOG RENDER & FILTERING
  // ==========================================
  const servicesGrid = document.getElementById('servicesGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderServicesCatalog(filterCategory = 'all') {
    servicesGrid.innerHTML = '';

    const filtered = filterCategory === 'all' 
      ? servicesData 
      : servicesData.filter(s => s.category === filterCategory);

    filtered.forEach(s => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <div>
          <div class="service-card-header">
            <h3 class="service-title-text">${currentLang === 'th' ? s.nameTh : s.nameEn}</h3>
            <span class="service-tag">${s.category.toUpperCase()}</span>
          </div>
          <p class="service-desc">${currentLang === 'th' ? s.descTh : s.descEn}</p>
        </div>
        <div class="service-meta">
          <span class="service-price">${s.price.toLocaleString()} ฿</span>
          <span class="service-duration"><i class="fa-regular fa-clock"></i> ${s.duration} ${currentLang === 'th' ? 'นาที' : 'mins'}</span>
          <button class="btn btn-sm btn-primary quick-book-service-btn" data-id="${s.id}">
            <i class="fa-solid fa-plus"></i> ${currentLang === 'th' ? 'เลือกบริการนี้' : 'Book This'}
          </button>
        </div>
      `;
      servicesGrid.appendChild(card);
    });

    // Attach click handlers to quick book buttons
    document.querySelectorAll('.quick-book-service-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        if (!selectedServices.includes(id)) {
          selectedServices.push(id);
        }
        openBookingModal(1);
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      renderServicesCatalog(e.currentTarget.getAttribute('data-filter'));
    });
  });

  renderServicesCatalog();

  // Category view triggers
  document.querySelectorAll('.filter-service-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filter = e.currentTarget.getAttribute('data-filter');
      document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-filter') === filter);
      });
      renderServicesCatalog(filter);
    });
  });

  // Artist book triggers
  document.querySelectorAll('.select-artist-booking-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      selectedArtistId = e.currentTarget.getAttribute('data-artist-id');
      openBookingModal(2);
    });
  });

  // ==========================================
  // 5. BOOKING WIZARD & MODAL CONTROLLER
  // ==========================================
  const bookingModal = document.getElementById('bookingModal');
  const openBookingModalNavBtn = document.getElementById('openBookingModalNavBtn');
  const openBookingHeroBtn = document.getElementById('openBookingHeroBtn');
  const closeBookingModalBtn = document.getElementById('closeBookingModalBtn');

  const prevStepBtn = document.getElementById('prevStepBtn');
  const nextStepBtn = document.getElementById('nextStepBtn');

  function openBookingModal(step = 1) {
    currentWizardStep = step;
    bookingModal.classList.add('active');
    updateWizardUI();
  }

  function closeBookingModal() {
    bookingModal.classList.remove('active');
  }

  openBookingModalNavBtn.addEventListener('click', () => openBookingModal(1));
  openBookingHeroBtn.addEventListener('click', () => openBookingModal(1));
  closeBookingModalBtn.addEventListener('click', closeBookingModal);

  // Wizard Step Switching
  function updateWizardUI() {
    // Update step indicators
    document.querySelectorAll('.wizard-step').forEach(s => {
      const stepNum = parseInt(s.getAttribute('data-step'));
      s.classList.toggle('active', stepNum === currentWizardStep);
      s.classList.toggle('completed', stepNum < currentWizardStep);
    });

    // Update panes visibility
    document.querySelectorAll('.wizard-pane').forEach((pane, idx) => {
      pane.classList.toggle('active', idx + 1 === currentWizardStep);
    });

    // Update buttons
    prevStepBtn.disabled = currentWizardStep === 1;
    if (currentWizardStep === 4) {
      nextStepBtn.innerHTML = `<i class="fa-solid fa-check"></i> ${currentLang === 'th' ? 'ยืนยันจองคิวทันที' : 'Confirm Booking'}`;
      updateCheckoutSummary();
    } else {
      nextStepBtn.innerHTML = `${currentLang === 'th' ? 'ถัดไป' : 'Next'} <i class="fa-solid fa-arrow-right"></i>`;
    }

    if (currentWizardStep === 1) renderBookingServicesList();
    if (currentWizardStep === 3) renderTimeSlots();
  }

  prevStepBtn.addEventListener('click', () => {
    if (currentWizardStep > 1) {
      currentWizardStep--;
      updateWizardUI();
    }
  });

  nextStepBtn.addEventListener('click', () => {
    if (currentWizardStep === 1 && selectedServices.length === 0) {
      alert(currentLang === 'th' ? 'กรุณาเลือกบริการอย่างน้อย 1 รายการ' : 'Please select at least 1 service.');
      return;
    }

    if (currentWizardStep === 4) {
      handleFinalBookingSubmit();
      return;
    }

    if (currentWizardStep < 4) {
      currentWizardStep++;
      updateWizardUI();
    }
  });

  // Render Step 1 Services inside wizard
  function renderBookingServicesList() {
    const list = document.getElementById('bookingServiceList');
    list.innerHTML = '';

    servicesData.forEach(s => {
      const isSelected = selectedServices.includes(s.id);
      const item = document.createElement('div');
      item.className = `booking-service-item ${isSelected ? 'selected' : ''}`;
      item.innerHTML = `
        <div class="b-service-info">
          <strong>${currentLang === 'th' ? s.nameTh : s.nameEn}</strong>
          <small><i class="fa-regular fa-clock"></i> ${s.duration} ${currentLang === 'th' ? 'นาที' : 'mins'}</small>
        </div>
        <div class="b-service-price">
          <span>${s.price.toLocaleString()} ฿</span>
          <i class="fa-solid ${isSelected ? 'fa-circle-check text-pink' : 'fa-circle text-muted'}"></i>
        </div>
      `;

      item.addEventListener('click', () => {
        if (selectedServices.includes(s.id)) {
          selectedServices = selectedServices.filter(id => id !== s.id);
        } else {
          selectedServices.push(s.id);
        }
        renderBookingServicesList();
        calculateServicesTotal();
      });

      list.appendChild(item);
    });

    calculateServicesTotal();
  }

  function calculateServicesTotal() {
    const count = selectedServices.length;
    let totalPrice = 0;
    let totalTime = 0;

    selectedServices.forEach(id => {
      const found = servicesData.find(s => s.id === id);
      if (found) {
        totalPrice += found.price;
        totalTime += found.duration;
      }
    });

    document.getElementById('selectedServiceCount').textContent = count;
    document.getElementById('selectedTotalTime').textContent = totalTime;
    document.getElementById('selectedTotalPrice').textContent = totalPrice.toLocaleString();
  }

  // Radio listener for Step 2 Artists
  document.querySelectorAll('input[name="bookingArtist"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      selectedArtistId = e.target.value;
      document.querySelectorAll('.artist-option-card').forEach(card => {
        card.classList.remove('selected');
      });
      e.target.closest('.artist-option-card').classList.add('selected');
    });
  });

  // Step 3 Time Slots Generator (08:00 to 19:00 - closing at 20:00)
  const bookingDateInput = document.getElementById('bookingDate');
  bookingDateInput.value = selectedDate;
  bookingDateInput.min = new Date().toISOString().split('T')[0];

  bookingDateInput.addEventListener('change', (e) => {
    selectedDate = e.target.value;
    renderTimeSlots();
  });

  function renderTimeSlots() {
    const grid = document.getElementById('timeSlotsGrid');
    grid.innerHTML = '';

    // Operating hours 08:00 to 19:00 (last slot at 19:00)
    const availableHours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

    availableHours.forEach(timeStr => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `time-slot-btn ${selectedTimeSlot === timeStr ? 'selected' : ''}`;
      btn.textContent = timeStr + ' น.';

      btn.addEventListener('click', () => {
        selectedTimeSlot = timeStr;
        document.querySelectorAll('.time-slot-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });

      grid.appendChild(btn);
    });
  }

  // Step 4 Checkout Summary Update
  function updateCheckoutSummary() {
    const sumList = document.getElementById('sumServiceList');
    sumList.innerHTML = '';

    let total = 0;
    selectedServices.forEach(id => {
      const s = servicesData.find(item => item.id === id);
      if (s) {
        total += s.price;
        const li = document.createElement('li');
        li.textContent = `${currentLang === 'th' ? s.nameTh : s.nameEn} (${s.price.toLocaleString()} ฿)`;
        sumList.appendChild(li);
      }
    });

    const artistObj = artistsData[selectedArtistId] || artistsData["any"];
    document.getElementById('sumArtistName').textContent = currentLang === 'th' ? artistObj.nameTh : artistObj.nameEn;
    document.getElementById('sumDateTimeVal').textContent = `${selectedDate} @ ${selectedTimeSlot} น.`;

    const deposit = Math.round(total * 0.3);
    document.getElementById('sumTotalVal').textContent = `${total.toLocaleString()} ฿`;
    document.getElementById('sumDepositVal').textContent = `${deposit.toLocaleString()} ฿`;
  }

  // Final Booking Submission
  function handleFinalBookingSubmit() {
    const name = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();

    if (!name || !phone) {
      alert(currentLang === 'th' ? 'กรุณากรอกชื่อและเบอร์โทรศัพท์' : 'Please fill in your name and phone number.');
      return;
    }

    let total = 0;
    const serviceNames = selectedServices.map(id => {
      const s = servicesData.find(item => item.id === id);
      if (s) total += s.price;
      return s ? (currentLang === 'th' ? s.nameTh : s.nameEn) : '';
    });

    const deposit = Math.round(total * 0.3);
    const bookingCode = "LMN-" + Math.floor(1000 + Math.random() * 9000);

    const newBooking = {
      id: bookingCode,
      name: name,
      phone: phone,
      date: selectedDate,
      time: selectedTimeSlot,
      services: [...selectedServices],
      artistId: selectedArtistId,
      total: total,
      deposit: deposit,
      status: "PENDING"
    };

    bookings.push(newBooking);
    localStorage.setItem('lumina_bookings', JSON.stringify(bookings));

    closeBookingModal();
    openTicketModal(newBooking, serviceNames);
  }

  // ==========================================
  // 6. TICKET CONFIRMATION MODAL
  // ==========================================
  const ticketModal = document.getElementById('ticketModal');
  const closeTicketBtn = document.getElementById('closeTicketBtn');

  function openTicketModal(booking, serviceNames) {
    document.getElementById('ticketCodeVal').textContent = '#' + booking.id;
    document.getElementById('tClientName').textContent = booking.name;
    document.getElementById('tClientPhone').textContent = booking.phone;
    document.getElementById('tDateTimeVal').textContent = `${booking.date} @ ${booking.time} น.`;
    
    const artistObj = artistsData[booking.artistId] || artistsData["any"];
    document.getElementById('tArtistVal').textContent = currentLang === 'th' ? artistObj.nameTh : artistObj.nameEn;
    document.getElementById('tServicesVal').textContent = serviceNames.join(', ');
    document.getElementById('tDepositVal').textContent = `${booking.deposit.toLocaleString()} ฿`;

    ticketModal.classList.add('active');
  }

  closeTicketBtn.addEventListener('click', () => {
    ticketModal.classList.remove('active');
  });

  // ==========================================
  // 7. ADMIN PORTAL MODAL
  // ==========================================
  const adminPortalBtn = document.getElementById('adminPortalBtn');
  const adminModal = document.getElementById('adminModal');
  const closeAdminModalBtn = document.getElementById('closeAdminModalBtn');
  const adminBookingTableBody = document.getElementById('adminBookingTableBody');

  adminPortalBtn.addEventListener('click', () => {
    renderAdminDashboard();
    adminModal.classList.add('active');
  });

  closeAdminModalBtn.addEventListener('click', () => {
    adminModal.classList.remove('active');
  });

  function renderAdminDashboard() {
    adminBookingTableBody.innerHTML = '';
    const todayStr = new Date().toISOString().split('T')[0];

    let totalRevenue = 0;
    let todayCount = 0;

    bookings.forEach((b, index) => {
      totalRevenue += b.total;
      if (b.date === todayStr) todayCount++;

      const sNames = b.services.map(id => {
        const s = servicesData.find(item => item.id === id);
        return s ? s.nameTh : '';
      }).join(', ');

      const artistObj = artistsData[b.artistId] || artistsData["any"];

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>#${b.id}</strong></td>
        <td>${b.name}</td>
        <td>${b.phone}</td>
        <td>${b.date} @ ${b.time}</td>
        <td>${sNames}</td>
        <td>${artistObj.nameTh}</td>
        <td><span class="hours-badge">${b.status}</span></td>
        <td>
          <button class="btn btn-sm btn-outline delete-booking-btn" data-index="${index}">
            <i class="fa-solid fa-trash"></i>
          </button>
        </td>
      `;

      adminBookingTableBody.appendChild(tr);
    });

    document.getElementById('statTotalCount').textContent = bookings.length;
    document.getElementById('statTodayCount').textContent = todayCount;
    document.getElementById('statRevenueVal').textContent = totalRevenue.toLocaleString() + ' ฿';

    document.querySelectorAll('.delete-booking-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = e.currentTarget.getAttribute('data-index');
        bookings.splice(idx, 1);
        localStorage.setItem('lumina_bookings', JSON.stringify(bookings));
        renderAdminDashboard();
      });
    });
  }

  // Google Maps Placeholder handler
  document.getElementById('btnGoogleMaps').addEventListener('click', () => {
    window.open('https://maps.google.com/?q=Sukhumvit+Bangkok', '_blank');
  });

});
