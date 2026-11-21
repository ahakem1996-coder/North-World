const LANGUAGE_KEY = "masar-transport-language";
const TRANSLATIONS = Object.freeze({
  "عَالَمُ الشَّمَالِ لإدارة النقل": "North World Transport Management",
  "عَالَمُ الشَّمَالِ | إدارة النقل والحاويات": "North World | Transport & Container Management",
  "عَالَمُ الشَّمَالِ - الصفحة الرئيسية": "North World - Home",
  "عَالَمُ الشَّمَالِ": "North World",
  "إدارة النقل والحاويات": "Transport & Container Management",
  "إدارة النقل": "Transport Management",
  "إدارة العمليات": "Operations Management",
  "مدير النظام": "System Administrator",
  "الرئيسية": "Home",
  "القائمة الرئيسية": "Main Menu",
  "لوحة التحكم": "Dashboard",
  "استعلام الفسح": "Clearance Lookup",
  "استعلام عن فسح": "Look Up Clearance",
  "إصدار وثيقة نقل": "Issue Transport Document",
  "إصدار وثيقة": "Issue Document",
  "النقل الداخلي": "Domestic Transport",
  "إدارة العمليات الداخلية": "Domestic Operations Management",
  "أسعار الشركات": "Company Rates",
  "أسعار وتعريفة الشركات": "Company Tariff Rates",
  "الفواتير والحسابات": "Invoices & Accounts",
  "الفواتير وحسابات الشركات": "Invoices & Company Accounts",
  "إنشاء فاتورة جديدة": "Create New Invoice",
  "إصدار فاتورة جديدة": "Issue New Invoice",
  "رحلة نقل داخلي جديدة": "New Domestic Trip",
  "سجل عمليات النقل الداخلي": "Domestic Operations Log",
  "جدول تعريفة الأسعار المسجلة": "Tariff Rates Table",
  "سجل الفواتير الصادرة": "Issued Invoices Log",
  "الأسطول والسائقون": "Fleet & Drivers",
  "تتبع الرحلات": "Trip Tracking",
  "تتبع رحلات السائقين": "Driver Trip Tracking",
  "تكاليف الرحلات": "Trip Expenses",
  "مصروفات التشغيل": "Operating Expenses",
  "سجل موحد لمصروفات السائقين المسجلة على رحلاتهم.": "A unified record of driver expenses reported for their trips.",
  "إجمالي التكاليف المسجلة": "Total Recorded Expenses",
  "ريال سعودي": "Saudi Riyal",
  "عدد المصروفات": "Expense Count",
  "لكل السائقين": "All Drivers",
  "سجل مصروفات السائقين": "Driver Expense Records",
  "تُربط كل تكلفة بالرحلة والشاحنة التي أُضيفت عليها.": "Each expense is linked to its trip and truck.",
  "رقم السيارة": "Vehicle Plate",
  "الرحلة / الحاوية": "Trip / Container",
  "التكلفة": "Cost",
  "نوع التكلفة": "Expense Type",
  "المستندات": "Documents",
  "مرفقات التكلفة": "Expense Attachments",
  "مستندات إثبات التكلفة (PDF أو JPG أو PNG)": "Expense supporting documents (PDF, JPG, or PNG)",
  "حتى 4 ملفات، بإجمالي 8 MB (الملف الواحد حتى 5 MB).": "Up to 4 files, 8 MB total (up to 5 MB per file).",
  "تاريخ التسجيل": "Recorded At",
  "سجل تكاليف الرحلات المرتبطة بحسابك.": "Trip expenses linked to your account.",
  "إضافة تكلفة رحلة": "Add Trip Expense",
  "أدخل المصروف المرتبط بإحدى رحلاتك المقبولة.": "Enter an expense for one of your accepted trips.",
  "الرحلة المرتبطة": "Associated Trip",
  "بنزين": "Fuel",
  "قيمة المبلغ (ريال)": "Amount (SAR)",
  "اختر الرحلة": "Select a trip",
  "الملاحظات": "Notes",
  "تفاصيل إضافية عن التكلفة (اختياري)": "Additional expense details (optional)",
  "تظهر الرحلات بعد قبولها.": "Trips are available after you accept them.",
  "حفظ التكلفة": "Save Expense",
  "مصروفاتي المسجلة": "My Recorded Expenses",
  "لا توجد تكاليف مسجلة.": "No expenses recorded.",
  "رفع تذكرة موعد فسح PDF": "Upload Fasah Appointment PDF",
  "استخراج تفاصيل الحجز والمركبة والسائق والدخول والخروج محلياً، ثم مراجعتها قبل الحفظ.": "Extract booking, vehicle, driver, entry, and exit details locally, then review them before saving.",
  "ملف PDF الخاص بفسح": "Fasah PDF file",
  "ملف PDF نصي حتى 5 MB. الملفات الممسوحة ضوئياً غير مدعومة حالياً.": "Text-based PDF up to 5 MB. Scanned PDFs are not supported yet.",
  "استخراج البيانات": "Extract Data",
  "تفاصيل الحجز": "Booking Details",
  "رقم تذكرة المشغل": "Operator Ticket Number",
  "المنطقة / البوابة": "Zone / Gate",
  "اسم مشغل الميناء": "Port Contractor Name",
  "رقم مشغل الميناء": "Port Contractor ID",
  "تاريخ الموعد": "Appointment Date",
  "وقت الموعد": "Appointment Time",
  "تفاصيل المركبة": "Vehicle Details",
  "نوع لوحة المركبة": "Vehicle Plate Type",
  "اللون": "Color",
  "رقم تتبع المركبة": "Vehicle Reference ID",
  "الرقم التسلسلي للمركبة": "Vehicle Serial ID",
  "طراز المركبة": "Vehicle Model",
  "تفاصيل السائق": "Driver Details",
  "رقم جوال السائق": "Driver Mobile Number",
  "رقم رخصة السائق": "Driver License Number",
  "معلومات الدخول": "Entry Information",
  "الموقع داخل الميناء": "Location Within Port",
  "رقم البوليصة": "BL Number",
  "نوع البضاعة / الغرض": "Cargo Type / Purpose",
  "معلومات الخروج": "Exit Information",
  "الرقم المرجعي": "Reference Number",
  "الميناء / الموعد": "Port / Appointment",
  "المركبة": "Vehicle",
  "السائق / الجوال": "Driver / Mobile",
  "بيانات الخروج": "Exit Details",
  "البوليصة / البضاعة": "BL / Cargo",
  "الملف الأصلي": "Original File",
  "ملف PDF الأصلي": "Original PDF",
  "موعد فسح": "Fasah Appointment",
  "موعد محفوظ": "Appointment Saved",
  "تصدير الفسح إلى Excel": "Export clearances to Excel",
  "إضافة بيانات الفسح": "Add clearance data",
  "تعديل بيانات الفسح": "Edit clearance data",
  "حفظ تعديلات الفسح": "Save clearance changes",
  "تم تحديث بيانات الفسح.": "Clearance data updated.",
  "تم تصدير بيانات الفسح إلى Excel.": "Clearance data exported to Excel.",
  "لا يمكن تعديل بيانات فسح مرتبطة برحلة.": "Clearance records linked to trips cannot be edited.",
  "الرقم المرجعي للحجز": "Booking Reference Number",
  "رقم لوحة المركبة": "Vehicle Plate Number",
  "رقم البيان": "Declaration Number",
  "جوال السائق": "Driver Phone",
  "اختر المقاس": "Select size",
  "اختر النوع": "Select type",
  "اختر حالة الفسح": "Select clearance status",
  "استخدام بيانات الموعد للرحلة": "Use Appointment for Trip",
  "رقم جوال التذكرة لا يطابق سائقاً نشطاً واحداً لديه حساب في النظام.": "The ticket phone does not match exactly one active driver with an account.",
  "رقم الجوال في موعد الفسح لا يطابق سائقاً نشطاً واحداً لديه حساب في النظام.": "The appointment phone does not match exactly one active driver with an account.",
  "تم مطابقة السائق، لكن لا توجد شاحنة متاحة مرتبطة به.": "The driver matched, but no available truck is assigned to them.",
  "تم اختيار السائق تلقائياً بناءً على رقم الجوال في موعد الفسح.": "The driver was selected automatically using the phone number on the Fasah appointment.",
  "لم يُعثر على موعد فسح مطابق للبيان والحاوية. اختر السائق يدوياً.": "No Fasah appointment matched this declaration and container. Select the driver manually.",
  "موعد الفسح المطابق لا يحتوي على رقم جوال السائق. اختر السائق يدوياً.": "The matching Fasah appointment has no driver phone number. Select the driver manually.",
  "الحاوية مرتبطة ببيان جمركي مختلف عن بيانات الموعد.": "This container is linked to a different customs declaration than the appointment.",
  "الحاوية مسجلة لكن حالة الفسح ليست مفسوحة، لذلك لا يمكن إصدار طلب رحلة.": "The container is registered but not cleared, so a trip request cannot be issued.",
  "تعذر العثور على موعد فسح محفوظ.": "Could not find a saved Fasah appointment.",
  "لا تتضمن التذكرة رقم بيان وحاوية صالحين.": "The ticket does not contain a valid declaration and container number.",
  "تم تسجيل بيانات الحاوية من التذكرة والانتقال إلى إصدار الرحلة.": "Container details were recorded from the ticket and the trip form is ready.",
  "تم حفظ موعد فسح مع ملف PDF، وتم تعبئة نموذج الفسح تلقائياً.": "The Fasah appointment and PDF were saved, and the clearance form was filled automatically.",
  "تم مطابقة رقم الجوال مع السائق المسجل.": "The phone number matched the registered driver.",
  "تم ملء البيان والحاوية واسم الميناء وتاريخ الموعد من PDF. المقاس افتراضياً 40 قدم؛ أدخل نوع الحاوية وراجع التاريخ وفق إثبات الفسح الرسمي.": "Declaration, container, port name, and appointment date were filled from the PDF. Size defaults to 40 feet; enter the container type and verify the date against official clearance proof.",
  "تاريخ الفسح (من تاريخ الموعد في PDF)": "Clearance date (from the PDF appointment date)",
  "جلب أحدث بيانات مستخرجة من PDF": "Load latest data extracted from PDF",
  "سيتم استخدام أحدث تذكرة تم استخراج بياناتها.": "The most recently extracted PDF ticket will be used.",
  "لا توجد بيانات PDF محفوظة. ارفع تذكرة فسح واستخرج بياناتها أولاً.": "No PDF data is saved. Upload and extract a Fasah ticket first.",
  "أحدث تذكرة PDF لا تحتوي رقم البيان أو رقم الحاوية.": "The latest PDF ticket does not contain a declaration or container number.",
  "تم جلب بيانات الفسح من أحدث PDF مستخرج.": "Clearance data was loaded from the latest extracted PDF.",
  "تم جلب البيانات المتاحة من أحدث PDF مستخرج. أكمل رقم البيان أو الحاوية الناقص يدوياً.": "Available data was loaded from the latest extracted PDF. Enter the missing declaration or container number manually.",
  "أؤكد أن حالة الفسح وتاريخه مطابقان لإثبات فسح رسمي، وليس لتذكرة موعد فقط.": "I confirm the clearance status and date match official clearance proof, not just an appointment ticket.",
  "أكد حالة الفسح وتاريخه من مستند رسمي قبل الحفظ.": "Confirm the clearance status and date using official documentation before saving.",
  "تم إصدار وثيقة لهذا البيان.": "A document has already been issued for this declaration.",
  "أدخل تاريخ الفسح للحاوية المفسوحة.": "Enter the clearance date for a cleared container.",
  "لا يمكن استخدام بيانات الموعد لإصدار رحلة قبل تأكيد حالة الفسح.": "Appointment details cannot be used to create a trip until clearance is confirmed.",
  "تم حفظ بيانات الحاوية من الموعد، ومطابقة جوال السائق.": "Container details were saved from the appointment, and the driver's phone was matched.",
  "بوليصة الدخول": "Entry BL Number",
  "بيان الدخول": "Entry Declaration Number",
  "حاوية الدخول": "Entry Container Number",
  "بضاعة الدخول / الغرض": "Entry Cargo / Purpose",
  "الرقم التسلسلي للدخول": "Entry Serial Number",
  "موقع الدخول داخل الميناء": "Entry Location Within Port",
  "بوليصة الخروج": "Exit BL Number",
  "بيان الخروج": "Exit Declaration Number",
  "حاوية الخروج": "Exit Container Number",
  "بضاعة الخروج / الغرض": "Exit Cargo / Purpose",
  "الرقم التسلسلي للخروج": "Exit Serial Number",
  "موقع الخروج داخل الميناء": "Exit Location Within Port",
  "اختر ملف PDF صحيحاً.": "Choose a valid PDF file.",
  "ارفع ملف PDF لتذكرة الموعد.": "Upload the appointment PDF.",
  "ابحث في السجلات أو ارفع تذكرة موعد فسح PDF لاستخراج بياناتها.": "Search records or upload a Fasah appointment PDF to extract its details.",
  "البحث يشمل بيانات الفسح المسجلة ومواعيد PDF المحفوظة.": "Search includes recorded clearances and saved PDF appointments.",
  "ابحث عن بيان أو موعد فسح مسجل.": "Search for a saved clearance or Fasah appointment.",
  "رقم مرجع الحجز مسجل مسبقاً.": "This booking reference is already registered.",
  "بيانات الحجز لا تطابق ملف PDF المرفق.": "The booking details do not match the attached PDF.",
  "تعذر قراءة الملف. ارفع تذكرة فسح بصيغة PDF ولا يتجاوز حجمها 5 MB.": "Could not read the file. Upload a Fasah PDF ticket no larger than 5 MB.",
  "الملف ليس تذكرة موعد فسح بالتنسيق المدعوم.": "This PDF is not a supported Fasah appointment ticket.",
  "تعذر استخراج النص من الملف. استخدم PDF نصياً غير ممسوح ضوئياً.": "Could not extract text. Use a text-based PDF, not a scan.",
  "الحد الأقصى لتذكرة الموعد هو 5 صفحات.": "Appointment tickets are limited to 5 pages.",
  "تحقق من الرقم المرجعي والحقول المدخلة.": "Check the booking reference and entered fields.",
  "حفظ الموعد وملف PDF": "Save Appointment and PDF",
  "إلغاء": "Cancel",
  "سجل مواعيد فسح المرفوعة": "Uploaded Fasah Appointments",
  "تفاصيل الحجز والمركبة والسائق ومعلومات الدخول والخروج.": "Booking, vehicle, driver, entry, and exit details.",
  "تم استخراج البيانات؛ راجعها ثم احفظ السجل.": "Data extracted. Review it and save the record.",
  "بعض الحقول الأساسية لم تُستخرج. أكملها يدوياً قبل الحفظ.": "Some required fields were not extracted. Complete them before saving.",
  "تم حفظ موعد فسح مع ملف PDF. هذه بيانات التذكرة وليست تأكيداً لحالة الفسح.": "Fasah appointment and PDF saved. Ticket data does not confirm customs clearance status.",
  "لا توجد مواعيد فسح محفوظة.": "No Fasah appointments saved.",
  "لم يُعثر على مواعيد فسح مطابقة.": "No matching Fasah appointments found.",
  "لا توجد رحلات مقبولة لإضافة تكلفة.": "There are no accepted trips to add an expense to.",
  "تم تسجيل التكلفة.": "Expense recorded.",
  "تحقق من مبلغ ونوع المصروف والرحلة.": "Check the expense amount, type, and trip.",
  "لا يمكن إضافة تكلفة لهذه الرحلة.": "An expense cannot be added to this trip.",
  "هذه الخدمة متاحة لحسابات السائقين فقط.": "This feature is only available to driver accounts.",
  "رفع سيارات من Excel": "Import Trucks from Excel",
  "تنزيل نموذج السيارات": "Download Truck Template",
  "رفع سائقين من Excel": "Import Drivers from Excel",
  "تنزيل نموذج السائقين": "Download Driver Template",
  "تحميل نموذج Excel": "Download Excel Template",
  "اختر ملف Excel بصيغة .xlsx.": "Choose an Excel .xlsx file.",
  "حجم ملف Excel يجب ألا يتجاوز 3 MB.": "The Excel file must not exceed 3 MB.",
  "جارٍ استيراد البيانات...": "Importing data...",
  "تم استيراد ": "Imported ",
  " سائقاً بنجاح.": " driver(s) successfully.",
  " سيارة بنجاح.": " truck(s) successfully.",
  "صف ": "Row ",
  "بيانات ناقصة أو غير صحيحة.": "Missing or invalid data.",
  "تكرار بيانات داخل الملف.": "Duplicate data in the file.",
  "مسجل مسبقاً في النظام.": "Already registered in the system.",
  "رقم هوية السائق غير موجود أو غير نشط.": "The driver's national ID was not found or is inactive.",
  "تعذر قراءة ملف Excel. ارفع ملفاً صالحاً بصيغة .xlsx.": "Could not read the Excel file. Upload a valid .xlsx file.",
  "الحد الأقصى 500 صف في ملف Excel.": "The Excel file limit is 500 rows.",
  "الملف لا يحتوي على بيانات للاستيراد.": "The file contains no data to import.",
  "استخدم نموذج Excel الصحيح مع إبقاء صف العناوين كما هو.": "Use the correct Excel template and keep the header row unchanged.",
  "لم يتم استيراد البيانات بسبب وجود صفوف غير صحيحة:": "No data was imported because some rows are invalid:",
  "لم يتم استيراد البيانات بسبب وجود تعارض في الصفوف:": "No data was imported because some rows conflict:",
  "بيانات الصف غير صالحة.": "The row data is invalid.",
  "تم تنزيل نموذج Excel.": "Excel template downloaded.",
  "لا توجد شاحنة متاحة مرتبطة بهذا السائق. عيّن شاحنة متاحة من شاشة الأسطول.": "No available truck is assigned to this driver. Assign an available truck in Fleet.",
  "توجد أكثر من شاحنة متاحة مرتبطة بهذا السائق. اختر الشاحنة يدوياً.": "More than one available truck is assigned to this driver. Select a truck manually.",
  "الشاحنة المحددة لا ترتبط بسائق نشط له حساب. حدّث تعيين السائق من شاشة الأسطول.": "The selected truck is not assigned to an active driver with an account. Update its driver assignment in Fleet.",
  "متابعة الأسطول": "Fleet Tracking",
  "تابع الرحلات بعد قبول السائق وتحديث مراحلها. لا تعرض هذه الشاشة موقع GPS مباشراً.": "Track trips after the driver accepts them and records stage updates. This screen does not show live GPS location.",
  "تحديث الآن": "Refresh now",
  "اختر الميناء": "Select a port",
  "ميناء الملك عبدالله": "King Abdullah Port",
  "الدمام": "Dammam",
  "بعد قبول السائق": "After driver acceptance",
  "تمت إعادة الفارغ": "Empty container returned",
  "آخر تحديث للبيانات": "Last Data Refresh",
  "تحديث تلقائي كل 30 ثانية عند فتح الشاشة": "Auto-refresh every 30 seconds while this screen is open",
  "عرض الرحلات": "Show Trips",
  "كل الرحلات المقبولة": "All accepted trips",
  "ابحث عن سائق أو شاحنة أو حاوية": "Search by driver, truck, or container",
  "لا توجد رحلات مقبولة تطابق البحث أو الفلتر.": "No accepted trips match this search or filter.",
  "المرحلة الحالية": "Current Stage",
  "آخر تحديث": "Last update",
  "قُبل الطلب في": "Request accepted",
  "البيان:": "Declaration:",
  "الحاوية:": "Container:",
  "المسار": "Route",
  "تم تحديث تتبع الرحلات.": "Trip tracking refreshed.",
  "أرشيف الوثائق": "Document Archive",
  "التقارير والتصدير": "Reports & Export",
  "حسابات المستخدمين": "User Accounts",
  "الإعداد الأول": "Initial Setup",
  "إنشاء حساب الأدمن": "Create Administrator Account",
  "أنشئ حساب المدير الأول لإدارة النظام وإضافة حسابات السائقين.": "Create the first administrator account to manage the system and add driver accounts.",
  "الدخول إلى النظام": "Sign in",
  "مرحباً بعودتك": "Welcome back",
  "سجّل الدخول للمتابعة إلى الواجهة المناسبة لحسابك.": "Sign in to continue to the workspace for your account.",
  "اسم المستخدم": "Username",
  "كلمة المرور": "Password",
  "تأكيد كلمة المرور": "Confirm password",
  "اسم مستخدم فريد": "Unique username",
  "١٢ حرفاً على الأقل": "At least 12 characters",
  "أعد كتابة كلمة المرور": "Re-enter your password",
  "تسجيل الدخول": "Sign in",
  "تسجيل الخروج": "Sign out",
  "خروج": "Sign out",
  "نسخة تجريبية محلية؛ الحسابات لا تُشارك بين الأجهزة.": "Local demo; accounts are not shared between devices.",
  "وضع العرض التجريبي": "Demo mode",
  "البيانات محفوظة محلياً على هذا الجهاز.": "Data is stored locally on this device.",
  "فسح": "Fasah",
  "بيان": "Bayan",
  "نقل": "Naql",
  "تجريبي": "Demo",
  "تجريبية": "Demo",
  "حالة الربط التجريبي": "Demo integration status",
  "فسح ونقل وبيان": "Fasah, Naql & Bayan",
  "نظرة عامة": "Overview",
  "أهلاً بك، مدير النظام": "Welcome, Administrator",
  "إليك ملخص حركة الأسطول والعمليات لهذا اليوم.": "Here is today's fleet and operations summary.",
  "عملية نقل جديدة": "New Transport",
  "إجمالي الأسطول النشط": "Active Fleet",
  "نشط": "Active",
  "شاحنة مسجلة": "Registered trucks",
  "وثائق النقل المصدرة": "Transport Documents Issued",
  "وثائق النقل المسجلة": "Recorded Transport Documents",
  "إجمالي الأرشيف": "Archive total",
  "وثيقة": "document",
  "حاويات مفسوحة اليوم": "Containers Cleared Today",
  "مفسوحة": "Cleared",
  "حسب بيانات العرض": "Based on demo data",
  "حسب بيانات الفسح المسجلة": "Based on recorded clearance details",
  "شاحنات في الموانئ": "Trucks at Ports",
  "قيد التشغيل": "In operation",
  "شاحنة": "truck",
  "آخر العمليات": "Recent Operations",
  "أحدث وثائق النقل المسجلة في النظام": "Latest transport documents recorded in the system",
  "عرض الأرشيف": "View Archive",
  "رقم الوثيقة": "Document Number",
  "الحاوية": "Container",
  "العميل": "Customer",
  "الميناء": "Port",
  "الحالة": "Status",
  "إجراءات": "Actions",
  "صادرة": "Issued",
  "عرض / طباعة الوثيقة": "View / Print Document",
  "عرض في الأرشيف": "View in Archive",
  "لا توجد عمليات بعد. ابدأ بالاستعلام عن بيان.": "No operations yet. Start by looking up a clearance.",
  "حالة الربط": "Integration Status",
  "حالة الخدمات التجريبية": "Demo service status",
  "مباشر": "Live",
  "منصة فسح": "Fasah Platform",
  "الاستعلام عن بيانات الفسح": "Look up clearance information",
  "منصة بيان": "Bayan Platform",
  "إصدار وثائق النقل": "Issue transport documents",
  "منصة نقل": "Naql Platform",
  "خدمة محاكاة محلية": "Local simulation service",
  "متصل تجريبياً": "Connected (Demo)",
  "بانتظار الربط": "Awaiting integration",
  "لن تُعرض الخدمة على أنها متصلة حتى ينجح فحص الاتصال الرسمي.": "A service will not be marked connected until its official connection test succeeds.",
  "الوصول السريع": "Quick Access",
  "ابدأ عملية أو راجع بياناتك بسرعة": "Start a process or review your data",
  "ابحث برقم البيان أو الحاوية": "Search by declaration or container number",
  "إنشاء وثيقة نقل جديدة": "Create a new transport document",
  "التقارير": "Reports",
  "تصفية وتصدير العمليات": "Filter and export operations",
  "السجلات الجمركية": "Customs Records",
  "بيانات الفسح": "Clearance Records",
  "ابحث في السجلات وأدخل بيانات الفسح يدوياً.": "Search records and enter clearance details manually.",
  "إدخال بيان يدوياً": "Enter Clearance Manually",
  "نوع الحاوية": "Container Type",
  "مدينة الميناء": "Port City",
  "اسم الميناء": "Port Name",
  "معلق": "On Hold",
  "حفظ بيانات الفسح": "Save Clearance Details",
  "هذه بيانات مدخلة يدوياً ولا يتم التحقق منها لدى منصة فسح.": "These details are entered manually and are not verified with Fasah.",
  "البحث يعرض السجلات المحفوظة يدوياً في قاعدة بيانات الشركة.": "Search shows records entered manually in the company database.",
  "إدخال يدوي": "Manual Entry",
  "بحث": "Search",
  "إنشاء طلب رحلة": "Create Trip Request",
  "ابحث عن بيان مسجل يدوياً أو أدخل بياناته.": "Search manually recorded clearances or enter new details.",
  "جارٍ البحث في سجلات الفسح المحفوظة…": "Searching saved clearance records…",
  "البيانات مدخلة يدوياً وغير متحققة من منصة فسح": "Manually entered; not verified by Fasah",
  "بيانات النقل": "Transport Details",
  "تسجيل وثيقة ورحلة": "Record Document and Trip",
  "سجّل الرحلة ورقم وثيقة النقل الصادر خارجياً إن توفر.": "Record the trip and an externally issued transport document number if available.",
  "اختر بياناً مفسوحاً مدخلاً يدوياً": "Select a manually entered cleared declaration",
  "مرجع وثيقة النقل": "Transport Document Reference",
  "اختياري — يُستخرج الرقم والتاريخ تلقائياً من PDF المرفق ويمكن تعديله": "Optional — the number and date are extracted automatically from the attached PDF and can be edited",
  "رقم وثيقة النقل": "Transport Document Number",
  "تاريخ الوثيقة": "Document Date",
  "المرجع المستخرج أو المدخل يُحفظ ولا يعني أن النظام أصدر الوثيقة أو تحقق منها.": "The extracted or entered reference is saved; this system did not issue or verify the document.",
  "جارٍ قراءة مستند النقل واستخراج المرجع...": "Reading the transport document and extracting its reference...",
  "تم استخراج رقم الوثيقة وتاريخها من PDF. راجعهما قبل الحفظ.": "The document number and date were extracted from the PDF. Review them before saving.",
  "تم استخراج جزء من مرجع الوثيقة. أكمل الخانة الناقصة يدوياً.": "Part of the document reference was extracted. Fill in the missing field manually.",
  "لم يتم العثور على رقم الوثيقة أو تاريخها في ملفات PDF. أدخلهما يدوياً.": "No document number or date was found in the PDFs. Enter them manually.",
  "انتظر انتهاء قراءة PDF قبل حفظ الرحلة.": "Wait for the PDF to finish processing before saving the trip.",
  "حفظ الرحلة": "Save Trip",
  "قبل حفظ الرحلة": "Before Saving the Trip",
  "تأكد من أن حالة الفسح المدخلة «مفسوح».": "Make sure the manually entered clearance status is “Cleared”.",
  "إدخال رقم الوثيقة يدوي ولا يثبت صحته؛ لا يتم حالياً إصدار أو تنزيل PDF حكومي من النظام.": "Entering a document number manually does not verify it; government documents cannot currently be issued or downloaded here.",
  "مدخل يدوياً": "Manually Entered",
  "بيانات وثيقة مدخلة يدوياً": "Document details entered manually",
  "تم حفظ بيانات الفسح اليدوية. لم يتم التحقق منها لدى منصة فسح.": "Manual clearance details saved. They were not verified with Fasah.",
  "تم حفظ الرحلة ومرجع وثيقة النقل؛ لم يصدر النظام الوثيقة.": "Trip and transport document reference saved; this system did not issue the document.",
  "تم إنشاء طلب الرحلة بدون رقم وثيقة.": "Trip request created without a document number.",
  "رقم البيان أو الحاوية مسجل مسبقاً.": "This declaration or container is already registered.",
  "بيانات الحاوية المسجلة لا تطابق المقاس أو النوع المدخل.": "The registered container size or type does not match the entered details.",
  "أدخل تاريخ الفسح للحاوية المفسوحة.": "Enter the clearance date for a cleared container.",
  "أدخل رقم الوثيقة وتاريخها معاً أو اتركهما فارغين.": "Enter both the document number and date, or leave both blank.",
  "هذه الوثيقة مسجلة يدوياً ولا توجد لها نسخة PDF مرفقة.": "This document was entered manually and has no attached PDF.",
  "تحقق من الملفات المرفقة وصيغها.": "Check the attached files and their formats.",
  "حجم الملف الواحد لا يتجاوز 5 MB وإجمالي الملفات لا يتجاوز 8 MB.": "Each file must be 5 MB or smaller, and all files must total 8 MB or less.",
  "لا تملك صلاحية تنزيل هذا المرفق.": "You are not allowed to download this attachment.",
  "حجم الطلب أكبر من الحد المسموح. قلّل حجم المرفقات.": "The request exceeds the maximum size. Reduce the attachment size.",
  "تعذر قراءة بيانات الطلب.": "The request data could not be read.",
  "مستندات الفسح (PDF أو JPG أو PNG)": "Clearance Documents (PDF, JPG, or PNG)",
  "مستندات وثيقة النقل (PDF أو JPG أو PNG)": "Transport Document Files (PDF, JPG, or PNG)",
  "حتى 4 ملفات، بإجمالي 8 MB (الملف الواحد حتى 5 MB).": "Up to 4 files, 8 MB total (up to 5 MB per file).",
  "المرفقات المحفوظة": "Saved Attachments",
  "مرفقات الفسح": "Clearance attachments",
  "مرفقات وثيقة النقل": "Transport document attachments",
  "تنزيل": "Download",
  "اختر 4 ملفات كحد أقصى.": "Choose no more than 4 files.",
  "حجم الملف الواحد لا يتجاوز 5 MB.": "Each file must be 5 MB or smaller.",
  "إجمالي المرفقات لا يتجاوز 8 MB.": "Attachments must total 8 MB or less.",
  "ارفع ملفات PDF أو JPG أو PNG فقط.": "Upload PDF, JPG, or PNG files only.",
  "خدمات المنصات": "Platform Services",
  "ابحث عن بيانات الحاوية والبيان الجمركي — بيانات تجريبية.": "Search container and customs declaration details — demo data.",
  "خدمة محاكاة فسح": "Fasah simulation service",
  "أدخل رقم البيان الجمركي أو رقم الحاوية": "Enter a customs declaration or container number",
  "بحث عن البيان": "Search Declaration",
  "جرّب:": "Try:",
  "لم يتم العثور على نتائج": "No results found",
  "تحقق من الرقم أو جرّب أحد أرقام البيانات التجريبية.": "Check the number or try one of the demo declaration numbers.",
  "بيان جمركي:": "Customs Declaration:",
  "حاوية": "Container",
  "رقم الحاوية": "Container Number",
  "المقاس والنوع": "Size & Type",
  "رقم الرصاص الملاحي": "Shipping Seal Number",
  "اسم الباخرة": "Vessel Name",
  "تاريخ الفسح": "Clearance Date",
  "تم إصدار وثيقة لهذا البيان": "A document has already been issued for this declaration",
  "تحويل لإصدار وثيقة بيان": "Continue to Bayan Document",
  "بيان ونقل": "Bayan & Naql",
  "أكمل بيانات الرحلة لإصدار الوثيقة وحفظها في الأرشيف.": "Complete the trip details to issue the document and save it to the archive.",
  "وضع الإصدار التجريبي": "Demo issuance mode",
  "بيانات الفسح والحاوية": "Clearance & Container Details",
  "اختر بياناً مفسوحاً لربطه بالرحلة": "Select a cleared declaration to link to the trip",
  "البيان الجمركي": "Customs Declaration",
  "اختر بياناً مفسوحاً": "Select a cleared declaration",
  "تفاصيل الرحلة": "Trip Details",
  "بيانات السائق والعميل والتسليم": "Driver, customer, and delivery details",
  "الشاحنة": "Truck",
  "السائق": "Driver",
  "الشركة المستلمة": "Receiving Company",
  "مثال: شركة العميل": "Example: Customer Company",
  "وجهة التسليم": "Delivery Destination",
  "المدينة أو المستودع": "City or warehouse",
  "موعد إعادة الحاوية الفارغة": "Empty Container Return Due",
  "سيصدر رقم وثيقة رسمي فقط بعد نجاح طلب منصة بيان.": "An official document number is shown only after a successful response from Bayan.",
  "إصدار وثيقة بيان": "Issue Bayan Document",
  "قبل إصدار الوثيقة": "Before Issuing the Document",
  "تأكد من أن حالة الفسح «مفسوح».": "Make sure the clearance status is “Cleared”.",
  "اختر شاحنة متاحة وسائقاً نشطاً.": "Select an available truck and an active driver.",
  "أدخل بيانات العميل ووجهة التسليم بدقة.": "Enter the customer and delivery details accurately.",
  "تنويه": "Notice",
  "هذا نموذج تجريبي. لا يتم إرسال بيانات إلى منصة بيان أو نقل.": "This is a demo form. No data is sent to Bayan or Naql.",
  "إدارة الموارد": "Resource Management",
  "إدارة بيانات الشاحنات والسائقين المسجلة في المتصفح.": "Manage truck and driver records stored in this browser.",
  "إضافة شاحنة": "Add Truck",
  "رقم الأسطول": "Fleet Number",
  "تحديد السيارة ": "Select truck ",
  "تحديد السائق ": "Select driver ",
  "السائق المعيّن للسيارة ": "Driver assigned to truck ",
  "حالة ": "Status ",
  "حذف السيارة ": "Delete truck ",
  "حذف السائق ": "Delete driver ",
  "تعديل السيارة ": "Edit truck ",
  "تعديل السائق ": "Edit driver ",
  "رقم السيارة (حروف وأرقام)": "Vehicle Plate (Letters & Numbers)",
  "الرقم التسلسلي": "Serial Number",
  "رقم الهيكل": "Chassis Number",
  "الموديل": "Model",
  "سنة الصنع / الطراز": "Year / Model",
  "اسم السائق": "Driver Name",
  "حفظ الشاحنة": "Save Truck",
  "السيارات والسائقون": "Trucks & Drivers",
  "سيارة — رقم اللوحة والسائق والحالة": "trucks — plate, driver, and status",
  "تم تحديد": "Selected",
  "حذف المحدد": "Delete Selected",
  "إلغاء التحديد": "Clear Selection",
  "ابحث عن سيارة أو سائق": "Search trucks or drivers",
  "تحديد السيارات الظاهرة": "Select visible trucks",
  "إضافة سائق": "Add Driver",
  "قائمة السائقين المسجلين وحالة نشاطهم.": "Registered drivers and their activity status.",
  "رقم الهوية / الإقامة": "National ID / Residency",
  "رقم الهوية": "ID Number",
  "رقم الجوال": "Mobile Number",
  "رقم جواز السفر": "Passport Number",
  "05xxxxxxxx": "05xxxxxxxx",
  "حفظ السائق": "Save Driver",
  "سائقاً مسجلاً": "registered drivers",
  "تحديد السائقين الظاهرين": "Select visible drivers",
  "الاسم": "Name",
  "الجوال": "Mobile",
  "جواز السفر": "Passport",
  "غير معيّن": "Unassigned",
  "غير نشط": "Inactive",
  "غير نشطة": "Inactive",
  "متاحة": "Available",
  "في رحلة": "On Trip",
  "صيانة": "Maintenance",
  "معلّق": "On Hold",
  "مرفوض": "Rejected",
  "قيد الإجراء": "Pending",
  "مفسوح": "Cleared",
  "لا توجد سيارات مطابقة.": "No matching trucks.",
  "لا يوجد سائقون مطابقون.": "No matching drivers.",
  "المستندات": "Documents",
  "ابحث برقم البيان أو الحاوية أو الوثيقة أو لوحة الشاحنة.": "Search by declaration, container, document, or truck plate number.",
  "ابحث في الأرشيف...": "Search the archive...",
  "تظهر نتائج الوثائق المحفوظة محلياً على هذا الجهاز.": "Documents saved locally on this device appear here.",
  "لا توجد وثائق مطابقة": "No matching documents",
  "الأرشيف فارغ": "The archive is empty",
  "جرّب البحث برقم مختلف.": "Try a different search term.",
  "ستظهر الوثائق هنا بعد إصدارها.": "Documents will appear here after they are issued.",
  "تاريخ الإصدار:": "Issue Date:",
  "وثيقة صادرة": "Issued Document",
  "اللوحة:": "Plate:",
  "العميل:": "Customer:",
  "السائق:": "Driver:",
  "عرض / PDF": "View / PDF",
  "تسجيل الإعادة": "Record Return",
  "تحليل العمليات": "Operations Analysis",
  "تصفية تفاصيل الفسح ووثائق النقل وعودة الحاويات الفارغة.": "Filter clearance details, transport documents, and empty-container returns.",
  "تصدير إلى Excel": "Export to Excel",
  "من تاريخ": "From Date",
  "إلى تاريخ": "To Date",
  "كل الموانئ": "All Ports",
  "الشركة": "Company",
  "اسم الشركة": "Company Name",
  "حالة عودة الفارغ": "Empty Return Status",
  "كل الحالات": "All Statuses",
  "تمت الإعادة": "Returned",
  "تقترب المهلة": "Due Soon",
  "متأخرة": "Overdue",
  "ضمن المهلة": "Within Free Time",
  "مسح الفلاتر": "Clear Filters",
  "سجل العمليات": "Operations Log",
  "تُحدّث النتائج تلقائياً حسب الفلاتر": "Results update automatically based on filters",
  "تاريخ العملية / الفسح": "Operation / Clearance Date",
  "السائق وبياناته": "Driver Details",
  "وثيقة بيان": "Bayan Document",
  "الحاوية والتفاصيل": "Container Details",
  "المسار": "Route",
  "عودة الفارغ / EIR": "Empty Return / EIR",
  "لا توجد نتائج مطابقة": "No matching results",
  "جرّب تغيير الفلاتر أو مسحها.": "Try changing or clearing the filters.",
  "إدارة الصلاحيات": "Access Management",
  "إنشاء حسابات الأدمن والسائقين وإدارة تسجيل الدخول.": "Create administrator and driver accounts and manage sign-in.",
  "إضافة حساب": "Add Account",
  "تعديل حساب": "Edit Account",
  "كلمات المرور تحفظ كتجزئة ولا تظهر في الجدول.": "Passwords are stored as hashes and are not shown in the table.",
  "نوع الحساب": "Account Type",
  "ربط بسجل السائق": "Link to Driver Record",
  "كلمة مرور جديدة (اختياري)": "New Password (Optional)",
  "تأكيد كلمة المرور الجديدة": "Confirm New Password",
  "اتركها فارغة للإبقاء على الحالية": "Leave blank to keep the current password",
  "أعد كتابة كلمة المرور الجديدة": "Re-enter the new password",
  "إنشاء الحساب": "Create Account",
  "حفظ التعديلات": "Save Changes",
  "إلغاء التعديل": "Cancel Editing",
  "استخدم كلمة مرور مختلفة لكل مستخدم. حسابات هذه النسخة محلية على هذا المتصفح.": "Use a different password for each user. Accounts in this version are stored in this browser.",
  "الحسابات المسجلة": "Registered Accounts",
  "حساب": "account",
  "أدمن": "Administrator",
  "السائق المرتبط": "Linked Driver",
  "تاريخ الإنشاء": "Created",
  "لا توجد حسابات مستخدمين.": "No user accounts.",
  "تعديل": "Edit",
  "واجهة تجريبية تعمل محلياً على جهازك": "Demo interface running locally on your device",
  "بوابة السائق": "Driver Portal",
  "مساحة السائق": "Driver Workspace",
  "رحلاتي": "My Trips",
  "الرحلات والوثائق المرتبطة بحسابك فقط.": "Only trips and documents linked to your account.",
  "حساب سائق": "Driver Account",
  "إجمالي الرحلات": "Total Trips",
  "الوثائق المرتبطة بحسابك": "Documents linked to your account",
  "رحلات قيد التنفيذ": "Active Trips",
  "بانتظار إعادة الحاوية": "Awaiting container return",
  "رحلات مكتملة": "Completed Trips",
  "تم تسجيل عودة الفارغ": "Empty container return recorded",
  "الرحلات والوثائق": "Trips & Documents",
  "تواصل مع الإدارة عند وجود اختلاف في بيانات الرحلة.": "Contact the administration if any trip details are incorrect.",
  "الميناء والوجهة": "Port & Destination",
  "موعد إعادة الفارغ": "Empty Return Due",
  "هذه واجهة تجريبية محلية، ولا ترسل تحديثات إلى منصة حكومية أو خادم مركزي.": "This is a local demo interface; it does not send updates to a government platform or central server.",
  "لا توجد رحلات مرتبطة بحسابك حالياً.": "No trips are currently linked to your account.",
  "مكتملة": "Completed",
  "من:": "From:",
  "إلى:": "To:",
  "العملية:": "Operation:",
  "الفسح:": "Clearance:",
  "إيصال EIR:": "EIR Receipt:",
  "المهلة المجانية:": "Free Time Ends:",
  "رقم الأسطول:": "Fleet No.:",
  "الرصاص:": "Seal:",
  "البيان:": "Declaration:",
  "رقم وثيقة بيان": "Bayan Document Number",
  "حالة الوثيقة": "Document Status",
  "رقم لوحة الشاحنة": "Truck Plate Number",
  "المقاس": "Size",
  "النوع": "Type",
  "رقم البيان الجمركي": "Customs Declaration Number",
  "من - الميناء": "From - Port",
  "إلى - الوجهة": "To - Destination",
  "تاريخ الاستحقاق لإعادة الفارغ": "Empty Return Due Date",
  "تاريخ إعادة الفارغ الفعلي": "Actual Empty Return Date",
  "رقم إيصال EIR": "EIR Receipt Number",
  "نهاية فترة السماح المجانية": "Free Time Expiration",
  "تقرير العمليات": "Operations Report",
  "تاريخ العملية": "Operation Date",
  "وثيقة نقل حاوية": "Container Transport Document",
  "نسخة تجريبية — غير صادرة من منصة حكومية": "Demo copy — not issued by a government platform",
  "بيانات الوثيقة والبيان الجمركي": "Document & Customs Declaration Details",
  "تاريخ الإصدار": "Issue Date",
  "بيانات الرحلة": "Trip Details",
  "الشاحنة / رقم الأسطول": "Truck / Fleet Number",
  "وثيقة للعرض والطباعة فقط. تم إنشاؤها من نموذج محلي ولا تمثل وثيقة رسمية أو تكاملاً فعلياً مع منصة بيان.": "For viewing and printing only. Generated locally; this is not an official document or a live integration with Bayan.",
  "تاريخ الطباعة:": "Print Date:",
  "تقرير-النقل-": "transport-report-",
  "مقاس والنوع": "Size & Type",
  "20 قدم": "20 ft",
  "40 قدم": "40 ft",
  "جافة": "Dry",
  "مبردة": "Refrigerated",
  "سقف مفتوح": "Open Top",
  "مسطحة": "Flat Rack",
  "صهريج": "Tank",
  "أخرى": "Other",
  "ميناء جدة الإسلامي": "Jeddah Islamic Port",
  "ميناء الملك عبدالعزيز بالدمام": "King Abdulaziz Port, Dammam",
  "ميناء الجبيل التجاري": "Jubail Commercial Port",
  "ميناء ينبع التجاري": "Yanbu Commercial Port",
  "الرياض إكسبريس": "Riyadh Express",
  "جدة ستار": "Jeddah Star",
  "الخليج الأزرق": "Blue Gulf",
  "ينبع مارين": "Yanbu Marine",
  "الملك فهد": "King Fahd",
  "جدة إكسبريس": "Jeddah Express",
  "شركة آفاق للتجارة": "Afaq Trading Company",
  "مؤسسة مدار الإمداد": "Madar Supply Establishment",
  "شركة روافد الصناعة": "Rawafid Industrial Company",
  "مستودع الرياض — السلي": "Riyadh Warehouse — Al Sulay",
  "مستودع الدمام — الصناعية الثانية": "Dammam Warehouse — 2nd Industrial City",
  "مستودع الجبيل": "Jubail Warehouse",
  "سائق تجريبي": "Demo Driver",
  "هوية تجريبية": "Demo ID",
  "جواز تجريبي": "Demo Passport",
  "تأخرت": "Overdue",
  "تمت الإعادة ": "Returned ",
  "متأخرة · الاستحقاق": "Overdue · Due",
  "تقترب المهلة ·": "Due soon ·",
  "ضمن المهلة ·": "Within free time ·",
  "تعذر العثور على نتائج": "No results found",
  "غير معروفة": "Unknown",
  "يوجد إصدار سابق لهذا البيان.": "A document was previously issued for this declaration.",
  " · صدر": " · Issued",
  "(غير نشط)": "(Inactive)",
  "تم تحديد ": "Selected ",
  " سيارة — رقم اللوحة والسائق والحالة": " trucks — plate, driver, and status",
  " · ": " · ",
  "اسم المستخدم يجب أن يتكون من ٣ أحرف على الأقل.": "Username must be at least 3 characters.",
  "اسم المستخدم مستخدم بالفعل.": "This username is already in use.",
  "كلمة المرور يجب ألا تقل عن ١٢ حرفاً.": "Password must be at least 12 characters.",
  "كلمتا المرور غير متطابقتين.": "Passwords do not match.",
  "اسم المستخدم أو كلمة المرور غير صحيحة.": "Incorrect username or password.",
  "حساب السائق غير نشط. يرجى التواصل مع الإدارة.": "This driver account is inactive. Please contact the administration.",
  "تعذر التحقق من كلمة المرور في هذا المتصفح.": "Could not verify the password in this browser.",
  "تعذر إنشاء الحساب في هذا المتصفح. افتح التطبيق عبر HTTPS أو localhost ثم أعد المحاولة.": "Could not create the account in this browser. Open the app over HTTPS or localhost and try again.",
  "تعذر حفظ البيانات محلياً. قد يكون التخزين غير متاح في هذا المتصفح.": "Could not save data locally. Storage may be unavailable in this browser.",
  "تعذر إنشاء الحساب في هذا المتصفح.": "Could not create the account in this browser.",
  "تعذر العثور على الحساب المطلوب.": "The requested account could not be found.",
  "لم يعد الحساب المحدد متاحاً للتعديل.": "The selected account is no longer available for editing.",
  "اختر سجلاً نشطاً لسائق لا يملك حساباً بعد.": "Select an active driver record that does not already have an account.",
  "لدى هذا السائق حساب مستخدم بالفعل.": "This driver already has a user account.",
  "لا يمكن تغيير نوع حساب آخر أدمن في النظام.": "The last administrator account cannot be changed to a driver account.",
  "تم حفظ تعديلات الحساب.": "Account changes saved.",
  "تم إنشاء الحساب. شارك اسم المستخدم وكلمة المرور مع صاحبه بشكل آمن.": "Account created. Share the username and password securely with its owner.",
  "لا يمكن حذف السيارة لوجود رحلة لم تُسجّل عودتها بعد.": "This truck cannot be deleted because it has an unreturned trip.",
  "لا يمكن حذف السائق لارتباطه برحلة لم تُسجّل عودتها بعد.": "This driver cannot be deleted because they have an unreturned trip.",
  "هل تريد حذف السيارة ": "Delete truck ",
  "؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.": "? Previous documents will remain in the archive.",
  "هل تريد حذف السائق ": "Delete driver ",
  "؟ ستبقى بياناته ظاهرة في وثائقه السابقة.": "? Their details will remain on previous documents.",
  "تم حذف السيارة من قائمة الأسطول مع الاحتفاظ بوثائقها السابقة.": "Truck removed from the fleet; previous documents were retained.",
  "تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.": "Driver removed from the list; previous records were retained.",
  "لم تُحذف السيارات المحددة؛ لا توجد سيارة آمنة للحذف ضمن الاختيار.": "No selected trucks were deleted; none were safe to delete.",
  "لم يُحذف السائقون المحددون؛ لا يوجد سائق آمن للحذف ضمن الاختيار.": "No selected drivers were deleted; none were safe to delete.",
  " وسيتم تخطي ": " Skipping ",
  " سيارة مرتبطة برحلة لم تُعد.": " truck(s) with unreturned trips.",
  " سائق مرتبط برحلة لم تُعد.": " driver(s) with unreturned trips.",
  "تأكيد حذف ": "Confirm deletion of ",
  " سيارة؟ ستبقى الوثائق السابقة في الأرشيف.": " truck(s)? Previous documents will remain in the archive.",
  " سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.": " driver(s)? Previous records will remain in the archive.",
  "تم حذف ": "Deleted ",
  " سيارة.": " truck(s).",
  " سائق.": " driver(s).",
  " تم الإبقاء على ": " Kept ",
  " لارتباطها برحلات نشطة.": " due to active trips.",
  " سائق لارتباطه برحلات نشطة.": " driver(s) due to active trips.",
  "تم تسجيل عودة الحاوية وتحديث حالة الشاحنة.": "Container return recorded and truck status updated.",
  "أدخل رقم إيصال التسليم EIR (اختياري):": "Enter the EIR delivery receipt number (optional):",
  "تعذر العثور على الوثيقة.": "Document not found.",
  "اسمح بالنوافذ المنبثقة لعرض نسخة الطباعة.": "Allow pop-ups to view the print copy.",
  "تعذر تحميل مكتبة Excel. تحقق من اتصال الإنترنت ثم أعد المحاولة.": "Could not load the Excel library. Check your internet connection and try again.",
  "تم تصدير ": "Exported ",
  " عملية إلى Excel.": " operation(s) to Excel.",
  "تم إنشاء وثيقة العرض ": "Demo document ",
  " وحفظها محلياً.": " created and saved locally.",
  "اختر بياناً جمركياً مفسوحاً أولاً.": "Select a cleared customs declaration first.",
  "سبق إصدار وثيقة لهذا البيان.": "A document has already been issued for this declaration.",
  "اختر شاحنة متاحة.": "Select an available truck.",
  "اختر سائقاً نشطاً.": "Select an active driver.",
  "أكمل اسم الشركة ووجهة التسليم.": "Enter the company name and delivery destination.",
  "تعذر العثور على السائق المحدد.": "The selected driver could not be found.",
  "تم تحديث حالة السيارة.": "Truck status updated.",
  "تم تحديث السائق المعيّن للسيارة.": "Assigned driver updated.",
  "أقسام السائق": "Driver Sections",
  "الطلبات": "Requests",
  "طلبات جديدة": "New Requests",
  "قبول الطلب": "Accept Request",
  "قبول الرحلة": "Accept Trip",
  "معلومات الطلب": "Request Details",
  "طلب جديد من الإدارة": "New request from the administration",
  "طلب جديد": "New Request",
  "لا يوجد حساب": "No account",
  "بانتظار قبولك": "Awaiting your acceptance",
  "بانتظار قبول السائق": "Awaiting Driver Acceptance",
  "بانتظار القبول": "Awaiting Acceptance",
  "لا توجد طلبات جديدة حالياً.": "There are no new requests right now.",
  "ستظهر هنا الرحلات التي يعيّنها لك مدير النظام.": "Trips assigned to you by the administrator will appear here.",
  "بعد قبول الطلب ستظهر مراحل الرحلة هنا.": "The trip stages will appear here after you accept the request.",
  "راجع تفاصيل الرحلة قبل القبول.": "Review the trip details before accepting.",
  "قبول الرحلة وبدء التتبع": "Accept Trip and Start Tracking",
  "تم قبول الرحلة. ابدأ التوجه إلى الميناء.": "Trip accepted. Start heading to the port.",
  "أنشئ حساباً للسائق المحدد قبل تعيين رحلة له.": "Create an account for the selected driver before assigning a trip.",
  "تم تحديث مرحلة الرحلة.": "Trip stage updated.",
  "لا يمكن تحديث مرحلة هذه الرحلة.": "This trip stage cannot be updated.",
  "لا يمكن قبول هذا الطلب.": "This request cannot be accepted.",
  "تأكيد المرحلة التالية": "Confirm Next Stage",
  "تاريخ الرحلة": "Trip Date",
  "الحاوية والمقاس": "Container & Size",
  "الميناء ووجهة التسليم": "Port & Delivery Destination",
  "موعد إعادة الحاوية": "Container Return Due",
  "طلب الرحلة": "Trip Request",
  "وثيقة الرحلة": "Trip Document",
  "في الطريق إلى الميناء": "En Route to Port",
  "تم استلام الحاوية": "Container Picked Up",
  "في الطريق للعميل": "En Route to Customer",
  "تم الوصول إلى العميل": "Arrived at Customer",
  "تم التسليم": "Delivered",
  "في الطريق للعودة": "Returning",
  "تم إعادة الفارغ": "Empty Container Returned",
  "تأكيد استلام الحاوية": "Confirm Container Pickup",
  "تأكيد الانطلاق إلى العميل": "Confirm Departure to Customer",
  "تأكيد الوصول إلى العميل": "Confirm Arrival at Customer",
  "تأكيد تسليم الحاوية": "Confirm Container Delivery",
  "تأكيد بدء العودة": "Confirm Return Journey",
  "تأكيد إعادة الفارغ": "Confirm Empty Container Return",
  "رقم إيصال التسليم EIR (اختياري)": "EIR Delivery Receipt Number (Optional)",
  "الرحلة مكتملة": "Trip Completed",
  "قيد التنفيذ": "In Progress",
  "السائق لم يقبل الطلب بعد": "The driver has not accepted the request yet",
  "مقبولة": "Accepted",
  "الخطوة": "Step",
  "من أصل": "of",
  "تم تسجيل إعادة الفارغ وإكمال الرحلة.": "Empty container return recorded; trip completed.",
  "تعذر حفظ مرحلة الرحلة.": "Could not save the trip stage.",
  "تم قبول طلب الرحلة.": "Trip request accepted.",
  "لا يمكن قبول طلب غير مخصص لحسابك.": "You cannot accept a request that is not assigned to your account.",
  "لا يمكن تغيير حالة شاحنة مرتبطة بطلب بانتظار قبول السائق.": "A truck assigned to a pending driver request cannot have its status changed.",
  "لا يمكن تغيير سائق الشاحنة قبل قبول الطلب أو إلغائه.": "The truck's driver cannot be changed while its request is pending.",
  "لا توجد وثائق نقل بعد.": "There are no transport documents yet.",
  "الرحلة": "Trip",
  "موعد التسليم": "Delivery Due",
  "عميل": "Customer",
  "وجهة العميل": "Customer Destination",
  "قبول الطلب وبدء الرحلة": "Accept Request and Start Trip",
  "تابع مراحل الرحلة وسجّل كل تحديث عند حدوثه.": "Track the trip stages and record each update as it happens.",
  "المرحلة الحالية": "Current Stage",
  "الخطوات المتبقية": "Remaining Steps",
  "تم": "Done",
  "نشطة": "Active",
  "طلب": "request",
  "طلبات": "requests",
  "رحلة": "trip",
  "رحلات": "trips",
  "السائقون": "Drivers",
  "سائق": "Driver",
  "اختر": "Select",
  "أو": "or",
  "عملية": "operation",
  "عمليات": "operations",
  "اختر سائقاً نشطاً للسيارة.": "Select an active driver for this truck.",
  "رقم الأسطول أو اللوحة أو الرقم التسلسلي مسجل مسبقاً.": "Fleet number, plate, or serial number is already registered.",
  "بيانات الشاحنة مسجلة مسبقاً.": "Truck details are already registered.",
  "تمت إضافة الشاحنة.": "Truck added.",
  "رقم الهوية أو جواز السفر مسجل مسبقاً.": "ID or passport number is already registered.",
  "بيانات السائق مسجلة مسبقاً.": "Driver details are already registered.",
  "تمت إضافة السائق.": "Driver added.",
  "تم تحديث بيانات الشاحنة.": "Truck details updated.",
  "تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.": "The truck was permanently deleted from the database; its previous documents and reports remain available.",
  " نهائياً من قاعدة البيانات؟ ستبقى رحلاتها ووثائقها السابقة محفوظة في الأرشيف.": " permanently from the database? Its trips and previous documents will remain in the archive.",
  " سيارة نهائياً من قاعدة البيانات؟ ستبقى رحلاتها ووثائقها السابقة محفوظة في الأرشيف.": " truck(s) permanently from the database? Their trips and previous documents will remain in the archive.",
  "تم تحديث بيانات السائق.": "Driver details updated.",
  "يتطلب النظام اتصالاً بخادم الشركة. لا تُحفظ بيانات العمل على هذا الجهاز.": "A connection to the company server is required. Business data is not stored on this device.",
  "بيانات مركزية آمنة": "Secure central data",
  "تُحفظ العمليات على خادم الشركة.": "Operations are stored on the company server.",
  "حالة الخدمات الحكومية من الخادم": "Government service status from the server",
  "غير مربوط": "Not connected",
  "تعذر التحقق": "Could not verify",
  "لن تُعرض الخدمة على أنها متصلة حتى ينجح فحص الاتصال الرسمي.": "A service will not be marked connected until its official connection test succeeds.",
  "يتم الاستعلام من خلال خدمة فسح المعتمدة فقط.": "Clearance lookups are performed only through the approved Fasah service.",
  "اتصال رسمي": "Official connection",
  "لا تُستخدم بيانات محاكاة عند تعذر الوصول إلى المنصة.": "Mock data is never used when the platform is unavailable.",
  "أنشئ طلب رحلة للسائق بعد التحقق من بيانات الفسح.": "Create a driver trip request after validating clearance details.",
  "سيصدر رقم وثيقة رسمي فقط بعد نجاح طلب منصة بيان.": "An official document number is shown only after a successful response from Bayan.",
  "إنشاء طلب الرحلة لا يعني صدور وثيقة حكومية. يظهر رقم بيان بعد استلام تأكيد المنصة فقط.": "Creating a trip request does not issue a government document. A Bayan number appears only after platform confirmation.",
  "تم إنشاء طلب الرحلة. وثيقة النقل الرسمية غير صادرة حتى يكتمل الربط المعتمد.": "The trip request was created. No official transport document has been issued because the approved integration is not configured.",
  "مسودة داخلية — غير صادرة": "Internal draft — not issued",
  "تعذر الإصدار الرسمي": "Official issuance failed",
  "ملخص رحلة داخلي": "Internal Trip Summary",
  "مسودة رحلة": "Trip Draft",
  "مسودة": "Draft",
  "مسودة داخلية — غير صادرة من منصة حكومية": "Internal draft — not issued by a government platform",
  "ملخص داخلي للرحلة فقط، ولا يُعد تصريحاً أو وثيقة صادرة من منصة حكومية.": "Internal trip summary only; it is not a permit or a document issued by a government platform.",
  "وثيقة نقل مرتبطة ببيانات الإصدار المستلمة من المنصة.": "Transport document based on issuance data received from the platform.",
  "تظهر الوثائق وطلبات الرحلات المحفوظة في قاعدة بيانات الشركة.": "Documents and trip requests stored in the company database appear here.",
  "استخدم كلمة مرور مختلفة لكل مستخدم. تُخزّن كلمات المرور مجزأة على الخادم.": "Use a different password for each user. Passwords are hashed on the server.",
  "تشغيل مركزي عبر خادم الشركة": "Central operation through the company server",
  "إنشاء طلب الرحلة": "Create Trip Request",
  "إصدار رسمي": "Official issuance",
  "لم يصدر بعد": "Not issued yet",
  "سجّل الدخول للمتابعة إلى الواجهة المناسبة لحسابك.": "Sign in to continue to the workspace for your account.",
  "تُحفظ تحديثات الرحلة على خادم الشركة. لا تمثل هذه التحديثات إصداراً حكومياً.": "Trip updates are saved to the company server. They do not constitute government document issuance.",
  "تعذر الاتصال بالخادم. تحقق من اتصال الشبكة ثم أعد المحاولة.": "Could not connect to the server. Check the network connection and try again.",
  "تم تحديث الحساب. سجّل الدخول مجدداً.": "Account updated. Please sign in again.",
  "تم تصدير التقرير من الخادم.": "Report exported from the server.",
  "لم يتم إنشاء بيانات بديلة أو نتائج محاكاة.": "No substitute or simulated data was generated.",
  "جارٍ الاتصال بخدمة فسح المعتمدة…": "Contacting the approved Fasah service…",
  "تحقق من الرقم أو تأكد من صلاحية الوصول في منصة فسح.": "Check the number or verify your access to Fasah.",
  "كلمة المرور يجب ألا تقل عن ١٢ حرفاً.": "Password must be at least 12 characters.",
  "انتهت الجلسة. سجّل الدخول مجدداً.": "Your session expired. Please sign in again.",
  "الربط الرسمي غير مهيأ حالياً. لم تُستخدم بيانات محاكاة.": "The official integration is not configured. No mock data was used.",
  "لا يمكن تعديل الشاحنة أو حذفها لارتباطها برحلة نشطة.": "This truck cannot be changed or deleted because it has an active trip.",
  "لا يمكن حذف السائق لارتباطه برحلة نشطة.": "This driver cannot be deleted because they have an active trip.",
  "السائق غير متاح أو لديه حساب بالفعل.": "This driver is unavailable or already has an account.",
  "البيان غير متاح أو سبق استخدامه في رحلة.": "This clearance is unavailable or already assigned to a trip.",
  "الشاحنة غير متاحة.": "This truck is unavailable.",
  "طلب الرحلة غير متاح لهذا الحساب.": "This trip request is unavailable to this account.",
  "تم تسجيل عودة الحاوية مسبقاً.": "The container return has already been recorded.",
  "لا يمكن تغيير نوع حساب آخر مدير في النظام.": "The last administrator account cannot be changed.",
  "تم رفض الطلب بسبب مصدر غير موثوق.": "The request was rejected because its origin is not trusted.",
  "تاريخ الطباعة: ": "Print Date: ",
  "الإصدار": "Issuance",
  "الحالة غير معروفة": "Unknown status"
});
const TRANSLATION_ENTRIES = Object.entries(TRANSLATIONS).sort((a, b) => b[0].length - a[0].length);
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
let language = localStorage.getItem(LANGUAGE_KEY) === "en" ? "en" : "ar";
const TRUCK_STATUSES = {
  AVAILABLE: { label: "متاحة", className: "status-available" },
  ASSIGNED: { label: "طلب جديد", className: "status-pending" },
  ON_TRIP: { label: "في رحلة", className: "status-on-trip" },
  MAINTENANCE: { label: "صيانة", className: "status-maintenance" },
  INACTIVE: { label: "غير نشطة", className: "status-neutral" }
};
const TRIP_STAGES = [
  { key: "EN_ROUTE_TO_PORT", label: "في الطريق إلى الميناء", action: "تأكيد استلام الحاوية" },
  { key: "CONTAINER_PICKED_UP", label: "تم استلام الحاوية", action: "تأكيد الانطلاق إلى العميل" },
  { key: "EN_ROUTE_TO_CUSTOMER", label: "في الطريق للعميل", action: "تأكيد الوصول إلى العميل" },
  { key: "ARRIVED_AT_CUSTOMER", label: "تم الوصول إلى العميل", action: "تأكيد تسليم الحاوية" },
  { key: "DELIVERED", label: "تم التسليم", action: "تأكيد بدء العودة" },
  { key: "RETURNING_EMPTY", label: "في الطريق للعودة", action: "تأكيد إعادة الفارغ" },
  { key: "EMPTY_RETURNED", label: "تم إعادة الفارغ", action: "" }
];
const CONTAINER_TYPES = {
  DRY: "جافة",
  REFRIGERATED: "مبردة",
  OPEN_TOP: "سقف مفتوح",
  FLAT_RACK: "مسطحة",
  TANK: "صهريج",
  OTHER: "أخرى"
};
const CLEARANCE_LABELS = {
  CLEARED: { text: "مفسوح", className: "status-issued" },
  PENDING: { text: "قيد الإجراء", className: "status-pending" },
  ON_HOLD: { text: "معلّق", className: "status-maintenance" },
  REJECTED: { text: "مرفوض", className: "status-maintenance" }
};
const EXPENSE_TYPE_LABELS = {
  FUEL: "بنزين",
  MAINTENANCE: "صيانة"
};
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function dateOnly(date = new Date()) {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function dateOffset(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return dateOnly(date);
}

let state = {
  trucks: [],
  drivers: [],
  clearances: [],
  docs: [],
  accounts: [],
  ports: [],
  tripExpenses: [],
  fasahAppointments: [],
  tariffs: [],
  invoices: [],
  customers: []
};
let editingTariffId = null;
let currentPrintableInvoiceId = null;
let latestFasahPdfExtraction = null;
let toastTimer;
let currentAccount = null;
let fasahSearchSequence = 0;
let pendingFasahAppointmentId = null;
let editingAccountId = null;
let editingTruckId = null;
let editingDriverId = null;
let activeDriverTab = "requests";
let trackingLastUpdatedAt = null;
let trackingRefreshInFlight = false;
let editingClearanceId = null;
let issueDriverMatchSequence = 0;
let autoMatchedIssueSelection = null;
let transportReferenceExtractionSequence = 0;
let transportReferenceExtractionInFlight = false;
const selectedTruckIds = new Set();
const selectedDriverIds = new Set();

function translateText(value) {
  let result = String(value ?? "");
  if (language !== "en") return result;
  for (const [arabic, english] of TRANSLATION_ENTRIES) result = result.replaceAll(arabic, english);
  return result;
}

function localizeDocument() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.title = translateText("عَالَمُ الشَّمَالِ | إدارة النقل والحاويات");
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const translated = translateText(originalText.get(node));
    if (node.nodeValue !== translated) node.nodeValue = translated;
  }
  $$("[placeholder], [aria-label], [title]").forEach(element => {
    let originals = originalAttributes.get(element);
    if (!originals) {
      originals = {};
      originalAttributes.set(element, originals);
    }
    ["placeholder", "aria-label", "title"].forEach(name => {
      if (element.hasAttribute(name) && !(name in originals)) originals[name] = element.getAttribute(name);
      if (name in originals) {
        const translated = translateText(originals[name]);
        if (element.getAttribute(name) !== translated) element.setAttribute(name, translated);
      }
    });
  });
  $$("[data-language-toggle]").forEach(button => {
    const label = language === "ar" ? "English" : "العربية";
    const ariaLabel = language === "ar" ? "Switch to English" : "التبديل إلى العربية";
    if (button.textContent !== label) button.textContent = label;
    if (button.getAttribute("aria-label") !== ariaLabel) button.setAttribute("aria-label", ariaLabel);
  });
}

function updateTodayLabel() {
  const locale = language === "ar" ? "ar-SA-u-ca-gregory" : "en-GB";
  $("#today-label").textContent = new Intl.DateTimeFormat(locale, {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  }).format(new Date());
}

function setLanguage(nextLanguage) {
  if (nextLanguage !== "ar" && nextLanguage !== "en") return;
  language = nextLanguage;
  localStorage.setItem(LANGUAGE_KEY, language);
  updateTodayLabel();
  localizeDocument();
  if (!$("#admin-app").classList.contains("hidden")) {
    const activeView = $(".view.active");
    if (activeView) switchView(activeView.id.replace("view-", ""));
  } else if (!$("#driver-app").classList.contains("hidden")) {
    renderDriverDashboard();
  }
  localizeDocument();
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
}

function formatDate(value) {
  if (!value) return "—";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return "—";
  const locale = language === "ar" ? "ar-SA-u-ca-gregory" : "en-GB";
  return new Intl.DateTimeFormat(locale, { day: "2-digit", month: "short", year: "numeric" }).format(date);
}

function formatDateTime(value) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  const locale = language === "ar" ? "ar-SA-u-ca-gregory" : "en-GB";
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
  }).format(date);
}

function formatCurrency(value) {
  const amount = Number(value);
  if (!Number.isFinite(amount)) return "—";
  const locale = language === "ar" ? "ar-SA" : "en-SA";
  return new Intl.NumberFormat(locale, { style: "currency", currency: "SAR" }).format(amount);
}

function showToast(message, isError = false) {
  const toast = $("#toast");
  toast.textContent = translateText(message);
  toast.classList.toggle("error", isError);
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3300);
}

function truckById(id) { return state.trucks.find(item => item.id === id); }
function truckForTrip(doc) {
  return truckById(doc.truckId) || (doc.truckPlateNumber || doc.truckFleetNumber ? {
    plateNumber: doc.truckPlateNumber,
    fleetNumber: doc.truckFleetNumber,
    serialNumber: doc.truckSerialNumber,
    model: doc.truckModel
  } : null);
}
function driverById(id) { return state.drivers.find(item => item.id === id); }
function clearanceById(id) { return state.clearances.find(item => item.id === id); }

function normalizedUsername(value) {
  return String(value || "").trim().toLocaleLowerCase();
}

const API_ERRORS = {
  authentication_required: "انتهت الجلسة. سجّل الدخول مجدداً.",
  driver_account_inactive: "حساب السائق غير نشط. يرجى التواصل مع الإدارة.",
  invalid_credentials: "اسم المستخدم أو كلمة المرور غير صحيحة.",
  setup_already_complete: "تم إنشاء حساب المدير الأول مسبقاً.",
  record_already_exists: "توجد بيانات مسجلة بهذه القيمة مسبقاً.",
  record_not_found: "السجل المطلوب غير موجود.",
  invalid_trip_expense: "تحقق من مبلغ ونوع المصروف والرحلة.",
  expense_trip_unavailable: "لا يمكن إضافة تكلفة لهذه الرحلة.",
  driver_only: "هذه الخدمة متاحة لحسابات السائقين فقط.",
  invalid_excel_file: "تعذر قراءة ملف Excel. ارفع ملفاً صالحاً بصيغة .xlsx.",
  invalid_fasah_pdf: "تعذر قراءة الملف. ارفع تذكرة فسح بصيغة PDF ولا يتجاوز حجمها 5 MB.",
  invalid_transport_document_pdf: "تعذر قراءة ملف PDF لمستند النقل.",
  transport_document_pdf_text_unavailable: "لا يحتوي PDF على نص قابل للقراءة. قد يكون ممسوحاً ضوئياً.",
  transport_document_pdf_page_limit: "يتجاوز PDF الحد الأقصى البالغ 20 صفحة للاستخراج.",
  unsupported_fasah_pdf: "الملف ليس تذكرة موعد فسح بالتنسيق المدعوم.",
  fasah_pdf_text_unavailable: "تعذر استخراج النص من الملف. استخدم PDF نصياً غير ممسوح ضوئياً.",
  fasah_pdf_page_limit: "الحد الأقصى لتذكرة الموعد هو 5 صفحات.",
  invalid_fasah_appointment: "تحقق من الرقم المرجعي والحقول المدخلة.",
  fasah_appointment_exists: "رقم مرجع الحجز مسجل مسبقاً.",
  fasah_pdf_reference_mismatch: "بيانات الحجز لا تطابق ملف PDF المرفق.",
  import_file_too_large: "حجم ملف Excel يجب ألا يتجاوز 3 MB.",
  import_row_limit_exceeded: "الحد الأقصى 500 صف في ملف Excel.",
  import_empty: "الملف لا يحتوي على بيانات للاستيراد.",
  invalid_import_headers: "استخدم نموذج Excel الصحيح مع إبقاء صف العناوين كما هو.",
  import_validation_failed: "لم يتم استيراد البيانات بسبب وجود صفوف غير صحيحة:",
  import_conflict: "لم يتم استيراد البيانات بسبب وجود تعارض في الصفوف:",
  truck_details_conflict: "بيانات الشاحنة مسجلة مسبقاً.",
  driver_details_conflict: "بيانات السائق مسجلة مسبقاً.",
  truck_has_active_trip: "لا يمكن تعديل الشاحنة أو حذفها لارتباطها برحلة نشطة.",
  driver_has_active_trip: "لا يمكن حذف السائق لارتباطه برحلة نشطة.",
  active_driver_required: "اختر سائقاً نشطاً.",
  driver_account_required: "أنشئ حساباً للسائق المحدد قبل تعيين رحلة له.",
  driver_account_unavailable: "السائق غير متاح أو لديه حساب بالفعل.",
  invalid_attachments: "تحقق من الملفات المرفقة وصيغها.",
  attachment_count_exceeded: "اختر 4 ملفات كحد أقصى.",
  attachment_size_exceeded: "حجم الملف الواحد لا يتجاوز 5 MB وإجمالي الملفات لا يتجاوز 8 MB.",
  attachment_type_invalid: "ارفع ملفات PDF أو JPG أو PNG فقط.",
  attachment_access_denied: "لا تملك صلاحية تنزيل هذا المرفق.",
  request_too_large: "حجم الطلب أكبر من الحد المسموح. قلّل حجم المرفقات.",
  invalid_request_body: "تعذر قراءة بيانات الطلب.",
  clearance_unavailable: "البيان غير متاح أو سبق استخدامه في رحلة.",
  invalid_manual_clearance_input: "تحقق من جميع حقول بيانات الفسح.",
  clearance_confirmation_required: "أكد حالة الفسح وتاريخه من مستند رسمي قبل الحفظ.",
  invalid_trip_input: "تحقق من بيانات الرحلة والوثيقة المدخلة.",
  container_details_conflict: "بيانات الحاوية المسجلة لا تطابق المقاس أو النوع المدخل.",
  clearance_has_trip: "لا يمكن تعديل بيانات فسح مرتبطة برحلة.",
  truck_unavailable: "الشاحنة غير متاحة.",
  trip_request_unavailable: "طلب الرحلة غير متاح لهذا الحساب.",
  trip_stage_unavailable: "لا يمكن تحديث مرحلة هذه الرحلة.",
  trip_already_returned: "تم تسجيل عودة الحاوية مسبقاً.",
  last_admin_required: "لا يمكن تغيير نوع حساب آخر مدير في النظام.",
  integration_not_configured: "الربط الرسمي غير مهيأ حالياً. لم تُستخدم بيانات محاكاة.",
  origin_not_allowed: "تم رفض الطلب بسبب مصدر غير موثوق."
};
const IMPORT_ROW_ERRORS = {
  invalid_row: "بيانات ناقصة أو غير صحيحة.",
  duplicate_in_file: "تكرار بيانات داخل الملف.",
  already_exists: "مسجل مسبقاً في النظام.",
  driver_not_found: "رقم هوية السائق غير موجود أو غير نشط."
};

async function apiRequest(path, options = {}) {
  const headers = new Headers(options.headers || {});
  headers.set("Accept", "application/json");
  if (options.body !== undefined) headers.set("Content-Type", "application/json");
  const response = await fetch(path, {
    ...options,
    headers,
    credentials: "same-origin",
    body: options.body === undefined ? undefined : JSON.stringify(options.body)
  });
  if (response.status === 204) return null;

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const baseMessage = API_ERRORS[payload.error] || payload.message || `تعذر إكمال الطلب (${response.status}).`;
    const details = Array.isArray(payload.details) ? payload.details.slice(0, 8).map(detail => {
      if (typeof detail === "string") return detail;
      const reason = IMPORT_ROW_ERRORS[detail.code] || "بيانات الصف غير صالحة.";
      return detail.row ? `صف ${detail.row}: ${reason}` : reason;
    }).join("، ") : "";
    const moreDetails = Array.isArray(payload.details) && payload.details.length > 8 ? " ..." : "";
    const message = [baseMessage, details, moreDetails].filter(Boolean).join(" ");
    const error = new Error(message);
    error.status = response.status;
    error.code = payload.error;
    throw error;
  }
  return payload;
}

async function encodeSelectedAttachments(input) {
  const files = Array.from(input.files || []);
  if (files.length > 4) throw new Error(translateText("اختر 4 ملفات كحد أقصى."));

  let totalSize = 0;
  const allowedTypes = new Map([
    [".pdf", "application/pdf"],
    [".jpg", "image/jpeg"],
    [".jpeg", "image/jpeg"],
    [".png", "image/png"]
  ]);
  const attachments = [];
  for (const file of files) {
    if (file.size > 5 * 1024 * 1024) throw new Error(translateText("حجم الملف الواحد لا يتجاوز 5 MB."));
    totalSize += file.size;
    if (totalSize > 8 * 1024 * 1024) throw new Error(translateText("إجمالي المرفقات لا يتجاوز 8 MB."));

    const extension = file.name.slice(file.name.lastIndexOf(".")).toLowerCase();
    const expectedType = allowedTypes.get(extension);
    if (!expectedType || (file.type && file.type !== expectedType)) {
      throw new Error(translateText("ارفع ملفات PDF أو JPG أو PNG فقط."));
    }

    const bytes = new Uint8Array(await file.arrayBuffer());
    let binary = "";
    for (let offset = 0; offset < bytes.length; offset += 0x8000) {
      binary += String.fromCharCode(...bytes.subarray(offset, offset + 0x8000));
    }
    attachments.push({ name: file.name, type: expectedType, data: btoa(binary) });
  }
  return attachments;
}

function renderAttachmentLinks(attachments, label = "المرفقات المحفوظة") {
  if (!Array.isArray(attachments) || !attachments.length) return "";
  return `<div class="attachment-list"><strong>${translateText(label)}</strong>${attachments.map(file =>
    `<a href="/api/attachments/${encodeURIComponent(file.id)}" download>${translateText("تنزيل")} ${escapeHtml(file.name)} (${Math.ceil(file.size / 1024)} KB)</a>`
  ).join("")}</div>`;
}

async function refreshServerState() {
  state = await apiRequest("/api/app-state");
  trackingLastUpdatedAt = new Date();
  renderDashboard();
  renderFasahResults($("#fasah-query").value);
  renderFasahAppointments();
  renderFleet();
  renderDrivers();
  populateTruckDriverOptions();
  populateIssueOptions($("#issue-clearance").value);
  renderDomesticTrips();
  populateDomesticOptions();
  renderTariffs();
  renderInvoices();
  populateInvoiceWizardCustomers();
  populateCustomerDatalist();
  renderTripTracking();
  renderTripExpenses();
  renderArchive($("#archive-query").value);
  renderReports();
  if (currentAccount?.role === "ADMIN") renderAccounts();
  if (currentAccount?.role === "DRIVER") renderDriverDashboard();
  await renderIntegrationHealth();
}

async function renderIntegrationHealth() {
  try {
    const integrations = await apiRequest("/api/integrations");
    for (const [provider, info] of Object.entries(integrations)) {
      const topItem = $(`[data-integration="${provider}"]`);
      const row = $(`[data-integration-row="${provider}"]`);
      const connected = info.status === "CONNECTED";
      const dot = topItem?.querySelector(".health-dot");
      if (dot) dot.className = `health-dot ${connected ? "good" : "warning"}`;
      const status = row?.querySelector("[data-integration-status]");
      if (status) {
        status.textContent = connected ? "متصل" : "غير مربوط";
        status.className = `status-pill ${connected ? "status-connected" : "status-pending"}`;
      }
    }
  } catch (error) {
    console.error("تعذر التحقق من حالة المنصات.", error);
    $$("[data-integration-status]").forEach(status => {
      status.textContent = "تعذر التحقق";
      status.className = "status-pill status-maintenance";
    });
  }
}

function showAuthMessage(message, isError = true) {
  const element = $("#auth-message");
  element.textContent = message;
  element.classList.remove("hidden", "success");
  if (!isError) element.classList.add("success");
}

function hideAuthMessage() {
  $("#auth-message").classList.add("hidden");
}

function showAuthScreen(setupRequired) {
  currentAccount = null;
  $("#admin-app").classList.add("hidden");
  $("#driver-app").classList.add("hidden");
  $("#auth-screen").classList.remove("hidden");
  hideAuthMessage();
  $("#auth-setup-panel").classList.toggle("hidden", !setupRequired);
  $("#auth-login-panel").classList.toggle("hidden", setupRequired);
}

async function showApplication(account) {
  currentAccount = account;
  await refreshServerState();
  $("#auth-screen").classList.add("hidden");
  if (account.role === "ADMIN") {
    $("#driver-app").classList.add("hidden");
    $("#admin-app").classList.remove("hidden");
    $("#admin-accounts-link").classList.remove("hidden");
    $("#current-user-name").textContent = account.username;
    $("#current-user-role").textContent = "مدير النظام";
    renderAccounts();
    switchView("dashboard");
    return;
  }
  const driver = driverById(account.driverId);
  if (!driver || driver.deletedAt || !driver.isActive) {
    showAuthScreen(false);
    showAuthMessage("حساب السائق غير نشط. يرجى التواصل مع الإدارة.");
    return;
  }
  $("#admin-app").classList.add("hidden");
  $("#driver-app").classList.remove("hidden");
  $("#driver-user-name").textContent = account.username;
  $("#driver-display-name").textContent = driver.name;
  activeDriverTab = state.docs.some(doc => doc.driverId === driver.id && doc.requestStatus === "PENDING") ? "requests" : "trips";
  renderDriverDashboard();
}

async function restoreSessionOrShowLogin() {
  try {
    const { user } = await apiRequest("/api/auth/session");
    await showApplication(user);
  } catch (error) {
    if (error.status !== 401) {
      showAuthScreen(false);
      showAuthMessage("تعذر الاتصال بالخادم. تحقق من اتصال الشبكة ثم أعد المحاولة.");
      return;
    }
    try {
      const { setupRequired } = await apiRequest("/api/auth/setup-status");
      showAuthScreen(setupRequired);
    } catch (setupError) {
      console.error("تعذر التحقق من إعداد النظام.", setupError);
      showAuthScreen(false);
      showAuthMessage("تعذر الاتصال بالخادم. تحقق من اتصال الشبكة ثم أعد المحاولة.");
    }
  }
}

async function setupFirstAdmin(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  const username = normalizedUsername(values.username);
  if (username.length < 3) return showAuthMessage("اسم المستخدم يجب أن يتكون من ٣ أحرف على الأقل.");
  if (state.accounts.some(account => normalizedUsername(account.username) === username && !account.deletedAt)) {
    return showAuthMessage("اسم المستخدم مستخدم بالفعل.");
  }
  if (values.password.length < 12) return showAuthMessage("كلمة المرور يجب ألا تقل عن ١٢ حرفاً.");
  if (values.password !== values.passwordConfirm) return showAuthMessage("كلمتا المرور غير متطابقتين.");
  try {
    const { user } = await apiRequest("/api/auth/setup", {
      method: "POST",
      body: { username, password: values.password }
    });
    form.reset();
    await showApplication(user);
  } catch (error) {
    showAuthMessage(error.message);
  }
}

async function login(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  try {
    const { user } = await apiRequest("/api/auth/login", {
      method: "POST",
      body: { username: normalizedUsername(values.username), password: values.password }
    });
    form.reset();
    await showApplication(user);
  } catch (error) {
    showAuthMessage(error.message);
  }
}

async function logout() {
  try {
    await apiRequest("/api/auth/logout", { method: "POST" });
  } catch (error) {
    if (error.status !== 401) console.error("تعذر إنهاء جلسة المستخدم.", error);
  }
  state = { trucks: [], drivers: [], clearances: [], docs: [], accounts: [] };
  editingAccountId = null;
  $("#account-form").reset();
  setAccountFormMode(false);
  try {
    const { setupRequired } = await apiRequest("/api/auth/setup-status");
    showAuthScreen(setupRequired);
  } catch (error) {
    showAuthScreen(false);
    showAuthMessage(error.message);
  }
}

function returnState(doc) {
  if (doc.returnedAt) return "returned";
  if (!doc.returnDueAt) return "active";
  const days = Math.ceil((new Date(`${doc.returnDueAt}T23:59:59`) - new Date()) / 86400000);
  if (days < 0) return "overdue";
  if (days <= 2) return "soon";
  return "active";
}

function returnLabel(doc) {
  const value = returnState(doc);
  if (value === "returned") return { text: `تمت الإعادة ${formatDate(doc.returnedAt)}${doc.eir ? ` · ${doc.eir}` : ""}`, className: "return-done" };
  if (value === "overdue") return { text: `متأخرة · الاستحقاق ${formatDate(doc.returnDueAt)}`, className: "return-late" };
  if (value === "soon") return { text: `تقترب المهلة · ${formatDate(doc.returnDueAt)}`, className: "return-soon" };
  return { text: `ضمن المهلة · ${formatDate(doc.returnDueAt)}`, className: "" };
}

function truckStatusPill(status) {
  const item = TRUCK_STATUSES[status] || TRUCK_STATUSES.INACTIVE;
  return `<span class="status-pill ${item.className}">${item.label}</span>`;
}

function clearanceStatusPill(status) {
  const item = CLEARANCE_LABELS[status] || CLEARANCE_LABELS.PENDING;
  return `<span class="status-pill ${item.className}">${translateText(item.text)}</span>`;
}

function documentStatus(doc) {
  if (doc.status === "DRAFT") return { text: translateText("مسودة داخلية — غير صادرة"), className: "status-pending" };
  if (doc.status === "FAILED") return { text: translateText("تعذر الإصدار الرسمي"), className: "status-maintenance" };
  if (doc.status === "CANCELLED") return { text: translateText("ملغاة"), className: "status-neutral" };
  if (doc.source === "MANUAL_ENTRY") {
    const tripStatus = doc.returnedAt ? "مكتملة"
      : doc.requestStatus === "PENDING" ? "بانتظار قبول السائق"
        : doc.acceptedAt ? "قيد التنفيذ" : "";
    return {
      text: [translateText("مدخل يدوياً"), tripStatus && translateText(tripStatus)].filter(Boolean).join(" · "),
      className: "status-issued"
    };
  }
  if (doc.requestStatus === "PENDING") return { text: translateText("بانتظار قبول السائق"), className: "status-pending" };
  if (doc.returnedAt) return { text: translateText("مكتملة"), className: "status-issued" };
  if (doc.acceptedAt) return { text: translateText("قيد التنفيذ"), className: "status-on-trip" };
  return { text: translateText("صادرة"), className: "status-issued" };
}

function documentLabel(doc) {
  return doc.documentNumber || "مسودة";
}

function showDriverTab(tab) {
  activeDriverTab = ["trips", "expenses"].includes(tab) ? tab : "requests";
  $("#driver-requests-panel").classList.toggle("active", activeDriverTab === "requests");
  $("#driver-trips-panel").classList.toggle("active", activeDriverTab === "trips");
  $("#driver-expenses-panel").classList.toggle("active", activeDriverTab === "expenses");
  $$(".driver-tab-button").forEach(button => button.classList.toggle("active", button.dataset.driverTab === activeDriverTab));
}

function switchView(name) {
  const view = $(`#view-${name}`);
  if (!view) return;
  $$(".view").forEach(item => item.classList.toggle("active", item === view));
  $$(".nav-link").forEach(item => item.classList.toggle("active", item.dataset.view === name));
  const titles = {
    dashboard: "لوحة التحكم",
    fasah: "استعلام الفسح",
    issue: "إصدار وثيقة نقل",
    domestic: "النقل الداخلي",
    tariffs: "أسعار وتعريفة الشركات",
    invoices: "الفواتير وحسابات الشركات",
    fleet: "الأسطول والسائقون",
    tracking: "تتبع الرحلات",
    expenses: "تكاليف الرحلات",
    archive: "أرشيف الوثائق",
    reports: "التقارير والتصدير",
    accounts: "حسابات المستخدمين"
  };
  $("#page-title").textContent = translateText(titles[name] || "الرئيسية");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (name === "dashboard") renderDashboard();
  if (name === "fasah") renderFasahResults($("#fasah-query").value);
  if (name === "issue") populateIssueOptions();
  if (name === "domestic") { renderDomesticTrips(); populateDomesticOptions(); }
  if (name === "tariffs") renderTariffs();
  if (name === "invoices") { renderInvoices(); populateInvoiceWizardCustomers(); }
  if (name === "fleet") { renderFleet(); renderDrivers(); }
  if (name === "tracking") renderTripTracking();
  if (name === "expenses") renderTripExpenses();
  if (name === "archive") renderArchive($("#archive-query").value);
  if (name === "reports") renderReports();
  if (name === "accounts") renderAccounts();
}

function renderDashboard() {
  $("#stat-trucks").textContent = state.trucks.filter(truck => !truck.deletedAt && truck.status !== "INACTIVE").length;
  $("#stat-documents").textContent = state.docs.filter(doc => doc.status === "ISSUED").length;
  $("#stat-clearances").textContent = state.clearances.filter(item => item.status === "CLEARED" && item.clearedAt === dateOnly()).length;
  $("#stat-ports").textContent = state.trucks.filter(truck => truck.status === "ON_TRIP").length;
  const rows = [...state.docs].sort((a, b) => b.issuedAt.localeCompare(a.issuedAt)).slice(0, 5);
  $("#recent-operations").innerHTML = rows.length ? rows.map(doc => `
    <tr>
      <td><span class="doc-number">${escapeHtml(documentLabel(doc))}</span></td>
      <td>${escapeHtml(doc.containerNumber)}</td>
      <td>${escapeHtml(doc.customerName)}</td>
      <td>${escapeHtml(doc.port)}</td>
      <td><span class="status-pill ${documentStatus(doc).className}">${documentStatus(doc).text}</span></td>
      <td><div class="mini-actions"><button class="icon-button" title="عرض / طباعة الوثيقة" data-action="pdf" data-id="${escapeHtml(doc.id)}">PDF</button><button class="icon-button" title="عرض في الأرشيف" data-action="archive" data-id="${escapeHtml(doc.id)}">↗</button></div></td>
    </tr>`).join("") : `<tr><td colspan="6" class="empty-row">لا توجد عمليات بعد. ابدأ بالاستعلام عن بيان.</td></tr>`;
}

function renderFasahAppointmentCard(appointment) {
  const details = [
    ["الرقم المرجعي للحجز", appointment.bookingReferenceNumber],
    ["رقم تذكرة المشغل", appointment.operatorTicketNumber],
    ["المنطقة / البوابة", appointment.zoneGateName],
    ["اسم مشغل الميناء", appointment.portContractorName],
    ["رقم مشغل الميناء", appointment.portContractorId],
    ["الميناء", appointment.portName],
    ["تاريخ الموعد", appointment.appointmentDate],
    ["وقت الموعد", appointment.appointmentTime],
    ["رقم لوحة المركبة", appointment.vehiclePlateNumber],
    ["نوع لوحة المركبة", appointment.vehiclePlateType],
    ["اللون", appointment.vehicleColor],
    ["رقم تتبع المركبة", appointment.vehicleRefId],
    ["الرقم التسلسلي للمركبة", appointment.vehicleSerialId],
    ["طراز المركبة", appointment.vehicleModel],
    ["اسم السائق", appointment.driverName],
    ["رقم جوال السائق", appointment.driverMobileNumber],
    ["رقم رخصة السائق", appointment.driverLicenseNumber],
    ["موقع الدخول داخل الميناء", appointment.entryLocation],
    ["بوليصة الدخول", appointment.entryBlNumber],
    ["بيان الدخول", appointment.entryDeclarationNumber],
    ["حاوية الدخول", appointment.entryContainerNumber],
    ["بضاعة الدخول / الغرض", appointment.entryCargoType],
    ["الرقم التسلسلي للدخول", appointment.entrySerialNumber],
    ["موقع الخروج داخل الميناء", appointment.exitLocation],
    ["بوليصة الخروج", appointment.exitBlNumber],
    ["بيان الخروج", appointment.exitDeclarationNumber],
    ["حاوية الخروج", appointment.exitContainerNumber],
    ["بضاعة الخروج / الغرض", appointment.exitCargoType],
    ["الرقم التسلسلي للخروج", appointment.exitSerialNumber]
  ].filter(([, value]) => value);
  return `<article class="result-card">
    <div class="result-card-head"><div><h3>${translateText("موعد فسح")}: ${escapeHtml(appointment.bookingReferenceNumber)}</h3><p>${escapeHtml(appointment.portName || "—")} · ${formatDate(appointment.appointmentDate)}</p></div><span class="status-pill status-neutral">${translateText("موعد محفوظ")}</span></div>
    <div class="result-details">${details.map(([label, value]) => `<div class="detail-item"><small>${translateText(label)}</small><strong>${escapeHtml(value)}</strong></div>`).join("")}</div>
    ${renderAttachmentLinks(appointment.attachments, "ملف PDF الأصلي")}
    <div class="result-card-actions"><button class="button button-primary" data-action="use-fasah-appointment" data-id="${escapeHtml(appointment.id)}">${translateText("استخدام بيانات الموعد للرحلة")}</button></div>
  </article>`;
}

function renderFasahAppointments() {
  const query = $("#fasah-query").value.trim().toLocaleLowerCase("en");
  const appointments = (state.fasahAppointments || []).filter(appointment =>
    !query || Object.values(appointment).some(value =>
      typeof value === "string" && value.toLocaleLowerCase("en").includes(query)
    )
  );
  $("#fasah-appointment-count").textContent = appointments.length;
  $("#fasah-appointment-rows").innerHTML = appointments.length ? appointments.map(appointment => `
    <tr>
      <td>${escapeHtml(appointment.bookingReferenceNumber)}</td>
      <td>${escapeHtml(appointment.portName || "—")}<br>${formatDate(appointment.appointmentDate)} ${escapeHtml(appointment.appointmentTime || "")}</td>
      <td>${escapeHtml(appointment.vehiclePlateNumber || "—")}<br>${escapeHtml(appointment.vehicleModel || "—")}</td>
      <td>${escapeHtml(appointment.driverName || "—")}<br>${escapeHtml(appointment.driverMobileNumber || "—")}</td>
      <td>البيان: ${escapeHtml(appointment.exitDeclarationNumber || "—")}<br>الحاوية: ${escapeHtml(appointment.exitContainerNumber || "—")}</td>
      <td>${escapeHtml(appointment.exitBlNumber || "—")}<br>${escapeHtml(appointment.exitCargoType || "—")}</td>
      <td>${renderAttachmentLinks(appointment.attachments, "ملف PDF الأصلي") || "—"}</td>
    </tr>`).join("") : `<tr><td colspan="7" class="empty-row">${translateText(query ? "لم يُعثر على مواعيد فسح مطابقة." : "لا توجد مواعيد فسح محفوظة.")}</td></tr>`;
}

function appointmentDeclarationNumber(appointment) {
  return appointment.exitDeclarationNumber || appointment.entryDeclarationNumber || "";
}

function appointmentContainerNumber(appointment) {
  return appointment.exitContainerNumber || appointment.entryContainerNumber || "";
}

function normalizeContainerNumber(value) {
  return String(value || "").trim().toLocaleUpperCase("en").replace(/\s/g, "");
}

function appointmentPortName(portName) {
  return String(portName || "").trim();
}

function portCityFromName(portName) {
  const value = String(portName || "").normalize("NFKC").toLocaleLowerCase("en");
  if (value.includes("جدة") || value.includes("jeddah")) return "جدة";
  if (value.includes("الملك عبدالله") || value.includes("king abdullah")) return "مدينة الملك عبدالله الاقتصادية";
  if (value.includes("الدمام") || value.includes("dammam") || value.includes("king abdulaziz")) return "الدمام";
  return "";
}

function updateClearancePortCity() {
  const portName = $("#clearance-port").value.trim();
  const city = portCityFromName($("#clearance-port").value);
  const cityInput = $("#clearance-port-city");
  cityInput.value = city;
  cityInput.required = Boolean(portName && !city);
  $("#clearance-port-city-field").classList.toggle("hidden", Boolean(city) || !portName);
}

function beginClearanceEdit(id) {
  const clearance = clearanceById(id);
  if (!clearance) return showToast("تعذر العثور على سجل الفسح.", true);
  if (state.docs.some(doc => doc.clearanceId === id)) {
    return showToast("لا يمكن تعديل بيانات فسح مرتبطة برحلة.", true);
  }

  editingClearanceId = id;
  pendingFasahAppointmentId = null;
  const form = $("#clearance-form");
  form.reset();
  for (const [field, value] of Object.entries({
    declarationNumber: clearance.declarationNumber,
    containerNumber: clearance.containerNumber,
    size: clearance.size === "20 قدم" ? "FT_20" : "FT_40",
    type: clearance.type,
    sealNumber: clearance.sealNumber || "",
    vesselName: clearance.vesselName || "",
    portName: clearance.port,
    status: clearance.status,
    clearedAt: clearance.clearedAt || ""
  })) {
    form.elements.namedItem(field).value = value;
  }
  const knownCity = portCityFromName(clearance.port);
  const cityInput = $("#clearance-port-city");
  cityInput.value = clearance.portCity || knownCity;
  cityInput.required = Boolean(clearance.port && !knownCity);
  $("#clearance-port-city-field").classList.toggle("hidden", Boolean(knownCity) || !clearance.port);
  $("#clearance-declaration-field").classList.remove("hidden");
  $("#clearance-confirmed").checked = false;
  $("#clearance-submit-button").textContent = translateText("حفظ تعديلات الفسح");
  $("#cancel-clearance-edit").classList.remove("hidden");
  $("#clearance-form-wrap").classList.remove("hidden");
  updateClearanceConfirmation();
  $("#clearance-form").scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelClearanceEdit() {
  editingClearanceId = null;
  pendingFasahAppointmentId = null;
  $("#clearance-form").reset();
  $("#clearance-declaration-field").classList.remove("hidden");
  $("#clearance-submit-button").textContent = translateText("إضافة بيانات الفسح");
  $("#cancel-clearance-edit").classList.add("hidden");
  $("#clearance-form-wrap").classList.add("hidden");
  updateClearancePortCity();
  updateClearanceConfirmation();
}

function fillClearanceFormFromAppointment(appointment, appointmentId = null, resetForm = true) {
  const declarationNumber = appointmentDeclarationNumber(appointment).trim();
  const containerNumber = appointmentContainerNumber(appointment).trim();
  if (!declarationNumber && !containerNumber) return false;

  pendingFasahAppointmentId = appointmentId;
  const form = $("#clearance-form");
  if (resetForm) form.reset();
  if (declarationNumber) form.elements.namedItem("declarationNumber").value = declarationNumber;
  if (containerNumber) form.elements.namedItem("containerNumber").value = containerNumber;
  if (resetForm) {
    form.elements.namedItem("size").value = appointment.containerSize || "FT_40";
    form.elements.namedItem("type").value = appointment.containerType || "";
    form.elements.namedItem("status").value = "CLEARED";
  }
  const appointmentDate = appointment.clearedAt || appointment.appointmentDate || "";
  if (appointmentDate || resetForm) form.elements.namedItem("clearedAt").value = appointmentDate;
  if (resetForm || declarationNumber) {
    $("#clearance-declaration-field").classList.toggle("hidden", Boolean(declarationNumber));
  }
  $("#clearance-confirmed").checked = false;
  const portInput = $("#clearance-port");
  const portName = appointmentPortName(appointment.portName);
  if (resetForm || portName) {
    portInput.value = portName;
    updateClearancePortCity();
  }
  updateClearanceConfirmation();
  $("#clearance-form-wrap").classList.remove("hidden");
  return Boolean(declarationNumber && containerNumber);
}

function fillClearanceFromLatestPdf() {
  const latestSavedAppointment = [...(state.fasahAppointments || [])].sort((left, right) =>
    Date.parse(right.createdAt) - Date.parse(left.createdAt)
  )[0];
  const savedAt = latestSavedAppointment
    ? Date.parse(latestSavedAppointment.createdAt)
    : Number.NEGATIVE_INFINITY;
  const useCurrentExtraction = Boolean(latestFasahPdfExtraction) &&
    latestFasahPdfExtraction.extractedAt >= savedAt;
  const appointment = useCurrentExtraction
    ? latestFasahPdfExtraction.fields
    : latestSavedAppointment;
  const appointmentId = useCurrentExtraction
    ? latestFasahPdfExtraction.appointmentId
    : latestSavedAppointment?.id;
  if (!appointment) {
    return showToast("لا توجد بيانات PDF محفوظة. ارفع تذكرة فسح واستخرج بياناتها أولاً.", true);
  }

  const hasIdentifiers = Boolean(
    appointmentDeclarationNumber(appointment).trim() ||
    appointmentContainerNumber(appointment).trim()
  );
  if (!hasIdentifiers) {
    return showToast("أحدث تذكرة PDF لا تحتوي رقم البيان أو رقم الحاوية.", true);
  }

  const complete = fillClearanceFormFromAppointment(appointment, appointmentId, false);
  showToast(complete
    ? "تم جلب بيانات الفسح من أحدث PDF مستخرج."
    : "تم جلب البيانات المتاحة من أحدث PDF مستخرج. أكمل رقم البيان أو الحاوية الناقص يدوياً.", !complete);
}

function updateClearanceConfirmation() {
  const isCleared = $("#clearance-status").value === "CLEARED";
  const checkbox = $("#clearance-confirmed");
  checkbox.required = isCleared;
  $("#clearance-confirmation-wrap").classList.toggle("hidden", !isCleared);
  if (!isCleared) checkbox.checked = false;
}

function normalizePhoneNumber(value) {
  const digits = String(value || "")
    .replace(/[٠-٩۰-۹]/g, digit => String("٠١٢٣٤٥٦٧٨٩۰۱۲۳۴۵۶۷٨٩".indexOf(digit) % 10))
    .replace(/\D/g, "");
  if (digits.startsWith("00966")) return `0${digits.slice(5)}`;
  if (digits.startsWith("966")) return `0${digits.slice(3)}`;
  if (digits.length === 9 && digits.startsWith("5")) return `0${digits}`;
  return digits;
}

function matchIssueDriverFromAppointment(appointment) {
  const phone = normalizePhoneNumber(appointment.driverMobileNumber);
  if (!phone) return "unmatched";
  const matches = state.drivers.filter(driver =>
    !driver.deletedAt && driver.isActive && hasActiveDriverAccount(driver.id) &&
    normalizePhoneNumber(driver.phone) === phone
  );
  if (matches.length !== 1) return "unmatched";

  $("#issue-driver").value = matches[0].id;
  syncIssueTruckDriver("driver", false);
  autoMatchedIssueSelection = {
    clearanceId: $("#issue-clearance").value,
    driverId: matches[0].id,
    truckId: $("#issue-truck").value
  };
  return $("#issue-truck").value ? "matched" : "no_available_truck";
}

function resetAppointmentIssueContext() {
  issueDriverMatchSequence += 1;
  autoMatchedIssueSelection = null;
  $("#issue-truck").value = "";
  $("#issue-driver").value = "";
  $("#issue-customer").value = "";
  $("#issue-destination").value = "";
  $("#issue-return-date").value = "";
}

function prepareTripFromFasahAppointment(id) {
  const appointment = (state.fasahAppointments || []).find(item => item.id === id);
  if (!appointment) return showToast("تعذر العثور على موعد فسح محفوظ.", true);

  const declarationNumber = appointmentDeclarationNumber(appointment).trim();
  const containerNumber = appointmentContainerNumber(appointment).trim();
  if (!declarationNumber || !containerNumber) {
    return showToast("لا تتضمن التذكرة رقم بيان وحاوية صالحين.", true);
  }

  const matchingClearances = state.clearances.filter(item =>
    normalizeContainerNumber(item.containerNumber) === normalizeContainerNumber(containerNumber)
  );
  if (matchingClearances.length) {
    const clearance = matchingClearances[0];
    if (clearance.declarationNumber.trim() !== declarationNumber) {
      return showToast("الحاوية مرتبطة ببيان جمركي مختلف عن بيانات الموعد.", true);
    }
    if (clearance.status !== "CLEARED") {
      return showToast("الحاوية مسجلة لكن حالة الفسح ليست مفسوحة، لذلك لا يمكن إصدار طلب رحلة.", true);
    }
    if (state.docs.some(doc => doc.clearanceId === clearance.id)) {
      return showToast("تم إصدار وثيقة لهذا البيان.");
    }

    switchView("issue");
    resetAppointmentIssueContext();
    populateIssueOptions(clearance.id);
    $("#issue-clearance").value = clearance.id;
    renderSelectedClearance();
    const driverMatch = matchIssueDriverFromAppointment(appointment);
    if (driverMatch === "matched") showToast("تم مطابقة رقم الجوال مع السائق المسجل.");
    else if (driverMatch === "no_available_truck") showToast("تم مطابقة السائق، لكن لا توجد شاحنة متاحة مرتبطة به.", true);
    else showToast("رقم جوال التذكرة لا يطابق سائقاً نشطاً واحداً لديه حساب في النظام.", true);
    return;
  }

  fillClearanceFormFromAppointment(appointment, appointment.id);
  showToast("تم ملء البيان والحاوية واسم الميناء وتاريخ الموعد من PDF. المقاس افتراضياً 40 قدم؛ أدخل نوع الحاوية وراجع التاريخ وفق إثبات الفسح الرسمي.");
  $("#clearance-form").scrollIntoView({ behavior: "smooth", block: "center" });
}

async function renderFasahResults(query) {
  const container = $("#fasah-results");
  const term = String(query || "").trim().toLowerCase();
  if (!term) {
    container.innerHTML = "";
    return;
  }
  const searchId = ++fasahSearchSequence;
  container.innerHTML = `<div class="panel empty-state"><strong>جارٍ البحث في سجلات الفسح المحفوظة…</strong></div>`;
  let matches;
  let appointmentMatches;
  try {
    const result = await apiRequest(`/api/fasah/lookup?q=${encodeURIComponent(term)}`);
    if (searchId !== fasahSearchSequence) return;
    matches = Array.isArray(result.clearances) ? result.clearances : [];
    appointmentMatches = Array.isArray(result.appointments) ? result.appointments : [];
    const appointmentIds = new Set(appointmentMatches.map(item => item.id));
    state.fasahAppointments = [
      ...appointmentMatches,
      ...(state.fasahAppointments || []).filter(item => !appointmentIds.has(item.id))
    ].slice(0, 100);
    renderFasahAppointments();
    for (const clearance of matches) {
      const index = state.clearances.findIndex(item => item.id === clearance.id);
      if (index === -1) state.clearances.push(clearance);
      else state.clearances[index] = clearance;
    }
  } catch (error) {
    if (searchId !== fasahSearchSequence) return;
    container.innerHTML = `<div class="panel empty-state"><strong>${escapeHtml(error.message)}</strong></div>`;
    return;
  }
  if (!matches.length && !appointmentMatches.length) {
    container.innerHTML = translateText(`<div class="panel empty-state"><span>⌕</span><strong>لم يتم العثور على نتائج</strong><p>ابحث عن بيان أو موعد فسح مسجل.</p></div>`);
    return;
  }
  const clearanceCards = matches.map(item => {
    const alreadyIssued = state.docs.some(doc => doc.clearanceId === item.id);
    return `<article class="result-card">
      <div class="result-card-head"><div><h3>بيان جمركي: ${escapeHtml(item.declarationNumber)}</h3><p>حاوية ${escapeHtml(item.containerNumber)} · بيانات مدخلة يدوياً وغير متحققة من منصة فسح</p></div>${clearanceStatusPill(item.status)}</div>
      <div class="result-details">
        <div class="detail-item"><small>رقم الحاوية</small><strong>${escapeHtml(item.containerNumber)}</strong></div>
        <div class="detail-item"><small>المقاس والنوع</small><strong>${escapeHtml(item.size)} · ${CONTAINER_TYPES[item.type] || "أخرى"}</strong></div>
        <div class="detail-item"><small>رقم الرصاص الملاحي</small><strong>${escapeHtml(item.sealNumber || "—")}</strong></div>
        <div class="detail-item"><small>اسم الباخرة</small><strong>${escapeHtml(item.vesselName || "—")}</strong></div>
        <div class="detail-item"><small>الميناء</small><strong>${escapeHtml(item.port)}</strong></div>
        <div class="detail-item"><small>تاريخ الفسح</small><strong>${formatDate(item.clearedAt)}</strong></div>
      </div>
      ${renderAttachmentLinks(item.attachments, "مرفقات الفسح")}
      <div class="result-card-actions"><button class="button button-light" data-action="edit-clearance" data-id="${escapeHtml(item.id)}" ${alreadyIssued ? "disabled title=\"لا يمكن تعديل سجل مرتبط برحلة\"" : ""}>تعديل بيانات الفسح</button>${alreadyIssued
        ? `<span class="status-pill status-neutral">تم إصدار وثيقة لهذا البيان</span>`
        : `<button class="button button-primary" data-action="issue-clearance" data-id="${escapeHtml(item.id)}" ${item.status !== "CLEARED" ? "disabled" : ""}>إنشاء طلب رحلة <span>←</span></button>`}
      </div>
    </article>`;
  }).join("");
  container.innerHTML = translateText(clearanceCards) + appointmentMatches.map(renderFasahAppointmentCard).join("");
}

function hasActiveDriverAccount(driverId) {
  return state.accounts.some(account =>
    account.role === "DRIVER" && account.driverId === driverId && account.isActive && !account.deletedAt
  );
}

function appointmentMatchesClearance(appointment, clearance) {
  const declarationNumber = clearance.declarationNumber.trim().toLocaleUpperCase("en");
  const containerNumber = normalizeContainerNumber(clearance.containerNumber);
  return [
    [appointment.entryDeclarationNumber, appointment.entryContainerNumber],
    [appointment.exitDeclarationNumber, appointment.exitContainerNumber]
  ].some(([appointmentDeclaration, appointmentContainer]) =>
    String(appointmentDeclaration || "").trim().toLocaleUpperCase("en") === declarationNumber &&
    normalizeContainerNumber(appointmentContainer) === containerNumber
  );
}

function clearAutoMatchedIssueSelection() {
  if (!autoMatchedIssueSelection) return;
  if ($("#issue-driver").value === autoMatchedIssueSelection.driverId) {
    $("#issue-driver").value = "";
  }
  if (autoMatchedIssueSelection.truckId &&
      $("#issue-truck").value === autoMatchedIssueSelection.truckId) {
    $("#issue-truck").value = "";
  }
  autoMatchedIssueSelection = null;
  renderSelectedDriverContact();
}

async function matchIssueDriverToSelectedClearance() {
  const clearanceId = $("#issue-clearance").value;
  const requestId = ++issueDriverMatchSequence;
  clearAutoMatchedIssueSelection();
  if (!clearanceId) return;
  const clearance = clearanceById(clearanceId);
  if (!clearance) return;

  let appointments = (state.fasahAppointments || [])
    .filter(appointment => appointmentMatchesClearance(appointment, clearance));
  if (!appointments.length) {
    try {
      const queries = [...new Set([clearance.declarationNumber, clearance.containerNumber].filter(Boolean))];
      const results = await Promise.all(queries.map(query =>
        apiRequest(`/api/fasah/lookup?q=${encodeURIComponent(query)}`)
      ));
      appointments = results.flatMap(result => result.appointments || [])
        .filter(appointment => appointmentMatchesClearance(appointment, clearance));
    } catch (error) {
      if (requestId === issueDriverMatchSequence && $("#issue-clearance").value === clearanceId) {
        showToast(error.message, true);
      }
      return;
    }
  }
  if (requestId !== issueDriverMatchSequence || $("#issue-clearance").value !== clearanceId) return;
  if (!appointments.length) {
    showToast("لم يُعثر على موعد فسح مطابق للبيان والحاوية. اختر السائق يدوياً.");
    return;
  }

  appointments.sort((first, second) =>
    (Date.parse(second.createdAt) || 0) - (Date.parse(first.createdAt) || 0)
  );
  const appointment = appointments[0];
  if (!normalizePhoneNumber(appointment.driverMobileNumber)) {
    showToast("موعد الفسح المطابق لا يحتوي على رقم جوال السائق. اختر السائق يدوياً.");
    return;
  }
  const result = matchIssueDriverFromAppointment(appointment);
  if (result === "matched") {
    showToast("تم اختيار السائق تلقائياً بناءً على رقم الجوال في موعد الفسح.");
  } else if (result === "no_available_truck") {
    showToast("تمت مطابقة السائق، لكن لا توجد شاحنة متاحة مرتبطة به.", true);
  } else {
    showToast("رقم الجوال في موعد الفسح لا يطابق سائقاً نشطاً واحداً لديه حساب في النظام.", true);
  }
}

function populateIssueOptions(selectedId = "") {
  const clearanceSelect = $("#issue-clearance");
  const truckSelect = $("#issue-truck");
  const driverSelect = $("#issue-driver");
  const existingClearance = selectedId || clearanceSelect.value;
  clearanceSelect.innerHTML = `<option value="">اختر بياناً مفسوحاً</option>` + state.clearances.map(item => {
    const issued = state.docs.some(doc => doc.clearanceId === item.id);
    return `<option value="${escapeHtml(item.id)}" ${item.status !== "CLEARED" || issued ? "disabled" : ""}>${escapeHtml(item.declarationNumber)} — ${escapeHtml(item.containerNumber)} (${CLEARANCE_LABELS[item.status]?.text || "قيد الإجراء"})${issued ? " · مرتبط برحلة" : ""}</option>`;
  }).join("");
  if (existingClearance && clearanceById(existingClearance)) clearanceSelect.value = existingClearance;
  const currentTruck = truckSelect.value;
  const currentDriver = driverSelect.value;
  const availableTrucks = state.trucks.filter(item => !item.deletedAt && item.status === "AVAILABLE");
  truckSelect.innerHTML = `<option value="">اختر الشاحنة</option>` + availableTrucks.map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(item.fleetNumber)} — ${escapeHtml(item.plateNumber)}</option>`).join("");
  if (availableTrucks.some(item => item.id === currentTruck)) truckSelect.value = currentTruck;
  const availableDrivers = state.drivers.filter(item => !item.deletedAt && item.isActive).map(item => ({
    ...item,
    hasAccount: hasActiveDriverAccount(item.id)
  }));
  driverSelect.innerHTML = `<option value="">اختر السائق</option>` + availableDrivers.map(item =>
    `<option value="${escapeHtml(item.id)}" ${item.hasAccount ? "" : "disabled"}>${escapeHtml(item.name)}${item.hasAccount ? "" : " — لا يوجد حساب"}</option>`
  ).join("");
  if (availableDrivers.some(item => item.id === currentDriver && item.hasAccount)) driverSelect.value = currentDriver;
  if (truckSelect.value) syncIssueTruckDriver("truck", false);
  else if (driverSelect.value) syncIssueTruckDriver("driver", false);
  if (!$("#issue-return-date").value) $("#issue-return-date").value = dateOffset(5);
  renderSelectedClearance();
  renderSelectedDriverContact();
}

function renderSelectedDriverContact() {
  const container = $("#issue-driver-contact");
  const driver = driverById($("#issue-driver").value);
  if (!driver) {
    container.classList.add("hidden");
    container.textContent = "";
    return;
  }
  container.classList.remove("hidden");
  container.innerHTML = `${translateText("جوال السائق")}: <strong>${escapeHtml(driver.phone || "—")}</strong>`;
}

function syncIssueTruckDriver(source, notify = true) {
  const truckSelect = $("#issue-truck");
  const driverSelect = $("#issue-driver");
  if (notify) {
    issueDriverMatchSequence += 1;
    autoMatchedIssueSelection = null;
  }
  const availableTrucks = state.trucks.filter(item => !item.deletedAt && item.status === "AVAILABLE");

  if (source === "truck") {
    const truck = availableTrucks.find(item => item.id === truckSelect.value);
    const driver = truck && state.drivers.find(item =>
      item.id === truck.driverId && !item.deletedAt && item.isActive &&
      hasActiveDriverAccount(item.id)
    );
    driverSelect.value = driver?.id || "";
    renderSelectedDriverContact();
    if (truck && !driver && notify) {
      showToast("الشاحنة المحددة لا ترتبط بسائق نشط له حساب. حدّث تعيين السائق من شاشة الأسطول.", true);
    }
    return;
  }

  const driverId = driverSelect.value;
  const matches = availableTrucks.filter(item => item.driverId === driverId);
  if (matches.length === 1) {
    truckSelect.value = matches[0].id;
    renderSelectedDriverContact();
    return;
  }
  truckSelect.value = "";
  renderSelectedDriverContact();
  if (driverId && notify) {
    showToast(matches.length > 1
      ? "توجد أكثر من شاحنة متاحة مرتبطة بهذا السائق. اختر الشاحنة يدوياً."
      : "لا توجد شاحنة متاحة مرتبطة بهذا السائق. عيّن شاحنة متاحة من شاشة الأسطول.", true);
  }
}

function renderSelectedClearance() {
  const item = clearanceById($("#issue-clearance").value);
  const box = $("#selected-clearance");
  if (!item) {
    box.classList.add("hidden");
    box.innerHTML = "";
    return;
  }
  box.classList.remove("hidden");
  box.innerHTML = `الحاوية: <strong>${escapeHtml(item.containerNumber)}</strong> · الميناء: <strong>${escapeHtml(item.port)}</strong> · الحالة: ${CLEARANCE_LABELS[item.status]?.text || "غير معروفة"}${state.docs.some(doc => doc.clearanceId === item.id) ? " · يوجد إصدار سابق لهذا البيان." : ""}`;
}

function renderFleet() {
  const term = $("#truck-filter").value.trim().toLowerCase();
  const activeTrucks = state.trucks.filter(item => !item.deletedAt);
  const filtered = activeTrucks.filter(item => [item.fleetNumber, item.plateNumber, item.serialNumber, item.model, driverById(item.driverId)?.name].some(value => String(value || "").toLowerCase().includes(term)));
  $("#truck-count").textContent = activeTrucks.length;
  $("#truck-rows").innerHTML = filtered.length ? filtered.map(item => `<tr>
    <td><input class="select-checkbox truck-select" type="checkbox" data-id="${escapeHtml(item.id)}" aria-label="تحديد السيارة ${escapeHtml(item.plateNumber)}" ${selectedTruckIds.has(item.id) ? "checked" : ""}></td>
    <td>${escapeHtml(item.fleetNumber)}</td><td>${escapeHtml(item.plateNumber)}</td><td>${escapeHtml(item.serialNumber)}</td><td>${escapeHtml(item.model)}</td>
    <td><select class="truck-driver" data-id="${escapeHtml(item.id)}" aria-label="السائق المعيّن للسيارة ${escapeHtml(item.plateNumber)}"><option value="">غير معيّن</option>${state.drivers.filter(driver => !driver.deletedAt).map(driver => `<option value="${escapeHtml(driver.id)}" ${item.driverId === driver.id ? "selected" : ""}>${escapeHtml(driver.name)}${driver.isActive ? "" : " (غير نشط)"}</option>`).join("")}</select></td>
    <td><select class="truck-status" data-id="${escapeHtml(item.id)}" aria-label="حالة ${escapeHtml(item.fleetNumber)}">${Object.entries(TRUCK_STATUSES).map(([key, status]) => `<option value="${key}" ${item.status === key ? "selected" : ""}>${status.label}</option>`).join("")}</select></td>
    <td><div class="row-actions"><button class="edit-account-button" type="button" data-action="edit-truck" data-id="${escapeHtml(item.id)}" aria-label="تعديل السيارة ${escapeHtml(item.plateNumber)}">تعديل</button><button class="delete-button" type="button" data-action="delete-truck" data-id="${escapeHtml(item.id)}" aria-label="حذف السيارة ${escapeHtml(item.plateNumber)}">حذف</button></div></td>
  </tr>`).join("") : `<tr><td colspan="8" class="empty-row">لا توجد سيارات مطابقة.</td></tr>`;
  updateBulkControls("trucks", filtered.map(item => item.id));
}

function populateTruckDriverOptions() {
  const select = $("#truck-driver");
  const selectedDriver = select.value;
  select.innerHTML = `<option value="">اختر السائق</option>` + state.drivers
    .filter(driver => !driver.deletedAt && driver.isActive)
    .map(driver => `<option value="${escapeHtml(driver.id)}">${escapeHtml(driver.name)}</option>`)
    .join("");
  if (state.drivers.some(driver => driver.id === selectedDriver && driver.isActive && !driver.deletedAt)) select.value = selectedDriver;
}

function renderDrivers() {
  const term = $("#driver-filter").value.trim().toLowerCase();
  const activeDrivers = state.drivers.filter(item => !item.deletedAt);
  const filtered = activeDrivers.filter(item => [item.name, item.nationalId, item.phone, item.passportNumber || ""].some(value => value.toLowerCase().includes(term)));
  $("#driver-count").textContent = activeDrivers.length;
  $("#driver-rows").innerHTML = filtered.length ? filtered.map(item => `<tr>
    <td><input class="select-checkbox driver-select" type="checkbox" data-id="${escapeHtml(item.id)}" aria-label="تحديد السائق ${escapeHtml(item.name)}" ${selectedDriverIds.has(item.id) ? "checked" : ""}></td>
    <td>${escapeHtml(item.name)}</td><td>${escapeHtml(item.nationalId)}</td><td>${escapeHtml(item.phone)}</td><td>${escapeHtml(item.passportNumber || "—")}</td>
    <td><span class="status-pill ${item.isActive ? "status-available" : "status-neutral"}">${item.isActive ? "نشط" : "غير نشط"}</span></td>
    <td><div class="row-actions"><button class="edit-account-button" type="button" data-action="edit-driver" data-id="${escapeHtml(item.id)}" aria-label="تعديل السائق ${escapeHtml(item.name)}">تعديل</button><button class="delete-button" type="button" data-action="delete-driver" data-id="${escapeHtml(item.id)}" aria-label="حذف السائق ${escapeHtml(item.name)}">حذف</button></div></td>
  </tr>`).join("") : `<tr><td colspan="7" class="empty-row">لا يوجد سائقون مطابقون.</td></tr>`;
  updateBulkControls("drivers", filtered.map(item => item.id));
}

function updateBulkControls(type, visibleIds) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

$("#admin-setup-form")?.addEventListener("submit", setupFirstAdmin);
$("#login-form")?.addEventListener("submit", login);

$$("[data-language-toggle]").forEach(button => {
  button.addEventListener("click", () => {
    language = language === "ar" ? "en" : "ar";
    localStorage.setItem(LANGUAGE_KEY, language);
    localizeDocument();
  });
});

$$("[data-view]").forEach(button => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

$("#logout-button")?.addEventListener("click", logout);
$("#driver-logout-button")?.addEventListener("click", logout);

restoreSessionOrShowLogin();

// Duplicate and trailing function stubs removed to fix file corruption and allow login page to load again.
// The following is the correct start of the beginTruckEdit function:
function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return showToast("تعذر العثور على السيارة المطلوبة.", true);
  if (editingDriverId) cancelDriverEdit();
  const form = $("#truck-form");
  editingTruckId = truck.id;
  form.reset();
  populateTruckDriverOptions();
  form.elements.fleetNumber.value = truck.fleetNumber;
  form.elements.plateNumber.value = truck.plateNumber;
  form.elements.serialNumber.value = truck.serialNumber;
  form.elements.model.value = truck.model;
  form.elements.driverId.value = truck.driverId;
  $("#truck-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-truck-edit").classList.remove("hidden");
  $("#truck-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelTruckEdit() {
  editingTruckId = null;
  $("#truck-form").reset();
  $("#truck-submit-button").textContent = "حفظ الشاحنة";
  $("#cancel-truck-edit").classList.add("hidden");
  $("#truck-form-wrap").classList.add("hidden");
  populateTruckDriverOptions();
}

async function deleteDriver(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السائق ${driver.name}؟ ستبقى بياناته ظاهرة في وثائقه السابقة.`)) return;
  try {
    await apiRequest(`/api/drivers/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingDriverId === id) cancelDriverEdit();
    selectedDriverIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السائق من القائمة مع الاحتفاظ بسجلاته السابقة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginDriverEdit(id) {
  const driver = driverById(id);
  if (!driver || driver.deletedAt) return showToast("تعذر العثور على السائق المطلوب.", true);
  if (editingTruckId) cancelTruckEdit();
  const form = $("#driver-form");
  editingDriverId = driver.id;
  form.reset();
  form.elements.name.value = driver.name;
  form.elements.nationalId.value = driver.nationalId;
  form.elements.phone.value = driver.phone;
  form.elements.passportNumber.value = driver.passportNumber || "";
  $("#driver-submit-button").textContent = "حفظ التعديلات";
  $("#cancel-driver-edit").classList.remove("hidden");
  $("#driver-form-wrap").classList.remove("hidden");
  form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelDriverEdit() {
  editingDriverId = null;
  $("#driver-form").reset();
  $("#driver-submit-button").textContent = "حفظ السائق";
  $("#cancel-driver-edit").classList.add("hidden");
  $("#driver-form-wrap").classList.add("hidden");
}

async function deleteSelectedTrucks() {
  const selected = [...selectedTruckIds].map(truckById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سيارة نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/trucks/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingTruckId)) cancelTruckEdit();
    result.deleted.forEach(id => selectedTruckIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سيارة نهائياً من قاعدة البيانات.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سيارة لارتباطها برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

async function deleteSelectedDrivers() {
  const selected = [...selectedDriverIds].map(driverById).filter(item => item && !item.deletedAt);
  if (!selected.length) return;
  if (!window.confirm(`تأكيد حذف ${selected.length} سائق؟ ستبقى سجلاتهم السابقة في الأرشيف.`)) return;
  try {
    const result = await apiRequest("/api/drivers/bulk-delete", {
      method: "POST",
      body: { ids: selected.map(item => item.id) }
    });
    if (result.deleted.includes(editingDriverId)) cancelDriverEdit();
    result.deleted.forEach(id => selectedDriverIds.delete(id));
    await refreshServerState();
    showToast(`تم حذف ${result.deleted.length} سائق.${result.blocked.length ? ` تم الإبقاء على ${result.blocked.length} سائق لارتباطه برحلات نشطة.` : ""}`, result.blocked.length > 0);
  } catch (error) {
    showToast(error.message, true);
  }
}

function selectVisibleRecords(type, visibleIds, selected) {
  const selectedIds = type === "trucks" ? selectedTruckIds : selectedDriverIds;
  const prefix = type === "trucks" ? "truck" : "driver";
  const visibleSelectedCount = visibleIds.filter(id => selectedIds.has(id)).length;
  const selectAll = $(`#select-all-${type}`);
  selectAll.checked = visibleIds.length > 0 && visibleSelectedCount === visibleIds.length;
  selectAll.indeterminate = visibleSelectedCount > 0 && visibleSelectedCount < visibleIds.length;
  selectAll.disabled = visibleIds.length === 0;
  const count = $(`#${prefix}-selection-count`);
  const deleteButton = $(`#delete-selected-${type}`);
  const clearButton = $(`#clear-selected-${type}`);
  count.textContent = `تم تحديد ${selectedIds.size}`;
  count.classList.toggle("hidden", selectedIds.size === 0);
  deleteButton.disabled = selectedIds.size === 0;
  deleteButton.textContent = `حذف المحدد${selectedIds.size ? ` (${selectedIds.size})` : ""}`;
  clearButton.classList.toggle("hidden", selectedIds.size === 0);
}

async function deleteTruck(id) {
  const truck = truckById(id);
  if (!truck || truck.deletedAt) return;
  if (!window.confirm(`هل تريد حذف السيارة ${truck.plateNumber} نهائياً من قاعدة البيانات؟ ستبقى وثائقها السابقة محفوظة في الأرشيف.`)) return;
  try {
    await apiRequest(`/api/trucks/${encodeURIComponent(id)}`, { method: "DELETE" });
    if (editingTruckId === id) cancelTruckEdit();
    selectedTruckIds.delete(id);
    await refreshServerState();
    showToast("تم حذف السيارة نهائياً من قاعدة البيانات؛ بقيت وثائقها وتقاريرها السابقة محفوظة.");
  } catch (error) {
    showToast(error.message, true);
  }
}

function beginTruckEdit(id) {
 