// Função para alternar entre as abas das estações com salvamento próprio
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
        localStorage.setItem('stardew_season_tab', tabId);
    }

    // Reaplica o filtro atual assim que a aba muda
    const currentFilter = localStorage.getItem('stardew_season_filter') || 'all';
    filterContent(currentFilter, false);
}

// Função para filtrar o conteúdo dentro das estações (Tudo, Aniversários, Eventos, Peixes)
function filterContent(filterType, save = true) {
    const filterButtons = document.querySelectorAll('.content-filter-bar .filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));

    const activeFilterBtn = document.querySelector(`.content-filter-bar .filter-btn[data-filter="${filterType}"]`);
    if (activeFilterBtn) {
        activeFilterBtn.classList.add('active');
    }

    if (save) {
        localStorage.setItem('stardew_season_filter', filterType);
    }

    // Seleciona a seção de estação ativa e seus blocos internos
    const activeSection = document.querySelector('.season-section.active');
    if (!activeSection) return;

    const blocks = activeSection.querySelectorAll('.content-block');
    
    // Se estiver na aba de "Resumo", exibe normalmente
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

// Ao carregar a página, restaura a última estação e o último filtro utilizados
window.addEventListener('DOMContentLoaded', () => {
    const savedTab = localStorage.getItem('stardew_season_tab');
    const savedFilter = localStorage.getItem('stardew_season_filter');

    // Se houver uma aba salva, carrega ela; senão, pega a primeira disponível
    if (savedTab && document.getElementById(savedTab)) {
        switchTab(savedTab, false);
    } else {
        const firstTabBtn = document.querySelector('.wiki-nav .tab-btn');
        if (firstTabBtn) {
            switchTab(firstTabBtn.getAttribute('data-tab'), false);
        }
    }

    // Aplica o filtro salvo (ou 'all' por padrão)
    if (savedFilter) {
        filterContent(savedFilter, false);
    } else {
        filterContent('all', false);
    }
});