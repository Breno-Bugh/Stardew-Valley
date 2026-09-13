// Função para alternar entre as abas das estações com salvamento no localStorage
function switchTab(tabId, save = true) {
    const sections = document.querySelectorAll('.season-section');
    sections.forEach(sec => sec.classList.remove('active'));

    const buttons = document.querySelectorAll('.wiki-nav .tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const targetSection = document.getElementById(tabId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    const targetBtn = document.querySelector(`.wiki-nav .tab-btn[data-tab="${tabId}"]`);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }

    if (save) {
        localStorage.setItem('stardew_active_tab', tabId);
    }
}

// Função para filtrar o conteúdo dentro das estações (Tudo, Aniversários, Eventos, Peixes)
function filterContent(filterType) {
    const filterButtons = document.querySelectorAll('.content-filter-bar .filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));

    const activeFilterBtn = document.querySelector(`.content-filter-bar .filter-btn[data-filter="${filterType}"]`);
    if (activeFilterBtn) {
        activeFilterBtn.classList.add('active');
    }

    // Seleciona todas as seções de estações ativas e seus blocos internos
    const activeSection = document.querySelector('.season-section.active');
    if (!activeSection) return;

    const blocks = activeSection.querySelectorAll('.content-block');
    
    // Se estiver na aba de "Resumo", exibe normalmente (resumo não tem blocos divididos dessa forma)
    if (activeSection.id === 'resumo') return;

    blocks.forEach(block => {
        if (filterType === 'all') {
            block.style.display = 'block';
        } else if (filterType === 'birthdays' && block.classList.contains('birthdays-block')) {
            block.style.display = 'block';
        } else if (filterType === 'events' && block.classList.contains('events-block')) {
            block.style.display = 'block';
        } else if (filterType === 'fish' && block.classList.contains('fish-block')) {
            block.style.display = 'block';
        } else {
            block.style.display = 'none';
        }
    });
}

// Ao carregar a página, verifica se há aba salva no localStorage
window.addEventListener('DOMContentLoaded', () => {
    const savedTab = localStorage.getItem('stardew_active_tab');
    if (savedTab) {
        switchTab(savedTab, false);
    }
});