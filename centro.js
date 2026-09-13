// Função para Alternar Abas e Filtros
function switchTab(tabId) {
    const sections = document.querySelectorAll('.season-section');
    const buttons = document.querySelectorAll('.tab-btn');
    const allCards = document.querySelectorAll('.bundle-card');

    // Remove a classe 'active' de todos os botões e destaca o clicado
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons.forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        }
    });

    // Reseta o display individual de todos os cards
    allCards.forEach(card => card.style.display = 'block');

    // REGRA GERAL: Esconde TODAS as seções primeiro
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });

    // TRATAMENTO DOS FILTROS ESPECIAIS (Restantes e Concluídos)
    if (tabId === 'restantes' || tabId === 'concluidos') {
        // Ativa e exibe EXATAMENTE a mesma seção do 'todos' para manter o mesmo layout limpo
        const todosSection = document.getElementById('todos');
        if (todosSection) {
            todosSection.classList.add('active');
            todosSection.style.display = 'block';
        }

        // Filtra os cards apenas dessa seção ativa com base no status de conclusão
        allCards.forEach(card => {
            // Verifica se o card pertence à seção 'todos' (ou aplica globalmente caso não estejam aninhados)
            const isInsideTodos = todosSection && todosSection.contains(card);
            
            if (isInsideTodos || !todosSection) {
                const isCompleted = card.classList.contains('completed');
                if (tabId === 'restantes') {
                    card.style.display = isCompleted ? 'none' : 'block';
                } else if (tabId === 'concluidos') {
                    card.style.display = isCompleted ? 'block' : 'none';
                }
            } else {
                // Esconde os cards das outras seções para não duplicar visualmente
                card.style.display = 'none';
            }
        });
    } 
    // TRATAMENTO DAS ABAS NORMAIS (todos, plantacao, animal, etc.)
    else {
        const targetSection = document.getElementById(tabId);
        if (targetSection) {
            targetSection.classList.add('active');
            targetSection.style.display = 'block'; // Apenas a selecionada aparece
        }
    }

    localStorage.setItem('stardew_active_tab', tabId);
}

// Atualiza o estado de conclusão de cada card de conjunto
function updateBundleStatus() {
    const cards = document.querySelectorAll('.bundle-card');

    cards.forEach(card => {
        const type = card.getAttribute('data-type');
        const checkboxes = card.querySelectorAll('.item-checkbox');
        const statusSpan = card.querySelector('.bundle-status');
        
        let checkedCount = 0;
        checkboxes.forEach(cb => {
            if (cb.checked) checkedCount++;
        });

        let isCompleted = false;

        if (type === 'all') {
            isCompleted = (checkedCount === checkboxes.length && checkboxes.length > 0);
        } else if (type === 'custom') {
            const requiredCount = parseInt(card.getAttribute('data-required'), 10);
            isCompleted = (checkedCount >= requiredCount);
        }

        if (isCompleted) {
            card.classList.add('completed');
            statusSpan.textContent = 'Concluído';
        } else {
            card.classList.remove('completed');
            statusSpan.textContent = 'Pendente';
        }
    });

    // Se o usuário estiver na aba de Restantes ou Concluídos e marcar/desmarcar um item, 
    // atualiza a exibição em tempo real para não quebrar o filtro visual.
    const activeBtn = document.querySelector('.tab-btn.active');
    if (activeBtn) {
        const activeTabId = activeBtn.getAttribute('data-tab');
        if (activeTabId === 'restantes' || activeTabId === 'concluidos') {
            switchTab(activeTabId);
        }
    }
}

// Sincroniza dados duplicados entre as abas (se o mesmo item estiver em 'Todos' e na aba específica)
function syncDuplicateCheckboxes(itemKey, isChecked) {
    const targetCheckboxes = document.querySelectorAll(`input[data-item="${itemKey}"]`);
    targetCheckboxes.forEach(cb => {
        if (cb.checked !== isChecked) {
            cb.checked = isChecked;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const checkboxes = document.querySelectorAll('.item-checkbox');

    // Carrega o estado salvo dos checkboxes
    checkboxes.forEach(checkbox => {
        const itemKey = checkbox.getAttribute('data-item');
        const savedState = localStorage.getItem(itemKey);
        
        if (savedState === 'true') {
            checkbox.checked = true;
        }

        // Evento ao alterar o checkbox
        checkbox.addEventListener('change', () => {
            const isChecked = checkbox.checked;
            localStorage.setItem(itemKey, isChecked);
            syncDuplicateCheckboxes(itemKey, isChecked);
            updateBundleStatus();
        });
    });

    // Atualiza status inicial dos cards
    updateBundleStatus();

    // Carrega a aba padrão (Força 'todos' por padrão se nada estiver salvo)
    const savedTab = localStorage.getItem('stardew_active_tab');
    if (savedTab && (document.getElementById(savedTab) || savedTab === 'todos' || savedTab === 'restantes' || savedTab === 'concluidos')) {
        switchTab(savedTab);
    } else {
        switchTab('todos');
    }
});