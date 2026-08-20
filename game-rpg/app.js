// Дефолтний стан гри (використовується, якщо localStorage порожній)
const defaultState = {
    character: {
        name: "Костянтин (Капітан 'Стріли')",
        tags: ["Чарівний контрабандист", "Знавець технологій", "Боїться висоти"],
        inventory: [{ name: "Компас Ефіру" }, { name: "Ржавий револьвер" }],
        stats: { health: 100, inspiration_points: 2 }
    },
    game_context: {
        active_window: [
            { role: "gm", text: "Ви вбігаєте в напівзруйновану таверну. Двері за вами зачиняються, але ви чуєте кроки патрульних." }
        ]
    }
};

// 1. Завантаження стану
let gameState = JSON.parse(localStorage.getItem('chronicles_save')) || defaultState;

// 2. Відмальовка UI
function renderUI() {
    document.getElementById('char-name').innerText = gameState.character.name;
    document.getElementById('char-hp').innerText = gameState.character.stats.health;
    document.getElementById('char-insp').innerText = gameState.character.stats.inspiration_points;

    const tagsContainer = document.getElementById('char-tags');
    tagsContainer.innerHTML = gameState.character.tags.map(tag => `<span class="tag">${tag}</span>`).join('');

    const invContainer = document.getElementById('char-inventory');
    invContainer.innerHTML = gameState.character.inventory.map(item => `<li>${item.name}</li>`).join('');

    const chatContainer = document.getElementById('chat-history');
    chatContainer.innerHTML = gameState.game_context.active_window.map(msg => 
        `<div class="message ${msg.role}">${msg.text}</div>`
    ).join('');
    chatContainer.scrollTop = chatContainer.scrollHeight; // Автоскрол вниз
}

// 3. Збереження в localStorage
function saveGame() {
    localStorage.setItem('chronicles_save', JSON.stringify(gameState));
    renderUI();
}

// 4. Обробка дії гравця
document.getElementById('action-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const inputField = document.getElementById('action-input');
    const playerText = inputField.value.trim();
    if (!playerText) return;

    // Додаємо дію гравця в історію
    gameState.game_context.active_window.push({ role: "player", text: playerText });
    saveGame();
    inputField.value = '';

    // Блокуємо кнопку під час запиту
    const btn = document.getElementById('send-btn');
    btn.innerText = "ШІ думає...";
    btn.disabled = true;

    try {
        /* 
        // ТУТ БУДЕ ТВІЙ РЕАЛЬНИЙ REST API ЗАПИТ ДО PYTHON-БЕКЕНДУ:
        const response = await fetch('https://твій-сервер.com/api/action', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(gameState)
        });
        const data = await response.json();
        */

        // Симуляція відповіді від сервера (видалиш це, коли підключиш Python)
        await new Promise(r => setTimeout(r, 1500)); 
        const mockResponse = {
            narrative: "Ти швидко оглядаєшся і знаходиш схований люк під барною стійкою. Кроки за дверима стають гучнішими.",
            system_updates: { health_change: 0 }
        };

        // Оновлюємо стан на основі відповіді ШІ
        gameState.game_context.active_window.push({ role: "gm", text: mockResponse.narrative });
        gameState.character.stats.health += mockResponse.system_updates.health_change;
        saveGame();

    } catch (error) {
        console.error("Помилка зв'язку з бекендом:", error);
    } finally {
        btn.innerText = "Діяти";
        btn.disabled = false;
    }
});

// Первинна відмальовка при завантаженні
renderUI();
