/* =========================================================
   NAVIGATION
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");


/* Mobile menu */
if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        const active = navMenu.classList.toggle("active");

        menuBtn.setAttribute(
            "aria-expanded",
            active ? "true" : "false"
        );

        menuBtn.textContent = active ? "×" : "☰";
    });


    /* Close menu after clicking a navigation link */
    document.querySelectorAll(".nav-menu a").forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuBtn.textContent = "☰";
        });

    });

}


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        /* Ignore empty # links */
        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   ENQUIRY FORM
   ========================================================= */

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {

    enquiryForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const nameInput =
            document.getElementById("customerName");

        const requirementInput =
            document.getElementById("customerRequirement");

        const messageInput =
            document.getElementById("customerMessage");


        const name =
            nameInput ? nameInput.value.trim() : "";

        const requirement =
            requirementInput
                ? requirementInput.value
                : "";

        const message =
            messageInput
                ? messageInput.value.trim()
                : "";


        const text =
            `Hi SRS Engineers & Solar Systems,\n\n` +
            `Name: ${name}\n` +
            `Requirement: ${requirement}\n` +
            `Message: ${
                message ||
                "I would like more information."
            }`;


        const whatsappURL =
            "https://wa.me/918754670754?text=" +
            encodeURIComponent(text);


        window.open(
            whatsappURL,
            "_blank",
            "noopener,noreferrer"
        );

    });

}


/* =========================================================
   CHATBOT
   ========================================================= */

const chatbotButton =
    document.getElementById("chatbotButton");

const chatbot =
    document.getElementById("chatbot");

const closeChat =
    document.getElementById("closeChat");

const chatMessages =
    document.getElementById("chatbotMessages");

const chatInput =
    document.getElementById("chatInput");

const sendMessage =
    document.getElementById("sendMessage");


/* =========================================================
   OPEN CHAT
   ========================================================= */

function openChat() {

    if (!chatbot) return;

    chatbot.classList.add("active");

    chatbot.setAttribute(
        "aria-hidden",
        "false"
    );

    if (chatInput) {

        setTimeout(() => {
            chatInput.focus();
        }, 100);

    }

}


/* =========================================================
   CLOSE CHAT
   ========================================================= */

function closeChatWindow() {

    if (!chatbot) return;

    chatbot.classList.remove("active");

    chatbot.setAttribute(
        "aria-hidden",
        "true"
    );

}


/* =========================================================
   CHAT BUTTON
   ========================================================= */

if (chatbotButton) {

    chatbotButton.addEventListener(
        "click",
        () => {

            if (
                chatbot &&
                chatbot.classList.contains("active")
            ) {

                closeChatWindow();

            } else {

                openChat();

            }

        }
    );

}


/* =========================================================
   CLOSE CHAT BUTTON
   ========================================================= */

if (closeChat) {

    closeChat.addEventListener(
        "click",
        closeChatWindow
    );

}


/* =========================================================
   ADD CHAT MESSAGE
   ========================================================= */

function addMessage(text, type) {

    if (!chatMessages) return;

    const div =
        document.createElement("div");


    div.className =
        type === "user"
            ? "user-message"
            : "bot-message";


    div.innerHTML = text;


    chatMessages.appendChild(div);


    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


/* =========================================================
   CHATBOT REPLIES
   ========================================================= */

function getBotReply(input) {

    const q = input.toLowerCase().trim();


    /* =====================================================
       COMPANY
       ===================================================== */

    if (
        q.includes("what does srs do") ||
        q.includes("what do you do") ||
        q.includes("what is srs") ||
        q.includes("about srs") ||
        q.includes("company")
    ) {

        return `
            SRS Solar Systems provides practical solar,
            lighting, electrical and smart control solutions
            for homes, businesses, industries and public
            infrastructure.

            <br><br>

            Our solutions include solar power plants,
            solar lighting, AI-based solar cameras,
            street lighting and automatic control systems.
        `;
    }


    /* =====================================================
       PRODUCTS
       ===================================================== */

    if (
        q.includes("product") ||
        q.includes("what products") ||
        q.includes("products do you have")
    ) {

        return `
            We offer a range of solar, lighting and
            electrical products, including:

            <br><br>

            • Solar Panels<br>
            • Solar Street Lights<br>
            • AI-based Solar Cameras<br>
            • Street Light Controllers<br>
            • Smart Tank Level Indicators<br>
            • Cellphone Motor Starters<br>
            • Automatic Street Light Controllers

            <br><br>

            Need help choosing a product?

            <a
                href="https://wa.me/919943324006?text=Hi%20SRS%20Solar%20Systems%2C%20I%20need%20help%20choosing%20a%20product."
                target="_blank"
                rel="noopener noreferrer">

                Talk to our team →
            </a>
        `;
    }


    /* =====================================================
       SOLAR SOLUTIONS
       ===================================================== */

    if (
        q.includes("solar solution") ||
        q.includes("solar solutions") ||
        q.includes("solar power") ||
        q.includes("solar plant") ||
        q.includes("solar project")
    ) {

        return `
            We provide solar solutions including solar
            power plants, solar lighting, solar street
            lights and AI-based solar camera solutions.

            <br><br>

            Tell us about your requirement and our team
            can help you find the right solution.

            <br><br>

            <a
                href="https://wa.me/919943324006?text=Hi%20SRS%20Solar%20Systems%2C%20I%20have%20a%20solar%20requirement."
                target="_blank"
                rel="noopener noreferrer">

                Start a Solar Enquiry →
            </a>
        `;
    }


    /* =====================================================
       STREET LIGHTING
       ===================================================== */

    if (
        q.includes("street light") ||
        q.includes("street lighting") ||
        q.includes("lighting")
    ) {

        return `
            SRS provides solar and electrical street lighting
            solutions for different applications.

            <br><br>

            We also work with automatic street light
            controllers and smart lighting solutions.

            <br><br>

            Contact our team for specifications,
            availability or project requirements.
        `;
    }


    /* =====================================================
       SMART SOLUTIONS
       ===================================================== */

    if (
        q.includes("smart solution") ||
        q.includes("smart solutions") ||
        q.includes("smart control") ||
        q.includes("itank") ||
        q.includes("psdas")
    ) {

        return `
            SRS provides smart control and monitoring
            solutions alongside solar and electrical systems.

            <br><br>

            You can access our online platforms here:

            <br><br>

            <a
                href="https://web.itank.io/dashboard"
                target="_blank"
                rel="noopener noreferrer">

                → iTank Dashboard
            </a>

            <br><br>

            <a
                href="https://psdas.in/#/login"
                target="_blank"
                rel="noopener noreferrer">

                → PSDAS Login
            </a>
        `;
    }


    /* =====================================================
       PROJECTS
       ===================================================== */

    if (
        q.includes("project") ||
        q.includes("projects") ||
        q.includes("our work") ||
        q.includes("completed work")
    ) {

        return `
            You can explore our completed work in the
            <b>Our Work</b> section of the website.

            <br><br>

            One of the projects currently featured is our
            Maruthamalai initiative.

            <br><br>

            <a href="#work">
                View Our Work →
            </a>
        `;
    }


    /* =====================================================
       MARUTHAMALAI
       ===================================================== */

    if (
        q.includes("maruthamalai") ||
        q.includes("maruthamalai project")
    ) {

        return `
            The Maruthamalai project featured on our website
            showcases a plastic collection initiative at the
            Maruthamalai foothills.

            <br><br>

            You can view the project photos and details in
            our <b>Our Work</b> section.

            <br><br>

            <a href="#work">
                View Maruthamalai Project →
            </a>
        `;
    }


    /* =====================================================
       FOUNDER / HISTORY
       ===================================================== */

    if (
        q.includes("founder") ||
        q.includes("who started") ||
        q.includes("who founded")
    ) {

        return `
            SRS Solar Systems was founded with a vision to
            make clean and renewable energy solutions more
            accessible.

            <br><br>

            You can learn more about our journey and founder
            in the <b>About</b> section of the website.
        `;
    }


    /* =====================================================
       LOCATION
       ===================================================== */

    if (
        q.includes("where") ||
        q.includes("location") ||
        q.includes("coimbatore") ||
        q.includes("address") ||
        q.includes("located") ||
        q.includes("where are you") ||
        q.includes("where is your office")
    ) {

        return `
            <b>📍 Our Location</b>

            <br><br>

            SRS Solar Systems<br>
            No. 21, Poonga Nagar,<br>
            Machampalayam,<br>
            Sundarapuram,<br>
            Coimbatore - 641024

            <br><br>

            <a
                href="https://maps.app.goo.gl/xBnh7Crnd1rRDF2t5?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                class="chat-map-link">

                📍 Get Directions →
            </a>
        `;
    }


    /* =====================================================
       CONTACT
       ===================================================== */

    if (
        q.includes("contact") ||
        q.includes("phone") ||
        q.includes("call") ||
        q.includes("whatsapp") ||
        q.includes("talk to someone")
    ) {

        return `
            You can contact the SRS team through WhatsApp
            for enquiries and assistance.

            <br><br>

            <a
                href="https://wa.me/919943324006?text=Hi%20SRS%20Solar%20Systems%2C%20I%20would%20like%20to%20know%20more%20about%20your%20solutions."
                target="_blank"
                rel="noopener noreferrer">

                WhatsApp SRS →
            </a>
        `;
    }


    /* =====================================================
       QUOTATION
       ===================================================== */

    if (
        q.includes("quotation") ||
        q.includes("quote") ||
        q.includes("price") ||
        q.includes("cost") ||
        q.includes("rate") ||
        q.includes("get a quote")
    ) {

        return `
            Sure! Pricing depends on the product,
            quantity and project requirements.

            <br><br>

            Send us your requirement through WhatsApp
            and our team can assist you with a quotation.

            <br><br>

            <a
                href="https://wa.me/919943324006?text=Hi%20SRS%20Solar%20Systems%2C%20I%20would%20like%20to%20get%20a%20quotation."
                target="_blank"
                rel="noopener noreferrer">

                Request a Quotation →
            </a>
        `;
    }


    /* =====================================================
       DEFAULT RESPONSE
       ===================================================== */

    return `
        I can help you with SRS Solar Systems,
        our products, solar solutions, projects,
        smart solutions, location and enquiries.

        <br><br>

        Try asking:

        <br>

        • What does SRS do?<br>
        • What products do you have?<br>
        • What solar solutions do you provide?<br>
        • Tell me about your projects<br>
        • Where are you located?<br>
        • How can I contact you?
    `;
}


/* =========================================================
   SEND CHAT MESSAGE
   ========================================================= */

function sendChat() {

    if (!chatInput) return;


    const value =
        chatInput.value.trim();


    if (!value) return;


    /* User message */

    const safeValue =
        value
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");


    addMessage(
        safeValue,
        "user"
    );


    chatInput.value = "";


    /* Bot reply */

    setTimeout(() => {

        addMessage(
            getBotReply(value),
            "bot"
        );

    }, 350);

}


/* =========================================================
   SEND BUTTON
   ========================================================= */

if (sendMessage) {

    sendMessage.addEventListener(
        "click",
        sendChat
    );

}


/* =========================================================
   ENTER KEY
   ========================================================= */

if (chatInput) {

    chatInput.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {

                event.preventDefault();

                sendChat();

            }

        }
    );

}


/* =========================================================
   QUICK QUESTIONS
   ========================================================= */

document
    .querySelectorAll(".quick-questions button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (!chatInput) return;


                chatInput.value =
                    button.dataset.question || "";


                sendChat();

            }
        );

    });